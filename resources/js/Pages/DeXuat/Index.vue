<script setup>

import MainLayout from "@/Layouts/MainLayout.vue";
import {computed, onMounted, ref, watch} from "vue";
import DeXuatModal from "@/Pages/DeXuat/DeXuatModal.vue";
import {router, usePage, useForm} from "@inertiajs/vue3";
import {formatDate} from "@/assets/js/script.js";
import Pagination from "@/Components/app/Pagination.vue";
import ChiTiet from "@/Pages/DeXuat/ChiTiet.vue";
import TheoDoi from "@/Pages/DeXuat/TheoDoi.vue";
import {cloneDeep} from "lodash";


const props = defineProps({
    de_xuat_list: Object,
    nhan_vien_list: Object,
})

const page = usePage()

let de_xuat = ref({
    id: "",
    ten: "",
    noi_dung: "",
    nguoi_duyet: "",
    nguoi_theo_doi: [],
    file: "",
    trang_thai: 0,
})

let de_xuat_selected = ref({
    id: "",
    ten: "",
    noi_dung: "",
    nguoi_duyet: {},
    nguoi_theo_doi: [],
    created_at: "",
    trang_thai: 0,
    created_by: {},
    files: [],
    binh_luan: []
})

onMounted(() => {
    editModal(props.de_xuat_list.data[0])
})

let search = ref("")

function openModal() {
    de_xuat.value = {
        id: "",
        ten: "",
        noi_dung: "",
        nguoi_duyet: "",
        nguoi_theo_doi: [],
        file: "",
        trang_thai: 0,
    }
    $('#dexuatmodal').modal('show');
}

let allData = computed( () => {
    return props.de_xuat_list
})

watch(search, (value) => {
    router.visit(route('dexuat.index', {search: value}), {
        preserveState: true
    })
})

function changePage(url) {
    router.visit(url, {
        preserveState: true
    })
}


function editModal(kh) {
    de_xuat_selected.value.id = kh.id
    de_xuat_selected.value.ten = kh.ten
    de_xuat_selected.value.noi_dung = kh.noi_dung
    de_xuat_selected.value.nguoi_duyet = kh.nguoi_duyet
    de_xuat_selected.value.nguoi_theo_doi = kh.nguoi_theo_doi
    de_xuat_selected.value.trang_thai = kh.trang_thai
    de_xuat_selected.value.created_by = kh.created_by
    de_xuat_selected.value.created_at = kh.created_at
    de_xuat_selected.value.files = kh.files
    de_xuat_selected.value.binh_luan = kh.binh_luan
}

function deleledexuat(id) {
    if (confirm('Bạn có chắc chắn muốn xóa đề xuất này không?')) {
        router.delete(route('dexuat.delete', { id: id }), {
            onSuccess: () => {
                router.visit(route('dexuat.index'))

            },
            onError: (error) => {
                console.log(error)
            }
        })
    }
}

function editNguoiTheoDoi(){
    de_xuat.value = {
        id: de_xuat_selected.value.id,
        ten: de_xuat_selected.value.ten,
        noi_dung: de_xuat_selected.value.noi_dung,
        nguoi_duyet: de_xuat_selected.value.nguoi_duyet,
        nguoi_theo_doi: de_xuat_selected.value.nguoi_theo_doi.map(ntd => ntd.user_id),
        file: [],
    }
    $('#dexuatmodal').modal('show');
}

function xoaNguoiTheoDoi(id){
    de_xuat_selected.value.nguoi_theo_doi = de_xuat_selected.value.nguoi_theo_doi.filter(ntd => ntd.id != id)
    allData.value.data.find(dx => dx.id == de_xuat_selected.value.id).nguoi_theo_doi = cloneDeep(de_xuat_selected.value.nguoi_theo_doi)
    axios({
        method: 'post',
        url: route('dexuat.xoatheodoi', {id: id}),
    })
}

function reload(id){
    if(id){
        de_xuat_selected.value.nguoi_duyet = allData.value.data.find(dx => dx.id == id).nguoi_duyet
        de_xuat_selected.value.nguoi_theo_doi = [...allData.value.data.find(dx => dx.id == id).nguoi_theo_doi]
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
                                <a @click.prevent="openModal" class="btn btn-primary form-control m-3">Thêm đề xuất</a>
                            </div>
                            <div class="col-md-8 pt-3 pl-3">
                                <div class="input-group">
                                    <input v-model="search" type="text" name="search"
                                           class="form-control"
                                           placeholder="Tìm kiếm đề xuất">
                                    <div class="input-group-append">
                                        <button class="btn btn-primary" type="submit">
                                            <i class="fas fa-search"></i>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <h4 class="txt-color font-weight-bold ml-3 mb-3">Danh sách đề xuất</h4>

                        <div @click="editModal(dx)" v-for="dx in allData.data" :class="['p-3 border-bottom',
                             {'border-s-4 border-neutral-400': dx.id == de_xuat_selected.id},
                             {'bg-neutral-100' : dx.trang_thai == 0},
                             {'bg-green-300' : dx.trang_thai == 1},
                             ]">
                            <div class="d-flex align-items-center gap-[10px] ms-1">
                                <h5 class="font-bold mb-0 mt-[2px]">{{ dx.ten }}</h5>
                            </div>
                            <p class="mb-0 ms-1 mt-2 text-secondary">{{ dx.noi_dung.length > 100 ? dx.noi_dung.slice(0,100) + '...' : dx.noi_dung }}</p>
                            <div class="d-flex justify-content-between align-items-center mt-2 mb-0">
                                <div class="d-flex align-items-center gap-[5px]">
                                    <img v-if="dx.created_by.hinh_anh" :src="'/uploads/nhan_vien/' + dx.created_by.hinh_anh" alt="" class="object-cover" style="width: 30px; height: 30px; border-radius: 50%">
                                    <img v-else src="/uploads/avatardefault.png" alt="" class="object-cover" style="width: 30px; height: 30px">
                                    <span class="text-secondary">{{ dx.created_by.name }}</span>
                                </div>
                                <span class="text-secondary">{{ formatDate(dx.created_at) }}</span>
                            </div>
                        </div>

                        <Pagination :all-data="allData" @changePage="changePage"/>
                    </div>
                    <div class="col-md-7 p-3">
                        <ChiTiet :de_xuat_selected="de_xuat_selected"/>
                    </div>
                    <div class="col-md-2 pt-3 pr-4">
                        <TheoDoi
                            :de_xuat_selected="de_xuat_selected"
                            @editNguoiTheoDoi="editNguoiTheoDoi"
                            @xoaNguoiTheoDoi="xoaNguoiTheoDoi"
                        />
                    </div>
                </div>
            </div>
        </div>
        <DeXuatModal
            :de_xuat="de_xuat"
            :nhan_vien_list="nhan_vien_list"
            @reload="reload"
        />
    </MainLayout>
</template>
<style scoped>
*:focus {
    -webkit-box-shadow: none;
}

.card-child{
    min-height: calc(100vh - 115px) !important;
}
</style>
