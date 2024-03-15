<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class PhongBanRequest extends FormRequest
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
            'id' => '',
            'ten' => 'required|string|max:255',
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
            'ten.required' => 'Tên phòng ban không được để trống',
            'ten.string' => 'Tên phòng ban phải là chuỗi',
            'ten.max' => 'Tên phòng ban không được quá 255 ký tự',
        ];
    }
}
