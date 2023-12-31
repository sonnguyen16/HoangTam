<script setup>

const props = defineProps({
    don_hang_ban_list: Object,
})

const emit = defineEmits(['addChiTietDonHang']);

const closeModal = () => {
    $('#chondonhangmodal').modal('hide');
}


</script>

<template>
    <div id="chondonhangmodal" class="modal fade" role="dialog">
        <div class="modal-dialog modal-xl" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <span class="txt-color mb-0 font-weight-bold">Chọn đơn hàng</span>
                    <button type="button" class="close" @click.prevent="closeModal">&times;</button>
                </div>
                <div class="modal-body">
                    <div class="row">
                        <div class="col-12 mb-3">
                            <input type="text" class="form-control" placeholder="Tìm kiếm đơn hàng" />
                        </div>
                        <div class="col-12">
                            <table class="table table-bordered table-hover">
                                <thead>
                                    <tr>
                                        <th>STT</th>
                                        <th>Mã đơn hàng</th>
                                        <th>Khách hàng</th>
                                        <th>Ngày tạo</th>
                                        <th>Thao tác</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-for="(dh, index) in props.don_hang_ban_list.data" :key="dh.id">
                                        <td>{{ index + 1 }}</td>
                                        <td>{{ dh.ma }}</td>
                                        <td>{{ dh.khach_hang.ten }}</td>
                                        <td>{{ dh.created_at }}</td>
                                        <td>
                                            <button
                                                class="btn btn-sm btn-primary"
                                                @click.prevent="emit('addChiTietDonHang', dh.chi_tiet_don_hang)">
                                                Chọn
                                            </button>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>

</style>
