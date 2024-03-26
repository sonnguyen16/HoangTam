<?php

namespace App\Models;

use App\Traits\HasCreatorAndUpdater;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class DeXuat extends Model
{
    use HasFactory, HasCreatorAndUpdater;

    protected $table = 'de_xuat';

    public function created_by()
    {
        return $this->belongsTo(User::class, 'created_by');
    }

    public function updated_by()
    {
        return $this->belongsTo(User::class, 'updated_by');
    }

    public function nguoi_duyet()
    {
        return $this->belongsTo(User::class, 'nguoi_duyet');
    }

    public function nguoi_theo_doi()
    {
        return $this->hasMany(NguoiTheoDoi::class, 'de_xuat_id');
    }

    public function files(){
        return $this->hasMany(FileDuAn::class, 'de_xuat_id')->whereNull('deleted_at');
    }

    public function binh_luan()
    {
        return $this->hasMany(BinhLuan::class, 'de_xuat_id')->whereNull('deleted_at');
    }
}
