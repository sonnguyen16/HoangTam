<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class TonKhoRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            "id" => '',
            "kho_id" => "required",
            "san_pham_id" => "required",
            "so_luong" => "required",
        ];
    }
}
