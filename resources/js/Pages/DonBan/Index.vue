<script setup>

import MainLayout from "@/Layouts/MainLayout.vue";
import {computed, ref, watch} from "vue";
import {router} from "@inertiajs/vue3";
import DonBanModal from "@/Pages/DonBan/DonBanModal.vue";
import {formatDate} from "@/assets/js/script.js";

const props = defineProps({
    don_hang_list: Object,
    khach_hang_list: Object,
    san_pham_list: Object
})

let don_hang = ref({
    id: "",
    ma: "",
    ngay: "",
    khach_hang: {},
    ghi_chu: "",
    chi_tiet_don_hang: [],
})

let search = ref("")

function openModal() {
    don_hang.value = {
        id: "",
        ma: "",
        ngay: "",
        khach_hang: {},
        ghi_chu: "",
        chi_tiet_don_hang: [],
    }
    $('#donhangmodal').modal('show');
}

const allData = computed( () => {
    return props.don_hang_list
})

watch(search, (value) => {
    router.visit(route('donhang.index', {search: value, loai: 'donban'}), {
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
        khach_hang: kh.khach_hang,
        ngay: kh.ngay,
        ghi_chu: kh.ghi_chu,
        chi_tiet_don_hang: kh.chi_tiet_don_hang,
    };
    $('#donhangmodal').modal('show');
}

function deleledonhang(id) {
    if (confirm('Bạn có chắc chắn muốn xóa đơn hàng này không?')) {
        router.delete(route('donhang.delete', { id: id }), {
            onSuccess: () => {
                router.visit(route('donhang.index', { loai: 'donban' }))
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
        <div class="card shadow card-child" style="">
            <div class="card-body">
                <div class="row mb-3">
                    <div class=" col-md-2">
                        <a @click.prevent="openModal" class="btn btn-primary form-control">Thêm đơn bán</a>
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
                        <th>Mã phiếu</th>
                        <th>Khách hàng</th>
                        <th>Ghi chú</th>
                        <th>Ngày tạo</th>
                        <th>Tổng tiền</th>
                        <th>Thao tác</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr v-if="allData?.data.length === 0">
                        <td colspan="7" class="text-center">Không có dữ liệu</td>
                    </tr>

                    <tr :key="kh.id" v-else v-for="kh in allData?.data">
                        <td >{{ kh.ma }}</td>
                        <td >{{ kh.khach_hang?.ten }}</td>
                        <td >{{ kh.ghi_chu }}</td>
                        <td class="date">{{ formatDate(kh.created_at) }}</td>
                        <td class="money">{{ kh.tong_tien.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") }}</td>
                        <td style="width: 10%" class="text-center">
                            <a class="btn btn-primary btn-sm d-inline-block mr-2" @click.prevent="editModal(kh)">Sửa</a>
                            <a class="btn btn-primary btn-sm d-inline-block mr-2" :href="route('donhang.print', {id: kh.id})">Xuất</a>
                            <a class="btn btn-danger btn-sm" @click.prevent="deleledonhang(kh.id)">Xóa</a>
                        </td>
                    </tr>
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
        <DonBanModal
            :don_hang="don_hang"
            :khach_hang_list="khach_hang_list"
            :san_pham_list="san_pham_list"
        />
    </MainLayout>
</template>
<style scoped>

</style>
