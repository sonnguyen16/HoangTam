import{h as x,i as j,j as N,o,b as V,d as K,a as t,e as d,m as E,t as e,w as F,f as I,u as _,p as z,c as i,k as w,F as C,l as L,g as P,O as h,n as R}from"./app-0f6e209f.js";import{_ as U}from"./MainLayout-331f4731.js";import X from"./NhapKhoModal-339103f7.js";import{h as M}from"./moment-a9aaa855.js";/* empty css                     *//* empty css              */import"./_plugin-vue_export-helper-c27b6911.js";import"./lodash-509ef2c6.js";const q={class:"card shadow card-child",style:{}},A={class:"card-body"},G={class:"row mb-3"},H={class:"col-md-2"},J={class:"col-md-2 d-flex align-items-center"},Q=t("b",null,"Tổng tiền nhập: ",-1),W={class:"col-md-8"},Z={class:"row"},tt=t("div",{class:"col-md-3"},null,-1),nt=t("div",{class:"col-md-6"},null,-1),at={class:"col-md-3"},et={class:"input-group"},ot=t("div",{class:"input-group-append"},[t("button",{class:"btn btn-primary",type:"submit"},[t("i",{class:"fas fa-search"})])],-1),st={class:"table table-bordered table-responsive-md"},lt=t("thead",null,[t("tr",null,[t("th",null,"STT"),t("th",null,"Ngày"),t("th",null,"Mã phiếu"),t("th",null,"Nhà cung cấp"),t("th",null,"Kho"),t("th",null,"Ngày tạo"),t("th",null,"Tổng tiền"),t("th",null,"Thao tác")])],-1),it={key:0},ct=t("td",{colspan:"9",class:"text-center"},"Không có dữ liệu",-1),dt=[ct],_t={class:"text-center"},ht={class:"text-center"},rt={class:"text-center"},ut={class:"text-center"},mt={class:"money"},pt={style:{width:"11%"},class:"text-center"},gt=["onClick"],vt=["href"],bt=["onClick"],ft={class:"float-right mt-3 mb-0"},yt={class:"row"},kt={class:"col-md-12 col-lg-12 text-center"},xt={key:0,class:"pagination"},wt=["onClick"],jt={__name:"Index",props:{hoa_don_list:Object,nha_cung_cap_list:Object,kho_list:Object,san_pham_list:Object,du_an_list:Object},setup(s){const S=s;let r=x({id:"",ma:"",ngay:"",nha_cung_cap:{},kho:{},ghi_chu:"",chi_tiet_hoa_don:[],du_an_id:""}),c=x("");function T(){r.value={id:"",ma:"",ngay:"",nha_cung_cap:{},kho:{},ghi_chu:"",chi_tiet_hoa_don:[],du_an_id:""},$("#hoadonmodal").modal("show")}const l=j(()=>S.hoa_don_list);N(c,a=>{h.visit(route("hoadon.index",{search:a,loai:"nhapkho"}),{preserveState:!0})});function Y(a){h.visit(a,{preserveState:!0})}function B(a){r.value={id:a.id,ma:a.ma,nha_cung_cap:a.nha_cung_cap,kho:a.kho,ghi_chu:a.ghi_chu,chi_tiet_hoa_don:a.chi_tiet_hoa_don,ngay:a.ngay,du_an_id:a.du_an_id},$("#hoadonmodal").modal("show")}function D(a){confirm("Bạn có chắc chắn muốn xóa hóa đơn này không?")&&h.delete(route("hoadon.delete",{id:a}),{onSuccess:()=>{h.visit(route("hoadon.index",{loai:"nhapkho"}))},onError:()=>{console.log(form.errors)}})}return(a,u)=>(o(),V(U,null,{default:K(()=>{var m,p,g,v,b;return[t("div",q,[t("div",A,[t("div",G,[t("div",H,[t("a",{onClick:d(T,["prevent"]),class:"btn btn-primary form-control"},"Thêm phiếu nhập kho")]),t("div",J,[Q,E(" "+e(((m=s.hoa_don_list.data[0])==null?void 0:m.tong_tien_nhap.toString().replace(/\B(?=(\d{3})+(?!\d))/g,","))||0),1)]),t("div",W,[t("form",null,[t("div",Z,[tt,nt,t("div",at,[t("div",et,[F(t("input",{"onUpdate:modelValue":u[0]||(u[0]=n=>z(c)?c.value=n:c=n),type:"text",name:"search",class:"form-control",placeholder:"Tìm kiếm hóa đơn"},null,512),[[I,_(c)]]),ot])])])])])]),t("table",st,[lt,t("tbody",null,[((p=l.value)==null?void 0:p.data.length)===0?(o(),i("tr",it,dt)):(o(!0),i(C,{key:1},w((g=l.value)==null?void 0:g.data,(n,f)=>{var y,k;return o(),i("tr",{key:n.id},[t("td",_t,e(f+1),1),t("td",ht,e(_(M)(n.ngay).format("DD/MM/YYYY")),1),t("td",rt,e(n.ma),1),t("td",null,e((y=n.nha_cung_cap)==null?void 0:y.ten),1),t("td",null,e((k=n.kho)==null?void 0:k.ten),1),t("td",ut,e(_(M)(n.created_at).format("DD/MM/YYYY")),1),t("td",mt,e(n.tong_tien.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")),1),t("td",pt,[t("a",{class:"btn btn-primary btn-sm d-inline-block mr-2",onClick:d(O=>B(n),["prevent"])},"Sửa",8,gt),t("a",{class:"btn btn-primary btn-sm d-inline-block mr-2",target:"_blank",href:a.route("hoadon.print",{id:n.id})},"In phiếu",8,vt),t("a",{class:"btn btn-danger btn-sm",onClick:d(O=>D(n.id),["prevent"])},"Xóa",8,bt)])])}),128))])]),t("div",ft,[t("div",yt,[t("div",kt,[((v=l.value)==null?void 0:v.meta.total)>((b=l.value)==null?void 0:b.meta.per_page)?(o(),i("ul",xt,[(o(!0),i(C,null,w(l.value.meta.links.slice(1,-1),n=>(o(),i("li",{key:n,class:"page-item"},[t("a",{class:R(["page-link",{"bg-primary":n.label===l.value.meta.current_page.toString()}]),onClick:d(f=>Y(n.url),["prevent"])},e(n.label),11,wt)]))),128))])):L("",!0)])])])])]),P(X,{hoa_don:_(r),nha_cung_cap_list:s.nha_cung_cap_list,kho_list:s.kho_list,san_pham_list:s.san_pham_list,du_an_list:s.du_an_list},null,8,["hoa_don","nha_cung_cap_list","kho_list","san_pham_list","du_an_list"])]}),_:1}))}};export{jt as default};