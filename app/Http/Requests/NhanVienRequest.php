<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class NhanVienRequest extends FormRequest
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
            "id" => "",
            "name" => "required",
            "email" => "required|email",
            "role" => "",
            "phong_ban_id" => "required",
            "dia_chi" => "",
            "dien_thoai" => "",
            "cccd" => "",
            "ngay_cap" => "",
            "hinh_anh" => "",
            "ghi_chu" => "",
            "muc_luong" => "",
        ];

        if(!isset($this->id)) {
            $rules['password'] = "required";
            $rules['email'] = "required|email|unique:users,email";
        }

        if(isset($this->password) && isset($this->id)) {
            $rules['password'] = "";
        }

        return $rules;
    }

    /**
     * Get the error messages for the defined validation rules.
     */
    public function messages(): array
    {
        return [
            "name.required" => "Tên nhân viên không được để trống",
            "email.required" => "Email không được để trống",
            "email.email" => "Email không đúng định dạng",
            "email.unique" => "Email đã tồn tại",
            "password.required" => "Mật khẩu không được để trống",
            "phong_ban_id.required" => "Phòng ban không được để trống",
        ];
    }
}
