<script setup>

import MainLayout from "@/Layouts/MainLayout.vue";
import {computed, ref, watch} from "vue";
import {router} from "@inertiajs/vue3";
import NhapKhoModal from "@/Pages/NhapKho/NhapKhoModal.vue";
import {formatDate} from "@/assets/js/script.js";
import moment from "moment";

const props = defineProps({
    hoa_don_list: Object,
    nha_cung_cap_list: Object,
    kho_list: Object,
    san_pham_list: Object
})

let hoa_don = ref({
    id: "",
    ma: "",
    nha_cung_cap: {},
    kho: {},
    ghi_chu: "",
    chi_tiet_hoa_don: [],
})

let search = ref("")

function openModal() {
    hoa_don.value = {
        id: "",
        ma: "",
        nha_cung_cap: {},
        kho: {},
        ghi_chu: "",
        chi_tiet_hoa_don: [],
    }
    $('#hoadonmodal').modal('show');
}

const allData = computed( () => {
    console.log(props.hoa_don_list)
    return props.hoa_don_list
})

watch(search, (value) => {
    router.visit(route('hoadon.index', {search: value, loai: 'nhapkho'}), {
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
        nha_cung_cap: kh.nha_cung_cap,
        kho: kh.kho,
        ghi_chu: kh.ghi_chu,
        chi_tiet_hoa_don: kh.chi_tiet_hoa_don,
        ngay: kh.ngay
    };
    $('#hoadonmodal').modal('show');
}

function delelehoadon(id) {
    if (confirm('Bạn có chắc chắn muốn xóa hóa đơn này không?')) {
        router.delete(route('hoadon.delete', { id: id }), {
            onSuccess: () => {
                router.visit(route('hoadon.index', { loai: 'nhapkho' }))
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
                    class="fa fa-angle-right mr-2 ml-2"></i> Phiếu nhập kho</p>
            </div>
        </div>

        <div class="card shadow card-child" style="">
            <div class="card-body">
                <div class="row mb-3">
                    <div class=" col-md-2">
                        <a @click.prevent="openModal" class="btn btn-primary form-control">Thêm phiếu nhập kho</a>
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
                        <th width="50">STT</th>
                        <th width="100">Ngày</th>
                        <th width="100">Mã phiếu</th>
                        <th>Nhà cung cấp</th>
                        <th>Kho</th>
                        <th width="100">Ngày tạo</th>
                        <th width="100">Tổng tiền</th>
                        <th width="153">Thao tác</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr v-if="allData?.data.length === 0">
                        <td colspan="9" class="text-center">Không có dữ liệu</td>
                    </tr>

                    <tr :key="kh.id" v-else v-for="(kh, index) in allData?.data">
                        <td class="text-center">{{ index + 1 }}</td>
                        <td class="text-center">{{ moment(kh.ngay).format("DD/MM/YYYY") }}</td>
                        <td class="text-center">{{ kh.ma }}</td>
                        <td >{{ kh.nha_cung_cap?.ten }}</td>
                        <td >{{ kh.kho?.ten }}</td>
                        <td class="text-center">{{ moment(kh.created_at).format("DD/MM/YYYY") }}</td>
                        <td class="money">{{ kh.tong_tien.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") }}</td>

                        <td >
                            <a class="btn btn-primary btn-sm d-inline-block mr-2" @click.prevent="editModal(kh)">Sửa</a>
                            <a class="btn btn-primary btn-sm d-inline-block mr-2" target="_blank"  :href="route('hoadon.print', { id: kh.id })">In phiếu</a>
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
        <NhapKhoModal
            :hoa_don="hoa_don"
            :nha_cung_cap_list="nha_cung_cap_list"
            :kho_list="kho_list"
            :san_pham_list="san_pham_list"
        />
    </MainLayout>
</template>
<style scoped>

</style>
