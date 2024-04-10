<script setup>
import {ref, defineProps, defineEmits, computed, onMounted} from "vue";

const props = defineProps({
    item: Object,
    isChild: {
        type: Boolean,
        default: false
    },
    level: {
        type: Number,
        default: 0
    },
})

let isOpen = ref(false);
let isMounted = ref(false);

const emit = defineEmits(['edit', 'add']);

function toggle() {
    isOpen.value = !isOpen.value;
}

function caculateHeight(parent_id){
   const id = 'fl' + parent_id
   const file_length = document.getElementById(id)?.value
   const height = file_length * 20 + 36
   return `${height}px`
}

function caculateTop(parent_id){
    const id = 'fl' + parent_id
    const file_length = document.getElementById(id)?.value
    const top = -file_length * 20 - 20
    return `${top}px`
}

onMounted(() => {
    isMounted.value = true;
})


</script>

<template>
    <div>
        <div class="row mb-3">
            <input type="hidden" :value="item.files.length" :id="`fl${item.id}`">
            <div :class="['col-lg-2 col-9', {'child-container': isChild}]" :style="{ paddingLeft: `${level * 15}px` }">
                <span :style="{ width: `${level * 15}px` }" class="line-connector"></span>
                <span v-if="isMounted" :style="{ height: caculateHeight(item.parent_id), top: caculateTop(item.parent_id)  }"  class="vertical-line"></span>
                <a @click.prevent="toggle"
                   :class="item.children ? 'cursor-pointer' : 'cursor-text' "
                   class="text-black">
                    <i v-if="item.children" class="fa fa-folder mr-2 text-amber-400 text-lg" :class="isOpen ? 'fa-folder-open' : 'fa-folder-closed' "></i>
                    {{ item.ten }}
                </a>
            </div>
            <div class="col-lg-1 d-lg-block d-none">
                <span>{{ item.ngay_bat_dau }}</span>
            </div>
            <div class="col-lg-1 d-lg-block d-none">
                <span>{{ item.ngay_ket_thuc }}</span>
            </div>

            <div class="col-lg-1 d-lg-block d-none">
                    <span>
                        <span v-if="item.tien_do == 0" class="badge badge-warning">Chưa thực hiện</span>
                        <span v-else-if="item.tien_do > 0 && item.tien_do < 100" class="badge badge-primary">Đang thực hiện</span>
                        <span v-else class="badge badge-success">Đã hoàn thành</span>
                    </span>
            </div>
            <div class="col-lg-1 d-lg-block d-none">
                <span>{{ item.nhan_vien?.name }}</span>
            </div>
            <div class="col-lg-2">
                <ul class="list-unstyled">
                    <li class="ms-2" v-for="file in item.files">
                        <a target="_blank"  :href="'/uploads/du_an/' + file.ten">{{ file.ten_goc }}</a>
                    </li>
                </ul>
            </div>
        </div>
        <div>
            <TreeFileItem
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
    left: 0;
    width: 1px;
    background-color: #ccc;
}

.child-container {
    position: relative;
    padding-left: 20px;
}
</style>

