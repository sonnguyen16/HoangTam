import{h as u,i as x,j as C,o as a,b as B,d as S,a as t,e as i,w as T,f as M,u as m,p as D,c as d,k as O,F as V,g as p,O as n,t as j}from"./app-0f6e209f.js";import{_ as E}from"./MainLayout-331f4731.js";import F from"./KhoModal-665f597f.js";import{_ as N}from"./Pagination-bf4d0ab6.js";/* empty css                     *//* empty css              */import"./_plugin-vue_export-helper-c27b6911.js";const P={class:"card shadow card-child",style:{}},I={class:"card-body"},K={class:"row mb-3"},L={class:"col-md-2"},R={class:"col-md-10"},U={class:"row"},X=t("div",{class:"col-md-3"},null,-1),q=t("div",{class:"col-md-6"},null,-1),z={class:"col-md-3"},A={class:"input-group"},G=t("div",{class:"input-group-append"},[t("button",{class:"btn btn-primary",type:"submit"},[t("i",{class:"fas fa-search"})])],-1),H={class:"table table-bordered table-responsive-md"},J=t("thead",null,[t("tr",null,[t("th",null,"Tên kho"),t("th",null,"Thao tác")])],-1),Q={key:0},W=t("td",{colspan:"6",class:"text-center"},"Không có dữ liệu",-1),Y=[W],Z={class:"action"},tt=["onClick"],et=["onClick"],dt={__name:"Index",props:{kho_list:Object},setup(v){const f=v;let l=u({id:"",ten:""}),s=u("");function k(){l.value={id:"",ten:""},$("#khomodal").modal("show")}const c=x(()=>f.kho_list);C(s,e=>{n.visit(route("kho.index",{search:e}),{preserveState:!0})});function b(e){n.visit(e,{preserveState:!0})}function g(e){l.value={id:e.id,ten:e.ten},$("#khomodal").modal("show")}function y(e){confirm("Bạn có chắc chắn muốn xóa kho này không?")&&n.delete(route("kho.delete",{id:e}),{onSuccess:()=>{n.visit(route("kho.index"))},onError:()=>{console.log(form.errors)}})}return(e,r)=>(a(),B(E,null,{default:S(()=>{var h,_;return[t("div",P,[t("div",I,[t("div",K,[t("div",L,[t("a",{onClick:i(k,["prevent"]),class:"btn btn-primary form-control"},"Thêm kho")]),t("div",R,[t("form",null,[t("div",U,[X,q,t("div",z,[t("div",A,[T(t("input",{"onUpdate:modelValue":r[0]||(r[0]=o=>D(s)?s.value=o:s=o),type:"text",name:"search",class:"form-control",placeholder:"Tìm kiếm kho"},null,512),[[M,m(s)]]),G])])])])])]),t("table",H,[J,t("tbody",null,[((h=c.value)==null?void 0:h.data.length)===0?(a(),d("tr",Q,Y)):(a(!0),d(V,{key:1},O((_=c.value)==null?void 0:_.data,o=>(a(),d("tr",{key:o.id},[t("td",null,j(o.ten),1),t("td",Z,[t("a",{class:"btn btn-primary btn-sm d-inline-block mr-2",onClick:i(w=>g(o),["prevent"])},"Sửa",8,tt),t("a",{class:"btn btn-danger btn-sm",onClick:i(w=>y(o.id),["prevent"])},"Xóa",8,et)])]))),128))])]),p(N,{data:c.value,onChangePage:b},null,8,["data"])])]),p(F,{kho:m(l)},null,8,["kho"])]}),_:1}))}};export{dt as default};