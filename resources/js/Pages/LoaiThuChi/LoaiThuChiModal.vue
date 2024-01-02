<script setup>
import {watchEffect} from "vue";
import {router, useForm} from "@inertiajs/vue3";

const props = defineProps({
    loai_thu_chi: Object,
})

const form = useForm({
    id: "",
    ten: "",
    loai: ""
})

watchEffect(() => {
    form.id = props.loai_thu_chi.id
    form.ten = props.loai_thu_chi.ten
    form.loai = props.loai_thu_chi.loai
})
const submit = () => {
    form.post(route('loaithuchi.store'), {
        onSuccess: () => {
            $('#loaithuchimodal').modal('hide');
            router.visit(route('loaithuchi.index'))
        },
        onError: () => {
            console.log(form.errors)
        }
    })
}

const closeModal = () => {
    $('#loaithuchimodal').modal('hide');
    form.reset();
    form.clearErrors();
}

</script>

<template>
    <div id="loaithuchimodal" class="modal fade" tabindex="-1" role="dialog">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <span v-if="form.id" class="txt-color mb-0 font-weight-bold">Sửa loại thu chi</span>
                    <span v-else class="txt-color mb-0 font-weight-bold">Thêm loại thu chi</span>
                    <button type="button" class="close" @click.prevent="closeModal">&times;</button>
                </div>
                <form @submit.prevent="submit">
                    <div class="modal-body">
                        <input type="hidden" v-model="form.id" id="id" class="form-control"/>

                        <div class="form-group">
                            <label for="name">Tên loại thu chi</label>
                            <input :class="{ 'border-danger' : form.errors.ten }" type="text" v-model="form.ten" class="form-control" id="ten" />
                        </div>
<!--                        <InputError :message="form.errors.ten" />-->

                        <div class="form-group">
                            <label for="name">Loại</label>
                            <select :class="{ 'border-danger' : form.errors.loai }" v-model="form.loai" class="form-control" id="loai">
                                <option value="">Chọn loại</option>
                                <option value="0">Thu</option>
                                <option value="1">Chi</option>
                            </select>
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
