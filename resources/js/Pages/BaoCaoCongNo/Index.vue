<script setup>

import MainLayout from "@/Layouts/MainLayout.vue";
import {computed, ref, watch} from "vue";
import {router} from "@inertiajs/vue3";

const props = defineProps({
    nha_cung_cap_list: Object,
})

let search = ref("")

const allData = computed( () => {
    return props.nha_cung_cap_list
})

watch(search, (value) => {
    router.visit(route('nhacungcap.index', {search: value}), {
        preserveState: true
    })
})

function changePage(url) {
    router.visit(url, {
        preserveState: true
    })
}

</script>

<template>
    <MainLayout>
        <div class="card shadow">
            <div class="card-body card-brc">
                <p class="txt-color mb-0 font-weight-bold">Phiếu thu chi <i
                    class="fa fa-angle-right mr-2 ml-2"></i> Báo cáo công nợ</p>
            </div>
        </div>

        <div class="card shadow card-child" style="">
            <div class="card-body">
                <div class="row mb-3">
                    <div class="col-md-12">
                        <form >
                            <div class="row">
                                <div class="col-md-3">
                                </div>
                                <div class="col-md-6"></div>
                                <div class="col-md-3">
                                    <div class="input-group">
                                        <input v-model="search" type="text" name="search"
                                               class="form-control"
                                               placeholder="Tìm kiếm nhà cung cấp">
                                        <div class="input-group-append">
                                            <button class="btn btn-primary" type="submit">
                                                <i class="fas fa-search"></i>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
                <table class="table table-bordered  table-responsive-md">
                    <thead>
                    <tr>
                        <th>Tên nhà cung cấp</th>
                        <th>Số điện thoại</th>
                        <th>Địa chỉ</th>
                        <th>Tồn đầu</th>
                        <th>Chi</th>
                        <th>Tồn cuối</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr v-if="allData?.data.length === 0">
                        <td colspan="6" class="text-center">Không có dữ liệu</td>
                    </tr>

                    <tr :key="kh.id" v-else v-for="kh in allData?.data">
                        <td>{{kh.ten}}</td>
                        <td>{{kh.dien_thoai}}</td>
                        <td>{{kh.dia_chi}}</td>
                        <td class="quantity">{{kh.ton_dau}}</td>
                        <td class="money">{{kh.chi.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}}</td>
                        <td class="quantity">{{kh.ton_cuoi}}</td>
                    </tr>
                    </tbody>
                </table>
                <div class="float-right mt-3 mb-0">
                    <div class="row">
                        <div class="col-md-12 col-lg-12 text-center">
                            <ul v-if="allData?.total > 10" class="pagination">
                                <li v-for="pageNumber in allData.links.slice(1, -1)" :key="pageNumber" class="page-item">
                                    <a
                                        class="page-link"
                                        :class="{ 'bg-primary': pageNumber.label === allData.current_page.toString() }"
                                        @click.prevent="changePage(pageNumber.url)"
                                    >
                                        {{ pageNumber.label }}
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

            </div>
        </div>

    </MainLayout>
</template>
<style scoped>

</style>
