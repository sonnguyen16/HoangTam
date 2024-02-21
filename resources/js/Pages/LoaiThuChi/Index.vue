<script setup>

import MainLayout from "@/Layouts/MainLayout.vue";
import {computed, ref, watch} from "vue";
import {router} from "@inertiajs/vue3";
import LoaiThuChiModal from "@/Pages/LoaiThuChi/LoaiThuChiModal.vue";
import Pagination from "@/Components/app/Pagination.vue";

const props = defineProps({
    loai_thu_chi_list: Object,
})

let loai_thu_chi = ref({
    id: "",
    ten: "",
    loai: ""
})

let search = ref("")

function openModal() {
    loai_thu_chi.value = {
        id: "",
        ten: "",
        loai: ""
    }
    $('#loaithuchimodal').modal('show');
}

const allData = computed( () => {
    return props.loai_thu_chi_list
})

watch(search, (value) => {
    router.visit(route('loaithuchi.index', {search: value}), {
        preserveState: true
    })
})

function changePage(url) {
    router.visit(url, {
        preserveState: true
    })
}

function editModal(kh) {
    loai_thu_chi.value = {
        id: kh.id,
        ten: kh.ten,
        loai: kh.loai
    };
    $('#loaithuchimodal').modal('show');
}

function deleleloai_thu_chi(id) {
    if (confirm('Bạn có chắc chắn muốn xóa loại thu chi này không?')) {
        router.delete(route('loaithuchi.delete', { id: id }), {
            onSuccess: () => {
                router.visit(route('loaithuchi.index'))
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
                <p class="txt-color mb-0 font-weight-bold">Phiếu thu chi <i
                    class="fa fa-angle-right mr-2 ml-2"></i> Quản lý loại thu chi</p>
            </div>
        </div>

        <div class="card shadow card-child" style="">
            <div class="card-body">
                <div class="row mb-3">
                    <div class=" col-md-2">
                        <a @click.prevent="openModal" class="btn btn-primary form-control">Thêm loại thu chi</a>
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
                                               placeholder="Tìm kiếm loại thu chi">
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
                        <th>Tên loại thu chi</th>
                        <th>Loại</th>
                        <th>Thao tác</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr v-if="allData?.data.length === 0">
                        <td colspan="3" class="text-center">Không có dữ liệu</td>
                    </tr>

                    <tr :key="kh.id" v-else v-for="kh in allData?.data">
                        <td>{{kh.ten}}</td>
                        <td>
                            <span v-if="kh.loai === 0">Thu</span>
                            <span v-else>Chi</span>
                        </td>
                        <td class="action">
                            <a class="btn btn-primary btn-sm d-inline-block mr-2" @click.prevent="editModal(kh)">Sửa</a>
                            <a class="btn btn-danger btn-sm" @click.prevent="deleleloai_thu_chi(kh.id)">Xóa</a>
                        </td>
                    </tr>
                    </tbody>
                </table>
               <Pagination :allData="allData" @changePage="changePage"/>

            </div>
        </div>
        <LoaiThuChiModal :loai_thu_chi="loai_thu_chi"/>
    </MainLayout>
</template>
<style scoped>

</style>
