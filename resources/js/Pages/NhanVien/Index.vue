<script setup>

import MainLayout from "@/Layouts/MainLayout.vue";
import {computed, onMounted, ref, watch} from "vue";
import NhanVienModal from "@/Pages/NhanVien/NhanVienModal.vue";
import {router, useRemember} from "@inertiajs/vue3";
import {useRoute} from "vue-router";

const props = defineProps({
    nhan_vien_list: Object,
})

let nhan_vien = ref({
    id: "",
    name: "",
    email: "",
    password: "",
})

let search = ref("")

function openModal() {
    nhan_vien.value = {
        id: "",
        name: "",
        email: "",
        password: "",
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
                <h4 class="txt-color mb-3 text-red">Danh sách nhân viên</h4>
                <div class="row mt-3 mb-4">
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
                            <th>Thao tác</th>
                        </tr>
                    </thead>
                    <tbody>
                    <tr v-if="allData?.data?.length == 0">
                        <td colspan="6" class="text-center">Không có dữ liệu</td>
                    </tr>

                    <tr :key="kh.id" v-else v-for="kh in allData?.data">
                        <td>{{kh.name}}</td>
                        <td>{{kh.email}}</td>
                        <td >
                            <a class="btn btn-primary btn-sm d-inline-block mr-2" @click.prevent="editModal(kh)">Sửa</a>
                            <a class="btn btn-danger btn-sm" @click.prevent="deleleNhanVien(kh.id)">Xóa</a>
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
        <NhanVienModal :nhan_vien="nhan_vien"/>
    </MainLayout>
</template>
<style scoped>

</style>
