<script setup>
import {onMounted, onUpdated, ref, watchEffect} from "vue";
import {router, useForm} from "@inertiajs/vue3";
import {cloneDeep, isEmpty} from "lodash";
import moment from "moment";

const props = defineProps({
    hoa_don: Object,
    nha_cung_cap_list: Object,
    kho_list: Object,
    san_pham_list: Object,
    du_an_list: Object,
})

const form = useForm({
    id: "",
    ma: "",
    ngay: "",
    nha_cung_cap_id: "",
    kho_id: "",
    ghi_chu: "",
    loai: 0,
    chi_tiet_hoa_don: [],
    du_an_id: "",
})

let item = ref({
    id: "",
    hoa_don_id: props.hoa_don.id,
    san_pham: {},
    so_luong: 1,
    gia: 0,
})


watchEffect(() => {
    form.id = props.hoa_don.id || ""
    form.ma = props.hoa_don.ma || ""
    form.ngay = props.hoa_don.ngay || moment().format("YYYY-MM-DD")
    form.nha_cung_cap_id = props.hoa_don.nha_cung_cap?.id || ""
    form.kho_id = props.hoa_don.kho.id || ""
    form.ghi_chu = props.hoa_don.ghi_chu || ""
    form.chi_tiet_hoa_don = props.hoa_don.chi_tiet_hoa_don || []
    form.du_an_id = props.hoa_don.du_an_id || ""
})
const submit = () => {
    if(!props.hoa_don.id){
        form.ma = "NK" + Date.now().toString().slice(-6);
    }
    form.post(route('hoadon.store'), {
        onSuccess: () => {
            $('#hoadonmodal').modal('hide');
            router.visit(route('hoadon.index', { loai: 'nhapkho'}))
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

function removeChiTietHoaDon(index) {
    form.chi_tiet_hoa_don = form.chi_tiet_hoa_don.filter((item, i) => i !== index)
}

function addChiTietHoaDon(){
    if(isEmpty(item.value.san_pham)){
        return;
    }

    if(item.value.so_luong === 0){
        return;
    }
    form.chi_tiet_hoa_don.push({
        id: cloneDeep(item.value.san_pham).id,
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
        so_luong: 1,
        gia: 0,
    }
    $('#sanpham').val(null).trigger('change');
}

onMounted(() => {
    $('#sanpham').select2({
        placeholder: "Chọn sản phẩm",
    }).on('change', function () {
        item.value.san_pham = props.san_pham_list.data.find(sp => String(sp.id) === $(this).val());
        item.value.gia = item.value.san_pham?.gia_nhap;
    })

    $('#kho_id').select2({
        placeholder: "Chọn kho",
        width: '100%',
    }).on('change', function () {
        form.kho_id = $(this).val()
    })

    $('#nha_cung_cap_id').select2({
        placeholder: "Chọn nhà cung cấp",
        width: '100%',
    }).on('change', function () {
        form.nha_cung_cap_id = $(this).val()
    })

    $('#du_an_id').select2({
        placeholder: "Chọn dự án",
        width: '100%',
    }).on('change', function () {
        form.du_an_id = $(this).val()
    })
})

onUpdated(() => {
    $('#kho_id').select2({
        placeholder: "Chọn kho",
        width: '100%',
    })
    $('#nha_cung_cap_id').select2({
        placeholder: "Chọn nhà cung cấp",
        width: '100%',
    })

    $('#du_an_id').select2({
        placeholder: "Chọn dự án",
        width: '100%',
    })
})

</script>

<template>
    <div id="hoadonmodal" class="modal fade" role="dialog">
        <div class="modal-dialog  modal-xl" role="document">
            <div class="modal-content">
                <div class="modal-header">

                    <button type="button" class="close" @click.prevent="closeModal">&times;</button>
                </div>
                <form @submit.prevent="submit">
                    <div class="modal-body">
                        <input type="hidden" v-model="form.id" id="id" class="form-control"/>

                        <div class="form-group-container">
                            <div class="form-group-title">
                                <span v-if="hoa_don.id" class="txt-color mb-0 font-weight-bold">Sửa phiếu nhập kho</span>
                                <span v-else class="txt-color mb-0 font-weight-bold">Thêm phiếu nhập kho</span>
                            </div>

                            <div class="form-group">
                                <label for="ma">Mã phiếu</label>
                                <div>
                                    <input readonly :class="{ 'border-danger' : form.errors.ma }" type="text" v-model="form.ma" class="form-control" id="ma" />
                                </div>
                            </div>

                            <div class="form-group">
                                <label for="du_an_id">Dự án</label>
                                <div>
                                    <select :class="{ 'border-danger' : form.errors.du_an_id }" v-model="form.du_an_id" class="form-control" id="du_an_id">
                                        <option value="">Chọn dự án</option>
                                        <option v-for="da in du_an_list" :key="da.id" :value="da.id">{{ da.ten }}</option>
                                    </select>
                                </div>
                            </div>

                            <div class="form-group">
                                <label for="ngay">Ngày</label>
                                <div>
                                    <input :class="{ 'border-danger' : form.errors.date }" type="date" v-model="form.ngay" class="form-control" id="ngay" />
                                </div>
                            </div>
                            <div class="form-group">
                                <label for="nha_cung_cap_id">Nhà cung cấp</label>
                                <div>
                                    <select :class="{ 'border-danger' : form.errors.nha_cung_cap_id }" v-model="form.nha_cung_cap_id" class="form-control" id="nha_cung_cap_id">
                                        <option value="">Chọn nhà cung cấp</option>
                                        <option v-for="ncc in nha_cung_cap_list" :key="ncc.id" :value="ncc.id">{{ ncc.ten }}</option>
                                    </select>
                                </div>
                            </div>

                            <div class="form-group">
                                <label for="kho_id">Kho</label>
                                <div>
                                    <select :class="['form-control' ,{ 'border-danger' : form.errors.kho_id }]" v-model="form.kho_id" class="" id="kho_id">
                                        <option value="">Chọn kho</option>
                                        <option v-for="k in kho_list" :key="k.id" :value="k.id">{{ k.ten }}</option>
                                    </select>
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
                               <span>Chi tiết phiếu nhập</span>
                           </div>
                           <div class="row mb-3">
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
                                   <th>Mã sản phẩm</th>
                                   <th>Tên sản phẩm</th>
                                   <th>Số lượng</th>
                                   <th>ĐVT</th>
                                   <th>Đơn giá</th>
                                   <th>Thành tiền</th>
                                   <th></th>
                               </tr>
                               </thead>
                               <tbody>
                               <tr v-if="form.chi_tiet_hoa_don.length === 0">
                                   <td colspan="7" class="text-center">Không có dữ liệu</td>
                               </tr>

                               <tr :key="cthd.id" v-else v-for="(cthd, index) in form.chi_tiet_hoa_don">
                                   <td class="ma">{{ cthd?.san_pham?.ma }}</td>
                                   <td class="ten">{{ cthd?.san_pham?.ten }}</td>
                                   <td class="quantity" >{{ cthd?.so_luong }}</td>
                                   <td class="quantity" >{{ cthd?.san_pham?.don_vi_tinh?.ten }}</td>
                                   <td class="money" >{{ cthd?.gia.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") }}</td>
                                   <td class="money" >{{ cthd?.thanh_tien.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") }}</td>
                                   <td class="action">
                                       <a class="btn btn-danger btn-sm" @click.prevent="removeChiTietHoaDon(index)">
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
