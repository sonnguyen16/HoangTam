<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;


class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        $this->call(DonViSeeder::class);
        $this->call(UserSeeder::class);
        $this->call(NhaCungCapSeeder::class);
        $this->call(KhachHangSeeder::class);
        $this->call(LoaiSanPhamSeeder::class);
        $this->call(DonViTinhSeeder::class);
        $this->call(KhoSeeder::class);
        $this->call(SanPhamSeeder::class);
    }
}
