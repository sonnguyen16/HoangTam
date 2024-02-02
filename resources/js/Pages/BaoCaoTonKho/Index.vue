<script setup>

import MainLayout from "@/Layouts/MainLayout.vue";
import {computed, onMounted, ref, watch} from "vue";
import {router} from "@inertiajs/vue3";

const props = defineProps({
    san_pham_list: Object,
})

const search = ref('');
const ngay_bat_dau = ref(null);
const ngay_ket_thuc = ref(null);

const allData = computed( () => {
    return props.san_pham_list
})

watch(search, (value) => {
    router.visit(route('baocaotonkho.index', {search: value, ngay_bat_dau: ngay_bat_dau.value, ngay_ket_thuc: ngay_ket_thuc.value}), {
        preserveState: true
    })
})

watch(ngay_bat_dau, (value) => {
    if(ngay_ket_thuc.value < value) {
        alert('Ngày bắt đầu không được lớn hơn ngày kết thúc')
        ngay_bat_dau.value = oldValue
        return
    }
    router.visit(route('baocaotonkho.index', {ngay_bat_dau: value, ngay_ket_thuc: ngay_ket_thuc.value}), {
        preserveState: true
    })
})

watch(ngay_ket_thuc, (value) => {
    if(ngay_bat_dau.value > value) {
        alert('Ngày kết thúc không được nhỏ hơn ngày bắt đầu')
        ngay_ket_thuc.value = oldValue
        return
    }
    router.visit(route('baocaotonkho.index', {ngay_ket_thuc: value, ngay_bat_dau: ngay_bat_dau.value}), {
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
                <p class="txt-color mb-0 font-weight-bold">Báo cáo <i
                    class="fa fa-angle-right mr-2 ml-2"></i> Nhập xuất tồn</p>
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
                        <tr v-if="allData?.length === 0">
                            <td colspan="8" class="text-center">Không có dữ liệu</td>
                        </tr>

                        <tr :key="kh.id" v-else v-for="kh in allData">
                            <td>{{kh.ma}}</td>
                            <td>{{kh.ten}}</td>
                            <td class="quantity">{{kh.dvt}}</td>
                            <td class="quantity">{{kh.ton_dau || 0}}</td>
                            <td class="quantity">{{kh.nhap || 0}}</td>
                            <td class="quantity">{{kh.xuat || 0}}</td>
                            <td class="quantity">{{kh.dieu_chinh || 0}}</td>
                            <td class="quantity">{{kh.ton_cuoi || 0}}</td>
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
