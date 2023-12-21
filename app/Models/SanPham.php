<?php

namespace App\Models;

use App\Traits\HasCreatorAndUpdater;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class SanPham extends Model
{
    use HasFactory;

    protected $table = 'san_pham';

    public function don_vi_tinh()
    {
        return $this->belongsTo(DonViTinh::class, 'don_vi_tinh_id')->first();
    }

    public  function ton_kho()
    {
        return $this->hasMany(TonKho::class, 'san_pham_id')->get();
    }
}
