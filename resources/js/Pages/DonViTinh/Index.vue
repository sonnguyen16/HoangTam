<script setup>

import MainLayout from "@/Layouts/MainLayout.vue";
import {computed, ref, watch} from "vue";
import {router} from "@inertiajs/vue3";
import DonViTinhModal from "@/Pages/DonViTinh/DonViTinhModal.vue";

const props = defineProps({
    don_vi_tinh_list: Object,
})

let don_vi_tinh = ref({
    id: "",
    ten: "",
})

let search = ref("")

function openModal() {
    don_vi_tinh.value = {
        id: "",
        ten: "",
    }
    $('#donvitinhmodal').modal('show');
}

const allData = computed( () => {
    return props.don_vi_tinh_list
})

watch(search, (value) => {
    router.visit(route('donvitinh.index', {search: value}), {
        preserveState: true
    })
})

function changePage(url) {
    router.visit(url, {
        preserveState: true
    })
}

function editModal(kh) {
    don_vi_tinh.value = {
        id: kh.id,
        ten: kh.ten,
    };
    $('#donvitinhmodal').modal('show');
}

function deleledonvitinh(id) {
    if (confirm('Bạn có chắc chắn muốn xóa đơn vị tính này không?')) {
        router.delete(route('donvitinh.delete', { id: id }), {
            onSuccess: () => {
                router.visit(route('donvitinh.index'))
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
                    class="fa fa-angle-right mr-2 ml-2"></i> Quản lý đơn vị tính</p>
            </div>
        </div>

        <div class="card shadow card-child" style="">
            <div class="card-body">
                <div class="row mb-3">
                    <div class=" col-md-2">
                        <a @click.prevent="openModal" class="btn btn-primary form-control">Thêm đơn vị tính</a>
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
                                               placeholder="Tìm kiếm đơn vị tính">
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
                        <th>Tên đơn vị tính</th>
                        <th class="action">Thao tác</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr v-if="allData?.data.length === 0">
                        <td colspan="6" class="text-center">Không có dữ liệu</td>
                    </tr>

                    <tr :key="kh.id" v-else v-for="kh in allData?.data">
                        <td>{{kh.ten}}</td>
                        <td >
                            <a class="btn btn-primary btn-sm d-inline-block mr-2" @click.prevent="editModal(kh)">Sửa</a>
                            <a class="btn btn-danger btn-sm" @click.prevent="deleledonvitinh(kh.id)">Xóa</a>
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
        <DonViTinhModal :don_vi_tinh="don_vi_tinh"/>
    </MainLayout>
</template>
<style scoped>

</style>
