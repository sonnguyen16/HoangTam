<script setup>
import {watchEffect} from "vue";
import {router, useForm} from "@inertiajs/vue3";
import InputError from "@/Components/InputError.vue";

const props = defineProps({
    phong_ban: Object,
})

const form = useForm({
    id: "",
    ten: "",
})

watchEffect(() => {
    form.id = props.phong_ban.id
    form.ten = props.phong_ban.ten
})
const submit = () => {
    form.post(route('phongban.store'), {
        onSuccess: () => {
            closeModal()
        },
        onError: () => {
            console.log(form.errors)
        }
    })
}

const closeModal = () => {
    $('#phongbanmodal').modal('hide');
    form.reset();
    form.clearErrors();
}

</script>

<template>
    <div id="phongbanmodal" class="modal fade" tabindex="-1" role="dialog">
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
                                <span v-if="phong_ban.id" class="txt-color mb-0 font-weight-bold">Sửa phòng ban</span>
                                <span v-else class="txt-color mb-0 font-weight-bold">Thêm phòng ban</span>
                            </div>

                            <div class="form-group">
                                <label for="ten">Tên</label>
                                <div>
                                    <input :class="{ 'border-danger' : form.errors.ten }" type="text" v-model="form.ten" class="form-control" id="ten" />
<!--                                    <InputError :message="form.errors.ten" />-->
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
