<script setup>

import MainLayout from "@/Layouts/MainLayout.vue";
import {computed, ref, watch} from "vue";
import DonViModal from "@/Pages/donvi/DonViModal.vue";
import {router} from "@inertiajs/vue3";
import Pagination from "@/Components/app/Pagination.vue";


const props = defineProps({
    don_vi_list: Object,
})

let don_vi = ref({
    id: "",
    ten: "",
    dia_chi: "",
    dien_thoai: "",
    email: "",
    stk_1: "",
    stk_2: "",
    logo: "",
})

let search = ref("")

function openModal() {
    don_vi.value = {
        id: "",
        ten: "",
        dia_chi: "",
        dien_thoai: "",
        email: "",
        stk_1: "",
        stk_2: "",
        logo: "",
    }
    $('#donvimodal').modal('show');
}

const allData = computed( () => {
    return props.don_vi_list
})

watch(search, (value) => {
    router.visit(route('donvi.index', {search: value}), {
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
    don_vi.value = {
        id: kh.id,
        ten: kh.ten,
        dia_chi: kh.dia_chi,
        dien_thoai: kh.dien_thoai,
        email: kh.email,
        stk_1: kh.stk_1,
        stk_2: kh.stk_2,
        logo: kh.logo,
    };
    $('#donvimodal').modal('show');
}

function deleledonvi(id) {
    if (confirm('Bạn có chắc chắn muốn xóa đơn vị này không?')) {
        router.delete(route('donvi.delete', { id: id }), {
            onSuccess: () => {
                router.visit(route('donvi.index'))
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
                <p class="txt-color mb-0 font-weight-bold">Hệ thống <i
                    class="fa fa-angle-right mr-2 ml-2"></i> Danh sách đơn vị</p>
            </div>
        </div>

        <div class="card shadow card-child" style="">
            <div class="card-body">
                <div class="row mb-3">
                    <div class=" col-md-2">
                        <a @click.prevent="openModal" class="btn btn-primary form-control">Thêm đơn vị</a>
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
                                               placeholder="Tìm kiếm đơn vị">
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
                            <th>Tên đơn vị</th>
                            <th>Địa chỉ</th>
                            <th>Số điện thoại</th>
                            <th>Email</th>
                            <th>Thao tác</th>
                        </tr>
                    </thead>
                    <tbody>
                    <tr v-if="allData?.data?.length === 0">
                        <td colspan="6" class="text-center">Không có dữ liệu</td>
                    </tr>

                    <tr :key="kh.id" v-else v-for="kh in allData?.data">
                        <td>{{kh.ten}}</td>
                        <td>{{kh.dia_chi}}</td>
                        <td>{{kh.dien_thoai}}</td>
                        <td>{{kh.email}}</td>
                        <td class="action">
                            <a class="btn btn-primary btn-sm d-inline-block mr-2" @click.prevent="editModal(kh)">Sửa</a>
                            <a class="btn btn-danger btn-sm" @click.prevent="deleledonvi(kh.id)">Xóa</a>
                        </td>
                    </tr>
                    </tbody>
                </table>
                <Pagination :allData="allData" @changePage="changePage"/>

            </div>
        </div>
        <DonViModal :don_vi="don_vi"/>
    </MainLayout>
</template>
<style scoped>

</style>
