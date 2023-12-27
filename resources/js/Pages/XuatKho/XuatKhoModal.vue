<script setup>
import {onMounted, ref, watchEffect} from "vue";
import {router, useForm} from "@inertiajs/vue3";
import InputError from "@/Components/InputError.vue";
import {cloneDeep} from "lodash";

const props = defineProps({
    hoa_don: Object,
    khach_hang_list: Object,
    kho_list: Object,
    san_pham_list: Object
})

const form = useForm({
    id: "",
    ma: "",
    khach_hang_id: "",
    kho_id: "",
    ghi_chu: "",
    loai: 1,
    chi_tiet_hoa_don: [],
})

let item = ref({
    id: "",
    hoa_don_id: props.hoa_don.id,
    san_pham: {},
    so_luong: 0,
    gia: 0,
})


watchEffect(() => {
    form.id = props.hoa_don.id || ""
    form.ma = props.hoa_don.ma || ""
    form.khach_hang_id = props.hoa_don.khach_hang?.id || ""
    form.kho_id = props.hoa_don.kho.id || ""
    form.ghi_chu = props.hoa_don.ghi_chu || ""
    form.chi_tiet_hoa_don = props.hoa_don.chi_tiet_hoa_don || []
})
const submit = () => {
    if(!props.hoa_don.id){
        form.ma = "XK" + new Date().getTime().toString();
    }
    form.post(route('hoadon.store'), {
        onSuccess: () => {
            $('#hoadonmodal').modal('hide');
            router.visit(route('hoadon.index', { loai: 1}))
        },
        onError: () => {
            console.log(form.errors)
        }
    })
}

const closeModal = () => {
    $('#hoadonmodal').modal('hide');
    form.reset();
    form.chi_tiet_hoa_don = [];
    form.clearErrors();
}

function removeChiTietHoaDon(id) {
    form.chi_tiet_hoa_don = form.chi_tiet_hoa_don.filter(cthd => cthd.id != id)
}

function addChiTietHoaDon(){
    if(!item.value.san_pham){
        return;
    }

    if(item.value.so_luong === 0){
        return;
    }

    form.chi_tiet_hoa_don.push({
        id: "",
        hoa_don_id: props.hoa_don.id,
        san_pham: cloneDeep(item.value.san_pham),
        so_luong: item.value.so_luong,
        gia: item.value.gia,
        thanh_tien: item.value.gia * item.value.so_luong,
    })

    item.value = {
        id: "",
        hoa_don_id: props.hoa_don.id,
        san_pham: {},
        so_luong: 0,
        gia: 0,
    }
}

onMounted(() => {
    $('#sanpham').select2().on('change', function () {
        item.value.san_pham = props.san_pham_list.data.find(sp => String(sp.id) === $(this).val())
    })
})

</script>

<template>
    <div id="hoadonmodal" class="modal fade" role="dialog">
        <div class="modal-dialog  modal-xl" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <span v-if="hoa_don.id" class="txt-color mb-0 font-weight-bold">Sửa hóa đơn</span>
                    <span v-else class="txt-color mb-0 font-weight-bold">Thêm hóa đơn</span>
                    <button type="button" class="close" @click.prevent="closeModal">&times;</button>
                </div>
                <form @submit.prevent="submit">
                    <div class="modal-body">
                        <input type="hidden" v-model="form.id" id="id" class="form-control"/>

                        <div class="form-group-container">
                            <div class="form-group-title">
                                <span>Thông tin chung</span>
                            </div>

                            <div class="form-group">
                                <label for="ma">Mã phiếu</label>
                                <div>
                                    <input readonly :class="{ 'border-danger' : form.errors.ma }" type="text" v-model="form.ma" class="form-control" id="ma" />
                                    <InputError :message="form.errors.ma" />
                                </div>
                            </div>

                            <div class="form-group">
                                <label for="name">Khách hàng</label>
                                <div>
                                    <select :class="{ 'border-danger' : form.errors.khach_hang_id }" v-model="form.khach_hang_id" class="form-control" id="khach_hang_id">
                                        <option value="">Chọn khách hàng</option>
                                        <option v-for="kh in khach_hang_list" :key="kh.id" :value="kh.id">{{ kh.ten }}</option>
                                    </select>
                                    <InputError :message="form.errors.khach_hang_id" />
                                </div>
                            </div>

                            <div class="form-group">
                                <label for="kho_id">Kho</label>
                                <div>
                                    <select :class="{ 'border-danger' : form.errors.kho_id }" v-model="form.kho_id" class="form-control" id="kho_id">
                                        <option value="">Chọn kho</option>
                                        <option v-for="k in kho_list" :key="k.id" :value="k.id">{{ k.ten }}</option>
                                    </select>
                                    <InputError :message="form.errors.kho_id" />
                                </div>
                            </div>

                            <div class="form-group">
                                <label for="ghi_chu">Ghi chú</label>
                                <div>
                                    <input type="text" v-model="form.ghi_chu" class="form-control" id="ghi_chu" />
                                </div>
                            </div>

                        </div>

                        <div class="form-group-container mt-4">
                            <div class="form-group-title">
                                <span>Chi tiết phiếu xuất</span>
                            </div>
                            <div class="row mb-4">
                                <div class="col-4">
                                    <div class="form-record">
                                        <label>Sản phẩm</label>
                                        <select class="form-control" v-model="item.san_pham" id="sanpham">
                                            <option v-for="sp in san_pham_list.data" :value="sp.id">{{ sp.ten }}</option>
                                        </select>
                                    </div>
                                </div>
                                <div class="col-3">
                                    <div class="form-record">
                                        <label for="name">Số lượng</label>
                                        <input type="number" v-model="item.so_luong" class="form-control" id="ghi_chu" />
                                    </div>
                                </div>
                                <div class="col-3">
                                    <div class="form-record">
                                        <label for="name">Đơn giá</label>
                                        <input type="number" v-model="item.gia" class="form-control" id="gia" />
                                    </div>
                                </div>
                                <div class="col-2">
                                    <button @click.prevent="addChiTietHoaDon()"  class="btn btn-primary form-control">Thêm</button>
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
                                <tr v-if="form.chi_tiet_hoa_don.length == 0">
                                    <td colspan="6" class="text-center">Không có dữ liệu</td>
                                </tr>

                                <tr :key="cthd.id" v-else v-for="cthd in form.chi_tiet_hoa_don">
                                    <td >{{ cthd?.san_pham?.ten }}</td>
                                    <td >{{ cthd?.so_luong }}</td>
                                    <td >{{ cthd?.san_pham?.don_vi_tinh?.ten }}</td>
                                    <td >{{ cthd?.gia.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") }}</td>
                                    <td >{{ cthd?.thanh_tien.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") }}</td>
                                    <td >
                                        <a class="btn btn-danger btn-sm" @click.prevent="removeChiTietHoaDon(cthd.id)">
                                            <i class="fas fa-trash"></i>
                                        </a>
                                    </td>
                                </tr>
                                </tbody>
                            </table>
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
.form-group{
    grid-template-columns: 100px 450px;
}
</style>
