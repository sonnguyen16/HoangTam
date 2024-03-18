<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class DeXuatRequest extends FormRequest
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
            'ten' => 'required',
            'noi_dung' => 'required',
            'nguoi_duyet' => 'sometimes|required',
            'files' => ''
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
            'ten.required' => 'Tên không được để trống',
            'noi_dung.required' => 'Nội dung không được để trống',
            'noi_dung.max' => 'Nội dung không được quá 255 ký tự',
            'nguoi_duyet.required' => 'Người duyệt không được để trống'
        ];
    }
}
