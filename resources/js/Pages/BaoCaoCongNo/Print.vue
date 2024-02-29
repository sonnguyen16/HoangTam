<script setup>
import {defineProps, onMounted, computed} from "vue";
import '@/assets/admin/plugins/fontawesome-free/css/all.min.css'
import '@/assets/admin/dist/css/adminlte.min.css'
import '@/assets/css/style.css'
import {numberToWords} from "@/assets/js/script.js";
import {usePage} from "@inertiajs/vue3";
import moment from "moment";

const data = defineProps({
    ngay_bat_dau: {
        type: String,
        default: ""
    },
    ngay_ket_thuc: {
        type: String,
        default: ""
    },
    ton_dau: {
        type: Number,
        default: 0
    },
    so_tien_nhap_moi: {
        type: Number,
        default: 0
    },
    so_tien_chi_moi: {
        type: Number,
        default: 0
    },
    hdpc: {
        type: Array,
        default: []
    },
})

onMounted(() => {

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
                            <p class=" font-in" style="margin-bottom:0">Địa chỉ: {{ don_vi?.dia_chi }}</p>
                            <p class=" font-in" style="margin-bottom:0">Điện thoại: {{ don_vi?.dien_thoai }}</p>
                            <p class="font-in" style="margin-bottom:0" v-if="don_vi?.email">Email: {{ don_vi?.email }} </p>
                            <p class="font-in" style="margin-bottom:0" v-if="don_vi?.stk_1">STK: {{ don_vi?.stk_1 }} </p>
                        </div>
                    </div>

                    <div class="text-center mt-3">
                        <h1 class="font-weight-bold text-uppercase" >Chi tiết công nợ</h1>
                        <div class="d-flex gap-[20px] mb-2 justify-content-center">
                            <p class="font-in" style="margin-bottom:0">Từ ngày: {{ moment(ngay_bat_dau).format('DD/MM/YYYY') }}</p>
                            <p class="font-in" style="margin-bottom:0">đến ngày: {{ moment(ngay_ket_thuc).format('DD/MM/YYYY') }}</p>
                        </div>
                    </div>
                    <div class=""> <!--px-4 mt-4-->
                        <div class="row">
                            <div class="col-12">
                                <table>
                                    <tr>
                                        <td v-if="hdpc[0]?.ma.startsWith('XK') || hdpc[0]?.ma.startsWith('PT')" class="text-md font-in">
                                            <b>Khách hàng:</b>
                                        </td>
                                        <td v-else class="text-md font-in">
                                            <b>Nhà cung cấp:</b>
                                        </td>
                                        <td class="font-in">
                                        <span v-if="hdpc[0]?.ma.startsWith('XK') || hdpc[0]?.ma.startsWith('PT')"
                                              class="text-md font-in">
                                        {{ hdpc[0]?.ten_kh }}
                                        </span>
                                            <span v-else
                                                  class="text-md font-in">
                                            {{ hdpc[0]?.ten_ncc }}
                                        </span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td class="text-md font-in">
                                            <b>Địa chỉ:</b>
                                        </td>
                                        <td>
                                            <span class="text-md font-in">
                                                {{ hdpc[0]?.dia_chi }}
                                            </span>
                                        </td>
                                        <td class="text-md font-in"><b>Điện thoại:</b></td>
                                        <td>
                                            <span class="text-md font-in">
                                                {{ hdpc[0]?.dien_thoai }}
                                            </span>
                                        </td>
                                        <td style="width: 31%"></td>
                                        <td class="text-md font-in"><b class="text-lg">Nợ cũ:</b></td>
                                        <td>
                                            <span class="text-lg font-in">
                                                {{ ton_dau }}
                                            </span>
                                        </td>
                                    </tr>
                                </table>
                            </div>
                        </div>
                        <div class="mt-2">
                            <table class="table table-bordered">
                                <thead>
                                <tr>
                                    <th>STT</th>
                                    <th>Mã phiếu</th>
                                    <th>Ngày</th>
                                    <th>Sản phẩm</th>
                                    <th>ĐVT</th>
                                    <th>Số lượng</th>
                                    <th>Đơn giá</th>
                                    <th>Thành tiền</th>
                                    <th v-if="hdpc[0]?.ma.startsWith('XK') || hdpc[0]?.ma.startsWith('PT')">
                                        Thu
                                    </th>
                                    <th v-else>
                                        Chi
                                    </th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr v-for="(hd, index) in hdpc">
                                    <td class="text-center">{{ index + 1 }}</td>
                                    <td>{{ hd.ma }}</td>
                                    <td>{{ moment(hd.ngay).format('DD/MM/YYYY') }}</td>
                                    <td>{{ hd.san_pham }}</td>
                                    <td class="text-center">{{ hd.dvt }}</td>
                                    <td class="quantity" style="width: 8%">{{ hd.so_luong }}</td>
                                    <td class="money">{{ hd.gia?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") }}</td>
                                    <td class="money">{{ hd.thanh_tien?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}}</td>
                                    <td v-if="hdpc[0]?.ma.startsWith('XK') || hdpc[0]?.ma.startsWith('PT')" class="money">{{ hd.thu?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}}</td>
                                    <td v-else class="money">{{ hd.chi?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}}</td>
                                </tr>
                                <tr>
                                    <td colspan="7" class="font-weight-bold text-end">Tổng cộng</td>
                                    <td class="money">{{ so_tien_nhap_moi?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") || 0 }}</td>
                                    <td class="money">{{ so_tien_chi_moi?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") || 0 }}</td>
                                </tr>
                                <tr>
                                    <td colspan="7" class="font-weight-bold text-end text-lg">Nợ mới</td>
                                    <td colspan="2" class="money  text-lg">{{ (ton_dau + so_tien_nhap_moi - so_tien_chi_moi)?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") || 0 }}</td>
                                </tr>
                                </tbody>
                            </table>
                        </div>

                        <div class="row">
                            <div class="col-6 font-in">
                                <b  class="font-in">Bằng chữ: </b><i>{{ numberToWords(ton_cuoi) }} đồng</i>
                            </div>
                        </div>


                        <div class="d-flex justify-content-between w-100 mt-2"> <!--mt-5 -->
                            <div class="space-y-[60px] text-center">

                            </div>
                            <div class="space-y-[60px] text-center font-in">

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
p{
    margin-bottom: 5px;
}

.cong-no{
    font-size: 19px;
}
</style>
