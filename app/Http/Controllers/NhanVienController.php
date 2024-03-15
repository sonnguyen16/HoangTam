<?php

namespace App\Http\Controllers;

use App\Models\PhongBan;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;
use App\Http\Requests\NhanVienRequest;
use App\Models\User;
use Carbon\Carbon;

class NhanVienController extends Controller
{
    public function index(Request $request)
    {
        $query = User::query()->whereNull('deleted_at')->where('role', 1)
            ->where('don_vi_id', Auth::user()->don_vi_id)
            ->with('phong_ban')
            ->orderBy('id', 'desc');

        $phong_ban_list = PhongBan::query()->whereNull('deleted_at')
            ->whereHas('created_by.don_vi',function ($query){
                $query->where('id', Auth::user()->don_vi_id);
            })->get();

        if ($request->filled('search')) {
            $search = $request->search;
            $query->where(function ($query) use ($search) {
                $query->where('name', 'like', "%{$search}%")
                    ->orWhere('email', 'like', "%{$search}%");
            });
        }

        $nhan_vien_list = $query->paginate(20)->withQueryString();

        return Inertia::render('NhanVien/Index', compact('nhan_vien_list', 'phong_ban_list'));
    }

    public function store(NhanVienRequest $request)
    {
        $data = $request->validated();
        $data['don_vi_id'] = Auth::user()->don_vi_id;
        if($request->hasFile('hinh_anh')){
            $file = $request->file('hinh_anh');
            $file_name = time() . '.' . $file->getClientOriginalExtension();
            $file->move('uploads/nhan_vien', $file_name);
            $data['hinh_anh'] = $file_name;
        }
        User::updateOrCreate(['id' => $data['id']], $data);
    }

    public function delete(Request $request)
    {
        $nhan_vien = User::find($request->id);
        $nhan_vien->deleted_at = Carbon::now();
        $nhan_vien->save();
    }
}
