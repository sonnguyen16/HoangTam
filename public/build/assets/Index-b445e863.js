import{h as f,i as T,j,o as e,b as B,d as M,a as t,e as d,w as N,f as P,u,p as V,c as o,k as E,F,g as y,O as _,t as a}from"./app-f64b3015.js";import{_ as I}from"./MainLayout-6535bde7.js";import K from"./PhieuThuModal-159915c0.js";import{f as L}from"./script-4eb152de.js";import{_ as R}from"./Pagination-d612a44f.js";/* empty css                     *//* empty css              */import"./_plugin-vue_export-helper-c27b6911.js";import"./moment-a9aaa855.js";const U={class:"card shadow card-child",style:{}},X={class:"card-body"},q={class:"row mb-3"},z={class:"col-md-2"},A={class:"col-md-10"},G={class:"row"},H=t("div",{class:"col-md-3"},null,-1),J=t("div",{class:"col-md-6"},null,-1),Q={class:"col-md-3"},W={class:"input-group"},Y=t("div",{class:"input-group-append"},[t("button",{class:"btn btn-primary",type:"submit"},[t("i",{class:"fas fa-search"})])],-1),Z={class:"table table-bordered table-responsive-md"},tt=t("thead",null,[t("tr",null,[t("th",null,"STT"),t("th",null,"Mã phiếu"),t("th",null,"Khách hàng"),t("th",null,"Người thu"),t("th",null,"Dự án"),t("th",null,"Trạng thái"),t("th",null,"Ngày tạo"),t("th",null,"Số tiền"),t("th",null,"Thao tác")])],-1),it={key:0},nt=t("td",{colspan:"9",class:"text-center"},"Không có dữ liệu",-1),at=[nt],et={key:0,class:"badge badge-warning"},st={key:1,class:"badge badge-success"},lt={class:"date"},ot={class:"money"},_t={style:{width:"10%"}},ht=["onClick"],ct=["href"],dt=["onClick"],wt={__name:"Index",props:{phieu_thu_chi_list:Object,khach_hang_list:Object,du_an_list:Object,nhan_vien_list:Object,loai_thu_chi_list:Object},setup(w){const s=w;let h=f({id:"",ma:"",khach_hang_id:"",ngay:"",du_an_id:"",nhan_vien_id:"",loai_thu_chi_id:"",ly_do:"",so_tien:0,trang_thai:""}),l=f("");function k(){h.value={id:"",ma:"",khach_hang_id:"",ngay:"",du_an_id:"",nhan_vien_id:"",loai_thu_chi_id:"",ly_do:"",so_tien:0,trang_thai:""},$("#phieuthuchimodal").modal("show")}const c=T(()=>s.phieu_thu_chi_list);j(l,i=>{_.visit(route("phieuthuchi.index",{search:i,loai:"phieuthu"}),{preserveState:!0})});function x(i){_.visit(i,{preserveState:!0})}function C(i){h.value={id:i.id,ma:i.ma,khach_hang_id:i.khach_hang_id,ngay:i.ngay,du_an_id:i.du_an_id,nhan_vien_id:i.nhan_vien_id,loai_thu_chi_id:i.loai_thu_chi_id,ly_do:i.ly_do,so_tien:i.so_tien,trang_thai:i.trang_thai},$("#phieuthuchimodal").modal("show")}function S(i){confirm("Bạn có chắc chắn muốn xóa phiếu thu này không?")&&_.delete(route("phieuthuchi.delete",{id:i}),{onSuccess:()=>{_.visit(route("phieuthuchi.index",{loai:"phieuthu"}))},onError:()=>{console.log(form.errors)}})}return(i,r)=>(e(),B(I,null,{default:M(()=>{var p,m;return[t("div",U,[t("div",X,[t("div",q,[t("div",z,[t("a",{onClick:d(k,["prevent"]),class:"btn btn-primary form-control"},"Thêm phiếu thu")]),t("div",A,[t("form",null,[t("div",G,[H,J,t("div",Q,[t("div",W,[N(t("input",{"onUpdate:modelValue":r[0]||(r[0]=n=>V(l)?l.value=n:l=n),type:"text",name:"search",class:"form-control",placeholder:"Tìm kiếm phiếu thu"},null,512),[[P,u(l)]]),Y])])])])])]),t("table",Z,[tt,t("tbody",null,[((p=c.value)==null?void 0:p.data.length)===0?(e(),o("tr",it,at)):(e(!0),o(F,{key:1},E((m=c.value)==null?void 0:m.data,(n,D)=>{var g,v,b;return e(),o("tr",{key:n.id},[t("td",null,a(D+1),1),t("td",null,a(n.ma),1),t("td",null,a((g=n.khach_hang)==null?void 0:g.ten),1),t("td",null,a((v=n.nhan_vien)==null?void 0:v.name),1),t("td",null,a((b=n.du_an)==null?void 0:b.ten),1),t("td",null,[n.trang_thai===0?(e(),o("span",et,"Chưa thanh toán")):(e(),o("span",st,"Đã thanh toán"))]),t("td",lt,a(u(L)(n.created_at)),1),t("td",ot,a(n.so_tien.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")),1),t("td",_t,[t("a",{class:"btn btn-primary btn-sm d-inline-block mr-2",onClick:d(O=>C(n),["prevent"])},"Sửa",8,ht),t("a",{class:"btn btn-primary btn-sm d-inline-block mr-2",target:"_blank",href:i.route("phieuthuchi.print",{id:n.id})},"In Phiếu",8,ct),t("a",{class:"btn btn-danger btn-sm",onClick:d(O=>S(n.id),["prevent"])},"Xóa",8,dt)])])}),128))])]),y(R,{allData:c.value,onChangePage:x},null,8,["allData"])])]),y(K,{phieu_thu:u(h),khach_hang_list:s.khach_hang_list,du_an_list:s.du_an_list,nhan_vien_list:s.nhan_vien_list,loai_thu_chi_list:s.loai_thu_chi_list},null,8,["phieu_thu","khach_hang_list","du_an_list","nhan_vien_list","loai_thu_chi_list"])]}),_:1}))}};export{wt as default};
