<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class SanPhamController extends Controller
{
    public function index()
    {
        return Inertia::render('SanPham/Index');
    }
}
