<?php

namespace App\Http\Controllers;

use App\Http\Requests\DuAnRequest;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;
use App\Models\DuAn;
use App\Models\User;
use App\Models\FileDuAn;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;


class DuAnController extends Controller
{
    public function index(Request $request)
    {
        $query = DuAn::with(['parent','nhan_vien', 'files'])->whereNull('deleted_at')
            ->whereHas('created_by.don_vi', function ($query) {
                $query->where('id', Auth::user()->don_vi_id);
            })->orderBy('id', 'asc');
        $nhan_vien_list = User::query()->where('role', 1)->where('don_vi_id', Auth::user()->don_vi_id)->get();

        if ($request->filled('search')) {
            $search = $request->search;
            $query= $query->where(function ($query) use ($search) {
                $query->where('parent_id', null)
                    ->where('ten', 'like', "%{$search}%")
                    ->orWhereHas('nhan_vien', function ($q) use ($search) {
                        $q->where('name', 'like', "%{$search}%");
                    });
            });
        }

        $du_an_list = $query->get()->toTree();

        return Inertia::render('DuAn/Index', compact('du_an_list', 'nhan_vien_list'));
    }

    public function detail(Request $request)
    {
        $query = DuAn::with(['nhan_vien', 'files','binh_luan.nguoi_dung'])->whereNull('deleted_at')
            ->whereHas('created_by.don_vi', function ($query) {
                $query->where('id', Auth::user()->don_vi_id);
            })
            ->orderBy('id', 'desc');
        $du_an = $query->get()->toTree();
        $du_an_id = $request->id;
        $nhan_vien_list = User::query()->where('role', 1)->where('don_vi_id', Auth::user()->don_vi_id)->get();

        return Inertia::render('DuAn/BieuDo', compact('du_an', 'du_an_id', 'nhan_vien_list'));
    }

    public function store(DuAnRequest $request)
    {
        $data = $request->validated();

        unset($data['files']);


        $du_an = DuAn::updateOrCreate(['id' => $data['id']], $data);
        if (isset($data['parent_id'])) {
            $parent = DuAn::find($data['parent_id']);
            if($parent) {
                $du_an->appendToNode($parent)->save();
            }
        }

        if ($request->hasFile('files')) {
            $files = $request->file('files');
            foreach ($files as $file) {
                $file_name = time().'_'.Str::random(10).'_'.$file->getClientOriginalName();
                $file->move(public_path('uploads/du_an'), $file_name);
                $file_du_an = new FileDuAn();
                $file_du_an->du_an_id = $du_an->id;
                $file_du_an->ten = $file_name;
                $file_du_an->save();
            }
        }
    }

    public function deleteFile(Request $request)
    {
        $file = FileDuAn::find($request->id);
        $file->delete();
    }

    public function delete(Request $request)
    {
        $du_an = DuAn::find($request->id);
        $du_an->deleted_at = Carbon::now();
        $du_an->save();
    }
}
