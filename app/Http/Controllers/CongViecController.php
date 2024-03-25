<?php

namespace App\Http\Controllers;

use App\Models\DuAn;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class CongViecController extends Controller
{
    public function index(Request $request)
    {
        $query = DuAn::with(['nhan_vien', 'files','binh_luan.nguoi_dung','nguoi_theo_doi.user'])->whereNull('deleted_at')
            ->whereHas('nhan_vien', function ($query) {
                $query->where('id', Auth::user()->id);
            })->orWhereHas('nguoi_theo_doi', function ($query) {
                $query->where('user_id', Auth::user()->id);
            });
        $nhan_vien_list = User::query()->where('role', 1)->where('don_vi_id', Auth::user()->don_vi_id)->get();

        if ($request->filled('search')) {
            $search = $request->search;
            $query = $query->where(function ($query) use ($search) {
                $query->where('ten', 'like', "%{$search}%")
                    ->orWhere('mo_ta', 'like', "%{$search}%")
                    ->orWhereHas('nhan_vien', function ($q) use ($search) {
                        $q->where('name', 'like', "%{$search}%");
                    });
            });
        }

        $du_an_list = $query->paginate(5);

        return Inertia::render('CongViec/Index', compact('du_an_list', 'nhan_vien_list'));
    }
}
