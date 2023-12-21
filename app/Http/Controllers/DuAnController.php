<?php

namespace App\Http\Controllers;

use App\Http\Requests\DuAnRequest;
use Carbon\Carbon;
use Illuminate\Http\Request;
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
        $query = DuAn::with(['nhan_vien', 'files'])->whereNull('deleted_at');
        $nhan_vien_list = User::query()->where('role', 1)->get();

        if ($request->filled('search')) {
            $search = $request->search;
            $query->where(function ($query) use ($search) {
                $query->where('ten', 'like', "%{$search}%")
                    ->orWhereHas('nhan_vien', function ($q) use ($search) {
                        $q->where('name', 'like', "%{$search}%");
                    });
            });
        }

        $du_an_list = $query->get()->toTree();

        return Inertia::render('DuAn/Index', compact('du_an_list', 'nhan_vien_list'));
    }

    public function store(DuAnRequest $request)
    {
        $data = $request->validated();

        if ($request->hasFile('files')) {
            $files = $request->file('files');
            foreach ($files as $file) {
                $file_name = time().'_'.Str::random(10).'_'.$file->getClientOriginalName();
                $file->move(public_path('uploads'), $file_name);
                $file_du_an = new FileDuAn();
                $file_du_an->du_an_id = $data['id'];
                $file_du_an->ten = $file_name;
                $file_du_an->save();
            }
        }
        unset($data['files']);
        $duan = DuAn::updateOrCreate(['id' => $data['id']], $data);
        if (isset($data['parent_id'])) {
            $parent = DuAn::find($data['parent_id']);
            if($parent) {
                $duan->appendToNode($parent)->save();
            }
        }
    }

    public function delete(Request $request)
    {
        $du_an = DuAn::find($request->id);
        $du_an->deleted_at = Carbon::now();
        $du_an->save();
    }
}
