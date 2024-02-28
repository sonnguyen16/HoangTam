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
            WITH Chi AS (
                SELECT ncc.id, COALESCE(SUM(ptc.so_tien), 0) AS chi
                FROM nha_cung_cap ncc
                LEFT JOIN phieu_thu_chi ptc ON ncc.id = ptc.nha_cung_cap_id
                AND ptc.DELETED_AT IS NULL
                WHERE ptc.ngay BETWEEN ? AND ?
                AND ptc.trang_thai = 1
                GROUP BY ncc.id
            ),
            TonDau AS (
                SELECT ncc.id,
                       ncc.ton_dau + COALESCE(SUM(CASE WHEN hd.ngay < ? THEN cthd.so_luong ELSE 0 END), 0) AS ton_dau
                FROM nha_cung_cap ncc
                LEFT JOIN hoa_don hd ON ncc.id = hd.nha_cung_cap_id
                AND hd.DELETED_AT IS NULL
                LEFT JOIN chi_tiet_hoa_don cthd ON hd.id = cthd.hoa_don_id
                GROUP BY ncc.id, ncc.ton_dau
            ),
            TonCuoi AS (
                SELECT ncc.id,
                       ncc.ton_dau + COALESCE(SUM(CASE WHEN hd.ngay <= ? THEN cthd.so_luong ELSE 0 END), 0) AS ton_cuoi
                FROM nha_cung_cap ncc
                LEFT JOIN hoa_don hd ON ncc.id = hd.nha_cung_cap_id
                AND hd.DELETED_AT IS NULL
                LEFT JOIN chi_tiet_hoa_don cthd ON hd.id = cthd.hoa_don_id
                GROUP BY ncc.id, ncc.ton_dau
            )
            SELECT ncc.id, ncc.ten, ncc.dien_thoai, ncc.dia_chi, c.chi, td.ton_dau, tc.ton_cuoi
            FROM nha_cung_cap ncc
            JOIN users u ON ncc.created_by = u.id AND u.don_vi_id = ?
            LEFT JOIN Chi c ON ncc.id = c.id
            LEFT JOIN TonDau td ON ncc.id = td.id
            LEFT JOIN TonCuoi tc ON ncc.id = tc.id
            WHERE (ncc.ten LIKE '%$search%' OR ncc.dien_thoai LIKE '%%' OR ncc.dia_chi LIKE '%$search%')
            AND ncc.DELETED_AT IS NULL
            GROUP BY ncc.id, ncc.ten, ncc.dien_thoai, ncc.dia_chi, c.chi, td.ton_dau, tc.ton_cuoi
            HAVING
                SUM(
                    IFNULL(c.chi, 0) +
                    IFNULL(td.ton_dau, 0) +
                    IFNULL(tc.ton_cuoi, 0)
                ) != 0
        ";

        $nha_cung_cap_list = DB::select($query, [$ngayBatDau, $ngayKetThuc, $ngayBatDau, $ngayKetThuc, $don_vi_id]);

        return Inertia::render('BaoCaoCongNo/Index', compact('nha_cung_cap_list'));
    }

    public function chiTietNhaCungCap(Request $request)
    {
        $id = $request->input('id');
        $query = "(SELECT NCC.ten as ten_ncc, NCC.dia_chi, NCC.dien_thoai, HD.ngay, HD.ma, SP.ten AS san_pham, DVT.ten AS dvt,
                           CTHD.so_luong, CTHD.gia, CTHD.so_luong * CTHD.gia AS thanh_tien
                    FROM hoa_don HD
                    LEFT JOIN nha_cung_cap NCC ON HD.nha_cung_cap_id = NCC.id
                    LEFT JOIN chi_tiet_hoa_don CTHD ON CTHD.hoa_don_id = HD.id
                    LEFT JOIN san_pham SP ON CTHD.san_pham_id = SP.id
                    LEFT JOIN don_vi_tinh DVT ON SP.don_vi_tinh_id = DVT.id
                    WHERE HD.deleted_at IS NULL
                    AND HD.nha_cung_cap_id = ?
                    AND HD.loai = 0

                    UNION
                    SELECT NCC.ten, NCC.dia_chi, NCC.dien_thoai, PTC.ngay, PTC.ma,'','','','', PTC.so_tien
                    FROM phieu_thu_chi PTC
                    LEFT JOIN nha_cung_cap NCC ON PTC.nha_cung_cap_id = NCC.id
                    WHERE PTC.deleted_at IS NULL
                    AND PTC.loai = 1
                    AND PTC.nha_cung_cap_id = ?
                    )
                    ORDER BY NGAY DESC";
        $nha_cung_cap = DB::select($query, [$id, $id]);
        return response()->json($nha_cung_cap);
    }

    public function print(Request $request)
    {
        $ngay_bat_dau = $request->input('ngay_bat_dau');
        $ngay_ket_thuc = $request->input('ngay_ket_thuc');
        $hdpc = $request->input('hdpc');
        $ton_dau = $request->input('ton_dau');
        $ton_cuoi = $request->input('ton_cuoi');
        return Inertia::render('BaoCaoCongNo/Print', compact('ngay_bat_dau', 'ngay_ket_thuc', 'hdpc', 'ton_dau', 'ton_cuoi'));
    }

    public function chiTietKhachHang(Request $request)
    {
        $id = $request->input('id');
        $query = "(SELECT NCC.ten as ten_ncc, NCC.dia_chi, NCC.dien_thoai, HD.ngay, HD.ma, SP.ten AS san_pham, DVT.ten AS dvt,
                           CTHD.so_luong, CTHD.gia, CTHD.so_luong * CTHD.gia AS thanh_tien
                    FROM hoa_don HD
                    LEFT JOIN nha_cung_cap NCC ON HD.nha_cung_cap_id = NCC.id
                    LEFT JOIN chi_tiet_hoa_don CTHD ON CTHD.hoa_don_id = HD.id
                    LEFT JOIN san_pham SP ON CTHD.san_pham_id = SP.id
                    LEFT JOIN don_vi_tinh DVT ON SP.don_vi_tinh_id = DVT.id
                    WHERE HD.deleted_at IS NULL
                    AND HD.nha_cung_cap_id = ?
                    AND HD.loai = 0)

                    UNION

                    (SELECT NCC.ten, NCC.dia_chi, NCC.dien_thoai, PTC.ngay, PTC.ma,'','','','', PTC.so_tien
                    FROM phieu_thu_chi PTC
                    LEFT JOIN nha_cung_cap NCC ON PTC.nha_cung_cap_id = NCC.id
                    WHERE PTC.deleted_at IS NULL
                    AND PTC.loai = 1
                    AND PTC.nha_cung_cap_id = ?)

                    ORDER BY ngay DESC
                    ";
        $khach_hang = DB::select($query, [$id, $id]);
        return response()->json($khach_hang);
    }
    public function khachhang(Request $request)
    {
        $ngayBatDau = !$request->input('ngay_bat_dau') ? '2024-1-1' : $request->input('ngay_bat_dau');
        $ngayKetThuc = !$request->input('ngay_ket_thuc') ? '2025-1-1' : $request->input('ngay_ket_thuc');
        $search = !$request->input('search') ? '' : $request->input('search');
        $don_vi_id = Auth::user()->don_vi_id;

        $query = "
            WITH Thu AS (
                SELECT kh.id, COALESCE(SUM(ptc.so_tien), 0) AS thu
                FROM khach_hang kh
                LEFT JOIN phieu_thu_chi ptc ON kh.id = ptc.khach_hang_id
                AND ptc.DELETED_AT IS NULL
                WHERE ptc.ngay BETWEEN ? AND ?
                AND ptc.trang_thai = 1
                GROUP BY kh.id
            ),
            TonDau AS (
                SELECT kh.id,
                       kh.ton_dau + COALESCE(SUM(CASE WHEN hd.ngay < ? THEN cthd.so_luong ELSE 0 END), 0) AS ton_dau
                FROM khach_hang kh
                LEFT JOIN hoa_don hd ON kh.id = hd.khach_hang_id
                AND hd.DELETED_AT IS NULL
                LEFT JOIN chi_tiet_hoa_don cthd ON hd.id = cthd.hoa_don_id
                GROUP BY kh.id, kh.ton_dau
            ),
            TonCuoi AS (
                SELECT kh.id,
                       kh.ton_dau + COALESCE(SUM(CASE WHEN hd.ngay <= ? THEN cthd.so_luong ELSE 0 END), 0) AS ton_cuoi
                FROM khach_hang kh
                LEFT JOIN hoa_don hd ON kh.id = hd.khach_hang_id
                AND hd.DELETED_AT IS NULL
                LEFT JOIN chi_tiet_hoa_don cthd ON hd.id = cthd.hoa_don_id
                GROUP BY kh.id, kh.ton_dau
            )
            SELECT kh.id, kh.ten, kh.dien_thoai, kh.dia_chi, t.thu, td.ton_dau, tc.ton_cuoi
            FROM khach_hang kh
            JOIN users u ON kh.created_by = u.id AND u.don_vi_id = ?
            LEFT JOIN Thu t ON kh.id = t.id
            LEFT JOIN TonDau td ON kh.id = td.id
            LEFT JOIN TonCuoi tc ON kh.id = tc.id
            WHERE (kh.ten LIKE '%$search%' OR kh.dien_thoai LIKE '%%' OR kh.dia_chi LIKE '%$search%')
            AND kh.DELETED_AT IS NULL
            GROUP BY kh.id, kh.ten, kh.dien_thoai, kh.dia_chi, t.thu, td.ton_dau, tc.ton_cuoi
            HAVING
                SUM(
                    IFNULL(t.thu, 0) +
                    IFNULL(td.ton_dau, 0) +
                    IFNULL(tc.ton_cuoi, 0)
                ) != 0
        ";

        $khach_hang_list = DB::select($query, [$ngayBatDau, $ngayKetThuc, $ngayBatDau, $ngayKetThuc, $don_vi_id]);

        return Inertia::render('BaoCaoCongNo/KhachHang', compact('khach_hang_list'));
    }
}
