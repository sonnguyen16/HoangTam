<?php

namespace App\Models;

use App\Traits\HasCreatorAndUpdater;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class DonViTinh extends Model
{
    use HasFactory, HasCreatorAndUpdater;

    protected $table = 'don_vi_tinh';

    public function created_by()
    {
        return $this->belongsTo(User::class, "created_by");
    }
}
