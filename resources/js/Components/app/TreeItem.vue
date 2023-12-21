<script setup>

const props = defineProps({
    item: Object,
})

const emit = defineEmits(['edit', 'add']);

</script>

<template>
        <div>
            <div class="d-flex justify-between">
                <a @click.prevent="emit('edit', item)" :class="item.children ? 'cursor-pointer' : 'cursor-text' " class="mb-2">{{ item.ten }}</a>
                <a @click.prevent=" emit('add', item.id);"><i class="fa fa-plus text-neutral-500"></i></a>
            </div>
            <div class="child-container">
                <TreeItem
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
    padding-left: 10px;
}
</style>
