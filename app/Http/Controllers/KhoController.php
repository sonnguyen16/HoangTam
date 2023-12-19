<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Http\Requests\KhoRequest;
use App\Models\Kho;
use Carbon\Carbon;

class KhoController extends Controller
{
    public function index(Request $request)
    {
        $query = Kho::query()->whereNull('deleted_at');

        if ($request->filled('search')) {
            $search = $request->search;
            $query->where(function ($query) use ($search) {
                $query->where('ten', 'like', "%{$search}%");
            });
        }

        $kho_list = $query->paginate(10)->withQueryString();

        return Inertia::render('Kho/Index', compact('kho_list'));
    }

    public function store(KhoRequest $request)
    {
        $data = $request->validated();
        if($request->has('id')  && $request->filled('id')){
            $kho = Kho::find($request->id);
            $kho->update($data);
            return;
        }
        Kho::create($data);
    }

    public function delete(Request $request)
    {
        $kho = Kho::find($request->id);
        $kho->deleted_at = Carbon::now();
        $kho->save();
    }
}
