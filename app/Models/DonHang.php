<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class DonHang extends Model
{
    use HasFactory;

    protected $table = 'don_hang';

    public function nha_cung_cap()
    {
        return $this->belongsTo(NhaCungCap::class, 'nha_cung_cap_id');
    }

    public function khach_hang()
    {
        return $this->belongsTo(KhachHang::class, 'khach_hang_id');
    }


    public function chi_tiet_don_hang()
    {
        return $this->hasMany(ChiTietDonHang::class, 'don_hang_id')->where('deleted_at', null)->get();
    }

    public function tong_tien()
    {
        $tong_tien = 0;
        foreach ($this->chi_tiet_don_hang() as $chi_tiet_don_hang) {
            $tong_tien += $chi_tiet_don_hang->so_luong * $chi_tiet_don_hang->gia;
        }
        return $tong_tien;
    }
}
