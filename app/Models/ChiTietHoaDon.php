<?php

namespace App\Models;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ChiTietHoaDon extends Model
{
    use HasFactory;

    protected $table = 'chi_tiet_hoa_don';

    public function san_pham()
    {
        return $this->belongsTo(SanPham::class, 'san_pham_id');
    }

    public function thanh_tien()
    {
        return $this->so_luong * $this->gia;
    }
}
