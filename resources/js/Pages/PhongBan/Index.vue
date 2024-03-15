<script setup>

import MainLayout from "@/Layouts/MainLayout.vue";
import {computed, ref, watch} from "vue";
import {router} from "@inertiajs/vue3";
import Pagination from "@/Components/app/Pagination.vue";
import PhongBanModal from "@/Pages/PhongBan/PhongBanModal.vue";

const props = defineProps({
    phong_ban_list: Object,
})

let phong_ban = ref({
    id: "",
    ten: "",
})

let search = ref("")

function openModal() {
    phong_ban.value = {
        id: "",
        ten: "",
    }
    $('#phongbanmodal').modal('show');
}

const allData = computed( () => {
    return props.phong_ban_list
})

watch(search, (value) => {
    router.visit(route('phongban.index', {search: value}), {
        preserveState: true
    })
})

function changePage(url) {
    router.visit(url, {
        preserveState: true
    })
}

function editModal(kh) {
    phong_ban.value = {
        id: kh.id,
        ten: kh.ten,
    };
    $('#phongbanmodal').modal('show');
}

function delelephongban(id) {
    if (confirm('Bạn có chắc chắn muốn xóa phòng ban này không?')) {
        router.delete(route('phongban.delete', { id: id }), {
            onSuccess: () => {
                router.visit(route('phongban.index'))
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
                    class="fa fa-angle-right mr-2 ml-2"></i> Phòng ban</p>
            </div>
        </div>

        <div class="card shadow card-child" style="">
            <div class="card-body">
                <div class="row mb-3">
                    <div class=" col-md-2">
                        <a @click.prevent="openModal" class="btn btn-primary form-control">Thêm phòng ban</a>
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
                                               placeholder="Tìm kiếm phòng ban">
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
                        <th>Tên phòng ban</th>
                        <th>Thao tác</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr v-if="allData?.data.length === 0">
                        <td colspan="6" class="text-center">Không có dữ liệu</td>
                    </tr>

                    <tr :key="kh.id" v-else v-for="kh in allData?.data">
                        <td>{{kh.ten}}</td>
                        <td class="action">
                            <a class="btn btn-primary btn-sm d-inline-block mr-2" @click.prevent="editModal(kh)">Sửa</a>
                            <a class="btn btn-danger btn-sm" @click.prevent="delelephongban(kh.id)">Xóa</a>
                        </td>
                    </tr>
                    </tbody>
                </table>
                <Pagination :allData="allData" @changePage="changePage"/>

            </div>
        </div>
        <PhongBanModal :phong_ban="phong_ban"/>
    </MainLayout>
</template>
<style scoped>

</style>
