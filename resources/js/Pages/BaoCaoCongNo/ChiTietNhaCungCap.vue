<script setup>
import {computed} from "vue";
import moment from "moment";
import {router} from "@inertiajs/vue3";

const props = defineProps({
    nha_cung_cap: {
        type: Object,
        default: {}
    },
    ngay_bat_dau: {
        type: String,
        default: ""
    },
    ngay_ket_thuc: {
        type: String,
        default: ""
    },
})

function closeModal() {
    $('#chitietnccmodal').modal('hide')
}

const phieu_chi = computed(() => {
    return props.nha_cung_cap?.filter(item => item.ma.startsWith('PC'))
})

const hoa_don = computed(() => {
    return props.nha_cung_cap?.filter(item => item.ma.startsWith('NK'))
})

const hdpc = computed(() => {
    return props.nha_cung_cap?.filter(item => item.ngay >= props.ngay_bat_dau && item.ngay <= props.ngay_ket_thuc)
})

const so_tien_nhap_cu = computed(() => {
    return hoa_don?.value?.filter(item => item.ngay < props.ngay_bat_dau)
        .reduce((acc, item) => acc + item.thanh_tien, 0)
})

const so_tien_chi_cu = computed(() => {
    return phieu_chi?.value?.filter(item => item.ngay < props.ngay_bat_dau)
        .reduce((acc, item) => acc + item.chi, 0)
})

const so_tien_nhap_moi = computed(() => {
    return hoa_don?.value?.filter(item => item.ngay >= props.ngay_bat_dau && item.ngay <= props.ngay_ket_thuc)
        .reduce((acc, item) => acc + item.thanh_tien, 0)
})

const so_tien_chi_moi = computed(() => {
    return phieu_chi?.value?.filter(item => item.ngay >= props.ngay_bat_dau && item.ngay <= props.ngay_ket_thuc)
        .reduce((acc, item) => acc + item.chi, 0)
})

function print() {
    $('#chitietnccmodal').modal('hide')
    router.post(route('baocaocongno.print'), {
        ngay_bat_dau: props.ngay_bat_dau,
        ngay_ket_thuc: props.ngay_ket_thuc,
        hdpc: hdpc.value,
        ton_dau: so_tien_nhap_cu.value - so_tien_chi_cu.value,
        so_tien_nhap_moi: so_tien_nhap_moi.value,
        so_tien_chi_moi: so_tien_chi_moi.value,
    })
}

</script>

<template>
    <div id="chitietnccmodal" class="modal fade" tabindex="-1" role="dialog">
        <div class="modal-dialog modal-xl" role="document">
            <div class="modal-content">
                <div class="modal-header pt-2">
                    <h5 class="txt-color my-2 font-weight-bold">Chi tiết công nợ</h5>
                    <button type="button" class="close" @click.prevent="closeModal">&times;</button>
                </div>
                <div class="modal-body space-y-2 px-4 mt-2">
                    <p v-if="props.nha_cung_cap?.length > 0"><b class="mr-2">Nhà cung cấp:</b>{{ props.nha_cung_cap[0].ten_ncc  }}</p>
                    <div class="d-flex space-x-[80px] align-items-center">
                        <p><b class="mr-2">Từ ngày: </b>{{ moment(ngay_bat_dau).format('DD/MM/YYYY') }}</p>
                        <p><b class="mr-2">Đến ngày: </b>{{ moment(ngay_ket_thuc).format('DD/MM/YYYY') }}</p>
                        <p><b class="mr-2">Nợ cũ: </b>{{ (so_tien_nhap_cu - so_tien_chi_cu).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") || 0 }}</p>
                        <a v-if="hdpc?.length > 0" @click.prevent="print()" class="btn btn-primary btn-sm ml-auto mb-2">In Phiếu</a>
                    </div>
                    <div class="mt-2">
                        <table class="table table-bordered table-responsive-md">
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
                                    <th>Chi</th>
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
                                    <td class="money">{{ hd.gia.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") }}</td>
                                    <td class="money">{{ hd.thanh_tien.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}}</td>
                                    <td class="money">{{ hd.chi?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}}</td>
                                </tr>
                                <tr>
                                    <td colspan="7" class="font-weight-bold text-end">Tổng cộng</td>
                                    <td class="money">{{ so_tien_nhap_moi?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") || 0 }}</td>
                                    <td class="money">{{ so_tien_chi_moi?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") || 0 }}</td>
                                </tr>
                                <tr>
                                    <td colspan="7" class="font-weight-bold text-end">Nợ mới</td>
                                    <td colspan="2" class="money">{{ (so_tien_nhap_cu - so_tien_chi_cu + so_tien_nhap_moi - so_tien_chi_moi)?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") || 0 }}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>

</style>
