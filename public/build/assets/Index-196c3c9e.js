import{h,i as w,j as D,q as T,o as l,b as I,d as j,a as e,e as C,w as M,f as N,u as i,p as S,c,k,F as B,g as m,O,n as E,t as r,x as V,y as F}from"./app-5437a568.js";import{_ as R}from"./MainLayout-0bc2a7eb.js";import q from"./DuAnModal-d10c7573.js";import{f as z}from"./script-4eb152de.js";import A from"./ChiTiet2-be4c915c.js";import L from"./TheoDoi-55abde02.js";import{l as U}from"./lodash-11f4bc75.js";import{_ as X}from"./_plugin-vue_export-helper-c27b6911.js";/* empty css                     *//* empty css              *//* empty css                                                                 */const v=s=>(V("data-v-6218b801"),s=s(),F(),s),G={class:"card shadow card-child",style:{}},H={class:"card-body p-0"},J={class:"row"},K={class:"col-md-3"},P={class:"row"},Q={class:"col-md-4"},W={class:"col-md-8 pt-3 pl-3"},Y={class:"input-group"},Z=v(()=>e("div",{class:"input-group-append"},[e("button",{class:"btn btn-primary",type:"submit"},[e("i",{class:"fas fa-search"})])],-1)),tt=v(()=>e("h4",{class:"txt-color font-weight-bold ml-3 mb-3"},"Danh sách dự án",-1)),et=["onClick"],at={class:"d-flex align-items-center gap-[10px] ms-1"},ot={class:"font-bold mb-0 mt-[2px]"},nt={class:"mb-0 ms-1 mt-2 text-secondary"},st={class:"d-flex justify-content-between align-items-center mt-2 mb-0"},it={class:"d-flex align-items-center gap-[5px]"},dt=["src"],_t={key:1,src:"/uploads/avatardefault.png",alt:"",class:"object-cover",style:{width:"30px",height:"30px"}},lt={class:"text-secondary"},ct={class:"text-secondary"},rt={class:"col-md-7 p-3"},ut={class:"col-md-2 pt-3 pr-4"},ht={__name:"Index",props:{du_an_list:Object,nhan_vien_list:Object},setup(s){const g=s;let u=h({id:"",ten:"",ngay_bat_dau:"",ngay_ket_thuc:"",user_id:"",nhan_vien:{},mo_ta:"",trang_thai:"",parent_id:"",children:[],files:[],binh_luan:[]}),o=h({id:"",ten:"",ngay_bat_dau:"",ngay_ket_thuc:"",user_id:"",nhan_vien:{},mo_ta:"",trang_thai:"",parent_id:"",children:[],files:[],binh_luan:[],nguoi_theo_doi:[]}),d=h("");function f(t){u.value={id:"",ten:"",ngay_bat_dau:"",ngay_ket_thuc:"",user_id:"",mo_ta:"",trang_thai:"",parent_id:t,children:[],files:[]},$("#duanmodal").modal("show")}const _=w(()=>g.du_an_list);D(d,t=>{O.visit(route("duan.index",{search:t}),{preserveState:!0})});function p(t){o.value={id:t.id,ten:t.ten,ngay_bat_dau:t.ngay_bat_dau,ngay_ket_thuc:t.ngay_ket_thuc,user_id:t.user_id,mo_ta:t.mo_ta,trang_thai:t.trang_thai,parent_id:t.parent_id,children:t.children,files:t.files,binh_luan:t.binh_luan,nguoi_theo_doi:t.nguoi_theo_doi}}T(()=>{p(_.value[0]?_.value[0]:{})});function b(){u.value={...o.value},$("#duanmodal").modal("show")}function y(t){o.value.nguoi_theo_doi=o.value.nguoi_theo_doi.filter(n=>n.id!=t),_.value.find(n=>n.id==o.value.id).nguoi_theo_doi=U.cloneDeep(o.value.nguoi_theo_doi),axios({method:"post",url:route("dexuat.xoatheodoi",{id:t})})}function x(t){t&&(o.value.nguoi_theo_doi=[..._.value.find(n=>n.id==t).nguoi_theo_doi])}return(t,n)=>(l(),I(R,null,{default:j(()=>[e("div",G,[e("div",H,[e("div",J,[e("div",K,[e("div",P,[e("div",Q,[e("a",{onClick:n[0]||(n[0]=C(a=>f(""),["prevent"])),class:"btn btn-primary form-control m-3"},"Thêm dự án")]),e("div",W,[e("div",Y,[M(e("input",{"onUpdate:modelValue":n[1]||(n[1]=a=>S(d)?d.value=a:d=a),type:"text",name:"search",class:"form-control",placeholder:"Tìm kiếm dự án"},null,512),[[N,i(d)]]),Z])])]),tt,(l(!0),c(B,null,k(_.value,a=>(l(),c("div",{onClick:mt=>p(a),class:E(["p-3 border-bottom",{"bg-blue-200":i(o).id===a.id},{"bg-neutral-100 ":i(o).id!==a.id}])},[e("div",at,[e("h5",ot,r(a.ten),1)]),e("p",nt,r(a.mo_ta.length>100?a.mo_ta.slice(0,100)+"...":a.mo_ta),1),e("div",st,[e("div",it,[a.nhan_vien.hinh_anh?(l(),c("img",{key:0,src:"/uploads/nhan_vien/"+a.nhan_vien.hinh_anh,alt:"",class:"object-cover",style:{width:"30px",height:"30px","border-radius":"50%"}},null,8,dt)):(l(),c("img",_t)),e("span",lt,r(a.created_by.name),1)]),e("span",ct,r(i(z)(a.created_at)),1)])],10,et))),256))]),e("div",rt,[m(A,{du_an:i(o),users:s.nhan_vien_list},null,8,["du_an","users"])]),e("div",ut,[m(L,{du_an:i(o),onEditNguoiTheoDoi:b,onXoaNguoiTheoDoi:y},null,8,["du_an"])])])])]),m(q,{du_an:i(u),users:s.nhan_vien_list,onReload:x},null,8,["du_an","users"])]),_:1}))}},jt=X(ht,[["__scopeId","data-v-6218b801"]]);export{jt as default};
