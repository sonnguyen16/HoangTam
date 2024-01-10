<script setup>
import {watchEffect} from "vue";
import {router, useForm} from "@inertiajs/vue3";
import InputError from "@/Components/InputError.vue";

const props = defineProps({
    nha_cung_cap: Object,
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
    form.id = props.nha_cung_cap.id
    form.ten = props.nha_cung_cap.ten
    form.dia_chi = props.nha_cung_cap.dia_chi
    form.dien_thoai = props.nha_cung_cap.dien_thoai
    form.website = props.nha_cung_cap.website
    form.ghi_chu = props.nha_cung_cap.ghi_chu
})
const submit = () => {
    form.post(route('nhacungcap.store'), {
        onSuccess: () => {
            $('#nhacungcapmodal').modal('hide');
            router.visit(route('nhacungcap.index'))
        },
        onError: () => {
            console.log(form.errors)
        }
    })
}

const closeModal = () => {
    $('#nhacungcapmodal').modal('hide');
    form.reset();
    form.clearErrors();
}

</script>

<template>
    <div id="nhacungcapmodal" class="modal fade" tabindex="-1" role="dialog">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="close" @click.prevent="closeModal">&times;</button>
                </div>
                <form @submit.prevent="submit">
                    <div class="modal-body">
                        <input type="hidden" v-model="form.id" id="id" class="form-control"/>

                        <div class="form-group-container">
                            <div class="form-group-title">
                                <span v-if="nha_cung_cap.id" class="txt-color mb-0 font-weight-bold">Sửa nhà cung cấp</span>
                                <span v-else class="txt-color mb-0 font-weight-bold">Thêm nhà cung cấp</span>
                            </div>

                            <div class="form-group">
                                <label for="ten">Tên</label>
                                <div>
                                    <input :class="{ 'border-danger' : form.errors.ten }" type="text" v-model="form.ten" class="form-control" id="ten" />
                                    <InputError :message="form.errors.ten" />
                                </div>
                            </div>

                            <div class="form-group">
                                <label for="dia_chi">Địa chỉ</label>
                                <div>
                                    <input :class="{ 'border-danger' : form.errors.dia_chi }" type="text" v-model="form.dia_chi" class="form-control" id="dia_chi" />
                                    <InputError :message="form.errors.dia_chi" />
                                </div>
                            </div>

                            <div class="form-group">
                                <label for="dien_thoai">Điện thoại</label>
                                <div>
                                    <input :class="{ 'border-danger' : form.errors.dien_thoai }" type="number" v-model="form.dien_thoai" class="form-control" id="dien_thoai" />
                                    <InputError :message="form.errors.dien_thoai" />
                                </div>
                            </div>

                            <div class="form-group">
                                <label for="website">Website</label>
                                <div>
                                    <input :class="{ 'border-danger' : form.errors.website }" type="text" v-model="form.website" class="form-control" id="website" />
                                    <InputError :message="form.errors.website" />
                                </div>
                            </div>

                            <div class="form-group">
                                <label for="ghi_chu">Ghi chú</label>
                                <div>
                                    <input type="text" v-model="form.ghi_chu" class="form-control" id="ghi_chu" />
                                    <InputError :message="form.errors.ghi_chu" />
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
