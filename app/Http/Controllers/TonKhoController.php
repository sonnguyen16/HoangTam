<?php

namespace App\Http\Controllers;

use App\Http\Requests\TonKhoRequest;
use App\Models\DinhMuc;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;
use App\Models\TonKho;
use App\Models\DonViTinh;
use App\Models\Kho;
use App\Models\SanPham;

class TonKhoController extends Controller
{
    public function index(Request $request)
    {
        $query = TonKho::with(['kho','san_pham'])->whereNull('deleted_at')
            ->whereHas('created_by.don_vi', function ($query) {
            $query->where('id', Auth::user()->don_vi_id);
        })->orderBy('id', 'desc');
        $kho_list = Kho::query()->whereNull('deleted_at')->get();
        $san_pham_list = SanPham::query()->whereNull('deleted_at')->get();


        if ($request->filled('search')) {
            $search = $request->search;
            $query->where(function ($query) use ($search) {
                $query->whereHas('san_pham', function ($query) use ($search) {
                    $query->where('ten', 'like', "%{$search}%");
                    })->orWhereHas('kho', function ($query) use ($search) {
                        $query->where('ten', 'like', "%{$search}%");
                });
            });
        }

        $ton_kho_list = $query->paginate(10)->withQueryString();

        return Inertia::render('TonKho/Index', compact('ton_kho_list', 'kho_list', 'san_pham_list'));
    }

    public function store(TonKhoRequest $request)
    {
        $data = $request->validated();
        TonKho::updateOrCreate(['id' => $data['id']], $data);
    }

    public function delete(Request $request)
    {
        $ton_kho = TonKho::find($request->id);
        $ton_kho->deleted_at = Carbon::now();
        $ton_kho->save();
    }
}
