<script setup>

import {formatDate} from "@/assets/js/script.js";
import {ref, watchEffect} from "vue";
import {useForm, usePage} from "@inertiajs/vue3";

const props = defineProps({
    de_xuat_selected: Object,
})

const page = usePage()
let files_temp = ref([])

let de_xuat_selected = useForm({
    id: "",
    ten: "",
    noi_dung: "",
    created_at: "",
    trang_thai: 0,
    created_by: {},
    files: [],
    binh_luan: []
})

watchEffect(() => {
    de_xuat_selected.id = props.de_xuat_selected.id
    de_xuat_selected.ten = props.de_xuat_selected.ten
    de_xuat_selected.noi_dung = props.de_xuat_selected.noi_dung
    de_xuat_selected.files = props.de_xuat_selected.files
    de_xuat_selected.created_at = props.de_xuat_selected.created_at
    de_xuat_selected.created_by = props.de_xuat_selected.created_by
    de_xuat_selected.binh_luan = props.de_xuat_selected.binh_luan
    de_xuat_selected.trang_thai = props.de_xuat_selected.trang_thai
    files_temp.value = props.de_xuat_selected.files.map(file => ({id: file.id,ten: file.ten, ten_goc: file.ten_goc}))
})

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
</script>

<template>
    <template v-if="de_xuat_selected.id">
        <form @submit.prevent="submit">
            <input class="w-100 font-weight-bold border-0 text-[20px] active:outline-0 p-0" v-model="de_xuat_selected.ten">
            <div class="d-flex align-items-center">
                <p class="text-secondary mb-0">Trạng thái:
                </p>
                <select :disabled="props.de_xuat_selected.nguoi_duyet.id != page.props.user.id" v-model="de_xuat_selected.trang_thai" class="form-control w-25 border-0">
                    <option value="0">Chưa duyệt</option>
                    <option value="1">Đã duyệt</option>
                </select>
            </div>

            <h5 class="mb-0 mt-2">Thông tin đề xuất</h5>
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
                                            <td style="width: 90%">
                                                <a v-if="file.id" :href="`/uploads/du_an/${file.ten}`" target="_blank" class="">
                                                    <i v-if="file.ten.split('.')[file.ten.split('.').length - 1] === 'png' || file.ten.split('.')[file.ten.split('.').length - 1] === 'jpg'"
                                                       class="fa fa-image">
                                                    </i>
                                                    <i v-if="file.ten.split('.')[file.ten.split('.').length - 1] === 'pdf' || file.ten.split('.')[file.ten.split('.').length - 1] === 'docx'"
                                                       class="fa fa-file-pdf">
                                                    </i>
                                                    <i v-if="file.ten.split('.')[file.ten.split('.').length - 1] === 'xlsx' "
                                                       class="fa fa-file-excel">
                                                    </i>
                                                    {{ file.ten_goc?.length > 30 ? file.ten_goc.slice(0,30) + '...' : file.ten_goc }}
                                                </a>
                                                <span v-else >{{ file.ten }}</span>
                                            </td>
                                            <td style="width: 10%" class="text-center">
                                                <a v-if="file.id" @click.prevent="deleteFile(file.id)" class="btn btn-sm btn-danger">
                                                    <i class="fa fa-trash"></i>
                                                </a>
                                            </td>
                                        </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </template>
                <button :disabled="de_xuat_selected.processing" type="submit" class="btn btn-primary font-weight-bold right-0" >Lưu</button>
            </div>
        </form>
        <h5 class="mb-0 mt-3">Bình luận ({{de_xuat_selected.binh_luan.length}})</h5>
        <hr class="mt-2 mb-3">
        <div class="card elevation-2" >
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

                <div style="max-height: 150px; overflow: auto">
                    <div  v-for="cm in de_xuat_selected.binh_luan" class="">
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
        </div>
    </template>
</template>

<style scoped>
*:focus {
    -webkit-box-shadow: none;
}

select:disabled {
    background-color: white;
    cursor: not-allowed;
}
</style>
