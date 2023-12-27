<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Http\Requests\LoaiSanPhamRequest;
use App\Models\LoaiSanPham;
use Carbon\Carbon;

class LoaiSanPhamController extends Controller
{
    public function index(Request $request)
    {
        $query = LoaiSanPham::query()->whereNull('deleted_at');

        if ($request->filled('search')) {
            $search = $request->search;
            $query->where(function ($query) use ($search) {
                $query->where('ten', 'like', "%{$search}%");
            });
        }

        $loai_san_pham_list = $query->paginate(10)->withQueryString();

        return Inertia::render('LoaiSanPham/Index', compact('loai_san_pham_list'));
    }

    public function store(LoaiSanPhamRequest $request)
    {
        $data = $request->validated();
        LoaiSanPham::updateOrCreate(['id' => $data['id']], $data);
    }

    public function delete(Request $request)
    {
        $LoaiSanPham = LoaiSanPham::find($request->id);
        $LoaiSanPham->deleted_at = Carbon::now();
        $LoaiSanPham->save();
    }
}
