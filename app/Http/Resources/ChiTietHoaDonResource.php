<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class ChiTietHoaDonResource extends JsonResource
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
            'hoa_don_id' => $this->hoa_don_id,
            'san_pham' => new SanPhamResource($this->san_pham()),
            'so_luong' => $this->so_luong,
            'gia' => $this->gia,
            'thanh_tien' => $this->thanh_tien(),
        ];
    }
}
