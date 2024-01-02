<script setup>
import {onMounted,  watchEffect} from "vue";
import {router, useForm} from "@inertiajs/vue3";

const props = defineProps({
    ton_kho: Object,
    san_pham_list: Object,
    kho_list: Object,
})

const form = useForm({
    id: "",
    kho_id: "",
    san_pham_id: "",
    so_luong: 0,
})

watchEffect(() => {
    form.id = props.ton_kho.id
    form.kho_id = props.ton_kho.kho_id
    $('#kho').val(props.ton_kho.kho_id).trigger('change');
    $('#san_pham').val(props.ton_kho.san_pham_id).trigger('change');
    form.san_pham_id = props.ton_kho.san_pham_id
    form.so_luong = props.ton_kho.so_luong
})
const submit = () => {
    form.post(route('tonkho.store'), {
        onSuccess: () => {
            router.visit(route('tonkho.index'))
        },
        onError: () => {
            console.log(form.errors)
        }
    })
}

onMounted(() => {
    $('#kho').select2({
        width: '100%',
        placeholder: 'Chọn kho',
    }).on('change', function (e) {
        form.kho_id = e.target.value;
    });

    $('#san_pham').select2({
        width: '100%',
        placeholder: 'Chọn sản phẩm',
    }).on('change', function (e) {
        form.san_pham_id = e.target.value;
    });
})

</script>

<template>
    <form @submit.prevent="submit">
        <div class="row">
            <input type="hidden" v-model="form.id" id="id" class="form-control"/>
            <div class="col-lg-3">
                <div class="form-record">
                    <label for="name">Chọn kho</label>
                    <select class="form-control" v-model="form.kho_id" id="kho">
                        <option v-for="kho in kho_list" :value="kho.id">{{ kho.ten }}</option>
                    </select>
                </div>
            </div>
            <div class="col-lg-3">
                <div class="form-record">
                    <label for="name">Sản phẩm</label>
                    <select class="form-control" v-model="form.san_pham_id" id="san_pham">
                        <option v-for="sp in san_pham_list" :value="sp.id">{{ sp.ten }}</option>
                    </select>
                </div>
            </div>
            <div class="col-lg-3">
                <div class="form-record">
                    <label for="name">Số lượng</label>
                    <input type="number" v-model="form.so_luong" id="so_luong" class="form-control"/>
                </div>
            </div>
            <div class="col-lg-3">
                <button class="btn btn-primary" @click="submit">Lưu</button>
            </div>
        </div>
    </form>
</template>

<style scoped>

</style>
