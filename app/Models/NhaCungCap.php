<?php

namespace App\Models;

use App\Traits\HasCreatorAndUpdater;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class NhaCungCap extends Model
{
    use HasFactory, HasCreatorAndUpdater;

    protected $table = 'nha_cung_cap';

    public function created_by()
    {
        return $this->belongsTo(User::class, "created_by");
    }

    public function cong_no()
    {
        return $this->hasMany(HoaDon::class, 'nha_cung_cap_id')
            ->whereNull('deleted_at')
            ->where('loai', 0);
    }

    public function no_moi()
    {
        $chiTotal = $this->chi()->sum('so_tien');
        $congNoTotal = $this->cong_no()->sum('tong_tien');
        return $congNoTotal - $chiTotal;
    }
    public function chi()
    {
        return $this->hasMany(PhieuThuChi::class, 'nha_cung_cap_id')
            ->where('loai', 1)
            ->whereNull('deleted_at')
            ->where('trang_thai', 1);
    }
}
