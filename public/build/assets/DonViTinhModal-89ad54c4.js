import{T as u,z as _,o as p,c as b,a as o,e as i,w as l,f as r,u as e,n as h}from"./app-4c6714ee.js";const v={id:"donvitinhmodal",class:"modal fade",tabindex:"-1",role:"dialog"},f={class:"modal-dialog",role:"document"},y={class:"modal-content"},g={class:"modal-header"},x={class:"modal-body"},T={class:"form-group"},V=o("label",{for:"name"},"Tên ĐVT",-1),k={class:"modal-footer"},w=["disabled"],B={__name:"DonViTinhModal",props:{don_vi_tinh:Object},setup(c){const a=c,t=u({id:"",ten:""});_(()=>{t.id=a.don_vi_tinh.id,t.ten=a.don_vi_tinh.ten});const m=()=>{t.post(route("donvitinh.store"),{onSuccess:()=>{n()},onError:()=>{console.log(t.errors)}})},n=()=>{$("#donvitinhmodal").modal("hide"),t.reset(),t.clearErrors()};return(E,s)=>(p(),b("div",v,[o("div",f,[o("div",y,[o("div",g,[o("button",{type:"button",class:"close",onClick:i(n,["prevent"])},"×")]),o("form",{onSubmit:i(m,["prevent"])},[o("div",x,[l(o("input",{type:"hidden","onUpdate:modelValue":s[0]||(s[0]=d=>e(t).id=d),id:"id",class:"form-control"},null,512),[[r,e(t).id]]),o("div",T,[V,l(o("input",{class:h([{"border-danger":e(t).errors.ten},"form-control"]),type:"text","onUpdate:modelValue":s[1]||(s[1]=d=>e(t).ten=d),id:"ten"},null,2),[[r,e(t).ten]])])]),o("div",k,[o("button",{type:"submit",disabled:e(t).processing,class:"btn btn-primary"},"Lưu",8,w),o("button",{type:"button",class:"btn btn-default",onClick:i(n,["prevent"])},"Hủy")])],32)])])]))}};export{B as default};
