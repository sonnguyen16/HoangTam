<script setup>

import DropdownLink from "@/Components/DropdownLink.vue";

</script>

<template>
    <nav class="main-header navbar navbar-expand navbar-light sticky-top border-0 shadow">
        <!-- Left navbar links -->
        <ul class="navbar-nav ml-3">
            <li class="nav-item d-lg-none d-block mt-md-2 mt-0">
                <a class="nav-link" data-widget="pushmenu" href="#" role="button"><i class="fas fa-bars"></i></a>
            </li>
            <a class="navbar-brand d-flex align-items-center" href="#">
                <img src="@/assets/img/3809b1b5c26b23357a7a.jpg" alt="logo" class="brand-image mr-2 d-md-block d-none" width="50px" >
                <span class="text-uppercase font-weight-bold text-md d-md-inline d-none">Quản lý hệ thống - Hoàng Tâm</span>
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
                    <DropdownLink :href="route('auth.logout')" method="post" class=" dropdown-item" as="button">
                        Đăng xuất
                    </DropdownLink>
                </div>
            </li>

        </ul>
    </nav>
</template>

