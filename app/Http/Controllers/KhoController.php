<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;
use App\Http\Requests\KhoRequest;
use App\Models\Kho;
use Carbon\Carbon;

class KhoController extends Controller
{
    public function index(Request $request)
    {
        $query = Kho::query()->whereNull('deleted_at')
            ->whereHas('created_by.don_vi', function ($query) {
                $query->where('id', Auth::user()->don_vi_id);
            })->orderBy('id', 'desc');

        if ($request->filled('search')) {
            $search = $request->search;
            $query->where(function ($query) use ($search) {
                $query->where('ten', 'like', "%{$search}%");
            });
        }

        $kho_list = $query->paginate(20)->withQueryString();

        return Inertia::render('Kho/Index', compact('kho_list'));
    }

    public function store(KhoRequest $request)
    {
        $data = $request->validated();
        Kho::updateOrCreate(['id' => $data['id']], $data);
    }

    public function delete(Request $request)
    {
        $kho = Kho::find($request->id);
        $kho->deleted_at = Carbon::now();
        $kho->save();
    }
}
