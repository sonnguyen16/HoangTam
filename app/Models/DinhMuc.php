<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class DinhMuc extends Model
{
    use HasFactory;

    protected $table = 'dinh_muc';

    public function san_pham()
    {
        return $this->belongsTo(SanPham::class, 'nguyen_lieu_id')->first();
    }
}