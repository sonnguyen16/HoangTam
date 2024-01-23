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
        Schema::create('hoa_don', function (Blueprint $table) {
            $table->id();
            $table->string('ma');
            $table->date('ngay');
            $table->integer('loai');
            $table->foreignIdFor(\App\Models\NhaCungCap::class, 'nha_cung_cap_id')->nullable();
            $table->foreignIdFor(\App\Models\KhachHang::class, 'khach_hang_id')->nullable();
            $table->foreignIdFor(\App\Models\Kho::class, 'kho_id');
            $table->string('ghi_chu')->nullable();
            $table->timestamps();
            $table->softDeletes();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('hoa_don');
    }
};
