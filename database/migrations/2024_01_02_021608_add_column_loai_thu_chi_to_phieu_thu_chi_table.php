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
        Schema::table('phieu_thu_chi', function (Blueprint $table) {
            $table->foreignIdFor(App\Models\LoaiThuChi::class, 'loai_thu_chi_id');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('phieu_thu_chi', function (Blueprint $table) {
            $table->dropColumn('loai_thu_chi_id');
        });
    }
};
