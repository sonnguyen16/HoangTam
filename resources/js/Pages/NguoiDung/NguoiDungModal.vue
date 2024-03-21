<script setup>
import {onMounted, onUpdated, watchEffect} from "vue";
import {router, useForm} from "@inertiajs/vue3";

const props = defineProps({
    nguoi_dung: Object,
    don_vi_list: Object
})

const form = useForm({
    id: "",
    name: "",
    email: "",
    password: "",
    role: 1,
    don_vi_id: "",
})

watchEffect(() => {
    form.id = props.nguoi_dung.id
    form.name = props.nguoi_dung.name
    form.email = props.nguoi_dung.email
    form.don_vi_id = props.nguoi_dung.don_vi_id
})
const submit = () => {
    form.post(route('nguoidung.store'), {
        onSuccess: () => {
            closeModal()
        },
        onError: () => {
            console.log(form.errors)
        }
    })
}

const closeModal = () => {
    $('#nguoidungmodal').modal('hide');
    form.reset();
    form.clearErrors();
}

onMounted(() => {
    $('#don_vi_id').select2({
        placeholder: "Chọn đơn vị",
        width: '100%'
    }).on('change', function (e) {
        form.don_vi_id = $(this).val();
    });
})

onUpdated(() => {
    $('#don_vi_id').select2({
        placeholder: "Chọn đơn vị",
        width: '100%'
    });
})

</script>

<template>
    <div id="nguoidungmodal" class="modal fade" tabindex="-1" role="dialog">
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
                                    <span v-if="nguoi_dung.id" class="txt-color mb-0 font-weight-bold">Sửa người dùng</span>
                                    <span v-else class="txt-color mb-0 font-weight-bold">Thêm người dùng</span>
                                </div>

                                <div class="form-group">
                                    <label for="ten">Tên</label>
                                    <div>
                                        <input :class="{ 'border-danger' : form.errors.name }" type="text" v-model="form.name" class="form-control" id="ten" />
<!--                                        <InputError :message="form.errors.name" />-->
                                    </div>
                                </div>

                                <div class="form-group">
                                    <label for="email">Email</label>
                                    <div>
                                        <input :class="{ 'border-danger' : form.errors.email }" type="text" v-model="form.email" class="form-control" id="email" />
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
                                    <label for="don_vi_id">Đơn vị</label>
                                    <div>
                                        <select :class="{ 'border-danger' : form.errors.don_vi_id }" v-model="form.don_vi_id" class="form-control" id="don_vi_id">
                                            <option value="">Chọn đơn vị</option>
                                            <option v-for="don_vi in don_vi_list" :value="don_vi.id">{{ don_vi.ten }}</option>
                                        </select>
<!--                                        <InputError :message="form.errors.don_vi_id" />-->
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
