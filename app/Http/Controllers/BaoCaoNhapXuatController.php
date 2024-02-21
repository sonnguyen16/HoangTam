<?php

namespace App\Http\Controllers;

use App\Models\HoaDon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;
use App\Http\Resources\HoaDonResource;
use App\Models\NhaCungCap;
use App\Models\KhachHang;
use App\Models\Kho;
use App\Models\SanPham;
use App\Models\DuAn;
use App\Http\Resources\SanPhamResource;
use App\Http\Resources\DonHangResource;
use App\Models\DonHang;

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

        $nha_cung_cap_list = NhaCungCap::query()->whereNull('deleted_at')
            ->whereHas('created_by.don_vi', function ($query) {
                $query->where('id', Auth::user()->don_vi_id);
            })->get();
        $khach_hang_list = KhachHang::query()->whereNull('deleted_at')
            ->whereHas('created_by.don_vi', function ($query) {
                $query->where('id', Auth::user()->don_vi_id);
            })->get();
        $kho_list = Kho::query()->whereNull('deleted_at')
            ->whereHas('created_by.don_vi', function ($query) {
                $query->where('id', Auth::user()->don_vi_id);
            })->get();
        $san_pham_list = SanPham::query()->whereNull('deleted_at')
            ->whereHas('created_by.don_vi', function ($query) {
                $query->where('id', Auth::user()->don_vi_id);
            })->get();
        $du_an_list = DuAn::query()->whereNull('parent_id')->whereNull('deleted_at')
            ->whereHas('created_by.don_vi', function ($query) {
                $query->where('id', Auth::user()->don_vi_id);
            })->get();
        $don_hang_ban_list = DonHang::query()->whereNull('deleted_at')->where('loai', 1)
            ->whereHas('created_by.don_vi', function ($query) {
                $query->where('id', Auth::user()->don_vi_id);
            })->paginate(10);

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

        $hoa_don_list = $query->paginate(50)->withQueryString();
        $hoa_don_list = HoaDonResource::collection($hoa_don_list);
        $san_pham_list = SanPhamResource::collection($san_pham_list);

        $don_hang_ban_list = DonHangResource::collection($don_hang_ban_list);

        $component = $loai == 0 ? 'BaoCaoNhap/Index' : 'BaoCaoXuat/Index';
        return Inertia::render($component, compact('hoa_don_list', 'du_an_list', 'nha_cung_cap_list', 'kho_list', 'san_pham_list', 'khach_hang_list', 'don_hang_ban_list'));
    }
}
