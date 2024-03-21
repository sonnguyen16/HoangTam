<?php

namespace App\Http\Controllers;

use App\Models\FileDuAn;
use App\Models\NguoiTheoDoi;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Str;
use Inertia\Inertia;
use App\Http\Requests\DeXuatRequest;
use App\Models\DeXuat;
use Carbon\Carbon;

class DeXuatController extends Controller
{
    public function index(Request $request)
    {
        $query = DeXuat::query()->whereNull('deleted_at')
            ->whereHas('created_by',function ($query) {
                $query->where('id', Auth::user()->id);
            })->orWhereHas('nguoi_theo_doi', function ($query) {
                $query->where('user_id', Auth::user()->id);
            })->orWhere('nguoi_duyet', Auth::user()->id)
            ->with('created_by', 'nguoi_duyet', 'nguoi_theo_doi.user','files', 'binh_luan.nguoi_dung')
            ->orderBy('trang_thai', 'asc');

        $nhan_vien_list = User::query()->whereNull('deleted_at')->where('role', 1)
            ->where('don_vi_id', Auth::user()->don_vi_id)
            ->get();


        if ($request->filled('search')) {
            $search = $request->search;
            $query->where(function ($query) use ($search) {
                $query->where('ten', 'like', "%{$search}%")
                    ->orWhere('noi_dung', 'like', "%{$search}%");
            });
        }

        $de_xuat_list = $query->paginate(5)->withQueryString();

        return Inertia::render('DeXuat/Index', compact('de_xuat_list', 'nhan_vien_list'));
    }

    public function store(DeXuatRequest $request)
    {
        $data = $request->validated();
        unset($data['files']);

        $dexuat = DeXuat::updateOrCreate(['id' => $data['id']], $data);
        if ($request->hasFile('files')) {
            $files = $request->file('files');
            foreach ($files as $file) {
                $file_name = time().'_'.Str::random(10).'_'.$file->getClientOriginalName();
                $file->move(public_path('uploads/de_xuat'), $file_name);
                FileDuAn::create([
                    'de_xuat_id' => $dexuat->id,
                    'ten' => $file_name,
                ]);
            }
        }

        if($request->filled('nguoi_theo_doi')){
            foreach ($request->nguoi_theo_doi as $user){
                $nguoi_theo_doi = NguoiTheoDoi::where('de_xuat_id', $dexuat->id)->where('user_id', $user)->first();
                if(!$nguoi_theo_doi)
                    NguoiTheoDoi::create([
                        'de_xuat_id' => $dexuat->id,
                        'user_id' => $user
                    ]);
            }
        }
    }
    public function xoaNguoiTheoDoi(Request $request)
    {
        $nguoi_theo_doi = NguoiTheoDoi::find($request->id);
        $nguoi_theo_doi->delete();
    }


    public function delete(Request $request)
    {
        $de_xuat = DeXuat::find($request->id);
        $de_xuat->deleted_at = Carbon::now();
        $de_xuat->save();
    }
}
