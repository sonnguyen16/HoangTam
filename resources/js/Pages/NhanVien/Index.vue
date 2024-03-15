<script setup>

import MainLayout from "@/Layouts/MainLayout.vue";
import {computed, ref, watch} from "vue";
import NhanVienModal from "@/Pages/NhanVien/NhanVienModal.vue";
import {router} from "@inertiajs/vue3";
import Pagination from "@/Components/app/Pagination.vue";

const props = defineProps({
    nhan_vien_list: Object,
    phong_ban_list: Object,
})

let nhan_vien = ref({
    id: "",
    name: "",
    email: "",
    password: "",
    phong_ban_id: "",
    dia_chi: "",
    dien_thoai: "",
    cccd: "",
    ngay_cap: "",
    ghi_chu: "",
    muc_luong: 0,
    hinh_anh: "",
})

let search = ref("")

function openModal() {
    nhan_vien.value = {
        id: "",
        name: "",
        email: "",
        password: "",
        phong_ban_id: "",
        dia_chi: "",
        dien_thoai: "",
        cccd: "",
        ngay_cap: "",
        ghi_chu: "",
        muc_luong: 0,
        hinh_anh: "",
    }
    $('#nhanvienmodal').modal('show');
}

const allData = computed( () => {
    return props.nhan_vien_list
})

watch(search, (value) => {
    router.visit(route('nhanvien.index', {search: value}), {
        preserveState: true
    })
})

function changePage(url) {
    router.visit(url, {
        preserveState: true
    })
}


function editModal(kh) {
    console.log(search.value)
    nhan_vien.value = {
        id: kh.id,
        name: kh.name,
        email: kh.email,
        password: "",
        phong_ban_id: kh.phong_ban_id,
        dia_chi: kh.dia_chi,
        dien_thoai: kh.dien_thoai,
        cccd: kh.cccd,
        ngay_cap: kh.ngay_cap,
        ghi_chu: kh.ghi_chu,
        muc_luong: kh.muc_luong,
        hinh_anh: kh.hinh_anh,
    };
    $('#nhanvienmodal').modal('show');
}

function deleleNhanVien(id) {
    if (confirm('Bạn có chắc chắn muốn xóa nhân viên này không?')) {
        router.delete(route('NhanVien.delete', { id: id }), {
            onSuccess: () => {
                router.visit(route('nhanvien.index'))
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
                <p class="txt-color mb-0 font-weight-bold">Danh mục quản lý <i
                    class="fa fa-angle-right mr-2 ml-2"></i> Quản lý nhân viên</p>
            </div>
        </div>

        <div class="card shadow card-child" style="">
            <div class="card-body">
                <div class="row mb-3">
                    <div class=" col-md-2">
                        <a @click.prevent="openModal" class="btn btn-primary form-control">Thêm nhân viên</a>
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
                                               placeholder="Tìm kiếm nhân viên">
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
                            <th>Tên nhân viên</th>
                            <th>Email</th>
                            <th>Địa chỉ</th>
                            <th>Phòng ban</th>
                            <th>Thao tác</th>
                        </tr>
                    </thead>
                    <tbody>
                    <tr v-if="allData?.data?.length === 0">
                        <td colspan="6" class="text-center">Không có dữ liệu</td>
                    </tr>

                    <tr :key="kh.id" v-else v-for="kh in allData?.data">
                        <td>{{kh.name}}</td>
                        <td>{{kh.email}}</td>
                        <td>{{kh.dia_chi}}</td>
                        <td>{{kh.phong_ban?.ten}}</td>
                        <td class="action">
                            <a class="btn btn-primary btn-sm d-inline-block mr-2" @click.prevent="editModal(kh)">Sửa</a>
                            <a class="btn btn-danger btn-sm" @click.prevent="deleleNhanVien(kh.id)">Xóa</a>
                        </td>
                    </tr>
                    </tbody>
                </table>
                <Pagination :data="allData" @changePage="changePage"/>
            </div>
        </div>
        <NhanVienModal
            :nhan_vien="nhan_vien"
            :phong_ban_list="phong_ban_list"
        />
    </MainLayout>
</template>
<style scoped>

</style>
