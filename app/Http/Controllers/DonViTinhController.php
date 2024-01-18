<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;
use App\Http\Requests\DonViTinhRequest;
use App\Models\DonViTinh;
use Carbon\Carbon;

class DonViTinhController extends Controller
{
    public function index(Request $request)
    {
        $query = DonViTinh::query()->whereNull('deleted_at')
            ->whereHas('created_by.don_vi', function ($query) {
                $query->where('id', Auth::user()->don_vi_id);
            })->orderBy('id', 'desc');

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
        DonViTinh::updateOrCreate(['id' => $data['id']], $data);
    }

    public function delete(Request $request)
    {
        $don_vi_tinh = DonViTinh::find($request->id);
        $don_vi_tinh->deleted_at = Carbon::now();
        $don_vi_tinh->save();
    }
}
