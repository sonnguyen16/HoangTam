<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class PhieuThuChiRequest extends FormRequest
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
        $rules = [
            'id' => '',
            'ma' => 'required',
            'ly_do' => 'required',
            'so_tien' => 'required|numeric|min:0',
            'nhan_vien_id' => 'required',
            'trang_thai' => 'required',
//            'du_an_id' => 'required',
            'loai' => 'required',
            'loai_thu_chi_id' => 'required',
        ];

        if($this->loai == 0) {
            $rules['khach_hang_id'] = 'required';
        }

        if($this->loai == 1) {
            $rules['nha_cung_cap_id'] = 'required';
        }
        return $rules;
    }

    /**
     * Get the error messages for the defined validation rules.
     *
     * @return array<string, string>
     */

    public function messages(): array
    {
        return [
            'ma.required' => 'Mã phiếu thu chi không được để trống',
            'ly_do.required' => 'Lý do không được để trống',
            'so_tien.required' => 'Số tiền không được để trống',
            'so_tien.numeric' => 'Số tiền phải là số',
            'so_tien.min' => 'Số tiền phải lớn hơn 0',
            'nhan_vien_id.required' => 'Nhân viên không được để trống',
            'trang_thai.required' => 'Trạng thái không được để trống',
            'du_an_id.required' => 'Dự án không được để trống',
            'loai.required' => 'Loại không được để trống',
            'loai_thu_chi_id.required' => 'Loại thu chi không được để trống',
            'khach_hang_id.required' => 'Khách hàng không được để trống',
            'nha_cung_cap_id.required' => 'Nhà cung cấp không được để trống',
        ];
    }
}
