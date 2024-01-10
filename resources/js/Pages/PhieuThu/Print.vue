<script setup>
import {defineProps, onMounted} from "vue";
import '@/assets/admin/plugins/fontawesome-free/css/all.min.css'
import '@/assets/admin/dist/css/adminlte.min.css'
import '@/assets/css/style.css'

const data = defineProps({
    phieu_thu_chi: Object,
})

onMounted(() => {
    console.log(data.phieu_thu_chi)
})

function formatDateForTemplate(date) {
    return `Ngày ${date.getDate()} tháng ${date.getMonth() + 1} năm ${date.getFullYear()}`
}

function numberToWords(number) {
    const units = ['', 'nghìn', 'triệu', 'tỷ', 'nghìn tỷ', 'triệu tỷ'];
    const words = ['', 'một', 'hai', 'ba', 'bốn', 'năm', 'sáu', 'bảy', 'tám', 'chín'];

    function convertGroupOfThree(num) {
        let result = '';
        const hundred = Math.floor(num / 100);
        const remainder = num % 100;

        if (hundred > 0) {
            result += words[hundred] + ' trăm';
            if (remainder > 0) {
                result += ' ';
            }
        }

        if (remainder > 0) {
            if (remainder < 10) {
                result += words[remainder];
            } else if (remainder < 20) {
                result += 'mười ' + words[remainder % 10];
            } else {
                result += words[Math.floor(remainder / 10)] + ' mươi';
                if (remainder % 10 > 0) {
                    result += ' ' + words[remainder % 10];
                }
            }
        }

        return result;
    }

    let result = '';
    let groupIndex = 0;

    while (number > 0) {
        const group = number % 1000;
        const groupWords = convertGroupOfThree(group);

        if (groupWords !== '') {
            result = groupWords + ' ' + units[groupIndex] + ' ' + result;
        }

        number = Math.floor(number / 1000);
        groupIndex++;
    }

    return result.trim();
}

</script>

<template>
    <div class="bg-light-blue h-[100vh]">
        <div class="container bg-white h-[100vh]">
            <div class="row">
                <div class="col-12 mx-auto my-5 p-3">
                    <div class="d-flex align-items-center">
                        <img src="@/assets/img/3809b1b5c26b23357a7a.jpg" class="w-[200px]" alt="logo" />
                        <div class="text-start">
                            <h3 class="font-weight-bold mb-0">CÔNG TY TNHH HOÀNG TÂM</h3>
                            <p class="font-weight-bold mb-0">Địa chỉ: 123 Trương Công Định, P8, Vũng Tàu</p>
                            <p class="font-weight-bold mb-0">Điện thoại: 0123456789</p>
                            <p class="font-weight-bold mb-0">Email: hoangtam@gmail.com </p>
                        </div>
                    </div>

                    <div class="text-center mt-3">
                        <h1 class="font-weight-bold" v-if="phieu_thu_chi.loai === 0">Phiếu thu</h1>
                        <h1 class="font-weight-bold" v-if="phieu_thu_chi.loai === 1">Phiếu chi</h1>
                        <p class="text-md font-italic">{{ formatDateForTemplate(new Date(phieu_thu_chi.created_at)) }}</p>
                    </div>

                    <div class="px-4 mt-4">

                        <div class="row">
                            <div class="col-3">
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
                            <div class="col-3">
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
                            <div class="col-3">
                                <label class="text-md">Lý do:</label>
                            </div>
                            <div class="col-9">
                                <span class="text-md">
                                    {{ phieu_thu_chi.ly_do }}
                                </span>
                            </div>
                        </div>

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

                        <div class="row">
                            <div class="col-3">
                                <label class="text-md">Số tiền:</label>
                            </div>
                            <div class="col-9 d-flex gap-[70px]">
                                <span class="text-md">
                                    {{ phieu_thu_chi.so_tien.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") }}
                                    VNĐ
                                </span>

                                <div class="d-flex flex-1 gap-[50px]">
                                    <label class="text-md">Bằng chữ:</label>

                                    <span class="text-md">
                                        {{ numberToWords(phieu_thu_chi.so_tien) }} đồng
                                    </span>
                                </div>
                            </div>
                        </div>

                        <div class="float-right mt-3">
                            <p class="text-md font-italic">{{ formatDateForTemplate(new Date()) }}</p>
                        </div>

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

                        <div class="row mt-3">
                            <div class="col-3">
                                <label class="text-md">Đã nhận đủ số tiền:</label>
                            </div>
                            <div class="col-9">
                                <span class="text-md">
                                    {{ numberToWords(phieu_thu_chi.so_tien) }} đồng
                                </span>
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
