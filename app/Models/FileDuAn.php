<?php

namespace App\Models;

use App\Traits\HasCreatorAndUpdater;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class FileDuAn extends Model
{
    use HasFactory, HasCreatorAndUpdater;

    protected $table = 'file_du_an';

    public function created_by()
    {
        return $this->belongsTo(User::class, "created_by");
    }
}
