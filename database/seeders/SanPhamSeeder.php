<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class SanPhamSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('san_pham')->insert([
            [
                'ma' => 'SP1',
                'ten' => 'Sản phẩm 1',
                'mo_ta' => 'Mô tả sản phẩm 1',
                'gia_ban' => '100000',
                'gia_nhap' => '50000',
                'don_vi_tinh_id' => '1',
                'loai_san_pham_id' => '1',
                'created_by' => '2',
            ],
            [
                'ma' => 'SP2',
                'ten' => 'Sản phẩm 2',
                'mo_ta' => 'Mô tả sản phẩm 2',
                'gia_ban' => '200000',
                'gia_nhap' => '100000',
                'don_vi_tinh_id' => '2',
                'loai_san_pham_id' => '2',
                'created_by' => '2',
            ],
            [
                'ma' => 'SP3',
                'ten' => 'Sản phẩm 3',
                'mo_ta' => 'Mô tả sản phẩm 3',
                'gia_ban' => '300000',
                'gia_nhap' => '150000',
                'don_vi_tinh_id' => '3',
                'loai_san_pham_id' => '3',
                'created_by' => '3',
            ],
            [
                'ma' => 'SP4',
                'ten' => 'Sản phẩm 4',
                'mo_ta' => 'Mô tả sản phẩm 4',
                'gia_ban' => '400000',
                'gia_nhap' => '200000',
                'don_vi_tinh_id' => '4',
                'loai_san_pham_id' => '4',
                'created_by' => '3',
            ]
        ]);
    }
}
