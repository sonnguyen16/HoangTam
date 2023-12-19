<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class KhoRequest extends FormRequest
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
            'ten' => 'required|max:255',
        ];
    }

    public function messages()
    {
        return [
            'ten.required' => 'Tên không được để trống',
            'ten.max' => 'Tên không được quá 255 ký tự',
        ];
    }
}
