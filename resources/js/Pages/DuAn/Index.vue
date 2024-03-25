<script setup>

import MainLayout from "@/Layouts/MainLayout.vue";
import {computed, onMounted, ref, watch} from "vue";
import DuAnModal from "@/Pages/duan/DuAnModal.vue";
import {router} from "@inertiajs/vue3";
import ChiTiet from "@/Pages/DuAn/ChiTiet.vue";

const props = defineProps({
    du_an_list: Object,
    nhan_vien_list: Object,
})

let hang_muc = ref({
    id: "",
    ten: "",
    ngay_bat_dau: "",
    ngay_ket_thuc: "",
    user_id: "",
    nhan_vien: {},
    mo_ta: "",
    trang_thai: "",
    parent_id: "",
    children: [],
    files: [],
    binh_luan: []
})

let hang_muc1 = ref({
    id: "",
    ten: "",
    ngay_bat_dau: "",
    ngay_ket_thuc: "",
    user_id: "",
    nhan_vien: {},
    mo_ta: "",
    trang_thai: "",
    parent_id: "",
    children: [],
    files: [],
    binh_luan: [],
    nguoi_theo_doi: []
})

let search = ref("")

function openModal(id) {
    hang_muc.value = {
        id: "",
        ten: "",
        ngay_bat_dau: "",
        ngay_ket_thuc: "",
        user_id: "",
        mo_ta: "",
        trang_thai: "",
        parent_id: id,
        children: [],
        files: []
    }
    $('#duanmodal').modal('show');
}

const allData = computed( () => {
    return props.du_an_list
})

watch(search, (value) => {
    router.visit(route('duan.index', {search: value}), {
        preserveState: true
    })
})

function changePage(url) {
    router.visit(url, {
        preserveState: true
    })
}

function editModal(kh) {
    hang_muc1.value = {
        id: kh.id,
        ten: kh.ten,
        ngay_bat_dau: kh.ngay_bat_dau,
        ngay_ket_thuc: kh.ngay_ket_thuc,
        user_id: kh.user_id,
        mo_ta: kh.mo_ta,
        trang_thai: kh.trang_thai,
        parent_id: kh.parent_id,
        children: kh.children,
        files: kh.files,
        binh_luan: kh.binh_luan,
        nguoi_theo_doi: kh.nguoi_theo_doi
    }
    $('#chitietdamodal').modal('show');
}

function reload(){
    hang_muc1.value = allData.value.find(item => item.id === hang_muc1.value.id)
}

</script>

<template>
    <MainLayout>
        <div class="card shadow card-child" style="">
            <div class="card-body">
                <div class="row">
                    <div class="col-md-12">
                        <div class="row">
                            <div class=" col-md-1">
                                <a @click.prevent="openModal('')" class="btn btn-primary form-control">Thêm dự án</a>
                            </div>
                            <div class="col-md-3">
                                <div class="input-group">
                                    <input v-model="search" type="text" name="search"
                                           class="form-control"
                                           placeholder="Tìm kiếm dự án">
                                    <div class="input-group-append">
                                        <button class="btn btn-primary" type="submit">
                                            <i class="fas fa-search"></i>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <table class="table table-bordered  table-responsive-md mt-3">
                            <thead>
                            <tr>
                                <th>Tên dự án</th>
                                <th>Ngày bắt đầu</th>
                                <th>Ngày kết thúc</th>
                                <th>Người phụ trách</th>
                                <th>Trạng thái</th>
                                <th>Thao tác</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr v-if="allData?.length === 0">
                                <td colspan="7" class="text-center">Không có dữ liệu</td>
                            </tr>
                            <tr :key="kh.id" v-else v-for="kh in allData">
                                <td >{{ kh.ten }}</td>
                                <td >{{ new Date(kh.ngay_bat_dau).toLocaleDateString() }}</td>
                                <td >{{ new Date(kh.ngay_bat_dau).toLocaleDateString() }}</td>
                                <td >{{ kh.nhan_vien.name }}</td>
                                <td >
                                    <span v-if="kh.trang_thai === 0" class="badge badge-warning">Chưa triển khai</span>
                                    <span v-else-if="kh.trang_thai === 1" class="badge badge-primary">Đang triển khai</span>
                                    <span v-else-if="kh.trang_thai === 2" class="badge badge-success">Hoàn thành</span>
                                </td>
                                <td style="width: 8%">
                                    <a class="btn btn-primary btn-sm mr-2 ml-2" :href="route('duan.detail', {id: kh.id})">Chi tiết</a>
                                    <a class="btn btn-primary btn-sm d-inline-block mr-2" @click.prevent="editModal(kh)">Sửa</a>
                                </td>
                            </tr>
                            </tbody>
                        </table>
                    </div>

                </div>
            </div>
        </div>
        <ChiTiet
            :du_an="hang_muc1"
            :users="nhan_vien_list"
            @add="openModal"
            @edit="editModal"
        />
        <DuAnModal
            :du_an="hang_muc"
            :users="nhan_vien_list"
            @reload="reload"
        />

    </MainLayout>
</template>
<style scoped>

</style>
