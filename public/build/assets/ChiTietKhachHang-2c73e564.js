import{i as c,o as i,c as u,a as t,e as B,m as y,t as a,u as p,l as N,F as w,k as C,O as V}from"./app-53253265.js";import{h as b}from"./moment-a9aaa855.js";const O={id:"chitietkhmodal",class:"modal fade",tabindex:"-1",role:"dialog"},F={class:"modal-dialog modal-xl",role:"document"},K={class:"modal-content"},P={class:"modal-header pt-2"},W=t("h5",{class:"txt-color my-2 font-weight-bold"},"Chi tiết công nợ",-1),j={class:"modal-body space-y-2 px-4 mt-2"},q={class:"d-flex space-x-[80px]"},E=t("b",{class:"mr-2"},"Từ ngày: ",-1),H=t("b",{class:"mr-2"},"Đến ngày: ",-1),I=t("b",{class:"mr-2"},"Nợ cũ: ",-1),L={class:"mt-2"},X={class:"table table-bordered table-responsive-md"},z=t("thead",null,[t("tr",null,[t("th",null,"STT"),t("th",null,"Mã phiếu"),t("th",null,"Ngày"),t("th",null,"Sản phẩm"),t("th",null,"ĐVT"),t("th",null,"Số lượng"),t("th",null,"Đơn giá"),t("th",null,"Thành tiền"),t("th",null,"Thu")])],-1),A={class:"text-center"},G={class:"text-center"},J={class:"quantity",style:{width:"8%"}},Q={class:"money"},R={class:"money"},U={class:"money"},Z=t("td",{colspan:"7",class:"font-weight-bold text-end"},"Tổng cộng",-1),tt={class:"money"},et={class:"money"},nt=t("td",{colspan:"7",class:"font-weight-bold text-end"},"Nợ mới",-1),at={colspan:"2",class:"money"},ot={__name:"ChiTietKhachHang",props:{khach_hang:{type:Object,default:{}},ngay_bat_dau:{type:String,default:""},ngay_ket_thuc:{type:String,default:""}},setup(r){const s=r;function T(){$("#chitietkhmodal").modal("hide")}const d=c(()=>{var n;return(n=s.khach_hang)==null?void 0:n.filter(e=>e.ma.startsWith("PT"))}),_=c(()=>{var n;return(n=s.khach_hang)==null?void 0:n.filter(e=>e.ma.startsWith("XK"))}),h=c(()=>{var n;return(n=s.khach_hang)==null?void 0:n.filter(e=>e.ngay>=s.ngay_bat_dau&&e.ngay<=s.ngay_ket_thuc)}),v=c(()=>{var n;return(n=_==null?void 0:_.value)==null?void 0:n.filter(e=>e.ngay<s.ngay_bat_dau).reduce((e,l)=>e+l.thanh_tien,0)}),f=c(()=>{var n;return(n=d==null?void 0:d.value)==null?void 0:n.filter(e=>e.ngay<s.ngay_bat_dau).reduce((e,l)=>e+l.thu,0)}),g=c(()=>{var n;return(n=_==null?void 0:_.value)==null?void 0:n.filter(e=>e.ngay>=s.ngay_bat_dau&&e.ngay<=s.ngay_ket_thuc).reduce((e,l)=>e+l.thanh_tien,0)}),m=c(()=>{var n;return(n=d==null?void 0:d.value)==null?void 0:n.filter(e=>e.ngay>=s.ngay_bat_dau&&e.ngay<=s.ngay_ket_thuc).reduce((e,l)=>e+l.thu,0)});function M(){$("#chitietkhmodal").modal("hide"),V.post(route("baocaocongno.print"),{ngay_bat_dau:s.ngay_bat_dau,ngay_ket_thuc:s.ngay_ket_thuc,hdpc:h.value,ton_dau:v.value-f.value,so_tien_nhap_moi:g.value,so_tien_chi_moi:m.value})}return(n,e)=>{var l,k,x;return i(),u("div",O,[t("div",F,[t("div",K,[t("div",P,[W,t("button",{type:"button",class:"close",onClick:B(T,["prevent"])},"×")]),t("div",j,[t("div",q,[t("p",null,[E,y(a(p(b)(r.ngay_bat_dau).format("DD/MM/YYYY")),1)]),t("p",null,[H,y(a(p(b)(r.ngay_ket_thuc).format("DD/MM/YYYY")),1)]),t("p",null,[I,y(a((v.value-f.value).toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")||0),1)]),((l=h.value)==null?void 0:l.length)>0?(i(),u("a",{key:0,onClick:e[0]||(e[0]=B(o=>M(),["prevent"])),class:"btn btn-primary btn-sm ml-auto mb-2"},"In Phiếu")):N("",!0)]),t("div",L,[t("table",X,[z,t("tbody",null,[(i(!0),u(w,null,C(h.value,(o,D)=>{var S,Y;return i(),u("tr",null,[t("td",A,a(D+1),1),t("td",null,a(o.ma),1),t("td",null,a(p(b)(o.ngay).format("DD/MM/YYYY")),1),t("td",null,a(o.san_pham),1),t("td",G,a(o.dvt),1),t("td",J,a(o.so_luong),1),t("td",Q,a(o.gia.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")),1),t("td",R,a((S=o.thanh_tien)==null?void 0:S.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")),1),t("td",U,a((Y=o.thu)==null?void 0:Y.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")),1)])}),256)),t("tr",null,[Z,t("td",tt,a(((k=g.value)==null?void 0:k.toString().replace(/\B(?=(\d{3})+(?!\d))/g,","))||0),1),t("td",et,a(((x=m.value)==null?void 0:x.toString().replace(/\B(?=(\d{3})+(?!\d))/g,","))||0),1)]),t("tr",null,[nt,t("td",at,a((g.value-m.value).toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")||0),1)])])])])])])])])}}};export{ot as default};
