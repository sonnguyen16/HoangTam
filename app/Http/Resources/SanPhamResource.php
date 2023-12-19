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
            'ten' => $this->ten,
            'gia_ban' => $this->gia_ban,
            'gia_nhap' => $this->gia_nhap,
            'don_vi_tinh' => $this->don_vi_tinh(),
            'mo_ta' => $this->mo_ta,
        ];
    }
}
