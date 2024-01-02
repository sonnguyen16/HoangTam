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
        Schema::create('phieu_thu_chi', function (Blueprint $table) {
            $table->id();
            $table->string('ma');
            $table->string('ly_do');
            $table->foreignIdFor(App\Models\KhachHang::class, 'khach_hang_id')->nullable();
            $table->foreignIdFor(App\Models\NhaCungCap::class, 'nha_cung_cap_id')->nullable();
            $table->integer('so_tien');
            $table->foreignIdFor(App\Models\User::class, 'nhan_vien_id');
            $table->foreignIdFor(App\Models\DuAn::class, 'du_an_id');
            $table->integer('trang_thai')->default(0);
            $table->integer('loai')->default(0);
            $table->timestamps();
            $table->softDeletes();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('phieu_thu_chi');
    }
};
