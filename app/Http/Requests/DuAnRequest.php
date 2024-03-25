<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class DuAnRequest extends FormRequest
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
            'id' => [],
            'ten' => ['required', 'string', 'max:255'],
            'user_id' => ['required', 'exists:users,id'],
            'parent_id' => ['nullable'],
            'mo_ta' => [''],
            'ngay_bat_dau' => ['required', 'date'],
            'ngay_ket_thuc' => ['required', 'date', 'after:ngay_bat_dau'],
            'tien_do' => ['integer', 'min:0', 'max:100'],
            'files' => [],
            'nguoi_theo_doi' => [],
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
            'ten.required' => 'Tên dự án không được để trống',
            'ten.string' => 'Tên dự án phải là chuỗi',
            'ten.max' => 'Tên dự án không được quá 255 ký tự',
            'user_id.required' => 'Người phụ trách không được để trống',
            'user_id.exists' => 'Người phụ trách không tồn tại',
            'parent_id.exists' => 'Dự án cha không tồn tại',
            'mo_ta.string' => 'Mô tả phải là chuỗi',
            'mo_ta.max' => 'Mô tả không được quá 255 ký tự',
            'mo_ta.required' => 'Mô tả không được để trống',
            'ngay_bat_dau.required' => 'Ngày bắt đầu không được để trống',
            'ngay_bat_dau.date' => 'Ngày bắt đầu phải là ngày',
            'ngay_ket_thuc.required' => 'Ngày kết thúc không được để trống',
            'ngay_ket_thuc.date' => 'Ngày kết thúc phải là ngày',
            'ngay_ket_thuc.after' => 'Ngày kết thúc phải sau ngày bắt đầu',
            'tien_do.integer' => 'Tiến độ phải là số nguyên',
            'tien_do.min' => 'Tiến độ không được nhỏ hơn 0',
            'tien_do.max' => 'Tiến độ không được lớn hơn 100',
        ];
    }
}
