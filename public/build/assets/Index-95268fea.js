import{h as f,i as M,j as O,o as s,b as V,d as j,a as t,e as a,w as D,f as E,u as b,p as F,c as o,k as y,F as k,l as w,g as z,O as d,t as c,n as I}from"./app-0f6e209f.js";import{_ as K}from"./MainLayout-331f4731.js";import L from"./NguoiDungModal-16b525b5.js";/* empty css                     *//* empty css              */import"./_plugin-vue_export-helper-c27b6911.js";const P={class:"card shadow card-child",style:{}},R={class:"card-body"},U={class:"row mb-3"},X={class:"col-md-2"},q={class:"col-md-10"},A={class:"row"},G=t("div",{class:"col-md-3"},null,-1),H=t("div",{class:"col-md-6"},null,-1),J={class:"col-md-3"},N={class:"input-group"},Q=t("div",{class:"input-group-append"},[t("button",{class:"btn btn-primary",type:"submit"},[t("i",{class:"fas fa-search"})])],-1),W={class:"table table-bordered table-responsive-md"},Y=t("thead",null,[t("tr",null,[t("th",null,"Tên người dùng"),t("th",null,"Email"),t("th",null,"Đơn vị"),t("th",null,"Thao tác")])],-1),Z={key:0},tt=t("td",{colspan:"6",class:"text-center"},"Không có dữ liệu",-1),nt=[tt],et={key:0},st={class:"action"},ot=["onClick"],it=["onClick"],lt={class:"float-right mt-3 mb-0"},at={class:"row"},dt={class:"col-md-12 col-lg-12 text-center"},ct={key:0,class:"pagination"},rt=["onClick"],pt={__name:"Index",props:{nguoi_dung_list:Object,don_vi_list:Object},setup(_){const x=_;let r=f({id:"",name:"",email:"",password:"",don_vi_id:""}),i=f("");function C(){r.value={id:"",name:"",email:"",password:"",don_vi_id:""},$("#nguoidungmodal").modal("show")}const l=M(()=>x.nguoi_dung_list);O(i,e=>{d.visit(route("nguoidung.index",{search:e}),{preserveState:!0})});function S(e){d.visit(e,{preserveState:!0})}function B(e){console.log(i.value),r.value={id:e.id,name:e.name,email:e.email,don_vi_id:e.don_vi_id},$("#nguoidungmodal").modal("show")}function T(e){confirm("Bạn có chắc chắn muốn xóa người dùng này không?")&&d.delete(route("nguoidung.delete",{id:e}),{onSuccess:()=>{d.visit(route("nguoidung.index"))},onError:()=>{console.log(form.errors)}})}return(e,u)=>(s(),V(K,null,{default:j(()=>{var m,g,v,h;return[t("div",P,[t("div",R,[t("div",U,[t("div",X,[t("a",{onClick:a(C,["prevent"]),class:"btn btn-primary form-control"},"Thêm người dùng")]),t("div",q,[t("form",null,[t("div",A,[G,H,t("div",J,[t("div",N,[D(t("input",{"onUpdate:modelValue":u[0]||(u[0]=n=>F(i)?i.value=n:i=n),type:"text",name:"search",class:"form-control",placeholder:"Tìm kiếm người dùng"},null,512),[[E,b(i)]]),Q])])])])])]),t("table",W,[Y,t("tbody",null,[((g=(m=l.value)==null?void 0:m.data)==null?void 0:g.length)===0?(s(),o("tr",Z,nt)):(s(!0),o(k,{key:1},y((v=l.value)==null?void 0:v.data,n=>(s(),o("tr",{key:n.id},[t("td",null,c(n.name),1),t("td",null,c(n.email),1),t("td",null,[n.don_vi?(s(),o("span",et,c(n.don_vi.ten),1)):w("",!0)]),t("td",st,[t("a",{class:"btn btn-primary btn-sm d-inline-block mr-2",onClick:a(p=>B(n),["prevent"])},"Sửa",8,ot),t("a",{class:"btn btn-danger btn-sm",onClick:a(p=>T(n.id),["prevent"])},"Xóa",8,it)])]))),128))])]),t("div",lt,[t("div",at,[t("div",dt,[((h=l.value)==null?void 0:h.total)>10?(s(),o("ul",ct,[(s(!0),o(k,null,y(l.value.links.slice(1,-1),n=>(s(),o("li",{key:n,class:"page-item"},[t("a",{class:I(["page-link",{"bg-primary":n.label===l.value.current_page.toString()}]),onClick:a(p=>S(n.url),["prevent"])},c(n.label),11,rt)]))),128))])):w("",!0)])])])])]),z(L,{nguoi_dung:b(r),don_vi_list:_.don_vi_list},null,8,["nguoi_dung","don_vi_list"])]}),_:1}))}};export{pt as default};