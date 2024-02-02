<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class SanPhamResource extends JsonResource
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
            'ten' => $this->ten,
            'gia_ban' => $this->gia_ban,
            'gia_nhap' => $this->gia_nhap,
            'don_vi_tinh' => $this->don_vi_tinh(),
            'loai_san_pham' => $this->loai_san_pham(),
            'mo_ta' => $this->mo_ta,
            'ton_dau' => $this->ton_dau,
            'dinh_muc' => DinhMucResource::collection($this->dinh_muc()),
        ];
    }
}
