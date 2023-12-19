<script setup>
import {watchEffect} from "vue";
import {router, useForm} from "@inertiajs/vue3";
import InputError from "@/Components/InputError.vue";

const props = defineProps({
    san_pham: Object,
    don_vi_tinh_list: Object,
})

const form = useForm({
    id: "",
    ten: "",
    mo_ta: "",
    gia_ban: 0,
    gia_nhap: 0,
    don_vi_tinh_id: "",
})

watchEffect(() => {
    form.id = props.san_pham.id
    form.ten = props.san_pham.ten
    form.gia_ban = props.san_pham.gia_ban
    form.gia_nhap = props.san_pham.gia_nhap
    form.don_vi_tinh_id = props.san_pham.don_vi_tinh_id
    form.mo_ta = props.san_pham.mo_ta
})
const submit = () => {
    form.post(route('sanpham.store'), {
        onSuccess: () => {
            $('#sanphammodal').modal('hide');
            router.visit(route('sanpham.index'))
        },
        onError: () => {
            console.log(form.errors)
        }
    })
}

const closeModal = () => {
    $('#sanphammodal').modal('hide');
    form.reset();
    form.clearErrors();
}

</script>

<template>
    <div id="sanphammodal" class="modal fade" tabindex="-1" role="dialog">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <span v-if="form.id" class="txt-color mb-0 font-weight-bold">Sửa sản phẩm</span>
                    <span v-else class="txt-color mb-0 font-weight-bold">Thêm sản phẩm</span>
                    <button type="button" class="close" @click.prevent="closeModal">&times;</button>
                </div>
                <form @submit.prevent="submit">
                    <div class="modal-body">
                        <input type="hidden" v-model="form.id" id="id" class="form-control"/>

                        <div class="form-group">
                            <label for="name">Tên sản phẩm</label>
                            <input :class="{ 'border-danger' : form.errors.ten }" type="text" v-model="form.ten" class="form-control" id="ten" />

                        </div>
                        <InputError :message="form.errors.ten" />

                        <div class="form-group">
                            <label for="name">Mô tả</label>
                            <input :class="{ 'border-danger' : form.errors.mo_ta }" type="text" v-model="form.mo_ta" class="form-control" id="mo_ta" />
                        </div>
                        <InputError :message="form.errors.mo_ta" />


                        <div class="form-group">
                            <label for="name">Giá nhập</label>
                            <input :class="{ 'border-danger' : form.errors.gia_nhap }" type="number" v-model="form.gia_nhap" class="form-control" id="gia_nhap" />
                        </div>
                        <InputError :message="form.errors.gia_nhap" />

                        <div class="form-group">
                            <label for="name">Giá bán</label>
                            <input :class="{ 'border-danger' : form.errors.gia_ban }" type="number" v-model="form.gia_ban" class="form-control" id="gia_ban" />
                        </div>
                        <InputError :message="form.errors.gia_ban" />

                        <div class="form-group">
                            <label>Đơn vị tính</label>
                            <select :class="{ 'border-danger' : form.errors.don_vi_tinh_id }" v-model="form.don_vi_tinh_id" class="form-control" id="don_vi_tinh_id">
                                <option value="">Chọn đơn vị tính</option>
                                <option v-for="don_vi_tinh in don_vi_tinh_list" :key="don_vi_tinh.id" :value="don_vi_tinh.id">
                                    {{ don_vi_tinh.ten }}
                                </option>
                            </select>
                        </div>
                        <InputError :message="form.errors.don_vi_tinh_id" />
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
