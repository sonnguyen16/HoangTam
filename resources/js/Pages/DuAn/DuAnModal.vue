<script setup>
import {watchEffect} from "vue";
import {router, useForm} from "@inertiajs/vue3";
import InputError from "@/Components/InputError.vue";

const props = defineProps({
    du_an: Object,
    users: Object,
})

const form = useForm({
    id: "",
    ten: "",
    ngay_bat_dau: "",
    ngay_ket_thuc: "",
    user_id: "",
    mo_ta: "",
    trang_thai: "",
    parent_id: "",
    children: [],
    files: []
})

watchEffect(() => {
    form.id = props.du_an.id
    form.ten = props.du_an.ten
    form.ngay_bat_dau = props.du_an.ngay_bat_dau
    form.ngay_ket_thuc = props.du_an.ngay_ket_thuc
    form.user_id = props.du_an.user_id
    form.mo_ta = props.du_an.mo_ta
    form.trang_thai = props.du_an.trang_thai
    form.parent_id = props.du_an.parent_id
    form.children = props.du_an.children
    form.files = props.du_an.files
})
const submit = () => {
    form.post(route('duan.store'), {
        onSuccess: () => {
            $('#duanmodal').modal('hide');
            $('#xemduanmodal').modal('hide');
            router.reload();
        },
        onError: () => {
            console.log(form.errors)
        }
    })
}

const closeModal = () => {
    $('#duanmodal').modal('hide');
    form.reset();
    form.clearErrors();
    $('#files').val('');
}


</script>

<template>
    <div id="duanmodal" class="modal fade" tabindex="-1" style="z-index: 1051" role="dialog">
        <div class="modal-dialog modal-xl" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <span v-if="du_an.id" class="txt-color mb-0 font-weight-bold">Sửa dự án</span>
                    <span v-else class="txt-color mb-0 font-weight-bold">Thêm dự án</span>
                    <button type="button" class="close" @click.prevent="closeModal">&times;</button>
                </div>
                        <form @submit.prevent="submit">
                            <div class="modal-body">
                                <input type="hidden" v-model="form.id" id="id" class="form-control"/>

                                <div class="form-group">
                                    <label for="name">Tên dự án</label>
                                    <input :class="{ 'border-danger' : form.errors.ten }" type="text" v-model="form.ten" class="form-control" id="ten" />

                                </div>
                                <InputError :message="form.errors.ten" />

                                <input type="hidden" v-model="form.parent_id">

                                <div class="form-group">
                                    <label for="name">Ngày bắt đầu</label>
                                    <input :class="{ 'border-danger' : form.errors.ngay_bat_dau }" type="date" v-model="form.ngay_bat_dau" class="form-control" id="ngay_bat_dau" />
                                </div>
                                <InputError :message="form.errors.ngay_bat_dau" />

                                <div class="form-group">
                                    <label for="name">Ngày kết thúc</label>
                                    <input :class="{ 'border-danger' : form.errors.ngay_ket_thuc }" type="date" v-model="form.ngay_ket_thuc" class="form-control" id="ngay_ket_thuc" />
                                </div>
                                <InputError :message="form.errors.ngay_ket_thuc" />

                                <div class="form-group">
                                    <label for="name">Mô tả</label>
                                    <textarea :class="{ 'border-danger' : form.errors.mo_ta }" type="text" v-model="form.mo_ta" class="form-control" id="mo_ta" ></textarea>
                                </div>
                                <InputError :message="form.errors.mo_ta" />

                                <div class="form-group">
                                    <label for="name">Trạng thái</label>
                                    <select :class="{ 'border-danger' : form.errors.trang_thai }" v-model="form.trang_thai" class="form-control" id="trang_thai">
                                        <option value="">Chọn trạng thái</option>
                                        <option value="0">Chưa triển khai</option>
                                        <option value="1">Đang triển khai</option>
                                        <option value="2">Đã hoàn thành</option>
                                    </select>
                                </div>
                                <InputError :message="form.errors.trang_thai" />

                                <div class="form-group">
                                    <label for="name">Người phụ trách</label>
                                    <select :class="{ 'border-danger' : form.errors.user_id }" v-model="form.user_id" class="form-control" id="user_id">
                                        <option value="">Chọn người phụ trách</option>
                                        <option v-for="user in users" :key="user.id" :value="user.id">{{ user.name }}</option>
                                    </select>
                                </div>
                                <InputError :message="form.errors.user_id" />

                                <div class="form-group">
                                    <label for="name">Tệp đính kèm</label>
                                    <br>
                                    <input accept=".png, .jpg, .jpeg, .gif, .bmp, .doc, .docx, .xls, .xlsx, .pdf"
                                           type="file"
                                           @input="form.files = $event.target.files"
                                           id="files"
                                           multiple/>
                                </div>
                                <ul>
                                    <li v-for="file in form.files" :key="file.id">
                                        <a :href="`/uploads/${file.ten}`" target="_blank">{{ file.ten }}</a>
                                    </li>
                                </ul>

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
