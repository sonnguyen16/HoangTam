<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class KhachHangSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('khach_hang')->insert([
            [
                'ten' => 'Khách hàng 1',
                'dia_chi' => 'Địa chỉ 1',
                'dien_thoai' => '0123456789',
                'website' => 'https://www.google.com',
                'created_by' => '2',
            ],
            [
                'ten' => 'Khách hàng 2',
                'dia_chi' => 'Địa chỉ 2',
                'dien_thoai' => '0123456789',
                'website' => 'https://www.google.com',
                'created_by' => '2',
            ],
            [
                'ten' => 'Khách hàng 3',
                'dia_chi' => 'Địa chỉ 3',
                'dien_thoai' => '0123456789',
                'website' => 'https://www.google.com',
                'created_by' => '3',
            ],
            [
                'ten' => 'Khách hàng 4',
                'dia_chi' => 'Địa chỉ 4',
                'dien_thoai' => '0123456789',
                'website' => 'https://www.google.com',
                'created_by' => '3',
            ]
        ]);
    }
}
