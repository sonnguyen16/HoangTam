<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class DonHangRequest extends FormRequest
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
        $rule = [
            'id' => '',
            'ma' => '',
            'loai' => 'required|numeric',
            'ghi_chu' => ''
        ];

        if($this->loai == 0){
            $rule['nha_cung_cap_id'] = 'required';
        }else{
            $rule['khach_hang_id'] = 'required';
        }

        return $rule;
    }

    public function messages()
    {
        return [
            'loai.required' => 'Loại không được để trống',
            'loai.numeric' => 'Loại phải là số',
            'nha_cung_cap_id.required' => 'Nhà cung cấp không được để trống',
            'khach_hang_id.required' => 'Khách hàng không được để trống',
        ];
    }
}
