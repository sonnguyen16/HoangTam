import{h as r,i as V,j as h,o as c,b as D,d as O,a as t,w as g,f as p,c as i,k as w,F as x,l as U,g as j,u as F,O as _,t as l,e as S,n as M}from"./app-0f6e209f.js";import{_ as q}from"./MainLayout-331f4731.js";import z from"./ChiTietNhaCungCap-7700bddd.js";/* empty css                     *//* empty css              */import"./_plugin-vue_export-helper-c27b6911.js";import"./moment-a9aaa855.js";const E={class:"card shadow card-child",style:{}},I={class:"card-body"},K={class:"row mb-3"},L={class:"col-md-12"},P={class:"row"},A={class:"col-md-5"},G={class:"row"},H={class:"col-lg-6"},J={class:"form-record"},Q=t("label",null,"Từ ngày",-1),R={class:"col-lg-6"},W={class:"form-record"},X=t("label",null,"Đến ngày",-1),Y=t("div",{class:"col-md-4"},null,-1),Z={class:"col-md-3"},tt={class:"input-group"},et=t("div",{class:"input-group-append"},[t("button",{class:"btn btn-primary",type:"submit"},[t("i",{class:"fas fa-search"})])],-1),nt={class:"table table-bordered table-responsive-md"},at=t("thead",null,[t("tr",null,[t("th",null,"STT"),t("th",null,"Tên nhà cung cấp"),t("th",null,"Số điện thoại"),t("th",null,"Địa chỉ"),t("th",null,"Tồn đầu"),t("th",null,"Nhập"),t("th",null,"Chi"),t("th",null,"Tồn cuối"),t("th")])],-1),st={key:0},ot=t("td",{colspan:"8",class:"text-center"},"Không có dữ liệu",-1),lt=[ot],ct={class:"quantity"},it={class:"money"},dt={class:"money"},rt={class:"money"},_t={class:"money"},ut={style:{width:"5%"}},ht=["onClick"],gt={class:"float-right mt-3 mb-0"},pt={class:"row"},mt={class:"col-md-12 col-lg-12 text-center"},vt={key:0,class:"pagination"},yt=["onClick"],Bt={__name:"Index",props:{nha_cung_cap_list:Object},setup(C){const T=C,u=r(""),s=r("2024-01-01"),o=r("2025-01-01");let m=r(null);const d=V(()=>T.nha_cung_cap_list);h(u,a=>{_.visit(route("baocaocongno.index",{search:a,ngay_bat_dau:s.value,ngay_ket_thuc:o.value}),{preserveState:!0})}),h(s,(a,n)=>{if(!a){s.value=n;return}if(o.value<a){alert("Ngày bắt đầu không được lớn hơn ngày kết thúc"),s.value=n;return}_.visit(route("baocaocongno.index",{ngay_bat_dau:a,ngay_ket_thuc:o.value}),{preserveState:!0})}),h(o,(a,n)=>{if(!a){o.value=n;return}if(s.value>a){alert("Ngày kết thúc không được nhỏ hơn ngày bắt đầu"),o.value=n;return}_.visit(route("baocaocongno.index",{ngay_ket_thuc:a,ngay_bat_dau:s.value}),{preserveState:!0})});function B(a){_.visit(a,{preserveState:!0})}async function N(a){m.value=await axios({method:"get",url:route("baocaocongno.chitietncc",{id:a})}).then(n=>n.data).catch(n=>{console.log(n)}),$("#chitietnccmodal").modal("show")}return(a,n)=>(c(),D(q,null,{default:O(()=>{var v;return[t("div",E,[t("div",I,[t("div",K,[t("div",L,[t("form",null,[t("div",P,[t("div",A,[t("div",G,[t("div",H,[t("div",J,[Q,g(t("input",{type:"date","onUpdate:modelValue":n[0]||(n[0]=e=>s.value=e),class:"form-control",name:"ngay_bat_dau"},null,512),[[p,s.value]])])]),t("div",R,[t("div",W,[X,g(t("input",{type:"date","onUpdate:modelValue":n[1]||(n[1]=e=>o.value=e),class:"form-control",name:"ngay_ket_thuc"},null,512),[[p,o.value]])])])])]),Y,t("div",Z,[t("div",tt,[g(t("input",{"onUpdate:modelValue":n[2]||(n[2]=e=>u.value=e),type:"text",name:"search",class:"form-control",placeholder:"Tìm kiếm nhà cung cấp"},null,512),[[p,u.value]]),et])])])])])]),t("table",nt,[at,t("tbody",null,[d.value.length===0?(c(),i("tr",st,lt)):(c(!0),i(x,{key:1},w(d.value,(e,y)=>{var b,f,k;return c(),i("tr",{key:e.id},[t("td",ct,l(y+1),1),t("td",null,l(e.ten),1),t("td",null,l(e.dien_thoai),1),t("td",null,l(e.dia_chi),1),t("td",it,l(((b=e.ton_dau)==null?void 0:b.toString().replace(/\B(?=(\d{3})+(?!\d))/g,","))||0),1),t("td",dt,l(((f=e.nhap)==null?void 0:f.toString().replace(/\B(?=(\d{3})+(?!\d))/g,","))||0),1),t("td",rt,l(((k=e.chi)==null?void 0:k.toString().replace(/\B(?=(\d{3})+(?!\d))/g,","))||0),1),t("td",_t,l(e.ton_cuoi.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")||0),1),t("td",ut,[t("button",{onClick:S(bt=>N(e.id),["prevent"]),class:"btn btn-primary btn-sm"},"Chi tiết",8,ht)])])}),128))])]),t("div",gt,[t("div",pt,[t("div",mt,[((v=d.value)==null?void 0:v.total)>10?(c(),i("ul",vt,[(c(!0),i(x,null,w(d.value.links.slice(1,-1),e=>(c(),i("li",{key:e,class:"page-item"},[t("a",{class:M(["page-link",{"bg-primary":e.label===d.value.current_page.toString()}]),onClick:S(y=>B(e.url),["prevent"])},l(e.label),11,yt)]))),128))])):U("",!0)])])])])]),j(z,{nha_cung_cap:F(m),ngay_bat_dau:s.value,ngay_ket_thuc:o.value},null,8,["nha_cung_cap","ngay_bat_dau","ngay_ket_thuc"])]}),_:1}))}};export{Bt as default};