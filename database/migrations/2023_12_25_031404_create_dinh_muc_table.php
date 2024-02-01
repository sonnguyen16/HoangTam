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
        Schema::create('dinh_muc', function (Blueprint $table) {
            $table->id();
            $table->foreignIdFor(\App\Models\SanPham::class, 'san_pham_id');
            $table->foreignIdFor(\App\Models\SanPham::class, 'nguyen_lieu_id');
            $table->double('so_luong',15,2);
            $table->timestamps();
            $table->softDeletes();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('dinh_muc');
    }
};
