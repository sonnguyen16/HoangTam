<script setup>
import {onMounted, watchEffect, onUpdated, watch} from "vue";
import {router, useForm} from "@inertiajs/vue3";

const props = defineProps({
    de_xuat: Object,
    nhan_vien_list: Object,
})

const emit = defineEmits(['reload'])

const form = useForm({
    id: "",
    ten: "",
    noi_dung: "",
    nguoi_duyet: {},
    nguoi_theo_doi: [],
    file: "",
})

watchEffect(() => {
    form.id = props.de_xuat.id
    form.ten = props.de_xuat.ten
    form.noi_dung = props.de_xuat.noi_dung
    form.nguoi_duyet = props.de_xuat.nguoi_duyet.id
    form.file = props.de_xuat.file
})
const submit = () => {
    form.post(route('dexuat.store'), {
        onSuccess: () => {
            emit('reload', form.id)
            closeModal()
        },
        onError: () => {
            console.log(form.errors)
        }
    })
}

const closeModal = () => {
    form.reset();
    form.clearErrors();
    $('#dexuatmodal').modal('hide');
    $('#nguoi_theo_doi').val(null).trigger('change');
}

function updateImage(event){
    form.file = event.target.files
}

onMounted(() => {
   $('#nguoi_theo_doi').select2().on('change', function (e) {
        form.nguoi_theo_doi = $(this).val();
   });
})

</script>

<template>
    <div id="dexuatmodal" class="modal fade" role="dialog">
        <div class="modal-dialog modal-lg" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="close" @click.prevent="closeModal">&times;</button>
                </div>
                <form @submit.prevent="submit">
                    <div class="modal-body">
                            <input type="hidden" v-model="form.id" class="form-control"/>

                            <div class="form-group-container">
                                <div class="form-group-title">
                                    <span v-if="de_xuat.id" class="txt-color mb-0 font-weight-bold">Sửa đề xuất</span>
                                    <span v-else class="txt-color mb-0 font-weight-bold">Thêm đề xuất</span>
                                </div>

                                <div v-show="!form.id" class="form-group">
                                    <label for="ten">Tên đề xuất</label>
                                    <input v-model="form.ten" type="text" :class="{'border border-danger' : form.errors.ten}" name="ten" class="form-control"
                                           placeholder="Nhập tên đề xuất">
                                </div>

                                <div v-show="!form.id" class="form-group">
                                    <label for="noi_dung">Nội dung</label>
                                    <textarea v-model="form.noi_dung" :class="{'border border-danger' : form.errors.noi_dung}" name="noi_dung" class="form-control"
                                              placeholder="Nhập nội dung đề xuất"></textarea>
                                </div>

                                <div  class="form-group">
                                    <label for="nguoi_duyet">Người duyệt</label>
                                    <select v-model="form.nguoi_duyet" :class="{'border border-danger' : form.errors.nguoi_duyet}" name="nguoi_duyet" class="form-control">
                                        <option v-for="nv in nhan_vien_list" :value="nv.id">{{nv.name}}</option>
                                    </select>
                                </div>

                                <div class="form-group">
                                    <label for="nguoi_theo_doi">Người theo dõi</label>
                                    <select id="nguoi_theo_doi"
                                            v-model="form.nguoi_theo_doi"
                                            :class="{'border border-danger' : form.errors.nguoi_theo_doi}"
                                            name="nguoi_theo_doi[]" class="form-control"
                                            multiple
                                            >
                                        <option v-for="nv in nhan_vien_list" :value="nv.id">{{nv.name}}</option>
                                    </select>
                                </div>

                                <div v-show="!form.id" class="form-group">
                                    <label for="file">File đính kèm</label>
                                    <input type="file" :class="{'border border-danger' : form.errors.file}" name="file"
                                           placeholder="Chọn file đính kèm" multiple @change="updateImage">
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
