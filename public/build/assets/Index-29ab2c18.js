import{h as _,i as C,j as T,o as e,b as B,d as D,a as t,e as d,w as S,f as M,u as m,p as V,c as i,k as N,F as O,g as p,m as v,O as l,t as P}from"./app-5cd23246.js";import{_ as j}from"./MainLayout-40f47581.js";import E from"./LoaiThuChiModal-b92186d4.js";import{_ as F}from"./Pagination-1424a50b.js";/* empty css                     *//* empty css              */import"./_plugin-vue_export-helper-c27b6911.js";const L=t("div",{class:"card shadow"},[t("div",{class:"card-body card-brc"},[t("p",{class:"txt-color mb-0 font-weight-bold"},[v("Phiếu thu chi "),t("i",{class:"fa fa-angle-right mr-2 ml-2"}),v(" Quản lý loại thu chi")])])],-1),I={class:"card shadow card-child",style:{}},K={class:"card-body"},Q={class:"row mb-3"},R={class:"col-md-2"},U={class:"col-md-10"},X={class:"row"},q=t("div",{class:"col-md-3"},null,-1),z=t("div",{class:"col-md-6"},null,-1),A={class:"col-md-3"},G={class:"input-group"},H=t("div",{class:"input-group-append"},[t("button",{class:"btn btn-primary",type:"submit"},[t("i",{class:"fas fa-search"})])],-1),J={class:"table table-bordered table-responsive-md"},W=t("thead",null,[t("tr",null,[t("th",null,"Tên loại thu chi"),t("th",null,"Loại"),t("th",null,"Thao tác")])],-1),Y={key:0},Z=t("td",{colspan:"3",class:"text-center"},"Không có dữ liệu",-1),tt=[Z],ot={key:0},st={key:1},et={class:"action"},at=["onClick"],it=["onClick"],_t={__name:"Index",props:{loai_thu_chi_list:Object},setup(f){const b=f;let c=_({id:"",ten:"",loai:""}),a=_("");function g(){c.value={id:"",ten:"",loai:""},$("#loaithuchimodal").modal("show")}const n=C(()=>b.loai_thu_chi_list);T(a,o=>{l.visit(route("loaithuchi.index",{search:o}),{preserveState:!0})});function y(o){l.visit(o,{preserveState:!0})}function w(o){c.value={id:o.id,ten:o.ten,loai:o.loai},$("#loaithuchimodal").modal("show")}function x(o){confirm("Bạn có chắc chắn muốn xóa loại thu chi này không?")&&l.delete(route("loaithuchi.delete",{id:o}),{onSuccess:()=>{l.visit(route("loaithuchi.index"))},onError:()=>{console.log(form.errors)}})}return(o,r)=>(e(),B(j,null,{default:D(()=>{var h,u;return[L,t("div",I,[t("div",K,[t("div",Q,[t("div",R,[t("a",{onClick:d(g,["prevent"]),class:"btn btn-primary form-control"},"Thêm loại thu chi")]),t("div",U,[t("form",null,[t("div",X,[q,z,t("div",A,[t("div",G,[S(t("input",{"onUpdate:modelValue":r[0]||(r[0]=s=>V(a)?a.value=s:a=s),type:"text",name:"search",class:"form-control",placeholder:"Tìm kiếm loại thu chi"},null,512),[[M,m(a)]]),H])])])])])]),t("table",J,[W,t("tbody",null,[((h=n.value)==null?void 0:h.data.length)===0?(e(),i("tr",Y,tt)):(e(!0),i(O,{key:1},N((u=n.value)==null?void 0:u.data,s=>(e(),i("tr",{key:s.id},[t("td",null,P(s.ten),1),t("td",null,[s.loai===0?(e(),i("span",ot,"Thu")):(e(),i("span",st,"Chi"))]),t("td",et,[t("a",{class:"btn btn-primary btn-sm d-inline-block mr-2",onClick:d(k=>w(s),["prevent"])},"Sửa",8,at),t("a",{class:"btn btn-danger btn-sm",onClick:d(k=>x(s.id),["prevent"])},"Xóa",8,it)])]))),128))])]),p(F,{allData:n.value,onChangePage:y},null,8,["allData"])])]),p(E,{loai_thu_chi:m(c)},null,8,["loai_thu_chi"])]}),_:1}))}};export{_t as default};
