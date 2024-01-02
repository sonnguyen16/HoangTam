<?php

namespace App\Http\Controllers;

use App\Models\NhaCungCap;
use App\Models\KhachHang;
use App\Models\DuAn;
use App\Models\User;
use App\Models\LoaiThuChi;
use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Http\Requests\PhieuThuChiRequest;
use App\Models\PhieuThuChi;
use Carbon\Carbon;

class PhieuThuChiController extends Controller
{
    public function index(Request $request, $loai = null)
    {
        $request->loai == 'phieuthu' ? $loai = '0' : $loai = '1';
        $query = PhieuThuChi::query()->whereNull('deleted_at')->where('loai', $loai)
            ->with(['nha_cung_cap', 'khach_hang', 'nhan_vien', 'du_an', 'loai_thu_chi']);

        $nha_cung_cap_list = NhaCungCap::query()->whereNull('deleted_at')->get();
        $khach_hang_list = KhachHang::query()->whereNull('deleted_at')->get();
        $du_an_list = DuAn::query()->whereNull('parent_id')->whereNull('deleted_at')->get();
        $nhan_vien_list = User::query()->whereNull('deleted_at')->where('role', 1)->get();
        $loai_thu_chi_list = LoaiThuChi::query()->whereNull('deleted_at')->where('loai', $loai)->get();

        if ($request->filled('search')) {
            $search = $request->search;
            $query->where(function ($query) use ($search) {
                $query->where('ma', 'like', "%{$search}%")
                    ->orWhereHas('nha_cung_cap', function ($query) use ($search) {
                        $query->where('ten', 'like', "%{$search}%");
                    })->orWhereHas('khach_hang', function ($query) use ($search) {
                        $query->where('ten', 'like', "%{$search}%");
                    })->orWhereHas('nhan_vien', function ($query) use ($search) {
                        $query->where('name', 'like', "%{$search}%");
                    })->orWhereHas('du_an', function ($query) use ($search) {
                        $query->where('ten', 'like', "%{$search}%");
                    });
            });
        }

        $phieu_thu_chi_list = $query->paginate(10)->withQueryString();

        $component = $loai == '0' ? 'PhieuThu/Index' : 'PhieuChi/Index';

        return Inertia::render($component, compact('phieu_thu_chi_list', 'nha_cung_cap_list', 'khach_hang_list', 'du_an_list', 'nhan_vien_list', 'loai_thu_chi_list'));
    }

    public function store(PhieuThuChiRequest $request)
    {
        $data = $request->validated();
        PhieuThuChi::updateOrCreate(['id' => $data['id']], $data);
    }

    public function delete(Request $request)
    {
        $phieu_thu_chi = PhieuThuChi::find($request->id);
        $phieu_thu_chi->deleted_at = Carbon::now();
        $phieu_thu_chi->save();
    }
}
