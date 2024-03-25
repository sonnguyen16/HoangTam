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
        <tr @click.prevent="emit('edit', item)" :class="[{'bg-second font-weight-bold': !isChild}] " style="height: 37px;">
            <td>
                <a @click.prevent.stop="toggle"
                   :class="[item.children.length > 0 ? 'cursor-pointer' : 'cursor-text' , `ms-${level}`]"
                   class="text-black ps-3">
                    {{ item.ten }}
                </a>
            </td>
            <td class="">
                <span>{{ new Date(item.ngay_bat_dau).toLocaleDateString() }}</span>
            </td>
            <td class="">
                <span>{{ new Date(item.ngay_ket_thuc).toLocaleDateString() }}</span>
            </td>
            <td class="">
                    <span>
                        <span v-if="item.trang_thai == 0" class="badge badge-warning">Chưa thực hiện</span>
                        <span v-else-if="item.trang_thai == 1" class="badge badge-primary">Đang thực hiện</span>
                        <span v-else-if="item.trang_thai == 2" class="badge badge-success">Đã hoàn thành</span>
                    </span>
            </td>
            <td class="">
                <a class="cursor-pointer text-blue-300 d-flex align-items-center gap-[5px] ps-3"
                   @click.prevent.stop=" emit('add', item.id);">
                    <div class="text-white bg-blue-300 text-center rounded-full w-[20px] h-[20px]">
                        <i class="fa fa-plus text-[10px]"></i>
                    </div>
                </a>
<!--                <a @click.prevent.stop="emit('edit', item);"><i class="fa fa-edit text-neutral-500"></i></a>-->
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

