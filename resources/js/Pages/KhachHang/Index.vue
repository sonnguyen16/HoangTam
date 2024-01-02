<script setup>

import MainLayout from "@/Layouts/MainLayout.vue";
import {computed, ref, watch} from "vue";
import KhachHangModal from "@/Pages/KhachHang/KhachHangModal.vue";
import {router} from "@inertiajs/vue3";


const props = defineProps({
    khach_hang_list: Object,
})

let khach_hang = ref({
    id: "",
    ten: "",
    dia_chi: "",
    dien_thoai: "",
    website: "",
    ghi_chu: "",
})

let search = ref("")

function openModal() {
    khach_hang.value = {
        id: "",
        ten: "",
        dia_chi: "",
        dien_thoai: "",
        website: "",
        ghi_chu: "",
    }
    $('#khachhangmodal').modal('show');
}

const allData = computed( () => {
    return props.khach_hang_list
})

watch(search, (value) => {
    router.visit(route('khachhang.index', {search: value}), {
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
    khach_hang.value = {
        id: kh.id,
        ten: kh.ten,
        dia_chi: kh.dia_chi,
        dien_thoai: kh.dien_thoai,
        website: kh.website,
        ghi_chu: kh.ghi_chu,
    };
    $('#khachhangmodal').modal('show');
}

function deleleKhachHang(id) {
    if (confirm('Bạn có chắc chắn muốn xóa khách hàng này không?')) {
        router.delete(route('khachhang.delete', { id: id }), {
            onSuccess: () => {
                router.visit(route('khachhang.index'))
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
                <p class="txt-color mb-0 font-weight-bold">Đối tác <i
                    class="fa fa-angle-right mr-2 ml-2"></i> Danh sách khách hàng</p>
            </div>
        </div>

        <div class="card shadow card-child" style="">
            <div class="card-body">
                <h4 class="txt-color mb-3 text-red">Danh sách khách hàng</h4>
                <div class="row mt-3 mb-4">
                    <div class=" col-md-2">
                        <a @click.prevent="openModal" class="btn btn-primary form-control">Thêm khách hàng</a>
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
                                               placeholder="Tìm kiếm khách hàng">
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
                            <th>Tên khách hàng</th>
                            <th>Địa chỉ</th>
                            <th>Số điện thoại</th>
                            <th>Website</th>
                            <th>Ghi chú</th>
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
                        <td>{{kh.website}}</td>
                        <td>{{kh.ghi_chu}}</td>
                        <td >
                            <a class="btn btn-primary btn-sm d-inline-block mr-2" @click.prevent="editModal(kh)">Sửa</a>
                            <a class="btn btn-danger btn-sm" @click.prevent="deleleKhachHang(kh.id)">Xóa</a>
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
        <KhachHangModal :khach_hang="khach_hang"/>
    </MainLayout>
</template>
<style scoped>

</style>
