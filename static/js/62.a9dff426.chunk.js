(this["webpackJsonpgyanayu-react-app"]=this["webpackJsonpgyanayu-react-app"]||[]).push([[62],{133:function(e,a,t){"use strict";t(0);var s=t(167),r=t(153),c=t(163),l=t(1);a.a=function(e){return Object(l.jsx)(s.a,{children:Object(l.jsx)(r.a,{children:Object(l.jsxs)("div",{className:"page-title-box",children:[Object(l.jsx)("h4",{className:"page-title",children:e.title}),Object(l.jsx)("div",{className:"page-title-right",children:Object(l.jsxs)(c.a,{listProps:{className:"m-0"},children:[Object(l.jsx)(c.a.Item,{href:"/",children:"Shreyu"}),(e.breadCrumbItems||[]).map((function(e,a){return e.active?Object(l.jsx)(c.a.Item,{active:!0,children:e.label},a):Object(l.jsx)(c.a.Item,{href:e.path,children:e.label},a)}))]})})]})})})}},198:function(e,a,t){"use strict";t.d(a,"b",(function(){return i})),t.d(a,"a",(function(){return p}));var s=t(3),r=t(0),c=t.n(r),l=t(199),n=t(1),i=function(e){var a=e.defaultValues,t=e.resolver,r=e.children,i=e.onSubmit,o=e.formClass,b=Object(l.d)({defaultValues:a,resolver:t}),j=b.handleSubmit,d=b.register,m=b.control,O=b.formState.errors;return Object(n.jsx)("form",{onSubmit:j(i),className:o,noValidate:!0,children:Array.isArray(r)?r.map((function(e){return e.props&&e.props.name?c.a.createElement(e.type,Object(s.a)({},Object(s.a)(Object(s.a)({},e.props),{},{register:d,key:e.props.name,errors:O,control:m}))):e})):r})},o=t(35),b=t(695),j=t(810),d=function(e){var a=e.type,t=e.name,r=e.placeholder,c=e.register,l=e.errors,i=e.comp,j=e.rows,d=e.className,m=e.refCallback,O=Object(o.a)(e,["type","name","placeholder","register","errors","comp","rows","className","refCallback"]);return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)(b.a.Control,Object(s.a)(Object(s.a)({type:a,placeholder:r,name:t,as:i,id:t,ref:function(e){m&&m(e)},className:d,isInvalid:!(!l||!l[t])},c?c(t):{}),{},{rows:j},O)),l&&l[t]?Object(n.jsx)(b.a.Control.Feedback,{type:"invalid",className:"d-block",children:l[t].message}):null]})},m=function(e){var a=e.type,t=e.label,r=e.name,c=(e.placeholder,e.register),l=e.errors,i=(e.comp,e.rows,e.className),j=e.refCallback,d=Object(o.a)(e,["type","label","name","placeholder","register","errors","comp","rows","className","refCallback"]);return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)(b.a.Check,Object(s.a)(Object(s.a)({type:a,label:t,name:r,id:r,ref:function(e){j&&j(e)},className:i,isInvalid:!(!l||!l[r])},c?c(r):{}),d)),l&&l[r]?Object(n.jsx)(b.a.Control.Feedback,{type:"invalid",children:l[r].message}):null]})},O=function(e){var a=e.type,t=e.label,r=e.name,c=(e.placeholder,e.register),l=e.errors,i=(e.comp,e.rows,e.className),j=e.refCallback,d=Object(o.a)(e,["type","label","name","placeholder","register","errors","comp","rows","className","refCallback"]);return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)(b.a.Select,Object(s.a)(Object(s.a)({type:a,label:t,name:r,id:r,ref:function(e){j&&j(e)},className:i,isInvalid:!(!l||!l[r])},c?c(r):{}),d)),l&&l[r]?Object(n.jsx)(b.a.Control.Feedback,{type:"invalid",children:l[r].message}):null]})},h=function(e){var a=e.startIcon,t=e.type,r=e.name,c=e.placeholder,l=e.comp,i=e.register,b=e.errors,m=e.rows,h=e.className,p=e.textClassName,u=e.refCallback,x=Object(o.a)(e,["startIcon","type","name","placeholder","comp","register","errors","rows","className","textClassName","refCallback"]);return Object(n.jsxs)(j.a,{children:[Object(n.jsx)(j.a.Text,{className:p,children:a}),"select"===t?Object(n.jsx)(O,Object(s.a)({type:t,name:r,placeholder:c,refCallback:u,comp:l,errors:b,register:i,className:h,rows:m},x)):Object(n.jsx)(d,Object(s.a)({type:t,name:r,placeholder:c,refCallback:u,comp:l,errors:b,register:i,className:h,rows:m},x))]})},p=function(e){var a=e.startIcon,t=e.label,r=e.type,c=e.name,l=e.placeholder,i=e.register,j=e.errors,p=(e.control,e.className),u=e.labelClassName,x=e.containerClass,g=e.textClassName,v=e.refCallback,f=e.action,N=e.rows,y=Object(o.a)(e,["startIcon","label","type","name","placeholder","register","errors","control","className","labelClassName","containerClass","textClassName","refCallback","action","rows"]),C="textarea"===r?"textarea":"select"===r?"select":"input";return Object(n.jsx)(n.Fragment,{children:"hidden"===r?Object(n.jsx)("input",Object(s.a)(Object(s.a)({type:r,name:c},i?i(c):{}),y)):Object(n.jsx)(n.Fragment,{children:"checkbox"===r||"radio"===r?Object(n.jsx)(b.a.Group,{className:x,children:Object(n.jsx)(m,Object(s.a)({type:r,label:t,name:c,placeholder:l,refCallback:v,errors:j,register:i,comp:C,className:p,rows:N},y))}):"select"===r?Object(n.jsxs)(b.a.Group,{className:x,children:[t?Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)(b.a.Label,{className:u,children:t}),f&&f]}):null,a?Object(n.jsx)(h,Object(s.a)({type:r,startIcon:a,name:c,comp:C,textClassName:g,placeholder:l,refCallback:v,errors:j,register:i,className:p,rows:N},y)):Object(n.jsx)(O,Object(s.a)({type:r,name:c,placeholder:l,refCallback:v,errors:j,register:i,comp:C,className:p,rows:N},y))]}):Object(n.jsxs)(b.a.Group,{className:x,children:[t?Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)(b.a.Label,{className:u,children:t}),f&&f]}):null,a?Object(n.jsx)(h,Object(s.a)({type:r,startIcon:a,name:c,comp:C,textClassName:g,placeholder:l,refCallback:v,errors:j,register:i,className:p,rows:N},y)):Object(n.jsx)(d,Object(s.a)({type:r,name:c,placeholder:l,refCallback:v,errors:j,register:i,comp:C,className:p,rows:N},y))]})})})}},970:function(e,a,t){"use strict";t.r(a);var s=t(31),r=t(23),c=t(0),l=t(167),n=t(153),i=t(213),o=t(160),b=t(852),j=t(133),d=t(836),m=t(857),O=t(858),h=t(860),p=t(862),u=t(1),x=function(e){var a=e.onDateClick,t=e.onEventClick,s=e.events;return Object(u.jsx)(u.Fragment,{children:Object(u.jsx)("div",{id:"calendar",children:Object(u.jsx)(b.a,{initialView:"dayGridMonth",plugins:[d.b,m.a,O.a,h.a,p.a],handleWindowResize:!0,themeSystem:"bootstrap",buttonText:{today:"Today",month:"Month",week:"Week",day:"Day",list:"List",prev:"Prev",next:"Next"},headerToolbar:{left:"prev,next today",center:"title",right:"dayGridMonth,timeGridWeek,timeGridDay,listMonth"},dayMaxEventRows:1,editable:!0,selectable:!0,droppable:!0,events:s,dateClick:function(e){a(e)},eventClick:function(e){t(e)}})})})},g=t(199),v=t(834),f=t(288),N=t(290),y=t(198),C=function(e){var a=e.isOpen,t=e.onClose,s=e.isEditable,o=e.eventData,b=e.onRemoveEvent,j=e.onUpdateEvent,d=e.onAddEvent,m=Object(c.useState)(o),O=Object(r.a)(m,1)[0],h=Object(N.a)(f.b().shape({title:f.d().required("Please enter event name"),className:f.d().required("Please select category")})),p=Object(g.d)({defaultValues:O,resolver:h}),x=p.handleSubmit,C=p.register,w=p.control,k=p.formState.errors;return Object(u.jsxs)(v.a,{show:a,onHide:t,backdrop:"static",keyboard:!1,children:[Object(u.jsx)(v.a.Header,{className:"pb-2 px-4 border-bottom-0",closeButton:!0,children:Object(u.jsx)(v.a.Title,{id:"modal-title",children:Object(u.jsxs)("h5",{children:[" ",s?"Edit Event":"Add New Event"," "]})})}),Object(u.jsx)(v.a.Body,{className:"px-4 pb-4 pt-0",children:Object(u.jsxs)("form",{noValidate:!0,name:"chat-form",id:"chat-form",onSubmit:x((function(e){s?j(e):d(e)})),children:[Object(u.jsxs)(l.a,{children:[Object(u.jsx)(n.a,{sm:12,children:Object(u.jsx)(y.a,{type:"text",label:"Event Name",name:"title",className:"form-control",placeholder:"Insert Event Name",containerClass:"mb-3",register:C,errors:k,control:w},"title")}),Object(u.jsx)(n.a,{sm:12,children:Object(u.jsxs)(y.a,{type:"select",label:"Category",name:"className",className:"form-control",containerClass:"mb-3",register:C,errors:k,control:w,children:[Object(u.jsx)("option",{value:"bg-danger",children:"Danger"}),Object(u.jsx)("option",{value:"bg-success",children:"Success"}),Object(u.jsx)("option",{value:"bg-primary",children:"Primary"}),Object(u.jsx)("option",{value:"bg-info",children:"Info"}),Object(u.jsx)("option",{value:"bg-dark",children:"Dark"}),Object(u.jsx)("option",{value:"bg-warning",children:"Warning"})]},"className")})]}),Object(u.jsxs)(l.a,{children:[Object(u.jsx)(n.a,{xs:4,children:s?Object(u.jsx)(i.a,{variant:"danger",onClick:b,children:"Delete"}):null}),Object(u.jsxs)(n.a,{xs:8,className:"text-end",children:[Object(u.jsx)(i.a,{className:"btn btn-light me-1",onClick:t,children:"Close"}),Object(u.jsx)(i.a,{variant:"success",type:"submit",className:"btn btn-success",children:"Save"})]})]})]})})]})},w=[{id:"1",title:"Interview - Backend Engineer",start:new Date,className:"bg-success"},{id:"2",title:"Phone Screen - Frontend Engineer",start:(new Date).setDate((new Date).getDate()+2),className:"bg-info"},{id:"3",title:"Meeting with John Deo",start:(new Date).setDate((new Date).getDate()+2),end:(new Date).setDate((new Date).getDate()+4),className:"bg-warning"},{id:"4",title:"Buy a Theme",start:(new Date).setDate((new Date).getDate()+4),end:(new Date).setDate((new Date).getDate()+5),className:"bg-primary"}],k=t.p+"static/media/cal.80fd7ea4.png",D=function(e){var a=e.createNewEvent;return Object(u.jsxs)(l.a,{className:"align-items-center",children:[Object(u.jsx)(n.a,{xl:2,lg:3,xs:6,children:Object(u.jsx)("img",{src:k,className:"me-4 align-self-center img-fluid",alt:""})}),Object(u.jsx)(n.a,{xl:10,lg:9,children:Object(u.jsxs)("div",{className:"mt-4 mt-lg-0",children:[Object(u.jsx)("h5",{className:"mt-0 mb-1 fw-bold",children:"Welcome to Your Calendar"}),Object(u.jsx)("p",{className:"text-muted mb-2",children:'The calendar shows the events synced from all your linked calendars. Click on event to see or edit the details. You can create new event by clicking on "Create New event" button or any cell available in calendar below.'}),Object(u.jsxs)(i.a,{variant:"primary",className:"mt-2 me-1",id:"btn-new-event",onClick:a,children:[Object(u.jsx)("i",{className:"uil-plus-circle"})," Create New Event"]}),Object(u.jsxs)(i.a,{variant:"white",className:"mt-2",children:[Object(u.jsx)("i",{className:"uil-sync"})," Link Calendars"]})]})})]})};a.default=function(){var e=Object(c.useState)(!1),a=Object(r.a)(e,2),t=a[0],i=a[1],b=function(){i(!1),S({}),T({})},d=function(){return i(!0)},m=Object(c.useState)(!1),O=Object(r.a)(m,2),h=O[0],p=O[1],g=Object(c.useState)(Object(s.a)(w)),v=Object(r.a)(g,2),f=v[0],N=v[1],y=Object(c.useState)({}),k=Object(r.a)(y,2),E=k[0],S=k[1],I=Object(c.useState)({}),F=Object(r.a)(I,2),G=F[0],T=F[1];return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(j.a,{breadCrumbItems:[{label:"Apps",path:"/apps/calendar"},{label:"Calendar",path:"/apps/calendar",active:!0}],title:"Calendar"}),Object(u.jsx)(l.a,{children:Object(u.jsx)(n.a,{children:Object(u.jsx)(o.a,{children:Object(u.jsx)(o.a.Body,{children:Object(u.jsx)(D,{createNewEvent:function(){p(!1),d()}})})})})}),Object(u.jsx)(l.a,{children:Object(u.jsx)(n.a,{children:Object(u.jsx)(o.a,{children:Object(u.jsx)(o.a.Body,{children:Object(u.jsx)(x,{onDateClick:function(e){T(e),d(),p(!1)},onEventClick:function(e){var a={id:String(e.event.id),title:e.event.title,className:e.event.classNames[0]};S(a),d(),p(!0)},events:f})})})})}),t?Object(u.jsx)(C,{isOpen:t,onClose:b,isEditable:h,eventData:E,onUpdateEvent:function(e){var a=Object(s.a)(f),t=a.findIndex((function(e){return e.id===E.id}));a[t].title=e.title,a[t].className=e.className,N(a),b(),p(!1)},onRemoveEvent:function(){var e=Object(s.a)(f),a=e.findIndex((function(e){return e.id===E.id}));e.splice(a,1),N(e),b()},onAddEvent:function(e){var a=Object(s.a)(f),t={id:String(a.length+1),title:e.title,start:0!==Object.keys(G).length?G.date:new Date,className:e.className};a.push(t),N(a),b()}}):null]})}}}]);
//# sourceMappingURL=62.a9dff426.chunk.js.map