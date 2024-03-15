<script setup>
import {onMounted, watchEffect} from "vue";
import {router, useForm} from "@inertiajs/vue3";

const props = defineProps({
    nhan_vien: Object,
    phong_ban_list: Object,
})

const form = useForm({
    id: "",
    name: "",
    email: "",
    password: "",
    role: 1,
    phong_ban_id: "",
    dia_chi: "",
    dien_thoai: "",
    cccd: "",
    ngay_cap: "",
    ghi_chu: "",
    muc_luong: 0,
    hinh_anh: "",
})

watchEffect(() => {
    form.id = props.nhan_vien.id
    form.name = props.nhan_vien.name
    form.email = props.nhan_vien.email
    form.phong_ban_id = props.nhan_vien.phong_ban_id
    form.dia_chi = props.nhan_vien.dia_chi
    form.dien_thoai = props.nhan_vien.dien_thoai
    form.cccd = props.nhan_vien.cccd
    form.ngay_cap = props.nhan_vien.ngay_cap
    form.ghi_chu = props.nhan_vien.ghi_chu
    form.muc_luong = props.nhan_vien.muc_luong
    form.hinh_anh = props.nhan_vien.hinh_anh
})
const submit = () => {
    form.post(route('nhanvien.store'), {
        onSuccess: () => {
            $('#nhanvienmodal').modal('hide');
            router.visit(route('nhanvien.index'))
        },
        onError: () => {
            console.log(form.errors)
        }
    })
}

const closeModal = () => {
    $('#nhanvienmodal').modal('hide');
    form.reset();
    form.clearErrors();
}

function updateImage(event){
    form.hinh_anh = event.target.files[0]

}

</script>

<template>
    <div id="nhanvienmodal" class="modal fade" tabindex="-1" role="dialog">
        <div class="modal-dialog modal-xl" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="close" @click.prevent="closeModal">&times;</button>
                </div>
                <form @submit.prevent="submit">
                    <div class="modal-body">
                            <input type="hidden" v-model="form.id" class="form-control"/>

                            <div class="form-group-container">
                                <div class="form-group-title">
                                    <span v-if="nhan_vien.id" class="txt-color mb-0 font-weight-bold">Sửa nhân viên</span>
                                    <span v-else class="txt-color mb-0 font-weight-bold">Thêm nhân viên</span>
                                </div>

                               <div class="row">
                                   <div class="col-2 d-flex align-items-center">
                                       <img width="100%" v-if="nhan_vien.hinh_anh" id="logo_img"  :src="'/uploads/nhan_vien/' +form.hinh_anh" class="mb-3">
                                       <img width="100%" v-else id="logo_img"  src="/uploads/avatardefault.png" class="mb-3">
                                   </div>
                                   <div class="col-5">
                                       <div class="form-group">
                                           <label for="ten">Tên</label>
                                           <div>
                                               <input :class="{ 'border-danger' : form.errors.name }" type="text" v-model="form.name" class="form-control" />
                                               <!--                                        <InputError :message="form.errors.name" />-->
                                           </div>
                                       </div>

                                       <div class="form-group">
                                           <label for="email">Email</label>
                                           <div>
                                               <input :class="{ 'border-danger' : form.errors.email }" type="text" v-model="form.email" class="form-control" />
                                               <!--                                        <InputError :message="form.errors.email" />-->
                                           </div>
                                       </div>

                                       <div class="form-group">
                                           <label for="password">Mật khẩu</label>
                                           <div>
                                               <input autocomplete :class="{ 'border-danger' : form.errors.password }" type="password" v-model="form.password" class="form-control" id="password" />
                                               <!--                                        <InputError :message="form.errors.password" />-->
                                           </div>
                                       </div>

                                       <div class="form-group">
                                           <label for="phong_ban_id">Phòng ban</label>
                                           <div>
                                               <select :class="{ 'border-danger' : form.errors.phong_ban_id }" v-model="form.phong_ban_id" class="form-control" id="phong_ban_id">
                                                   <option v-for="phong_ban in phong_ban_list" :value="phong_ban.id" :key="phong_ban.id">{{ phong_ban.ten }}</option>
                                               </select>
                                               <!--                                        <InputError :message="form.errors.phong_ban_id" />-->
                                           </div>
                                       </div>

                                       <div class="form-group">
                                           <label for="dia_chi">Địa chỉ</label>
                                           <div>
                                               <input :class="{ 'border-danger' : form.errors.dia_chi }" type="text" v-model="form.dia_chi" class="form-control" />
                                               <!--                                        <InputError :message="form.errors.dia_chi" />-->
                                           </div>
                                       </div>

                                       <div class="form-group">
                                           <label for="hinh_anh">Hình ảnh</label>
                                           <div>
                                               <input :class="{ 'border-danger' : form.errors.hinh_anh }"
                                                      type="file" accept="image/*"
                                                      id="hinh_anh"
                                                      @input="updateImage($event)"
                                               />
                                               <!--                                        <InputError :message="form.errors.hinh_anh" />-->
                                           </div>
                                       </div>
                                   </div>
                                   <div class="col-5">
                                       <div class="form-group">
                                           <label for="dien_thoai">Điện thoại</label>
                                           <div>
                                               <input :class="{ 'border-danger' : form.errors.dien_thoai }" type="text" v-model="form.dien_thoai" class="form-control" />
                                               <!--                                        <InputError :message="form.errors.dien_thoai" />-->
                                           </div>
                                       </div>
                                       <div class="form-group">
                                           <label for="cccd">CCCD</label>
                                           <div>
                                               <input :class="{ 'border-danger' : form.errors.cccd }" type="text" v-model="form.cccd" class="form-control" id="cccd" />
                                               <!--                                        <InputError :message="form.errors.cccd" />-->
                                           </div>
                                       </div>

                                       <div class="form-group">
                                           <label for="ngay_cap">Ngày cấp</label>
                                           <div>
                                               <input :class="{ 'border-danger' : form.errors.ngay_cap }" type="date" v-model="form.ngay_cap" class="form-control" id="ngay_cap" />
                                               <!--                                        <InputError :message="form.errors.ngay_cap" />-->
                                           </div>
                                       </div>

                                       <div class="form-group">
                                           <label for="ghi_chu">Ghi chú</label>
                                           <div>
                                               <input :class="{ 'border-danger' : form.errors.ghi_chu }" type="text" v-model="form.ghi_chu" class="form-control" id="ghi_chu" />
                                               <!--                                        <InputError :message="form.errors.ghi_chu" />-->
                                           </div>
                                       </div>

                                       <div class="form-group">
                                           <label for="muc_luong">Mức lương</label>
                                           <div>
                                               <input :class="{ 'border-danger' : form.errors.muc_luong }" type="text" v-model="form.muc_luong" class="form-control" id="muc_luong" />
                                               <!--                                        <InputError :message="form.errors.muc_luong" />-->
                                           </div>
                                       </div>


                                   </div>
                               </div>
                            </div>

                    </div>
                    <div class="modal-footer">
                        <button type="submit" :disabled="form.processing" class="btn btn-primary" >Lưu</button>
                        <button type="button" class="btn btn-default" @click.prevent="closeModal">Hủy</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<style scoped>

</style>
