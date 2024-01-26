<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class NhaCungCapResource extends JsonResource
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
            'dia_chi' => $this->dia_chi,
            'dien_thoai' => $this->dien_thoai,
            'chi' => $this->chi(),
            'ton_dau' => $this->ton_dau,
            'thu' => $this->thu(),
            'so_luong_nhap' => $this->so_luong_nhap(),
            'ton_cuoi' => $this->ton_cuoi(),
        ];
    }
}
