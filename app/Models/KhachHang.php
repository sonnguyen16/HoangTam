<?php

namespace App\Models;

use App\Traits\HasCreatorAndUpdater;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class KhachHang extends Model
{
    use HasFactory, HasCreatorAndUpdater;

    protected $table = 'khach_hang';

    public function created_by()
    {
        return $this->belongsTo(User::class, "created_by");
    }
    public function thu()
    {
        return $this->hasMany(PhieuThuChi::class, 'khach_hang_id')
            ->where('loai', 0)
            ->whereNull('deleted_at')
            ->where('trang_thai', 1)
            ->sum('so_tien');
    }

    public function cong_no()
    {
        return $this->hasMany(HoaDon::class, 'khach_hang_id')
            ->whereNull('deleted_at')
            ->where('loai', 1)
            ->sum('tong_tien');
    }

    public function no_moi()
    {
        return $this->cong_no - $this->thu;
    }

}
