import{h,i as x,j as C,o,b as B,d as S,a as t,e as c,w as T,f as M,u as p,p as D,c as d,k as O,F as V,g as u,O as n,t as j}from"./app-0f6e209f.js";import{_ as E}from"./MainLayout-331f4731.js";import F from"./LoaiSanPhamModal-55c5845c.js";import{_ as N}from"./Pagination-bf4d0ab6.js";/* empty css                     *//* empty css              */import"./_plugin-vue_export-helper-c27b6911.js";const P={class:"card shadow card-child",style:{}},I={class:"card-body"},K={class:"row mb-3"},L={class:"col-md-2"},R={class:"col-md-10"},U={class:"row"},X=t("div",{class:"col-md-3"},null,-1),q=t("div",{class:"col-md-6"},null,-1),z={class:"col-md-3"},A={class:"input-group"},G=t("div",{class:"input-group-append"},[t("button",{class:"btn btn-primary",type:"submit"},[t("i",{class:"fas fa-search"})])],-1),H={class:"table table-bordered table-responsive-md"},J=t("thead",null,[t("tr",null,[t("th",null,"Tên loại sản phẩm"),t("th",null,"Thao tác")])],-1),Q={key:0},W=t("td",{colspan:"6",class:"text-center"},"Không có dữ liệu",-1),Y=[W],Z={class:"action"},tt=["onClick"],st=["onClick"],dt={__name:"Index",props:{loai_san_pham_list:Object},setup(v){const f=v;let l=h({id:"",ten:""}),e=h("");function b(){l.value={id:"",ten:""},$("#loaisanphammodal").modal("show")}const i=x(()=>f.loai_san_pham_list);C(e,s=>{n.visit(route("loaisanpham.index",{search:s}),{preserveState:!0})});function g(s){n.visit(s,{preserveState:!0})}function y(s){l.value={id:s.id,ten:s.ten},$("#loaisanphammodal").modal("show")}function k(s){confirm("Bạn có chắc chắn muốn xóa loại sản phẩm này không?")&&n.delete(route("loaisanpham.delete",{id:s}),{onSuccess:()=>{n.visit(route("loaisanpham.index"))},onError:()=>{console.log(form.errors)}})}return(s,r)=>(o(),B(E,null,{default:S(()=>{var _,m;return[t("div",P,[t("div",I,[t("div",K,[t("div",L,[t("a",{onClick:c(b,["prevent"]),class:"btn btn-primary form-control"},"Thêm loại sản phẩm")]),t("div",R,[t("form",null,[t("div",U,[X,q,t("div",z,[t("div",A,[T(t("input",{"onUpdate:modelValue":r[0]||(r[0]=a=>D(e)?e.value=a:e=a),type:"text",name:"search",class:"form-control",placeholder:"Tìm kiếm loại sản phẩm"},null,512),[[M,p(e)]]),G])])])])])]),t("table",H,[J,t("tbody",null,[((_=i.value)==null?void 0:_.data.length)===0?(o(),d("tr",Q,Y)):(o(!0),d(V,{key:1},O((m=i.value)==null?void 0:m.data,a=>(o(),d("tr",{key:a.id},[t("td",null,j(a.ten),1),t("td",Z,[t("a",{class:"btn btn-primary btn-sm d-inline-block mr-2",onClick:c(w=>y(a),["prevent"])},"Sửa",8,tt),t("a",{class:"btn btn-danger btn-sm",onClick:c(w=>k(a.id),["prevent"])},"Xóa",8,st)])]))),128))])]),u(N,{data:i.value,onChangePage:g},null,8,["data"])])]),u(F,{loai_san_pham:p(l)},null,8,["loai_san_pham"])]}),_:1}))}};export{dt as default};