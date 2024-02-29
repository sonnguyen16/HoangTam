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
        $don_vi_id = Auth::user()->don_vi_id;

        $query = "
            WITH NHAP_CHI AS (
                SELECT ncc.id,ptc.ngay, 0 AS nhap,  ptc.so_tien AS chi
                FROM nha_cung_cap ncc
                LEFT JOIN phieu_thu_chi ptc ON ncc.id = ptc.nha_cung_cap_id
                WHERE ptc.loai = 1
                AND ptc.trang_thai = 1
                AND ptc.DELETED_AT IS NULL

                UNION ALL

                SELECT ncc.id,hd.ngay, COALESCE(hd.tong_tien, 0) AS nhap, 0
                FROM nha_cung_cap ncc
                LEFT JOIN hoa_don hd ON ncc.id = hd.nha_cung_cap_id
                WHERE hd.DELETED_AT IS NULL
                AND hd.loai = 0
            )

            SELECT NCC.id, NCC.ten, NCC.dia_chi, NCC.dien_thoai,
                    SUM(CASE WHEN NC.ngay < ? THEN NC.nhap ELSE 0 END)
                    - SUM(CASE WHEN NC.ngay < ? THEN NC.chi ELSE 0 END)
                    AS ton_dau,
                    SUM(CASE WHEN NC.ngay >= ? AND NC.ngay <= ? THEN NC.nhap ELSE 0 END) AS nhap,
                    SUM(CASE WHEN NC.ngay >= ? AND NC.ngay <= ? THEN NC.chi ELSE 0 END) AS chi,
                    SUM(CASE WHEN NC.ngay < ? THEN NC.nhap ELSE 0 END)
                    - SUM(CASE WHEN NC.ngay < ? THEN NC.chi ELSE 0 END)
                    + SUM(CASE WHEN NC.ngay >= ? AND NC.ngay <= ? THEN NC.nhap ELSE 0 END)
                    - SUM(CASE WHEN NC.ngay >= ? AND NC.ngay <= ? THEN NC.chi ELSE 0 END) AS ton_cuoi
            FROM nha_cung_cap NCC
            JOIN users u ON NCC.created_by = u.id AND u.don_vi_id = ?
            LEFT JOIN NHAP_CHI NC ON NC.id = NCC.id
            WHERE NCC.ten LIKE '%$search%' OR NCC.dien_thoai LIKE '%$search%' OR NCC.dia_chi LIKE '%$search%'
            GROUP BY NCC.id, NCC.ten, NCC.dia_chi, NCC.dien_thoai
            HAVING nhap > 0 OR chi > 0 OR ton_dau > 0 OR ton_cuoi > 0
        ";

        $nha_cung_cap_list = DB::select($query, [$ngayBatDau, $ngayBatDau,$ngayBatDau, $ngayKetThuc,$ngayBatDau, $ngayKetThuc,$ngayBatDau, $ngayBatDau, $ngayBatDau, $ngayKetThuc,$ngayBatDau, $ngayKetThuc, $don_vi_id]);

        return Inertia::render('BaoCaoCongNo/Index', compact('nha_cung_cap_list'));
    }

    public function chiTietNhaCungCap(Request $request)
    {
        $id = $request->input('id');
        $query = "(SELECT NCC.ten as ten_ncc, NCC.dia_chi, NCC.dien_thoai, HD.ngay, HD.ma, SP.ten AS san_pham, DVT.ten AS dvt,
                           CTHD.so_luong, CTHD.gia, CTHD.so_luong * CTHD.gia AS thanh_tien, 0 as chi
                    FROM hoa_don HD
                    LEFT JOIN nha_cung_cap NCC ON HD.nha_cung_cap_id = NCC.id
                    LEFT JOIN chi_tiet_hoa_don CTHD ON CTHD.hoa_don_id = HD.id
                    LEFT JOIN san_pham SP ON CTHD.san_pham_id = SP.id
                    LEFT JOIN don_vi_tinh DVT ON SP.don_vi_tinh_id = DVT.id
                    WHERE HD.deleted_at IS NULL
                    AND HD.nha_cung_cap_id = ?
                    AND HD.loai = 0)
                    UNION
                    (SELECT NCC.ten, NCC.dia_chi, NCC.dien_thoai, PTC.ngay, PTC.ma,'Phiếu chi','','','',0, PTC.so_tien as chi
                    FROM phieu_thu_chi PTC
                    LEFT JOIN nha_cung_cap NCC ON PTC.nha_cung_cap_id = NCC.id
                    WHERE PTC.deleted_at IS NULL
                    AND PTC.loai = 1
                    AND PTC.trang_thai = 1
                    AND PTC.nha_cung_cap_id = ?
                    )
                    ORDER BY NGAY ASC";
        $nha_cung_cap = DB::select($query, [$id, $id]);
        return response()->json($nha_cung_cap);
    }

    public function khachhang(Request $request)
    {
        $ngayBatDau = !$request->input('ngay_bat_dau') ? '2024-1-1' : $request->input('ngay_bat_dau');
        $ngayKetThuc = !$request->input('ngay_ket_thuc') ? '2025-1-1' : $request->input('ngay_ket_thuc');
        $search = !$request->input('search') ? '' : $request->input('search');
        $don_vi_id = Auth::user()->don_vi_id;

        $query = "
            WITH XUAT_THU AS (
                SELECT kh.id,ptc.ngay, 0 AS xuat,  ptc.so_tien AS thu
                FROM khach_hang kh
                LEFT JOIN phieu_thu_chi ptc ON kh.id = ptc.khach_hang_id
                WHERE ptc.loai = 0
                AND ptc.trang_thai = 1
                AND ptc.DELETED_AT IS NULL

                UNION ALL

                SELECT kh.id,hd.ngay, COALESCE(hd.tong_tien, 0) AS xuat, 0
                FROM khach_hang kh
                LEFT JOIN hoa_don hd ON kh.id = hd.khach_hang_id
                WHERE hd.DELETED_AT IS NULL
                AND hd.loai = 1
            )

            SELECT kh.id, kh.ten, kh.dia_chi, kh.dien_thoai,
                    SUM(CASE WHEN NC.ngay < ? THEN NC.xuat ELSE 0 END)
                    - SUM(CASE WHEN NC.ngay < ? THEN NC.thu ELSE 0 END)
                    AS ton_dau,
                    SUM(CASE WHEN NC.ngay >= ? AND NC.ngay <= ? THEN NC.xuat ELSE 0 END) AS xuat,
                    SUM(CASE WHEN NC.ngay >= ? AND NC.ngay <= ? THEN NC.thu ELSE 0 END) AS thu,
                    SUM(CASE WHEN NC.ngay < ? THEN NC.xuat ELSE 0 END)
                    - SUM(CASE WHEN NC.ngay < ? THEN NC.thu ELSE 0 END)
                    + SUM(CASE WHEN NC.ngay >= ? AND NC.ngay <= ? THEN NC.xuat ELSE 0 END)
                    - SUM(CASE WHEN NC.ngay >= ? AND NC.ngay <= ? THEN NC.thu ELSE 0 END) AS ton_cuoi
            FROM khach_hang kh
            JOIN users u ON kh.created_by = u.id AND u.don_vi_id = ?
            LEFT JOIN XUAT_THU NC ON NC.id = kh.id
            WHERE (KH.ten LIKE '%$search%' OR KH.dien_thoai LIKE '%$search%' OR KH.dia_chi LIKE '%$search%')
            GROUP BY kh.id, kh.ten, kh.dia_chi, kh.dien_thoai
            HAVING xuat > 0 OR thu > 0 OR ton_dau > 0 OR ton_cuoi > 0
        ";

        $khach_hang_list = DB::select($query, [$ngayBatDau, $ngayBatDau,$ngayBatDau, $ngayKetThuc,$ngayBatDau, $ngayKetThuc,$ngayBatDau, $ngayBatDau, $ngayBatDau, $ngayKetThuc,$ngayBatDau, $ngayKetThuc, $don_vi_id]);

        return Inertia::render('BaoCaoCongNo/KhachHang', compact('khach_hang_list'));
    }

    public function chiTietKhachHang(Request $request)
    {
        $id = $request->input('id');
        $query = "(SELECT KH.ten as ten_kh, KH.dia_chi, KH.dien_thoai, HD.ngay, HD.ma, SP.ten AS san_pham, DVT.ten AS dvt,
                           CTHD.so_luong, CTHD.gia, CTHD.so_luong * CTHD.gia AS thanh_tien, 0 as thu
                    FROM hoa_don HD
                    LEFT JOIN khach_hang KH ON HD.khach_hang_id = KH.id
                    LEFT JOIN chi_tiet_hoa_don CTHD ON CTHD.hoa_don_id = HD.id
                    LEFT JOIN san_pham SP ON CTHD.san_pham_id = SP.id
                    LEFT JOIN don_vi_tinh DVT ON SP.don_vi_tinh_id = DVT.id
                    WHERE HD.deleted_at IS NULL
                    AND HD.loai = 1
                    AND HD.khach_hang_id = ?)
                    UNION
                    (SELECT KH.ten, KH.dia_chi, KH.dien_thoai, PTC.ngay, PTC.ma,'Phiếu thu','','','',0, PTC.so_tien as thu
                    FROM phieu_thu_chi PTC
                    LEFT JOIN khach_hang KH ON PTC.khach_hang_id = KH.id
                    WHERE PTC.deleted_at IS NULL
                    AND PTC.loai = 0
                    AND PTC.trang_thai = 1
                    AND PTC.khach_hang_id = ?
                    )
                    ORDER BY NGAY ASC";
        $khach_hang = DB::select($query, [$id, $id]);
        return response()->json($khach_hang);
    }

    public function print(Request $request)
    {
        $ngay_bat_dau = $request->input('ngay_bat_dau');
        $ngay_ket_thuc = $request->input('ngay_ket_thuc');
        $hdpc = $request->input('hdpc');
        $ton_dau = $request->input('ton_dau');
        $so_tien_nhap_moi = $request->input('so_tien_nhap_moi');
        $so_tien_chi_moi = $request->input('so_tien_chi_moi');
        return Inertia::render('BaoCaoCongNo/Print', compact('ngay_bat_dau', 'ngay_ket_thuc', 'hdpc', 'ton_dau', 'so_tien_nhap_moi', 'so_tien_chi_moi'));
    }
}
