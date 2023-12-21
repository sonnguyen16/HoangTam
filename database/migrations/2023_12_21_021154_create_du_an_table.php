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
        Schema::create('du_an', function (Blueprint $table) {
            $table->id();
            $table->string('ten');
            $table->nestedSet();
            $table->date('ngay_bat_dau');
            $table->date('ngay_ket_thuc');
            $table->foreignIdFor(\App\Models\User::class, 'user_id');
            $table->string('mo_ta');
            $table->integer('trang_thai');
            $table->softDeletes();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('du_an');
    }
};
