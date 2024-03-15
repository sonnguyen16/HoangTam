<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;
use App\Http\Requests\PhongBanRequest;
use App\Models\PhongBan;
use Carbon\Carbon;

class PhongBanController extends Controller
{
    public function index(Request $request)
    {
        $query = PhongBan::query()->whereNull('deleted_at')
            ->whereHas('created_by.don_vi', function ($query) {
                $query->where('id', Auth::user()->don_vi_id);
            })->orderBy('id', 'desc');

        if ($request->filled('search')) {
            $search = $request->search;
            $query->where(function ($query) use ($search) {
                $query->where('ten', 'like', "%{$search}%");
            });
        }

        $phong_ban_list = $query->paginate(50)->withQueryString();

        return Inertia::render('PhongBan/Index', compact('phong_ban_list'));
    }

    public function store(PhongBanRequest $request)
    {
        $data = $request->validated();
        PhongBan::updateOrCreate(['id' => $data['id']], $data);
    }

    public function delete(Request $request)
    {
        $phong_ban = PhongBan::find($request->id);
        $phong_ban->deleted_at = Carbon::now();
        $phong_ban->save();
    }
}
