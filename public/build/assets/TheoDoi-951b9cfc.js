import{o as t,c as o,a as s,e as d,F as m,k as f,l as g,t as v}from"./app-4c6714ee.js";const p={key:0,class:"card p-3 elevation-2"},b={class:"d-flex justify-content-between align-items-center"},x=s("h5",{class:"font-weight-bold mb-0"},"Người theo dõi",-1),k=s("hr",{class:"mt-1 mb-2"},null,-1),y={class:"d-flex align-items-center justify-content-between my-1"},N=["src"],D={key:1,src:"/uploads/avatardefault.png",alt:"avatar",class:"rounded-full w-10 h-10 object-cover"},w={class:"font-weight-bold"},T=["onClick"],B={__name:"TheoDoi",props:{du_an:Object},emits:["editNguoiTheoDoi","xoaNguoiTheoDoi"],setup(i,{emit:u}){const n=u;function h(){n("editNguoiTheoDoi")}function _(a){n("xoaNguoiTheoDoi",a)}return(a,c)=>i.du_an.id?(t(),o("div",p,[s("div",b,[x,s("button",{onClick:c[0]||(c[0]=d(e=>h(),["prevent"])),class:"fa fa-plus text-secondary"})]),k,(t(!0),o(m,null,f(i.du_an.nguoi_theo_doi,e=>{var l,r;return t(),o("div",y,[(t(),o("div",{key:e.id,class:"d-flex align-items-center gap-[10px]"},[(l=e.user)!=null&&l.hinh_anh?(t(),o("img",{key:0,src:"/uploads/nhan_vien/"+e.user.hinh_anh,alt:"avatar",class:"rounded-full w-10 h-10 object-cover elevation-2"},null,8,N)):(t(),o("img",D)),s("span",w,v((r=e.user)==null?void 0:r.name),1)])),s("button",{onClick:d(j=>_(e.id),["prevent"]),class:"fa fa-trash text-secondary"},null,8,T)])}),256))])):g("",!0)}};export{B as default};
