<script setup>
import { ref, watchEffect} from "vue";
import {router, useForm} from "@inertiajs/vue3";
import InputError from "@/Components/InputError.vue";
import {cloneDeep} from "lodash";

const props = defineProps({
    don_hang: Object,
    khach_hang_list: Object,
    san_pham_list: Object
})

const form = useForm({
    id: "",
    ma: "",
    khach_hang_id: "",
    ghi_chu: "",
    loai: 1,
    chi_tiet_don_hang: [],
})

let item = ref({
    id: "",
    don_hang_id: props.don_hang.id,
    san_pham: {},
    so_luong: 0,
    gia: 0,
})


watchEffect(() => {
    form.id = props.don_hang.id || ""
    form.ma = props.don_hang.ma || ""
    form.khach_hang_id = props.don_hang.khach_hang?.id || ""
    form.ghi_chu = props.don_hang.ghi_chu || ""
    form.chi_tiet_don_hang = props.don_hang.chi_tiet_don_hang || []
})
const submit = () => {
    if(!props.don_hang.id){
        form.ma = "DH" + new Date().getTime().toString();
    }
    form.post(route('donhang.store'), {
        onSuccess: () => {
            $('#donhangmodal').modal('hide');
            router.visit(route('donhang.index', { loai: 1}))
        },
        onError: () => {
            console.log(form.errors)
        }
    })
}

const closeModal = () => {
    $('#donhangmodal').modal('hide');
    form.reset();
    form.chi_tiet_don_hang = [];
    form.clearErrors();
}

function removeChiTietdonhang(id) {
    form.chi_tiet_don_hang = form.chi_tiet_don_hang.filter(cthd => cthd.id != id)
}

function addChiTietdonhang(){
    if(!item.value.san_pham){
        return;
    }

    if(item.value.so_luong === 0){
        return;
    }

    form.chi_tiet_don_hang.push({
        id: "",
        don_hang_id: props.don_hang.id,
        san_pham: cloneDeep(item.value.san_pham),
        so_luong: item.value.so_luong,
        gia: item.value.gia,
        thanh_tien: item.value.gia * item.value.so_luong,
    })

    item.value = {
        id: "",
        don_hang_id: props.don_hang.id,
        san_pham: {},
        so_luong: 0,
        gia: 0,
    }
}

</script>

<template>
    <div id="donhangmodal" class="modal fade" tabindex="-1" role="dialog">
        <div class="modal-dialog  modal-lg" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <span v-if="don_hang.id" class="txt-color mb-0 font-weight-bold">Sửa đơn hàng</span>
                    <span v-else class="txt-color mb-0 font-weight-bold">Thêm đơn hàng</span>
                    <button type="button" class="close" @click.prevent="closeModal">&times;</button>
                </div>
                <form @submit.prevent="submit">
                    <div class="modal-body">
                        <input type="hidden" v-model="form.id" id="id" class="form-control"/>

                        <div class="form-group">
                            <label for="name">Mã đơn</label>
                            <input readonly :class="{ 'border-danger' : form.errors.ma }" type="text" v-model="form.ma" class="form-control" id="ma" />
                        </div>
                        <InputError :message="form.errors.ma" />


                        <div class="form-group">
                            <label for="name">Khách hàng</label>
                            <select :class="{ 'border-danger' : form.errors.khach_hang_id }" v-model="form.khach_hang_id" class="form-control" id="khach_hang_id">
                                <option value="">Chọn khách hàng</option>
                                <option v-for="ncc in khach_hang_list" :key="ncc.id" :value="ncc.id">{{ ncc.ten }}</option>
                            </select>
                        </div>
                        <InputError :message="form.errors.khach_hang_id" />


                        <div class="form-group">
                            <label for="name">Ghi chú</label>
                            <input type="text" v-model="form.ghi_chu" class="form-control" id="ghi_chu" />
                        </div>

                        <div class="row">
                            <div class="col">
                                <div class="form-group">
                                    <label>Sản phẩm</label>
                                    <select class="form-control" v-model="item.san_pham">
                                        <option v-for="sp in san_pham_list.data" :value="sp">{{ sp.ten }}</option>
                                    </select>
                                </div>
                            </div>
                            <div class="col">
                                <div class="form-group">
                                    <label for="name">Số lượng</label>
                                    <input type="number" v-model="item.so_luong" class="form-control" id="ghi_chu" />
                                </div>
                            </div>
                            <div class="col">
                                <div class="form-group">
                                    <label for="name">Đơn giá</label>
                                    <input type="number" v-model="item.gia" class="form-control" id="gia" />
                                </div>
                            </div>
                            <div class="col">
                                <button @click.prevent="addChiTietdonhang()"  class="btn btn-primary mt-[28px]">Thêm</button>
                            </div>
                        </div>

                        <table class="table table-bordered  table-responsive-md">
                            <thead>
                                <tr>
                                    <th>Sản phẩm</th>
                                    <th>Số lượng</th>
                                    <th>Đơn vị tính</th>
                                    <th>Đơn giá</th>
                                    <th>Thành tiền</th>
                                    <th>Thao tác</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-if="form.chi_tiet_don_hang.length == 0">
                                    <td colspan="6" class="text-center">Không có dữ liệu</td>
                                </tr>

                                <tr :key="cthd.id" v-else v-for="cthd in form.chi_tiet_don_hang">
                                    <td >{{ cthd?.san_pham?.ten }}</td>
                                    <td >{{ cthd?.so_luong }}</td>
                                    <td >{{ cthd?.san_pham?.don_vi_tinh?.ten }}</td>
                                    <td >{{ cthd?.gia.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") }}</td>
                                    <td >{{ cthd?.thanh_tien.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") }}</td>
                                    <td >
                                        <a class="btn btn-danger btn-sm" @click.prevent="removeChiTietdonhang(cthd.id)">
                                            <i class="fas fa-trash"></i>
                                        </a>
                                    </td>
                                </tr>
                            </tbody>
                        </table>

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
