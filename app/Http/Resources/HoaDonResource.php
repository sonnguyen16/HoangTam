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
            'khach_hang' => $this->khach_hang()->first(),
            'kho' => $this->kho()->first(),
            'chi_tiet_hoa_don' => ChiTietHoaDonResource::collection($this->chi_tiet_hoa_don()),
            'tong_tien' => $this->tong_tien(),
            'created_at' => $this->created_at->format('d/m/Y H:i:s'),
            'updated_at' => $this->updated_at->format('d/m/Y H:i:s'),
            'ghi_chu' => $this->ghi_chu,
        ];
    }
}
