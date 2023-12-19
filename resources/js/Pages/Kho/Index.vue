<script setup>

import MainLayout from "@/Layouts/MainLayout.vue";
import {computed, onMounted, ref} from "vue";
import {router, useRemember} from "@inertiajs/vue3";
import {useRoute} from "vue-router";
import khoModal from "@/Pages/kho/khoModal.vue";

const props = defineProps({
    kho_list: Object,
})

let kho = ref({
    id: "",
    ten: "",
})

let search = ref("")

function openModal() {
    kho.value = {
        id: "",
        ten: "",
    }
    $('#khomodal').modal('show');
}

const allData = computed(() => {
    console.log(props.kho_list)
    if (search.value) {
        router.get(route('kho.index'), {search: search.value})
    } else {
        return props.kho_list
    }
})

function editModal(kh) {
    kho.value = {
        id: kh.id,
        ten: kh.ten,
    };
    $('#khomodal').modal('show');
}

function delelekho(id) {
    if (confirm('Bạn có chắc chắn muốn xóa kho này không?')) {
        router.delete(route('kho.delete', { id: id }), {
            onSuccess: () => {
                router.visit(route('kho.index'))
            },
            onError: () => {
                console.log(form.errors)
            }
        })
    }
}

function changePage(url) {
    router.visit(url)
}

</script>

<template>
    <MainLayout>
        <div class="card shadow">
            <div class="card-body card-brc">
                <p class="txt-color mb-0 font-weight-bold">Danh mục quản lý <i
                    class="fa fa-angle-right mr-2 ml-2"></i> Quản lý kho</p>
            </div>
        </div>

        <div class="card shadow card-child" style="">
            <div class="card-body">
                <h4 class="txt-color mb-3 text-red">Danh sách kho</h4>
                <div class="row mt-3 mb-4">
                    <div class=" col-md-2">
                        <a @click.prevent="openModal" class="btn btn-primary form-control">Thêm kho</a>
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
                                               placeholder="Tìm kiếm kho">
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
                        <th>Tên kho</th>
                        <th>Thao tác</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr v-if="allData?.data.length == 0">
                        <td colspan="6" class="text-center">Không có dữ liệu</td>
                    </tr>

                    <tr :key="kh.id" v-else v-for="kh in allData?.data">
                        <td>{{kh.ten}}</td>
                        <td >
                            <a class="btn btn-primary btn-sm d-inline-block mr-2" @click.prevent="editModal(kh)">Sửa</a>
                            <a class="btn btn-danger btn-sm" @click.prevent="delelekho(kh.id)">Xóa</a>
                        </td>
                    </tr>
                    </tbody>
                </table>
                <div class="float-right mt-3 mb-0">
                    <div class="row">
                        <div class="col-md-12 col-lg-12 text-center">
                            <ul v-if="allData?.total > 10" class="pagination">
                                <li v-for="pageNumber in allData?.links.slice(1, -1)" :key="pageNumber" class="page-item">
                                    <a
                                        class="page-link"
                                        :class="{ 'bg-primary': pageNumber.label === allData?.current_page.toString() }"
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
        <khoModal :kho="kho"/>
    </MainLayout>
</template>
<style scoped>

</style>
