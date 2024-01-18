<?php

namespace App\Models;

use App\Traits\HasCreatorAndUpdater;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class SanPham extends Model
{
    use HasFactory, HasCreatorAndUpdater;

    protected $table = 'san_pham';

    public function don_vi_tinh()
    {
        return $this->belongsTo(DonViTinh::class, 'don_vi_tinh_id')->first();
    }

    public  function ton_kho()
    {
        return $this->hasMany(TonKho::class, 'san_pham_id')->get();
    }

    public function dinh_muc()
    {
        return $this->hasMany(DinhMuc::class, 'san_pham_id')->get();
    }

    public function loai_san_pham()
    {
        return $this->belongsTo(LoaiSanPham::class, 'loai_san_pham_id')->first();
    }

    public function so_luong_nhap(){
        return $this->hasMany(ChiTietHoaDon::class, 'san_pham_id')
            ->whereHas('hoa_don', function ($q) {
                $q->where('loai', 0);
            })->whereNull('deleted_at');
    }

    public function so_luong_xuat(){
        return $this->hasMany(ChiTietHoaDon::class, 'san_pham_id')
            ->whereHas('hoa_don', function ($q) {
                $q->where('loai', 1);
            })->whereNull('deleted_at');
    }

    public function dieu_chinh_kho(){
        return $this->hasMany(TonKho::class, 'san_pham_id')
            ->whereNull('deleted_at');
    }

    public function ton_cuoi()
    {
        return $this->ton_dau + $this->so_luong_nhap()->sum('so_luong') - $this->so_luong_xuat()->sum('so_luong')
            + $this->dieu_chinh_kho()->sum('so_luong');
    }

    public function created_by()
    {
        return $this->belongsTo(User::class, "created_by");
    }
}
