<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class KhoSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('kho')->insert([
            [
                'ten' => 'Kho 1',
                'created_by' => '2',
            ],
            [
                'ten' => 'Kho 2',
                'created_by' => '2',
            ],
            [
                'ten' => 'Kho 3',
                'created_by' => '3',
            ],
            [
                'ten' => 'Kho 4',
                'created_by' => '3',
            ]
        ]);
    }
}
