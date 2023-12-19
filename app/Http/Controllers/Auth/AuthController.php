<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Inertia\Inertia;
use Inertia\Response;
use App\Http\Requests\LoginRequest;
use Illuminate\Http\RedirectResponse;
use Illuminate\Support\Facades\Auth;
use Illuminate\Http\Request;
use Illuminate\Validation\ValidationException;


class AuthController extends Controller
{
    public function index()
    {
        if (Auth::guard('web')->check()) {
            return redirect()->route('khachhang.index');
        }
        return Inertia::render('Auth/SignIn');
    }

    public function login(LoginRequest $request): RedirectResponse
    {
        $validated = $request->validated();

        if (!Auth::guard('web')->attempt($validated)) {
            throw ValidationException::withMessages([
                'email' => 'Email hoặc mật khẩu không đúng',
            ]);
        }

        $request->session()->regenerate();

        return redirect()->route('khachhang.index');
    }

    public function destroy(Request $request): RedirectResponse
    {
        Auth::guard('web')->logout();

        $request->session()->invalidate();

        $request->session()->regenerateToken();

        return redirect('/');
    }
}
