<script setup>
defineProps({
    message: {
        type: String,
    },
});
</script>

<template>
    <div class="h-[7px] mt-1" >
        <p v-show="message" class="text-sm text-danger">
            {{ message }}
        </p>
    </div>
</template>
