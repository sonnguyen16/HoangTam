<script setup>

import MainLayout from "@/Layouts/MainLayout.vue";
import {computed, onMounted, ref, watch} from "vue";
import HoaDonModal from "@/Pages/NhapKho/NhapKhoModal.vue";
import {router, useRemember} from "@inertiajs/vue3";
import XuatKhoModal from "@/Pages/XuatKho/XuatKhoModal.vue";

const props = defineProps({
    hoa_don_list: Object,
    khach_hang_list: Object,
    kho_list: Object,
    san_pham_list: Object
})

let hoa_don = ref({
    id: "",
    ma: "",
    khach_hang: {},
    kho: {},
    ghi_chu: "",
    chi_tiet_hoa_don: [],
})

let search = ref("")

function openModal() {
    hoa_don.value = {
        id: "",
        ma: "",
        khach_hang: {},
        kho: {},
        ghi_chu: "",
        chi_tiet_hoa_don: [],
    }
    $('#hoadonmodal').modal('show');
}

const allData = computed( () => {
    return props.hoa_don_list
})

watch(search, (value) => {
    router.visit(route('hoadon.index', {search: value, loai: 1}), {
        preserveState: true
    })
})

function changePage(url) {
    router.visit(url, {
        preserveState: true,
    })
}

function editModal(kh) {
    hoa_don.value = {
        id: kh.id,
        ma: kh.ma,
        khach_hang: kh.khach_hang,
        kho: kh.kho,
        ghi_chu: kh.ghi_chu,
        chi_tiet_hoa_don: kh.chi_tiet_hoa_don,
    };
    $('#hoadonmodal').modal('show');
}

function delelehoadon(id) {
    if (confirm('Bạn có chắc chắn muốn xóa hóa đơn này không?')) {
        router.delete(route('hoadon.delete', { id: id }), {
            onSuccess: () => {
                router.visit(route('hoadon.index', { loai: 1 }))
            },
            onError: () => {
                console.log(form.errors)
            }
        })
    }
}

</script>

<template>
    <MainLayout>
        <div class="card shadow">
            <div class="card-body card-brc">
                <p class="txt-color mb-0 font-weight-bold">Nhập xuất kho <i
                    class="fa fa-angle-right mr-2 ml-2"></i> Phiếu xuất kho</p>
            </div>
        </div>

        <div class="card shadow card-child" style="">
            <div class="card-body">
                <h4 class="txt-color mb-3 text-red">Danh sách phiếu xuất kho</h4>
                <div class="row mt-3 mb-4">
                    <div class=" col-md-2">
                        <a @click.prevent="openModal" class="btn btn-primary form-control">Thêm phiếu xuất kho</a>
                    </div>
                    <div class="col-md-10">
                        <form >
                            <div class="row">
                                <div class="col-md-3">
                                </div>
                                <div class="col-md-6"></div>
                                <div class="col-md-3">
                                    <div class="input-group">
                                        <input v-model="search" type="text" name="search"
                                               class="form-control"
                                               placeholder="Tìm kiếm hóa đơn">
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
                        <th>Mã phiếu</th>
                        <th>Khách hàng</th>
                        <th>Kho</th>
                        <th>Ngày tạo</th>
                        <th>Tổng tiền</th>
                        <th>Ghi chú</th>
                        <th>Thao tác</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr v-if="allData?.data.length == 0">
                        <td colspan="7" class="text-center">Không có dữ liệu</td>
                    </tr>

                    <tr :key="kh.id" v-else v-for="kh in allData?.data">
                        <td >{{ kh.ma }}</td>
                        <td >{{ kh.khach_hang.ten }}</td>
                        <td >{{ kh.kho.ten }}</td>
                        <td >{{ kh.created_at }}</td>
                        <td >{{ kh.tong_tien.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") }}</td>
                        <td >{{ kh.ghi_chu }}</td>
                        <td >
                            <a class="btn btn-primary btn-sm d-inline-block mr-2" @click.prevent="editModal(kh)">Sửa</a>
                            <a class="btn btn-danger btn-sm" @click.prevent="delelehoadon(kh.id)">Xóa</a>
                        </td>
                    </tr>
                    </tbody>
                </table>
                <div class="float-right mt-3 mb-0">
                    <div class="row">
                        <div class="col-md-12 col-lg-12 text-center">
                            <ul v-if="allData?.total > 10" class="pagination">
                                <li v-for="pageNumber in allData.links.slice(1, -1)" :key="pageNumber" class="page-item">
                                    <a
                                        class="page-link"
                                        :class="{ 'bg-primary': pageNumber.label === allData.current_page.toString() }"
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
        />
    </MainLayout>
</template>
<style scoped>

</style>
