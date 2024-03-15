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
        Schema::table('nguoi_theo_doi', function (Blueprint $table) {
            $table->foreignIdFor(\App\Models\DuAn::class, 'du_an_id')->nullable()->change();
            $table->foreignIdFor(\App\Models\DeXuat::class, 'de_xuat_id')->nullable();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('nguoi_theo_doi', function (Blueprint $table) {
            $table->dropForeign(['du_an_id']);
            $table->dropForeign(['de_xuat_id']);
            $table->foreignIdFor(\App\Models\DuAn::class, 'du_an_id')->change();
            $table->dropColumn('de_xuat_id');
        });
    }
};
