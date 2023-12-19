<script setup>
import {watchEffect} from "vue";
import {router, useForm} from "@inertiajs/vue3";
import InputError from "@/Components/InputError.vue";

const props = defineProps({
    don_vi_tinh: Object,
})

const form = useForm({
    id: "",
    ten: "",
})

watchEffect(() => {
    form.id = props.don_vi_tinh.id
    form.ten = props.don_vi_tinh.ten
})
const submit = () => {
    form.post(route('donvitinh.store'), {
        onSuccess: () => {
            $('#donvitinhmodal').modal('hide');
            router.visit(route('donvitinh.index'))
        },
        onError: () => {
            console.log(form.errors)
        }
    })
}

const closeModal = () => {
    $('#donvitinhmodal').modal('hide');
    form.reset();
    form.clearErrors();
}

</script>

<template>
    <div id="donvitinhmodal" class="modal fade" tabindex="-1" role="dialog">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <span v-if="don_vi_tinh.id" class="txt-color mb-0 font-weight-bold">Sửa đơn vị tính</span>
                    <span v-else class="txt-color mb-0 font-weight-bold">Thêm đơn vị tính</span>
                    <button type="button" class="close" @click.prevent="closeModal">&times;</button>
                </div>
                <form @submit.prevent="submit">
                    <div class="modal-body">
                        <input type="hidden" v-model="form.id" id="id" class="form-control"/>

                        <div class="form-group">
                            <label for="name">Tên đơn vị tính</label>
                            <input :class="{ 'border-danger' : form.errors.ten }" type="text" v-model="form.ten" class="form-control" id="ten" />

                        </div>
                        <InputError :message="form.errors.ten" />

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
