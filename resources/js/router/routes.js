import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    {
        path: '/khachhang',
        name: 'khachhang',
        component: () => import('@/Pages/KhachHang/Index.vue'),
        default: true
    },
    {
        path: '/nhacungcap',
        name: 'nhacungcap',
        component: () => import('@/Pages/NhaCungCap/Index.vue')
    },
    {
        path: '/sanpham',
        name: 'sanpham',
        component: () => import('@/Pages/SanPham/Index.vue')
    },
    {
        path: '/kho',
        name: 'khachhang',
        component: () => import('@/Pages/Kho/Index.vue')
    },
    {
        path: '/donvitinh',
        name: 'donvitinh',
        component: () => import('@/Pages/DonViTinh/Index.vue')
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router
