<script setup>
import {ref, defineProps, defineEmits} from "vue";

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
            <div class="row mb-3">
                <div :class="['col-lg-3 col-9', {'child-container': isChild}]" :style="{ paddingLeft: `${level * 15}px` }">
                    <span :style="{ width: `${level * 15}px` }" class="line-connector"></span>
                    <span v-if="isChild" class="vertical-line"></span>
                    <a @click.prevent="toggle"
                       :class="item.children ? 'cursor-pointer' : 'cursor-text' "
                       class="mb-2 text-black">
                        <i v-if="item.children" class="fa fa-folder mr-2 text-amber-400 text-lg" :class="isOpen ? 'fa-folder-open' : 'fa-folder-closed' "></i>
                        {{ item.ten }}
                    </a>
                </div>
                <div class="col-lg-2 d-lg-block d-none">
                    <span>{{ item.ngay_bat_dau }}</span>
                </div>
                <div class="col-lg-2 d-lg-block d-none">
                    <span>{{ item.ngay_ket_thuc }}</span>
                </div>
                <div class="col-lg-2 d-lg-block d-none">
                    <span>
                        <span v-if="item.trang_thai == 0" class="badge badge-warning">Chưa thực hiện</span>
                        <span v-else-if="item.trang_thai == 1" class="badge badge-primary">Đang thực hiện</span>
                        <span v-else-if="item.trang_thai == 2" class="badge badge-success">Đã hoàn thành</span>
                    </span>
                </div>
                <div class="col-lg-2 d-lg-block d-none">
                    <span>{{ item.nhan_vien?.name }}</span>
                </div>
                <div class="col-lg-1 col-3">
                    <a @click.prevent=" emit('add', item.id);"><i class="fa fa-plus text-neutral-500 mr-3"></i></a>
                    <a @click.prevent=" emit('edit', item);"><i class="fa fa-edit text-neutral-500"></i></a>
                </div>
            </div>
            <div>
                <TreeItem
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
.line-connector {
    position: absolute;
    top: 15px;
    left: 0;
    height: 1px;
    background-color: #ccc;
}

.vertical-line {
    position: absolute;
    top: -20px;
    left: 0;
    width: 1px;
    background-color: #ccc;
    height: 36px;
}

.child-container {
    position: relative;
    padding-left: 20px;
}
</style>

