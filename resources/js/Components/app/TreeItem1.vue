<script setup>
import {ref, defineProps, defineEmits } from "vue";

const props = defineProps({
    item: Object,
    isChild: {
        type: Boolean,
        default: false
    },
    level: {
        type: Number,
        default: 0
    }
})

let isOpen = ref(true);

const emit = defineEmits(['edit', 'add']);
function toggle() {
    isOpen.value = !isOpen.value;
}

</script>

<template>
    <div>
        <div @click.prevent="emit('edit', item)" :class="['row p-0', {'bg-second font-weight-bold': !isChild}] " style="height: 33px;">
            <div :class="['col-lg-4 col-9 d-flex align-items-center', {'child-container': isChild}]" :style="{ paddingLeft: `${level * 15}px` }">
                <a @click.prevent.stop="toggle"
                   :class="item.children ? 'cursor-pointer' : 'cursor-text' "
                   class="text-black ml-3">
                    {{ item.ten }}
                </a>
            </div>
            <div class="col-lg-2 d-flex align-items-center">
                <span>{{ new Date(item.ngay_bat_dau).toLocaleDateString() }}</span>
            </div>
            <div class="col-lg-2 d-flex align-items-center">
                <span>{{ new Date(item.ngay_ket_thuc).toLocaleDateString() }}</span>
            </div>
<!--            <div class="col-lg-2 d-flex align-items-center">-->
<!--                    <span>-->
<!--                        <span v-if="item.trang_thai == 0" class="badge badge-warning">Chưa thực hiện</span>-->
<!--                        <span v-else-if="item.trang_thai == 1" class="badge badge-primary">Đang thực hiện</span>-->
<!--                        <span v-else-if="item.trang_thai == 2" class="badge badge-success">Đã hoàn thành</span>-->
<!--                    </span>-->
<!--            </div>-->
            <div class="col-lg-2 d-flex align-items-center justify-content-center">
                <span>{{ item.nhan_vien?.name }}</span>
            </div>
            <div class="col-lg-2 col-3 d-flex justify-content-center d-flex align-items-center">
                <a @click.prevent.stop=" emit('add', item.id);"><i class="fa fa-plus text-neutral-500 mr-2"></i></a>
                <a @click.prevent.stop=" emit('edit', item);"><i class="fa fa-edit text-neutral-500"></i></a>
            </div>
        </div>
        <div>
            <TreeItem1
                v-if="isOpen"
                :is-child="true"
                :level="level + 1"
                v-for="child in item.children"
                :key="child.id"
                :item="child"
                @edit="$emit('edit', $event)"
                @add="$emit('add', $event)"
            />
        </div>
    </div>
</template>

<style scoped>
.child-container {
    position: relative;
    padding-left: 20px;
}

.bg-second{
    background-color: #e6e6e6;
}
</style>

