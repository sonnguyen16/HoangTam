<?php

namespace App\Http\Controllers;

use App\Http\Requests\DonHangRequest;
use App\Http\Resources\DonHangResource;
use App\Http\Resources\HoaDonResource;
use App\Http\Resources\SanPhamResource;
use App\Models\HoaDon;
use App\Models\NhaCungCap;
use App\Models\SanPham;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;
use App\Models\DonHang;
use App\Models\KhachHang;
use App\Models\ChiTietDonHang;

class DonHangController extends Controller
{
    public function index(Request $request, $loai = null)
    {
        $request->loai == 'donmua' ? $loai = '0' : $loai = '1';
        $query = DonHang::query()->whereNull('deleted_at')->where('loai', $loai)
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
        $san_pham_list = SanPham::query()->whereNull('deleted_at')
            ->whereHas('created_by.don_vi', function ($query) {
                $query->where('id', Auth::user()->don_vi_id);
            })->get();

        if ($request->filled('search')) {
            $search = $request->search;
            $query->where(function ($query) use ($search) {
                $query->where('ma', 'like', "%{$search}%")
                    ->orWhereHas('nha_cung_cap', function ($query) use ($search) {
                        $query->where('ten', 'like', "%{$search}%");
                    })->orWhereHas('khach_hang', function ($query) use ($search) {
                        $query->where('ten', 'like', "%{$search}%");
                    });
            });
        }

        $don_hang_list = $query->paginate(10)->withQueryString();

        $san_pham_list = SanPhamResource::collection($san_pham_list);

        $don_hang_list = DonHangResource::collection($don_hang_list);

        $component = $loai == 0 ? 'DonMua/Index' : 'DonBan/Index';

        return Inertia::render($component,
            compact('don_hang_list', 'nha_cung_cap_list', 'san_pham_list', 'khach_hang_list'));
    }

    public function store(DonHangRequest $request)
    {
        $data = $request->validated();
        $chi_tiet_don_hang = $request->chi_tiet_don_hang;

        $don_hang = DonHang::updateOrCreate(['id' => $data['id']], $data);

        foreach ($don_hang->chi_tiet_don_hang() as $item) {
            $item->delete();
        }

        if (!empty($chi_tiet_don_hang)) {
            foreach ($chi_tiet_don_hang as $item) {
                $item['don_hang_id'] = $don_hang->id;
                $item['san_pham_id'] = $item['san_pham']['id'];
                unset($item['san_pham']);
                unset($item['thanh_tien']);
                ChiTietDonHang::updateOrCreate(['id' => $item['id']], $item);
            }
        }
    }

    public function print(Request $request)
    {
        $don_hang = DonHang::query()->whereNull('deleted_at')->where('id', $request->id)->first();
        $don_hang = new DonHangResource($don_hang);
        return Inertia::render('DonMua/Print', compact('don_hang'));
    }


    public function delete(Request $request)
    {
        $don_hang = DonHang::find($request->id);
        $don_hang->deleted_at = Carbon::now();
        $don_hang->save();
    }
}
