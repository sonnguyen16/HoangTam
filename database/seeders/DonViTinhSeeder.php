<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class DonViTinhSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('don_vi_tinh')->insert([
            [
                'ten' => 'Cái',
                'created_by' => '2',
            ],
            [
                'ten' => 'Hộp',
                'created_by' => '2',
            ],
            [
                'ten' => 'Thùng',
                'created_by' => '3',
            ],
            [
                'ten' => 'Chai',
                'created_by' => '3',
            ]
       ]);
    }
}
