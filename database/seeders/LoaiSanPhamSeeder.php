<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class LoaiSanPhamSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('loai_san_pham')->insert([
            [
                'ten' => 'Loại sản phẩm 1',
                'created_by' => '2',
            ],
            [
                'ten' => 'Loại sản phẩm 2',
                'created_by' => '2',
            ],
            [
                'ten' => 'Loại sản phẩm 3',
                'created_by' => '3',
            ],
            [
                'ten' => 'Loại sản phẩm 4',
                'created_by' => '3',
            ]
        ]);
    }
}
