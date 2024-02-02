<?php

namespace App\Http\Controllers;

use App\Http\Resources\SanPhamResource;
use App\Models\DonViTinh;
use App\Models\LoaiSanPham;
use App\Models\SanPham;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;

class BaoCaoTonKhoController extends Controller
{
    public function index(Request $request)
    {
        $ngayBatDau = !$request->input('ngay_bat_dau') ? '2024-01-01' : $request->input('ngay_bat_dau');
        $ngayKetThuc = !$request->input('ngay_ket_thuc') ? '2025-01-01' : $request->input('ngay_ket_thuc');
        $search = !$request->input('search') ? '' : $request->input('search');
        $don_vi_id = Auth::user()->don_vi_id;

        $query = "
            WITH NHAP_XUAT_TON AS (
                SELECT SP.id, '2024-01-01' AS ngay, SP.ton_dau AS nhap, 0 AS xuat, 0 AS dieu_chinh
                FROM san_pham SP
                UNION ALL
                SELECT cthd.san_pham_id, hd.ngay , cthd.so_luong AS nhap, 0 AS xuat, 0 AS dieu_chinh
                FROM hoa_don hd
                LEFT JOIN chi_tiet_hoa_don cthd ON cthd.hoa_don_id = hd.id
                WHERE LOAI = 0
                UNION ALL
                SELECT cthd.san_pham_id, hd.ngay , 0 AS nhap, cthd.so_luong AS xuat, 0 AS dieu_chinh
                FROM hoa_don hd
                LEFT JOIN chi_tiet_hoa_don cthd ON cthd.hoa_don_id = hd.id
                WHERE LOAI = 1
                UNION ALL
                SELECT tk.san_pham_id, DATE_SUB(tk.updated_at,INTERVAL 7 HOUR) AS ngay, 0 as nhap, 0 AS xuat, tk.so_luong AS dieu_chinh
                FROM ton_kho tk
                WHERE DELETED_AT IS NULL
            )
            SELECT SP.ma, SP.ten, DVT.ten dvt, COALESCE(td.ton_dau, 0) as ton_dau, COALESCE(nx.nhap, 0) as nhap, COALESCE(nx.xuat, 0) as xuat, COALESCE(nx.dieu_chinh, 0) as dieu_chinh,
                     SUM(COALESCE(td.ton_dau, 0) + COALESCE(nx.nhap, 0) - COALESCE(nx.xuat, 0) + COALESCE(nx.dieu_chinh, 0)) ton_cuoi
            FROM san_pham SP
            JOIN users u ON SP.created_by = u.id AND u.don_vi_id = ?
            LEFT JOIN don_vi_tinh DVT ON DVT.id = SP.don_vi_tinh_id
            LEFT JOIN ( SELECT NXT.id , SUM(COALESCE(NXT.NHAP, 0) - COALESCE(NXT.XUAT, 0) + COALESCE(NXT.dieu_chinh, 0)) as ton_dau
                        FROM NHAP_XUAT_TON NXT
                        WHERE NGAY < ?
                        GROUP BY NXT.id
                        ) td ON td.id = SP.id
            LEFT JOIN ( SELECT NXT.id ,SUM(COALESCE(NXT.NHAP, 0)) nhap, SUM(COALESCE(NXT.XUAT, 0)) xuat, SUM(COALESCE(NXT.dieu_chinh, 0)) dieu_chinh
                        FROM NHAP_XUAT_TON NXT
                        WHERE NGAY >= ? AND NGAY <= ?
                        GROUP BY NXT.id
                        ) nx ON nx.id = SP.id
            WHERE SP.ten LIKE '%$search%' OR SP.ma LIKE '%$search%'
            GROUP BY SP.ma, SP.ten, DVT.ten, td.ton_dau, nx.nhap, nx.xuat, nx.dieu_chinh
        ";

        $san_pham_list = DB::select($query, [ $don_vi_id, $ngayBatDau, $ngayBatDau, $ngayKetThuc]);

        return Inertia::render('BaoCaoTonKho/Index', compact('san_pham_list'));
    }
}
