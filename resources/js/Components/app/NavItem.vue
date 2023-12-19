<script setup>

import icon from '@/assets/img/widgets.png'
import widget from '@/assets/img/ico.png'
import { Link } from '@inertiajs/vue3'

defineProps({
    title: {
        required: true,
        type: String
    },
    href: {
        default:"",
        type: String
    },
    is_child:{
        type: Boolean
    }
})
</script>

<template>
    <li class="nav-item ">
        <Link :href="href" class="nav-link">
            <img class="d-inline-block mr-2" :src="is_child ? icon : widget" alt="icon">
            <p>{{ title }}</p>
        </Link>
    </li>
</template>
