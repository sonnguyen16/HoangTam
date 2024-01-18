<?php

namespace App\Http\Controllers;

use App\Http\Resources\SanPhamResource;
use App\Models\DonViTinh;
use App\Models\LoaiSanPham;
use App\Models\SanPham;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class BaoCaoTonKhoController extends Controller
{
    public function index(Request $request)
    {
        $query = SanPham::query()->whereNull('deleted_at')
            ->whereHas('created_by.don_vi', function ($query) {
                $query->where('id', Auth::user()->don_vi_id);
            })->orderBy('id', 'desc');

        if ($request->filled('search')) {
            $search = $request->search;
            $query->where(function ($query) use ($search) {
                $query->where('ten', 'like', "%{$search}%")
                    ->orWhere('ma', 'like', "%{$search}%");
            });
        }

        $san_pham_list = $query->paginate(10)->withQueryString();
        $san_pham_list = SanPhamResource::collection($san_pham_list);

        return Inertia::render('BaoCaoTonKho/Index', compact('san_pham_list'));
    }
}
