<script setup>
import {defineProps, onMounted} from "vue";
import '@/assets/admin/plugins/fontawesome-free/css/all.min.css'
import '@/assets/admin/dist/css/adminlte.min.css'
import '@/assets/css/style.css'

const data = defineProps({
    hoa_don: Object,
})

onMounted(() => {
    console.log(data.hoa_don)
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
                        <h1 class="font-weight-bold" v-if="hoa_don.data.loai === 0">Phiếu nhập kho</h1>
                        <h1 class="font-weight-bold" v-if="hoa_don.data.loai === 1">Phiếu xuất kho</h1>
                        <p class="text-md font-italic">{{ formatDateForTemplate(new Date(hoa_don.data.created_at)) }}</p>
                    </div>

                    <div class="px-4 mt-4">
                        <div class="row">
                            <div class="col-3">
                                <label class="text-md">Số:</label>
                            </div>
                            <div class="col-9">
                                <span>{{ hoa_don.data.ma }}</span>
                            </div>
                        </div>

                        <div class="row">
                            <div class="col-3">
                                <label v-if="hoa_don.data.loai === 1" class="text-md">Khách hàng:</label>
                                <label v-if="hoa_don.data.loai === 0" class="text-md">Nhà cung cấp:</label>
                            </div>
                            <div class="col-9">
                                <span v-if="hoa_don.data.loai === 1"
                                      class="text-md">
                                    {{ hoa_don.data.khach_hang?.ten }}
                                </span>
                                <span v-if="hoa_don.data.loai === 0"
                                      class="text-md">
                                    {{ hoa_don.data.nha_cung_cap?.ten }}
                                </span>
                            </div>
                        </div>

                        <div class="row">
                            <div class="col-3">
                                <label class="text-md">Địa chỉ:</label>
                            </div>
                            <div class="col-9">
                                <span v-if="hoa_don.data.loai === 1"
                                      class="text-md">
                                    {{ hoa_don.data.khach_hang?.dia_chi }}
                                </span>
                                <span v-if="hoa_don.data.loai === 0"
                                      class="text-md">
                                    {{ hoa_don.data.nha_cung_cap?.dia_chi }}
                                </span>
                            </div>
                        </div>

                        <div class="row">
                            <div class="col-3">
                                <label class="text-md">Số điện thoại:</label>
                            </div>
                            <div class="col-9">
                                 <span v-if="hoa_don.data.loai === 1"
                                       class="text-md">
                                    {{ hoa_don.data.khach_hang?.dien_thoai }}
                                </span>
                                <span v-if="hoa_don.data.loai === 0"
                                      class="text-md">
                                    {{ hoa_don.data.nha_cung_cap?.dien_thoai }}
                                </span>
                            </div>
                        </div>

                        <table class="table table-bordered  table-responsive-md">
                            <thead>
                            <tr>
                                <th>Mã sản phẩm</th>
                                <th>Tên sản phẩm</th>
                                <th>Số lượng</th>
                                <th>ĐVT</th>
                                <th>Đơn giá</th>
                                <th>Thành tiền</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr v-if="hoa_don.data.chi_tiet_hoa_don.length === 0">
                                <td colspan="7" class="text-center">Không có dữ liệu</td>
                            </tr>

                            <tr :key="cthd.id" v-else v-for="cthd in hoa_don.data.chi_tiet_hoa_don">
                                <td class="ma">{{ cthd?.san_pham?.ma }}</td>
                                <td class="ten">{{ cthd?.san_pham?.ten }}</td>
                                <td class="quantity" >{{ cthd?.so_luong }}</td>
                                <td class="quantity" >{{ cthd?.san_pham?.don_vi_tinh?.ten }}</td>
                                <td class="money" >{{ cthd?.gia.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") }}</td>
                                <td class="money" >{{ cthd?.thanh_tien.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") }}</td>
                            </tr>
                            <tr>
                                <td colspan="5">
                                    Tổng tiền
                                </td>
                                <td class="money">
                                    {{ hoa_don.data.tong_tien.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") }}
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
                                {{ numberToWords(hoa_don.data.tong_tien) }} đồng
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
