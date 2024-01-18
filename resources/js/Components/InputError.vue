<script setup>
defineProps({
    message: {
        type: String,
    },
});
</script>

<template>
    <div class="h-[20px]" >
        <p v-show="message" class="text-sm text-danger">
            {{ message }}
        </p>
    </div>
</template>
