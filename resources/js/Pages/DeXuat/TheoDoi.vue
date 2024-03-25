<script setup>
const props = defineProps({
    de_xuat_selected: Object,
})

const emit = defineEmits(['editNguoiTheoDoi', "xoaNguoiTheoDoi"])

function editNguoiTheoDoi() {
    emit('editNguoiTheoDoi')
}

function xoaNguoiTheoDoi(id) {
    emit('xoaNguoiTheoDoi', id)
}

</script>

<template>
    <template v-if="de_xuat_selected.id">
        <div class="p-2">
            <div class="d-flex justify-content-between align-items-center">
                <h5 class="font-weight-bold mb-0">Người duyệt</h5>
                <button @click.prevent="editNguoiTheoDoi()" class="fa fa-plus text-secondary"></button>
            </div>

            <hr class="mt-1 mb-2">
            <div class="d-flex align-items-center gap-[10px] my-1">
                <img v-if="de_xuat_selected.nguoi_duyet?.hinh_anh" :src="'/uploads/nhan_vien/' + de_xuat_selected.nguoi_duyet.hinh_anh" alt="avatar" class="rounded-full w-10 h-10 object-cover elevation-2">
                <img v-else src="/uploads/avatardefault.png" alt="avatar" class="rounded-full w-10 h-10 object-cover">
                <span class="font-weight-bold">{{ de_xuat_selected.nguoi_duyet?.name }}</span>
            </div>
        </div>
        <div class="p-2">
            <div class="d-flex justify-content-between align-items-center">
                <h5 class="font-weight-bold mb-0">Người theo dõi</h5>
                <button @click.prevent="editNguoiTheoDoi()" class="fa fa-plus text-secondary"></button>
            </div>

            <hr class="mt-1 mb-2">
            <div v-for="ntd in de_xuat_selected.nguoi_theo_doi" class="d-flex align-items-center justify-content-between my-1">
                <div :key="ntd.id" class="d-flex align-items-center gap-[10px]">
                    <img v-if="ntd.user?.hinh_anh" :src="'/uploads/nhan_vien/' + ntd.user.hinh_anh" alt="avatar" class="rounded-full w-10 h-10 object-cover elevation-2">
                    <img v-else src="/uploads/avatardefault.png" alt="avatar" class="rounded-full w-10 h-10 object-cover">
                    <span class="font-weight-bold">{{ ntd.user?.name }}</span>
                </div>
                <button @click.prevent="xoaNguoiTheoDoi(ntd.id)" class="fa fa-trash text-secondary"></button>
            </div>
        </div>
    </template>
</template>

<style scoped>

</style>
