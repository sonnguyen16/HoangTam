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
        for ($i = 0; $i < 100; $i++) {
            DB::table('khach_hang')->insert([
                'ten' => 'Khách hàng ' . $i,
                'dia_chi' => 'Địa chỉ ' . $i,
                'dien_thoai' => rand(1000000000, 9999999999),
                'website' => 'https://example.com',
                'ghi_chu' => 'Ghi chú ' . $i,
            ]);
        }
    }
}
