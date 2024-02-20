<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class HoaDonResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'id' => $this->id,
            'ma' => $this->ma,
            'nha_cung_cap' => $this->nha_cung_cap()->first(),
            'du_an_id' => $this->du_an_id,
            'khach_hang' => $this->khach_hang()->first(),
            'no_moi_kh' => $this->khach_hang()->first()->no_moi() + $this->tong_tien(),
            'no_cu_kh' => $this->khach_hang()->first()->cong_no(),
            'no_moi_ncc' => $this->nha_cung_cap()->first()->no_moi() + $this->tong_tien(),
            'no_cu_ncc' => $this->nha_cung_cap()->first()->cong_no(),
            'loai' => $this->loai,
            'ngay' => $this->ngay,
            'kho' => $this->kho()->first(),
            'chi_tiet_hoa_don' => ChiTietHoaDonResource::collection($this->chi_tiet_hoa_don()->get()),
            'tong_tien' => $this->tong_tien(),
            'created_at' => $this->created_at,
            'updated_at' => $this->updated_at,
            'ghi_chu' => $this->ghi_chu,
        ];
    }
}
