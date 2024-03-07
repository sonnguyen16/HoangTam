<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Traits\HasCreatorAndUpdater;

class BinhLuan extends Model
{
    use HasFactory, HasCreatorAndUpdater;

    protected $table = 'binh_luan';

    public function du_an()
    {
        return $this->belongsTo(DuAn::class, 'du_an_id');
    }

    public function nguoi_dung()
    {
        return $this->belongsTo(User::class, 'created_by');
    }
}
