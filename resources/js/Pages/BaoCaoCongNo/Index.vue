<script setup>

import MainLayout from "@/Layouts/MainLayout.vue";
import {computed, ref, watch} from "vue";
import {router} from "@inertiajs/vue3";
import ChiTietNhaCungCap from "@/Pages/BaoCaoCongNo/ChiTietNhaCungCap.vue";

const props = defineProps({
    nha_cung_cap_list: Object,
})

const search = ref('')
const ngay_bat_dau = ref('2024-01-01');
const ngay_ket_thuc = ref('2025-01-01');
let nha_cung_cap = ref(null);

const allData = computed( () => {
    return props.nha_cung_cap_list
})

watch(search, (value) => {
    router.visit(route('baocaocongno.index', {search: value, ngay_bat_dau: ngay_bat_dau.value, ngay_ket_thuc: ngay_ket_thuc.value}), {
        preserveState: true
    })
})

watch(ngay_bat_dau, (value, oldValue) => {
    if(!value){
        ngay_bat_dau.value = oldValue
        return
    }
    if(ngay_ket_thuc.value < value) {
        alert('Ngày bắt đầu không được lớn hơn ngày kết thúc')
        ngay_bat_dau.value = oldValue
        return
    }
    router.visit(route('baocaocongno.index', {ngay_bat_dau: value, ngay_ket_thuc: ngay_ket_thuc.value}), {
        preserveState: true
    })
})

watch(ngay_ket_thuc, (value, oldValue) => {
    if(!value){
        ngay_ket_thuc.value = oldValue
        return
    }
    if(ngay_bat_dau.value > value) {
        alert('Ngày kết thúc không được nhỏ hơn ngày bắt đầu')
        ngay_ket_thuc.value = oldValue
        return
    }
    router.visit(route('baocaocongno.index', {ngay_ket_thuc: value, ngay_bat_dau: ngay_bat_dau.value}), {
        preserveState: true
    })
})

function changePage(url) {
    router.visit(url, {
        preserveState: true
    })
}

async function chiTietNhaCungCap(id) {
    nha_cung_cap.value = await axios({
        method: 'get',
        url: route('baocaocongno.chitietncc', {id: id})
    }).then(response => {
        return response.data
    }).catch(error => {
        console.log(error)
    })
    $('#chitietnccmodal').modal('show');
}

</script>

<template>
    <MainLayout>
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
                                                <input type="date" v-model="ngay_bat_dau" class="form-control" name="ngay_bat_dau">
                                            </div>
                                        </div>
                                        <div class="col-lg-6">
                                            <div class="form-record">
                                                <label>Đến ngày</label>
                                                <input type="date" v-model="ngay_ket_thuc" class="form-control" name="ngay_ket_thuc">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-4"></div>
                                <div class="col-md-3">
                                    <div class="input-group">
                                        <input v-model="search" type="text" name="search"
                                               class="form-control"
                                               placeholder="Tìm kiếm nhà cung cấp">
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
                        <th>STT</th>
                        <th>Tên nhà cung cấp</th>
                        <th>Số điện thoại</th>
                        <th>Địa chỉ</th>
                        <th>Tồn đầu</th>
                        <th>Nhập</th>
                        <th>Chi</th>
                        <th>Tồn cuối</th>
                        <th></th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr v-if="allData.length === 0">
                        <td colspan="8" class="text-center">Không có dữ liệu</td>
                    </tr>

                    <tr :key="kh.id" v-else v-for="(kh, index) in allData">
                        <td class="quantity">{{index + 1}}</td>
                        <td>{{kh.ten}}</td>
                        <td>{{kh.dien_thoai}}</td>
                        <td>{{kh.dia_chi}}</td>
                        <td class="money">{{kh.ton_dau?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") || 0}}</td>
                        <td class="money">{{kh.nhap?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") || 0}}</td>
                        <td class="money">{{kh.chi?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") || 0}}</td>
                        <td class="money">{{kh.ton_cuoi.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") || 0}}</td>
                        <td style="width: 5%">
                            <button @click.prevent="chiTietNhaCungCap(kh.id)" class="btn btn-primary btn-sm">Chi tiết</button>
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
        <ChiTietNhaCungCap
            :nha_cung_cap="nha_cung_cap"
            :ngay_bat_dau="ngay_bat_dau"
            :ngay_ket_thuc="ngay_ket_thuc"
        />
    </MainLayout>
</template>
<style scoped>

</style>
