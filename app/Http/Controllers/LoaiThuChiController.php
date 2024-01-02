<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Http\Requests\LoaiThuChiRequest;
use App\Models\LoaiThuChi;
use Carbon\Carbon;

class LoaiThuChiController extends Controller
{
    public function index(Request $request)
    {
        $query = LoaiThuChi::query()->whereNull('deleted_at');

        if ($request->filled('search')) {
            $search = $request->search;
            $query->where(function ($query) use ($search) {
                $query->where('ten', 'like', "%{$search}%");
            });
        }

        $loai_thu_chi_list = $query->paginate(10)->withQueryString();

        return Inertia::render('LoaiThuChi/Index', compact('loai_thu_chi_list'));
    }

    public function store(LoaiThuChiRequest $request)
    {
        $data = $request->validated();
        LoaiThuChi::updateOrCreate(['id' => $data['id']], $data);
    }

    public function delete(Request $request)
    {
        $LoaiThuChi = LoaiThuChi::find($request->id);
        $LoaiThuChi->deleted_at = Carbon::now();
        $LoaiThuChi->save();
    }
}
