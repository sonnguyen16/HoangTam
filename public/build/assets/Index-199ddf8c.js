import{h as w,i as V,j as K,o as e,b as N,d as Y,a as t,e as c,m as u,t as n,w as E,f as F,u as h,p as I,c as i,k as C,F as S,l as P,g as X,O as _,n as z}from"./app-843415b2.js";import{_ as L}from"./MainLayout-52fdeb9e.js";import R from"./XuatKhoModal-6c63880a.js";import{f as U}from"./script-4eb152de.js";import{h as q}from"./moment-a9aaa855.js";/* empty css                     *//* empty css              */import"./lodash-1fdda582.js";import"./ChonDonHangModal-38512160.js";import"./Pagination-4807c6a8.js";import"./_plugin-vue_export-helper-c27b6911.js";const A=t("div",{class:"card shadow"},[t("div",{class:"card-body card-brc"},[t("p",{class:"txt-color mb-0 font-weight-bold"},[u("Nhập xuất kho "),t("i",{class:"fa fa-angle-right mr-2 ml-2"}),u(" Phiếu xuất kho")])])],-1),G={class:"card shadow card-child",style:{}},H={class:"card-body"},J={class:"row mb-3"},Q={class:"col-md-2"},W={class:"col-md-2 d-flex align-items-center"},Z=t("b",null,"Tổng tiền xuất: ",-1),tt={class:"col-md-8"},at={class:"row"},ot=t("div",{class:"col-md-3"},null,-1),nt=t("div",{class:"col-md-6"},null,-1),st={class:"col-md-3"},et={class:"input-group"},lt=t("div",{class:"input-group-append"},[t("button",{class:"btn btn-primary",type:"submit"},[t("i",{class:"fas fa-search"})])],-1),it={class:"table table-bordered table-responsive-md"},dt=t("thead",null,[t("tr",null,[t("th",null,"STT"),t("th",null,"Ngày"),t("th",null,"Mã phiếu"),t("th",null,"Khách hàng"),t("th",null,"Kho"),t("th",null,"Ngày tạo"),t("th",null,"Tổng tiền"),t("th",null,"Thao tác")])],-1),ct={key:0},ht=t("td",{colspan:"8",class:"text-center"},"Không có dữ liệu",-1),_t=[ht],rt={class:"text-center"},ut={class:"text-center"},mt={class:"date"},gt={class:"money"},pt={style:{width:"10%"}},bt=["onClick"],vt=["href"],ft=["onClick"],kt={class:"float-right mt-3 mb-0"},yt={class:"row"},xt={class:"col-md-12 col-lg-12 text-center"},wt={key:0,class:"pagination"},Ct=["onClick"],Yt={__name:"Index",props:{hoa_don_list:Object,khach_hang_list:Object,kho_list:Object,san_pham_list:Object,don_hang_ban_list:Object,du_an_list:Object},setup(s){const T=s;let r=w({id:"",ma:"",khach_hang:{},kho:{},ghi_chu:"",ngay:"",du_an_id:"",chi_tiet_hoa_don:[]}),d=w("");function M(){r.value={id:"",ma:"",khach_hang:{},kho:{},ghi_chu:"",du_an_id:"",ngay:"",chi_tiet_hoa_don:[]},$("#hoadonmodal").modal("show")}const l=V(()=>T.hoa_don_list);K(d,o=>{_.visit(route("hoadon.index",{search:o,loai:"xuatkho"}),{preserveState:!0})});function O(o){_.visit(o,{preserveState:!0})}function j(o){r.value={id:o.id,ma:o.ma,khach_hang:o.khach_hang,kho:o.kho,ghi_chu:o.ghi_chu,du_an_id:o.du_an_id,ngay:o.ngay,chi_tiet_hoa_don:o.chi_tiet_hoa_don},$("#hoadonmodal").modal("show")}function B(o){confirm("Bạn có chắc chắn muốn xóa hóa đơn này không?")&&_.delete(route("hoadon.delete",{id:o}),{onSuccess:()=>{_.visit(route("hoadon.index",{loai:"xuatkho"}))},onError:()=>{console.log(form.errors)}})}return(o,m)=>(e(),N(L,null,{default:Y(()=>{var g,p,b,v,f;return[A,t("div",G,[t("div",H,[t("div",J,[t("div",Q,[t("a",{onClick:c(M,["prevent"]),class:"btn btn-primary form-control"},"Thêm phiếu xuất kho")]),t("div",W,[Z,u(" "+n(((g=s.hoa_don_list.data[0])==null?void 0:g.tong_tien_xuat.toString().replace(/\B(?=(\d{3})+(?!\d))/g,","))||0),1)]),t("div",tt,[t("form",null,[t("div",at,[ot,nt,t("div",st,[t("div",et,[E(t("input",{"onUpdate:modelValue":m[0]||(m[0]=a=>I(d)?d.value=a:d=a),type:"text",name:"search",class:"form-control",placeholder:"Tìm kiếm hóa đơn"},null,512),[[F,h(d)]]),lt])])])])])]),t("table",it,[dt,t("tbody",null,[((p=l.value)==null?void 0:p.data.length)===0?(e(),i("tr",ct,_t)):(e(!0),i(S,{key:1},C((b=l.value)==null?void 0:b.data,(a,k)=>{var y,x;return e(),i("tr",{key:a.id},[t("td",rt,n(k+1),1),t("td",ut,n(h(q)(a.ngay).format("DD/MM/YYYY")),1),t("td",null,n(a.ma),1),t("td",null,n((y=a.khach_hang)==null?void 0:y.ten),1),t("td",null,n((x=a.kho)==null?void 0:x.ten),1),t("td",mt,n(h(U)(a.created_at)),1),t("td",gt,n(a.tong_tien.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")),1),t("td",pt,[t("a",{class:"btn btn-primary btn-sm d-inline-block mr-2",onClick:c(D=>j(a),["prevent"])},"Sửa",8,bt),t("a",{class:"btn btn-primary btn-sm d-inline-block mr-2",target:"_blank",href:o.route("hoadon.print",{id:a.id})},"In phiếu",8,vt),t("a",{class:"btn btn-danger btn-sm",onClick:c(D=>B(a.id),["prevent"])},"Xóa",8,ft)])])}),128))])]),t("div",kt,[t("div",yt,[t("div",xt,[((v=l.value)==null?void 0:v.meta.total)>((f=l.value)==null?void 0:f.meta.per_page)?(e(),i("ul",wt,[(e(!0),i(S,null,C(l.value.meta.links.slice(1,-1),a=>(e(),i("li",{key:a,class:"page-item"},[t("a",{class:z(["page-link",{"bg-primary":a.label===l.value.meta.current_page.toString()}]),onClick:c(k=>O(a.url),["prevent"])},n(a.label),11,Ct)]))),128))])):P("",!0)])])])])]),X(R,{hoa_don:h(r),khach_hang_list:s.khach_hang_list,kho_list:s.kho_list,san_pham_list:s.san_pham_list,don_hang_ban_list:s.don_hang_ban_list,du_an_list:s.du_an_list},null,8,["hoa_don","khach_hang_list","kho_list","san_pham_list","don_hang_ban_list","du_an_list"])]}),_:1}))}};export{Yt as default};