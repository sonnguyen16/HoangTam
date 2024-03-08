<?php

namespace App\Http\Controllers;

use App\Http\Requests\BinhLuanRequest;
use Illuminate\Http\Request;
use App\Models\BinhLuan;

class BinhLuanController extends Controller
{
    public function store(BinhLuanRequest $request)
    {
        $data = $request->validated();

        try {
            $binhLuan = BinhLuan::updateOrCreate($data);
            $binhLuan = BinhLuan::with('nguoi_dung')->find($binhLuan->id);
            return response()->json($binhLuan, 201);
        } catch (\Exception $e) {
            return response()->json(['message' => $e->getMessage()], 500);
        }
    }
}
