import{h as g,i as T,j as V,o as i,b as M,d as N,a as n,e as d,w as O,f as j,u as b,p as D,c as _,k as E,F as P,g as f,O as s,t as o}from"./app-f64b3015.js";import{_ as F}from"./MainLayout-6535bde7.js";import I from"./NhanVienModal-3472b949.js";import{_ as K}from"./Pagination-d612a44f.js";/* empty css                     *//* empty css              */import"./_plugin-vue_export-helper-c27b6911.js";const L={class:"card shadow card-child",style:{}},R={class:"card-body"},U={class:"row mb-3"},X={class:"col-md-2"},q={class:"col-md-10"},z={class:"row"},A=n("div",{class:"col-md-3"},null,-1),G=n("div",{class:"col-md-6"},null,-1),H={class:"col-md-3"},J={class:"input-group"},Q=n("div",{class:"input-group-append"},[n("button",{class:"btn btn-primary",type:"submit"},[n("i",{class:"fas fa-search"})])],-1),W={class:"table table-bordered table-responsive-md"},Y=n("thead",null,[n("tr",null,[n("th",null,"Tên nhân viên"),n("th",null,"Email"),n("th",null,"Địa chỉ"),n("th",null,"Phòng ban"),n("th",null,"Thao tác")])],-1),Z={key:0},k=n("td",{colspan:"6",class:"text-center"},"Không có dữ liệu",-1),nn=[k],an={class:"action"},en=["onClick"],tn=["onClick"],hn={__name:"Index",props:{nhan_vien_list:Object,phong_ban_list:Object},setup(r){const y=r;let l=g({id:"",name:"",email:"",password:"",phong_ban_id:"",dia_chi:"",dien_thoai:"",cccd:"",ngay_cap:"",ghi_chu:"",muc_luong:0,hinh_anh:""}),t=g("");function w(){l.value={id:"",name:"",email:"",password:"",phong_ban_id:"",dia_chi:"",dien_thoai:"",cccd:"",ngay_cap:"",ghi_chu:"",muc_luong:0,hinh_anh:""},$("#nhanvienmodal").modal("show")}const c=T(()=>y.nhan_vien_list);V(t,a=>{s.visit(route("nhanvien.index",{search:a}),{preserveState:!0})});function x(a){s.visit(a,{preserveState:!0})}function C(a){console.log(t.value),l.value={id:a.id,name:a.name,email:a.email,password:"",phong_ban_id:a.phong_ban_id,dia_chi:a.dia_chi,dien_thoai:a.dien_thoai,cccd:a.cccd,ngay_cap:a.ngay_cap,ghi_chu:a.ghi_chu,muc_luong:a.muc_luong,hinh_anh:a.hinh_anh},$("#nhanvienmodal").modal("show")}function B(a){confirm("Bạn có chắc chắn muốn xóa nhân viên này không?")&&s.delete(route("NhanVien.delete",{id:a}),{onSuccess:()=>{s.visit(route("nhanvien.index"))},onError:()=>{console.log(form.errors)}})}return(a,h)=>(i(),M(F,null,{default:N(()=>{var u,m,p;return[n("div",L,[n("div",R,[n("div",U,[n("div",X,[n("a",{onClick:d(w,["prevent"]),class:"btn btn-primary form-control"},"Thêm nhân viên")]),n("div",q,[n("form",null,[n("div",z,[A,G,n("div",H,[n("div",J,[O(n("input",{"onUpdate:modelValue":h[0]||(h[0]=e=>D(t)?t.value=e:t=e),type:"text",name:"search",class:"form-control",placeholder:"Tìm kiếm nhân viên"},null,512),[[j,b(t)]]),Q])])])])])]),n("table",W,[Y,n("tbody",null,[((m=(u=c.value)==null?void 0:u.data)==null?void 0:m.length)===0?(i(),_("tr",Z,nn)):(i(!0),_(P,{key:1},E((p=c.value)==null?void 0:p.data,e=>{var v;return i(),_("tr",{key:e.id},[n("td",null,o(e.name),1),n("td",null,o(e.email),1),n("td",null,o(e.dia_chi),1),n("td",null,o((v=e.phong_ban)==null?void 0:v.ten),1),n("td",an,[n("a",{class:"btn btn-primary btn-sm d-inline-block mr-2",onClick:d(S=>C(e),["prevent"])},"Sửa",8,en),n("a",{class:"btn btn-danger btn-sm",onClick:d(S=>B(e.id),["prevent"])},"Xóa",8,tn)])])}),128))])]),f(K,{data:c.value,onChangePage:x},null,8,["data"])])]),f(I,{nhan_vien:b(l),phong_ban_list:r.phong_ban_list},null,8,["nhan_vien","phong_ban_list"])]}),_:1}))}};export{hn as default};
