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
        Schema::table('de_xuat', function (Blueprint $table) {
            $table->text('noi_dung')->nullable()->change();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('de_xuat', function (Blueprint $table) {
            $table->string('noi_dung')->nullable(false)->change();
        });
    }
};
