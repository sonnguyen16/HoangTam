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
        Schema::table('nha_cung_cap', function (Blueprint $table) {
            $table->integer('ton_dau')->default(0);
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('nha_cung_cap', function (Blueprint $table) {
            $table->dropColumn('ton_dau');
        });
    }
};