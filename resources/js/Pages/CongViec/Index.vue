<script setup>

import MainLayout from "@/Layouts/MainLayout.vue";
import {computed, onMounted, ref, watch} from "vue";
import DuAnModal from "@/Pages/duan/DuAnModal.vue";
import {router} from "@inertiajs/vue3";
import {formatDate} from "@/assets/js/script.js";
import ChiTiet2 from "@/Pages/duan/ChiTiet2.vue";
import TheoDoi from "@/Pages/DuAn/TheoDoi.vue";
import Pagination from "@/Components/app/Pagination.vue";
import TreeItem from "@/Components/app/TreeItem.vue";
import TreeSearchItem from "@/Components/app/TreeSearchItem.vue";

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
    tien_do: 0,
    parent_id: "",
    files: [],
})

let hang_muc1 = ref({
    id: "",
    ten: "",
    ngay_bat_dau: "",
    ngay_ket_thuc: "",
    user_id: "",
    nhan_vien: {},
    mo_ta: "",
    tien_do: 0,
    parent_id: "",
    children: [],
    files: [],
    binh_luan: [],
    nguoi_theo_doi: []
})

let search = ref("")
const showTree = ref(false)

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
        files: []
    }
    $('#duanmodal').modal('show');
}

const allData = computed( () => {
    return props.du_an_list
})

const selectedData = ref(props.du_an_list[0])

watch(search, (value) => {
    router.visit(route('congviec.index', {search: value}), {
        preserveState: true
    })
})

function changePage(url) {
    router.visit(url, {
        preserveState: true
    })
}


function editModal(kh) {
    selectedData.value = kh
    hang_muc1.value = {
        id: kh.id,
        ten: kh.ten,
        ngay_bat_dau: kh.ngay_bat_dau,
        ngay_ket_thuc: kh.ngay_ket_thuc,
        user_id: kh.user_id,
        mo_ta: kh.mo_ta,
        tien_do: kh.tien_do,
        parent_id: kh.parent_id,
        children: kh.children,
        files: kh.files,
        binh_luan: kh.binh_luan,
        nguoi_theo_doi: kh.nguoi_theo_doi,
        nhan_vien: kh.nhan_vien
    }
}

onMounted(() => {
    editModal(allData.value[0] ? allData.value[0] : {})
})

// function editNguoiTheoDoi(){
//     hang_muc.value = {...hang_muc1.value}
//     $('#duanmodal').modal('show');
// }
//
// function xoaNguoiTheoDoi(id){
//     hang_muc1.value.nguoi_theo_doi = hang_muc1.value.nguoi_theo_doi.filter(ntd => ntd.id != id)
//     allData.value.find(dx => dx.id == hang_muc1.value.id).nguoi_theo_doi = cloneDeep(hang_muc1.value.nguoi_theo_doi)
//     axios({
//         method: 'post',
//         url: route('dexuat.xoatheodoi', {id: id}),
//     })
// }
//
// function reload(id){
//     if(id){
//         hang_muc1.value.nguoi_theo_doi = [...allData.value.find(dx => dx.id == id).nguoi_theo_doi]
//     }
// }


</script>

<template>
    <MainLayout>
        <div class="card shadow card-child" style="">
            <div class="card-body p-0">
                <div class="row">
                    <div class="col-md-3">
                        <div class="row p-3">
<!--                            <div class=" col-md-4">-->
<!--                                <a @click.prevent="openModal('')" class="btn btn-primary form-control m-3">Thêm dự án</a>-->
<!--                            </div>-->
                            <div class="col-md-8">
                                <div class="input-group">
                                    <input v-model="search" type="text" name="search"
                                           class="form-control"
                                           placeholder="Tìm kiếm công việc">
                                    <div class="input-group-append">
                                        <button class="btn btn-primary" type="submit">
                                            <i class="fas fa-search"></i>
                                        </button>
                                    </div>
                                </div>

                            </div>

                        </div>
                        <h4 class="txt-color font-weight-bold borders ml-3 mb-3">Danh sách công việc</h4>

                        <div class="border p-3">
                            <template v-for="du_an in allData">
                                <div class="d-flex justify-content-between mb-[8px]">
                                    <h6 class="font-weight-bold text-emerald-600">
                                        <i class="fa fa-file me-1"></i>
                                        {{ du_an.ten }}
                                    </h6>
                                    <button @click.prevent="editModal(du_an)" class="me-[18px]">
                                        <i class="fa fa-eye"></i>
                                    </button>
                                </div>
                                <div class="ms-[20px]">
                                    <TreeSearchItem
                                        v-for="item in du_an.children"
                                        :key="item.id"
                                        :item="item"
                                        @choose="editModal"
                                    />
                                </div>
                            </template>
                        </div>

                    </div>
                    <div class="col-md-7 p-3">
                        <ChiTiet2
                            :du_an="hang_muc1"
                            :users="nhan_vien_list"
                        />
                    </div>
                    <div class="col-md-2 pt-3 pr-2">
                        <TheoDoi
                            :du_an="hang_muc1"
                        />
                    </div>
                </div>
            </div>
        </div>
        <DuAnModal
            :du_an="hang_muc"
            :users="nhan_vien_list"
        />

    </MainLayout>
</template>
<style scoped>
.row{
    margin-right: 0;
}
</style>
