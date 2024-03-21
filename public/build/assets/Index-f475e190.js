import{h as f,i as T,j as D,o as e,b as O,d as V,a as t,e as i,w as j,f as N,u as h,p as E,c as o,k as y,F as w,l as F,g as X,m as x,O as d,t as l,n as z}from"./app-4c6714ee.js";import{_ as G}from"./MainLayout-704f35ea.js";import I from"./DonMuaModal-1991d6fe.js";import{f as K}from"./script-4eb152de.js";/* empty css                     *//* empty css              */import"./_plugin-vue_export-helper-c27b6911.js";import"./lodash-994b604c.js";import"./moment-a9aaa855.js";const L=t("div",{class:"card shadow"},[t("div",{class:"card-body card-brc"},[t("p",{class:"txt-color mb-0 font-weight-bold"},[x("Đơn hàng "),t("i",{class:"fa fa-angle-right mr-2 ml-2"}),x(" Đơn mua")])])],-1),P={class:"card shadow card-child",style:{}},R={class:"card-body"},U={class:"row mb-3"},q={class:"col-md-2"},A={class:"col-md-10"},H={class:"row"},J=t("div",{class:"col-md-3"},null,-1),Q=t("div",{class:"col-md-6"},null,-1),W={class:"col-md-3"},Y={class:"input-group"},Z=t("div",{class:"input-group-append"},[t("button",{class:"btn btn-primary",type:"submit"},[t("i",{class:"fas fa-search"})])],-1),tt={class:"table table-bordered table-responsive-md"},nt=t("thead",null,[t("tr",null,[t("th",null,"Mã đơn"),t("th",null,"Nhà cung cấp"),t("th",null,"Ghi chú"),t("th",null,"Tổng tiền"),t("th",null,"Ngày tạo"),t("th",null,"Thao tác")])],-1),at={key:0},et=t("td",{colspan:"7",class:"text-center"},"Không có dữ liệu",-1),st=[et],ot={class:"money"},lt={class:"date"},ct={style:{width:"10%"},class:"text-center"},it=["onClick"],dt=["href"],rt=["onClick"],_t={class:"float-right mt-3 mb-0"},ht={class:"row"},ut={class:"col-md-12 col-lg-12 text-center"},mt={key:0,class:"pagination"},gt=["onClick"],Mt={__name:"Index",props:{don_hang_list:Object,nha_cung_cap_list:Object,san_pham_list:Object},setup(r){const C=r;let _=f({id:"",ma:"",ngay:"",nha_cung_cap:{},ghi_chu:"",chi_tiet_don_hang:[]}),c=f("");function k(){_.value={id:"",ma:"",ngay:"",nha_cung_cap:{},ghi_chu:"",chi_tiet_don_hang:[]},$("#donhangmodal").modal("show")}const s=T(()=>C.don_hang_list);D(c,a=>{d.visit(route("donhang.index",{search:a,loai:"donmua"}),{preserveState:!0})});function M(a){d.visit(a,{preserveState:!0})}function S(a){_.value={id:a.id,ma:a.ma,ngay:a.ngay,nha_cung_cap:a.nha_cung_cap,ghi_chu:a.ghi_chu,chi_tiet_don_hang:a.chi_tiet_don_hang},$("#donhangmodal").modal("show")}function B(a){confirm("Bạn có chắc chắn muốn xóa đơn hàng này không?")&&d.delete(route("donhang.delete",{id:a}),{onSuccess:()=>{d.visit(route("donhang.index",{loai:"donmua"}))},onError:()=>{console.log(form.errors)}})}return(a,u)=>(e(),O(G,null,{default:V(()=>{var m,g,p,v;return[L,t("div",P,[t("div",R,[t("div",U,[t("div",q,[t("a",{onClick:i(k,["prevent"]),class:"btn btn-primary form-control"},"Thêm đơn mua")]),t("div",A,[t("form",null,[t("div",H,[J,Q,t("div",W,[t("div",Y,[j(t("input",{"onUpdate:modelValue":u[0]||(u[0]=n=>E(c)?c.value=n:c=n),type:"text",name:"search",class:"form-control",placeholder:"Tìm kiếm đơn hàng"},null,512),[[N,h(c)]]),Z])])])])])]),t("table",tt,[nt,t("tbody",null,[((m=s.value)==null?void 0:m.data.length)===0?(e(),o("tr",at,st)):(e(!0),o(w,{key:1},y((g=s.value)==null?void 0:g.data,n=>(e(),o("tr",{key:n.id},[t("td",null,l(n.ma),1),t("td",null,l(n.nha_cung_cap.ten),1),t("td",null,l(n.ghi_chu),1),t("td",ot,l(n.tong_tien.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")),1),t("td",lt,l(h(K)(n.created_at)),1),t("td",ct,[t("a",{class:"btn btn-primary btn-sm d-inline-block mr-2",onClick:i(b=>S(n),["prevent"])},"Sửa",8,it),t("a",{class:"btn btn-primary btn-sm d-inline-block mr-2",href:a.route("donhang.print",{id:n.id})},"Xuất",8,dt),t("a",{class:"btn btn-danger btn-sm",onClick:i(b=>B(n.id),["prevent"])},"Xóa",8,rt)])]))),128))])]),t("div",_t,[t("div",ht,[t("div",ut,[((p=s.value)==null?void 0:p.meta.total)>((v=s.value)==null?void 0:v.meta.per_page)?(e(),o("ul",mt,[(e(!0),o(w,null,y(s.value.meta.links.slice(1,-1),n=>(e(),o("li",{key:n,class:"page-item"},[t("a",{class:z(["page-link",{"bg-primary":n.label===s.value.meta.current_page.toString()}]),onClick:i(b=>M(n.url),["prevent"])},l(n.label),11,gt)]))),128))])):F("",!0)])])])])]),X(I,{don_hang:h(_),nha_cung_cap_list:r.nha_cung_cap_list,san_pham_list:r.san_pham_list},null,8,["don_hang","nha_cung_cap_list","san_pham_list"])]}),_:1}))}};export{Mt as default};
