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
            $table->foreignIdFor(App\Models\DuAn::class, 'du_an_id')->nullable()->change();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('phieu_thu_chi', function (Blueprint $table) {
            $table->foreignIdFor(App\Models\DuAn::class, 'du_an_id')->change();
        });
    }
};
