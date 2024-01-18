<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class KhachHangRequest extends FormRequest
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
            'dia_chi' => 'required',
            'dien_thoai' => 'required|numeric',
            'website' => '',
            'ghi_chu' => '',
            'ton_dau' => '',
        ];
    }

    public function messages()
    {
        return [
            'ten.required' => 'Tên khách hàng không được để trống',
            'ten.max' => 'Tên khách hàng không được quá 255 ký tự',
            'dia_chi.required' => 'Địa chỉ không được để trống',
            'dien_thoai.required' => 'Điện thoại không được để trống',
            'dien_thoai.numeric' => 'Điện thoại phải là số',
            'website.required' => 'Website không được để trống',
            'website.url' => 'Website không đúng định dạng',
        ];
    }
}
