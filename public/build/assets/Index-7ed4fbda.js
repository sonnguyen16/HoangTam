import{h as c,i as D,j as M,o as s,b as N,d as T,a as t,e as r,w as S,f as B,u,k as V,c as d,l as O,F as j,g as w,p as x,O as h,t as l,m as A}from"./app-44f1296a.js";import{_ as E}from"./MainLayout-d75b8e7f.js";import L from"./DuAnModal-a62566cb.js";import F from"./XemDuAnModal-9ac1bdff.js";/* empty css                     *//* empty css              */import"./_plugin-vue_export-helper-c27b6911.js";const X=t("div",{class:"card shadow"},[t("div",{class:"card-body card-brc"},[t("p",{class:"txt-color mb-0 font-weight-bold"},[x("Danh mục quản lý "),t("i",{class:"fa fa-angle-right mr-2 ml-2"}),x(" Quản lý dự án")])])],-1),q={class:"card shadow card-child",style:{}},H={class:"card-body"},I={class:"row mb-3"},K={class:"col-md-2"},Q={class:"col-md-10"},R={class:"row"},U=t("div",{class:"col-md-3"},null,-1),z=t("div",{class:"col-md-6"},null,-1),G={class:"col-md-3"},J={class:"input-group"},P=t("div",{class:"input-group-append"},[t("button",{class:"btn btn-primary",type:"submit"},[t("i",{class:"fas fa-search"})])],-1),W={class:"table table-bordered table-responsive-md"},Y=t("thead",null,[t("tr",null,[t("th",null,"Tên dự án"),t("th",null,"Ngày bắt đầu"),t("th",null,"Ngày kết thúc"),t("th",null,"Người phụ trách"),t("th",null,"Mô tả"),t("th",null,"Trạng thái"),t("th",null,"Thao tác")])],-1),Z={key:0},tt=t("td",{colspan:"7",class:"text-center"},"Không có dữ liệu",-1),nt=[tt],at={key:0,class:"badge badge-warning"},et={key:1,class:"badge badge-primary"},st={key:2,class:"badge badge-success"},dt={style:{width:"9%"}},it=["onClick"],lt=["onClick"],ot=["onClick"],pt={__name:"Index",props:{du_an_list:Object,nhan_vien_list:Object},setup(m){const g=m;let p=c({id:"",ten:"",ngay_bat_dau:"",ngay_ket_thuc:"",user_id:"",nhan_vien:{},mo_ta:"",trang_thai:"",parent_id:"",children:[],files:[]}),_=c({id:"",ten:"",ngay_bat_dau:"",ngay_ket_thuc:"",user_id:"",nhan_vien:{},mo_ta:"",trang_thai:"",parent_id:"",children:[],files:[]}),i=c("");function b(n){_.value={id:"",ten:"",ngay_bat_dau:"",ngay_ket_thuc:"",user_id:"",mo_ta:"",trang_thai:"",parent_id:n,children:[],files:[]},$("#duanmodal").modal("show")}const v=D(()=>g.du_an_list);M(i,n=>{h.visit(route("duan.index",{search:n}),{preserveState:!0})});function y(n){_.value={id:n.id,ten:n.ten,ngay_bat_dau:n.ngay_bat_dau,ngay_ket_thuc:n.ngay_ket_thuc,user_id:n.user_id,mo_ta:n.mo_ta,trang_thai:n.trang_thai,parent_id:n.parent_id,children:n.children,files:n.files},$("#duanmodal").modal("show")}function k(n){confirm("Bạn có chắc chắn muốn xóa dự án này không?")&&h.delete(route("duan.delete",{id:n}),{onSuccess:()=>{h.visit(route("duan.index"))},onError:()=>{console.log(form.errors)}})}function C(n){const a=g.du_an_list.find(o=>o.id===n);console.log(a),p.value={id:a.id,ten:a.ten,ngay_bat_dau:a.ngay_bat_dau,ngay_ket_thuc:a.ngay_ket_thuc,user_id:a.user_id,mo_ta:a.mo_ta,nhan_vien:a.nhan_vien,trang_thai:a.trang_thai,parent_id:a.parent_id,children:a.children,files:a.files},$("#xemduanmodal").modal("show")}return(n,a)=>(s(),N(E,null,{default:T(()=>{var o;return[X,t("div",q,[t("div",H,[t("div",I,[t("div",K,[t("a",{onClick:a[0]||(a[0]=r(e=>b(""),["prevent"])),class:"btn btn-primary form-control"},"Thêm dự án")]),t("div",Q,[t("form",null,[t("div",R,[U,z,t("div",G,[t("div",J,[S(t("input",{"onUpdate:modelValue":a[1]||(a[1]=e=>V(i)?i.value=e:i=e),type:"text",name:"search",class:"form-control",placeholder:"Tìm kiếm dự án"},null,512),[[B,u(i)]]),P])])])])])]),t("table",W,[Y,t("tbody",null,[((o=v.value)==null?void 0:o.length)===0?(s(),d("tr",Z,nt)):(s(!0),d(j,{key:1},O(v.value,e=>(s(),d("tr",{key:e.id},[t("td",null,l(e.ten),1),t("td",null,l(new Date(e.ngay_bat_dau).toLocaleDateString()),1),t("td",null,l(new Date(e.ngay_bat_dau).toLocaleDateString()),1),t("td",null,l(e.nhan_vien.name),1),t("td",null,l(e.mo_ta),1),t("td",null,[e.trang_thai===0?(s(),d("span",at,"Chưa triển khai")):e.trang_thai===1?(s(),d("span",et,"Đang triển khai")):e.trang_thai===2?(s(),d("span",st,"Hoàn thành")):A("",!0)]),t("td",dt,[t("a",{class:"btn btn-primary btn-sm d-inline-block mr-2",onClick:r(f=>C(e.id),["prevent"])},"Xem",8,it),t("a",{class:"btn btn-primary btn-sm d-inline-block mr-2",onClick:r(f=>y(e),["prevent"])},"Sửa",8,lt),t("a",{class:"btn btn-danger btn-sm",onClick:r(f=>k(e.id),["prevent"])},"Xóa",8,ot)])]))),128))])])])]),w(L,{du_an:u(_),users:m.nhan_vien_list},null,8,["du_an","users"]),w(F,{du_an:u(p),onEdit:y,onAdd:b},null,8,["du_an"])]}),_:1}))}};export{pt as default};
