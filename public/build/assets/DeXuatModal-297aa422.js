import{T as y,z as k,q as w,o as i,c as s,a as e,e as c,w as r,f as g,u as t,n as u,B as h,F as f,k as p,t as b,O as C}from"./app-5cd23246.js";const M={id:"dexuatmodal",class:"modal fade",role:"dialog"},N={class:"modal-dialog modal-lg",role:"document"},S={class:"modal-content"},V={class:"modal-header"},U={class:"modal-body"},B={class:"form-group-container"},E={class:"form-group-title"},O={key:0,class:"txt-color mb-0 font-weight-bold"},T={key:1,class:"txt-color mb-0 font-weight-bold"},D={class:"form-group"},F=e("label",{for:"ten"},"Tên đề xuất",-1),j={class:"form-group"},z=e("label",{for:"noi_dung"},"Nội dung",-1),L={class:"form-group"},q=e("label",{for:"nguoi_duyet"},"Người duyệt",-1),H=["value"],I={class:"form-group"},X=e("label",{for:"nguoi_theo_doi"},"Người theo dõi",-1),A=["value"],G={class:"form-group"},J=e("label",{for:"file"},"File đính kèm",-1),K={class:"modal-footer"},P=["disabled"],R={__name:"DeXuatModal",props:{de_xuat:Object,nhan_vien_list:Object},setup(_){const l=_,o=y({id:"",ten:"",noi_dung:"",nguoi_duyet:"",nguoi_theo_doi:[],file:""});k(()=>{o.id=l.de_xuat.id,o.ten=l.de_xuat.ten,o.noi_dung=l.de_xuat.noi_dung,o.nguoi_duyet=l.de_xuat.nguoi_duyet.id,o.nguoi_theo_doi=l.de_xuat.nguoi_theo_doi.map(a=>String(a.user_id)),o.file=l.de_xuat.file});const v=()=>{o.post(route("dexuat.store"),{onSuccess:()=>{$("#dexuatmodal").modal("hide"),C.visit(route("dexuat.index"))},onError:()=>{console.log(o.errors)}})},m=()=>{$("#dexuatmodal").modal("hide"),o.reset(),$("#nguoi_theo_doi").val(null).trigger("change"),o.clearErrors()};function x(a){o.file=a.target.files}return w(()=>{$("#nguoi_theo_doi").select2({placeholder:"Chọn người theo dõi"}).on("change",function(a){o.nguoi_theo_doi=$(this).val()})}),(a,d)=>(i(),s("div",M,[e("div",N,[e("div",S,[e("div",V,[e("button",{type:"button",class:"close",onClick:c(m,["prevent"])},"×")]),e("form",{onSubmit:c(v,["prevent"])},[e("div",U,[r(e("input",{type:"hidden","onUpdate:modelValue":d[0]||(d[0]=n=>t(o).id=n),class:"form-control"},null,512),[[g,t(o).id]]),e("div",B,[e("div",E,[_.de_xuat.id?(i(),s("span",O,"Sửa đề xuất")):(i(),s("span",T,"Thêm đề xuất"))]),e("div",D,[F,r(e("input",{"onUpdate:modelValue":d[1]||(d[1]=n=>t(o).ten=n),type:"text",class:u([{"border border-danger":t(o).errors.ten},"form-control"]),name:"ten",placeholder:"Nhập tên đề xuất"},null,2),[[g,t(o).ten]])]),e("div",j,[z,r(e("textarea",{"onUpdate:modelValue":d[2]||(d[2]=n=>t(o).noi_dung=n),class:u([{"border border-danger":t(o).errors.noi_dung},"form-control"]),name:"noi_dung",placeholder:"Nhập nội dung đề xuất"},null,2),[[g,t(o).noi_dung]])]),e("div",L,[q,r(e("select",{"onUpdate:modelValue":d[3]||(d[3]=n=>t(o).nguoi_duyet=n),class:u([{"border border-danger":t(o).errors.nguoi_duyet},"form-control"]),name:"nguoi_duyet"},[(i(!0),s(f,null,p(_.nhan_vien_list,n=>(i(),s("option",{value:n.id},b(n.name),9,H))),256))],2),[[h,t(o).nguoi_duyet]])]),e("div",I,[X,r(e("select",{id:"nguoi_theo_doi","onUpdate:modelValue":d[4]||(d[4]=n=>t(o).nguoi_theo_doi=n),class:u([{"border border-danger":t(o).errors.nguoi_theo_doi},"form-control"]),name:"nguoi_theo_doi[]",multiple:""},[(i(!0),s(f,null,p(_.nhan_vien_list,n=>(i(),s("option",{value:n.id},b(n.name),9,A))),256))],2),[[h,t(o).nguoi_theo_doi]])]),e("div",G,[J,e("input",{type:"file",class:u({"border border-danger":t(o).errors.file}),name:"file",placeholder:"Chọn file đính kèm",multiple:"",onChange:x},null,34)])])]),e("div",K,[e("button",{type:"submit",disabled:t(o).processing,class:"btn btn-primary"},"Lưu",8,P),e("button",{type:"button",class:"btn btn-default",onClick:c(m,["prevent"])},"Hủy")])],32)])])]))}};export{R as default};
