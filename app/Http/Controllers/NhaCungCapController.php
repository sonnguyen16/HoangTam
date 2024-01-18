<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;
use App\Http\Requests\NhaCungCapRequest;
use App\Models\NhaCungCap;
use Carbon\Carbon;

class NhaCungCapController extends Controller
{
    public function index(Request $request)
    {
        $query = NhaCungCap::query()->whereNull('deleted_at')
            ->whereHas('created_by.don_vi', function ($query) {
                $query->where('id', Auth::user()->don_vi_id);
            })->orderBy('id', 'desc');

        if ($request->filled('search')) {
            $search = $request->search;
            $query->where(function ($query) use ($search) {
                $query->where('ten', 'like', "%{$search}%")
                    ->orWhere('dia_chi', 'like', "%{$search}%")
                    ->orWhere('dien_thoai', 'like', "%{$search}%");
            });
        }

        $nha_cung_cap_list = $query->paginate(10)->withQueryString();

        return Inertia::render('NhaCungCap/Index', compact('nha_cung_cap_list'));
    }

    public function store(NhaCungCapRequest $request)
    {
        $data = $request->validated();
        NhaCungCap::updateOrCreate(['id' => $data['id']], $data);
    }

    public function delete(Request $request)
    {
        $nha_cung_cap = NhaCungCap::find($request->id);
        $nha_cung_cap->deleted_at = Carbon::now();
        $nha_cung_cap->save();
    }
}
