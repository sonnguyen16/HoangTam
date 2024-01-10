<script setup>
import {onMounted, ref, watchEffect} from "vue";
import {router, useForm} from "@inertiajs/vue3";
import {cloneDeep} from "lodash";

const props = defineProps({
    san_pham: Object,
    don_vi_tinh_list: Object,
    san_pham_list: Object,
    loai_san_pham_list: Object,
})

const form = useForm({
    id: "",
    ma: "",
    ten: "",
    mo_ta: "",
    gia_ban: 0,
    gia_nhap: 0,
    don_vi_tinh_id: "",
    loai_san_pham_id: "",
    dinh_muc: [],
})

let item = ref({
    id: "",
    san_pham_id: props.san_pham.id,
    san_pham: {},
    so_luong: 0,
    don_vi_tinh: {},
})

watchEffect(() => {
    form.id = props.san_pham.id
    form.ma = props.san_pham.ma
    form.ten = props.san_pham.ten
    form.gia_ban = props.san_pham.gia_ban
    form.gia_nhap = props.san_pham.gia_nhap
    form.don_vi_tinh_id = props.san_pham.don_vi_tinh_id
    form.loai_san_pham_id = props.san_pham.loai_san_pham_id
    form.mo_ta = props.san_pham.mo_ta
    form.dinh_muc = props.san_pham.dinh_muc
})
const submit = () => {
    form.post(route('sanpham.store'), {
        onSuccess: () => {
            $('#sanphammodal').modal('hide');
            router.visit(route('sanpham.index'))
        },
        onError: () => {
            console.log(form.errors)
        }
    })
}

const closeModal = () => {
    $('#sanphammodal').modal('hide');
    form.reset();
    form.clearErrors();
}

function removeDinhMuc(id) {
    form.dinh_muc = form.dinh_muc.filter(dm => dm.id !== id)
}

function addDinhMuc(){
    if(!item.value.san_pham){
        return;
    }

    if(item.value.so_luong === 0){
        return;
    }

    form.dinh_muc.push({
        id: "",
        san_pham_id: props.san_pham.id,
        san_pham: cloneDeep(item.value.san_pham),
        so_luong: item.value.so_luong,
        don_vi_tinh: item.value.san_pham.don_vi_tinh,
    })

    item.value = {
        id: "",
        san_pham_id: props.san_pham.id,
        san_pham: {},
        so_luong: 0,
        gia: 0,
        don_vi_tinh: {},
    }

    $('#sanpham').val('').trigger('change');
}

onMounted(() => {
    $('#sanpham').select2().on('change', function () {
        item.value.san_pham = props.san_pham_list.data.find(sp => String(sp.id) === $(this).val())
    })
})

</script>

<template>
    <div id="sanphammodal" class="modal fade" role="dialog">
        <div class="modal-dialog modal-lg" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="close" @click.prevent="closeModal">&times;</button>
                </div>
                <form @submit.prevent="submit">
                    <div class="modal-body">
                        <input type="hidden" v-model="form.id" id="id" class="form-control"/>

                        <div class="form-group-container">
                            <div class="form-group-title">
                                <span v-if="form.id" class="txt-color mb-0 font-weight-bold">Sửa sản phẩm</span>
                                <span v-else class="txt-color mb-0 font-weight-bold">Thêm sản phẩm</span>
                            </div>

                            <div class="form-group">
                                <label for="name">Mã sản phẩm</label>
                                <div>
                                    <input :class="{ 'border-danger' : form.errors.ma }" type="text" v-model="form.ma" class="form-control" id="ten" />
                                    <!--                                    <InputError :message="form.errors.ten" />-->
                                </div>
                            </div>

                            <div class="form-group">
                                <label for="name">Tên sản phẩm</label>
                                <div>
                                    <input :class="{ 'border-danger' : form.errors.ten }" type="text" v-model="form.ten" class="form-control" id="ten" />
<!--                                    <InputError :message="form.errors.ten" />-->
                                </div>
                            </div>


                            <div class="form-group">
                                <label for="name">Mô tả</label>
                                <div>
                                    <textarea :class="{ 'border-danger' : form.errors.mo_ta }" type="text" v-model="form.mo_ta" class="form-control" id="mo_ta"></textarea>
<!--                                    <InputError :message="form.errors.mo_ta" />-->
                                </div>
                            </div>



                            <div class="form-group">
                                <label for="name">Giá nhập</label>
                                <div>
                                    <input :class="{ 'border-danger' : form.errors.gia_nhap }" type="number" v-model="form.gia_nhap" class="form-control" id="gia_nhap" />
<!--                                    <InputError :message="form.errors.gia_nhap" />-->
                                </div>
                            </div>


                            <div class="form-group">
                                <label for="name">Giá bán</label>
                                <div>
                                    <input :class="{ 'border-danger' : form.errors.gia_ban }" type="number" v-model="form.gia_ban" class="form-control" id="gia_ban" />
<!--                                    <InputError :message="form.errors.gia_ban" />-->
                                </div>
                            </div>


                            <div class="form-group">
                                <label>Đơn vị tính</label>
                                <div>
                                    <select :class="{ 'border-danger' : form.errors.don_vi_tinh_id }" v-model="form.don_vi_tinh_id" class="form-control" id="don_vi_tinh_id">
                                        <option value="">Chọn đơn vị tính</option>
                                        <option v-for="don_vi_tinh in don_vi_tinh_list" :key="don_vi_tinh.id" :value="don_vi_tinh.id">
                                            {{ don_vi_tinh.ten }}
                                        </option>
                                    </select>
<!--                                    <InputError :message="form.errors.don_vi_tinh_id" />-->
                                </div>
                            </div>

                            <div class="form-group">
                                <label>Loại sản phẩm</label>
                                <div>
                                    <select :class="{ 'border-danger' : form.errors.loai_san_pham_id }" v-model="form.loai_san_pham_id" class="form-control" id="don_vi_tinh_id">
                                        <option value="">Chọn loại sản phẩm</option>
                                        <option v-for="loai_san_pham in loai_san_pham_list" :key="loai_san_pham.id" :value="loai_san_pham.id">
                                            {{ loai_san_pham.ten }}
                                        </option>
                                    </select>
<!--                                    <InputError :message="form.errors.loai_san_pham_id" />-->
                                </div>
                            </div>
                        </div>

                        <div class="form-group-container mt-4">
                            <div class="form-group-title">
                                <span>Định mức</span>
                            </div>

                            <div class="row mb-4">
                                <div class="col-5">
                                    <div class="form-record">
                                        <label>Sản phẩm</label>
                                        <select class="form-control" v-model="item.san_pham" id="sanpham">
                                            <option v-for="sp in san_pham_list.data" :value="sp.id">{{ sp.ten }}</option>
                                        </select>
                                    </div>
                                </div>
                                <div class="col-5">
                                    <div class="form-record">
                                        <label for="name">Số lượng</label>
                                        <input type="number" v-model="item.so_luong" class="form-control" id="ghi_chu" />
                                    </div>
                                </div>
                                <div class="col-2">
                                    <button @click.prevent="addDinhMuc()"  class="btn btn-primary form-control">Thêm</button>
                                </div>
                            </div>
                            <table class="table table-bordered  table-responsive-md">
                                <thead>
                                <tr>
                                    <th>Mã sản phẩm</th>
                                    <th>Tên sản phẩm</th>
                                    <th>Số lượng</th>
                                    <th>Đơn vị tính</th>
                                    <th>Thao tác</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr v-if="form.dinh_muc.length === 0">
                                    <td colspan="6" class="text-center">Không có dữ liệu</td>
                                </tr>

                                <tr :key="cthd.id" v-else v-for="cthd in form.dinh_muc">
                                    <td class="ma">{{ cthd?.san_pham?.ma }}</td>
                                    <td class="ten">{{ cthd?.san_pham?.ten }}</td>
                                    <td class="quantity">{{ cthd?.so_luong }}</td>
                                    <td class="quantity">{{ cthd?.don_vi_tinh?.ten }}</td>
                                    <td class="action">
                                        <a class="btn btn-danger btn-sm" @click.prevent="removeDinhMuc(cthd.id)">
                                            <i class="fas fa-trash"></i>
                                        </a>
                                    </td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="submit" :disabled="form.processing" class="btn btn-primary" >Lưu</button>
                        <button type="button" class="btn btn-default" @click.prevent="closeModal">Hủy</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<style scoped>

</style>
