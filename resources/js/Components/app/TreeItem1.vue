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
        <tr @click.prevent="emit('edit', item)" :class="[{'bg-second font-weight-bold': !isChild}]"  style="height: 37px;">
            <td >
                <a @click.prevent.stop="toggle"
                   :class="[item.children.length > 0 ? 'cursor-pointer' : 'cursor-text']"
                   :style="{ paddingLeft: `${level * 15}px` }"
                   class="text-black">
                    <span class="ms-3">
                        {{ item.ten.length > 20 ? item.ten.substring(0, 20) + '...' : item.ten }}
                    </span>
                </a>
            </td>
            <td style="width: 14%">
                <span>{{ new Date(item.ngay_bat_dau).toLocaleDateString() }}</span>
            </td>
            <td style="width: 14%">
                <span>{{ new Date(item.ngay_ket_thuc).toLocaleDateString() }}</span>
            </td>
            <td style="width: 5%" class="text-center">
                    <span>
                        <span v-if="item.tien_do == 0" class="badge badge-warning">Chưa làm</span>
                        <span v-else-if="item.tien_do > 0 && item.tien_do < 100" class="badge badge-primary">{{ item.tien_do }}%</span>
                        <span v-else class="badge badge-success">Hoàn thành</span>
                    </span>
            </td>
            <td style="width: 3%">
                <a class="cursor-pointer text-blue-300 d-flex align-items-center gap-[5px] ps-3"
                   @click.prevent.stop=" emit('add', item.id);">
                    <div class="text-white bg-blue-300 text-center rounded-full w-[20px] h-[20px]">
                        <i class="fa fa-plus text-[10px]"></i>
                    </div>
                </a>
            </td>
            <td >
                <a @click.prevent.stop="emit('edit', item);">
                    <div class="text-white bg-blue-300 text-center rounded-full w-[20px] h-[20px]">
                        <i class="fa fa-edit text-[10px]"></i>
                    </div>
                </a>
            </td>
        </tr>
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
</template>

<style scoped>
.bg-second{
    background-color: #e6e6e6;
}
</style>

