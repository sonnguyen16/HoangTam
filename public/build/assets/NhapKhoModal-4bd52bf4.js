import{T,h as N,z as O,q as B,A as E,o as d,c as l,a as o,e as m,w as r,f as p,u as a,n as g,B as b,F as v,k as f,t as c,x as K,y as j,O as I}from"./app-8a7eb46a.js";import{l as S}from"./lodash-a93c016d.js";import{h as Y}from"./moment-a9aaa855.js";import{_ as q}from"./_plugin-vue_export-helper-c27b6911.js";const i=h=>(K("data-v-b6defaad"),h=h(),j(),h),H={id:"hoadonmodal",class:"modal fade",role:"dialog"},z={class:"modal-dialog modal-xl",role:"document"},F={class:"modal-content"},L={class:"modal-header"},A={class:"modal-body"},G={class:"form-group-container"},J={class:"form-group-title"},P={key:0,class:"txt-color mb-0 font-weight-bold"},Q={key:1,class:"txt-color mb-0 font-weight-bold"},R={class:"form-group"},W=i(()=>o("label",{for:"ma"},"Mã phiếu",-1)),X={class:"form-group"},Z=i(()=>o("label",{for:"du_an_id"},"Dự án",-1)),oo=i(()=>o("option",{value:""},"Chọn dự án",-1)),no=["value"],to={class:"form-group"},ao=i(()=>o("label",{for:"ngay"},"Ngày",-1)),so={class:"form-group"},eo=i(()=>o("label",{for:"nha_cung_cap_id"},"Nhà cung cấp",-1)),io=i(()=>o("option",{value:""},"Chọn nhà cung cấp",-1)),lo=["value"],_o={class:"form-group"},ho=i(()=>o("label",{for:"kho_id"},"Kho",-1)),ro=i(()=>o("option",{value:""},"Chọn kho",-1)),co=["value"],uo={class:"form-group"},po=i(()=>o("label",{for:"ghi_chu"},"Ghi chú",-1)),mo={class:"form-group-container mt-4"},go=i(()=>o("div",{class:"form-group-title"},[o("span",null,"Chi tiết phiếu nhập")],-1)),vo={class:"row mb-3"},fo={class:"col-4"},bo={class:"form-record"},yo=i(()=>o("label",null,"Sản phẩm",-1)),ko=["value"],Co={class:"col-3"},$o={class:"form-record"},wo=i(()=>o("label",{for:"name"},"Số lượng",-1)),xo={class:"col-3"},So={class:"form-record"},Mo=i(()=>o("label",{for:"name"},"Đơn giá",-1)),Vo={class:"col-2"},Uo={class:"table table-bordered table-responsive-md"},Do=i(()=>o("thead",null,[o("tr",null,[o("th",null,"Mã sản phẩm"),o("th",null,"Tên sản phẩm"),o("th",null,"Số lượng"),o("th",null,"ĐVT"),o("th",null,"Đơn giá"),o("th",null,"Thành tiền"),o("th")])],-1)),To={key:0},No=i(()=>o("td",{colspan:"7",class:"text-center"},"Không có dữ liệu",-1)),Oo=[No],Bo={class:"ma"},Eo={class:"ten"},Ko={class:"quantity"},jo={class:"quantity"},Io={class:"money"},Yo={class:"money"},qo={class:"action"},Ho=["onClick"],zo=i(()=>o("i",{class:"fas fa-trash"},null,-1)),Fo=[zo],Lo={class:"modal-footer"},Ao=["disabled"],Go={__name:"NhapKhoModal",props:{hoa_don:Object,nha_cung_cap_list:Object,kho_list:Object,san_pham_list:Object,du_an_list:Object},setup(h){const _=h,t=T({id:"",ma:"",ngay:"",nha_cung_cap_id:"",kho_id:"",ghi_chu:"",loai:0,chi_tiet_hoa_don:[],du_an_id:""});let e=N({id:"",hoa_don_id:_.hoa_don.id,san_pham:{},so_luong:1,gia:0});O(()=>{var u;t.id=_.hoa_don.id||"",t.ma=_.hoa_don.ma||"",t.ngay=_.hoa_don.ngay||Y().format("YYYY-MM-DD"),t.nha_cung_cap_id=((u=_.hoa_don.nha_cung_cap)==null?void 0:u.id)||"",t.kho_id=_.hoa_don.kho.id||"",t.ghi_chu=_.hoa_don.ghi_chu||"",t.chi_tiet_hoa_don=_.hoa_don.chi_tiet_hoa_don||[],t.du_an_id=_.hoa_don.du_an_id||""});const M=()=>{_.hoa_don.id||(t.ma="NK"+Date.now().toString().slice(-6)),t.post(route("hoadon.store"),{onSuccess:()=>{$("#hoadonmodal").modal("hide"),I.visit(route("baocaonhapxuat.index",{loai:"nhap"}))},onError:()=>{console.log(t.errors)}})},y=()=>{$("#hoadonmodal").modal("hide"),t.reset(),t.chi_tiet_hoa_don=[],t.clearErrors()};function V(u){t.chi_tiet_hoa_don=t.chi_tiet_hoa_don.filter((s,n)=>n!==u)}function U(){S.isEmpty(e.value.san_pham)||e.value.so_luong!==0&&(t.chi_tiet_hoa_don.push({id:"",hoa_don_id:_.hoa_don.id,san_pham:S.cloneDeep(e.value.san_pham),so_luong:e.value.so_luong,gia:e.value.gia,thanh_tien:e.value.gia*e.value.so_luong}),e.value={id:"",hoa_don_id:_.hoa_don.id,san_pham:{},so_luong:1,gia:0},$("#sanpham").val(null).trigger("change"))}return B(()=>{$("#sanpham").select2({placeholder:"Chọn sản phẩm"}).on("change",function(){var u;e.value.san_pham=_.san_pham_list.data.find(s=>String(s.id)===$(this).val()),e.value.gia=(u=e.value.san_pham)==null?void 0:u.gia_nhap}),$("#kho_id").select2({placeholder:"Chọn kho",width:"100%"}).on("change",function(){t.kho_id=$(this).val()}),$("#nha_cung_cap_id").select2({placeholder:"Chọn nhà cung cấp",width:"100%"}).on("change",function(){t.nha_cung_cap_id=$(this).val()}),$("#du_an_id").select2({placeholder:"Chọn dự án",width:"100%"}).on("change",function(){t.du_an_id=$(this).val()})}),E(()=>{$("#kho_id").select2({placeholder:"Chọn kho",width:"100%"}),$("#nha_cung_cap_id").select2({placeholder:"Chọn nhà cung cấp",width:"100%"}),$("#du_an_id").select2({placeholder:"Chọn dự án",width:"100%"})}),(u,s)=>(d(),l("div",H,[o("div",z,[o("div",F,[o("div",L,[o("button",{type:"button",class:"close",onClick:m(y,["prevent"])},"×")]),o("form",{onSubmit:m(M,["prevent"])},[o("div",A,[r(o("input",{type:"hidden","onUpdate:modelValue":s[0]||(s[0]=n=>a(t).id=n),id:"id",class:"form-control"},null,512),[[p,a(t).id]]),o("div",G,[o("div",J,[h.hoa_don.id?(d(),l("span",P,"Sửa phiếu nhập kho")):(d(),l("span",Q,"Thêm phiếu nhập kho"))]),o("div",R,[W,o("div",null,[r(o("input",{readonly:"",class:g([{"border-danger":a(t).errors.ma},"form-control"]),type:"text","onUpdate:modelValue":s[1]||(s[1]=n=>a(t).ma=n),id:"ma"},null,2),[[p,a(t).ma]])])]),o("div",X,[Z,o("div",null,[r(o("select",{class:g([{"border-danger":a(t).errors.du_an_id},"form-control"]),"onUpdate:modelValue":s[2]||(s[2]=n=>a(t).du_an_id=n),id:"du_an_id"},[oo,(d(!0),l(v,null,f(h.du_an_list,n=>(d(),l("option",{key:n.id,value:n.id},c(n.ten),9,no))),128))],2),[[b,a(t).du_an_id]])])]),o("div",to,[ao,o("div",null,[r(o("input",{class:g([{"border-danger":a(t).errors.date},"form-control"]),type:"date","onUpdate:modelValue":s[3]||(s[3]=n=>a(t).ngay=n),id:"ngay"},null,2),[[p,a(t).ngay]])])]),o("div",so,[eo,o("div",null,[r(o("select",{class:g([{"border-danger":a(t).errors.nha_cung_cap_id},"form-control"]),"onUpdate:modelValue":s[4]||(s[4]=n=>a(t).nha_cung_cap_id=n),id:"nha_cung_cap_id"},[io,(d(!0),l(v,null,f(h.nha_cung_cap_list,n=>(d(),l("option",{key:n.id,value:n.id},c(n.ten),9,lo))),128))],2),[[b,a(t).nha_cung_cap_id]])])]),o("div",_o,[ho,o("div",null,[r(o("select",{class:g([["form-control",{"border-danger":a(t).errors.kho_id}],""]),"onUpdate:modelValue":s[5]||(s[5]=n=>a(t).kho_id=n),id:"kho_id"},[ro,(d(!0),l(v,null,f(h.kho_list,n=>(d(),l("option",{key:n.id,value:n.id},c(n.ten),9,co))),128))],2),[[b,a(t).kho_id]])])]),o("div",uo,[po,o("div",null,[r(o("input",{type:"text","onUpdate:modelValue":s[6]||(s[6]=n=>a(t).ghi_chu=n),class:"form-control",id:"ghi_chu"},null,512),[[p,a(t).ghi_chu]])])])]),o("div",mo,[go,o("div",vo,[o("div",fo,[o("div",bo,[yo,r(o("select",{class:"form-control","onUpdate:modelValue":s[7]||(s[7]=n=>a(e).san_pham=n),id:"sanpham"},[(d(!0),l(v,null,f(h.san_pham_list.data,n=>(d(),l("option",{value:n.id},c(n.ten),9,ko))),256))],512),[[b,a(e).san_pham]])])]),o("div",Co,[o("div",$o,[wo,r(o("input",{type:"number","onUpdate:modelValue":s[8]||(s[8]=n=>a(e).so_luong=n),class:"form-control",id:"ghi_chu"},null,512),[[p,a(e).so_luong]])])]),o("div",xo,[o("div",So,[Mo,r(o("input",{type:"number","onUpdate:modelValue":s[9]||(s[9]=n=>a(e).gia=n),class:"form-control",id:"gia"},null,512),[[p,a(e).gia]])])]),o("div",Vo,[o("button",{onClick:s[10]||(s[10]=m(n=>U(),["prevent"])),class:"btn btn-primary form-control"},"Thêm")])]),o("table",Uo,[Do,o("tbody",null,[a(t).chi_tiet_hoa_don.length===0?(d(),l("tr",To,Oo)):(d(!0),l(v,{key:1},f(a(t).chi_tiet_hoa_don,(n,D)=>{var k,C,w,x;return d(),l("tr",{key:n.id},[o("td",Bo,c((k=n==null?void 0:n.san_pham)==null?void 0:k.ma),1),o("td",Eo,c((C=n==null?void 0:n.san_pham)==null?void 0:C.ten),1),o("td",Ko,c(n==null?void 0:n.so_luong),1),o("td",jo,c((x=(w=n==null?void 0:n.san_pham)==null?void 0:w.don_vi_tinh)==null?void 0:x.ten),1),o("td",Io,c(n==null?void 0:n.gia.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")),1),o("td",Yo,c(n==null?void 0:n.thanh_tien.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")),1),o("td",qo,[o("a",{class:"btn btn-danger btn-sm",onClick:m(Jo=>V(D),["prevent"])},Fo,8,Ho)])])}),128))])])])]),o("div",Lo,[o("button",{type:"submit",disabled:a(t).processing,class:"btn btn-primary"},"Lưu",8,Ao),o("button",{type:"button",class:"btn btn-default",onClick:m(y,["prevent"])},"Hủy")])],32)])])]))}},Xo=q(Go,[["__scopeId","data-v-b6defaad"]]);export{Xo as default};