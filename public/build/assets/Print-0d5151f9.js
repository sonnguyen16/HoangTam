/* empty css                     *//* empty css              */import{n as V}from"./script-4eb152de.js";import{s as D,Q as Y,i as P,o as a,c as s,a as t,t as o,m as d,u as l,F as q,l as M,p as _,D as j,z,A as E}from"./app-44f1296a.js";import{h}from"./moment-a9aaa855.js";import{_ as F}from"./_plugin-vue_export-helper-c27b6911.js";const i=n=>(z("data-v-2037dc6e"),n=n(),E(),n),O={class:"bg-light-blue h-[100vh]"},U={class:"container bg-white h-[100vh]",style:{"font-size":"15px"}},A={class:"row"},C={class:"col-12 mx-auto"},G={class:"d-flex align-items-center gap-[20px]"},L={class:"text-start"},Q={class:"font-weight-bold mb-0",style:{"text-transform":"uppercase"}},W={class:"font-in",style:{"margin-bottom":"0px"}},J={class:"font-in",style:{"margin-bottom":"0px"}},R={key:0,class:"font-in",style:{"margin-bottom":"0px"}},X={key:1,class:"font-in",style:{"margin-bottom":"0px"}},Z={class:"text-center mt-3"},$={key:0,class:"font-weight-bold"},tt={key:1,class:"font-weight-bold"},nt={class:"text-md font-italic"},ot={class:""},at={class:"row"},st={class:"col-12"},et={key:0,class:"text-md font-in"},dt=i(()=>t("b",null,"Khách hàng:",-1)),it=[dt],ct={key:1,class:"text-md font-in"},lt=i(()=>t("b",null,"Nhà cung cấp:",-1)),_t=[lt],ht={width:"70% ",class:"font-in"},ut={key:0,class:"text-md font-in"},ft={key:1,class:"text-md font-in"},gt=i(()=>t("td",{class:"text-md font-in"},[t("b",null,"Số Phiếu:")],-1)),rt=i(()=>t("td",{class:"text-md font-in"},[t("b",null,"Địa chỉ:")],-1)),mt={key:0,class:"text-md font-in"},vt={key:1,class:"text-md font-in"},yt=i(()=>t("td",{class:"text-md font-in"},[t("b",null,"Điện thoại:")],-1)),xt={key:0,class:"text-md font-in"},bt={key:1,class:"text-md font-in"},kt={class:"table table-bordered"},pt=i(()=>t("thead",null,[t("tr",null,[t("th",{class:"font-in"},"STT"),t("th",{class:"font-in"},"Tên sản phẩm"),t("th",{class:"font-in"},"Số lượng"),t("th",{class:"font-in"},"ĐVT"),t("th",{class:"font-in"},"Đơn giá"),t("th",{class:"font-in"},"Thành tiền")])],-1)),wt={key:0},St=i(()=>t("td",{colspan:"6",class:"text-center font-in"},"Không có dữ liệu",-1)),Nt=[St],Bt={class:"font-in quantity"},Tt={class:"ten font-in"},Kt={class:"quantity font-in"},Pt={class:"quantity font-in"},It={class:"money font-in"},Ht={class:"money font-in"},Vt=i(()=>t("td",{colspan:"5",class:"text-md font-in"},[t("b",null,"Tổng tiền")],-1)),Dt={class:"money text-md font-in"},Yt={class:"row"},qt={class:"col-6 font-in"},Mt=i(()=>t("b",{class:"font-in"},"Bằng chữ:",-1)),jt=i(()=>t("div",{class:"col-4 font in"},null,-1)),zt={class:"col-2 font-in"},Et={key:0},Ft=i(()=>t("b",{class:"font-in"}," Nợ cũ: ",-1)),Ot={key:1},Ut=i(()=>t("b",{class:"font-in"}," Nợ cũ: ",-1)),At={key:2},Ct=i(()=>t("b",{class:"font-in"}," Tổng công nợ: ",-1)),Gt={key:3},Lt=i(()=>t("b",{class:"font-in"}," Tổng công nợ: ",-1)),Qt=j('<div class="d-flex justify-content-between w-100 mt-2" data-v-2037dc6e><div class="space-y-[60px] text-center" data-v-2037dc6e><p class="font-weight-bold text-md font-in" data-v-2037dc6e>Người giao hàng</p><p class="font-in" data-v-2037dc6e>(Ký, họ tên)</p></div><div class="space-y-[60px] text-center font-in" data-v-2037dc6e><p class="font-weight-bold text-md" data-v-2037dc6e>Người nhận hàng</p><p class="font-in" data-v-2037dc6e>(Ký, họ tên)</p></div><div class="space-y-[60px] text-center font-in" data-v-2037dc6e><p class="font-weight-bold text-md font-in" data-v-2037dc6e>Người lập phiếu</p><p class="font-in" data-v-2037dc6e>(Ký, họ tên)</p></div></div>',1),Wt={__name:"Print",props:{hoa_don:Object},setup(n){const I=n;D(()=>{window.print(),console.log(I.hoa_don)});const{props:u}=Y(),c=P(()=>u.don_vi);return P(()=>u.user),(Jt,Rt)=>{var f,g,r,m,v,y,x,b,k,p,w,S,N;return a(),s("div",O,[t("div",U,[t("div",A,[t("div",C,[t("div",G,[t("div",L,[t("h3",Q,o((f=c.value)==null?void 0:f.ten),1),t("p",W,"Địa chỉ: "+o((g=c.value)==null?void 0:g.dia_chi),1),t("p",J,"Điện thoại: "+o((r=c.value)==null?void 0:r.dien_thoai),1),(m=c.value)!=null&&m.email?(a(),s("p",R,"Email: "+o((v=c.value)==null?void 0:v.email),1)):d("",!0),(y=c.value)!=null&&y.stk_1?(a(),s("p",X,"STK: "+o((x=c.value)==null?void 0:x.stk_1),1)):d("",!0)])]),t("div",Z,[n.hoa_don.data.loai===0?(a(),s("h1",$,"PHIẾU NHẬP KHO")):d("",!0),n.hoa_don.data.loai===1?(a(),s("h1",tt,"PHIẾU BÁN HÀNG")):d("",!0),t("p",nt,"Ngày "+o(l(h)(n.hoa_don.data.ngay).format("DD"))+" tháng "+o(l(h)(n.hoa_don.data.ngay).format("MM"))+" năm "+o(l(h)(n.hoa_don.data.ngay).format("YYYY")),1)]),t("div",ot,[t("div",at,[t("div",st,[t("table",null,[t("tr",null,[n.hoa_don.data.loai===1?(a(),s("td",et,it)):d("",!0),n.hoa_don.data.loai===0?(a(),s("td",ct,_t)):d("",!0),t("td",ht,[n.hoa_don.data.loai===1?(a(),s("span",ut,o((b=n.hoa_don.data.khach_hang)==null?void 0:b.ten),1)):d("",!0),n.hoa_don.data.loai===0?(a(),s("span",ft,o((k=n.hoa_don.data.nha_cung_cap)==null?void 0:k.ten),1)):d("",!0)]),gt,t("td",null,o(n.hoa_don.data.ma),1)]),t("tr",null,[rt,t("td",null,[n.hoa_don.data.loai===1?(a(),s("span",mt,o((p=n.hoa_don.data.khach_hang)==null?void 0:p.dia_chi),1)):d("",!0),n.hoa_don.data.loai===0?(a(),s("span",vt,o((w=n.hoa_don.data.nha_cung_cap)==null?void 0:w.dia_chi),1)):d("",!0)]),yt,t("td",null,[n.hoa_don.data.loai===1?(a(),s("span",xt,o((S=n.hoa_don.data.khach_hang)==null?void 0:S.dien_thoai),1)):d("",!0),n.hoa_don.data.loai===0?(a(),s("span",bt,o((N=n.hoa_don.data.nha_cung_cap)==null?void 0:N.dien_thoai),1)):d("",!0)])])])])]),t("table",kt,[pt,t("tbody",null,[n.hoa_don.data.chi_tiet_hoa_don.length===0?(a(),s("tr",wt,Nt)):(a(!0),s(q,{key:1},M(n.hoa_don.data.chi_tiet_hoa_don,(e,H)=>{var B,T,K;return a(),s("tr",{key:e.id},[t("td",Bt,o(H+1),1),t("td",Tt,o((B=e==null?void 0:e.san_pham)==null?void 0:B.ten),1),t("td",Kt,o(e==null?void 0:e.so_luong),1),t("td",Pt,o((K=(T=e==null?void 0:e.san_pham)==null?void 0:T.don_vi_tinh)==null?void 0:K.ten),1),t("td",It,o(e==null?void 0:e.gia.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")),1),t("td",Ht,o(e==null?void 0:e.thanh_tien.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")),1)])}),128)),t("tr",null,[Vt,t("td",Dt,[t("b",null,o(n.hoa_don.data.tong_tien.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")),1)])])])]),t("div",Yt,[t("div",qt,[Mt,t("i",null,o(l(V)(n.hoa_don.data.tong_tien))+" đồng",1)]),jt,t("div",zt,[n.hoa_don.data.loai===0?(a(),s("p",Et,[Ft,_(o(n.hoa_don.data.no_cu_ncc<0?0:n.hoa_don.data.no_cu_ncc.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")),1)])):d("",!0),n.hoa_don.data.loai===1?(a(),s("p",Ot,[Ut,_(o(n.hoa_don.data.no_cu_kh<0?0:n.hoa_don.data.no_cu_kh.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")),1)])):d("",!0),n.hoa_don.data.loai===0?(a(),s("p",At,[Ct,_(o(n.hoa_don.data.no_moi_ncc.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")),1)])):d("",!0),n.hoa_don.data.loai===1?(a(),s("p",Gt,[Lt,_(o(n.hoa_don.data.no_moi_kh.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")),1)])):d("",!0)])]),Qt])])])])])}}},an=F(Wt,[["__scopeId","data-v-2037dc6e"]]);export{an as default};
