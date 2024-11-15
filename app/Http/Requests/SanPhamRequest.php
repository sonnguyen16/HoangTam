<?php

namespace App\Http\Requests;

use App\Models\SanPham;
use Illuminate\Foundation\Http\FormRequest;

class SanPhamRequest extends FormRequest
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
            'ma' => '',
            'ten' => 'required|max:255',
            'gia_ban' => 'required|numeric|min:0',
            'gia_nhap' => 'required|numeric|min:0',
            'don_vi_tinh_id' => 'required|numeric',
            'ton_dau' => 'numeric|min:0',
            'canh_bao' => 'numeric|min:0',
            'loai_san_pham_id' => 'required|numeric',
            'mo_ta' => '',
        ];

        if(isset($this->id)){
            $san_pham = SanPham::find($this->id);
            $rules['ma'] = $san_pham->ma != $this->ma ?
                'required|max:255|unique:san_pham,ma'
                : 'required|max:255';
        }

        return $rules;
    }

    public function messages()
    {
        return [
            'ma.required' => 'Mã sản phẩm không được để trống',
            'ma.max' => 'Mã sản phẩm không được quá 255 ký tự',
            'ma.unique' => 'Mã sản phẩm đã tồn tại',
            'ten.required' => 'Tên sản phẩm không được để trống',
            'ten.max' => 'Tên sản phẩm không được quá 255 ký tự',
            'gia_ban.required' => 'Giá bán không được để trống',
            'gia_ban.numeric' => 'Giá bán phải là số',
            'gia_ban.min' => 'Giá bán phải lớn hơn hoặc bằng 0',
            'gia_nhap.required' => 'Giá nhập không được để trống',
            'gia_nhap.numeric' => 'Giá nhập phải là số',
            'gia_nhap.min' => 'Giá nhập phải lớn hơn hoặc bằng 0',
            'don_vi_tinh_id.required' => 'Đơn vị tính không được để trống',
            'don_vi_tinh_id.numeric' => 'Đơn vị tính phải là số',
            'ton_dau.numeric' => 'Tồn đầu phải là số',
            'ton_dau.min' => 'Tồn đầu phải lớn hơn hoặc bằng 0',
            'canh_bao.numeric' => 'Cảnh báo phải là số',
            'canh_bao.min' => 'Cảnh báo phải lớn hơn hoặc bằng 0',
            'canh_bao.required' => 'Cảnh báo không được để trống',
            'loai_san_pham_id.required' => 'Loại sản phẩm không được để trống',
            'loai_san_pham_id.numeric' => 'Loại sản phẩm phải là số',
            // 'mo_ta.required' => 'Mô tả không được để trống',
        ];
    }
}
