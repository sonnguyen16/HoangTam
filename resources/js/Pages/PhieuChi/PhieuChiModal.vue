<script setup>
import { watchEffect, onMounted, onUpdated} from "vue";
import {router, useForm} from "@inertiajs/vue3";

const props = defineProps({
    phieu_chi: Object,
    nha_cung_cap_list: Object,
    du_an_list: Object,
    nhan_vien_list: Object,
    loai_thu_chi_list: Object,
})

const form = useForm({
    id: "",
    ma: "",
    nha_cung_cap_id: "",
    du_an_id: "",
    nhan_vien_id: "",
    loai_thu_chi_id: "",
    ly_do: "",
    so_tien: 0,
    trang_thai: "",
    loai: 1,
})

watchEffect(() => {
    form.id = props.phieu_chi.id;
    form.ma = props.phieu_chi.ma;
    form.nha_cung_cap_id = props.phieu_chi.nha_cung_cap_id;
    form.du_an_id = props.phieu_chi.du_an_id;
    form.nhan_vien_id = props.phieu_chi.nhan_vien_id;
    form.loai_thu_chi_id = props.phieu_chi.loai_thu_chi_id;
    form.ly_do = props.phieu_chi.ly_do;
    form.so_tien = props.phieu_chi.so_tien;
    form.trang_thai = props.phieu_chi.trang_thai;
})
const submit = () => {
    if(!props.phieu_chi.id){
        form.ma = "PC" + Date.now().toString().slice(-6);
    }
    form.post(route('phieuthuchi.store'), {
        onSuccess: () => {
            $('#phieuthuchimodal').modal('hide');
            router.visit(route('phieuthuchi.index', { loai: 'phieuchi'}))
        },
        onError: () => {
            console.log(form.errors)
        }
    })
}

const closeModal = () => {
    $('#phieuthuchimodal').modal('hide');
    form.reset();
    form.clearErrors();
}

onMounted(() => {
    $('#nha_cung_cap_id').select2({
        placeholder: "Chọn nhà cung cấp",
        width: '100%',
    }).on('change', function () {
        form.nha_cung_cap_id = $(this).val();
    })

    $('#du_an_id').select2({
        placeholder: "Chọn dự án",
        width: '100%',
    }).on('change', function () {
        form.du_an_id = $(this).val();
    })

    $('#nhan_vien_id').select2({
        placeholder: "Chọn nhân viên",
        width: '100%',
    }).on('change', function () {
        form.nhan_vien_id = $(this).val();
    })
})

onUpdated(() => {
    $('#nha_cung_cap_id').select2({
        placeholder: "Chọn nhà cung cấp",
        width: '100%',
    }).val(form.nha_cung_cap_id).trigger('change')

    $('#du_an_id').select2({
        placeholder: "Chọn dự án",
        width: '100%',
    }).val(form.du_an_id).trigger('change')

    $('#nhan_vien_id').select2({
        placeholder: "Chọn nhân viên",
        width: '100%',
    }).val(form.nhan_vien_id).trigger('change')
})

</script>

<template>
    <div id="phieuthuchimodal" class="modal fade"  role="dialog">
        <div class="modal-dialog  modal-lg" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="close" @click.prevent="closeModal">&times;</button>
                </div>
                <form @submit.prevent="submit">
                    <div class="modal-body">
                        <input type="hidden" v-model="form.id" id="id" class="form-control"/>

                        <div class="form-group-container">
                            <div class="form-group-title">
                                <span v-if="phieu_chi.id" class="txt-color mb-0 font-weight-bold">Sửa phiếu chi</span>
                                <span v-else class="txt-color mb-0 font-weight-bold">Thêm phiếu chi</span>
                            </div>

                            <div class="form-group">
                                <label for="ma">Mã phiếu</label>
                                <div>
                                    <input readonly :class="{ 'border-danger' : form.errors.ma }" type="text" v-model="form.ma" class="form-control" id="ma" />
                                </div>
                            </div>

                            <div class="form-group">
                                <label for="nha_cung_cap_id">Nhà cung cấp</label>
                                <div>
                                    <select :class="{'border-danger' : form.errors.nha_cung_cap_id }" v-model="form.nha_cung_cap_id" id="nha_cung_cap_id">
                                        <option value="">Chọn nhà cung cấp</option>
                                        <option v-for="ncc in nha_cung_cap_list" :key="ncc.id" :value="ncc.id">{{ ncc.ten }}</option>
                                    </select>
                                </div>
                            </div>

<!--                            <div class="form-group">-->
<!--                                <label for="du_an_id">Dự án</label>-->
<!--                                <div>-->
<!--                                    <select :class="{ 'border-danger' : form.errors.du_an_id }" v-model="form.du_an_id" class="form-control" id="du_an_id">-->
<!--                                        <option value="">Chọn dự án</option>-->
<!--                                        <option v-for="da in du_an_list" :key="da.id" :value="da.id">{{ da.ten }}</option>-->
<!--                                    </select>-->
<!--                                </div>-->
<!--                            </div>-->

                            <div class="form-group">
                                <label for="nhan_vien_id">Nhân viên</label>
                                <div>
                                    <select :class="{ 'border-danger' : form.errors.nhan_vien_id }" v-model="form.nhan_vien_id" class="form-control" id="nhan_vien_id">
                                        <option value="">Chọn nhân viên</option>
                                        <option v-for="nv in nhan_vien_list" :key="nv.id" :value="nv.id">{{ nv.name }}</option>
                                    </select>
                                </div>
                            </div>

                            <div class="form-group">
                                <label for="loai_thu_chi_id">Loại thu chi</label>
                                <div>
                                    <select :class="{ 'border-danger' : form.errors.loai_thu_chi_id }" v-model="form.loai_thu_chi_id" class="form-control" id="loai_thu_chi_id">
                                        <option value="">Chọn loại thu chi</option>
                                        <option v-for="ltc in loai_thu_chi_list" :key="ltc.id" :value="ltc.id">{{ ltc.ten }}</option>
                                    </select>
                                </div>
                            </div>

                            <div class="form-group">
                                <label for="ly_do">Lý do</label>
                                <div>
                                    <textarea :class="{ 'border-danger' : form.errors.ly_do }" type="text" v-model="form.ly_do" class="form-control" id="ly_do">
                                    </textarea>
                                </div>
                            </div>

                            <div class="form-group">
                                <label for="so_tien">Số tiền</label>
                                <div>
                                    <input :class="{ 'border-danger' : form.errors.so_tien }" type="number" v-model="form.so_tien" class="form-control" id="so_tien" />
                                </div>
                            </div>

                            <div class="form-group">
                                <label for="trang_thai">Trạng thái</label>
                                <div>
                                    <select :class="{ 'border-danger' : form.errors.trang_thai }" v-model="form.trang_thai" class="form-control" id="trang_thai">
                                        <option value="">Chọn trạng thái</option>
                                        <option value="0">Chưa thanh toán</option>
                                        <option value="1">Đã thanh toán</option>
                                    </select>
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
