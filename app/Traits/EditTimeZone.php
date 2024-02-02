<?php

namespace App\Traits;
use Carbon\Carbon;


trait EditTimeZone
{
    protected static function bootEditTimeZone()
    {
        static::creating(function($model) {
            $model->created_at = Carbon::now('Asia/Ho_Chi_Minh');
            $model->updated_at = Carbon::now('Asia/Ho_Chi_Minh');
        });

        static::updating(function($model) {
            $model->updated_at = Carbon::now('Asia/Ho_Chi_Minh');
        });
    }
}

