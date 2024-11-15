<?php

namespace App\Http\Controllers;

use App\Http\Requests\KhachHangRequest;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;
use App\Models\KhachHang;

class KhachHangController extends Controller
{
    public function index(Request $request)
    {
        $query = KhachHang::query()->whereNull('deleted_at')
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

        $khach_hang_list = $query->paginate(50)->withQueryString();

        return Inertia::render('KhachHang/Index', compact('khach_hang_list'));
    }

    public function store(KhachHangRequest $request)
    {
        $data = $request->validated();
        KhachHang::updateOrCreate(['id' => $data['id']], $data);
    }

    public function delete(Request $request)
    {
        $khach_hang = KhachHang::find($request->id);
        $khach_hang->deleted_at = Carbon::now();
        $khach_hang->save();
    }
}
