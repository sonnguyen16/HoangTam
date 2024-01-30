<script setup>
import {defineProps, onMounted, computed} from "vue";
import '@/assets/admin/plugins/fontawesome-free/css/all.min.css'
import '@/assets/admin/dist/css/adminlte.min.css'
import '@/assets/css/style.css'
import {numberToWords} from "@/assets/js/script.js";
import {usePage} from "@inertiajs/vue3";
import moment from "moment";

const data = defineProps({
    hoa_don: Object,
})

onMounted(() => {
    window.print();
    console.log(data.hoa_don)
})

const { props } = usePage();

const don_vi = computed(() => {
    return props.don_vi;
});

const user = computed(() => {
    return props.user;
});

function formatDateForTemplate(date) {
    return `Ngày ${date.getDate()} tháng ${date.getMonth() + 1} năm ${date.getFullYear()}`
}

</script>

<template>
    <div class="bg-light-blue h-[100vh]">
        <div class="container bg-white h-[100vh]" style="font-size: 15px">
            <div class="row">
                <div class="col-12 mx-auto"> <!--  my-5 p-3-->
                    <div class="d-flex align-items-center gap-[20px]">
                       <!--<img :src="/uploads/ + don_vi.logo" class="w-[200px]" alt="logo" />--> 
                        <div class="text-start">
                            <h3 class="font-weight-bold mb-0" style="text-transform: uppercase;">{{ don_vi?.ten }}</h3>
                            <p class=" font-in" style="margin-bottom:0px">Địa chỉ: {{ don_vi?.dia_chi }}</p>
                            <p class=" font-in" style="margin-bottom:0px">Điện thoại: {{ don_vi?.dien_thoai }}</p>
                            <p class="font-in" style="margin-bottom:0px" v-if="don_vi?.email">Email: {{ don_vi?.email }} </p>
                            <p class="font-in" style="margin-bottom:0px" v-if="don_vi?.stk_1">STK: {{ don_vi?.stk_1 }} </p>
                        </div>
                    </div>

                    <div class="text-center mt-3">
                        <h1 class="font-weight-bold" v-if="hoa_don.data.loai === 0">PHIẾU NHẬP KHO</h1>
                        <h1 class="font-weight-bold" v-if="hoa_don.data.loai === 1">PHIẾU BÁN HÀNG</h1>
                        <p class="text-md font-italic">Ngày {{ moment(hoa_don.data.ngay).format("DD") }} tháng {{ moment(hoa_don.data.ngay).format("MM") }} năm {{ moment(hoa_don.data.ngay).format("YYYY") }}</p>
                    </div>
                    <div class=""> <!--px-4 mt-4-->
                        <div class="row">
                            <div class="col-12">
                                <table>
                                    <tr>
                                    <td v-if="hoa_don.data.loai === 1" class="text-md font-in">
                                        <b>Khách hàng:</b>
                                     </td>
                                    <td v-if="hoa_don.data.loai === 0" class="text-md font-in">
                                        <b>Nhà cung cấp:</b>
                                    </td>
                                    <td width="70% " class="font-in">
                                        <span v-if="hoa_don.data.loai === 1"
                                      class="text-md font-in">
                                        {{ hoa_don.data.khach_hang?.ten }}
                                        </span>
                                        <span v-if="hoa_don.data.loai === 0"
                                            class="text-md font-in">
                                            {{ hoa_don.data.nha_cung_cap?.ten }}
                                        </span>
                                    </td>
                                    <td class="text-md font-in"><b>Số Phiếu:</b></td>
                                    <td>{{ hoa_don.data.ma }}</td>
                                    </tr>
                                    <tr>
                                    <td class="text-md font-in">
                                        <b>Địa chỉ:</b>
                                    </td>
                                    <td>
                                        <span v-if="hoa_don.data.loai === 1"
                                      class="text-md font-in">
                                        {{ hoa_don.data.khach_hang?.dia_chi }}
                                        </span>
                                        <span v-if="hoa_don.data.loai === 0"
                                            class="text-md font-in">
                                            {{ hoa_don.data.nha_cung_cap?.dia_chi }}
                                        </span>
                                    </td>
                                    <td class="text-md font-in"><b>Điện thoại:</b></td>
                                    <td>
                                        <span v-if="hoa_don.data.loai === 1"
                                       class="text-md font-in">
                                    {{ hoa_don.data.khach_hang?.dien_thoai }}
                                </span>
                                <span v-if="hoa_don.data.loai === 0"
                                      class="text-md font-in" >
                                    {{ hoa_don.data.nha_cung_cap?.dien_thoai }}
                                </span>
                                    </td>
                                    </tr>
                                </table>
                            </div>
                        </div>
                        <table class="table table-bordered"> <!-- table-bordered  table-responsive-md-->
                            <thead>
                            <tr>
                                <!--<th style="width: 60px!important;" class="font-in" >STT</th> -->
                                <th class="font-in">Tên sản phẩm</th>
                                <th width="100" class="font-in">Số lượng</th>
                                <th width="80" class="font-in">ĐVT</th>
                                <th width="120" class="font-in">Đơn giá</th>
                                <th width="120" class="font-in">Thành tiền</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr v-if="hoa_don.data.chi_tiet_hoa_don.length === 0">
                                <td colspan="6" class="text-center font-in">Không có dữ liệu</td>
                            </tr>

                            <tr :key="cthd.id" v-else v-for="(cthd, index) in hoa_don.data.chi_tiet_hoa_don">
                               <!-- <td class="ma font-in">{{ index + 1 }}</td> -->
                                <td class="ten font-in">{{ index + 1 }}. {{ cthd?.san_pham?.ten }}</td>
                                <td class="quantity font-in" >{{ cthd?.so_luong }}</td>
                                <td class="quantity font-in" >{{ cthd?.san_pham?.don_vi_tinh?.ten }}</td>
                                <td class="money font-in" >{{ cthd?.gia.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") }}</td>
                                <td class="money font-in" >{{ cthd?.thanh_tien.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") }}</td>
                            </tr>
                            <tr>
                                <td colspan="4"  class="text-md font-in">
                                     <b>Tổng tiền</b>
                                </td>
                                <td class="money text-md font-in">
                                    <b> {{ hoa_don.data.tong_tien.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") }}</b>
                                </td>
                            </tr>
                            </tbody>
                        </table>

                        <div class="row">
                            <div class="col-12 font-in">
                                <b  class="font-in">Bằng chữ:</b><i>{{ numberToWords(hoa_don.data.tong_tien) }} đồng</i>
                            </div>
                        </div>

                        <!-- <div class="float-right">
                            <p class="text-md font-italic">{{ formatDateForTemplate(new Date()) }}</p>
                        </div> -->

                        <div class="d-flex justify-content-between w-100 mt-2"> <!--mt-5 -->
                            <div class="space-y-[60px] text-center">
                                <p class="font-weight-bold text-md font-in">Người giao hàng</p>
                                <p  class="font-in">(Ký, họ tên)</p>
                            </div>
                            <div class="space-y-[60px] text-center font-in">
                                <p class="font-weight-bold text-md">Người nhận hàng</p>
                                <p  class="font-in">(Ký, họ tên)</p>
                            </div>
                            <div class="space-y-[60px] text-center font-in">
                                <p class="font-weight-bold text-md font-in">Người lập phiếu</p>
                                <p class="font-in">(Ký, họ tên)</p>
                            </div>
                        </div>


                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<style scoped>
.bg-light-blue {
    background: rgba(227, 242, 253, 1);
}
.table-bordered td, .table-bordered th {
    border: 1px solid black!important;
}
.font-in {
    font-size: 14px;;
}
</style>
