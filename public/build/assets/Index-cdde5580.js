import{h as b,i as M,j as O,o as e,b as j,d as D,a as t,e as a,w as E,f as F,u as f,k as z,c as o,l as y,F as w,m as k,g as H,p as x,O as d,t as c,n as I}from"./app-44f1296a.js";import{_ as K}from"./MainLayout-d75b8e7f.js";import L from"./NguoiDungModal-735eec6a.js";/* empty css                     *//* empty css              */const N=t("div",{class:"card shadow"},[t("div",{class:"card-body card-brc"},[t("p",{class:"txt-color mb-0 font-weight-bold"},[x("Hệ thống "),t("i",{class:"fa fa-angle-right mr-2 ml-2"}),x(" Quản lý người dùng")])])],-1),P={class:"card shadow card-child",style:{}},Q={class:"card-body"},R={class:"row mb-3"},U={class:"col-md-2"},X={class:"col-md-10"},q={class:"row"},A=t("div",{class:"col-md-3"},null,-1),G=t("div",{class:"col-md-6"},null,-1),J={class:"col-md-3"},W={class:"input-group"},Y=t("div",{class:"input-group-append"},[t("button",{class:"btn btn-primary",type:"submit"},[t("i",{class:"fas fa-search"})])],-1),Z={class:"table table-bordered table-responsive-md"},tt=t("thead",null,[t("tr",null,[t("th",null,"Tên người dùng"),t("th",null,"Email"),t("th",null,"Đơn vị"),t("th",null,"Thao tác")])],-1),nt={key:0},st=t("td",{colspan:"6",class:"text-center"},"Không có dữ liệu",-1),et=[st],ot={key:0},lt={class:"action"},it=["onClick"],at=["onClick"],dt={class:"float-right mt-3 mb-0"},ct={class:"row"},rt={class:"col-md-12 col-lg-12 text-center"},_t={key:0,class:"pagination"},ut=["onClick"],bt={__name:"Index",props:{nguoi_dung_list:Object,don_vi_list:Object},setup(_){const C=_;let r=b({id:"",name:"",email:"",password:"",don_vi_id:""}),l=b("");function S(){r.value={id:"",name:"",email:"",password:"",don_vi_id:""},$("#nguoidungmodal").modal("show")}const i=M(()=>C.nguoi_dung_list);O(l,s=>{d.visit(route("nguoidung.index",{search:s}),{preserveState:!0})});function T(s){d.visit(s,{preserveState:!0})}function B(s){console.log(l.value),r.value={id:s.id,name:s.name,email:s.email,don_vi_id:s.don_vi_id},$("#nguoidungmodal").modal("show")}function V(s){confirm("Bạn có chắc chắn muốn xóa người dùng này không?")&&d.delete(route("nguoidung.delete",{id:s}),{onSuccess:()=>{d.visit(route("nguoidung.index"))},onError:()=>{console.log(form.errors)}})}return(s,u)=>(e(),j(K,null,{default:D(()=>{var m,g,v,h;return[N,t("div",P,[t("div",Q,[t("div",R,[t("div",U,[t("a",{onClick:a(S,["prevent"]),class:"btn btn-primary form-control"},"Thêm người dùng")]),t("div",X,[t("form",null,[t("div",q,[A,G,t("div",J,[t("div",W,[E(t("input",{"onUpdate:modelValue":u[0]||(u[0]=n=>z(l)?l.value=n:l=n),type:"text",name:"search",class:"form-control",placeholder:"Tìm kiếm người dùng"},null,512),[[F,f(l)]]),Y])])])])])]),t("table",Z,[tt,t("tbody",null,[((g=(m=i.value)==null?void 0:m.data)==null?void 0:g.length)===0?(e(),o("tr",nt,et)):(e(!0),o(w,{key:1},y((v=i.value)==null?void 0:v.data,n=>(e(),o("tr",{key:n.id},[t("td",null,c(n.name),1),t("td",null,c(n.email),1),t("td",null,[n.don_vi?(e(),o("span",ot,c(n.don_vi.ten),1)):k("",!0)]),t("td",lt,[t("a",{class:"btn btn-primary btn-sm d-inline-block mr-2",onClick:a(p=>B(n),["prevent"])},"Sửa",8,it),t("a",{class:"btn btn-danger btn-sm",onClick:a(p=>V(n.id),["prevent"])},"Xóa",8,at)])]))),128))])]),t("div",dt,[t("div",ct,[t("div",rt,[((h=i.value)==null?void 0:h.total)>10?(e(),o("ul",_t,[(e(!0),o(w,null,y(i.value.links.slice(1,-1),n=>(e(),o("li",{key:n,class:"page-item"},[t("a",{class:I(["page-link",{"bg-primary":n.label===i.value.current_page.toString()}]),onClick:a(p=>T(n.url),["prevent"])},c(n.label),11,ut)]))),128))])):k("",!0)])])])])]),H(L,{nguoi_dung:f(r),don_vi_list:_.don_vi_list},null,8,["nguoi_dung","don_vi_list"])]}),_:1}))}};export{bt as default};
