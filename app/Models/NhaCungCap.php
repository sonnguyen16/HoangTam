<?php

namespace App\Models;

use App\Traits\HasCreatorAndUpdater;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class NhaCungCap extends Model
{
    use HasFactory, HasCreatorAndUpdater;

    protected $table = 'nha_cung_cap';

    public function created_by()
    {
        return $this->belongsTo(User::class, "created_by");
    }
}
