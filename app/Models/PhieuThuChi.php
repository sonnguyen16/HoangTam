<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class PhieuThuChi extends Model
{
    use HasFactory;

    protected $table = 'phieu_thu_chi';

    public function nha_cung_cap()
    {
        return $this->belongsTo(NhaCungCap::class, 'nha_cung_cap_id');
    }

    public function khach_hang()
    {
        return $this->belongsTo(KhachHang::class, 'khach_hang_id');
    }

    public function nhan_vien()
    {
        return $this->belongsTo(User::class, 'nhan_vien_id');
    }

    public function du_an()
    {
        return $this->belongsTo(DuAn::class, 'du_an_id');
    }

    public function loai_thu_chi()
    {
        return $this->belongsTo(LoaiThuChi::class, 'loai_thu_chi_id');
    }
}
