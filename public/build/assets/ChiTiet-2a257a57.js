import{Q as S,h as L,T,z as B,u as n,o as d,c as i,a as t,w as p,f as v,B as N,m as g,t as r,F as f,k as y,l as h,e as b,n as V,x as F,y as D}from"./app-4c6714ee.js";import{f as I}from"./script-4eb152de.js";import{_ as A}from"./_plugin-vue_export-helper-c27b6911.js";const o=u=>(F("data-v-6e9de4fd"),u=u(),D(),u),E={class:"d-flex align-items-center"},M=o(()=>t("p",{class:"text-secondary mb-0"},"Trạng thái: ",-1)),U=["disabled"],z=o(()=>t("option",{value:"0"},"Chưa duyệt",-1)),O=o(()=>t("option",{value:"1"},"Đã duyệt",-1)),Q=[z,O],q=o(()=>t("h5",{class:"mb-0 mt-2"},"Thông tin đề xuất",-1)),G=o(()=>t("hr",{class:"mt-2 mb-3"},null,-1)),H={class:"text-secondary"},J={class:"text-md"},K=o(()=>t("i",{class:"fa fa-user me-2"},null,-1)),P={class:"font-weight-bold text-black ms-2 text-md"},R={class:"text-md mb-2"},W=o(()=>t("i",{class:"fa fa-clock me-2"},null,-1)),X={class:"ms-2 text-md text-black"},Y={class:"d-flex"},Z=o(()=>t("span",{class:"text-md me-1 mt-2"},[t("i",{class:"fa fa-file flex-1 me-2"}),g(" Nội dung: ")],-1)),tt=o(()=>t("h5",{class:"mb-0 mt-3"},"File đính kèm",-1)),et=o(()=>t("hr",{class:"mt-2 mb-3"},null,-1)),st={class:"mt-3"},nt={class:"d-flex align-items-center mb-2"},ot=o(()=>t("label",{for:"mo_ta",class:"font-weight-bold text-success mt-2"},"Attachments:",-1)),at=o(()=>t("label",{for:"files2",class:"btn btn-success btn-sm mt-2 ml-3"},"Chọn file",-1)),lt=o(()=>t("span",{id:"fileList",class:"d-inline-block ml-3"},null,-1)),dt={key:0,class:"row"},it={class:"col-md-5"},ct={class:"card"},_t={class:"card-body p-0"},rt={class:"table table-striped"},ut=o(()=>t("thead",null,[t("tr",null,[t("th",null,"File"),t("th",null,"Actions")])],-1)),ht={class:"d-flex gap-[5px] justify-content-center"},mt=["href"],pt=["onClick"],ft=["disabled"],bt={class:"mb-0 mt-3"},gt=o(()=>t("hr",{class:"mt-2 mb-3"},null,-1)),xt={class:"card elevation-2"},vt={class:"card-body"},yt=["src"],wt={key:1,src:"/uploads/avatardefault.png",alt:"avatar",class:"rounded-full w-10 object-cover"},kt=["value"],jt=o(()=>t("input",{id:"comment",class:"form-control border-0 flex-1",placeholder:"Nhập bình luận"},null,-1)),Ct=o(()=>t("button",{type:"submit",class:""},[t("i",{class:"fa fa-paper-plane text-lg text-primary"})],-1)),St={style:{"max-height":"150px",overflow:"auto"}},Lt={class:""},Tt={class:"d-flex"},Bt=["src"],Nt={key:1,src:"/uploads/avatardefault.png",alt:"avatar",class:"rounded-full w-10 h-10 object-cover"},Vt={class:"flex-1 ml-3"},Ft={class:"d-flex justify-content-between"},Dt={class:"font-weight-bold"},It={class:"text-secondary"},$t={class:"text-md"},At={__name:"ChiTiet",props:{de_xuat_selected:Object},setup(u){const c=u,m=S();let _=L([]),e=T({id:"",ten:"",noi_dung:"",created_at:"",trang_thai:0,created_by:{},files:[],binh_luan:[]});B(()=>{e.id=c.de_xuat_selected.id,e.ten=c.de_xuat_selected.ten,e.noi_dung=c.de_xuat_selected.noi_dung,e.files=c.de_xuat_selected.files,e.created_at=c.de_xuat_selected.created_at,e.created_by=c.de_xuat_selected.created_by,e.binh_luan=c.de_xuat_selected.binh_luan,e.trang_thai=c.de_xuat_selected.trang_thai,_.value=c.de_xuat_selected.files.map(a=>({id:a.id,ten:a.ten}))});const w=()=>{e.post(route("dexuat.store"),{onSuccess:()=>{toastr.success("Lưu đề xuất thành công")},onError:()=>{toastr.error("Lưu đề xuất thất bại"),console.log(e.errors)}})},k=a=>{confirm("Bạn có chắc chắn muốn xóa file này không?")&&(e.files=e.files.filter(l=>l.id!=a),_.value=_.value.filter(l=>l.id!=a),axios({method:"delete",url:route("duan.file.delete",{id:a})}))};function j(a){e.files=a.target.files,_.value=[..._.value,...Array.from(a.target.files).map(l=>({ten:l.name}))]}function C(){axios({method:"post",url:route("binhluan.store"),data:{noi_dung:$("#comment").val(),de_xuat_id:e.id}}).then(a=>{$("#comment").val(""),e.binh_luan.push({noi_dung:a.data.noi_dung,nguoi_dung:a.data.nguoi_dung,created_at:a.data.created_at})}).catch(a=>{console.log(a)})}return(a,l)=>n(e).id?(d(),i(f,{key:0},[t("form",{onSubmit:b(w,["prevent"])},[p(t("input",{class:"w-100 font-weight-bold border-0 text-[20px] active:outline-0 p-0","onUpdate:modelValue":l[0]||(l[0]=s=>n(e).ten=s)},null,512),[[v,n(e).ten]]),t("div",E,[M,p(t("select",{disabled:c.de_xuat_selected.nguoi_duyet.id!=n(m).props.user.id,"onUpdate:modelValue":l[1]||(l[1]=s=>n(e).trang_thai=s),class:"form-control w-25 border-0"},Q,8,U),[[N,n(e).trang_thai]])]),q,G,t("div",H,[t("p",J,[K,g(" Người tạo: "),t("span",P,r(n(e).created_by.name),1)]),t("p",R,[W,g(" Ngày tạo: "),t("span",X,r(n(I)(n(e).created_at)),1)]),t("div",Y,[Z,p(t("textarea",{rows:"5","onUpdate:modelValue":l[2]||(l[2]=s=>n(e).noi_dung=s),class:"text-md text-black form-control w-75 border-0"},null,512),[[v,n(e).noi_dung]])])]),tt,et,t("div",st,[t("div",nt,[ot,at,t("input",{accept:".png, .jpg, .jpeg, .gif, .bmp, .doc, .docx, .xls, .xlsx, .pdf",type:"file",onInput:l[3]||(l[3]=s=>j(s)),id:"files2",class:"d-none",multiple:""},null,32),lt]),n(_).length>0?(d(),i("div",dt,[t("div",it,[t("div",ct,[t("div",_t,[t("table",rt,[ut,t("tbody",null,[(d(!0),i(f,null,y(n(_),s=>{var x;return d(),i("tr",{key:s.id},[t("td",null,r(((x=s.ten)==null?void 0:x.length)>30?s.ten.slice(0,30)+"...":s.ten),1),t("td",ht,[s.id?(d(),i("a",{key:0,href:`/uploads/de_xuat/${s.ten}`,target:"_blank",class:"btn btn-primary btn-sm"},"View",8,mt)):h("",!0),s.id?(d(),i("a",{key:1,onClick:b(Et=>k(s.id),["prevent"]),class:"btn btn-sm btn-danger"},"Delete",8,pt)):h("",!0)])])}),128))])])])])])])):h("",!0),t("button",{disabled:n(e).processing,type:"submit",class:"btn btn-primary font-weight-bold right-0"},"Lưu",8,ft)])],32),t("h5",bt,"Bình luận ("+r(n(e).binh_luan.length)+")",1),gt,t("div",xt,[t("div",vt,[t("div",{class:V(["d-flex",{"mb-4":n(e).binh_luan.length>0}])},[n(m).props.user.hinh_anh?(d(),i("img",{key:0,src:"/uploads/nhan_vien/"+n(m).props.user.hinh_anh,alt:"avatar",class:"rounded-full w-10 h-10 object-cover"},null,8,yt)):(d(),i("img",wt)),t("form",{onSubmit:b(C,["prevent"]),class:"flex-1 d-flex"},[t("input",{type:"hidden",value:n(e).id},null,8,kt),jt,Ct],32)],2),t("div",St,[(d(!0),i(f,null,y(n(e).binh_luan,s=>(d(),i("div",Lt,[t("div",Tt,[s.nguoi_dung.hinh_anh?(d(),i("img",{key:0,src:"/uploads/nhan_vien/"+s.nguoi_dung.hinh_anh,alt:"avatar",class:"rounded-full w-10 h-10 object-cover"},null,8,Bt)):(d(),i("img",Nt)),t("div",Vt,[t("div",Ft,[t("span",Dt,r(s.nguoi_dung.name),1),t("span",It,r(new Date(s.created_at).toLocaleString()),1)]),t("p",$t,r(s.noi_dung),1)])])]))),256))])])])],64)):h("",!0)}},Ot=A(At,[["__scopeId","data-v-6e9de4fd"]]);export{Ot as default};
