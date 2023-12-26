<script setup>

import NavLink from "@/Components/app/NavLink.vue";
import NavItem from "@/Components/app/NavItem.vue";
import NavLinkTree from "@/Components/app/NavLinkTree.vue";
</script>

<template>
    <aside class="main-sidebar sidebar-collapse sidebar-light-primary elevation-3">
        <div class="sidebar">
            <nav class="mt-3">
                <ul class="nav nav-pills nav-child-indent nav-sidebar flex-column" data-widget="treeview" role="menu"
                    data-accordion="false">
                    <li class="nav-item menu-open">
                        <NavLink title="Đối tác"/>
                        <ul class="nav nav-treeview ">
                            <NavItem :href="route('khachhang.index')" title="Danh sách khách hàng"/>
                            <NavItem :href="route('nhacungcap.index')" title="Danh sách nhà cung cấp"/>
                        </ul>
                    </li>
                    <hr class="m-2 mr-4 ml-3">
                    <li class="nav-item menu-open">
                        <NavLink title="Danh mục quản lý"/>
                        <ul class="nav nav-treeview ">
                            <NavItem :href="route('sanpham.index')" title="Quản lý sản phẩm"/>
                            <NavItem :href="route('kho.index')" title="Quản lý kho"/>
                            <NavItem :href="route('donvitinh.index')" title="Quản lý đơn vị tính"/>
                            <NavItem :href="route('duan.index')" title="Quản lý dự án"/>
                            <NavItem :href="route('nhanvien.index')" title="Quản lý nhân viên"/>
                        </ul>
                    </li>
                    <hr class="m-2 mr-4 ml-3">
                    <li class="nav-item menu-open ">
                        <NavLink title="Nhập xuất kho"/>
                        <ul class="nav nav-treeview">
                            <NavItem :href="route('hoadon.index',{ loai: 0})" title="Phiếu nhập kho"/>
                            <NavItem :href="route('hoadon.index',{ loai: 1})" title="Phiếu xuất kho"/>
<!--                            <li class="nav-item">-->
<!--                                <NavLinkTree title="Quản lý cư dân"/>-->
<!--                                <ul class="nav nav-treeview ">-->
<!--                                    <NavItem :is_child="true" href="" title="Quản lý thông tin cư dân"/>-->
<!--                                    <NavItem :is_child="true" href="" title="Quản lý thông tin khách"/>-->
<!--                                </ul>-->
<!--                            </li>-->

                        </ul>
                    </li>
                    <hr class="m-2 mr-4 ml-3">
                    <li class="nav-item menu-open ">
                        <NavLink title="Đơn hàng"/>
                        <ul class="nav nav-treeview">
                            <NavItem :href="route('donhang.index',{ loai: 0})" title="Đơn mua"/>
                            <NavItem :href="route('donhang.index',{ loai: 1})" title="Đơn bán"/>
                        </ul>
                    </li>
                </ul>
            </nav>
        </div>
    </aside>
</template>

