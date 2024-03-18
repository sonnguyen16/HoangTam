<script setup>

import MainLayout from "@/Layouts/MainLayout.vue";
import {computed, onMounted, ref, watch} from "vue";
import DeXuatModal from "@/Pages/DeXuat/DeXuatModal.vue";
import {router, usePage, useForm} from "@inertiajs/vue3";
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


let de_xuat_selected = useForm({
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

let search = ref("")
let files_temp = ref([])

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
    de_xuat_selected.id = kh.id
    de_xuat_selected.ten = kh.ten
    de_xuat_selected.noi_dung = kh.noi_dung
    de_xuat_selected.nguoi_duyet = kh.nguoi_duyet
    de_xuat_selected.nguoi_theo_doi = kh.nguoi_theo_doi
    de_xuat_selected.trang_thai = kh.trang_thai
    de_xuat_selected.created_by = kh.created_by
    de_xuat_selected.created_at = kh.created_at
    de_xuat_selected.files = kh.files
    de_xuat_selected.binh_luan = kh.binh_luan
    files_temp.value = kh.files.map(file => ({id: file.id,ten: file.ten}))
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

function addBinhLuan(){
    axios({
        method: 'post',
        url: route('binhluan.store'),
        data: {
            noi_dung: $('#comment').val(),
            de_xuat_id: de_xuat_selected.id
        }
    }).then((data) => {
        $('#comment').val('')
        de_xuat_selected.binh_luan.push({
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
        de_xuat_selected.trang_thai = data.data.trang_thai
        if(data.data.trang_thai === 1)
        toastr.success('Duyệt đề xuất thành công')
        else
        toastr.success('Hủy duyệt đề xuất thành công')
    }).catch((error) => {
        console.log(error)
    })
}

const submit = () => {
    de_xuat_selected.post(route('dexuat.store'), {
        onSuccess: () => {
            toastr.success('Lưu đề xuất thành công')
        },
        onError: () => {
            toastr.error('Lưu đề xuất thất bại')
            console.log(de_xuat_selected.errors)
        }
    })
}

const deleteFile = (id) => {
    if(confirm('Bạn có chắc chắn muốn xóa file này không?')) {
        de_xuat_selected.files = de_xuat_selected.files.filter(file => file.id != id)
        files_temp.value = files_temp.value.filter(file => file.id != id)
        allData.value.data.find(dx => dx.id === de_xuat_selected.id).files = de_xuat_selected.files
        axios({
            method: 'delete',
            url: route('duan.file.delete', {id: id}),
        })
    }
}

function updateFileList(event) {
    de_xuat_selected.files = event.target.files
    files_temp.value = [...files_temp.value, ...Array.from(event.target.files).map(file => ({ten: file.name}))]
}

function editNguoiTheoDoi(){
    de_xuat.value = {
        id: de_xuat_selected.id,
        ten: de_xuat_selected.ten,
        noi_dung: de_xuat_selected.noi_dung,
        nguoi_duyet: de_xuat_selected.nguoi_duyet,
        nguoi_theo_doi: [],
        file: [],
    }
    $('#dexuatmodal').modal('show');
}

function xoaNguoiTheoDoi(id){
    de_xuat_selected.nguoi_theo_doi = de_xuat_selected.nguoi_theo_doi.filter(ntd => ntd.id != id)
    axios({
        method: 'post',
        url: route('dexuat.xoatheodoi', {id: id}),
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
                                <input v-if="dx.nguoi_duyet.id === page.props.user.id" :id="dx.id" @change.prevent="duyet" type="checkbox" :checked="dx.trang_thai == 1">
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
                    <div class="col-md-7 p-3">
                        <template v-if="de_xuat_selected.id">
                            <form @submit.prevent="submit">
                                <input class="w-100 font-weight-bold border-0 text-[20px] active:outline-0 p-0 pb-2" v-model="de_xuat_selected.ten">
                                <p class="text-secondary">Trạng thái:
                                    <span v-if="de_xuat_selected.trang_thai === String(0)" class="text-danger ml-1">Chưa duyệt</span>
                                    <span v-else class="text-success ml-1">Đã duyệt</span>
                                </p>

                                <h5 class="mb-0 mt-3">Thông tin đề xuất</h5>
                                <hr class="mt-2 mb-3">
                                <div class="text-secondary">
                                    <p class="text-md">
                                        <i class="fa fa-user me-2"></i>
                                        Người tạo:
                                        <span class="font-weight-bold text-black ms-2 text-md">{{ de_xuat_selected.created_by.name }}</span>
                                    </p>
                                    <p class="text-md mb-2">
                                        <i class="fa fa-clock me-2"></i>
                                        Ngày tạo:
                                        <span class="ms-2 text-md text-black">{{ formatDate(de_xuat_selected.created_at) }}</span>
                                    </p>
                                    <div class="d-flex">
                                        <span class="text-md me-1 mt-2">
                                            <i class="fa fa-file flex-1 me-2"></i>
                                            Nội dung:
                                        </span>
                                        <textarea rows="5" v-model="de_xuat_selected.noi_dung" class="text-md text-black form-control w-75 border-0"></textarea>
                                    </div>
                                </div>

                            <h5 class="mb-0 mt-3">File đính kèm</h5>
                            <hr class="mt-2 mb-3">
                            <div class="mt-3">
                                <div class="d-flex align-items-center mb-2">
                                    <label for="mo_ta" class="font-weight-bold text-success mt-2 ">Attachments:</label>
                                    <label for="files2" class="btn btn-success btn-sm mt-2 ml-3">Chọn file</label>
                                    <input accept=".png, .jpg, .jpeg, .gif, .bmp, .doc, .docx, .xls, .xlsx, .pdf"
                                           type="file"
                                           @input="updateFileList($event)"
                                           id="files2"
                                           class="d-none"
                                           multiple/>
                                    <span id="fileList" class="d-inline-block ml-3"></span>
                                </div>
                                <template v-if="files_temp.length > 0">
                                    <div class="row">
                                        <div class="col-md-5">
                                            <div class="card">
                                                <div class="card-body p-0">
                                                    <table class="table table-striped">
                                                        <thead>
                                                        <tr>
                                                            <th>File</th>
                                                            <th>Actions</th>
                                                        </tr>
                                                        </thead>
                                                        <tbody>
                                                        <tr v-for="file in files_temp" :key="file.id">
                                                            <td>{{ file.ten?.length > 30 ? file.ten.slice(0,30) + '...' : file.ten }}</td>
                                                            <td class="d-flex gap-[5px] justify-content-center" >
                                                                <a v-if="file.id" :href="`/uploads/de_xuat/${file.ten}`" target="_blank" class="btn btn-primary btn-sm">View</a>
                                                                <a v-if="file.id" @click.prevent="deleteFile(file.id)" class="btn btn-sm btn-danger">Delete</a>
                                                            </td>
                                                        </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </template>
                                <button :disabled="de_xuat_selected.processing" type="submit" class="btn btn-primary right-0" >Lưu</button>
                            </div>
                            </form>

                            <h5 class="mb-0 mt-3">Bình luận</h5>
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
                    <div class="col-md-2 pt-3 pr-4">
                        <template v-if="de_xuat_selected.id">
                            <div class="card p-3 elevation-2">
                                <div class="d-flex justify-content-between align-items-center">
                                    <h5 class="font-weight-bold mb-0">Người duyệt</h5>
                                    <button @click.prevent="editNguoiTheoDoi()" class="fa fa-edit text-secondary"></button>
                                </div>

                                <hr class="mt-1 mb-2">
                                <div class="d-flex align-items-center gap-[10px] my-1">
                                    <img v-if="de_xuat_selected.nguoi_duyet?.hinh_anh" :src="'/uploads/nhan_vien/' + de_xuat_selected.nguoi_duyet.hinh_anh" alt="avatar" class="rounded-full w-10 h-10 object-cover elevation-2">
                                    <img v-else src="/uploads/avatardefault.png" alt="avatar" class="rounded-full w-10 h-10 object-cover">
                                    <span class="font-weight-bold">{{ de_xuat_selected.nguoi_duyet?.name }}</span>
                                </div>
                            </div>
                            <div class="card p-3 elevation-2">
                                <div class="d-flex justify-content-between align-items-center">
                                    <h5 class="font-weight-bold mb-0">Người theo dõi</h5>
                                    <button @click.prevent="editNguoiTheoDoi()" class="fa fa-edit text-secondary"></button>
                                </div>

                                <hr class="mt-1 mb-2">
                                <div v-for="ntd in de_xuat_selected.nguoi_theo_doi" class="d-flex align-items-center justify-content-between my-1">
                                    <div :key="ntd.id" class="d-flex align-items-center gap-[10px]">
                                        <img v-if="ntd.user?.hinh_anh" :src="'/uploads/nhan_vien/' + ntd.user.hinh_anh" alt="avatar" class="rounded-full w-10 h-10 object-cover elevation-2">
                                        <img v-else src="/uploads/avatardefault.png" alt="avatar" class="rounded-full w-10 h-10 object-cover">
                                        <span class="font-weight-bold">{{ ntd.user?.name }}</span>
                                    </div>
                                    <button @click.prevent="xoaNguoiTheoDoi(ntd.id)" class="fa fa-trash text-secondary"></button>
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
*:focus {
    -webkit-box-shadow: none;
}
</style>
