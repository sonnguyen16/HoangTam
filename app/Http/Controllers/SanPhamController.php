<?php

namespace App\Http\Controllers;

use App\Http\Requests\SanPhamRequest;
use App\Http\Resources\SanPhamResource;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\SanPham;
use App\Models\DonViTinh;

class SanPhamController extends Controller
{
    public function index(Request $request)
    {
        $query = SanPham::query()->whereNull('deleted_at');
        $don_vi_tinh_list = DonViTinh::query()->whereNull('deleted_at')->get();

        if ($request->filled('search')) {
            $search = $request->search;
            $query->where(function ($query) use ($search) {
                $query->where('ten', 'like', "%{$search}%");
            });
        }

        $san_pham_list = $query->paginate(10)->withQueryString();
        $san_pham_list = SanPhamResource::collection($san_pham_list);

        return Inertia::render('SanPham/Index', compact('san_pham_list', 'don_vi_tinh_list'));
    }

    public function store(SanPhamRequest $request)
    {
        $data = $request->validated();
        if($request->has('id')  && $request->filled('id')){
            $san_pham = SanPham::find($request->id);
            $san_pham->update($data);
            return;
        }
        SanPham::create($data);
    }

    public function delete(Request $request)
    {
        $san_pham = SanPham::find($request->id);
        $san_pham->deleted_at = Carbon::now();
        $san_pham->save();
    }
}
