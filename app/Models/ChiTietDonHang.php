<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ChiTietDonHang extends Model
{
    use HasFactory;

    protected $table = 'chi_tiet_don_hang';

    public function san_pham()
    {
        return $this->belongsTo(SanPham::class, 'san_pham_id')->first();
    }

    public function thanh_tien()
    {
        return $this->so_luong * $this->gia;
    }
}
