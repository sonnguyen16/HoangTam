import{h as u,i as C,j as T,o as a,b as B,d as S,a as t,e as i,w as D,f as M,u as m,k as V,c as d,l as N,F as O,g as p,p as v,O as n,t as j}from"./app-44f1296a.js";import{_ as E}from"./MainLayout-d75b8e7f.js";import F from"./KhoModal-b413cf54.js";import{_ as P}from"./Pagination-cd50869f.js";/* empty css                     *//* empty css              */const q=t("div",{class:"card shadow"},[t("div",{class:"card-body card-brc"},[t("p",{class:"txt-color mb-0 font-weight-bold"},[v("Danh mục quản lý "),t("i",{class:"fa fa-angle-right mr-2 ml-2"}),v(" Quản lý kho")])])],-1),I={class:"card shadow card-child",style:{}},K={class:"card-body"},L={class:"row mb-3"},Q={class:"col-md-2"},R={class:"col-md-10"},U={class:"row"},X=t("div",{class:"col-md-3"},null,-1),z=t("div",{class:"col-md-6"},null,-1),A={class:"col-md-3"},G={class:"input-group"},H=t("div",{class:"input-group-append"},[t("button",{class:"btn btn-primary",type:"submit"},[t("i",{class:"fas fa-search"})])],-1),J={class:"table table-bordered table-responsive-md"},W=t("thead",null,[t("tr",null,[t("th",null,"Tên kho"),t("th",null,"Thao tác")])],-1),Y={key:0},Z=t("td",{colspan:"6",class:"text-center"},"Không có dữ liệu",-1),tt=[Z],st={class:"action"},et=["onClick"],ot=["onClick"],rt={__name:"Index",props:{kho_list:Object},setup(f){const b=f;let l=u({id:"",ten:""}),o=u("");function k(){l.value={id:"",ten:""},$("#khomodal").modal("show")}const c=C(()=>b.kho_list);T(o,s=>{n.visit(route("kho.index",{search:s}),{preserveState:!0})});function g(s){n.visit(s,{preserveState:!0})}function y(s){l.value={id:s.id,ten:s.ten},$("#khomodal").modal("show")}function w(s){confirm("Bạn có chắc chắn muốn xóa kho này không?")&&n.delete(route("kho.delete",{id:s}),{onSuccess:()=>{n.visit(route("kho.index"))},onError:()=>{console.log(form.errors)}})}return(s,r)=>(a(),B(E,null,{default:S(()=>{var h,_;return[q,t("div",I,[t("div",K,[t("div",L,[t("div",Q,[t("a",{onClick:i(k,["prevent"]),class:"btn btn-primary form-control"},"Thêm kho")]),t("div",R,[t("form",null,[t("div",U,[X,z,t("div",A,[t("div",G,[D(t("input",{"onUpdate:modelValue":r[0]||(r[0]=e=>V(o)?o.value=e:o=e),type:"text",name:"search",class:"form-control",placeholder:"Tìm kiếm kho"},null,512),[[M,m(o)]]),H])])])])])]),t("table",J,[W,t("tbody",null,[((h=c.value)==null?void 0:h.data.length)===0?(a(),d("tr",Y,tt)):(a(!0),d(O,{key:1},N((_=c.value)==null?void 0:_.data,e=>(a(),d("tr",{key:e.id},[t("td",null,j(e.ten),1),t("td",st,[t("a",{class:"btn btn-primary btn-sm d-inline-block mr-2",onClick:i(x=>y(e),["prevent"])},"Sửa",8,et),t("a",{class:"btn btn-danger btn-sm",onClick:i(x=>w(e.id),["prevent"])},"Xóa",8,ot)])]))),128))])]),p(P,{data:c.value,onChangePage:g},null,8,["data"])])]),p(F,{kho:m(l)},null,8,["kho"])]}),_:1}))}};export{rt as default};
