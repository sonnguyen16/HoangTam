import{h as c,i as w,j as C,o as e,b as D,d as x,a as t,e as b,w as T,f as N,u,p as M,c as s,k as S,F as B,g as y,O,t as l,l as V}from"./app-f64b3015.js";import{_ as j}from"./MainLayout-6535bde7.js";import k from"./DuAnModal-6c38d2cb.js";import L from"./ChiTiet-7ac824c6.js";/* empty css                     *//* empty css              */import"./_plugin-vue_export-helper-c27b6911.js";/* empty css                                                                 */const A={class:"card shadow card-child",style:{}},E={class:"card-body"},F={class:"row"},R={class:"col-md-12"},H={class:"row"},I={class:"col-md-1"},K={class:"col-md-3"},U={class:"input-group"},q=t("div",{class:"input-group-append"},[t("button",{class:"btn btn-primary",type:"submit"},[t("i",{class:"fas fa-search"})])],-1),z={class:"table table-bordered table-responsive-md mt-3"},G=t("thead",null,[t("tr",null,[t("th",null,"Tên dự án"),t("th",null,"Ngày bắt đầu"),t("th",null,"Ngày kết thúc"),t("th",null,"Người phụ trách"),t("th",null,"Trạng thái"),t("th",null,"Thao tác")])],-1),J={key:0},P=t("td",{colspan:"7",class:"text-center"},"Không có dữ liệu",-1),Q=[P],W={key:0,class:"badge badge-warning"},X={key:1,class:"badge badge-primary"},Y={key:2,class:"badge badge-success"},Z={style:{width:"8%"}},tt=["href"],at=["onClick"],ct={__name:"Index2",props:{du_an_list:Object,nhan_vien_list:Object},setup(_){const v=_;let h=c({id:"",ten:"",ngay_bat_dau:"",ngay_ket_thuc:"",user_id:"",nhan_vien:{},mo_ta:"",trang_thai:"",parent_id:"",children:[],files:[],binh_luan:[]}),d=c({id:"",ten:"",ngay_bat_dau:"",ngay_ket_thuc:"",user_id:"",nhan_vien:{},mo_ta:"",trang_thai:"",parent_id:"",children:[],files:[],binh_luan:[],nguoi_theo_doi:[]}),i=c("");function m(a){h.value={id:"",ten:"",ngay_bat_dau:"",ngay_ket_thuc:"",user_id:"",mo_ta:"",trang_thai:"",parent_id:a,children:[],files:[]},$("#duanmodal").modal("show")}const r=w(()=>v.du_an_list);C(i,a=>{O.visit(route("duan.index",{search:a}),{preserveState:!0})});function g(a){d.value={id:a.id,ten:a.ten,ngay_bat_dau:a.ngay_bat_dau,ngay_ket_thuc:a.ngay_ket_thuc,user_id:a.user_id,mo_ta:a.mo_ta,trang_thai:a.trang_thai,parent_id:a.parent_id,children:a.children,files:a.files,binh_luan:a.binh_luan,nguoi_theo_doi:a.nguoi_theo_doi},$("#chitietdamodal").modal("show")}function f(){d.value=r.value.find(a=>a.id===d.value.id)}return(a,o)=>(e(),D(j,null,{default:x(()=>{var p;return[t("div",A,[t("div",E,[t("div",F,[t("div",R,[t("div",H,[t("div",I,[t("a",{onClick:o[0]||(o[0]=b(n=>m(""),["prevent"])),class:"btn btn-primary form-control"},"Thêm dự án")]),t("div",K,[t("div",U,[T(t("input",{"onUpdate:modelValue":o[1]||(o[1]=n=>M(i)?i.value=n:i=n),type:"text",name:"search",class:"form-control",placeholder:"Tìm kiếm dự án"},null,512),[[N,u(i)]]),q])])]),t("table",z,[G,t("tbody",null,[((p=r.value)==null?void 0:p.length)===0?(e(),s("tr",J,Q)):(e(!0),s(B,{key:1},S(r.value,n=>(e(),s("tr",{key:n.id},[t("td",null,l(n.ten),1),t("td",null,l(new Date(n.ngay_bat_dau).toLocaleDateString()),1),t("td",null,l(new Date(n.ngay_bat_dau).toLocaleDateString()),1),t("td",null,l(n.nhan_vien.name),1),t("td",null,[n.trang_thai===0?(e(),s("span",W,"Chưa triển khai")):n.trang_thai===1?(e(),s("span",X,"Đang triển khai")):n.trang_thai===2?(e(),s("span",Y,"Hoàn thành")):V("",!0)]),t("td",Z,[t("a",{class:"btn btn-primary btn-sm mr-2 ml-2",href:a.route("duan.detail",{id:n.id})},"Chi tiết",8,tt),t("a",{class:"btn btn-primary btn-sm d-inline-block mr-2",onClick:b(nt=>g(n),["prevent"])},"Sửa",8,at)])]))),128))])])])])])]),y(L,{du_an:u(d),users:_.nhan_vien_list,onAdd:m,onEdit:g},null,8,["du_an","users"]),y(k,{du_an:u(h),users:_.nhan_vien_list,onReload:f},null,8,["du_an","users"])]}),_:1}))}};export{ct as default};
