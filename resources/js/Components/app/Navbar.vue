<script setup>
import DropdownLink from "@/Components/DropdownLink.vue";
import {computed} from "vue";
import {usePage} from "@inertiajs/vue3";
import DonViModal from "@/Components/app/DonViModal.vue";

const { props } = usePage();

const don_vi = computed(() => {
    return props.don_vi;
});

const user = computed(() => {
    return props.user;
});

function showModal() {
    $('#donvimodal1').modal('show');
}

</script>

<template>
    <nav class="main-header navbar navbar-expand navbar-light sticky-top border-bottom">
        <!-- Left navbar links -->
        <ul class="navbar-nav ml-3">
            <li class="nav-item d-lg-none d-block mt-md-2 mt-0">
                <a class="nav-link" data-widget="pushmenu" href="#" role="button"><i class="fas fa-bars"></i></a>
            </li>
            <a class="navbar-brand d-flex align-items-center" href="#">
                <img :src="/uploads/ + don_vi?.logo" alt="logo" class="brand-image mr-2 d-md-block d-none" width="50px" >
                <span class="text-uppercase font-weight-bold text-md d-md-inline d-none">Quản lý hệ thống - {{ don_vi?.ten }}</span>
            </a>
        </ul>

        <!-- Right navbar links -->
        <ul class="navbar-nav ml-auto">

            <li class="nav-item">
                <a class="nav-link" data-widget="fullscreen" href="#" role="button">
                    <i class="fas fa-expand-arrows-alt"></i>
                </a>
            </li>
            <li class="nav-item dropdown">
                <a class="nav-link" data-toggle="dropdown" href="#">
                    <i class="fas fa-user"></i>
                </a>
                <div class="dropdown-menu dropdown-menu-md dropdown-menu-right border-0 shadow">
                    <a @click.prevent="showModal()" class=" dropdown-item px-4 py-2">
                        Thông tin đơn vị
                    </a>
                    <DropdownLink :href="route('auth.logout')" method="post" class="dropdown-item" as="button">
                        Đăng xuất
                    </DropdownLink>
                </div>
            </li>
        </ul>
    </nav>
    <DonViModal :don_vi="don_vi" />
</template>

