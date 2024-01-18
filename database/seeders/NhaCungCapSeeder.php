<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class NhaCungCapSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('nha_cung_cap')->insert([
            [
                'ten' => 'Nhà cung cấp 1',
                'dia_chi' => 'Địa chỉ 1',
                'dien_thoai' => '0123456789',
                'website' => 'https://www.google.com',
                'created_by' => '2',
            ],
            [
                'ten' => 'Nhà cung cấp 2',
                'dia_chi' => 'Địa chỉ 2',
                'dien_thoai' => '0123456789',
                'website' => 'https://www.google.com',
                'created_by' => '2',
            ],
            [
                'ten' => 'Nhà cung cấp 3',
                'dia_chi' => 'Địa chỉ 3',
                'dien_thoai' => '0123456789',
                'website' => 'https://www.google.com',
                'created_by' => '3',
            ],
            [
                'ten' => 'Nhà cung cấp 4',
                'dia_chi' => 'Địa chỉ 4',
                'dien_thoai' => '0123456789',
                'website' => 'https://www.google.com',
                'created_by' => '3',
            ]
        ]);
    }
}
