<?php

namespace App\Models;

use App\Traits\HasCreatorAndUpdater;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class DinhMuc extends Model
{
    use HasFactory, HasCreatorAndUpdater;

    protected $table = 'dinh_muc';

    public function san_pham()
    {
        return $this->belongsTo(SanPham::class, 'nguyen_lieu_id')->first();
    }

    public function created_by()
    {
        return $this->belongsTo(User::class, "created_by");
    }
}
