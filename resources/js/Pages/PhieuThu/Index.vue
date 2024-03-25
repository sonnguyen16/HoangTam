<script setup>

import MainLayout from "@/Layouts/MainLayout.vue";
import {computed, ref, watch} from "vue";
import {router} from "@inertiajs/vue3";
import PhieuThuModal from "@/Pages/PhieuThu/PhieuThuModal.vue";
import {formatDate} from "@/assets/js/script.js";
import Pagination from "@/Components/app/Pagination.vue";

const props = defineProps({
    phieu_thu_chi_list: Object,
    khach_hang_list: Object,
    du_an_list: Object,
    nhan_vien_list: Object,
    loai_thu_chi_list: Object,
})

let phieu_thu = ref({
    id: "",
    ma: "",
    khach_hang_id: "",
    ngay: "",
    du_an_id: "",
    nhan_vien_id: "",
    loai_thu_chi_id: "",
    ly_do: "",
    so_tien: 0,
    trang_thai: "",
})

let search = ref("")

function openModal() {
    phieu_thu.value = {
        id: "",
        ma: "",
        khach_hang_id: "",
        ngay: "",
        du_an_id: "",
        nhan_vien_id: "",
        loai_thu_chi_id: "",
        ly_do: "",
        so_tien: 0,
        trang_thai: "",
    }
    $('#phieuthuchimodal').modal('show');
}

const allData = computed( () => {
    return props.phieu_thu_chi_list
})

watch(search, (value) => {
    router.visit(route('phieuthuchi.index', {search: value, loai: 'phieuthu'}), {
        preserveState: true
    })
})

function changePage(url) {
    router.visit(url, {
        preserveState: true,
    })
}

function editModal(kh) {
    phieu_thu.value = {
        id: kh.id,
        ma: kh.ma,
        khach_hang_id: kh.khach_hang_id,
        ngay: kh.ngay,
        du_an_id: kh.du_an_id,
        nhan_vien_id: kh.nhan_vien_id,
        loai_thu_chi_id: kh.loai_thu_chi_id,
        ly_do: kh.ly_do,
        so_tien: kh.so_tien,
        trang_thai: kh.trang_thai,
    };
    $('#phieuthuchimodal').modal('show');
}

function delelephieuthuchi(id) {
    if (confirm('Bạn có chắc chắn muốn xóa phiếu thu này không?')) {
        router.delete(route('phieuthuchi.delete', { id: id }), {
            onSuccess: () => {
                router.visit(route('phieuthuchi.index', { loai: 'phieuthu' }))
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
                        <a @click.prevent="openModal" class="btn btn-primary form-control">Thêm phiếu thu</a>
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
                                               placeholder="Tìm kiếm phiếu thu">
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
                        <th>STT</th>
                        <th>Mã phiếu</th>
                        <th>Khách hàng</th>
                        <th>Người thu</th>
                        <th>Dự án</th>
                        <th>Trạng thái</th>
                        <th>Ngày tạo</th>
                        <th>Số tiền</th>
                        <th>Thao tác</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr v-if="allData?.data.length === 0">
                        <td colspan="9" class="text-center">Không có dữ liệu</td>
                    </tr>

                    <tr :key="kh.id" v-else v-for="(kh, index) in allData?.data">
                        <td>{{ index + 1 }}</td>
                        <td>{{ kh.ma }}</td>
                        <td>{{ kh.khach_hang?.ten }}</td>

                        <td>{{ kh.nhan_vien?.name }}</td>
                        <td>{{ kh.du_an?.ten }}</td>
                        <td>
                            <span v-if="kh.trang_thai === 0" class="badge badge-warning">Chưa thanh toán</span>
                            <span v-else class="badge badge-success">Đã thanh toán</span>
                        </td>
                        <td class="date">{{ formatDate(kh.created_at) }}</td>
                        <td class="money">{{ kh.so_tien.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") }}</td>
                        <td style="width: 10%">
                            <a class="btn btn-primary btn-sm d-inline-block mr-2" @click.prevent="editModal(kh)">Sửa</a>
                            <a class="btn btn-primary btn-sm d-inline-block mr-2" target="_blank"  :href="route('phieuthuchi.print', { id : kh.id })">In Phiếu</a>
                            <a class="btn btn-danger btn-sm" @click.prevent="delelephieuthuchi(kh.id)">Xóa</a>
                        </td>
                    </tr>
                    </tbody>
                </table>
                <Pagination :allData="allData" @changePage="changePage" />
            </div>
        </div>
        <PhieuThuModal
            :phieu_thu="phieu_thu"
            :khach_hang_list="props.khach_hang_list"
            :du_an_list="props.du_an_list"
            :nhan_vien_list="props.nhan_vien_list"
            :loai_thu_chi_list="props.loai_thu_chi_list"
        />
    </MainLayout>
</template>
<style scoped>

</style>
