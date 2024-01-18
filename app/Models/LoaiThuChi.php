<?php

namespace App\Models;

use App\Traits\HasCreatorAndUpdater;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class LoaiThuChi extends Model
{
    use HasFactory, HasCreatorAndUpdater;

    protected $table = 'loai_thu_chi';

    public function created_by()
    {
        return $this->belongsTo(User::class, "created_by");
    }
}
