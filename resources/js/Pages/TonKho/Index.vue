<script setup>

import MainLayout from "@/Layouts/MainLayout.vue";
import {computed, ref, watch} from "vue";
import TonKhoModal from "@/Pages/tonkho/TonKhoModal.vue";
import {router} from "@inertiajs/vue3";
import {formatDate} from "@/assets/js/script.js";
import Pagination from "@/Components/app/Pagination.vue";

const props = defineProps({
    san_pham_list: Object,
    ton_kho_list: Object,
    kho_list: Object,
})

let ton_kho = ref({
    id: "",
    kho_id: "",
    san_pham_id: "",
    so_luong: 0,
})

let search = ref("")

const allData = computed( () => {
    return props.ton_kho_list
})

watch(search, (value) => {
    router.visit(route('tonkho.index', {search: value}), {
        preserveState: true
    })
})

function changePage(url) {
    router.visit(url, {
        preserveState: true
    })
}

function editModal(kh) {
    ton_kho.value = {
        id: kh.id,
        kho_id: kh.kho_id,
        san_pham_id: kh.san_pham_id,
        so_luong: kh.so_luong,
    };
}

function deleletonkho(id) {
    if (confirm('Bạn có chắc chắn muốn xóa tồn kho này không?')) {
        router.delete(route('tonkho.delete', { id: id }), {
            onSuccess: () => {
                router.visit(route('tonkho.index'))
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
                <p class="txt-color mb-0 font-weight-bold">Nhập xuất kho <i
                    class="fa fa-angle-right mr-2 ml-2"></i> Điều chỉnh tồn kho</p>
            </div>
        </div>

        <div class="card shadow card-child" style="">
            <div class="card-body">
                <div class="row mb-3">
                    <div class="col-md-12">
                        <form >
                            <div class="row">
                                <div class="col-md-9">
                                    <TonKhoModal
                                        :ton_kho="ton_kho"
                                        :kho_list="props.kho_list"
                                        :san_pham_list="props.san_pham_list"
                                    />
                                </div>
                                <div class="col-md-3">
                                    <div class="input-group">
                                        <input v-model="search" type="text" name="search"
                                               class="form-control"
                                               placeholder="Tìm kiếm tồn kho">
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
                        <th>Kho</th>
                        <th>Mã sản phẩm</th>
                        <th>Tên sản phẩm</th>
                        <th>Số lượng</th>
                        <th>Ngày tạo</th>
                        <th>Ngày cập nhật</th>
                        <th>Thao tác</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr v-if="allData?.data.length === 0">
                        <td colspan="7" class="text-center">Không có dữ liệu</td>
                    </tr>

                    <tr :key="kh.id" v-else v-for="kh in allData?.data">
                        <td >{{ kh.kho.ten }}</td>
                        <td >{{ kh.san_pham.ma }}</td>
                        <td >{{ kh.san_pham.ten }}</td>
                        <td class="quantity">{{ kh.so_luong }}</td>
                        <td class="date">{{ formatDate(kh.created_at) }}</td>
                        <td class="date">{{ formatDate(kh.updated_at) }}</td>
                        <td class="action">
                            <a class="btn btn-primary btn-sm d-inline-block mr-2" @click.prevent="editModal(kh)">Sửa</a>
                            <a class="btn btn-danger btn-sm" @click.prevent="deleletonkho(kh.id)">Xóa</a>
                        </td>
                    </tr>
                    </tbody>
                </table>
                <Pagination :data="allData" @changePage="changePage"/>

            </div>
        </div>

    </MainLayout>
</template>
<style scoped>

</style>
