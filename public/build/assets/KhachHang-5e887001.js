import{h,i as N,j as u,o as c,b as O,d as U,a as t,w as g,f as m,u as j,p as F,c as i,k as x,F as T,l as H,g as M,m as B,O as _,t as l,e as C,n as z}from"./app-843415b2.js";import{_ as E}from"./MainLayout-52fdeb9e.js";import L from"./ChiTietKhachHang-94f022f8.js";/* empty css                     *//* empty css              */import"./moment-a9aaa855.js";const P=t("div",{class:"card shadow"},[t("div",{class:"card-body card-brc"},[t("p",{class:"txt-color mb-0 font-weight-bold"},[B("Báo cáo "),t("i",{class:"fa fa-angle-right mr-2 ml-2"}),B("Công nợ khách hàng")])])],-1),R={class:"card shadow card-child",style:{}},X={class:"card-body"},A={class:"row mb-3"},G={class:"col-md-12"},I={class:"row"},J={class:"col-md-5"},Q={class:"row"},W={class:"col-lg-6"},Y={class:"form-record"},Z=t("label",null,"Từ ngày",-1),tt={class:"col-lg-6"},at={class:"form-record"},et=t("label",null,"Đến ngày",-1),st=t("div",{class:"col-md-4"},null,-1),nt={class:"col-md-3"},ot={class:"input-group"},lt=t("div",{class:"input-group-append"},[t("button",{class:"btn btn-primary",type:"submit"},[t("i",{class:"fas fa-search"})])],-1),ct={class:"table table-bordered table-responsive-md"},it=t("thead",null,[t("tr",null,[t("th",null,"STT"),t("th",null,"Tên khách hàng"),t("th",null,"Số điện thoại"),t("th",null,"Địa chỉ"),t("th",null,"Tồn đầu"),t("th",null,"Xuất"),t("th",null,"Thu"),t("th",null,"Tồn cuối"),t("th")])],-1),dt={key:0},rt=t("td",{colspan:"8",class:"text-center"},"Không có dữ liệu",-1),ht=[rt],_t={class:"quantity"},ut={class:"quantity"},gt={class:"money"},mt={class:"money"},vt={class:"quantity"},pt={style:{width:"5%"}},yt=["onClick"],bt={class:"float-right mt-3 mb-0"},ft={class:"row"},kt={class:"col-md-12 col-lg-12 text-center"},wt={key:0,class:"pagination"},St=["onClick"],Dt={__name:"KhachHang",props:{khach_hang_list:Object},setup(V){const q=V;let d=h("");const n=h("2024-01-01"),o=h("2025-01-01"),v=h(null),r=N(()=>q.khach_hang_list);u(d,s=>{_.visit(route("baocaocongno.khachhang",{search:s,ngay_bat_dau:n.value,ngay_ket_thuc:o.value}),{preserveState:!0})}),u(n,(s,e)=>{if(!s){n.value=e;return}if(o.value<s){alert("Ngày bắt đầu không được lớn hơn ngày kết thúc"),n.value=e;return}_.visit(route("baocaocongno.khachhang",{ngay_bat_dau:s,ngay_ket_thuc:o.value}),{preserveState:!0})}),u(o,(s,e)=>{if(!s){o.value=e;return}if(n.value>s){alert("Ngày kết thúc không được nhỏ hơn ngày bắt đầu"),o.value=e;return}_.visit(route("baocaocongno.khachhang",{ngay_ket_thuc:s,ngay_bat_dau:n.value}),{preserveState:!0})});function D(s){_.visit(s,{preserveState:!0})}async function K(s){v.value=await axios({method:"get",url:route("baocaocongno.chitietkh",{id:s})}).then(e=>e.data).catch(e=>{console.log(e)}),$("#chitietkhmodal").modal("show")}return(s,e)=>(c(),O(E,null,{default:U(()=>{var p,y;return[P,t("div",R,[t("div",X,[t("div",A,[t("div",G,[t("form",null,[t("div",I,[t("div",J,[t("div",Q,[t("div",W,[t("div",Y,[Z,g(t("input",{type:"date","onUpdate:modelValue":e[0]||(e[0]=a=>n.value=a),class:"form-control",name:"ngay_bat_dau"},null,512),[[m,n.value]])])]),t("div",tt,[t("div",at,[et,g(t("input",{type:"date","onUpdate:modelValue":e[1]||(e[1]=a=>o.value=a),class:"form-control",name:"ngay_ket_thuc"},null,512),[[m,o.value]])])])])]),st,t("div",nt,[t("div",ot,[g(t("input",{"onUpdate:modelValue":e[2]||(e[2]=a=>F(d)?d.value=a:d=a),type:"text",name:"search",class:"form-control",placeholder:"Tìm kiếm nhà cung cấp"},null,512),[[m,j(d)]]),lt])])])])])]),t("table",ct,[it,t("tbody",null,[((p=r.value)==null?void 0:p.length)===0?(c(),i("tr",dt,ht)):(c(!0),i(T,{key:1},x(r.value,(a,b)=>{var f,k,w,S;return c(),i("tr",{key:a.id},[t("td",_t,l(b+1),1),t("td",null,l(a.ten),1),t("td",null,l(a.dien_thoai),1),t("td",null,l(a.dia_chi),1),t("td",ut,l(((f=a.ton_dau)==null?void 0:f.toString().replace(/\B(?=(\d{3})+(?!\d))/g,","))||0),1),t("td",gt,l(((k=a.xuat)==null?void 0:k.toString().replace(/\B(?=(\d{3})+(?!\d))/g,","))||0),1),t("td",mt,l(((w=a.thu)==null?void 0:w.toString().replace(/\B(?=(\d{3})+(?!\d))/g,","))||0),1),t("td",vt,l(((S=a.ton_cuoi)==null?void 0:S.toString().replace(/\B(?=(\d{3})+(?!\d))/g,","))||0),1),t("td",pt,[t("button",{onClick:C(xt=>K(a.id),["prevent"]),class:"btn btn-primary btn-sm"},"Chi tiết",8,yt)])])}),128))])]),t("div",bt,[t("div",ft,[t("div",kt,[((y=r.value)==null?void 0:y.total)>10?(c(),i("ul",wt,[(c(!0),i(T,null,x(r.value.links.slice(1,-1),a=>(c(),i("li",{key:a,class:"page-item"},[t("a",{class:z(["page-link",{"bg-primary":a.label===r.value.current_page.toString()}]),onClick:C(b=>D(a.url),["prevent"])},l(a.label),11,St)]))),128))])):H("",!0)])])])])]),M(L,{khach_hang:v.value,ngay_bat_dau:n.value,ngay_ket_thuc:o.value},null,8,["khach_hang","ngay_bat_dau","ngay_ket_thuc"])]}),_:1}))}};export{Dt as default};