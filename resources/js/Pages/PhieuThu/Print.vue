<script setup>
import {computed, defineProps, onMounted} from "vue";
import '@/assets/admin/plugins/fontawesome-free/css/all.min.css'
import '@/assets/admin/dist/css/adminlte.min.css'
import '@/assets/css/style.css'
import {numberToWords} from "@/assets/js/script.js";
import {usePage} from "@inertiajs/vue3";

const data = defineProps({
    phieu_thu_chi: Object,
})

onMounted(() => {
    window.print();
    console.log(data.phieu_thu_chi)
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
                <div class="col-12 mx-auto "> <!--my-5 p-3-->
                    <div class="d-flex align-items-center gap-[20px]">
                       <!-- <img :src="/uploads/ + don_vi.logo" class="w-[200px]" alt="logo" /> -->
                        <div class="text-start">
                            <h3 class="font-weight-bold mb-0">{{ don_vi?.ten }}</h3>
                            <p class="font-weight-bold mb-0">Địa chỉ: {{ don_vi?.dia_chi }}</p>
                            <p class="font-weight-bold mb-0">Điện thoại: {{ don_vi?.dien_thoai }}</p>
                            <p class="font-weight-bold mb-0" v-if="don_vi?.email">Email: {{ don_vi?.email }} </p>
                            <p class="font-weight-bold mb-0" v-if="don_vi?.stk_1">STK: {{ don_vi?.stk_1 }} </p>
                        </div>
                    </div>

                    <div class="text-center mt-3">
                        <h1 class="font-weight-bold" v-if="phieu_thu_chi.loai === 0">PHIẾU THU</h1>
                        <h1 class="font-weight-bold" v-if="phieu_thu_chi.loai === 1">PHIẾU CHI</h1>
                        <p class="text-md font-italic">{{ formatDateForTemplate(new Date(phieu_thu_chi.created_at)) }}</p>
                    </div>

                    <div class="px-4 mt-4">

                        <div class="row">
                            <div class="col-2">
                                <label v-if="phieu_thu_chi.loai === 0" class="text-md">Họ tên người nộp:</label>
                                <label v-if="phieu_thu_chi.loai === 1" class="text-md">Nhà cung cấp:</label>
                            </div>
                            <div class="col-9">
                                <span v-if="phieu_thu_chi.loai === 0"
                                      class="text-md">
                                    {{ phieu_thu_chi.khach_hang?.ten }}
                                </span>
                                <span v-if="phieu_thu_chi.loai === 1"
                                      class="text-md">
                                    {{ phieu_thu_chi.nha_cung_cap?.ten }}
                                </span>
                            </div>
                        </div>

                        <div class="row">
                            <div class="col-2">
                                <label class="text-md">Địa chỉ:</label>
                            </div>
                            <div class="col-9">
                                <span v-if="phieu_thu_chi.loai === 0"
                                      class="text-md">
                                    {{ phieu_thu_chi.khach_hang?.dia_chi }}
                                </span>
                                <span v-if="phieu_thu_chi.loai === 1"
                                      class="text-md">
                                    {{ phieu_thu_chi.nha_cung_cap?.dia_chi }}
                                </span>
                            </div>
                        </div>

                        <div class="row">
                            <div class="col-2">
                                <label class="text-md">Lý do:</label>
                            </div>
                            <div class="col-9">
                                <span class="text-md">
                                    {{ phieu_thu_chi.ly_do }}
                                </span>
                            </div>
                        </div>
<!--
                        <div class="row">
                            <div class="col-3">
                                <label class="text-md">Dự án:</label>
                            </div>
                            <div class="col-9">
                                <span class="text-md">
                                    {{ phieu_thu_chi.du_an?.ten }}
                                </span>
                            </div>
                        </div>
-->
                        <div class="row">
                            <div class="col-2">
                                <label class="text-md">Số tiền:</label>
                            </div>
                            <div class="col-9 d-flex gap-[70px]">
                                <span class="text-md">
                                    {{ phieu_thu_chi.so_tien.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") }}
                                    VNĐ
                                </span>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-2">
                                <label class="text-md">Bằng chữ:</label>
                            </div>
                           <div class="col-9 d-flex gap-[70px]">
                                <div class="d-flex flex-1 gap-[50px]">
                                    <span class="text-md">
                                       <i> {{ numberToWords(phieu_thu_chi.so_tien) }} đồng</i>
                                    </span>
                                </div>
                            </div>
                        </div>
                       <!-- <div class="float-right mt-3">
                            <p class="text-md font-italic">{{ formatDateForTemplate(new Date()) }}</p>
                        </div> -->

                        <div class="d-flex mt-5 justify-content-between w-100">
                            <div class="space-y-[60px] text-center">
                                <p class="font-weight-bold text-md">Giám đốc</p>
                                <p>(Ký, họ tên, đóng dấu)</p>
                            </div>
                            <div class="space-y-[60px] text-center">
                                <p class="font-weight-bold text-md">Kế toán trưởng</p>
                                <p>(Ký, họ tên)</p>
                            </div>
                            <div class="space-y-[60px] text-center">
                                <p v-if="phieu_thu_chi.loai === 0" class="font-weight-bold text-md">Người nộp tiền</p>
                                <p v-if="phieu_thu_chi.loai === 1" class="font-weight-bold text-md">Người nhận tiền</p>
                                <p>(Ký, họ tên)</p>
                            </div>
                            <div class="space-y-[60px] text-center">
                                <p class="font-weight-bold text-md">Người lập phiếu</p>
                                <p>(Ký, họ tên)</p>
                            </div>
                            <div class="space-y-[60px] text-center">
                                <p class="font-weight-bold text-md">Thủ quỹ</p>
                                <p>(Ký, họ tên)</p>
                            </div>
                        </div>
                        <!--
                        <div class="row mt-3">
                            <div class="col-3">
                                <label class="text-md">Đã nhận đủ số tiền:</label>
                            </div>
                            
                            <div class="col-9">
                                <span class="text-md">
                                    {{ numberToWords(phieu_thu_chi.so_tien) }} đồng
                                </span>
                            </div>
                        </div> -->
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
