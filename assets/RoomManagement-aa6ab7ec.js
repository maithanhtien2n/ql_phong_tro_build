import{S as B,r as b,h as G,i as j,a as u,o as $,c as O,d as t,j as m,b as n,k as w,F as E,e as h,v as g,t as c}from"./index-29c451c3.js";import{T as F}from"./toast-a65cc0ad.js";const K=R=>new Intl.NumberFormat("vi-VN",{style:"currency",currency:"VND"}).format(R),L={class:"flex flex-column gap-3"},M={class:"flex flex-column gap-2"},q=n("span",null,"Tên phòng:",-1),X={class:"flex flex-column gap-2"},P=n("span",null,"Ảnh phòng:",-1),Q={class:"flex flex-column gap-2"},H=n("span",null,"Giá phòng:",-1),J={class:"flex flex-column gap-1"},W={class:"flex flex-column gap-2"},Y=n("span",null,"Kích thước phòng (m2):",-1),Z={class:"flex flex-column gap-1"},oo={class:"flex flex-column gap-2"},eo=n("span",null,"Số lượng phòng:",-1),lo={class:"flex flex-column gap-1"},no={class:"flex flex-column gap-2"},to=n("span",null,"Tiện ích:",-1),so={class:"flex flex-column gap-2"},ao=n("span",null,"Trạng thái:",-1),io={class:"flex flex-column gap-3"},mo=n("span",{class:"font-bold text-2xl"},"Quản lý phòng trọ",-1),ro={class:"flex gap-2"},uo=["src"],co={class:"fixed-text"},po=n("div",{class:"flex justify-content-center"}," Không tìm thấy kết quả nào ",-1),go={__name:"RoomManagement",setup(R){const _=F(),{onActionAddInfoRoom:C,onActionUpdateInfoRoom:I,onActionGetRooms:d,onActionGetDetailRoom:V,onActionRemoveRoom:v,onGetterRooms:y,onGetterDetailRoom:T}=B(),e=b({formInfoRoom:{name:"",image:"",price:null,size:null,amountRoom:null,utilities:"",status:"Chưa cho thuê"},selectedRoom:[],display:!1,popupDetail:{title:"Thêm phòng trọ"}}),a=b({price:null,size:null,amountRoom:null}),x=s=>{var o;e.display=!0,s==="create"?(e.popupDetail.title="Thêm phòng trọ",e.formInfoRoom={name:"",image:"",price:null,size:null,amountRoom:null,utilities:"",status:"Chưa cho thuê"}):(e.popupDetail.title="Cập nhật thông tin phòng",V((o=s==null?void 0:s.data)==null?void 0:o.id))},f=s=>{isNaN(e.formInfoRoom[s])?a[s]="Trường này bắt buộc là số":a[s]=null},D=()=>{let s=!1;return Object.keys(a).forEach(o=>{a[o]&&(s=!0)}),s},k=async()=>{D()||(e.popupDetail.title==="Thêm phòng trọ"?await C(e.formInfoRoom):await I(e.formInfoRoom),_.success("Lưu dữ liệu phòng thành công!"),e.display=!1,d())},S=async()=>{for(const s of e.selectedRoom)await v(s.id);_.success("Xóa phòng thành công!"),d()},N=()=>{let s=!1;return Object.keys(e.formInfoRoom).forEach(o=>{e.formInfoRoom[o]||(s=!0)}),s};return G(T,s=>{e.formInfoRoom=s}),j(()=>{d()}),(s,o)=>{const r=u("InputText"),U=u("Dropdown"),p=u("Button"),z=u("Dialog"),i=u("Column"),A=u("DataTable");return $(),O(E,null,[t(z,{visible:e.display,"onUpdate:visible":o[11]||(o[11]=l=>e.display=l),modal:"",header:e.popupDetail.title,class:"w-30rem"},{footer:m(()=>[t(p,{label:"Bỏ qua",onClick:o[10]||(o[10]=l=>e.display=!1),class:"p-button-outlined"}),t(p,{label:"Lưu",onClick:k,disabled:N(),autofocus:""},null,8,["disabled"])]),default:m(()=>[n("div",L,[n("label",M,[q,t(r,{modelValue:e.formInfoRoom.name,"onUpdate:modelValue":o[0]||(o[0]=l=>e.formInfoRoom.name=l)},null,8,["modelValue"])]),n("label",X,[P,t(r,{modelValue:e.formInfoRoom.image,"onUpdate:modelValue":o[1]||(o[1]=l=>e.formInfoRoom.image=l)},null,8,["modelValue"])]),n("label",Q,[H,n("div",J,[t(r,{modelValue:e.formInfoRoom.price,"onUpdate:modelValue":o[2]||(o[2]=l=>e.formInfoRoom.price=l),onChange:o[3]||(o[3]=l=>f("price"))},null,8,["modelValue"]),h(n("small",{class:"p-error text-custom-mini"},c(a.price),513),[[g,a.price]])])]),n("label",W,[Y,n("div",Z,[t(r,{modelValue:e.formInfoRoom.size,"onUpdate:modelValue":o[4]||(o[4]=l=>e.formInfoRoom.size=l),onChange:o[5]||(o[5]=l=>f("size"))},null,8,["modelValue"]),h(n("small",{class:"p-error text-custom-mini"},c(a.size),513),[[g,a.size]])])]),n("label",oo,[eo,n("div",lo,[t(r,{modelValue:e.formInfoRoom.amountRoom,"onUpdate:modelValue":o[6]||(o[6]=l=>e.formInfoRoom.amountRoom=l),onChange:o[7]||(o[7]=l=>f("amountRoom"))},null,8,["modelValue"]),h(n("small",{class:"p-error text-custom-mini"},c(a.amountRoom),513),[[g,a.amountRoom]])])]),n("label",no,[to,t(r,{modelValue:e.formInfoRoom.utilities,"onUpdate:modelValue":o[8]||(o[8]=l=>e.formInfoRoom.utilities=l)},null,8,["modelValue"])]),n("label",so,[ao,t(U,{modelValue:e.formInfoRoom.status,"onUpdate:modelValue":o[9]||(o[9]=l=>e.formInfoRoom.status=l),options:["Chưa cho thuê","Đã cho thuê"],placeholder:"Chọn trạng thái"},null,8,["modelValue"])])])]),_:1},8,["visible","header"]),n("div",io,[mo,t(A,{value:w(y),selection:e.selectedRoom,"onUpdate:selection":o[13]||(o[13]=l=>e.selectedRoom=l),tableStyle:"min-width: 50rem",onRowDblclick:o[14]||(o[14]=l=>x(l))},{header:m(()=>[n("div",ro,[t(p,{label:"Thêm phòng",onClick:o[12]||(o[12]=l=>x("create"))}),t(p,{label:"Xóa phòng",class:"p-button-danger",onClick:S,disabled:!(e!=null&&e.selectedRoom[0])},null,8,["disabled"])])]),empty:m(()=>[po]),default:m(()=>[t(i,{selectionMode:"multiple",headerStyle:"width: 3rem"}),t(i,{field:"name",header:"Tên phòng",headerClass:"white-space-nowrap",class:"w-10rem"}),t(i,{field:"image",header:"Ảnh",headerClass:"white-space-nowrap",class:"w-10rem"},{body:m(({data:l})=>[n("img",{class:"w-7rem h-5rem object-fit-cover",src:l==null?void 0:l.image,alt:"Lỗi ảnh"},null,8,uo)]),_:1}),t(i,{field:"price",header:"Giá",headerClass:"white-space-nowrap",class:"w-10rem"},{body:m(({data:l})=>[n("span",null,c(w(K)(l==null?void 0:l.price)),1)]),_:1}),t(i,{field:"size",header:"Kích thước",headerClass:"white-space-nowrap",class:"w-10rem"}),t(i,{field:"amountRoom",header:"Số lượng phòng",headerClass:"white-space-nowrap",class:"w-10rem"}),t(i,{field:"utilities",header:"Các tiện ích",headerClass:"white-space-nowrap",class:"w-15rem"},{body:m(({data:l})=>[n("span",co,c(l==null?void 0:l.utilities),1)]),_:1}),t(i,{field:"status",header:"Trạng thái",headerClass:"white-space-nowrap",class:"w-10rem"})]),_:1},8,["value","selection"])])],64)}}};export{go as default};
