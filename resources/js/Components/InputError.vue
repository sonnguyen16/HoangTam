<script setup>
defineProps({
    message: {
        type: String,
    },
});
</script>

<template>
    <div class="h-[20px]" >
        <p v-show="message" class="text-md text-danger">
            {{ message }}
        </p>
    </div>
</template>
