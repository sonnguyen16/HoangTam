<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class DonViRequest extends FormRequest
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
            'dia_chi' => '',
            'dien_thoai' => '',
            'email' => '',
            'stk_1' => '',
            'stk_2' => '',
            'logo' => '',
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
            'ten.required' => 'Tên đơn vị không được để trống',
          //  'dia_chi.required' => 'Địa chỉ không được để trống',
          //  'dien_thoai.required' => 'Điện thoại không được để trống',
          //  'email.required' => 'Email không được để trống',
           // 'email.email' => 'Email không đúng định dạng',
        ];
    }
}
