<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Http\Requests\DonViTinhRequest;
use App\Models\DonViTinh;
use Carbon\Carbon;

class DonViTinhController extends Controller
{
    public function index(Request $request)
    {
        $query = DonViTinh::query()->whereNull('deleted_at');

        if ($request->filled('search')) {
            $search = $request->search;
            $query->where(function ($query) use ($search) {
                $query->where('ten', 'like', "%{$search}%");
            });
        }

        $don_vi_tinh_list = $query->paginate(10)->withQueryString();

        return Inertia::render('DonViTinh/Index', compact('don_vi_tinh_list'));
    }

    public function store(DonViTinhRequest $request)
    {
        $data = $request->validated();
        if($request->has('id')  && $request->filled('id')){
            $don_vi_tinh = DonViTinh::find($request->id);
            $don_vi_tinh->update($data);
            return;
        }
        DonViTinh::create($data);
    }

    public function delete(Request $request)
    {
        $don_vi_tinh = DonViTinh::find($request->id);
        $don_vi_tinh->deleted_at = Carbon::now();
        $don_vi_tinh->save();
    }
}
