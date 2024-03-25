import{h as I,E as F,o as a,c as d,a as t,n as k,D as B,l as y,e as m,u as c,m as N,t as _,F as w,k as C,b as V,x as E,y as L,Q as z,T as D,z as H,w as p,f as v,O as K}from"./app-0f6e209f.js";/* empty css                                                                 */import{_ as M}from"./_plugin-vue_export-helper-c27b6911.js";const O=s=>(E("data-v-7457ba01"),s=s(),L(),s),Q={class:"row mb-3"},q={key:0,class:"vertical-line"},G={class:"col-lg-2 d-lg-block d-none"},J={class:"col-lg-2 d-lg-block d-none"},P={class:"col-lg-2 d-lg-block d-none"},R={key:0,class:"badge badge-warning"},W={key:1,class:"badge badge-primary"},X={key:2,class:"badge badge-success"},Y={class:"col-lg-2 d-lg-block d-none"},Z={class:"col-lg-1 col-3"},tt=O(()=>t("i",{class:"fa fa-plus text-neutral-500 mr-3"},null,-1)),et=[tt],nt=O(()=>t("i",{class:"fa fa-edit text-neutral-500"},null,-1)),st=[nt],lt={__name:"TreeItem",props:{item:Object,isChild:{type:Boolean,default:!1},level:{type:Number,default:0}},emits:["edit","add"],setup(s,{emit:T}){let g=I(!0);const o=T;function h(){g.value=!g.value}return(n,r)=>{var x;const j=F("TreeItem",!0);return a(),d("div",null,[t("div",Q,[t("div",{class:k(["col-lg-3 col-9",{"child-container":s.isChild}]),style:B({paddingLeft:`${s.level*15}px`})},[t("span",{style:B({width:`${s.level*15}px`}),class:"line-connector"},null,4),s.isChild?(a(),d("span",q)):y("",!0),t("a",{onClick:m(h,["prevent"]),class:k([s.item.children?"cursor-pointer":"cursor-text","mb-2 text-black"])},[s.item.children?(a(),d("i",{key:0,class:k(["fa fa-folder mr-2 text-amber-400 text-lg",c(g)?"fa-folder-open":"fa-folder-closed"])},null,2)):y("",!0),N(" "+_(s.item.ten),1)],2)],6),t("div",G,[t("span",null,_(s.item.ngay_bat_dau),1)]),t("div",J,[t("span",null,_(s.item.ngay_ket_thuc),1)]),t("div",P,[t("span",null,[s.item.trang_thai==0?(a(),d("span",R,"Chưa thực hiện")):s.item.trang_thai==1?(a(),d("span",W,"Đang thực hiện")):s.item.trang_thai==2?(a(),d("span",X,"Đã hoàn thành")):y("",!0)])]),t("div",Y,[t("span",null,_((x=s.item.nhan_vien)==null?void 0:x.name),1)]),t("div",Z,[t("a",{onClick:r[0]||(r[0]=m(b=>{o("add",s.item.id)},["prevent"]))},et),t("a",{onClick:r[1]||(r[1]=m(b=>{o("edit",s.item)},["prevent"]))},st)])]),t("div",null,[c(g)?(a(!0),d(w,{key:0},C(s.item.children,b=>(a(),V(j,{"is-child":!0,level:s.level+1,key:b.id,item:b,onEdit:r[2]||(r[2]=f=>n.$emit("edit",f)),onAdd:r[3]||(r[3]=f=>n.$emit("add",f))},null,8,["level","item"]))),128)):y("",!0)])])}}},at=M(lt,[["__scopeId","data-v-7457ba01"]]);const u=s=>(E("data-v-b743f495"),s=s(),L(),s),ot={id:"chitietdamodal",class:"modal fade",tabindex:"-1",style:{"z-index":"1051"},role:"dialog"},dt={class:"modal-dialog modal-xl",role:"document"},it={class:"modal-content"},ct={class:"modal-header"},ut=u(()=>t("i",{class:"fa fa-times text-lg"},null,-1)),rt=[ut],_t={class:"modal-body"},ht={class:"d-flex align-items-center"},mt=u(()=>t("label",{for:"ngay_bat_dau",class:"font-weight-bold text-secondary mt-2"},"Bắt đầu:",-1)),gt=u(()=>t("label",{for:"ngay_ket_thuc",class:"font-weight-bold text-secondary mt-2"},"Kết thúc:",-1)),bt=u(()=>t("label",{for:"user",class:"font-weight-bold text-secondary mt-2"},"Tiến độ:",-1)),ft={class:"mt-3"},pt=u(()=>t("label",{for:"mo_ta",class:"font-weight-bold text-success"},"Mô tả hạng mục:",-1)),vt={class:"mt-3"},yt={class:"d-flex align-items-center mb-2"},xt=u(()=>t("label",{for:"mo_ta",class:"font-weight-bold text-success mt-2"},"Attachments:",-1)),kt=u(()=>t("label",{for:"files1",class:"btn btn-dark btn-sm mt-2 ml-3"},"Chọn file",-1)),$t=u(()=>t("span",{id:"fileList",class:"d-inline-block ml-3"},null,-1)),wt={key:0,class:"row"},Ct={class:"col-md-4"},Tt={class:"card"},jt={class:"card-body p-0"},It={class:"table table-striped"},St=u(()=>t("thead",null,[t("tr",null,[t("th",null,"File"),t("th",null,"Actions")])],-1)),Bt=["href"],Vt={key:1},Et={class:"d-flex gap-[5px] justify-content-center"},Lt=["onClick"],Mt=u(()=>t("i",{class:"fa fa-trash"},null,-1)),Ot=[Mt],Ut=["disabled"],At=u(()=>t("hr",null,null,-1)),Ft={class:"mt-4 mb-4",id:"subtasks"},Nt=u(()=>t("label",{for:"mo_ta",class:"font-weight-bold text-success"},"Hạng mục con:",-1)),zt={class:"mt-3 container"},Dt=u(()=>t("hr",null,null,-1)),Ht={id:"comments",class:"mt-4"},Kt={class:"font-weight-bold"},Qt={class:"card"},qt={class:"card-body"},Gt=["src"],Jt={key:1,src:"/uploads/avatardefault.png",alt:"avatar",class:"rounded-full w-10 object-cover"},Pt=["value"],Rt=u(()=>t("input",{id:"comment",class:"form-control border-0 flex-1",placeholder:"Nhập bình luận"},null,-1)),Wt=u(()=>t("button",{type:"submit",class:""},[t("i",{class:"fa fa-paper-plane text-lg text-primary"})],-1)),Xt={style:{"max-height":"200px",overflow:"auto"}},Yt={class:""},Zt={class:"d-flex"},te=["src"],ee={key:1,src:"/uploads/avatardefault.png",alt:"avatar",class:"rounded-full w-10 h-10 object-cover"},ne={class:"flex-1 ml-3"},se={class:"d-flex justify-content-between"},le={class:"font-weight-bold"},ae={class:"text-secondary"},oe={class:"text-md"},de=u(()=>t("div",{class:"modal-footer"},null,-1)),ie={__name:"ChiTiet",props:{du_an:Object,users:Object},emits:["edit","add"],setup(s,{emit:T}){const g=z(),o=s,h=I([]),n=D({id:"",ten:"",ngay_bat_dau:"",ngay_ket_thuc:"",user_id:"",mo_ta:"",tien_do:0,parent_id:"",children:[],files:[]});H(()=>{n.id=o.du_an.id,n.ten=o.du_an.ten,n.ngay_bat_dau=o.du_an.ngay_bat_dau,n.ngay_ket_thuc=o.du_an.ngay_ket_thuc,n.user_id=o.du_an.user_id,$("#user").val(o.du_an.user_id).trigger("change"),n.mo_ta=o.du_an.mo_ta,n.tien_do=o.du_an.tien_do,n.parent_id=o.du_an.parent_id,n.children=o.du_an.children,n.files=o.du_an.files,h.value=o.du_an.files});const r=()=>{n.post(route("duan.store"),{onSuccess:()=>{toastr.success("Cập nhật thành công")},onError:()=>{toastr.error("Có lỗi xảy ra, vui lòng thử lại")}})},j=()=>{$("#files1").val(""),$("#chitietdamodal").modal("hide"),n.reset(),n.clearErrors(),K.reload()},x=i=>{confirm("Bạn có chắc chắn muốn xóa file này không?")&&(n.files=n.files.filter(l=>l.id!==i),h.value=h.value.filter(l=>l.id!==i),axios({method:"delete",url:route("duan.file.delete",{id:i})}))};function b(i){n.files=i.target.files,h.value=[...h.value,...Array.from(i.target.files).map(l=>({ten:l.name}))]}I({id:"",ten:"",ngay_bat_dau:"",ngay_ket_thuc:"",user_id:"",nhan_vien:{},mo_ta:"",tien_do:0,parent_id:"",children:[],files:[]});const f=T,U=i=>{f("edit",i)},S=i=>{f("add",i)};function A(){axios({method:"post",url:route("binhluan.store"),data:{noi_dung:$("#comment").val(),du_an_id:o.du_an.id}}).then(i=>{$("#comment").val(""),o.du_an.binh_luan.push({noi_dung:i.data.noi_dung,nguoi_dung:i.data.nguoi_dung,created_at:i.data.created_at})}).catch(i=>{console.log(i)})}return(i,l)=>(a(),d("div",ot,[t("div",dt,[t("div",it,[t("div",ct,[t("button",{type:"button",class:"close",onClick:m(j,["prevent"])},rt)]),t("form",{onSubmit:m(r,["prevent"])},[t("div",_t,[p(t("input",{type:"hidden","onUpdate:modelValue":l[0]||(l[0]=e=>c(n).id=e),id:"id",class:"form-control"},null,512),[[v,c(n).id]]),p(t("input",{type:"text",class:"font-weight-bold border-0 w-100 text-lg pl-0","onUpdate:modelValue":l[1]||(l[1]=e=>c(n).ten=e)},null,512),[[v,c(n).ten]]),t("div",ht,[mt,p(t("input",{type:"date","onUpdate:modelValue":l[2]||(l[2]=e=>c(n).ngay_bat_dau=e),id:"ngay_bat_dau",class:"border-0 mr-5 text-secondary"},null,512),[[v,c(n).ngay_bat_dau]]),gt,p(t("input",{type:"date","onUpdate:modelValue":l[3]||(l[3]=e=>c(n).ngay_ket_thuc=e),id:"ngay_ket_thuc",class:"border-0 mr-5 text-secondary"},null,512),[[v,c(n).ngay_ket_thuc]]),bt,p(t("input",{"onUpdate:modelValue":l[4]||(l[4]=e=>c(n).tien_do=e),class:"border-0 outline-0 font-bold focus:outline-0",type:"number"},null,512),[[v,c(n).tien_do]])]),t("div",ft,[pt,p(t("textarea",{"onUpdate:modelValue":l[5]||(l[5]=e=>c(n).mo_ta=e),id:"mo_ta",class:"form-control border-0 pl-0",rows:"3"},null,512),[[v,c(n).mo_ta]])]),t("div",vt,[t("div",yt,[xt,kt,t("input",{accept:".png, .jpg, .jpeg, .gif, .bmp, .doc, .docx, .xls, .xlsx, .pdf",type:"file",onInput:l[6]||(l[6]=e=>b(e)),id:"files1",class:"d-none",multiple:""},null,32),$t]),h.value.length>0?(a(),d("div",wt,[t("div",Ct,[t("div",Tt,[t("div",jt,[t("table",It,[St,t("tbody",null,[(a(!0),d(w,null,C(h.value,e=>(a(),d("tr",{key:e.id},[t("td",null,[e.id?(a(),d("a",{key:0,href:`/uploads/du_an/${e.ten}`,target:"_blank",class:""},_(e.ten.length>40?e.ten.slice(0,40)+"...":e.ten),9,Bt)):(a(),d("span",Vt,_(e.ten),1))]),t("td",Et,[e.id?(a(),d("a",{key:0,onClick:m(ce=>x(e.id),["prevent"]),class:"btn btn-sm btn-danger"},Ot,8,Lt)):y("",!0)])]))),128))])])])])])])):y("",!0),t("button",{type:"submit",disabled:c(n).processing,class:"btn btn-primary right-0"},"Lưu",8,Ut),At,t("div",Ft,[Nt,t("a",{class:"btn btn-primary btn-sm ml-3 font-weight-bold",onClick:l[7]||(l[7]=m(e=>S(s.du_an.id),["prevent"]))},"Thêm"),t("div",zt,[(a(!0),d(w,null,C(s.du_an.children,e=>(a(),V(at,{class:"",key:e.id,item:e,onEdit:U,onAdd:S},null,8,["item"]))),128))])]),Dt,t("div",Ht,[t("p",Kt,"Bình luận ("+_(o.du_an.binh_luan.length)+")",1),t("div",Qt,[t("div",qt,[t("div",{class:k(["d-flex",{"mb-4":o.du_an.binh_luan.length>0}])},[c(g).props.user.hinh_anh?(a(),d("img",{key:0,src:"/uploads/nhan_vien/"+c(g).props.user.hinh_anh,alt:"avatar",class:"rounded-full w-10 h-10 object-cover"},null,8,Gt)):(a(),d("img",Jt)),t("form",{onSubmit:l[8]||(l[8]=m(e=>A(),["prevent"])),class:"flex-1 d-flex"},[t("input",{type:"hidden",value:o.du_an.id},null,8,Pt),Rt,Wt],32)],2),t("div",Xt,[(a(!0),d(w,null,C(o.du_an.binh_luan,e=>(a(),d("div",Yt,[t("div",Zt,[e.nguoi_dung.hinh_anh?(a(),d("img",{key:0,src:"/uploads/nhan_vien/"+e.nguoi_dung.hinh_anh,alt:"avatar",class:"rounded-full w-10 h-10 object-cover"},null,8,te)):(a(),d("img",ee)),t("div",ne,[t("div",se,[t("span",le,_(e.nguoi_dung.name),1),t("span",ae,_(new Date(e.created_at).toLocaleString()),1)]),t("p",oe,_(e.noi_dung),1)])])]))),256))])])])])])]),de],32)])])]))}},he=M(ie,[["__scopeId","data-v-b743f495"]]);export{he as default};