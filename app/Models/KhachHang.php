<?php

namespace App\Models;

use App\Traits\HasCreatorAndUpdater;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class KhachHang extends Model
{
    use HasFactory, HasCreatorAndUpdater;

    protected $table = 'khach_hang';

    public function created_by()
    {
        return $this->belongsTo(User::class, "created_by");
    }
}
