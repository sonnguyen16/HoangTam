<?php

namespace App\Http\Resources;

use App\Models\ChiTietDonHang;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class DonHangResource extends JsonResource
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
            'nha_cung_cap' => $this->nha_cung_cap(),
            'khach_hang' => $this->khach_hang(),
            'chi_tiet_don_hang' => ChiTietDonHangResource::collection($this->chi_tiet_don_hang()),
            'tong_tien' => $this->tong_tien(),
            'created_at' => $this->created_at->format('d/m/Y H:i:s'),
            'updated_at' => $this->updated_at->format('d/m/Y H:i:s'),
            'ghi_chu' => $this->ghi_chu,
        ];
    }
}
