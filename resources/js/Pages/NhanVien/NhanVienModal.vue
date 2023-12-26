<script setup>
import {watchEffect} from "vue";
import {router, useForm} from "@inertiajs/vue3";
import InputError from "@/Components/InputError.vue";

const props = defineProps({
    nhan_vien: Object,
})

const form = useForm({
    id: "",
    name: "",
    email: "",
    password: "",
    role: 1,
})

watchEffect(() => {
    form.id = props.nhan_vien.id
    form.name = props.nhan_vien.name
    form.email = props.nhan_vien.email
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

</script>

<template>
    <div id="nhanvienmodal" class="modal fade" tabindex="-1" role="dialog">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <span v-if="nhan_vien.id" class="txt-color mb-0 font-weight-bold">Sửa nhân viên</span>
                    <span v-else class="txt-color mb-0 font-weight-bold">Thêm nhân viên</span>
                    <button type="button" class="close" @click.prevent="closeModal">&times;</button>
                </div>
                <form @submit.prevent="submit">
                    <div class="modal-body">
                            <input type="hidden" v-model="form.id" id="id" class="form-control"/>

                            <div class="form-group">
                                <label for="name">Tên nhân viên</label>
                                <input :class="{ 'border-danger' : form.errors.name }" type="text" v-model="form.name" class="form-control" id="ten" />

                            </div>
                            <InputError :message="form.errors.name" />


                            <div class="form-group">
                                <label for="email">Email</label>
                                <input :class="{ 'border-danger' : form.errors.email }" type="text" v-model="form.email" class="form-control" id="email" />
                            </div>
                            <InputError :message="form.errors.email" />

                            <div class="form-group">
                                <label for="password">Mật khẩu</label>
                                <input autocomplete :class="{ 'border-danger' : form.errors.password }" type="password" v-model="form.password" class="form-control" id="password" />
                            </div>
                            <InputError :message="form.errors.password" />

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
