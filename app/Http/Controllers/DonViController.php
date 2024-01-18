<?php

namespace App\Http\Controllers;

use App\Http\Requests\DonViRequest;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\DonVi;

class DonViController extends Controller
{
    public function index(Request $request)
    {
        $query = DonVi::query()->whereNull('deleted_at');

        if ($request->filled('search')) {
            $search = $request->search;
            $query->where(function ($query) use ($search) {
                $query->where('ten', 'like', "%{$search}%")
                    ->orWhere('dia_chi', 'like', "%{$search}%")
                    ->orWhere('dien_thoai', 'like', "%{$search}%");
            });
        }

        $don_vi_list = $query->paginate(10)->withQueryString();
        return Inertia::render('DonVi/Index', compact('don_vi_list'));
    }

    public function store(DonViRequest $request)
    {
        $data = $request->validated();
        if($request->hasFile('logo')){
            $file = $request->file('logo');
            $file_name = time().'_'.$file->getClientOriginalName();
            $file->move(public_path('uploads'), $file_name);
            $data['logo'] = $file_name;
        }else{
            if(isset($data['id'])){
                $don_vi = DonVi::find($data['id']);
                $data['logo'] = $don_vi->logo;
            }else{
                $data['logo'] = 'logo-default.png';
            }
        }
        DonVi::updateOrCreate(['id' => $data['id']], $data);
    }

    public function delete(Request $request)
    {
        $don_vi = DonVi::find($request->id);
        $don_vi->deleted_at = Carbon::now();
        $don_vi->save();
    }
}
