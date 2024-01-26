<?php

namespace App\Http\Controllers;

use App\Http\Resources\NhaCungCapResource;
use App\Models\NhaCungCap;
use App\Models\KhachHang;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class BaoCaoCongNoController extends Controller
{
    public function index(Request $request)
    {
        $query = NhaCungCap::query()->whereNull('deleted_at')
            ->whereHas('created_by.don_vi', function ($query) {
                $query->where('id', Auth::user()->don_vi_id);
            })->orderBy('id', 'desc');

        if ($request->filled('search')) {
            $search = $request->search;
            $query->where(function ($query) use ($search) {
                $query->where('ten', 'like', "%{$search}%")
                    ->orWhere('dia_chi', 'like', "%{$search}%")
                    ->orWhere('dien_thoai', 'like', "%{$search}%");
            });
        }

        $nha_cung_cap_list = $query->paginate(100)->withQueryString();

        $nha_cung_cap_list = NhaCungCapResource::collection($nha_cung_cap_list);

        return Inertia::render('BaoCaoCongNo/Index', compact('nha_cung_cap_list'));
    }
    public function khachhang(Request $request)
    {
        $query = KhachHang::query()->whereNull('deleted_at')
            ->whereHas('created_by.don_vi', function ($query) {
                $query->where('id', Auth::user()->don_vi_id);
            })->orderBy('id', 'desc');

        if ($request->filled('search')) {
            $search = $request->search;
            $query->where(function ($query) use ($search) {
                $query->where('ten', 'like', "%{$search}%")
                    ->orWhere('dia_chi', 'like', "%{$search}%")
                    ->orWhere('dien_thoai', 'like', "%{$search}%");
            });
        }

        $nha_cung_cap_list = $query->paginate(100)->withQueryString();

        $nha_cung_cap_list = NhaCungCapResource::collection($nha_cung_cap_list);

        return Inertia::render('BaoCaoCongNo/KhachHang', compact('nha_cung_cap_list'));
    }
}
