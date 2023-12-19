<script setup>
    // css
    import '@/assets/admin/plugins/fontawesome-free/css/all.min.css'
    import '@/assets/admin/dist/css/adminlte.min.css'
    import '@/assets/css/style.css'
    // js
    import '@/assets/admin/plugins/jquery/jquery.min.js'
    import '@/assets/admin/plugins/bootstrap/js/bootstrap.bundle.min.js'
    import '@/assets/admin/dist/js/adminlte.min.js'

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
                <section class="content pt-3">
                    <div class="container-fluid">
                        <div class="card shadow bg-light-blue card-container">
                            <div class="card-body">
                                <slot/>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    </body>
</template>

