/* empty css                     *//* empty css              */import{n as N}from"./script-4eb152de.js";import{q as I,Q as K,i as w,o as e,c,a as t,t as i,l as o,u as S,x as B,y as H}from"./app-e4f1f62e.js";import{_ as P}from"./_plugin-vue_export-helper-c27b6911.js";const h=s=>(B("data-v-9868cc38"),s=s(),H(),s),T={class:"bg-light-blue h-[100vh]"},D={class:"container bg-white h-[100vh]"},U={class:"row"},V={class:"col-12 mx-auto"},$={class:"d-flex align-items-center gap-[20px]"},j={class:"text-start"},q={class:"font-weight-bold mb-0"},C={class:"font-weight-bold mb-0"},E={class:"font-weight-bold mb-0"},F={key:0,class:"font-weight-bold mb-0"},M={key:1,class:"font-weight-bold mb-0"},G={class:"text-center mt-3"},L={key:0,class:"font-weight-bold"},O={key:1,class:"font-weight-bold"},Q={class:"text-md font-italic"},W={class:"px-4 mt-4"},Y={class:"row"},z={class:"col-2"},A={key:0,class:"text-md"},J={key:1,class:"text-md"},R={class:"col-9"},X={key:0,class:"text-md"},Z={key:1,class:"text-md"},tt={class:"row"},st=h(()=>t("div",{class:"col-2"},[t("label",{class:"text-md"},"Địa chỉ:")],-1)),et={class:"col-9"},ct={key:0,class:"text-md"},it={key:1,class:"text-md"},ot={class:"row"},ht=h(()=>t("div",{class:"col-2"},[t("label",{class:"text-md"},"Lý do:")],-1)),nt={class:"col-9"},at={class:"text-md"},lt={class:"row"},dt=h(()=>t("div",{class:"col-2"},[t("label",{class:"text-md"},"Số tiền:")],-1)),_t={class:"col-9 d-flex gap-[70px]"},ut={class:"text-md"},pt={class:"row"},mt=h(()=>t("div",{class:"col-2"},[t("label",{class:"text-md"},"Bằng chữ:")],-1)),rt={class:"col-9 d-flex gap-[70px]"},xt={class:"d-flex flex-1 gap-[50px]"},vt={class:"text-md"},gt={class:"d-flex mt-5 justify-content-between w-100"},bt=h(()=>t("div",{class:"space-y-[60px] text-center"},[t("p",{class:"font-weight-bold text-md"},"Giám đốc"),t("p",null,"(Ký, họ tên, đóng dấu)")],-1)),ft=h(()=>t("div",{class:"space-y-[60px] text-center"},[t("p",{class:"font-weight-bold text-md"},"Kế toán trưởng"),t("p",null,"(Ký, họ tên)")],-1)),wt={class:"space-y-[60px] text-center"},yt={key:0,class:"font-weight-bold text-md"},kt={key:1,class:"font-weight-bold text-md"},Nt=h(()=>t("p",null,"(Ký, họ tên)",-1)),It=h(()=>t("div",{class:"space-y-[60px] text-center"},[t("p",{class:"font-weight-bold text-md"},"Người lập phiếu"),t("p",null,"(Ký, họ tên)")],-1)),Kt=h(()=>t("div",{class:"space-y-[60px] text-center"},[t("p",{class:"font-weight-bold text-md"},"Thủ quỹ"),t("p",null,"(Ký, họ tên)")],-1)),St={__name:"Print",props:{phieu_thu_chi:Object},setup(s){const y=s;I(()=>{window.print(),console.log(y.phieu_thu_chi)});const{props:l}=K(),n=w(()=>l.don_vi);w(()=>l.user);function k(a){return`Ngày ${a.getDate()} tháng ${a.getMonth()+1} năm ${a.getFullYear()}`}return(a,Bt)=>{var d,_,u,p,m,r,x,v,g,b,f;return e(),c("div",T,[t("div",D,[t("div",U,[t("div",V,[t("div",$,[t("div",j,[t("h3",q,i((d=n.value)==null?void 0:d.ten),1),t("p",C,"Địa chỉ: "+i((_=n.value)==null?void 0:_.dia_chi),1),t("p",E,"Điện thoại: "+i((u=n.value)==null?void 0:u.dien_thoai),1),(p=n.value)!=null&&p.email?(e(),c("p",F,"Email: "+i((m=n.value)==null?void 0:m.email),1)):o("",!0),(r=n.value)!=null&&r.stk_1?(e(),c("p",M,"STK: "+i((x=n.value)==null?void 0:x.stk_1),1)):o("",!0)])]),t("div",G,[s.phieu_thu_chi.loai===0?(e(),c("h1",L,"PHIẾU THU")):o("",!0),s.phieu_thu_chi.loai===1?(e(),c("h1",O,"PHIẾU CHI")):o("",!0),t("p",Q,i(k(new Date(s.phieu_thu_chi.created_at))),1)]),t("div",W,[t("div",Y,[t("div",z,[s.phieu_thu_chi.loai===0?(e(),c("label",A,"Họ tên người nộp:")):o("",!0),s.phieu_thu_chi.loai===1?(e(),c("label",J,"Nhà cung cấp:")):o("",!0)]),t("div",R,[s.phieu_thu_chi.loai===0?(e(),c("span",X,i((v=s.phieu_thu_chi.khach_hang)==null?void 0:v.ten),1)):o("",!0),s.phieu_thu_chi.loai===1?(e(),c("span",Z,i((g=s.phieu_thu_chi.nha_cung_cap)==null?void 0:g.ten),1)):o("",!0)])]),t("div",tt,[st,t("div",et,[s.phieu_thu_chi.loai===0?(e(),c("span",ct,i((b=s.phieu_thu_chi.khach_hang)==null?void 0:b.dia_chi),1)):o("",!0),s.phieu_thu_chi.loai===1?(e(),c("span",it,i((f=s.phieu_thu_chi.nha_cung_cap)==null?void 0:f.dia_chi),1)):o("",!0)])]),t("div",ot,[ht,t("div",nt,[t("span",at,i(s.phieu_thu_chi.ly_do),1)])]),t("div",lt,[dt,t("div",_t,[t("span",ut,i(s.phieu_thu_chi.so_tien.toString().replace(/\B(?=(\d{3})+(?!\d))/g,","))+" VNĐ ",1)])]),t("div",pt,[mt,t("div",rt,[t("div",xt,[t("span",vt,[t("i",null,i(S(N)(s.phieu_thu_chi.so_tien))+" đồng",1)])])])]),t("div",gt,[bt,ft,t("div",wt,[s.phieu_thu_chi.loai===0?(e(),c("p",yt,"Người nộp tiền")):o("",!0),s.phieu_thu_chi.loai===1?(e(),c("p",kt,"Người nhận tiền")):o("",!0),Nt]),It,Kt])])])])])])}}},Vt=P(St,[["__scopeId","data-v-9868cc38"]]);export{Vt as default};