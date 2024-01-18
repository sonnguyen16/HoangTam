<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table("users")->insert([
            [
                "name" => "admin",
                "email" => "admin@gmail.com",
                "password" => bcrypt("123456"),
                "don_vi_id" => 1,
                "role" => 0
            ],
            [
                "name" => "user1",
                "email" => "user1@gmail.com",
                "password" => bcrypt("123456"),
                "don_vi_id" => 1,
                "role" => 1
            ],
            [
                "name" => "user2",
                "email" => "user2@gmail.com",
                "password" => bcrypt("123456"),
                "don_vi_id" => 2,
                "role" => 1
            ],
        ]);
    }
}
