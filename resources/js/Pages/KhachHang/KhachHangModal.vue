<script setup>
import {watchEffect} from "vue";
import {router, useForm} from "@inertiajs/vue3";
import InputError from "@/Components/InputError.vue";

const props = defineProps({
    khach_hang: Object,
})

const form = useForm({
    id: "",
    ten: "",
    dia_chi: "",
    dien_thoai: "",
    website: "",
    ghi_chu: "",
})

watchEffect(() => {
    form.id = props.khach_hang.id
    form.ten = props.khach_hang.ten
    form.dia_chi = props.khach_hang.dia_chi
    form.dien_thoai = props.khach_hang.dien_thoai
    form.website = props.khach_hang.website
    form.ghi_chu = props.khach_hang.ghi_chu
})
const submit = () => {
    form.post(route('khachhang.store'), {
        onSuccess: () => {
            $('#khachhangmodal').modal('hide');
            router.visit(route('khachhang.index'))
        },
        onError: () => {
            console.log(form.errors)
        }
    })
}

const closeModal = () => {
    $('#khachhangmodal').modal('hide');
    form.reset();
    form.clearErrors();
}

</script>

<template>
    <div id="khachhangmodal" class="modal fade" tabindex="-1" role="dialog">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <span v-if="khach_hang.id" class="txt-color mb-0 font-weight-bold">Sửa khách hàng</span>
                    <span v-else class="txt-color mb-0 font-weight-bold">Thêm khách hàng</span>
                    <button type="button" class="close" @click.prevent="closeModal">&times;</button>
                </div>
                <form @submit.prevent="submit">
                    <div class="modal-body">
                            <input type="hidden" v-model="form.id" id="id" class="form-control"/>

                            <div class="form-group">
                                <label for="name">Tên khách hàng</label>
                                <input :class="{ 'border-danger' : form.errors.ten }" type="text" v-model="form.ten" class="form-control" id="ten" />

                            </div>
                            <InputError :message="form.errors.ten" />


                            <div class="form-group">
                                <label for="name">Địa chỉ</label>
                                <input :class="{ 'border-danger' : form.errors.dia_chi }" type="text" v-model="form.dia_chi" class="form-control" id="dia_chi" />

                            </div>
                            <InputError :message="form.errors.dia_chi" />

                            <div class="form-group">
                                <label for="name">Điện thoại</label>
                                <input :class="{ 'border-danger' : form.errors.dien_thoai }" type="number" v-model="form.dien_thoai" class="form-control" id="dien_thoai" />
                            </div>
                            <InputError :message="form.errors.dien_thoai" />

                            <div class="form-group">
                                <label for="name">Website</label>
                                <input :class="{ 'border-danger' : form.errors.website }" type="text" v-model="form.website" class="form-control" id="website" />
                            </div>
                            <InputError :message="form.errors.website" />

                            <div class="form-group">
                                <label for="name">Ghi chú</label>
                                <input type="text" v-model="form.ghi_chu" class="form-control" id="ghi_chu" />
                            </div>
                            <InputError :message="form.errors.ghi_chu" />

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
