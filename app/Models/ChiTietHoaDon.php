<?php

namespace App\Models;

use App\Traits\HasCreatorAndUpdater;
use Carbon\Carbon;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ChiTietHoaDon extends Model
{
    use HasFactory, HasCreatorAndUpdater;

    protected $table = 'chi_tiet_hoa_don';

    public function san_pham()
    {
        return $this->belongsTo(SanPham::class, 'san_pham_id');
    }

    public function thanh_tien()
    {
        return $this->so_luong * $this->gia;
    }

    public function hoa_don()
    {
        return $this->belongsTo(HoaDon::class, 'hoa_don_id');
    }

    public function created_by()
    {
        return $this->belongsTo(User::class, "created_by");
    }
}
