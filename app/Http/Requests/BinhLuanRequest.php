<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class BinhLuanRequest extends FormRequest
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
            'id' => [''],
            'noi_dung' => ['required', 'string'],
            'du_an_id' => '',
            'de_xuat_id' => '',
        ];
    }

    /**
     * Get the error messages for the defined validation rules.
     *
     * @return array<string, string>
     */
    public function messages(): array
    {
        return [
            'noi_dung.required' => 'Nội dung không được để trống',
        ];
    }

}
