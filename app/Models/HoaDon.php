<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class HoaDon extends Model
{
    use HasFactory;

    protected $table = 'hoa_don';

    public function nha_cung_cap()
    {
        return $this->belongsTo(NhaCungCap::class, 'nha_cung_cap_id');
    }

    public function khach_hang()
    {
        return $this->belongsTo(KhachHang::class, 'khach_hang_id');
    }

    public function kho()
    {
        return $this->belongsTo(Kho::class, 'kho_id');
    }

    public function chi_tiet_hoa_don()
    {
        return $this->hasMany(ChiTietHoaDon::class, 'hoa_don_id')->where('deleted_at', null);
    }

    public function tong_tien()
    {
        $tong_tien = 0;
        foreach ($this->chi_tiet_hoa_don()->get() as $chi_tiet_hoa_don) {
            $tong_tien += $chi_tiet_hoa_don->so_luong * $chi_tiet_hoa_don->gia;
        }
        return $tong_tien;
    }
}
