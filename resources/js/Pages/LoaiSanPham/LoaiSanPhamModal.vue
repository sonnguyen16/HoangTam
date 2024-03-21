<script setup>
import {watchEffect} from "vue";
import {router, useForm} from "@inertiajs/vue3";

const props = defineProps({
    loai_san_pham: Object,
})

const form = useForm({
    id: "",
    ten: "",
})

watchEffect(() => {
    form.id = props.loai_san_pham.id
    form.ten = props.loai_san_pham.ten
})
const submit = () => {
    form.post(route('loaisanpham.store'), {
        onSuccess: () => {
            closeModal()
        },
        onError: () => {
            console.log(form.errors)
        }
    })
}

const closeModal = () => {
    $('#loaisanphammodal').modal('hide');
    form.reset();
    form.clearErrors();
}

</script>

<template>
    <div id="loaisanphammodal" class="modal fade" tabindex="-1" role="dialog">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="close" @click.prevent="closeModal">&times;</button>
                </div>
                <form @submit.prevent="submit">
                    <div class="modal-body">
                        <input type="hidden" v-model="form.id" id="id" class="form-control"/>

                        <div class="form-group">
                            <label for="name">Tên loại SP</label>
                            <input :class="{ 'border-danger' : form.errors.ten }" type="text" v-model="form.ten" class="form-control" id="ten" />
                        </div>
<!--                        <InputError :message="form.errors.ten" />-->

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
