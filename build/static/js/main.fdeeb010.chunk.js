(this["webpackJsonpto-do-project-frontend"]=this["webpackJsonpto-do-project-frontend"]||[]).push([[0],{57:function(e,t,n){"use strict";n.r(t);var r=n(1),c=n.n(r),a=n(27),s=n.n(a),o=n(6),u=n.n(o),i=n(10),j=n(9),d=(n(35),n(58)),l=n(29),b=n(62),p=n(63),x=n(0),h=function(e){var t=e.saveTodo,n=e.setTask,r=e.task;return Object(x.jsx)(d.a,{children:Object(x.jsx)(l.a,{children:Object(x.jsxs)(b.a,{onSubmit:t,children:[Object(x.jsxs)(b.a.Group,{as:d.a,className:"mb-3",children:[Object(x.jsx)(b.a.Label,{column:!0,sm:"4",children:"TODO"}),Object(x.jsx)(l.a,{sm:"10",children:Object(x.jsx)(b.a.Control,{value:r,onChange:function(e){var t=e.target;return n(t.value)},as:"textarea",rows:2,placeholder:"to do something important and meaningful...",maxLength:"140"})})]}),Object(x.jsx)(p.a,{variant:"primary",type:"submit",children:"Send"})]})})})},f=n(59),O=function(e){var t=e.doneClick;return Object(x.jsx)("button",{type:"submit",onClick:t,children:"Done"})},v=function(e){var t=e.todo,n=e.markDone,r=function(){var e=Object(i.a)(u.a.mark((function e(r){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:r.preventDefault(),window.confirm("Mark task ".concat(t.task," done?"))&&n(t.id);case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)("td",{children:t.task}),Object(x.jsx)("td",{children:t.id}),Object(x.jsx)("td",{children:Object(x.jsx)(O,{doneClick:r})})]})},m=function(e){var t=e.todoList,n=e.markDone;return null!==t?Object(x.jsxs)(f.a,{striped:!0,hover:!0,children:[Object(x.jsx)("thead",{children:Object(x.jsx)("tr",{children:Object(x.jsx)("th",{children:"Task"})})}),Object(x.jsx)("tbody",{children:t.map((function(e,t){return Object(x.jsx)("tr",{children:Object(x.jsx)(v,{id:t,todo:e,markDone:n})},t)}))})]}):Object(x.jsx)(x.Fragment,{})},k=n(60),g=function(){return Object(x.jsx)(k.a,{fluid:"sm",children:Object(x.jsx)("h1",{className:"text-center",children:"todo-project"})})},w=function(){return Object(x.jsx)(k.a,{children:Object(x.jsx)("p",{className:"text-center",children:Object(x.jsx)("blockquote",{children:"DevOps with Kubernetes Course Exercise"})})})},y=n(13),T=n.n(y),D=window.API_URL+"/todos",C=function(){var e=Object(i.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,T.a.get(D);case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),A=function(){var e=Object(i.a)(u.a.mark((function e(t){var n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("post task:",t),e.next=3,T.a.post(D,{task:t});case 3:return n=e.sent,e.abrupt("return",n.data);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),L=function(){var e=Object(i.a)(u.a.mark((function e(t){var n,r;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("put task:",t),n=D+"/"+t,e.next=4,T.a.put(n);case 4:return r=e.sent,e.abrupt("return",r.data);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),S={getTodos:function(){return console.log(D),T.a.get(D).then((function(e){return e.data}))},postTodo:A,getAsyncTodos:C,putTodo:L},E=n(61),N=function(){return Object(x.jsx)(l.a,{sm:!0,children:Object(x.jsx)(E.a,{src:"/static/pv/dailyImage.jpg",fluid:!0})})},I=function(){var e=Object(r.useState)([]),t=Object(j.a)(e,2),n=t[0],c=t[1],a=Object(r.useState)(""),s=Object(j.a)(a,2),o=s[0],b=s[1];Object(r.useEffect)((function(){S.getTodos().then((function(e){Array.isArray(e)?c(e):c([])})).catch((function(e){c([]),console.log("useEffect error: ",e)}))}),[]);var p=function(){var e=Object(i.a)(u.a.mark((function e(t){var n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),""===o){e.next=15;break}return e.prev=2,e.next=5,S.postTodo(o);case 5:return e.next=7,S.getTodos();case 7:n=e.sent,c(n),b(""),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(2),console.log("saving todo failed: ",e.t0.data);case 15:case"end":return e.stop()}}),e,null,[[2,12]])})));return function(t){return e.apply(this,arguments)}}(),f=function(){var e=Object(i.a)(u.a.mark((function e(t){var n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("got id: ",t),e.prev=1,e.next=4,S.putTodo(t);case 4:return e.next=6,S.getAsyncTodos();case 6:n=e.sent,c(n),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(1),console.log("mark task to done failed: ",e.t0.error);case 13:case"end":return e.stop()}}),e,null,[[1,10]])})));return function(t){return e.apply(this,arguments)}}();return Object(x.jsxs)(k.a,{children:[Object(x.jsx)(d.a,{children:Object(x.jsx)(g,{})}),Object(x.jsxs)(d.a,{className:".px-2,b-2",children:[Object(x.jsxs)(l.a,{children:[Object(x.jsx)(d.a,{children:Object(x.jsx)(h,{saveTodo:p,setTask:b,task:o})}),Object(x.jsx)(d.a,{children:Object(x.jsx)(m,{todoList:n,markDone:f})})]}),Object(x.jsx)(l.a,{children:Object(x.jsx)(N,{})})]}),Object(x.jsx)(d.a,{children:Object(x.jsx)(w,{})})]})};s.a.render(Object(x.jsx)(c.a.StrictMode,{children:Object(x.jsx)(I,{})}),document.getElementById("root"))}},[[57,1,2]]]);
//# sourceMappingURL=main.fdeeb010.chunk.js.map