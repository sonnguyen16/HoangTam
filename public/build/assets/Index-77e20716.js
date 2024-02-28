import{h as _,i as T,j as y,o as d,b as V,d as D,a as t,w as h,f as g,C as M,m as b,t as n,u as N,c as u,k as F,F as S,l as U,O as v,D as o,n as O,e as j}from"./app-8a7eb46a.js";import{_ as z}from"./MainLayout-6cb24762.js";/* empty css                     *//* empty css              */const X=t("div",{class:"card shadow"},[t("div",{class:"card-body card-brc"},[t("p",{class:"txt-color mb-0 font-weight-bold"},[b("Báo cáo "),t("i",{class:"fa fa-angle-right mr-2 ml-2"}),b(" Nhập xuất tồn")])])],-1),$={class:"card shadow card-child",style:{}},A={class:"card-body"},E={class:"row mb-3"},I={class:"col-md-12"},K={class:"row"},L={class:"col-md-5"},P={class:"row"},G={class:"col-lg-6"},H={class:"form-record"},J=t("label",null,"Từ ngày",-1),Q={class:"col-lg-6"},R={class:"form-record"},W=t("label",null,"Đến ngày",-1),Y={class:"col-md-4 d-flex align-items-center"},Z=t("span",{class:"font-weight-bold me-5"},"Xem tất cả",-1),tt=t("span",{class:"font-weight-bold me-2 ms-5"},"Tổng tồn cuối:",-1),et={class:"col-md-3"},st={class:"input-group"},at=t("div",{class:"input-group-append"},[t("button",{class:"btn btn-primary",type:"submit"},[t("i",{class:"fas fa-search"})])],-1),nt={class:"table table-bordered table-responsive-md"},lt=t("thead",null,[t("tr",null,[t("th",null,"STT"),t("th",null,"Mã sản phẩm"),t("th",null,"Tên sản phẩm"),t("th",null,"Đơn vị tính"),t("th",null,"Tồn đầu"),t("th",null,"Nhập"),t("th",null,"Xuất"),t("th",null,"Điều chỉnh"),t("th",null,"Tồn cuối")])],-1),ot={key:0},ct=t("td",{colspan:"9",class:"text-center"},"Không có dữ liệu",-1),it=[ct],dt={class:"float-right mt-3 mb-0"},rt={class:"row"},ut={class:"col-md-12 col-lg-12 text-center"},_t={key:0,class:"pagination"},ht=["onClick"],gt={__name:"Index",props:{san_pham_list:Object},setup(q){const f=q,m=_(""),c=_("2024-01-01"),i=_("2025-01-01"),r=T(()=>p.value?f.san_pham_list:f.san_pham_list.filter(s=>s.ton_cuoi>0||s.nhap>0||s.xuat>0||s.dieu_chinh>0));y(m,s=>{v.visit(route("baocaotonkho.index",{search:s,ngay_bat_dau:c.value,ngay_ket_thuc:i.value}),{preserveState:!0})}),y(c,(s,a)=>{if(!s){c.value=a;return}if(i.value<s){alert("Ngày bắt đầu không được lớn hơn ngày kết thúc"),c.value=a;return}v.visit(route("baocaotonkho.index",{ngay_bat_dau:s,ngay_ket_thuc:i.value}),{preserveState:!0})}),y(i,(s,a)=>{if(!s){i.value=a;return}if(c.value>s){alert("Ngày kết thúc không được nhỏ hơn ngày bắt đầu"),i.value=a;return}v.visit(route("baocaotonkho.index",{ngay_ket_thuc:s,ngay_bat_dau:c.value}),{preserveState:!0})});function C(s){v.visit(s,{preserveState:!0})}let B=T(()=>r.value.reduce((s,a)=>s+a.ton_cuoi,0));const p=_(!1);function l(s){if(s.ton_cuoi<s.canh_bao||s.ton_cuoi===0)return"background-color: #f38e8e !important"}return(s,a)=>(d(),V(z,null,{default:D(()=>{var x,w;return[X,t("div",$,[t("div",A,[t("div",E,[t("div",I,[t("form",null,[t("div",K,[t("div",L,[t("div",P,[t("div",G,[t("div",H,[J,h(t("input",{type:"date","onUpdate:modelValue":a[0]||(a[0]=e=>c.value=e),class:"form-control",name:"tu_ngay"},null,512),[[g,c.value]])])]),t("div",Q,[t("div",R,[W,h(t("input",{type:"date","onUpdate:modelValue":a[1]||(a[1]=e=>i.value=e),class:"form-control",name:"den_ngay"},null,512),[[g,i.value]])])])])]),t("div",Y,[h(t("input",{"onUpdate:modelValue":a[2]||(a[2]=e=>p.value=e),type:"checkbox",class:"me-3"},null,512),[[M,p.value]]),Z,tt,b(n(N(B).toFixed(1)),1)]),t("div",et,[t("div",st,[h(t("input",{"onUpdate:modelValue":a[3]||(a[3]=e=>m.value=e),type:"text",name:"search",class:"form-control",placeholder:"Tìm kiếm sản phẩm"},null,512),[[g,m.value]]),at])])])])])]),t("table",nt,[lt,t("tbody",null,[((x=r.value)==null?void 0:x.length)===0?(d(),u("tr",ot,it)):(d(!0),u(S,{key:1},F(r.value,(e,k)=>(d(),u("tr",{key:e.id},[t("td",{style:o(l(e)),class:"quantity"},n(k+1),5),t("td",{style:o(l(e))},n(e.ma),5),t("td",{style:o(l(e))},n(e.ten),5),t("td",{style:o(l(e)),class:"quantity"},n(e.dvt),5),t("td",{style:o(l(e)),class:"quantity"},n(e.ton_dau.toFixed(1)||0),5),t("td",{style:o(l(e)),class:"quantity"},n(e.nhap.toFixed(1)||0),5),t("td",{style:o(l(e)),class:"quantity"},n(e.xuat.toFixed(1)||0),5),t("td",{style:o(l(e)),class:"quantity"},n(e.dieu_chinh.toFixed(1)||0),5),t("td",{style:o(l(e)),class:"quantity"},n(e.ton_cuoi.toFixed(1)||0),5)]))),128))])]),t("div",dt,[t("div",rt,[t("div",ut,[((w=r.value)==null?void 0:w.total)>10?(d(),u("ul",_t,[(d(!0),u(S,null,F(r.value.links.slice(1,-1),e=>(d(),u("li",{key:e,class:"page-item"},[t("a",{class:O(["page-link",{"bg-primary":e.label===r.value.current_page.toString()}]),onClick:j(k=>C(e.url),["prevent"])},n(e.label),11,ht)]))),128))])):U("",!0)])])])])])]}),_:1}))}};export{gt as default};
