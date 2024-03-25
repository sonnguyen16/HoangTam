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
        Schema::table('du_an', function (Blueprint $table) {
            $table->dropColumn('trang_thai');
            $table->double('tien_do')->default(0)->after('mo_ta');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('du_an', function (Blueprint $table) {
            $table->integer('trang_thai')->default(0);
            $table->dropColumn('tien_do');
        });
    }
};
