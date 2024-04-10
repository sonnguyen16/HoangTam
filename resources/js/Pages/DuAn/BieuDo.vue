<script setup>
import Gantt from "frappe-gantt";
import DuAnModal from "@/Pages/DuAn/DuAnModal.vue";
import ChiTiet from "@/Pages/DuAn/ChiTiet.vue";
import MainLayout from "@/Layouts/MainLayout.vue";
import TreeItem1 from "@/Components/app/TreeItem1.vue";
import {computed, onMounted, onUpdated, ref} from "vue";
import TreeFileItem from "@/Components/app/TreeFileItem.vue";

const props = defineProps({
    du_an: Object,
    du_an_id: String,
    nhan_vien_list: Object,
})

const du_an = computed(() => {
    function search(children) {
        for (let i = 0; i < children.length; i++) {
            const item = children[i];
            if (String(item.id) === props.du_an_id) {
                return item;
            }
            if (item.children) {
                let found = search(item.children);
                if (found) {
                    return found;
                }
            }
        }
        return null;
    }

    return search(props.du_an);
});

const tab = ref("chart");

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
                progress: item.tien_do,
                custom_class: item.tien_do === 0 ? 'warning' : item.tien_do > 0 ? 'primary' : 'success',
                user: item.nhan_vien
            }, ...subTasks];
        });
    }
    // Gọi hàm đệ quy cho mảng ban đầu
    return mapChildren(du_an.value.children);
})

function drawgantt(){
    new Gantt(".gantt-target", tasks.value, {
        on_click: (task) => {
            console.log(task)
        },
        view_mode: "Day",
        language: "en",
        header_height: 43,
        padding: 13,
        column_width: 10,
        bar_height: 24,
        step: 10,
        arrow_curve: 2,
    })

    let bar_group = document.getElementsByClassName("bar-group");
    for(let i = 0; i < bar_group.length; i++){
        let x = parseInt(bar_group[i].querySelector('text').getAttribute('x'))
            + parseInt(bar_group[i].querySelector('rect').getAttribute('width'))/2
        let y = parseInt(bar_group[i].querySelector('text').getAttribute('y'))
        let div_user = `
        <svg x="${x + 4}" y="${y - 17}" width="35" height="35">
          <defs>
            <clipPath id="myCircle">
              <circle cx="17.5" cy="17.5" r="13"/>
            </clipPath>
          </defs>
          <image
            width="35"
            height="35"
            xlink:href="/uploads/nhan_vien/${tasks.value[i].user.hinh_anh}"
            clip-path="url(#myCircle)"
          />
        </svg>
         <text x=${x + 45} y=${y}  class="bar-label big">${tasks.value[i].user.name}</text>
        `
        bar_group[i].innerHTML += div_user
    }
}

onMounted(() => {
    if(du_an.value.children.length > 0)
        drawgantt()
})


onUpdated(() => {
    if(du_an.value.children.length > 0)
        drawgantt()
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
    tien_do: 0,
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
        tien_do: 0,
        parent_id: id,
        children: [],
        files: [],
        binh_luan: []
    }
    $('#duanmodal').modal('show');
}

function editModal(kh) {
    get(kh)
    $('#chitietdamodal').modal('show');
}

function get(kh){
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
        binh_luan: kh.binh_luan
    }
}

function reload(){
    function search(children){
        children.forEach((item, index) => {
            if (item.id === hang_muc1.value.id) {
                get(item)
            }
            if (item.children) {
                let found = search(item.children);
                if (found) {
                    get(found)
                }
            }
        })
    }

   search(du_an.value.children);
}

</script>

<template>
    <MainLayout>
        <div class="card card-child" style="">
            <div class="card-body p-0">
                <div class="">
                    <div class="">
                        <h4 class="txt-color mx-3 mt-3 font-weight-bold">{{ du_an.ten }}</h4>
                    </div>
                    <ul class="nav nav-tabs" id="custom-tabs-three-tab" role="tablist">
                        <li class="nav-item">
                            <a @click.prevent="tab = 'chart'" class="nav-link active" id="custom-tabs-three-home-tab" data-toggle="pill" href="#custom-tabs-three-home" role="tab" aria-controls="custom-tabs-three-home" aria-selected="true">Chi tiết</a>
                        </li>
                        <li class="nav-item">
                            <a @click.prevent="tab = 'files'" class="nav-link" id="custom-tabs-three-profile-tab" data-toggle="pill" href="#custom-tabs-three-profile" role="tab" aria-controls="custom-tabs-three-profile" aria-selected="false">Files</a>
                        </li>
                    </ul>
                    <div class="row" v-show="tab === 'chart'">
                        <div class="col-md-4 pr-0">
                            <table class="table border-bottom">
                                <thead>
                                <tr class="h-[51px]">
                                    <th >
                                        <a class="cursor-pointer text-blue-300 d-flex align-items-center gap-[5px] ps-3"
                                           @click.prevent="openModal(du_an.id)">
                                            <div class="text-white bg-blue-300 text-center rounded-full w-[20px] h-[20px]">
                                                <i class="fa fa-plus text-[10px]"></i>
                                            </div>
                                            Thêm hạng mục
                                        </a>
                                    </th>
                                    <th class="text-neutral-400">Bắt đầu</th>
                                    <th class="text-neutral-400">Kết thúc</th>
                                    <th class="text-neutral-400">Tiến độ</th>
                                    <th></th>
                                    <th></th>
                                </tr>
                                </thead>
                                <tbody>
                                <TreeItem1
                                    v-for="(item, index) in du_an.children"
                                    :key="item.id"
                                    :item="item"
                                    @edit="editModal"
                                    @add="openModal"
                                />
                                </tbody>
                            </table>
                        </div>
                        <div class="col-md-8 pl-0">
                            <div class="gantt-target border"></div>
                        </div>
                    </div>
                    <div class="px-[25px] py-[10px]" v-show="tab === 'files'">
                        <div class="row font-weight-bold mb-3">
                            <div class="col-lg-2 pl-0">
                                Tên hạng mục
                            </div>
                            <div class="col-lg-1">
                                Ngày bắt đầu
                            </div>
                            <div class="col-lg-1">
                                Ngày kết thúc
                            </div>
                            <div class="col-lg-1">
                                Trạng thái
                            </div>
                            <div class="col-lg-1">
                                Người phụ trách
                            </div>
                            <div class="col-lg-2">
                                Files
                            </div>

                        </div>
                        <TreeFileItem
                            class=""
                            v-for="item in du_an.children"
                            :key="item.id"
                            :item="item"
                        />
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

.gantt .bar{
    fill: #ffc107;
}

.row{
    margin-right: 0;
}

.today-highlight{
    fill: #007bff !important;
    opacity: 0.3 !important;
}

th{
    text-align: start;
}

/* width */
::-webkit-scrollbar {
    width: 10px;
}

/* Track */
::-webkit-scrollbar-track {
    background: #f1f1f1;
}

/* Handle */
::-webkit-scrollbar-thumb {
    background: #abd0f8;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
    background: #555;
}

</style>
