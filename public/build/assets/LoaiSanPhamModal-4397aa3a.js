import{T as p,z as u,o as _,c as b,a as o,e as l,w as i,f as r,u as s,n as h}from"./app-4c6714ee.js";const f={id:"loaisanphammodal",class:"modal fade",tabindex:"-1",role:"dialog"},v={class:"modal-dialog",role:"document"},y={class:"modal-content"},g={class:"modal-header"},x={class:"modal-body"},k={class:"form-group"},w=o("label",{for:"name"},"Tên loại SP",-1),E={class:"modal-footer"},M=["disabled"],C={__name:"LoaiSanPhamModal",props:{loai_san_pham:Object},setup(c){const d=c,t=p({id:"",ten:""});u(()=>{t.id=d.loai_san_pham.id,t.ten=d.loai_san_pham.ten});const m=()=>{t.post(route("loaisanpham.store"),{onSuccess:()=>{a()},onError:()=>{console.log(t.errors)}})},a=()=>{$("#loaisanphammodal").modal("hide"),t.reset(),t.clearErrors()};return(S,e)=>(_(),b("div",f,[o("div",v,[o("div",y,[o("div",g,[o("button",{type:"button",class:"close",onClick:l(a,["prevent"])},"×")]),o("form",{onSubmit:l(m,["prevent"])},[o("div",x,[i(o("input",{type:"hidden","onUpdate:modelValue":e[0]||(e[0]=n=>s(t).id=n),id:"id",class:"form-control"},null,512),[[r,s(t).id]]),o("div",k,[w,i(o("input",{class:h([{"border-danger":s(t).errors.ten},"form-control"]),type:"text","onUpdate:modelValue":e[1]||(e[1]=n=>s(t).ten=n),id:"ten"},null,2),[[r,s(t).ten]])])]),o("div",E,[o("button",{type:"submit",disabled:s(t).processing,class:"btn btn-primary"},"Lưu",8,M),o("button",{type:"button",class:"btn btn-default",onClick:l(a,["prevent"])},"Hủy")])],32)])])]))}};export{C as default};
