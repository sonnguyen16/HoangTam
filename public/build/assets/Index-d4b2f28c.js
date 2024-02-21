import{h as f,i as j,j as B,o as n,b as T,d as M,a as t,e as d,w as N,f as P,u,k as V,c as o,l as E,F,g as y,p as w,O as _,t as e}from"./app-44f1296a.js";import{_ as I}from"./MainLayout-d75b8e7f.js";import K from"./PhieuThuModal-050a9813.js";import{f as L}from"./script-4eb152de.js";import{_ as R}from"./Pagination-cd50869f.js";/* empty css                     *//* empty css              */import"./moment-a9aaa855.js";const U=t("div",{class:"card shadow"},[t("div",{class:"card-body card-brc"},[t("p",{class:"txt-color mb-0 font-weight-bold"},[w("Phiếu thu chi "),t("i",{class:"fa fa-angle-right mr-2 ml-2"}),w(" Phiếu thu")])])],-1),X={class:"card shadow card-child",style:{}},q={class:"card-body"},z={class:"row mb-3"},A={class:"col-md-2"},G={class:"col-md-10"},H={class:"row"},J=t("div",{class:"col-md-3"},null,-1),Q=t("div",{class:"col-md-6"},null,-1),W={class:"col-md-3"},Y={class:"input-group"},Z=t("div",{class:"input-group-append"},[t("button",{class:"btn btn-primary",type:"submit"},[t("i",{class:"fas fa-search"})])],-1),tt={class:"table table-bordered table-responsive-md"},at=t("thead",null,[t("tr",null,[t("th",null,"Mã phiếu"),t("th",null,"Khách hàng"),t("th",null,"Người thu"),t("th",null,"Dự án"),t("th",null,"Trạng thái"),t("th",null,"Ngày tạo"),t("th",null,"Số tiền"),t("th",null,"Thao tác")])],-1),it={key:0},nt=t("td",{colspan:"9",class:"text-center"},"Không có dữ liệu",-1),et=[nt],st={key:0,class:"badge badge-warning"},lt={key:1,class:"badge badge-success"},ot={class:"date"},_t={class:"money"},ht={style:{width:"9%"}},ct=["onClick"],dt=["href"],ut=["onClick"],wt={__name:"Index",props:{phieu_thu_chi_list:Object,khach_hang_list:Object,du_an_list:Object,nhan_vien_list:Object,loai_thu_chi_list:Object},setup(x){const s=x;let h=f({id:"",ma:"",khach_hang_id:"",ngay:"",du_an_id:"",nhan_vien_id:"",loai_thu_chi_id:"",ly_do:"",so_tien:0,trang_thai:""}),l=f("");function k(){h.value={id:"",ma:"",khach_hang_id:"",ngay:"",du_an_id:"",nhan_vien_id:"",loai_thu_chi_id:"",ly_do:"",so_tien:0,trang_thai:""},$("#phieuthuchimodal").modal("show")}const c=j(()=>s.phieu_thu_chi_list);B(l,a=>{_.visit(route("phieuthuchi.index",{search:a,loai:"phieuthu"}),{preserveState:!0})});function C(a){_.visit(a,{preserveState:!0})}function D(a){h.value={id:a.id,ma:a.ma,khach_hang_id:a.khach_hang_id,ngay:a.ngay,du_an_id:a.du_an_id,nhan_vien_id:a.nhan_vien_id,loai_thu_chi_id:a.loai_thu_chi_id,ly_do:a.ly_do,so_tien:a.so_tien,trang_thai:a.trang_thai},$("#phieuthuchimodal").modal("show")}function O(a){confirm("Bạn có chắc chắn muốn xóa phiếu thu này không?")&&_.delete(route("phieuthuchi.delete",{id:a}),{onSuccess:()=>{_.visit(route("phieuthuchi.index",{loai:"phieuthu"}))},onError:()=>{console.log(form.errors)}})}return(a,r)=>(n(),T(I,null,{default:M(()=>{var m,p;return[U,t("div",X,[t("div",q,[t("div",z,[t("div",A,[t("a",{onClick:d(k,["prevent"]),class:"btn btn-primary form-control"},"Thêm phiếu thu")]),t("div",G,[t("form",null,[t("div",H,[J,Q,t("div",W,[t("div",Y,[N(t("input",{"onUpdate:modelValue":r[0]||(r[0]=i=>V(l)?l.value=i:l=i),type:"text",name:"search",class:"form-control",placeholder:"Tìm kiếm phiếu thu"},null,512),[[P,u(l)]]),Z])])])])])]),t("table",tt,[at,t("tbody",null,[((m=c.value)==null?void 0:m.data.length)===0?(n(),o("tr",it,et)):(n(!0),o(F,{key:1},E((p=c.value)==null?void 0:p.data,i=>{var g,b,v;return n(),o("tr",{key:i.id},[t("td",null,e(i.ma),1),t("td",null,e((g=i.khach_hang)==null?void 0:g.ten),1),t("td",null,e((b=i.nhan_vien)==null?void 0:b.name),1),t("td",null,e((v=i.du_an)==null?void 0:v.ten),1),t("td",null,[i.trang_thai===0?(n(),o("span",st,"Chưa thanh toán")):(n(),o("span",lt,"Đã thanh toán"))]),t("td",ot,e(u(L)(i.created_at)),1),t("td",_t,e(i.so_tien.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")),1),t("td",ht,[t("a",{class:"btn btn-primary btn-sm d-inline-block mr-2",onClick:d(S=>D(i),["prevent"])},"Sửa",8,ct),t("a",{class:"btn btn-primary btn-sm d-inline-block mr-2",target:"_blank",href:a.route("phieuthuchi.print",{id:i.id})},"In Phiếu",8,dt),t("a",{class:"btn btn-danger btn-sm",onClick:d(S=>O(i.id),["prevent"])},"Xóa",8,ut)])])}),128))])]),y(R,{allData:c.value,onChangePage:C},null,8,["allData"])])]),y(K,{phieu_thu:u(h),khach_hang_list:s.khach_hang_list,du_an_list:s.du_an_list,nhan_vien_list:s.nhan_vien_list,loai_thu_chi_list:s.loai_thu_chi_list},null,8,["phieu_thu","khach_hang_list","du_an_list","nhan_vien_list","loai_thu_chi_list"])]}),_:1}))}};export{wt as default};
