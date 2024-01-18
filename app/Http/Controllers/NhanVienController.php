<?php

namespace App\Http\Controllers;

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
            ->where('don_vi_id', Auth::user()->don_vi_id)->orderBy('id', 'desc');

        if ($request->filled('search')) {
            $search = $request->search;
            $query->where(function ($query) use ($search) {
                $query->where('name', 'like', "%{$search}%")
                    ->orWhere('email', 'like', "%{$search}%");
            });
        }

        $nhan_vien_list = $query->paginate(10)->withQueryString();

        return Inertia::render('NhanVien/Index', compact('nhan_vien_list'));
    }

    public function store(NhanVienRequest $request)
    {
        $data = $request->validated();
        $data['don_vi_id'] = Auth::user()->don_vi_id;
        User::updateOrCreate(['id' => $data['id']], $data);
    }

    public function delete(Request $request)
    {
        $nhan_vien = User::find($request->id);
        $nhan_vien->deleted_at = Carbon::now();
        $nhan_vien->save();
    }
}
