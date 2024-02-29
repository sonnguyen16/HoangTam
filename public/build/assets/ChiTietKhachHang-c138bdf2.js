import{i as c,o as i,c as h,a as t,e as T,m as u,t as a,l as M,u as v,F as C,k as V,O as K}from"./app-373e469d.js";import{h as f}from"./moment-a9aaa855.js";const O={id:"chitietkhmodal",class:"modal fade",tabindex:"-1",role:"dialog"},F={class:"modal-dialog modal-xl",role:"document"},P={class:"modal-content"},W={class:"modal-header pt-2"},j=t("h5",{class:"txt-color my-2 font-weight-bold"},"Chi tiết công nợ",-1),q={class:"modal-body space-y-2 px-4 mt-2"},E={key:0},H=t("b",{class:"mr-2"},"Khách hàng:",-1),I={class:"d-flex space-x-[80px]"},L=t("b",{class:"mr-2"},"Từ ngày: ",-1),X=t("b",{class:"mr-2"},"Đến ngày: ",-1),z=t("b",{class:"mr-2"},"Nợ cũ: ",-1),A={class:"mt-2"},G={class:"table table-bordered table-responsive-md"},J=t("thead",null,[t("tr",null,[t("th",null,"STT"),t("th",null,"Mã phiếu"),t("th",null,"Ngày"),t("th",null,"Sản phẩm"),t("th",null,"ĐVT"),t("th",null,"Số lượng"),t("th",null,"Đơn giá"),t("th",null,"Thành tiền"),t("th",null,"Thu")])],-1),Q={class:"text-center"},R={class:"text-center"},U={class:"quantity",style:{width:"8%"}},Z={class:"money"},tt={class:"money"},et={class:"money"},nt=t("td",{colspan:"7",class:"font-weight-bold text-end"},"Tổng cộng",-1),at={class:"money"},st={class:"money"},lt=t("td",{colspan:"7",class:"font-weight-bold text-end"},"Nợ mới",-1),ot={colspan:"2",class:"money"},_t={__name:"ChiTietKhachHang",props:{khach_hang:{type:Object,default:{}},ngay_bat_dau:{type:String,default:""},ngay_ket_thuc:{type:String,default:""}},setup(r){const s=r;function D(){$("#chitietkhmodal").modal("hide")}const d=c(()=>{var n;return(n=s.khach_hang)==null?void 0:n.filter(e=>e.ma.startsWith("PT"))}),_=c(()=>{var n;return(n=s.khach_hang)==null?void 0:n.filter(e=>e.ma.startsWith("XK"))}),g=c(()=>{var n;return(n=s.khach_hang)==null?void 0:n.filter(e=>e.ngay>=s.ngay_bat_dau&&e.ngay<=s.ngay_ket_thuc)}),m=c(()=>{var n;return(n=_==null?void 0:_.value)==null?void 0:n.filter(e=>e.ngay<s.ngay_bat_dau).reduce((e,l)=>e+l.thanh_tien,0)}),y=c(()=>{var n;return(n=d==null?void 0:d.value)==null?void 0:n.filter(e=>e.ngay<s.ngay_bat_dau).reduce((e,l)=>e+l.thu,0)}),p=c(()=>{var n;return(n=_==null?void 0:_.value)==null?void 0:n.filter(e=>e.ngay>=s.ngay_bat_dau&&e.ngay<=s.ngay_ket_thuc).reduce((e,l)=>e+l.thanh_tien,0)}),b=c(()=>{var n;return(n=d==null?void 0:d.value)==null?void 0:n.filter(e=>e.ngay>=s.ngay_bat_dau&&e.ngay<=s.ngay_ket_thuc).reduce((e,l)=>e+l.thu,0)});function N(){$("#chitietkhmodal").modal("hide"),K.post(route("baocaocongno.print"),{ngay_bat_dau:s.ngay_bat_dau,ngay_ket_thuc:s.ngay_ket_thuc,hdpc:g.value,ton_dau:m.value-y.value,so_tien_nhap_moi:p.value,so_tien_chi_moi:b.value})}return(n,e)=>{var l,k,x,S;return i(),h("div",O,[t("div",F,[t("div",P,[t("div",W,[j,t("button",{type:"button",class:"close",onClick:T(D,["prevent"])},"×")]),t("div",q,[((l=s.khach_hang)==null?void 0:l.length)>0?(i(),h("p",E,[H,u(a(s.khach_hang[0].ten_kh),1)])):M("",!0),t("div",I,[t("p",null,[L,u(a(v(f)(r.ngay_bat_dau).format("DD/MM/YYYY")),1)]),t("p",null,[X,u(a(v(f)(r.ngay_ket_thuc).format("DD/MM/YYYY")),1)]),t("p",null,[z,u(a((m.value-y.value).toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")||0),1)]),((k=g.value)==null?void 0:k.length)>0?(i(),h("a",{key:0,onClick:e[0]||(e[0]=T(o=>N(),["prevent"])),class:"btn btn-primary btn-sm ml-auto mb-2"},"In Phiếu")):M("",!0)]),t("div",A,[t("table",G,[J,t("tbody",null,[(i(!0),h(C,null,V(g.value,(o,w)=>{var Y,B;return i(),h("tr",null,[t("td",Q,a(w+1),1),t("td",null,a(o.ma),1),t("td",null,a(v(f)(o.ngay).format("DD/MM/YYYY")),1),t("td",null,a(o.san_pham),1),t("td",R,a(o.dvt),1),t("td",U,a(o.so_luong),1),t("td",Z,a(o.gia.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")),1),t("td",tt,a((Y=o.thanh_tien)==null?void 0:Y.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")),1),t("td",et,a((B=o.thu)==null?void 0:B.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")),1)])}),256)),t("tr",null,[nt,t("td",at,a(((x=p.value)==null?void 0:x.toString().replace(/\B(?=(\d{3})+(?!\d))/g,","))||0),1),t("td",st,a(((S=b.value)==null?void 0:S.toString().replace(/\B(?=(\d{3})+(?!\d))/g,","))||0),1)]),t("tr",null,[lt,t("td",ot,a((m.value-y.value+p.value-b.value).toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")||0),1)])])])])])])])])}}};export{_t as default};
