import{T as u,q as p,o as h,c as _,a as o,e as d,w as i,f as r,u as e,n as b,O as f}from"./app-44f1296a.js";const k={id:"khomodal",class:"modal fade",tabindex:"-1",role:"dialog"},v={class:"modal-dialog",role:"document"},y={class:"modal-content"},g={class:"modal-header"},x={class:"modal-body"},w={class:"form-group"},E=o("label",{for:"name"},"Tên kho",-1),M={class:"modal-footer"},B=["disabled"],T={__name:"KhoModal",props:{kho:Object},setup(c){const a=c,t=u({id:"",ten:""});p(()=>{t.id=a.kho.id,t.ten=a.kho.ten});const m=()=>{t.post(route("kho.store"),{onSuccess:()=>{$("#khomodal").modal("hide"),f.visit(route("kho.index"))},onError:()=>{console.log(t.errors)}})},l=()=>{$("#khomodal").modal("hide"),t.reset(),t.clearErrors()};return(C,s)=>(h(),_("div",k,[o("div",v,[o("div",y,[o("div",g,[o("button",{type:"button",class:"close",onClick:d(l,["prevent"])},"×")]),o("form",{onSubmit:d(m,["prevent"])},[o("div",x,[i(o("input",{type:"hidden","onUpdate:modelValue":s[0]||(s[0]=n=>e(t).id=n),id:"id",class:"form-control"},null,512),[[r,e(t).id]]),o("div",w,[E,i(o("input",{class:b([{"border-danger":e(t).errors.ten},"form-control"]),type:"text","onUpdate:modelValue":s[1]||(s[1]=n=>e(t).ten=n),id:"ten"},null,2),[[r,e(t).ten]])])]),o("div",M,[o("button",{type:"submit",disabled:e(t).processing,class:"btn btn-primary"},"Lưu",8,B),o("button",{type:"button",class:"btn btn-default",onClick:d(l,["prevent"])},"Hủy")])],32)])])]))}};export{T as default};
