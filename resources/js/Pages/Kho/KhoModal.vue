<script setup>
import {watchEffect} from "vue";
import {router, useForm} from "@inertiajs/vue3";


const props = defineProps({
    kho: Object,
})

const form = useForm({
    id: "",
    ten: "",
})

watchEffect(() => {
    form.id = props.kho.id
    form.ten = props.kho.ten
})
const submit = () => {
    form.post(route('kho.store'), {
        onSuccess: () => {
            $('#khomodal').modal('hide');
            router.visit(route('kho.index'))
        },
        onError: () => {
            console.log(form.errors)
        }
    })
}

const closeModal = () => {
    $('#khomodal').modal('hide');
    form.reset();
    form.clearErrors();
}

</script>

<template>
    <div id="khomodal" class="modal fade" tabindex="-1" role="dialog">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <span v-if="kho.id" class="txt-color mb-0 font-weight-bold">Sửa kho</span>
                    <span v-else class="txt-color mb-0 font-weight-bold">Thêm kho</span>
                    <button type="button" class="close" @click.prevent="closeModal">&times;</button>
                </div>
                <form @submit.prevent="submit">
                    <div class="modal-body">
                        <input type="hidden" v-model="form.id" id="id" class="form-control"/>

                        <div class="form-group">
                            <label for="name">Tên kho</label>
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
