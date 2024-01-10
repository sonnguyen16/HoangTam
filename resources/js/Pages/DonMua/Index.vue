<script setup>

import MainLayout from "@/Layouts/MainLayout.vue";
import {computed, ref, watch} from "vue";
import {router} from "@inertiajs/vue3";
import DonMuaModal from "@/Pages/DonMua/DonMuaModal.vue";
import {formatDate} from "@/assets/js/script.js";

const props = defineProps({
    don_hang_list: Object,
    nha_cung_cap_list: Object,
    san_pham_list: Object
})

let don_hang = ref({
    id: "",
    ma: "",
    nha_cung_cap: {},
    ghi_chu: "",
    chi_tiet_don_hang: [],
})

let search = ref("")

function openModal() {
    don_hang.value = {
        id: "",
        ma: "",
        nha_cung_cap: {},
        ghi_chu: "",
        chi_tiet_don_hang: [],
    }
    $('#donhangmodal').modal('show');
}

const allData = computed( () => {
    return props.don_hang_list
})

watch(search, (value) => {
    router.visit(route('donhang.index', {search: value, loai: 'donmua'}), {
        preserveState: true
    })
})

function changePage(url) {
    router.visit(url, {
        preserveState: true,
    })
}

function editModal(kh) {
    don_hang.value = {
        id: kh.id,
        ma: kh.ma,
        nha_cung_cap: kh.nha_cung_cap,
        ghi_chu: kh.ghi_chu,
        chi_tiet_don_hang: kh.chi_tiet_don_hang,
    };
    $('#donhangmodal').modal('show');
}

function deleledonhang(id) {
    if (confirm('Bạn có chắc chắn muốn xóa đơn hàng này không?')) {
        router.delete(route('donhang.delete', { id: id }), {
            onSuccess: () => {
                router.visit(route('donhang.index', { loai: 'donmua' }))
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
                <p class="txt-color mb-0 font-weight-bold">Đơn hàng <i
                    class="fa fa-angle-right mr-2 ml-2"></i> Đơn mua</p>
            </div>
        </div>

        <div class="card shadow card-child" style="">
            <div class="card-body">
                <div class="row mb-3">
                    <div class=" col-md-2">
                        <a @click.prevent="openModal" class="btn btn-primary form-control">Thêm đơn mua</a>
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
                                               placeholder="Tìm kiếm đơn hàng">
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
                        <th>Mã đơn</th>
                        <th>Nhà cung cấp</th>
                        <th>Ghi chú</th>
                        <th>Tổng tiền</th>
                            <th>Ngày tạo</th>
                        <th>Thao tác</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr v-if="allData?.data.length === 0">
                        <td colspan="7" class="text-center">Không có dữ liệu</td>
                    </tr>

                    <tr :key="kh.id" v-else v-for="kh in allData?.data">
                        <td >{{ kh.ma }}</td>
                        <td >{{ kh.nha_cung_cap.ten }}</td>
                        <td >{{ kh.ghi_chu }}</td>
                        <td class="money">{{ kh.tong_tien.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") }}</td>
                        <td class="date">{{ formatDate(kh.created_at) }}</td>
                        <td class="action">
                            <a class="btn btn-primary btn-sm d-inline-block mr-2" @click.prevent="editModal(kh)">Sửa</a>
                            <a class="btn btn-danger btn-sm" @click.prevent="deleledonhang(kh.id)">Xóa</a>
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
        <DonMuaModal
            :don_hang="don_hang"
            :nha_cung_cap_list="nha_cung_cap_list"
            :san_pham_list="san_pham_list"
        />
    </MainLayout>
</template>
<style scoped>

</style>
