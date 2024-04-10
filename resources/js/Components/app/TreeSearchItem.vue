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

let isOpen = ref(false);

const emit = defineEmits(['choose']);

function toggle() {
    isOpen.value = !isOpen.value;
}

</script>

<template>
    <div>
        <div class="row mb-3">
            <div :class="['col-lg-7 col-9', {'child-container': isChild}]" :style="{ paddingLeft: `${level * 15}px` }">
                <span :style="{ width: `${level * 15}px` }" class="line-connector"></span>
                <span v-if="isChild" class="vertical-line"></span>
                <a @click.prevent="toggle"
                   :class="item.children ? 'cursor-pointer' : 'cursor-text' "
                   class="mb-2 text-black">
                    <i v-if="item.children" class="fa fa-folder mr-2 text-amber-400 text-lg" :class="isOpen ? 'fa-folder-open' : 'fa-folder-closed' "></i>
                    {{ item.ten }}
                </a>
            </div>
            <div class="col-lg-3 d-lg-block d-none">
                    <span>
                        <span v-if="item.tien_do == 0" class="badge badge-warning">Chưa thực hiện</span>
                        <span v-else-if="item.tien_do > 0 && item.tien_do < 100" class="badge badge-primary">Đang thực hiện</span>
                        <span v-else class="badge badge-success">Đã hoàn thành</span>
                    </span>
            </div>
            <div class="col-lg-2">
                <button @click.prevent="emit('choose', item)" class="ms-5">
                    <i class="fa fa-search"></i>
                </button>
            </div>
        </div>
        <div>
            <TreeSearchItem
                v-if="isOpen"
                :is-child="true"
                :level="level + 1"
                v-for="child in item.children"
                :key="child.id"
                :item="child"
                @choose="$emit('choose', $event)"
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

