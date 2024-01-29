<?php

namespace App\Http\Controllers;

use App\Http\Resources\NhaCungCapResource;
use App\Models\NhaCungCap;
use App\Models\KhachHang;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;
use Illuminate\Support\Facades\DB;

class BaoCaoCongNoController extends Controller
{
    public function index(Request $request)
    {
        $ngayBatDau = !$request->input('ngay_bat_dau') ? '2024-1-1' : $request->input('ngay_bat_dau');
        $ngayKetThuc = !$request->input('ngay_ket_thuc') ? '2025-1-1' : $request->input('ngay_ket_thuc');
        $search = !$request->input('search') ? '' : $request->input('search');

        $query = "
            WITH Chi AS (
                SELECT ncc.id, COALESCE(SUM(ptc.so_tien), 0) AS chi
                FROM nha_cung_cap ncc
                LEFT JOIN phieu_thu_chi ptc ON ncc.id = ptc.nha_cung_cap_id
                WHERE (ptc.ngay BETWEEN ? AND ?)
                GROUP BY ncc.id
            )
            SELECT ncc.id, ncc.ten, ncc.dien_thoai, ncc.dia_chi, c.chi,
                COALESCE(SUM(CASE WHEN hd.ngay < ? THEN cthd.so_luong ELSE 0 END), 0) AS ton_dau,
                COALESCE(SUM(CASE WHEN hd.ngay <= ? THEN cthd.so_luong ELSE 0 END), 0) AS ton_cuoi
            FROM nha_cung_cap ncc
            LEFT JOIN hoa_don hd ON ncc.id = hd.nha_cung_cap_id
            LEFT JOIN chi_tiet_hoa_don cthd ON hd.id = cthd.hoa_don_id
            LEFT JOIN Chi c ON ncc.id = c.id
            WHERE ncc.ten LIKE '%$search%' OR ncc.dien_thoai LIKE '%$search%' OR ncc.dia_chi LIKE '%$search%'
            GROUP BY ncc.id, ncc.ten, ncc.dien_thoai, ncc.dia_chi
        ";

        $nha_cung_cap_list = DB::select($query, [$ngayBatDau, $ngayKetThuc, $ngayBatDau, $ngayKetThuc]);

        return Inertia::render('BaoCaoCongNo/Index', compact('nha_cung_cap_list'));
    }
    public function khachhang(Request $request)
    {
        $ngayBatDau = !$request->input('ngay_bat_dau') ? '2024-1-1' : $request->input('ngay_bat_dau');
        $ngayKetThuc = !$request->input('ngay_ket_thuc') ? '2025-1-1' : $request->input('ngay_ket_thuc');
        $search = !$request->input('search') ? '' : $request->input('search');

        $query = "
            WITH Thu AS (
                SELECT kh.id, COALESCE(SUM(ptc.so_tien), 0) AS thu
                FROM khach_hang kh
                LEFT JOIN phieu_thu_chi ptc ON kh.id = ptc.khach_hang_id
                WHERE (ptc.ngay BETWEEN ? AND ?)
                GROUP BY kh.id
            )
            SELECT kh.id, kh.ten, kh.dien_thoai, kh.dia_chi, t.thu,
                COALESCE(SUM(CASE WHEN hd.ngay < ? THEN cthd.so_luong ELSE 0 END), 0) AS ton_dau,
                COALESCE(SUM(CASE WHEN hd.ngay <= ? THEN cthd.so_luong ELSE 0 END), 0) AS ton_cuoi
            FROM khach_hang kh
            LEFT JOIN hoa_don hd ON kh.id = hd.khach_hang_id
            LEFT JOIN chi_tiet_hoa_don cthd ON hd.id = cthd.hoa_don_id
            LEFT JOIN Thu t ON kh.id = t.id
            WHERE kh.ten LIKE '%$search%' OR kh.dien_thoai LIKE '%$search%' OR kh.dia_chi LIKE '%$search%'
            GROUP BY kh.id, kh.ten, kh.dien_thoai, kh.dia_chi
        ";

        $khach_hang_list = DB::select($query, [$ngayBatDau, $ngayKetThuc, $ngayBatDau, $ngayKetThuc]);

        return Inertia::render('BaoCaoCongNo/KhachHang', compact('khach_hang_list'));
    }
}
