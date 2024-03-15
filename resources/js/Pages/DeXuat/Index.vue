<script setup>

import MainLayout from "@/Layouts/MainLayout.vue";
import {computed, ref, watch} from "vue";
import DeXuatModal from "@/Pages/DeXuat/DeXuatModal.vue";
import {router, usePage} from "@inertiajs/vue3";
import {formatDate} from "@/assets/js/script.js";
import Pagination from "@/Components/app/Pagination.vue";

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

const allData = computed( () => {
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
    de_xuat_selected.value = kh;
}

function deleledexuat(id) {
    if (confirm('Bạn có chắc chắn muốn xóa đề xuất này không?')) {
        router.delete(route('dexuat.delete', { id: id }), {
            onSuccess: () => {
                router.visit(route('dexuat.index'))
            },
            onError: () => {
                console.log(form.errors)
            }
        })
    }
}

function addBinhLuan(){
    axios({
        method: 'post',
        url: route('binhluan.store'),
        data: {
            noi_dung: $('#comment').val(),
            de_xuat_id: de_xuat_selected.value.id
        }
    }).then((data) => {
        $('#comment').val('')
        de_xuat_selected.value.binh_luan.push({
            noi_dung: data.data.noi_dung,
            nguoi_dung: data.data.nguoi_dung,
            created_at: data.data.created_at
        })
    }).catch((error) => {
        console.log(error)
    })
}

function duyet(event) {
    axios({
        method: 'post',
        url: route('dexuat.duyet', {id: event.target.id}),
        data: {
            trang_thai: event.target.checked ? 1 : 0
        }
    }).then((data) => {
        de_xuat_selected.value.trang_thai = data.data.trang_thai
    }).catch((error) => {
        console.log(error)
    })
}


</script>

<template>
    <MainLayout>
        <div class="card shadow">
            <div class="card-body card-brc">
                <p class="txt-color mb-0 font-weight-bold">Danh mục quản lý <i
                    class="fa fa-angle-right mr-2 ml-2"></i> Quản lý đề xuất</p>
            </div>
        </div>

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

                        <div @click="editModal(dx)" v-for="dx in allData.data" :class="['p-3 border-bottom', {'bg-blue-200': de_xuat_selected.id === dx.id},{'bg-neutral-100 ': de_xuat_selected.id !== dx.id} ]">
                            <div class="d-flex align-items-center gap-[10px] ms-1">
                                <input :id="dx.id" @change.prevent="duyet" type="checkbox" :checked="dx.trang_thai == 1">
                                <h5 class="font-bold mb-0 mt-[2px]">{{ dx.ten }}</h5>
                            </div>
                            <p class="mb-0 ms-1 mt-2 text-secondary">{{ dx.noi_dung.length > 100 ? dx.noi_dung.slice(0,100) + '...' : dx.noi_dung }}</p>
                            <div class="d-flex justify-content-between align-items-center mt-2 mb-0">
                                <div class="d-flex align-items-center gap-[5px]">
                                    <img v-if="dx.created_by.hinh_anh" :src="'/uploads/nhan_vien/' + dx.created_by.hinh_anh" alt="" class="object-cover" style="width: 50px; height: 50px">
                                    <img v-else src="/uploads/avatardefault.png" alt="" class="object-cover" style="width: 30px; height: 30px">
                                    <span class="text-secondary">{{ dx.created_by.name }}</span>
                                </div>
                                <span class="text-secondary">{{ formatDate(dx.created_at) }}</span>
                            </div>
                        </div>

                        <Pagination :all-data="allData" @changePage="changePage"/>
                    </div>
                    <div class="col-md-6 p-3">
                        <template v-if="de_xuat_selected.id">
                            <h4 class="font-weight-bold">{{ de_xuat_selected.ten }}</h4>
                            <span class="text-secondary">Trạng thái:
                                <span v-if="de_xuat_selected.trang_thai === String(0)" class="text-danger ml-1">Chưa duyệt</span>
                                <span v-else class="text-success ml-1">Đã duyệt</span>
                            </span>

                            <h5 class="mb-0 mt-5">Thông tin đề xuất</h5>
                            <hr class="mt-2 mb-3">
                            <div class="text-secondary">
                                <p class="text-md">
                                    <i class="fa fa-user me-2"></i>
                                    Người tạo:
                                    <span class="font-weight-bold text-black ms-2 text-md">{{ de_xuat_selected.created_by.name }}</span>
                                </p>
                                <p class="text-md">
                                    <i class="fa fa-clock me-2"></i>
                                    Ngày tạo:
                                    <span class="ms-2 text-md text-black">{{ formatDate(de_xuat_selected.created_at) }}</span>
                                </p>
                                <p class="text-md">
                                    <i class="fa fa-file me-2"></i>
                                    Nội dung:
                                    <span class="ms-2 text-md text-black">{{ de_xuat_selected.noi_dung }}</span>
                                </p>
                            </div>
                            <h5 class="mb-0 mt-5">File đính kèm</h5>
                            <hr class="mt-2 mb-3">
                            <ul class="space-y-3">
                                <li v-for="file in de_xuat_selected.files" :key="file.id">
                                    <a :href="`/uploads/de_xuat/${file.ten}`" target="_blank">{{ file.ten }}</a>
                                </li>
                            </ul>

                            <h5 class="mb-0 mt-5">Bình luận</h5>
                            <hr class="mt-2 mb-3">
                            <div class="card elevation-2">
                                <div class="card-body">
                                    <div :class="['d-flex', {'mb-4': de_xuat_selected.binh_luan.length > 0}]">
                                        <img v-if="page.props.user.hinh_anh" :src="'/uploads/nhan_vien/' + page.props.user.hinh_anh" alt="avatar" class="rounded-full w-10 h-10 object-cover">
                                        <img v-else src="/uploads/avatardefault.png" alt="avatar" class="rounded-full w-10  object-cover">
                                        <form @submit.prevent="addBinhLuan" class="flex-1 d-flex">
                                            <input type="hidden" :value="de_xuat_selected.id">
                                            <input id="comment" class="form-control border-0 flex-1" placeholder="Nhập bình luận">
                                            <button type="submit" class="">
                                                <i class="fa fa-paper-plane text-lg text-primary"></i>
                                            </button>
                                        </form>
                                    </div>

                                    <div v-for="cm in de_xuat_selected.binh_luan" class="">
                                        <div class="d-flex">
                                            <img v-if="cm.nguoi_dung.hinh_anh" :src="'/uploads/nhan_vien/' + cm.nguoi_dung.hinh_anh" alt="avatar" class="rounded-full w-10 h-10 object-cover">
                                            <img v-else src="/uploads/avatardefault.png" alt="avatar" class="rounded-full w-10 h-10 object-cover">
                                            <div class="flex-1 ml-3">
                                                <div class="d-flex justify-content-between">
                                                    <span class="font-weight-bold">{{ cm.nguoi_dung.name }}</span>
                                                    <span class="text-secondary">{{ new Date(cm.created_at).toLocaleString() }}</span>
                                                </div>
                                                <p class="text-md">{{ cm.noi_dung }}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </template>
                    </div>
                    <div class="col-md-3 pt-3 pr-4">
                        <template v-if="de_xuat_selected.id">
                            <div class="card p-3 elevation-2">
                                <h5 class="font-weight-bold">Người duyệt</h5>
                                <hr class="mt-1 mb-2">
                                <div class="d-flex align-items-center gap-[10px] my-1">
                                    <img v-if="de_xuat_selected.nguoi_duyet?.hinh_anh" :src="'/uploads/nhan_vien/' + de_xuat_selected.nguoi_duyet.hinh_anh" alt="avatar" class="rounded-full w-10 h-10 object-cover elevation-2">
                                    <img v-else src="/uploads/avatardefault.png" alt="avatar" class="rounded-full w-10 h-10 object-cover">
                                    <span class="font-weight-bold">{{ de_xuat_selected.nguoi_duyet?.name }}</span>
                                    <span class="font-weight-bold text-secondary">{{ de_xuat_selected.nguoi_duyet?.email }}</span>
                                </div>
                            </div>
                            <div class="card p-3 elevation-2">
                                <h5 class="font-weight-bold">Người theo dõi</h5>
                                <hr class="mt-1 mb-2">
                                <div v-for="ntd in de_xuat_selected.nguoi_theo_doi" class="d-flex align-items-center gap-[10px] my-1">
                                    <img v-if="ntd.user?.hinh_anh" :src="'/uploads/nhan_vien/' + ntd.user.hinh_anh" alt="avatar" class="rounded-full w-10 h-10 object-cover elevation-2">
                                    <img v-else src="/uploads/avatardefault.png" alt="avatar" class="rounded-full w-10 h-10 object-cover">
                                    <span class="font-weight-bold">{{ ntd.user?.name }}</span>
                                    <span class="font-weight-bold text-secondary">{{ ntd.user?.email }}</span>
                                </div>
                            </div>
                        </template>
                    </div>
                </div>
            </div>
        </div>
        <DeXuatModal
            :de_xuat="de_xuat"
            :nhan_vien_list="nhan_vien_list"
        />
    </MainLayout>
</template>
<style scoped>

</style>
