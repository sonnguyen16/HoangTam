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
            ->where('loai', 2)
            ->whereNull('deleted_at')
            ->sum('so_tien');
    }
    public function chi()
    {
        return $this->hasMany(PhieuThuChi::class, 'khach_hang_id')
            ->where('loai', 1)
            ->whereNull('deleted_at')
            ->sum('so_tien');
    }
    public function so_luong_nhap()
    {
        return $this->hasMany(HoaDon::class, 'khach_hang_id')
            ->whereNull('deleted_at')
            ->where('loai', 1)
            ->with(['chi_tiet_hoa_don' => function ($query) {
                $query->whereNull('deleted_at');
            }])
            ->get()
            ->flatMap(function ($hoaDon) {
                return $hoaDon->chi_tiet_hoa_don;
            })
            ->sum('so_luong');
    }
    public function ton_cuoi()
    {
        return $this->ton_dau + $this->so_luong_nhap();
    }

   
}
