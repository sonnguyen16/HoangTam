<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class NguoiDungRequest extends FormRequest
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
            "don_vi_id" => "required",
        ];

        if(!isset($this->id)) {
            $rules['password'] = "required";
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
            "password.required" => "Mật khẩu không được để trống",
            "don_vi_id.required" => "Đơn vị không được để trống",
        ];
    }
}
