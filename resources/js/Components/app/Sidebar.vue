<script setup>
import NavLink from "@/Components/app/NavLink.vue";
import NavItem from "@/Components/app/NavItem.vue";
import { usePage } from "@inertiajs/vue3";
import { computed } from "vue";

const { props } = usePage();

const don_vi = computed(() => {
  return props.don_vi;
});

const user = computed(() => {
  return props.user;
});
</script>

<template>
  <aside
    class="main-sidebar sidebar-collapse sidebar-light-primary border-top border-right overflow-auto"
  >
    <div class="sidebar">
      <nav class="mt-3">
        <ul
          class="nav nav-pills nav-child-indent nav-sidebar flex-column"
          data-widget="treeview"
          role="menu"
          data-accordion="false"
        >
          <li class="nav-item menu-open">
            <NavLink title="Danh mục quản lý" />
            <ul class="nav nav-treeview">
              <!--                            <li class="nav-item">-->
              <!--                                <NavLinkTree title="Quản lý sản phẩm"/>-->
              <!--                                <ul class="nav nav-treeview ">-->
              <!--                                   -->
              <!--                                </ul>-->
              <!--                            </li>-->
              <NavItem
                :href="route('loaisanpham.index')"
                title="Loại sản phẩm"
              />
              <NavItem :href="route('donvitinh.index')" title="Đơn vị tính" />
              <NavItem :href="route('sanpham.index')" title="Sản phẩm" />
              <NavItem :href="route('kho.index')" title="Kho" />
              <NavItem :href="route('duan.index')" title="Dự án"/>
              <NavItem :href="route('khachhang.index')" title="Khách hàng" />
              <NavItem :href="route('nhacungcap.index')" title="Nhà cung cấp" />
              <NavItem :href="route('nhanvien.index')" title="Nhân viên" />
              <NavItem :href="route('phongban.index')" title="Phòng ban" />
              <NavItem :href="route('dexuat.index')" title="Đề xuất" />
              <NavItem :href="route('congviec.index')" title="Công việc" />
            </ul>
          </li>
          <hr class="m-2 mr-4 ml-3" />
          <li class="nav-item menu-open">
            <NavLink title="Nhập xuất kho" />
            <ul class="nav nav-treeview">
              <NavItem
                :href="route('tonkho.index')"
                title="Điều chỉnh tồn kho"
              />
              <NavItem
                :href="route('hoadon.index', { loai: 'nhapkho' })"
                title="Phiếu nhập kho"
              />
              <NavItem
                :href="route('hoadon.index', { loai: 'xuatkho' })"
                title="Phiếu xuất kho"
              />
            </ul>
          </li>
          <hr class="m-2 mr-4 ml-3" />
          <li class="nav-item menu-open">
            <NavLink title="Đơn hàng" />
            <ul class="nav nav-treeview">
              <NavItem
                :href="route('donhang.index', { loai: 'donmua' })"
                title="Đơn mua"
              />
              <NavItem
                :href="route('donhang.index', { loai: 'donban' })"
                title="Đơn bán"
              />
            </ul>
          </li>
          <hr class="m-2 mr-4 ml-3" />
          <li class="nav-item menu-open">
            <NavLink title="Phiếu thu chi" />
            <ul class="nav nav-treeview">
              <NavItem :href="route('loaithuchi.index')" title="Loại thu chi" />
              <NavItem
                :href="route('phieuthuchi.index', { loai: 'phieuthu' })"
                title="Phiếu thu"
              />
              <NavItem
                :href="route('phieuthuchi.index', { loai: 'phieuchi' })"
                title="Phiếu chi"
              />
            </ul>
          </li>
          <hr class="m-2 mr-4 ml-3" />
          <li class="nav-item menu-open">
            <NavLink title="Báo cáo" />
            <ul class="nav nav-treeview">
                <NavItem
                    :href="route('baocaotonkho.index')"
                    title="Nhập xuất tồn"
                />
              <NavItem
                :href="route('baocaocongno.index')"
                title="Công nợ nhà cung cấp"
              />
              <NavItem
                :href="route('baocaocongno.khachhang')"
                title="Công nợ khách hàng"
              />
                <NavItem
                    :href="route('baocaonhapxuat.index', { loai: 'nhap' })"
                    title="Báo cáo nhập"
                />
                <NavItem
                    :href="route('baocaonhapxuat.index', { loai: 'xuat' })"
                    title="Báo cáo xuất"
                />
            </ul>
          </li>
          <hr class="m-2 mr-4 ml-3" />
          <li v-if="user?.role == 0" class="nav-item menu-open mb-5">
            <NavLink title="Hệ thống" />
            <ul class="nav nav-treeview">
              <NavItem :href="route('donvi.index')" title="Danh sách đơn vị" />
              <NavItem
                :href="route('nguoidung.index')"
                title="Danh sách người dùng"
              />
            </ul>
          </li>
        </ul>
      </nav>
    </div>
  </aside>
</template>
<style scoped>
  .nav-link{
      padding: 0.1rem 1rem !important;
  }
</style>


