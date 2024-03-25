<script setup>

import MainLayout from "@/Layouts/MainLayout.vue";
import {computed, ref, watch} from "vue";
import {router} from "@inertiajs/vue3";
import khoModal from "@/Pages/kho/khoModal.vue";
import Pagination from "@/Components/app/Pagination.vue";

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

const allData = computed( () => {
    return props.kho_list
})

watch(search, (value) => {
    router.visit(route('kho.index', {search: value}), {
        preserveState: true
    })
})

function changePage(url) {
    router.visit(url, {
        preserveState: true
    })
}

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


</script>

<template>
    <MainLayout>
        <div class="card shadow card-child" style="">
            <div class="card-body">
                <div class="row mb-3">
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
                    <tr v-if="allData?.data.length === 0">
                        <td colspan="6" class="text-center">Không có dữ liệu</td>
                    </tr>

                    <tr :key="kh.id" v-else v-for="kh in allData?.data">
                        <td>{{kh.ten}}</td>
                        <td class="action">
                            <a class="btn btn-primary btn-sm d-inline-block mr-2" @click.prevent="editModal(kh)">Sửa</a>
                            <a class="btn btn-danger btn-sm" @click.prevent="delelekho(kh.id)">Xóa</a>
                        </td>
                    </tr>
                    </tbody>
                </table>
                <Pagination :data="allData" @changePage="changePage"/>

            </div>
        </div>
        <khoModal :kho="kho"/>
    </MainLayout>
</template>
<style scoped>

</style>
