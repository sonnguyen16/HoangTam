<script setup>

import MainLayout from "@/Layouts/MainLayout.vue";
import {computed, ref, watch} from "vue";
import {router} from "@inertiajs/vue3";
import ChiTietKhachHang from "@/Pages/BaoCaoCongNo/ChiTietKhachHang.vue";

const props = defineProps({
    khach_hang_list: Object,
})

let search = ref("")
const ngay_bat_dau = ref('2024-01-01');
const ngay_ket_thuc = ref('2025-01-01');
const khach_hang = ref(null);

const allData = computed( () => {
    return props.khach_hang_list
})

watch(search, (value) => {
    router.visit(route('baocaocongno.khachhang', {search: value, ngay_bat_dau: ngay_bat_dau.value, ngay_ket_thuc: ngay_ket_thuc.value}), {
        preserveState: true
    })
})

watch(ngay_bat_dau, (value, oldValue) => {
    if (!value) {
        ngay_bat_dau.value = oldValue
        return
    }
    if(ngay_ket_thuc.value < value) {
        alert('Ngày bắt đầu không được lớn hơn ngày kết thúc')
        ngay_bat_dau.value = oldValue
        return
    }
    router.visit(route('baocaocongno.khachhang', {ngay_bat_dau: value, ngay_ket_thuc: ngay_ket_thuc.value}), {
        preserveState: true
    })
})

watch(ngay_ket_thuc, (value, oldValue) => {
    if (!value) {
        ngay_ket_thuc.value = oldValue
        return
    }
    if(ngay_bat_dau.value > value) {
        alert('Ngày kết thúc không được nhỏ hơn ngày bắt đầu')
        ngay_ket_thuc.value = oldValue
        return
    }
    router.visit(route('baocaocongno.khachhang', {ngay_ket_thuc: value, ngay_bat_dau: ngay_bat_dau.value}), {
        preserveState: true
    })
})


function changePage(url) {
    router.visit(url, {
        preserveState: true
    })
}

async function chiTietKhachHang(id) {
    khach_hang.value = await axios({
        method: 'get',
        url: route('baocaocongno.chitietkh', {id: id})
    }).then(response => {
        return response.data
    }).catch(error => {
        console.log(error)
    })
    $('#chitietkhmodal').modal('show');
}

</script>

<template>
    <MainLayout>
        <div class="card shadow">
            <div class="card-body card-brc">
                <p class="txt-color mb-0 font-weight-bold">Báo cáo  <i
                    class="fa fa-angle-right mr-2 ml-2"></i>Công nợ khách hàng</p>
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
                        <th>Tên khách hàng</th>
                        <th>Số điện thoại</th>
                        <th>Địa chỉ</th>
                        <th>Tồn đầu</th>
                        <th>Xuất</th>
                        <th>Thu</th>
                        <th>Tồn cuối</th>
                        <th></th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr v-if="allData?.length === 0">
                        <td colspan="8" class="text-center">Không có dữ liệu</td>
                    </tr>

                    <tr :key="kh.id" v-else v-for="(kh, index) in allData">
                        <td class="quantity">{{index + 1}}</td>
                        <td>{{kh.ten}}</td>
                        <td>{{kh.dien_thoai}}</td>
                        <td>{{kh.dia_chi}}</td>
                        <td class="quantity">{{kh.ton_dau?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") || 0}}</td>
                        <td class="money">{{kh.xuat?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") || 0}}</td>
                        <td class="money">{{kh.thu?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") || 0}}</td>
                        <td class="quantity">{{kh.ton_cuoi?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") || 0}}</td>
                        <td style="width: 4%">
                            <button @click.prevent="chiTietKhachHang(kh.id)" class="btn btn-primary btn-sm">Chi tiết</button>
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
        <ChiTietKhachHang
            :khach_hang="khach_hang"
            :ngay_bat_dau="ngay_bat_dau"
            :ngay_ket_thuc="ngay_ket_thuc"
        />
    </MainLayout>
</template>
<style scoped>

</style>
