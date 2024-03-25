<script setup>
    // css
    import '@/assets/admin/plugins/fontawesome-free/css/all.css'
    import '@/assets/admin/dist/css/adminlte.min.css'
    import '@/assets/plugins/select2/css/select2.min.css'
    import '@/assets/plugins/toastr/toastr.min.css'
    import '@/assets/css/style.css'
    // js
    import '@/assets/admin/plugins/jquery/jquery.min.js'
    import '@/assets/admin/plugins/bootstrap/js/bootstrap.bundle.min.js'
    import '@/assets/admin/dist/js/adminlte.min.js'
    import '@/assets/plugins/select2/js/select2.full.min.js'
    import '@/assets/plugins/toastr/toastr.min.js'
    // components
    import Navbar from "@/Components/app/Navbar.vue";
    import Sidebar from "@/Components/app/Sidebar.vue";

</script>

<template>
    <body class="hold-transition sidebar-mini layout-fixed">
        <div class="wrapper">
            <Navbar/>
            <Sidebar/>
            <div class="content-wrapper">
                <section class="content" >
                    <slot/>
                </section>
            </div>
        </div>
    </body>
</template>

