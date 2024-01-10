<script setup>
import {defineEmits} from "vue";
import TreeItem from "@/Components/app/TreeItem.vue";

const props = defineProps({
    du_an: Object,
})

const emit = defineEmits(['edit', 'add']);

const closeModal = () => {
    $('#xemduanmodal').modal('hide');
}

const editHangMuc = (item) => {
    emit('edit', item)
}

const addHangMuc = (id) => {
    emit('add', id)
}

</script>

<template>
    <div id="xemduanmodal" class="modal fade" tabindex="-1" role="dialog">
        <div class="modal-dialog modal-xl" role="document">
            <div class="modal-content">
                <div class="modal-header pt-2">
                    <h5 class="txt-color my-2 font-weight-bold">{{ du_an.ten }}</h5>
                    <button type="button" class="close" @click.prevent="closeModal">&times;</button>
                </div>
                <div class="modal-body space-y-2 px-4">
                    <div class="row">
                        <div class="col-md-2 col-6">
                            <span class="font-bold ">Ngày bắt đầu</span>
                        </div>
                        <div class="col-md-10 col-6">
                            <span>{{ new Date(du_an.ngay_bat_dau).toLocaleDateString() }}</span>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-2 col-6">
                            <span class="font-bold ">Ngày kết thúc</span>
                        </div>
                        <div class="col-md-10 col-6">
                            <span>{{ new Date(du_an.ngay_ket_thuc).toLocaleDateString() }}</span>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-2 col-6 font-bold">Trạng thái</div>
                        <div class="col-md-10 col-6">
                            <span v-if="du_an.trang_thai === 0" class="badge badge-warning">Chưa thực hiện</span>
                            <span v-else-if="du_an.trang_thai === 1" class="badge badge-primary">Đang thực hiện</span>
                            <span v-else-if="du_an.trang_thai === 2" class="badge badge-success">Đã hoàn thành</span>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-2 col-6 font-bold">Phụ trách</div>
                        <div class="col-md-10 col-6">{{ du_an.nhan_vien?.name }}</div>
                    </div>
                    <div class="row">
                        <div class="col-md-2 col-6 font-bold">Mô tả</div>
                        <div class="col-md-10 col-6">{{ du_an.mo_ta }}</div>
                    </div>
                    <div class="mt-3">
                        <div class="mb-1">
                            <a class="btn btn-primary" @click.prevent="addHangMuc(du_an.id)">Thêm hạng mục</a>
                        </div>
                        <div class="p-2 pt-3 pl-3">
                            <TreeItem
                                class=""
                                v-for="item in du_an.children"
                                :key="item.id"
                                :item="item"
                                @edit="editHangMuc"
                                @add="addHangMuc"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>

</style>
