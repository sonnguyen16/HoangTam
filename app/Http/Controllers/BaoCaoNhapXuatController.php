<?php

namespace App\Http\Controllers;

use App\Models\HoaDon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;
use App\Http\Resources\HoaDonResource;

class BaoCaoNhapXuatController extends Controller
{
    public function index(Request $request)
    {
        $loai = $request->loai == 'nhap' ? '0' : '1';
        $query = HoaDon::query()->where('deleted_at', null)
            ->where('loai', $loai)
            ->whereHas('created_by.don_vi', function ($query) {
                $query->where('id', Auth::user()->don_vi_id);
            })->orderBy('ngay', 'desc');

        if($request->filled('ngay_bat_dau')){
            $query->where(function ($query) use ($request) {
                $query->where('ngay', '>=', $request->ngay_bat_dau);
            });
        }

        if($request->filled('ngay_ket_thuc')){
            $query->where(function ($query) use ($request) {
                $query->where('ngay', '<=', $request->ngay_ket_thuc);
            });
        }

        if($request->filled('search')){
            $query->where(function ($query) use ($request) {
                $query->where('ma', 'like', "%{$request->search}%")
                    ->orWhereHas('nha_cung_cap', function ($query) use ($request) {
                        $query->where('ten', 'like', "%{$request->search}%");
                    })->orWhereHas('khach_hang', function ($query) use ($request) {
                        $query->where('ten', 'like', "%{$request->search}%");
                    })->orWhereHas('chi_tiet_hoa_don', function ($query) use ($request) {
                        $query->whereHas('san_pham', function ($query) use ($request) {
                            $query->where('ten', 'like', "%{$request->search}%")
                                ->orWhere('ma', 'like', "%{$request->search}%");
                        });
                    });
            });
        }

        $hoa_don_list = $query->paginate(10)->withQueryString();
        $hoa_don_list = HoaDonResource::collection($hoa_don_list);

        $component = $loai == 0 ? 'BaoCaoNhap/Index' : 'BaoCaoXuat/Index';
        return Inertia::render($component, compact('hoa_don_list'));
    }
}
