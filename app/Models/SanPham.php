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
        return $this->belongsTo(DonViTinh::class, 'don_vi_tinh_id');
    }

    public function dinh_muc()
    {
        return $this->hasMany(DinhMuc::class, 'san_pham_id');
    }

    public function loai_san_pham()
    {
        return $this->belongsTo(LoaiSanPham::class, 'loai_san_pham_id');
    }

    public function created_by()
    {
        return $this->belongsTo(User::class, "created_by");
    }

}
