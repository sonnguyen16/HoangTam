<?php

namespace App\Models;

use App\Traits\HasCreatorAndUpdater;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class NhaCungCap extends Model
{
    use HasFactory, HasCreatorAndUpdater;

    protected $table = 'nha_cung_cap';

    public function chi()
    {
        return $this->hasMany(PhieuThuChi::class, 'nha_cung_cap_id')
            ->where('loai', 1)
            ->whereNull('deleted_at')
            ->sum('so_tien');
    }

    public function so_luong_nhap()
    {
        return $this->hasMany(HoaDon::class, 'nha_cung_cap_id')
            ->whereNull('deleted_at')
            ->where('loai', 0)
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

    public function created_by()
    {
        return $this->belongsTo(User::class, "created_by");
    }
}
