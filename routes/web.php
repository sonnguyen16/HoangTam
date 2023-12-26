<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\KhachHangController;
use App\Http\Controllers\NhaCungCapController;
use App\Http\Controllers\SanPhamController;
use App\Http\Controllers\KhoController;
use App\Http\Controllers\DonViTinhController;
use App\Http\Controllers\Auth\AuthController;
use App\Http\Controllers\HoaDonController;
use App\Http\Controllers\DuAnController;
use App\Http\Controllers\DonHangController;
use App\Http\Controllers\NhanVienController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

Route::prefix('/')->group(function (){
    Route::get('/', [AuthController::class, 'index'])->name('auth.index');
    Route::post('/login', [AuthController::class, 'login'])->name('auth.login');
    Route::post('/logout', [AuthController::class, 'destroy'])->name('auth.logout');
});

Route::prefix('/khachhang')->middleware('auth')->group(function (){
    Route::get('/', [KhachHangController::class, 'index'])->name('khachhang.index');
    Route::post('/store', [KhachHangController::class, 'store'])->name('khachhang.store');
    Route::delete('/delete', [KhachHangController::class, 'delete'])->name('khachhang.delete');
});

Route::prefix('/nhacungcap')->middleware('auth')->group(function (){
    Route::get('/', [NhaCungCapController::class, 'index'])->name('nhacungcap.index');
    Route::post('/store', [NhaCungCapController::class, 'store'])->name('nhacungcap.store');
    Route::delete('/delete', [NhaCungCapController::class, 'delete'])->name('nhacungcap.delete');
});

Route::prefix('/sanpham')->middleware('auth')->group(function (){
    Route::get('/', [SanPhamController::class, 'index'])->name('sanpham.index');
    Route::post('/store', [SanPhamController::class, 'store'])->name('sanpham.store');
    Route::delete('/delete', [SanPhamController::class, 'delete'])->name('sanpham.delete');
});

Route::prefix('/kho')->middleware('auth')->group(function (){
    Route::get('/', [KhoController::class, 'index'])->name('kho.index');
    Route::post('/store', [KhoController::class, 'store'])->name('kho.store');
    Route::delete('/delete', [KhoController::class, 'delete'])->name('kho.delete');
});

Route::prefix('/donvitinh')->middleware('auth')->group(function (){
    Route::get('/', [DonViTinhController::class, 'index'])->name('donvitinh.index');
    Route::post('/store', [DonViTinhController::class, 'store'])->name('donvitinh.store');
    Route::delete('/delete', [DonViTinhController::class, 'delete'])->name('donvitinh.delete');
});

Route::prefix('/hoadon')->middleware('auth')->group(function (){
    Route::get('/{loai?}', [HoaDonController::class, 'index'])->name('hoadon.index');
    Route::post('/store', [HoaDonController::class, 'store'])->name('hoadon.store');
    Route::delete('/delete', [HoaDonController::class, 'delete'])->name('hoadon.delete');
});

Route::prefix('/donhang')->middleware('auth')->group(function (){
    Route::get('/{loai?}', [DonHangController::class, 'index'])->name('donhang.index');
    Route::post('/store', [DonHangController::class, 'store'])->name('donhang.store');
    Route::delete('/delete', [DonHangController::class, 'delete'])->name('donhang.delete');
});

Route::prefix('/duan')->middleware('auth')->group(function (){
    Route::get('/', [DuAnController::class, 'index'])->name('duan.index');
    Route::post('/store', [DuAnController::class, 'store'])->name('duan.store');
    Route::delete('/delete', [DuAnController::class, 'delete'])->name('duan.delete');
});

Route::prefix('/nhanvien')->middleware('auth')->group(function (){
    Route::get('/', [NhanVienController::class, 'index'])->name('nhanvien.index');
    Route::post('/store', [NhanVienController::class, 'store'])->name('nhanvien.store');
    Route::delete('/delete', [NhanVienController::class, 'delete'])->name('nhanvien.delete');
});


