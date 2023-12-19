<?php

namespace App\Models;

use App\Traits\HasCreatorAndUpdater;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class DonViTinh extends Model
{
    use HasFactory;

    protected $table = 'don_vi_tinh';
}
