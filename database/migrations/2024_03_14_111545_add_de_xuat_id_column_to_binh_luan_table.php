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
        Schema::table('binh_luan', function (Blueprint $table) {
            $table->foreignIdFor(\App\Models\DeXuat::class, 'de_xuat_id')->nullable();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('binh_luan', function (Blueprint $table) {
            $table->dropForeign(['de_xuat_id']);
            $table->dropColumn('de_xuat_id');
        });
    }
};
