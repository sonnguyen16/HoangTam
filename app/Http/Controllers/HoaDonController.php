<?php

namespace App\Http\Controllers;

use App\Http\Requests\HoaDonRequest;
use App\Http\Resources\DonHangResource;
use App\Http\Resources\HoaDonResource;
use App\Http\Resources\SanPhamResource;
use App\Models\ChiTietHoaDon;
use App\Models\DonHang;
use App\Models\NhaCungCap;
use App\Models\SanPham;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\HoaDon;
use App\Models\Kho;
use App\Models\KhachHang;

class HoaDonController extends Controller
{
    public function index(Request $request, $loai = null)
    {
        $query = HoaDon::query()->whereNull('deleted_at')->where('loai', $loai);
        $nha_cung_cap_list = NhaCungCap::query()->whereNull('deleted_at')->get();
        $khach_hang_list = KhachHang::query()->whereNull('deleted_at')->get();
        $kho_list = Kho::query()->whereNull('deleted_at')->get();
        $san_pham_list = SanPham::query()->whereNull('deleted_at')->get();
        $don_hang_ban_list = DonHang::query()->whereNull('deleted_at')->where('loai', 1)->get();

        if ($request->filled('search')) {
            $search = $request->search;
            $query->where(function ($query) use ($search) {
                $query->where('ma', 'like', "%{$search}%");
            });
        }

        $hoa_don_list = $query->paginate(10)->withQueryString();

        $hoa_don_list = HoaDonResource::collection($hoa_don_list);

        $san_pham_list = SanPhamResource::collection($san_pham_list);

        $don_hang_ban_list = DonHangResource::collection($don_hang_ban_list);

        $component = $loai == 0 ? 'NhapKho/Index' : 'XuatKho/Index';

        return Inertia::render($component,
            compact('hoa_don_list', 'nha_cung_cap_list', 'kho_list', 'san_pham_list', 'khach_hang_list', 'don_hang_ban_list'));
    }

    public function store(HoaDonRequest $request)
    {
        $data = $request->validated();
        $chi_tiet_hoa_don = $request->chi_tiet_hoa_don;

        $hoa_don = HoaDon::updateOrCreate(['id' => $data['id']], $data);

        foreach ($hoa_don->chi_tiet_hoa_don() as $item) {
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
    }


    public function delete(Request $request)
    {
        $hoa_don = HoaDon::find($request->id);
        $hoa_don->deleted_at = Carbon::now();
        $hoa_don->save();
    }
}
