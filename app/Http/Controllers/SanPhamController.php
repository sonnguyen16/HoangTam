<?php

namespace App\Http\Controllers;

use App\Http\Requests\SanPhamRequest;
use App\Http\Resources\SanPhamResource;
use App\Models\DinhMuc;
use App\Models\LoaiSanPham;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;
use App\Models\SanPham;
use App\Models\DonViTinh;

class SanPhamController extends Controller
{
    public function index(Request $request)
    {
        $query = SanPham::query()->whereNull('deleted_at')
            ->whereHas('created_by.don_vi', function ($query) {
                $query->where('id', Auth::user()->don_vi_id);
            })->orderBy('id', 'desc');
        $don_vi_tinh_list = DonViTinh::query()->whereNull('deleted_at')
            ->whereHas('created_by.don_vi', function ($query) {
                $query->where('id', Auth::user()->don_vi_id);
            })->orderBy('id', 'desc')->get();
        $loai_san_pham_list = LoaiSanPham::query()->whereNull('deleted_at')
            ->whereHas('created_by.don_vi', function ($query) {
                $query->where('id', Auth::user()->don_vi_id);
            })->orderBy('id', 'desc')->get();

        if ($request->filled('search')) {
            $search = $request->search;
            $query->where(function ($query) use ($search) {
                $query->where('ten', 'like', "%{$search}%")
                    ->orWhere('ma', 'like', "%{$search}%");
            });
        }

        $san_pham_list = $query->with('loai_san_pham', 'don_vi_tinh', 'dinh_muc.san_pham.don_vi_tinh')->paginate(500)->withQueryString();

        return Inertia::render('SanPham/Index', compact('san_pham_list', 'don_vi_tinh_list', 'loai_san_pham_list'));
    }

    public function store(SanPhamRequest $request)
    {
        $data = $request->validated();
        $sanpham = SanPham::updateOrCreate(['id' => $data['id']], $data);

        $dinh_muc = $request->dinh_muc;

        if (!empty($dinh_muc)) {
            foreach ($dinh_muc as $item) {
                $item['san_pham_id'] = $sanpham->id;
                $item['nguyen_lieu_id'] = $item['san_pham']['id'];
                unset($item['san_pham']);
                unset($item['don_vi_tinh']);
                DinhMuc::updateOrCreate(['id' => $item['id']], $item);
            }
        }
    }

    public function delete(Request $request)
    {
        $san_pham = SanPham::find($request->id);
        $san_pham->deleted_at = Carbon::now();
        $san_pham->save();
    }
}
