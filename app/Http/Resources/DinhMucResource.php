<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class DinhMucResource extends JsonResource
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
            'san_pham' => $this->san_pham(),
            'so_luong' => $this->so_luong,
            'don_vi_tinh' => $this->san_pham()->first()->don_vi_tinh(),
        ];
    }
}
