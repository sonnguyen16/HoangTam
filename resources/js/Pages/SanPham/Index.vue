<script setup>

import MainLayout from "@/Layouts/MainLayout.vue";
import {computed,  ref, watch} from "vue";
import SanPhamModal from "@/Pages/sanpham/sanphamModal.vue";
import {router} from "@inertiajs/vue3";


const props = defineProps({
    san_pham_list: Object,
    don_vi_tinh_list: Object,
    loai_san_pham_list: Object,
})

let san_pham = ref({
    id: "",
    ma: "",
    ten: "",
    gia_ban: 0,
    gia_nhap: 0,
    don_vi_tinh_id: "",
    loai_san_pham_id: "",
    mo_ta: "",
    dinh_muc: [],
})

let search = ref("")

function openModal() {
    san_pham.value = {
        id: "",
        ma: "",
        ten: "",
        gia_ban: 0,
        gia_nhap: 0,
        don_vi_tinh_id: "",
        loai_san_pham_id: "",
        mo_ta: "",
        dinh_muc: [],
    }
    $('#sanphammodal').modal('show');
}

const allData = computed( () => {
    return props.san_pham_list
})

watch(search, (value) => {
    router.visit(route('sanpham.index', {search: value}), {
        preserveState: true
    })
})

function changePage(url) {
    router.visit(url, {
        preserveState: true
    })
}

function editModal(kh) {
    san_pham.value = {
        id: kh.id,
        ma: kh.ma,
        ten: kh.ten,
        gia_ban: kh.gia_ban,
        gia_nhap: kh.gia_nhap,
        don_vi_tinh_id: kh.don_vi_tinh?.id,
        loai_san_pham_id: kh.loai_san_pham?.id,
        mo_ta: kh.mo_ta,
        dinh_muc: kh.dinh_muc,
    };
    $('#sanphammodal').modal('show');
}

function delelesanpham(id) {
    if (confirm('Bạn có chắc chắn muốn xóa sản phẩm này không?')) {
        router.delete(route('sanpham.delete', { id: id }), {
            onSuccess: () => {
                router.visit(route('sanpham.index'))
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
                    class="fa fa-angle-right mr-2 ml-2"></i> Quản lý sản phẩm</p>
            </div>
        </div>

        <div class="card shadow card-child" style="">
            <div class="card-body">
                <div class="row mb-3">
                    <div class=" col-md-2">
                        <a @click.prevent="openModal" class="btn btn-primary form-control">Thêm sản phẩm</a>
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
                                               placeholder="Tìm kiếm sản phẩm">
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
                        <th>Mã sản phẩm</th>
                        <th>Tên sản phẩm</th>
                        <th>Giá bán</th>
                        <th>Giá nhập</th>
                        <th>Đơn vị tính</th>
                        <th>Loại sản phẩm</th>
                        <th>Thao tác</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr v-if="allData?.data.length === 0">
                        <td colspan="5" class="text-center">Không có dữ liệu</td>
                    </tr>

                    <tr :key="kh.id" v-else v-for="kh in allData?.data">
                        <td>{{kh.ma}}</td>
                        <td>{{kh.ten}}</td>
                        <td>{{kh.gia_ban.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}}</td>
                        <td>{{kh.gia_nhap.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}}</td>
                        <td>{{kh.don_vi_tinh?.ten}}</td>
                        <td>{{kh.loai_san_pham?.ten}}</td>
                        <td class="action">
                            <a class="btn btn-primary btn-sm d-inline-block mr-2" @click.prevent="editModal(kh)">Sửa</a>
                            <a class="btn btn-danger btn-sm" @click.prevent="delelesanpham(kh.id)">Xóa</a>
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
        <SanPhamModal
            :san_pham="san_pham"
            :don_vi_tinh_list="don_vi_tinh_list"
            :san_pham_list="san_pham_list"
            :loai_san_pham_list="loai_san_pham_list"
        />
    </MainLayout>
</template>
<style scoped>

</style>
