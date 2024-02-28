import{T as v,z as k,o as i,c as _,a as t,e as p,w as l,f as u,u as n,n as c,B as h,F as g,k as f,t as b,x,y as V,O as M}from"./app-8a7eb46a.js";import{_ as S}from"./_plugin-vue_export-helper-c27b6911.js";const d=r=>(x("data-v-40d43dd1"),r=r(),V(),r),U={id:"duanmodal",class:"modal fade",tabindex:"-1",style:{"z-index":"1051"},role:"dialog"},w={class:"modal-dialog modal-lg",role:"document"},C={class:"modal-content"},T={class:"modal-header"},D={class:"modal-body"},I={class:"form-group-container"},j={class:"form-group-title"},B={key:0,class:"txt-color mb-0 font-weight-bold"},E={key:1,class:"txt-color mb-0 font-weight-bold"},N={class:"form-group"},O=d(()=>t("label",{for:"name"},"Tên dự án",-1)),z={class:"form-group"},A=d(()=>t("label",{for:"name"},"Người phụ trách",-1)),F=d(()=>t("option",{value:""},"Chọn người phụ trách",-1)),L=["value"],H={class:"form-group"},q=d(()=>t("label",{for:"name"},"Ngày bắt đầu",-1)),G={class:"form-group"},J=d(()=>t("label",{for:"name"},"Ngày kết thúc",-1)),K={class:"form-group"},P=d(()=>t("label",{for:"name"},"Mô tả",-1)),Q={class:"form-group"},R=d(()=>t("label",{for:"name"},"Trạng thái",-1)),W=d(()=>t("option",{value:""},"Chọn trạng thái",-1)),X=d(()=>t("option",{value:"0"},"Chưa triển khai",-1)),Y=d(()=>t("option",{value:"1"},"Đang triển khai",-1)),Z=d(()=>t("option",{value:"2"},"Đã hoàn thành",-1)),tt=[W,X,Y,Z],ot={class:"form-group"},et=d(()=>t("label",{for:"name"},"Tệp đính kèm",-1)),nt=["href"],at={class:"modal-footer"},dt=["disabled"],st={__name:"DuAnModal",props:{du_an:Object,users:Object},setup(r){const s=r,o=v({id:"",ten:"",ngay_bat_dau:"",ngay_ket_thuc:"",user_id:"",mo_ta:"",trang_thai:"",parent_id:"",children:[],files:[]});k(()=>{o.id=s.du_an.id,o.ten=s.du_an.ten,o.ngay_bat_dau=s.du_an.ngay_bat_dau,o.ngay_ket_thuc=s.du_an.ngay_ket_thuc,o.user_id=s.du_an.user_id,o.mo_ta=s.du_an.mo_ta,o.trang_thai=s.du_an.trang_thai,o.parent_id=s.du_an.parent_id,o.children=s.du_an.children,o.files=s.du_an.files});const y=()=>{o.post(route("duan.store"),{onSuccess:()=>{$("#duanmodal").modal("hide"),$("#xemduanmodal").modal("hide"),M.reload()},onError:()=>{console.log(o.errors)}})},m=()=>{$("#duanmodal").modal("hide"),o.reset(),o.clearErrors(),$("#files").val("")};return(lt,a)=>(i(),_("div",U,[t("div",w,[t("div",C,[t("div",T,[t("button",{type:"button",class:"close",onClick:p(m,["prevent"])},"×")]),t("form",{onSubmit:p(y,["prevent"])},[t("div",D,[l(t("input",{type:"hidden","onUpdate:modelValue":a[0]||(a[0]=e=>n(o).id=e),id:"id",class:"form-control"},null,512),[[u,n(o).id]]),t("div",I,[t("div",j,[r.du_an.id?(i(),_("span",B,"Sửa dự án")):(i(),_("span",E,"Thêm dự án"))]),t("div",N,[O,l(t("input",{class:c([{"border-danger":n(o).errors.ten},"form-control"]),type:"text","onUpdate:modelValue":a[1]||(a[1]=e=>n(o).ten=e),id:"ten"},null,2),[[u,n(o).ten]])]),t("div",z,[A,l(t("select",{class:c([{"border-danger":n(o).errors.user_id},"form-control"]),"onUpdate:modelValue":a[2]||(a[2]=e=>n(o).user_id=e),id:"user_id"},[F,(i(!0),_(g,null,f(r.users,e=>(i(),_("option",{key:e.id,value:e.id},b(e.name),9,L))),128))],2),[[h,n(o).user_id]])]),l(t("input",{type:"hidden","onUpdate:modelValue":a[3]||(a[3]=e=>n(o).parent_id=e)},null,512),[[u,n(o).parent_id]]),t("div",H,[q,l(t("input",{class:c([{"border-danger":n(o).errors.ngay_bat_dau},"form-control"]),type:"date","onUpdate:modelValue":a[4]||(a[4]=e=>n(o).ngay_bat_dau=e),id:"ngay_bat_dau"},null,2),[[u,n(o).ngay_bat_dau]])]),t("div",G,[J,l(t("input",{class:c([{"border-danger":n(o).errors.ngay_ket_thuc},"form-control"]),type:"date","onUpdate:modelValue":a[5]||(a[5]=e=>n(o).ngay_ket_thuc=e),id:"ngay_ket_thuc"},null,2),[[u,n(o).ngay_ket_thuc]])]),t("div",K,[P,l(t("textarea",{class:c([{"border-danger":n(o).errors.mo_ta},"form-control"]),type:"text","onUpdate:modelValue":a[6]||(a[6]=e=>n(o).mo_ta=e),id:"mo_ta"},null,2),[[u,n(o).mo_ta]])]),t("div",Q,[R,l(t("select",{class:c([{"border-danger":n(o).errors.trang_thai},"form-control"]),"onUpdate:modelValue":a[7]||(a[7]=e=>n(o).trang_thai=e),id:"trang_thai"},tt,2),[[h,n(o).trang_thai]])]),t("div",ot,[et,t("input",{accept:".png, .jpg, .jpeg, .gif, .bmp, .doc, .docx, .xls, .xlsx, .pdf",type:"file",onInput:a[8]||(a[8]=e=>n(o).files=e.target.files),id:"files",multiple:""},null,32)]),t("ul",null,[(i(!0),_(g,null,f(n(o).files,e=>(i(),_("li",{key:e.id},[t("a",{href:`/uploads/${e.ten}`,target:"_blank"},b(e.ten),9,nt)]))),128))])])]),t("div",at,[t("button",{type:"submit",disabled:n(o).processing,class:"btn btn-primary"},"Lưu",8,dt),t("button",{type:"button",class:"btn btn-default",onClick:p(m,["prevent"])},"Hủy")])],32)])])]))}},_t=S(st,[["__scopeId","data-v-40d43dd1"]]);export{_t as default};
