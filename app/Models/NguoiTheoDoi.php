<?php

namespace App\Models;

use App\Traits\HasCreatorAndUpdater;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class NguoiTheoDoi extends Model
{
    use HasFactory, HasCreatorAndUpdater;

    protected $table = 'nguoi_theo_doi';

    public function created_by()
    {
        return $this->belongsTo(User::class, "created_by");
    }

    public function user()
    {
        return $this->belongsTo(User::class, "user_id");
    }
}
