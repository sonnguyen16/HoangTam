<script setup>

import MainLayout from "@/Layouts/MainLayout.vue";
import {computed, onMounted, ref, watch} from "vue";
import DuAnModal from "@/Pages/duan/DuAnModal.vue";
import {router} from "@inertiajs/vue3";
import {formatDate} from "@/assets/js/script.js";
import ChiTiet2 from "@/Pages/duan/ChiTiet2.vue";
import TheoDoi from "@/Pages/DuAn/TheoDoi.vue";
import {cloneDeep} from "lodash";

const props = defineProps({
    du_an_list: Object,
    nhan_vien_list: Object,
})

let hang_muc = ref({
    id: "",
    ten: "",
    ngay_bat_dau: "",
    ngay_ket_thuc: "",
    user_id: "",
    nhan_vien: {},
    mo_ta: "",
    trang_thai: "",
    parent_id: "",
    children: [],
    files: [],
    binh_luan: []
})

let hang_muc1 = ref({
    id: "",
    ten: "",
    ngay_bat_dau: "",
    ngay_ket_thuc: "",
    user_id: "",
    nhan_vien: {},
    mo_ta: "",
    trang_thai: "",
    parent_id: "",
    children: [],
    files: [],
    binh_luan: [],
    nguoi_theo_doi: []
})

let search = ref("")

function openModal(id) {
    hang_muc.value = {
        id: "",
        ten: "",
        ngay_bat_dau: "",
        ngay_ket_thuc: "",
        user_id: "",
        mo_ta: "",
        trang_thai: "",
        parent_id: id,
        children: [],
        files: []
    }
    $('#duanmodal').modal('show');
}

const allData = computed( () => {
    return props.du_an_list
})

watch(search, (value) => {
    router.visit(route('duan.index', {search: value}), {
        preserveState: true
    })
})

function changePage(url) {
    router.visit(url, {
        preserveState: true
    })
}


function editModal(kh) {
    hang_muc1.value = {
        id: kh.id,
        ten: kh.ten,
        ngay_bat_dau: kh.ngay_bat_dau,
        ngay_ket_thuc: kh.ngay_ket_thuc,
        user_id: kh.user_id,
        mo_ta: kh.mo_ta,
        trang_thai: kh.trang_thai,
        parent_id: kh.parent_id,
        children: kh.children,
        files: kh.files,
        binh_luan: kh.binh_luan,
        nguoi_theo_doi: kh.nguoi_theo_doi
    }
}

onMounted(() => {
    editModal(allData.value[0] ? allData.value[0] : {})
})

function editNguoiTheoDoi(){
    hang_muc.value = {...hang_muc1.value}
    $('#duanmodal').modal('show');
}

function xoaNguoiTheoDoi(id){
    hang_muc1.value.nguoi_theo_doi = hang_muc1.value.nguoi_theo_doi.filter(ntd => ntd.id != id)
    allData.value.find(dx => dx.id == hang_muc1.value.id).nguoi_theo_doi = cloneDeep(hang_muc1.value.nguoi_theo_doi)
    axios({
        method: 'post',
        url: route('dexuat.xoatheodoi', {id: id}),
    })
}

function reload(id){
    if(id){
        hang_muc1.value.nguoi_theo_doi = [...allData.value.find(dx => dx.id == id).nguoi_theo_doi]
    }
}


</script>

<template>
    <MainLayout>
        <div class="card shadow card-child" style="">
            <div class="card-body p-0">
                <div class="row">
                    <div class="col-md-3">
                        <div class="row">
                            <div class=" col-md-4">
                                <a @click.prevent="openModal('')" class="btn btn-primary form-control m-3">Thêm dự án</a>
                            </div>
                            <div class="col-md-8 pt-3 pl-3">
                                <div class="input-group">
                                    <input v-model="search" type="text" name="search"
                                           class="form-control"
                                           placeholder="Tìm kiếm dự án">
                                    <div class="input-group-append">
                                        <button class="btn btn-primary" type="submit">
                                            <i class="fas fa-search"></i>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <h4 class="txt-color font-weight-bold ml-3 mb-3">Danh sách dự án</h4>

                        <div @click="editModal(dx)" v-for="dx in allData" :class="['p-3 border-bottom', {'bg-blue-200': hang_muc1.id === dx.id},{'bg-neutral-100 ': hang_muc1.id !== dx.id}]">
                            <div class="d-flex align-items-center gap-[10px] ms-1">
                                <h5 class="font-bold mb-0 mt-[2px]">{{ dx.ten }}</h5>
                            </div>
                            <p class="mb-0 ms-1 mt-2 text-secondary">{{ dx.mo_ta.length > 100 ? dx.mo_ta.slice(0,100) + '...' : dx.mo_ta }}</p>
                            <div class="d-flex justify-content-between align-items-center mt-2 mb-0">
                                <div class="d-flex align-items-center gap-[5px]">
                                    <img v-if="dx.nhan_vien.hinh_anh" :src="'/uploads/nhan_vien/' + dx.nhan_vien.hinh_anh" alt="" class="object-cover" style="width: 30px; height: 30px; border-radius: 50%">
                                    <img v-else src="/uploads/avatardefault.png" alt="" class="object-cover" style="width: 30px; height: 30px">
                                    <span class="text-secondary">{{ dx.created_by.name }}</span>
                                </div>
                                <span class="text-secondary">{{ formatDate(dx.created_at) }}</span>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-7 p-3">
                        <ChiTiet2
                            :du_an="hang_muc1"
                            :users="nhan_vien_list"
                        />
                    </div>
                    <div class="col-md-2 pt-3 pr-4">
                        <TheoDoi
                            :du_an="hang_muc1"
                            @editNguoiTheoDoi="editNguoiTheoDoi"
                            @xoaNguoiTheoDoi="xoaNguoiTheoDoi"
                        />
                    </div>
                </div>
            </div>
        </div>
        <DuAnModal
            :du_an="hang_muc"
            :users="nhan_vien_list"
            @reload="reload"
        />
    </MainLayout>
</template>
<style scoped>
.card-child{
    min-height: calc(100vh - 115px) !important;
}
</style>
