<script setup>

import MainLayout from "@/Layouts/MainLayout.vue";
import {computed, ref, watch} from "vue";
import {router} from "@inertiajs/vue3";
import LoaiSanPhamModal from "@/Pages/LoaiSanPham/LoaiSanPhamModal.vue";
import Pagination from "@/Components/app/Pagination.vue";

const props = defineProps({
    loai_san_pham_list: Object,
})

let loai_san_pham = ref({
    id: "",
    ten: "",
})

let search = ref("")

function openModal() {
    loai_san_pham.value = {
        id: "",
        ten: "",
    }
    $('#loaisanphammodal').modal('show');
}

const allData = computed( () => {
    return props.loai_san_pham_list
})

watch(search, (value) => {
    router.visit(route('loai_san_pham.index', {search: value}), {
        preserveState: true
    })
})

function changePage(url) {
    router.visit(url, {
        preserveState: true
    })
}

function editModal(kh) {
    loai_san_pham.value = {
        id: kh.id,
        ten: kh.ten,
    };
    $('#loaisanphammodal').modal('show');
}

function deleleloai_san_pham(id) {
    if (confirm('Bạn có chắc chắn muốn xóa loại sản phẩm này không?')) {
        router.delete(route('loaisanpham.delete', { id: id }), {
            onSuccess: () => {
                router.visit(route('loaisanpham.index'))
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
                    class="fa fa-angle-right mr-2 ml-2"></i> Quản lý loại sản phẩm</p>
            </div>
        </div>

        <div class="card shadow card-child" style="">
            <div class="card-body">
                <div class="row mb-3">
                    <div class=" col-md-2">
                        <a @click.prevent="openModal" class="btn btn-primary form-control">Thêm loại sản phẩm</a>
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
                                               placeholder="Tìm kiếm loại sản phẩm">
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
                        <th>Tên loại sản phẩm</th>
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
                            <a class="btn btn-danger btn-sm" @click.prevent="deleleloai_san_pham(kh.id)">Xóa</a>
                        </td>
                    </tr>
                    </tbody>
                </table>
                <Pagination :data="allData" @changePage="changePage"/>

            </div>
        </div>
        <LoaiSanPhamModal :loai_san_pham="loai_san_pham"/>
    </MainLayout>
</template>
<style scoped>

</style>
