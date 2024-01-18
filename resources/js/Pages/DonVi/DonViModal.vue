<script setup>
import {watchEffect} from "vue";
import {router, useForm} from "@inertiajs/vue3";

const props = defineProps({
    don_vi: Object,
})

const form = useForm({
    id: "",
    ten: "",
    dia_chi: "",
    dien_thoai: "",
    email: "",
    stk_1: "",
    stk_2: "",
    logo: "",
})

watchEffect(() => {
    form.id = props.don_vi.id
    form.ten = props.don_vi.ten
    form.dia_chi = props.don_vi.dia_chi
    form.dien_thoai = props.don_vi.dien_thoai
    form.email = props.don_vi.email
    form.stk_1 = props.don_vi.stk_1
    form.stk_2 = props.don_vi.stk_2
    form.logo = props.don_vi.logo
})
const submit = () => {
    form.post(route('donvi.store'), {
        onSuccess: () => {
            $('#donvimodal').modal('hide');
            router.visit(route('donvi.index'))
        },
        onError: () => {
            console.log(form.errors)
        }
    })
}

const closeModal = () => {
    $('#donvimodal').modal('hide');
    form.reset();
    form.clearErrors();
}

</script>

<template>
    <div id="donvimodal" class="modal fade" tabindex="-1" role="dialog">
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
                                   <span v-if="don_vi.id" class="txt-color mb-0 font-weight-bold">Sửa đơn vị</span>
                                   <span v-else class="txt-color mb-0 font-weight-bold">Thêm đơn vị</span>
                               </div>

                               <div class="form-group">
                                   <label for="ten">Tên</label>
                                   <div>
                                       <input :class="{ 'border-danger' : form.errors.ten }" type="text" v-model="form.ten" class="form-control" id="ten" />
<!--                                       <InputError :message="form.errors.ten" />-->
                                   </div>
                               </div>

                               <div class="form-group">
                                   <label for="dia_chi">Địa chỉ</label>
                                   <div>
                                       <input :class="{ 'border-danger' : form.errors.dia_chi }" type="text" v-model="form.dia_chi" class="form-control" id="dia_chi" />
<!--                                       <InputError :message="form.errors.dia_chi" />-->
                                   </div>
                               </div>

                               <div class="form-group">
                                   <label for="dien_thoai">Điện thoại</label>
                                   <div>
                                       <input :class="{ 'border-danger' : form.errors.dien_thoai }" type="number" v-model="form.dien_thoai" class="form-control" id="dien_thoai" />
<!--                                       <InputError :message="form.errors.dien_thoai" />-->
                                   </div>
                               </div>

                                <div class="form-group">
                                    <label for="email">Email</label>
                                    <div>
                                        <input :class="{ 'border-danger' : form.errors.email }" type="email" v-model="form.email" class="form-control" id="email" />
<!--                                        <InputError :message="form.errors.email" />-->
                                    </div>
                                </div>

                               <div class="form-group">
                                   <label for="stk_1">Số tài khoản 1</label>
                                   <div>
                                       <input :class="{ 'border-danger' : form.errors.stk_1 }" type="text" v-model="form.stk_1" class="form-control" id="stk_1" />
<!--                                       <InputError :message="form.errors.stk_1" />-->
                                   </div>
                               </div>

                               <div class="form-group">
                                   <label for="stk_2">Số tài khoản 2</label>
                                   <div>
                                       <input :class="{ 'border-danger' : form.errors.stk_2 }" type="text" v-model="form.stk_2" class="form-control" id="stk_2" />
<!--                                       <InputError :message="form.errors.stk_2" />-->
                                   </div>
                               </div>

                               <div class="form-group">
                                   <label for="logo">Logo</label>
                                   <div>
                                       <input :class="{ 'border-danger' : form.errors.logo }" type="file" @input="form.logo = $event.target.files[0] "  id="logo" />
                                       <!--                                        <InputError :message="form.errors.logo" />-->
                                   </div>
                               </div>

                               <img :src="'/uploads/' + don_vi.logo" class="p-3">
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
