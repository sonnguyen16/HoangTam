<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class DonViSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('don_vi')->insert([
            [
                'ten' => 'Hoàng Tâm',
                'dia_chi' => 'Trương Công Định',
                'dien_thoai' => '0123456789',
                'email' => 'hoangtam@gmail.com'
            ],
            [
                'ten' => 'BVU',
                'dia_chi' => 'Trương Văn Bang',
                'dien_thoai' => '0123456789',
                'email' => 'bvu@edu.vn'
            ]
        ]);
    }
}
