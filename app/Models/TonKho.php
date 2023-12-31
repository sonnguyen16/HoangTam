<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class TonKho extends Model
{
    use HasFactory;

    protected $table = 'ton_kho';

    public function kho()
    {
        return $this->belongsTo(Kho::class, "kho_id");
    }

    public function san_pham()
    {
        return $this->belongsTo(SanPham::class, "san_pham_id");
    }

}
