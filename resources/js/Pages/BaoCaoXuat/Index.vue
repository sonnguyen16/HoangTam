<script setup>

import MainLayout from "@/Layouts/MainLayout.vue";
import {computed, ref, watch} from "vue";
import {router} from "@inertiajs/vue3";
import moment from "moment";
import XuatKhoModal from "@/Pages/BaoCaoXuat/XuatKhoModal.vue";

const props = defineProps({
    hoa_don_list: Object,
    khach_hang_list: Object,
    kho_list: Object,
    san_pham_list: Object,
    don_hang_ban_list: Object,
    du_an_list: Object,
})

let hoa_don = ref({
    id: "",
    ma: "",
    khach_hang: {},
    kho: {},
    ghi_chu: "",
    ngay: "",
    du_an_id: "",
    chi_tiet_hoa_don: [],
})

const search = ref('');
const ngay_bat_dau = ref(null);
const ngay_ket_thuc = ref(null);

const allData = computed( () => {
    return props.hoa_don_list
})

watch(search, (value) => {
    router.visit(route('baocaonhapxuat.index', {search: value, ngay_bat_dau: ngay_bat_dau.value, ngay_ket_thuc: ngay_ket_thuc.value, loai:'xuat'}), {
        preserveState: true
    })
})

watch(ngay_bat_dau, (value) => {
    if(ngay_ket_thuc.value < value) {
        alert('Ngày bắt đầu không được lớn hơn ngày kết thúc')
        ngay_bat_dau.value = oldValue
        return
    }
    router.visit(route('baocaonhapxuat.index', {ngay_bat_dau: value, ngay_ket_thuc: ngay_ket_thuc.value, loai:'xuat'}), {
        preserveState: true
    })
})

watch(ngay_ket_thuc, (value) => {
    if(ngay_bat_dau.value > value) {
        alert('Ngày kết thúc không được nhỏ hơn ngày bắt đầu')
        ngay_ket_thuc.value = oldValue
        return
    }
    router.visit(route('baocaonhapxuat.index', {ngay_ket_thuc: value, ngay_bat_dau: ngay_bat_dau.value, loai:'xuat'}), {
        preserveState: true
    })
})

function editModal(kh) {
    hoa_don.value = {
        id: kh.id,
        ma: kh.ma,
        khach_hang: kh.khach_hang,
        kho: kh.kho,
        ghi_chu: kh.ghi_chu,
        du_an_id: kh.du_an_id,
        ngay: kh.ngay,
        chi_tiet_hoa_don: kh.chi_tiet_hoa_don,
    };
    $('#hoadonmodal').modal('show');
}

function changePage(url) {
    router.visit(url, {
        preserveState: true
    })
}

</script>

<template>
    <MainLayout>
        <div class="card shadow">
            <div class="card-body card-brc">
                <p class="txt-color mb-0 font-weight-bold">Báo cáo <i
                    class="fa fa-angle-right mr-2 ml-2"></i> Báo cáo xuất</p>
            </div>
        </div>

        <div class="card shadow card-child" style="">
            <div class="card-body">
                <div class="row mb-3">
                    <div class="col-md-12">
                        <form >
                            <div class="row">
                                <div class="col-md-5">
                                    <div class="row">
                                        <div class="col-lg-6">
                                            <div class="form-record">
                                                <label>Từ ngày</label>
                                                <input type="date" v-model="ngay_bat_dau" class="form-control" name="tu_ngay">
                                            </div>
                                        </div>
                                        <div class="col-lg-6">
                                            <div class="form-record">
                                                <label>Đến ngày</label>
                                                <input type="date" v-model="ngay_ket_thuc" class="form-control" name="den_ngay">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-4 d-flex align-items-center">

                                </div>
                                <div class="col-md-3">
                                    <div class="input-group">
                                        <input v-model="search" type="text" name="search"
                                               class="form-control"
                                               placeholder="Tìm kiếm sản phẩm">
                                        <div class="input-group-append">
                                            <button class="btn btn-primary" type="submit">
                                                <i class="fas fa-search"></i>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>

                <table class="table table-bordered  table-responsive-md">
                    <thead>
                    <tr>
                        <th>Ngày</th>
                        <th>Số phiếu</th>
                        <th>Khách hàng</th>
                        <th>Mã sản phẩm</th>
                        <th>ĐVT</th>
                        <th>Số lượng</th>
                        <th>Đơn giá</th>
                        <th>Thành tiền</th>
                        <th></th>
                    </tr>
                    </thead>
                    <tbody>
                        <tr v-if="allData?.length === 0">
                            <td colspan="9" class="text-center">Không có dữ liệu</td>
                        </tr>

                        <template v-for="kh in allData.data">
                            <tr v-for="cthd in kh.chi_tiet_hoa_don" :key="cthd.id">
                                <td>{{ moment(kh.ngay).format("DD/MM/YYYY") }}</td>
                                <td>{{ kh.ma }}</td>
                                <td>{{ kh.khach_hang.ten }}</td>
                                <td>{{ cthd.san_pham.ma }}</td>
                                <td>{{ cthd.san_pham.don_vi_tinh.ten }}</td>
                                <td class="quantity">{{ cthd.so_luong.toFixed(1) }}</td>
                                <td class="money">{{ cthd.gia.toFixed(0).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") }}</td>
                                <td class="money">{{ cthd.thanh_tien.toFixed(0).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") }}</td>
                                <td class="quantity">
                                    <a @click.prevent="editModal(kh)" class="btn btn-primary btn-sm">Sửa</a>
                                </td>
                            </tr>
                        </template>

                    </tbody>
                </table>
                <div class="float-right mt-3 mb-0">
                    <div class="row">
                        <div class="col-md-12 col-lg-12 text-center">
                            <ul v-if="allData?.meta.total > allData?.meta.per_page" class="pagination">
                                <li v-for="pageNumber in allData.meta.links.slice(1, -1)" :key="pageNumber" class="page-item">
                                    <a
                                        class="page-link"
                                        :class="{ 'bg-primary': pageNumber.label === allData.meta.current_page.toString() }"
                                        @click.prevent="changePage(pageNumber.url)"
                                    >
                                        {{ pageNumber.label }}
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <XuatKhoModal
            :hoa_don="hoa_don"
            :khach_hang_list="khach_hang_list"
            :kho_list="kho_list"
            :san_pham_list="san_pham_list"
            :don_hang_ban_list="don_hang_ban_list"
            :du_an_list="du_an_list"
        />
    </MainLayout>
</template>
<style scoped>

</style>
