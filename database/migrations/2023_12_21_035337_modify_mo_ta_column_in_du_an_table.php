<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class ModifyMoTaColumnInDuAnTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('du_an', function (Blueprint $table) {
            $table->text('mo_ta')->nullable()->change();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('du_an', function (Blueprint $table) {
            $table->text('mo_ta')->nullable(false)->change();
        });
    }
}

