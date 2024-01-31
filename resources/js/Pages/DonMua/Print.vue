<script setup>
import {computed, defineProps, onMounted} from "vue";
import '@/assets/admin/plugins/fontawesome-free/css/all.min.css'
import '@/assets/admin/dist/css/adminlte.min.css'
import '@/assets/css/style.css'
import {numberToWords} from "@/assets/js/script.js";
import {usePage} from "@inertiajs/vue3";

const data = defineProps({
    don_hang: Object,
})

onMounted(() => {
    console.log(data.don_hang)
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
        <div class="container bg-white h-[100vh]">
            <div class="row">
                <div class="col-12 mx-auto my-5 p-3">
                    <div class="d-flex align-items-center gap-[20px]">
                        <img :src="/uploads/ + don_vi.logo" class="w-[200px]" alt="logo" />
                        <div class="text-start">
                            <h3 class="font-weight-bold mb-0">{{ don_vi?.ten }}</h3>
                            <p class="font-weight-bold mb-0">Địa chỉ: {{ don_vi?.dia_chi }}</p>
                            <p class="font-weight-bold mb-0">Điện thoại: {{ don_vi?.dien_thoai }}</p>
                            <p class="font-weight-bold mb-0">Email: {{ don_vi?.email }} </p>
                        </div>
                    </div>

                    <div class="text-center mt-3">
                        <h1 class="font-weight-bold" v-if="don_hang.data.loai === 0">Đơn mua</h1>
                        <h1 class="font-weight-bold" v-if="don_hang.data.loai === 1">Đơn bán</h1>
                        <p class="text-md font-italic">{{ formatDateForTemplate(new Date(don_hang.data.created_at)) }}</p>
                    </div>

                    <div class="px-4 mt-4">
                        <div class="row">
                            <div class="col-3">
                                <label class="text-md">Số:</label>
                            </div>
                            <div class="col-9">
                                <span>{{ don_hang.data.ma }}</span>
                            </div>
                        </div>

                        <div class="row">
                            <div class="col-3">
                                <label v-if="don_hang.data.loai === 1" class="text-md">Khách hàng:</label>
                                <label v-if="don_hang.data.loai === 0" class="text-md">Nhà cung cấp:</label>
                            </div>
                            <div class="col-9">
                                <span v-if="don_hang.data.loai === 1"
                                      class="text-md">
                                    {{ don_hang.data.khach_hang?.ten }}
                                </span>
                                <span v-if="don_hang.data.loai === 0"
                                      class="text-md">
                                    {{ don_hang.data.nha_cung_cap?.ten }}
                                </span>
                            </div>
                        </div>

                        <div class="row">
                            <div class="col-3">
                                <label class="text-md">Địa chỉ:</label>
                            </div>
                            <div class="col-9">
                                <span v-if="don_hang.data.loai === 1"
                                      class="text-md">
                                    {{ don_hang.data.khach_hang?.dia_chi }}
                                </span>
                                <span v-if="don_hang.data.loai === 0"
                                      class="text-md">
                                    {{ don_hang.data.nha_cung_cap?.dia_chi }}
                                </span>
                            </div>
                        </div>

                        <div class="row">
                            <div class="col-3">
                                <label class="text-md">Số điện thoại:</label>
                            </div>
                            <div class="col-9">
                                 <span v-if="don_hang.data.loai === 1"
                                       class="text-md">
                                    {{ don_hang.data.khach_hang?.dien_thoai }}
                                </span>
                                <span v-if="don_hang.data.loai === 0"
                                      class="text-md">
                                    {{ don_hang.data.nha_cung_cap?.dien_thoai }}
                                </span>
                            </div>
                        </div>

                        <table class="table table-bordered  table-responsive-md">
                            <thead>
                            <tr>
                                <th>STT</th>
                                <th>Mã sản phẩm</th>
                                <th>Tên sản phẩm</th>
                                <th>Số lượng</th>
                                <th>ĐVT</th>
                                <th>Đơn giá</th>
                                <th>Thành tiền</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr v-if="don_hang.data.chi_tiet_don_hang.length === 0">
                                <td colspan="7" class="text-center">Không có dữ liệu</td>
                            </tr>

                            <tr :key="cthd.id" v-else v-for="(cthd, index) in don_hang.data.chi_tiet_don_hang">
                                <td class="quantity">{{ index + 1 }}</td>
                                <td class="ma">{{ cthd?.san_pham?.ma }}</td>
                                <td class="ten">{{ cthd?.san_pham?.ten }}</td>
                                <td class="quantity" >{{ cthd?.so_luong }}</td>
                                <td class="quantity" >{{ cthd?.san_pham?.don_vi_tinh?.ten }}</td>
                                <td class="money" >{{ cthd?.gia.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") }}</td>
                                <td class="money" >{{ cthd?.thanh_tien.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") }}</td>
                            </tr>
                            <tr>
                                <td colspan="6">
                                    Tổng tiền
                                </td>
                                <td class="money">
                                    {{ don_hang.data.tong_tien.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") }}
                                </td>
                            </tr>
                            </tbody>
                        </table>

                        <div class="row">
                            <div class="col-3">
                                <label class="text-md">Bằng chữ:</label>
                            </div>
                            <div class="col-9">
                                <span class="text-md">
                                {{ numberToWords(don_hang.data.tong_tien) }} đồng
                            </span>
                            </div>
                        </div>

                        <div class="float-right">
                            <p class="text-md font-italic">{{ formatDateForTemplate(new Date()) }}</p>
                        </div>

                        <div class="d-flex mt-5 justify-content-between w-100">
                            <div class="space-y-[60px] text-center">
                                <p class="font-weight-bold text-md">Người giao hàng</p>
                                <p>(Ký, họ tên)</p>
                            </div>
                            <div class="space-y-[60px] text-center">
                                <p class="font-weight-bold text-md">Người nhận hàng</p>
                                <p>(Ký, họ tên)</p>
                            </div>
                            <div class="space-y-[60px] text-center">
                                <p class="font-weight-bold text-md">Người lập phiếu</p>
                                <p>(Ký, họ tên)</p>
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
</style>
