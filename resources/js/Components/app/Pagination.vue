<script setup>

const props = defineProps({
    allData: Object,
})

const emit = defineEmits(['changePage']);

</script>

<template>
    <div class="float-right mt-3 mb-0">
        <div class="row">
            <div class="col-md-12 col-lg-12 text-center">
                <ul v-if="allData?.total > allData?.per_page" class="pagination">
                    <li v-for="pageNumber in allData.links.slice(1, -1)" :key="pageNumber" class="page-item">
                        <a
                            class="page-link"
                            :class="{ 'bg-primary': pageNumber.label === allData.current_page.toString() }"
                            @click.prevent="emit('changePage',pageNumber.url)"
                        >
                            {{ pageNumber.label }}
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<style scoped>

</style>
