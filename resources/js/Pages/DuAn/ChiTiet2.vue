<script setup>
import {onMounted, ref, watchEffect} from "vue";
import {router, useForm, usePage} from "@inertiajs/vue3";
import InputError from "@/Components/InputError.vue";
import TreeItem from "@/Components/app/TreeItem.vue";

const page = usePage()

const props = defineProps({
    du_an: Object,
    users: Object,
})

const files_temp = ref([])


const form = useForm({
    id: "",
    ten: "",
    ngay_bat_dau: "",
    ngay_ket_thuc: "",
    user_id: "",
    mo_ta: "",
    trang_thai: "",
    parent_id: "",
    children: [],
    files: [],
    binh_luan: []
})

watchEffect(() => {
    form.id = props.du_an.id
    form.ten = props.du_an.ten
    form.ngay_bat_dau = props.du_an.ngay_bat_dau
    form.ngay_ket_thuc = props.du_an.ngay_ket_thuc
    form.user_id = props.du_an.user_id
    $('#user').val(props.du_an.user_id).trigger('change');
    form.mo_ta = props.du_an.mo_ta
    form.trang_thai = props.du_an.trang_thai
    form.parent_id = props.du_an.parent_id
    form.children = props.du_an.children
    form.files = props.du_an.files
    files_temp.value = props.du_an.files
    form.binh_luan = props.du_an.binh_luan
})
const submit = () => {
    form.post(route('duan.store'), {
        onSuccess: () => {
            toastr.success('Cập nhật thành công')
        },
        onError: (error) => {
            console.log(error)
            toastr.error('Có lỗi xảy ra, vui lòng thử lại')
        }
    })
}

const deleteFile = (id) => {
    if(confirm('Bạn có chắc chắn muốn xóa file này không?')) {
        form.files = form.files.filter(file => file.id !== id)
        files_temp.value = files_temp.value.filter(file => file.id !== id)
        axios({
            method: 'delete',
            url: route('duan.file.delete', {id: id}),
        })
    }
}

function updateFileList(event) {
    form.files = event.target.files
    files_temp.value = [...files_temp.value, ...Array.from(event.target.files).map(file => ({ten: file.name}))]
}
function addBinhLuan(){
    axios({
        method: 'post',
        url: route('binhluan.store'),
        data: {
            noi_dung: $('#comment').val(),
            du_an_id: props.du_an.id
        }
    }).then((data) => {
        $('#comment').val('')
        props.du_an.binh_luan.push({
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
    <form v-if="form.id" >
            <input type="hidden" v-model="form.id" id="id" class="form-control"/>
            <input type="text" class="font-weight-bold border-0 text-lg pl-0 pb-0" v-model="form.ten">
            <div class="d-flex align-items-center">
                <label for="ngay_bat_dau" class="font-weight-bold text-secondary mt-2">Bắt đầu:</label>
                <input type="date" v-model="form.ngay_bat_dau" id="ngay_bat_dau" class="border-0 mr-3 text-secondary"/>
                <label for="ngay_ket_thuc" class="font-weight-bold text-secondary mt-2">Kết thúc:</label>
                <input type="date" v-model="form.ngay_ket_thuc" id="ngay_ket_thuc" class="border-0 mr-3 text-secondary"/>
                <label class="font-weight-bold text-secondary mt-2">Tình trạng</label>
                <select v-model="form.trang_thai" class="border-0 active:outline-0 outline-0 focus:outline-0 mr-3 font-bold" id="trang_thai">
                    <option value="0">Chưa thực hiện</option>
                    <option value="1">Đang thực hiện</option>
                    <option value="2">Đã hoàn thành</option>
                </select>
                <label for="user" class="font-weight-bold text-secondary mt-2">Người thực hiện:</label>
                <select v-model="form.user_id" class="border-0 outline-0 font-bold focus:outline-0" id="user">
                    <option v-for="user in users" :value="user.id">{{ user.name }}</option>
                </select>
            </div>
            <div class="mt-1">
                <label for="mo_ta" class="font-weight-bold text-success ">Mô tả hạng mục:</label>
                <textarea v-model="form.mo_ta" id="mo_ta" class="form-control border-0 pl-0" rows="3"></textarea>
            </div>
            <div class="mt-3">
                <div class="d-flex align-items-center mb-2">
                    <label for="mo_ta" class="font-weight-bold text-success mt-2 ">Attachments:</label>
<!--                    <label for="files1" class="btn btn-success btn-sm mt-2 ml-3">Chọn file</label>-->
<!--                    <input accept=".png, .jpg, .jpeg, .gif, .bmp, .doc, .docx, .xls, .xlsx, .pdf"-->
<!--                           type="file"-->
<!--                           @input="updateFileList($event)"-->
<!--                           id="files1"-->
<!--                           class="d-none"-->
<!--                           multiple/>-->
                    <span id="fileList" class="d-inline-block ml-3"></span>
                </div>
                <template v-if="files_temp.length > 0">
                    <div class="row">
                        <div class="col-md-4">
                            <div class="card">
                                <div class="card-body p-0">
                                    <table class="table table-striped">
                                        <thead>
                                        <tr>
                                            <th>File</th>
<!--                                            <th>Actions</th>-->
                                        </tr>
                                        </thead>
                                        <tbody>
                                        <tr v-for="file in files_temp" :key="file.id">
                                            <td colspan="2">
                                                <a v-if="file.id" :href="`/uploads/du_an/${file.ten}`" target="_blank" class="">
                                                  {{ file.ten.length > 40 ? file.ten.slice(0,40) + '...' : file.ten }}
                                                </a>
                                            </td>
<!--                                            <td class="d-flex gap-[5px] justify-content-center">-->
<!--                                                <a v-if="file.id" @click.prevent="deleteFile(file.id)" class="btn btn-sm btn-danger">-->
<!--                                                    <i class="fa fa-trash"></i>-->
<!--                                                </a>-->
<!--                                            </td>-->
                                        </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </template>
<!--                <button type="submit" :disabled="form.processing" class="btn btn-primary right-0" >Lưu</button>-->
                <hr>
                <div class="" id="subtasks">
                    <label for="mo_ta" class="font-weight-bold text-success ">Hạng mục con:</label>
                    <a class="btn btn-primary btn-sm ml-3 font-weight-bold" :href="route('duan.detail',{id: form.id})">Xem chi tiết</a>
                </div>
                <hr>
                <div id="comments" class="">
                    <p class="font-weight-bold">Bình luận ({{ props.du_an.binh_luan.length }})</p>
                    <div class="card">
                        <div class="card-body">
                            <div :class="['d-flex', {'mb-4': props.du_an.binh_luan.length > 0}]">
                                <img v-if="page.props.user.hinh_anh" :src="'/uploads/nhan_vien/' + page.props.user.hinh_anh" alt="avatar" class="rounded-full w-10 h-10 object-cover">
                                <img v-else src="/uploads/avatardefault.png" alt="avatar" class="rounded-full w-10  object-cover">
                                <form @submit.prevent="addBinhLuan()" class="flex-1 d-flex">
                                    <input type="hidden" :value="props.du_an.id">
                                    <input id="comment" class="form-control border-0 flex-1" placeholder="Nhập bình luận">
                                    <button type="submit" class="">
                                        <i class="fa fa-paper-plane text-lg text-primary"></i>
                                    </button>
                                </form>
                            </div>

                            <div style="max-height: 200px; overflow: auto">
                                <div v-for="cm in props.du_an.binh_luan" class="">
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
                </div>
            </div>
    </form>
</template>

<style scoped>
InputError{
    margin-left: 130px;
}

*:focus {
    -webkit-box-shadow: none;
}
</style>
