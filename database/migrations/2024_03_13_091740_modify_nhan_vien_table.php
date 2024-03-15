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
        Schema::table('users', function (Blueprint $table) {
            $table->foreignIdFor(\App\Models\PhongBan::class, 'phong_ban_id')->nullable();
            $table->string('dia_chi')->nullable();
            $table->string('dien_thoai')->nullable();
            $table->string('cccd')->nullable();
            $table->date('ngay_cap')->nullable();
            $table->string('hinh_anh')->nullable();
            $table->string('ghi_chu')->nullable();
            $table->double('muc_luong',15,2)->default(0);
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('users', function (Blueprint $table) {
            $table->dropForeign(['phong_ban_id']);
            $table->dropColumn('phong_ban_id');
            $table->dropColumn('dia_chi');
            $table->dropColumn('dien_thoai');
            $table->dropColumn('cccd');
            $table->dropColumn('ngay_cap');
            $table->dropColumn('hinh_anh');
            $table->dropColumn('ghi_chu');
            $table->dropColumn('muc_luong');
        });
    }
};
