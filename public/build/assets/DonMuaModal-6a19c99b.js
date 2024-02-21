import{T as U,h as E,q as B,s as O,x as I,o as d,c as _,a as n,e as g,w as u,f as m,u as s,n as k,y as x,F as p,l as v,t as r,z as Y,A as j,O as q}from"./app-44f1296a.js";import{l as C}from"./lodash-d0d5f161.js";import{h as z}from"./moment-a9aaa855.js";import{_ as F}from"./_plugin-vue_export-helper-c27b6911.js";const l=c=>(Y("data-v-e0ebaddd"),c=c(),j(),c),H={id:"donhangmodal",class:"modal fade",role:"dialog"},L={class:"modal-dialog modal-xl",role:"document"},N={class:"modal-content"},A={class:"modal-header"},G={class:"modal-body"},K={class:"form-group-container"},J={class:"form-group-title"},P={key:0,class:"txt-color mb-0 font-weight-bold"},Q={key:1,class:"txt-color mb-0 font-weight-bold"},R={class:"form-group"},W=l(()=>n("label",{for:"ma"},"Mã đơn",-1)),X={class:"form-group"},Z=l(()=>n("label",{for:"nha_cung_cap_id"},"Nhà cung cấp",-1)),nn=l(()=>n("option",{value:""},"Chọn nhà cung cấp",-1)),on=["value"],tn={class:"form-group"},sn=l(()=>n("label",{for:"ghi_chu"},"Ghi chú",-1)),an={class:"form-group-container mt-4"},en=l(()=>n("div",{class:"form-group-title"},[n("span",null,"Chi tiết đơn mua")],-1)),ln={class:"row mb-3"},dn={class:"col-4"},_n={class:"form-record"},cn=l(()=>n("label",null,"Sản phẩm",-1)),rn=["value"],hn={class:"col-3"},un={class:"form-record"},gn=l(()=>n("label",{for:"name"},"Số lượng",-1)),mn={class:"col-3"},pn={class:"form-record"},vn=l(()=>n("label",{for:"name"},"Đơn giá",-1)),fn={class:"col-2"},bn={class:"table table-bordered table-responsive-md"},yn=l(()=>n("thead",null,[n("tr",null,[n("th",null,"Mã sản phẩm"),n("th",null,"Tên sản phẩm"),n("th",null,"Số lượng"),n("th",null,"ĐVT"),n("th",null,"Đơn giá"),n("th",null,"Thành tiền"),n("th")])],-1)),Mn={key:0},Sn=l(()=>n("td",{colspan:"7",class:"text-center"},"Không có dữ liệu",-1)),kn=[Sn],xn={class:"ma"},Cn={class:"ten"},wn={class:"quantity"},Dn={class:"quantity"},$n={class:"money"},Tn={class:"money"},Vn={class:"action"},Un=["onClick"],En=l(()=>n("i",{class:"fas fa-trash"},null,-1)),Bn=[En],On={class:"modal-footer"},In=["disabled"],Yn={__name:"DonMuaModal",props:{don_hang:Object,nha_cung_cap_list:Object,san_pham_list:Object},setup(c){const i=c,t=U({id:"",ma:"",ngay:"",nha_cung_cap_id:"",ghi_chu:"",loai:0,chi_tiet_don_hang:[]});let e=E({id:"",don_hang_id:i.don_hang.id,san_pham:{},so_luong:1,gia:0});B(()=>{var h;t.id=i.don_hang.id||"",t.ma=i.don_hang.ma||"",t.ngay=i.don_hang.ngay||z().format("YYYY-MM-DD"),t.nha_cung_cap_id=((h=i.don_hang.nha_cung_cap)==null?void 0:h.id)||"",t.ghi_chu=i.don_hang.ghi_chu||"",t.chi_tiet_don_hang=i.don_hang.chi_tiet_don_hang||[]});const w=()=>{i.don_hang.id||(t.ma="DH"+Date.now().toString().slice(-6)),t.post(route("donhang.store"),{onSuccess:()=>{$("#donhangmodal").modal("hide"),q.visit(route("donhang.index",{loai:"donmua"}))},onError:()=>{console.log(t.errors)}})},f=()=>{$("#donhangmodal").modal("hide"),t.reset(),t.chi_tiet_don_hang=[],t.clearErrors()};function D(h){t.chi_tiet_don_hang=t.chi_tiet_don_hang.filter((a,o)=>o!==h)}function T(){C.isEmpty(e.value.san_pham)||e.value.so_luong!==0&&(t.chi_tiet_don_hang.push({id:"",don_hang_id:i.don_hang.id,san_pham:C.cloneDeep(e.value.san_pham),so_luong:e.value.so_luong,gia:e.value.gia,thanh_tien:e.value.gia*e.value.so_luong}),e.value={id:"",don_hang_id:i.don_hang.id,san_pham:{},so_luong:0,gia:0},$("#sanpham").val(null).trigger("change"))}return O(()=>{$("#sanpham").select2({placeholder:"Chọn sản phẩm"}).on("change",function(){e.value.san_pham=i.san_pham_list.data.find(h=>String(h.id)===$(this).val())}),$("#nha_cung_cap_id").select2({placeholder:"Chọn nhà cung cấp",width:"100%"}).on("change",function(){t.nha_cung_cap_id=$(this).val()})}),I(()=>{$("#nha_cung_cap_id").select2({placeholder:"Chọn nhà cung cấp",width:"100%"})}),(h,a)=>(d(),_("div",H,[n("div",L,[n("div",N,[n("div",A,[n("button",{type:"button",class:"close",onClick:g(f,["prevent"])},"×")]),n("form",{onSubmit:g(w,["prevent"])},[n("div",G,[u(n("input",{type:"hidden","onUpdate:modelValue":a[0]||(a[0]=o=>s(t).id=o),id:"id",class:"form-control"},null,512),[[m,s(t).id]]),n("div",K,[n("div",J,[c.don_hang.id?(d(),_("span",P,"Sửa đơn hàng")):(d(),_("span",Q,"Thêm đơn hàng"))]),n("div",R,[W,n("div",null,[u(n("input",{readonly:"",class:k([{"border-danger":s(t).errors.ma},"form-control"]),type:"text","onUpdate:modelValue":a[1]||(a[1]=o=>s(t).ma=o),id:"ma"},null,2),[[m,s(t).ma]])])]),n("div",X,[Z,n("div",null,[u(n("select",{class:k([{"border-danger":s(t).errors.nha_cung_cap_id},"form-control"]),"onUpdate:modelValue":a[2]||(a[2]=o=>s(t).nha_cung_cap_id=o),id:"nha_cung_cap_id"},[nn,(d(!0),_(p,null,v(c.nha_cung_cap_list,o=>(d(),_("option",{key:o.id,value:o.id},r(o.ten),9,on))),128))],2),[[x,s(t).nha_cung_cap_id]])])]),n("div",tn,[sn,n("div",null,[u(n("input",{type:"text","onUpdate:modelValue":a[3]||(a[3]=o=>s(t).ghi_chu=o),class:"form-control",id:"ghi_chu"},null,512),[[m,s(t).ghi_chu]])])])]),n("div",an,[en,n("div",ln,[n("div",dn,[n("div",_n,[cn,u(n("select",{class:"form-control","onUpdate:modelValue":a[4]||(a[4]=o=>s(e).san_pham=o),id:"sanpham"},[(d(!0),_(p,null,v(c.san_pham_list.data,o=>(d(),_("option",{value:o.id},r(o.ten),9,rn))),256))],512),[[x,s(e).san_pham]])])]),n("div",hn,[n("div",un,[gn,u(n("input",{type:"number","onUpdate:modelValue":a[5]||(a[5]=o=>s(e).so_luong=o),class:"form-control",id:"ghi_chu"},null,512),[[m,s(e).so_luong]])])]),n("div",mn,[n("div",pn,[vn,u(n("input",{type:"number","onUpdate:modelValue":a[6]||(a[6]=o=>s(e).gia=o),class:"form-control",id:"gia"},null,512),[[m,s(e).gia]])])]),n("div",fn,[n("button",{onClick:a[7]||(a[7]=g(o=>T(),["prevent"])),class:"btn btn-primary form-control"},"Thêm")])]),n("table",bn,[yn,n("tbody",null,[s(t).chi_tiet_don_hang.length===0?(d(),_("tr",Mn,kn)):(d(!0),_(p,{key:1},v(s(t).chi_tiet_don_hang,(o,V)=>{var b,y,M,S;return d(),_("tr",{key:o.id},[n("td",xn,r((b=o==null?void 0:o.san_pham)==null?void 0:b.ma),1),n("td",Cn,r((y=o==null?void 0:o.san_pham)==null?void 0:y.ten),1),n("td",wn,r(o==null?void 0:o.so_luong),1),n("td",Dn,r((S=(M=o==null?void 0:o.san_pham)==null?void 0:M.don_vi_tinh)==null?void 0:S.ten),1),n("td",$n,r(o==null?void 0:o.gia.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")),1),n("td",Tn,r(o==null?void 0:o.thanh_tien.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")),1),n("td",Vn,[n("a",{class:"btn btn-danger btn-sm",onClick:g(jn=>D(V),["prevent"])},Bn,8,Un)])])}),128))])])])]),n("div",On,[n("button",{type:"submit",disabled:s(t).processing,class:"btn btn-primary"},"Lưu",8,In),n("button",{type:"button",class:"btn btn-default",onClick:g(f,["prevent"])},"Hủy")])],32)])])]))}},Ln=F(Yn,[["__scopeId","data-v-e0ebaddd"]]);export{Ln as default};
