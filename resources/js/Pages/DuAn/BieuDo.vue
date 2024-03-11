<script setup>
import Gantt from "frappe-gantt";
import DuAnModal from "@/Pages/DuAn/DuAnModal.vue";
import ChiTiet from "@/Pages/DuAn/ChiTiet.vue";
import MainLayout from "@/Layouts/MainLayout.vue";
import TreeItem1 from "@/Components/app/TreeItem1.vue";
import {computed, onMounted, onUpdated, ref} from "vue";

const props = defineProps({
    du_an: Object,
    du_an_id: String,
    nhan_vien_list: Object,
})

const du_an = computed(() => {
    return props.du_an.find(item => String(item.id) === props.du_an_id)
})

const tasks = computed(() => {
    // Định nghĩa một hàm đệ quy để duyệt qua các mục con
    function mapChildren(children) {
        return children.flatMap(item => {
            // Nếu mục có children, thực hiện đệ quy
            const subTasks = item.children ? mapChildren(item.children) : [];
            // Trả về một mảng gồm mục hiện tại và các mục con (nếu có)
            return [{
                id: item.id,
                name: item.ten,
                start: item.ngay_bat_dau,
                end: item.ngay_ket_thuc,
                progress: 0,
                dependencies: item.parent_id? [item.parent_id] : null,
                custom_class: item.trang_thai === 0 ? 'warning' : item.trang_thai === 1 ? 'primary' : 'success'
            }, ...subTasks];
        });
    }
    // Gọi hàm đệ quy cho mảng ban đầu và sau đó sắp xếp theo ID tăng dần
    return mapChildren(du_an.value.children);
})


onMounted(() => {
    const gantt = new Gantt(".gantt-target", tasks.value, {
        on_click: (task) => {
            console.log(task)
        },
        view_mode: "Day",
        language: "en",
        header_height: 45,
        padding: 13,
    })
})

onUpdated(() => {
    const gantt = new Gantt(".gantt-target", tasks.value, {
        on_click: (task) => {
            console.log(task)
        },
        view_mode: "Day",
        language: "en",
        header_height: 45,
        padding: 13,
   })
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
    binh_luan: []
})

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
        files: [],
        binh_luan: []
    }
    $('#duanmodal').modal('show');
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
        binh_luan: kh.binh_luan
    }
    $('#chitietdamodal').modal('show');
}

function reload(){
    function search(children){
        children.forEach((item, index) => {
            if (item.id === hang_muc1.value.id) {
                editModal(item)
            }
            if (item.children) {
                let found = search(item.children);
                if (found) {
                    editModal(found)
                }
            }
        })
    }

   search(du_an.value.children);
}

</script>

<template>
    <MainLayout>
        <div class="card shadow">
            <div class="card-body card-brc">
                <p class="txt-color mb-0 font-weight-bold">Danh mục quản lý
                    <i class="fa fa-angle-right mr-2 ml-2"></i> Quản lý dự án
                    <i class="fa fa-angle-right mr-2 ml-2"></i> Chi tiết dự án
                </p>
            </div>
        </div>

        <div class="card shadow card-child" style="">
            <div class="card-body">
                <div class="">
                    <div class="">
                        <h4 class="txt-color mb-2 font-weight-bold">{{  du_an.ten }}</h4>
                    </div>
                    <div class="mt-2">
                        <ul class="nav nav-tabs" role="tablist">
                            <li class="nav-item" >
                                <a class="nav-link " data-toggle="pill" role="tab" aria-current="page" href="#tongquan">Tổng quan</a>
                            </li>
                            <li class="nav-item " data-toggle="pill" role="tab">
                                <a class="nav-link active" data-toggle="pill" role="tab" href="#chitiet">Chi tiết</a>
                            </li>
                        </ul>
                        <div class="tab-content">
                            <div class="tab-pane fade space-y-3" id="tongquan" role="tabpanel" aria-labelledby="custom-tabs-one-home-tab">
                                <div class="row mt-3 text-md">
                                    <div class="col-md-2 col-6">
                                        <span class="font-bold ">Ngày bắt đầu</span>
                                    </div>
                                    <div class="col-md-10 col-6">
                                        <span>{{ new Date( du_an.ngay_bat_dau).toLocaleDateString() }}</span>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-md-2 col-6">
                                        <span class="font-bold ">Ngày kết thúc</span>
                                    </div>
                                    <div class="col-md-10 col-6">
                                        <span>{{ new Date( du_an.ngay_ket_thuc).toLocaleDateString() }}</span>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-md-2 col-6 font-bold">
                                                <span>
                                                    Trạng thái
                                                </span>
                                    </div>
                                    <div class="col-md-10 col-6">
                                        <span v-if=" du_an.trang_thai === 0" class="badge badge-warning">Chưa thực hiện</span>
                                        <span v-else-if=" du_an.trang_thai === 1" class="badge badge-primary">Đang thực hiện</span>
                                        <span v-else-if=" du_an.trang_thai === 2" class="badge badge-success">Đã hoàn thành</span>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-md-2 col-6 font-bold">
                                                <span>
                                                    Người nhận
                                                </span>
                                    </div>
                                    <div class="col-md-10 col-6">
                                        <span>{{  du_an.nhan_vien?.name }}</span>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-md-2 col-6 font-bold">
                                                <span>
                                                    Mô tả
                                                </span>
                                    </div>
                                    <div class="col-md-10 col-6">
                                        <span>{{  du_an.mo_ta }}</span>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-md-2 col-6 font-bold">
                                                <span>
                                                    Tệp đính kèm
                                                </span>
                                    </div>
                                    <div class="col-md-10 col-6">
                                        <ul>
                                            <li v-for="file in  du_an.files" :key="file.id">
                                                <a :href="`/uploads/${file.ten}`" target="_blank">{{ file.ten }}</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>

                            </div>
                            <div class="tab-pane fade active show" id="chitiet" role="tabpanel" aria-labelledby="custom-tabs-one-home-tab">
                                <div id="chitiet" class="mt-3">
                                    <div class="mb-1">
                                        <a class="btn btn-primary" @click.prevent="openModal(du_an.id)">Thêm hạng mục</a>
                                    </div>
                                    <div class="p-2 pt-3 pl-3">
                                        <div class="row ">
                                            <div class="col-md-5">
                                                <div style="height: 56px">
                                                    <div class="row h-100 border">
                                                        <div class="col-4 d-flex align-items-center">
                                                            Tên
                                                        </div>
                                                        <div class="col-2 d-flex align-items-center">
                                                            Bắt đầu
                                                        </div>
                                                        <div class="col-2 d-flex align-items-center">
                                                            Kết thúc
                                                        </div>
                                                        <div class="col-2 d-flex align-items-center justify-content-center">
                                                            Người nhận
                                                        </div>
                                                        <div class="col-2 d-flex align-items-center justify-content-center">
                                                            Thao tác
                                                        </div>
                                                    </div>
                                                </div>
                                                <TreeItem1
                                                    class=""
                                                    v-for="(item, index) in du_an.children"
                                                    :key="item.id"
                                                    :item="item"
                                                    @edit="editModal"
                                                    @add="openModal"
                                                />

                                            </div>
                                            <div class="col-md-7">
                                                <div class="gantt-target border"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <ChiTiet
            :du_an="hang_muc1"
            :users="nhan_vien_list"
            @add="openModal"
            @edit="editModal"

        />
        <DuAnModal
            :du_an="hang_muc"
            :users="nhan_vien_list"
            @reload="reload"
        />
    </MainLayout>

</template>

<style>

.gantt .warning .bar{
    fill: #ffc107;
}

.gantt .primary .bar{
    fill: #007bff;
}

.gantt .success .bar{
    fill: #28a745;
}

.today-highlight{
    fill: #007bff !important;
    opacity: 0.3 !important;
}

</style>
