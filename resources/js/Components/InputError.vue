<script setup>
defineProps({
    message: {
        type: String,
    },
});
</script>

<template>
    <div class="h-[10px] d-flex align-items-center" >
        <p v-show="message" class="text-sm text-danger">
            {{ message }}
        </p>
    </div>
</template>
