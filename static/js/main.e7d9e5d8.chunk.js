(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(e,t,n){},15:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),o=n(7),s=n.n(o),r=(n(14),n(1)),l=n(2),c=n(4),u=n(3),h=n(5),m=function(e){function t(){return Object(r.a)(this,t),Object(c.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return i.a.createElement("form",{style:{textAlign:"center"},onSubmit:this.onSubmit.bind(this)},i.a.createElement("input",{type:"text",placeholder:"Task",ref:"task",autoFocus:!0}),i.a.createElement("button",{style:{width:"90%",display:"inline",outline:"none"},className:"btn btn-primary btn-block"},"Add"),i.a.createElement("button",{style:{width:"90%",display:"inline",outline:"none"},onClick:this.props.removeAll,className:"btn btn-negative btn-block btn-outlined"},"Clear All"))}},{key:"onSubmit",value:function(e){this.props.createTask(this.refs.task.value),this.refs.task.value="",e.preventDefault()}}]),t}(i.a.Component),d=function(e){function t(){return Object(r.a)(this,t),Object(c.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this,t=this.props.showTask;return console.log(this.props.listHeight),i.a.createElement("div",{style:{overflow:"auto",height:this.props.listHeight+"px"}},i.a.createElement("ul",{className:"table-view"},t.todos.map(function(t){return i.a.createElement("li",{className:"table-view-cell",key:t.id},i.a.createElement("p",{style:{width:"90%",overflow:"auto",maxheight:"300px",lineheight:"100px",overflowwrap:"break-word"}},t.taskValue),i.a.createElement("button",{className:"btn btn-negative",value:t.id,onClick:function(n){return e.props.removeTask(t.id)}},"Remove"))})))}}]),t}(i.a.Component),f=(n(15),{items:[],get:function(){return this.items},add:function(e){this.items.push(e)},remove:function(e){for(var t=0;t<this.items.length;t++)if(this.items[t].id===e)return void this.items.splice(t,1)},removeAll:function(){this.items=[]}}),p=function(e){function t(e){var n;if(Object(r.a)(this,t),(n=Object(c.a)(this,Object(u.a)(t).call(this,e))).listHeight=window.outerHeight-300,"undefined"!==typeof Storage){var a=localStorage.getItem("1");null!==a&&(f.items=JSON.parse(a))}return n.state={todos:f.items},n}return Object(h.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement(m,{createTask:this.createTask.bind(this),removeAll:this.removeAll.bind(this)}),i.a.createElement(d,{showTask:this.state,removeTask:this.removeTask.bind(this),listHeight:this.listHeight}))}},{key:"createTask",value:function(e){if(""!==e){var t=this.state.todos.length+1;f.add({id:t,taskValue:e}),this.setState({todos:f.get()}),"undefined"!==typeof Storage&&localStorage.setItem("1",JSON.stringify(this.state.todos))}}},{key:"removeTask",value:function(e){f.remove(e),this.setState({todos:f.get()}),"undefined"!==typeof Storage&&localStorage.setItem("1",JSON.stringify(this.state.todos))}},{key:"removeAll",value:function(){f.removeAll(),this.setState({todos:f.get()}),"undefined"!==typeof Storage&&localStorage.clear()}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(i.a.createElement(p,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},8:function(e,t,n){e.exports=n(16)}},[[8,1,2]]]);
//# sourceMappingURL=main.e7d9e5d8.chunk.js.map