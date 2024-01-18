<script setup>

import NavLink from "@/Components/app/NavLink.vue";
import NavItem from "@/Components/app/NavItem.vue";
import NavLinkTree from "@/Components/app/NavLinkTree.vue";

</script>

<template>
    <aside class="main-sidebar sidebar-collapse sidebar-light-primary elevation-3 overflow-auto">
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
                            <li class="nav-item">
                                <NavLinkTree title="Quản lý sản phẩm"/>
                                <ul class="nav nav-treeview ">
                                    <NavItem :href="route('donvitinh.index')" title="Quản lý đơn vị tính"/>
                                    <NavItem :href="route('loaisanpham.index')" title="Quản lý loại sản phẩm"/>
                                    <NavItem :href="route('sanpham.index')" title="Quản lý sản phẩm"/>
                                </ul>
                            </li>
                            <NavItem :href="route('duan.index')" title="Quản lý dự án"/>
                            <NavItem :href="route('nhanvien.index')" title="Quản lý nhân viên"/>
                            <NavItem :href="route('kho.index')" title="Quản lý kho"/>
                        </ul>
                    </li>
                    <hr class="m-2 mr-4 ml-3">
                    <li class="nav-item menu-open ">
                        <NavLink title="Nhập xuất kho"/>
                        <ul class="nav nav-treeview">
                            <NavItem :href="route('baocaotonkho.index')" title="Xem tồn kho"/>
                            <NavItem :href="route('tonkho.index')" title="Điều chỉnh tồn kho"/>
                            <NavItem :href="route('hoadon.index',{ loai: 'nhapkho'})" title="Phiếu nhập kho"/>
                            <NavItem :href="route('hoadon.index',{ loai: 'xuatkho'})" title="Phiếu xuất kho"/>
                        </ul>
                    </li>
                    <hr class="m-2 mr-4 ml-3">
                    <li class="nav-item menu-open ">
                        <NavLink title="Đơn hàng"/>
                        <ul class="nav nav-treeview">
                            <NavItem :href="route('donhang.index',{ loai: 'donmua'})" title="Đơn mua"/>
                            <NavItem :href="route('donhang.index',{ loai: 'donban'})" title="Đơn bán"/>
                        </ul>
                    </li>
                    <hr class="m-2 mr-4 ml-3">
                    <li class="nav-item menu-open ">
                        <NavLink title="Phiếu thu chi"/>
                        <ul class="nav nav-treeview">
                            <NavItem :href="route('baocaocongno.index')" title="Xem công nợ"/>
                            <NavItem :href="route('loaithuchi.index')" title="Loại thu chi"/>
                            <NavItem :href="route('phieuthuchi.index',{ loai: 'phieuthu'})" title="Phiếu thu"/>
                            <NavItem :href="route('phieuthuchi.index',{ loai: 'phieuchi'})" title="Phiếu chi"/>
                        </ul>
                    </li>
                    <hr class="m-2 mr-4 ml-3">
                    <li class="nav-item menu-open mb-5">
                        <NavLink title="Hệ thống"/>
                        <ul class="nav nav-treeview">
                            <NavItem :href="route('donvi.index')" title="Danh sách đơn vị"/>
                            <NavItem :href="route('nguoidung.index')" title="Danh sách người dùng"/>
                        </ul>
                    </li>
                </ul>
            </nav>
        </div>
    </aside>
</template>

