<?php

namespace App\Models;

use App\Traits\HasCreatorAndUpdater;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Kho extends Model
{
    use HasFactory;

    protected $table = 'kho';

    public function ton_kho()
    {
        return $this->hasMany(TonKho::class, 'kho_id')->get();
    }
}
