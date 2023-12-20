<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('ton_kho', function (Blueprint $table) {
            $table->id();
            $table->foreignIdFor(\App\Models\Kho::class, 'kho_id');
            $table->foreignIdFor(\App\Models\SanPham::class, 'san_pham_id');
            $table->integer('so_luong');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('ton_kho');
    }
};
