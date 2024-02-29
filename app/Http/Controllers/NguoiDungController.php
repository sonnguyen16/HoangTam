<?php

namespace App\Http\Controllers;

use App\Models\DonVi;
use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Http\Requests\NguoiDungRequest;
use App\Models\User;
use Carbon\Carbon;

class NguoiDungController extends Controller
{
    public function index(Request $request)
    {
        $query = User::query()->whereNull('deleted_at')->where('role', 1)->with('don_vi');
        $don_vi_list = DonVi::query()->whereNull('deleted_at')->get();

        if ($request->filled('search')) {
            $search = $request->search;
            $query->where(function ($query) use ($search) {
                $query->where('name', 'like', "%{$search}%")
                    ->orWhere('email', 'like', "%{$search}%");
            });
        }

        $nguoi_dung_list = $query->paginate(20)->withQueryString();

        return Inertia::render('NguoiDung/Index', compact('nguoi_dung_list', 'don_vi_list'));
    }

    public function store(NguoiDungRequest $request)
    {
        $data = $request->validated();
        User::updateOrCreate(['id' => $data['id']], $data);
    }

    public function delete(Request $request)
    {
        $nguoi_dung = User::find($request->id);
        $nguoi_dung->deleted_at = Carbon::now();
        $nguoi_dung->save();
    }
}
