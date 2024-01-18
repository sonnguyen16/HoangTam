<?php

namespace App\Providers;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\ServiceProvider;
use Inertia\Inertia;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     */
    public function register(): void
    {
        Model::unguard();
    }

    /**
     * Bootstrap any application services.
     */
    public function boot(): void
    {
        Inertia::share([
            'user' => function () {
                $user = Auth::guard('web')->user();
                return $user ? $user : null;
            },
            'don_vi' => function () {
                $user = Auth::guard('web')->user();
                return $user ? $user->don_vi()->first() : null;
            },
        ]);
    }

}
