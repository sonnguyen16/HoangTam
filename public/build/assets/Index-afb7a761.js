import{h as f,i as D,j as O,o as e,b as V,d as j,a as t,e as c,w as E,f as F,u as m,p as K,c as o,k as y,F as k,l as N,g as X,m as w,O as d,t as l,n as z}from"./app-4c6714ee.js";import{_ as G}from"./MainLayout-704f35ea.js";import I from"./DonBanModal-d65e69f5.js";import{f as L}from"./script-4eb152de.js";/* empty css                     *//* empty css              */import"./_plugin-vue_export-helper-c27b6911.js";import"./lodash-994b604c.js";import"./moment-a9aaa855.js";const P=t("div",{class:"card shadow"},[t("div",{class:"card-body card-brc"},[t("p",{class:"txt-color mb-0 font-weight-bold"},[w("Đơn hàng "),t("i",{class:"fa fa-angle-right mr-2 ml-2"}),w(" Đơn bán")])])],-1),R={class:"card shadow card-child",style:{}},U={class:"card-body"},q={class:"row mb-3"},A={class:"col-md-2"},H={class:"col-md-10"},J={class:"row"},Q=t("div",{class:"col-md-3"},null,-1),W=t("div",{class:"col-md-6"},null,-1),Y={class:"col-md-3"},Z={class:"input-group"},tt=t("div",{class:"input-group-append"},[t("button",{class:"btn btn-primary",type:"submit"},[t("i",{class:"fas fa-search"})])],-1),nt={class:"table table-bordered table-responsive-md"},at=t("thead",null,[t("tr",null,[t("th",null,"Mã phiếu"),t("th",null,"Khách hàng"),t("th",null,"Ghi chú"),t("th",null,"Ngày tạo"),t("th",null,"Tổng tiền"),t("th",null,"Thao tác")])],-1),et={key:0},st=t("td",{colspan:"7",class:"text-center"},"Không có dữ liệu",-1),ot=[st],lt={class:"date"},it={class:"money"},ct={style:{width:"10%"},class:"text-center"},dt=["onClick"],rt=["href"],ht=["onClick"],_t={class:"float-right mt-3 mb-0"},mt={class:"row"},ut={class:"col-md-12 col-lg-12 text-center"},gt={key:0,class:"pagination"},pt=["onClick"],St={__name:"Index",props:{don_hang_list:Object,khach_hang_list:Object,san_pham_list:Object},setup(r){const x=r;let h=f({id:"",ma:"",ngay:"",khach_hang:{},ghi_chu:"",chi_tiet_don_hang:[]}),i=f("");function C(){h.value={id:"",ma:"",ngay:"",khach_hang:{},ghi_chu:"",chi_tiet_don_hang:[]},$("#donhangmodal").modal("show")}const s=D(()=>x.don_hang_list);O(i,a=>{d.visit(route("donhang.index",{search:a,loai:"donban"}),{preserveState:!0})});function B(a){d.visit(a,{preserveState:!0})}function S(a){h.value={id:a.id,ma:a.ma,khach_hang:a.khach_hang,ngay:a.ngay,ghi_chu:a.ghi_chu,chi_tiet_don_hang:a.chi_tiet_don_hang},$("#donhangmodal").modal("show")}function M(a){confirm("Bạn có chắc chắn muốn xóa đơn hàng này không?")&&d.delete(route("donhang.delete",{id:a}),{onSuccess:()=>{d.visit(route("donhang.index",{loai:"donban"}))},onError:()=>{console.log(form.errors)}})}return(a,u)=>(e(),V(G,null,{default:j(()=>{var g,p,v,b;return[P,t("div",R,[t("div",U,[t("div",q,[t("div",A,[t("a",{onClick:c(C,["prevent"]),class:"btn btn-primary form-control"},"Thêm đơn bán")]),t("div",H,[t("form",null,[t("div",J,[Q,W,t("div",Y,[t("div",Z,[E(t("input",{"onUpdate:modelValue":u[0]||(u[0]=n=>K(i)?i.value=n:i=n),type:"text",name:"search",class:"form-control",placeholder:"Tìm kiếm đơn hàng"},null,512),[[F,m(i)]]),tt])])])])])]),t("table",nt,[at,t("tbody",null,[((g=s.value)==null?void 0:g.data.length)===0?(e(),o("tr",et,ot)):(e(!0),o(k,{key:1},y((p=s.value)==null?void 0:p.data,n=>{var _;return e(),o("tr",{key:n.id},[t("td",null,l(n.ma),1),t("td",null,l((_=n.khach_hang)==null?void 0:_.ten),1),t("td",null,l(n.ghi_chu),1),t("td",lt,l(m(L)(n.created_at)),1),t("td",it,l(n.tong_tien.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")),1),t("td",ct,[t("a",{class:"btn btn-primary btn-sm d-inline-block mr-2",onClick:c(T=>S(n),["prevent"])},"Sửa",8,dt),t("a",{class:"btn btn-primary btn-sm d-inline-block mr-2",href:a.route("donhang.print",{id:n.id})},"Xuất",8,rt),t("a",{class:"btn btn-danger btn-sm",onClick:c(T=>M(n.id),["prevent"])},"Xóa",8,ht)])])}),128))])]),t("div",_t,[t("div",mt,[t("div",ut,[((v=s.value)==null?void 0:v.meta.total)>((b=s.value)==null?void 0:b.meta.per_page)?(e(),o("ul",gt,[(e(!0),o(k,null,y(s.value.meta.links.slice(1,-1),n=>(e(),o("li",{key:n,class:"page-item"},[t("a",{class:z(["page-link",{"bg-primary":n.label===s.value.meta.current_page.toString()}]),onClick:c(_=>B(n.url),["prevent"])},l(n.label),11,pt)]))),128))])):N("",!0)])])])])]),X(I,{don_hang:m(h),khach_hang_list:r.khach_hang_list,san_pham_list:r.san_pham_list},null,8,["don_hang","khach_hang_list","san_pham_list"])]}),_:1}))}};export{St as default};
