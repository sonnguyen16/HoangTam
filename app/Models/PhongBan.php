<?php

namespace App\Models;

use App\Traits\HasCreatorAndUpdater;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class PhongBan extends Model
{
    use HasFactory, HasCreatorAndUpdater;

    protected $table = 'phong_ban';

    public function created_by()
    {
        return $this->belongsTo(User::class, "created_by");
    }

    public function updated_by(){
        return $this->belongsTo(User::class, "updated_by");
    }
}
