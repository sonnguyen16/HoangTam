<script setup>

import MainLayout from "@/Layouts/MainLayout.vue";
import {computed, onMounted, ref, watch} from "vue";
import {router} from "@inertiajs/vue3";

const props = defineProps({
    san_pham_list: Object,
})

const search = ref('');
const tu_ngay = ref('');
const den_ngay = ref('');

const allData = computed( () => {
    return props.san_pham_list
})

watch(search, (value) => {
    router.visit(route('baocaotonkho.index', {search: value}), {
        preserveState: true
    })
})

watch(tu_ngay, (value) => {
    router.visit(route('baocaotonkho.index', {tu_ngay: value}), {
        preserveState: true
    })
})

watch(den_ngay, (value) => {
    router.visit(route('baocaotonkho.index', {den_ngay: value, tu_ngay: tu_ngay}), {
        preserveState: true
    })
})

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
                <p class="txt-color mb-0 font-weight-bold">Nhập xuất kho <i
                    class="fa fa-angle-right mr-2 ml-2"></i> Xem tồn kho</p>
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
                                                <input type="date" v-model="tu_ngay" class="form-control" name="tu_ngay">
                                            </div>
                                        </div>
                                        <div class="col-lg-6">
                                            <div class="form-record">
                                                <label>Đến ngày</label>
                                                <input type="date" v-model="den_ngay" class="form-control" name="den_ngay">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-4">
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
                        <th>Mã sản phẩm</th>
                        <th>Tên sản phẩm</th>
                        <th>Đơn vị tính</th>
                        <th>Tồn đầu</th>
                        <th>Nhập</th>
                        <th>Xuất</th>
                        <th>Điều chỉnh</th>
                        <th>Tồn cuối</th>
                    </tr>
                    </thead>
                    <tbody>
                        <tr v-if="allData?.data.length === 0">
                            <td colspan="8" class="text-center">Không có dữ liệu</td>
                        </tr>

                        <tr :key="kh.id" v-else v-for="kh in allData?.data">
                            <td>{{kh.ma}}</td>
                            <td>{{kh.ten}}</td>
                            <td class="quantity">{{kh.don_vi_tinh?.ten}}</td>
                            <td class="quantity">{{kh.ton_dau}}</td>
                            <td class="quantity">{{kh.so_luong_nhap}}</td>
                            <td class="quantity">{{kh.so_luong_xuat}}</td>
                            <td class="quantity">{{kh.dieu_chinh_kho}}</td>
                            <td class="quantity">{{kh.ton_cuoi}}</td>
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
    </MainLayout>
</template>
<style scoped>

</style>
