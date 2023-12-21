<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Kalnoy\Nestedset\NodeTrait;

class DuAn extends Model
{
    use HasFactory, NodeTrait;

    protected $table = 'du_an';

    public function parent()
    {
        return $this->belongsTo(DuAn::class, 'parent_id');
    }

    public function children()
    {
        return $this->hasMany(DuAn::class, 'parent_id');
    }

    public function nhan_vien()
    {
        return $this->belongsTo(User::class, 'user_id');
    }

    public function files()
    {
        return $this->hasMany(FileDuAn::class, 'du_an_id');
    }
}
