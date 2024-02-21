<?php

namespace App\Http\Controllers;

use App\Http\Requests\HoaDonRequest;
use App\Http\Resources\DonHangResource;
use App\Http\Resources\HoaDonResource;
use App\Http\Resources\SanPhamResource;
use App\Models\ChiTietHoaDon;
use App\Models\DonHang;
use App\Models\DuAn;
use App\Models\NhaCungCap;
use App\Models\PhieuThuChi;
use App\Models\SanPham;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;
use App\Models\HoaDon;
use App\Models\Kho;
use App\Models\KhachHang;

class HoaDonController extends Controller
{
    public function index(Request $request)
    {
        $request->loai == 'nhapkho' ? $loai = '0' : $loai = '1';
        $query = HoaDon::query()->whereNull('deleted_at')->where('loai', $loai)
            ->whereHas('created_by.don_vi', function ($query) {
                $query->where('id', Auth::user()->don_vi_id);
            })->orderBy('id', 'desc');
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

        if ($request->filled('search')) {
            $search = $request->search;
            $query->where(function ($query) use ($search) {
                $query->where('ma', 'like', "%{$search}%")
                    ->orWhereHas('nha_cung_cap', function ($query) use ($search) {
                        $query->where('ten', 'like', "%{$search}%");
                    })->orWhereHas('kho', function ($query) use ($search) {
                        $query->where('ten', 'like', "%{$search}%");
                    })->orWhereHas('khach_hang', function ($query) use ($search) {
                        $query->where('ten', 'like', "%{$search}%");
                    });
            });
        }

        $hoa_don_list = $query->paginate(100)->withQueryString();

        $hoa_don_list = HoaDonResource::collection($hoa_don_list);

        $san_pham_list = SanPhamResource::collection($san_pham_list);

        $don_hang_ban_list = DonHangResource::collection($don_hang_ban_list);

        $component = $loai == 0 ? 'NhapKho/Index' : 'XuatKho/Index';

        return Inertia::render($component,
            compact('hoa_don_list','du_an_list', 'nha_cung_cap_list', 'kho_list', 'san_pham_list', 'khach_hang_list', 'don_hang_ban_list'));
    }

    public function store(HoaDonRequest $request)
    {
       $data = $request->validated();
        $chi_tiet_hoa_don = $request->chi_tiet_hoa_don;

        $hoa_don = HoaDon::updateOrCreate(['id' => $data['id']], $data);

        foreach ($hoa_don->chi_tiet_hoa_don()->get() as $item) {
            $item->delete();
        }

        if (!empty($chi_tiet_hoa_don)) {
            foreach ($chi_tiet_hoa_don as $item) {
                $item['hoa_don_id'] = $hoa_don->id;
                $item['san_pham_id'] = $item['san_pham']['id'];
                unset($item['san_pham']);
                unset($item['thanh_tien']);
                ChiTietHoaDon::updateOrCreate(['id' => $item['id']], $item);
            }
        }

        $hoa_don->tong_tien = $hoa_don->tong_tien();
        $hoa_don->save();
    }

    public function print(Request $request)
    {
        $hoa_don = HoaDon::query()->whereNull('deleted_at')->where('id', $request->id)->first();
        $hoa_don = new HoaDonResource($hoa_don);
        return Inertia::render('NhapKho/Print', compact('hoa_don'));
    }


    public function delete(Request $request)
    {
        $hoa_don = HoaDon::find($request->id);
        $hoa_don->deleted_at = Carbon::now();
        $hoa_don->save();
    }
}
