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
use App\Http\Controllers\LoaiSanPhamController;
use App\Http\Controllers\TonKhoController;
use App\Http\Controllers\PhieuThuChiController;
use App\Http\Controllers\LoaiThuChiController;
use App\Http\Controllers\BaoCaoTonKhoController;
use App\Http\Controllers\BaoCaoCongNoController;
use App\Http\Controllers\DonViController;
use App\Http\Controllers\NguoiDungController;
use App\Http\Controllers\BaoCaoNhapXuatController;
use App\Http\Controllers\BinhLuanController;
use App\Http\Controllers\PhongBanController;
use App\Http\Controllers\DeXuatController;

Route::prefix('/')->group(function (){
    Route::get('/', [AuthController::class, 'index'])->name('auth.index');
    Route::post('/login', [AuthController::class, 'login'])->name('auth.login');
    Route::post('/logout', [AuthController::class, 'destroy'])->name('auth.logout');
    Route::get('/profile', [AuthController::class, 'getProfile'])->name('auth.profile')->middleware('auth');
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
    Route::get('/', [HoaDonController::class, 'index'])->name('hoadon.index');
    Route::post('/store', [HoaDonController::class, 'store'])->name('hoadon.store');
    Route::delete('/delete', [HoaDonController::class, 'delete'])->name('hoadon.delete');
    Route::get('/print', [HoaDonController::class, 'print'])->name('hoadon.print');
});

Route::prefix('/donhang')->middleware('auth')->group(function (){
    Route::get('/', [DonHangController::class, 'index'])->name('donhang.index');
    Route::post('/store', [DonHangController::class, 'store'])->name('donhang.store');
    Route::delete('/delete', [DonHangController::class, 'delete'])->name('donhang.delete');
    Route::get('/print', [DonHangController::class, 'print'])->name('donhang.print');
});

Route::prefix('/duan')->middleware('auth')->group(function (){
    Route::get('/', [DuAnController::class, 'index'])->name('duan.index');
    Route::post('/store', [DuAnController::class, 'store'])->name('duan.store');
    Route::delete('/delete', [DuAnController::class, 'delete'])->name('duan.delete');
    Route::get('/detail', [DuAnController::class, 'detail'])->name('duan.detail');
    Route::delete('/file/delete', [DuAnController::class, 'deleteFile'])->name('duan.file.delete');
});

Route::prefix('/nhanvien')->middleware('auth')->group(function (){
    Route::get('/', [NhanVienController::class, 'index'])->name('nhanvien.index');
    Route::post('/store', [NhanVienController::class, 'store'])->name('nhanvien.store');
    Route::delete('/delete', [NhanVienController::class, 'delete'])->name('nhanvien.delete');
});

Route::prefix('/loaisanpham')->middleware('auth')->group(function (){
    Route::get('/', [LoaiSanPhamController::class, 'index'])->name('loaisanpham.index');
    Route::post('/store', [LoaiSanPhamController::class, 'store'])->name('loaisanpham.store');
    Route::delete('/delete', [LoaiSanPhamController::class, 'delete'])->name('loaisanpham.delete');
});

Route::prefix('/tonkho')->middleware('auth')->group(function (){
    Route::get('/', [TonKhoController::class, 'index'])->name('tonkho.index');
    Route::post('/store', [TonKhoController::class, 'store'])->name('tonkho.store');
    Route::delete('/delete', [TonKhoController::class, 'delete'])->name('tonkho.delete');
});

Route::prefix('/phieuthuchi')->middleware('auth')->group(function (){
    Route::get('/', [PhieuThuChiController::class, 'index'])->name('phieuthuchi.index');
    Route::post('/store', [PhieuThuChiController::class, 'store'])->name('phieuthuchi.store');
    Route::delete('/delete', [PhieuThuChiController::class, 'delete'])->name('phieuthuchi.delete');
    Route::get('/print', [PhieuThuChiController::class, 'print'])->name('phieuthuchi.print');
});

Route::prefix('/loaithuchi')->middleware('auth')->group(function (){
    Route::get('/', [LoaiThuChiController::class, 'index'])->name('loaithuchi.index');
    Route::post('/store', [LoaiThuChiController::class, 'store'])->name('loaithuchi.store');
    Route::delete('/delete', [LoaiThuChiController::class, 'delete'])->name('loaithuchi.delete');
});

Route::prefix('/donvi')->middleware('auth')->group(function (){
    Route::get('/', [DonViController::class, 'index'])->name('donvi.index');
    Route::post('/store', [DonViController::class, 'store'])->name('donvi.store');
    Route::delete('/delete', [DonViController::class, 'delete'])->name('donvi.delete');
});

Route::prefix('/nguoidung')->middleware('auth')->group(function (){
    Route::get('/', [NguoiDungController::class, 'index'])->name('nguoidung.index');
    Route::post('/store', [NguoiDungController::class, 'store'])->name('nguoidung.store');
    Route::delete('/delete', [NguoiDungController::class, 'delete'])->name('nguoidung.delete');
});

Route::prefix('/baocaotonkho')->middleware('auth')->group(function (){
    Route::get('/', [BaoCaoTonKhoController::class, 'index'])->name('baocaotonkho.index');
});

Route::prefix('/baocaocongno')->middleware('auth')->group(function (){
    Route::get('/nhacungcap', [BaoCaoCongNoController::class, 'index'])->name('baocaocongno.index');
    Route::get('/nhacungcap/detail', [BaoCaoCongNoController::class, 'chiTietNhaCungCap'])->name('baocaocongno.chitietncc');
    Route::get('/khachhang', [BaoCaoCongNoController::class, 'khachhang'])->name('baocaocongno.khachhang');
    Route::get('/khachhang/detail', [BaoCaoCongNoController::class, 'chiTietKhachHang'])->name('baocaocongno.chitietkh');
    Route::post('/print', [BaoCaoCongNoController::class, 'print'])->name('baocaocongno.print');
});


Route::prefix('/baocaonhapxuat')->middleware('auth')->group(function (){
    Route::get('/', [BaoCaoNhapXuatController::class, 'index'])->name('baocaonhapxuat.index');
});

Route::prefix('/binhluan')->middleware('auth')->group(function (){
    Route::post('/', [BinhLuanController::class, 'store'])->name('binhluan.store');
});

Route::prefix('/phongban')->middleware('auth')->group(function (){
    Route::get('/', [PhongBanController::class, 'index'])->name('phongban.index');
    Route::post('/store', [PhongBanController::class, 'store'])->name('phongban.store');
    Route::delete('/delete', [PhongBanController::class, 'delete'])->name('phongban.delete');
});

Route::prefix('/dexuat')->middleware('auth')->group(function (){
    Route::get('/', [DeXuatController::class, 'index'])->name('dexuat.index');
    Route::post('/store', [DeXuatController::class, 'store'])->name('dexuat.store');
    Route::delete('/delete', [DeXuatController::class, 'delete'])->name('dexuat.delete');
    Route::post('/duyet', [DeXuatController::class, 'duyet'])->name('dexuat.duyet');
});




