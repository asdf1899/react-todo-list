(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(e,t,n){},15:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var i=n(0),a=n.n(i),o=n(7),s=n.n(o),r=(n(14),n(1)),l=n(2),c=n(4),u=n(3),h=n(5),m=function(e){function t(){return Object(r.a)(this,t),Object(c.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return a.a.createElement("form",{style:{textAlign:"center"},onSubmit:this.onSubmit.bind(this)},a.a.createElement("input",{type:"text",placeholder:"Task",ref:"task",autoFocus:!0}),a.a.createElement("button",{style:{width:"90%",display:"inline",outline:"none"},className:"btn btn-primary btn-block"},"Add"),a.a.createElement("button",{style:{width:"90%",display:"inline",outline:"none"},onClick:this.props.removeAll,className:"btn btn-negative btn-block btn-outlined"},"Clear All"))}},{key:"onSubmit",value:function(e){this.props.createTask(this.refs.task.value),this.refs.task.value="",e.preventDefault()}}]),t}(a.a.Component),d=function(e){function t(){return Object(r.a)(this,t),Object(c.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this,t=this.props.showTask;return console.log(this.props.listHeight),a.a.createElement("div",{style:{overflow:"auto",height:this.props.listHeight+"px"}},a.a.createElement("ul",{className:"table-view"},t.todos.map(function(t){return a.a.createElement("li",{className:"table-view-cell",key:t.id},t.taskValue,a.a.createElement("button",{className:"btn btn-negative",value:t.id,onClick:function(n){return e.props.removeTask(t.id)}},"Remove"))})))}}]),t}(a.a.Component),f=(n(15),{items:[],get:function(){return this.items},add:function(e){this.items.push(e)},remove:function(e){for(var t=0;t<this.items.length;t++)if(this.items[t].id===e)return void this.items.splice(t,1)},removeAll:function(){this.items=[]}}),v=function(e){function t(e){var n;if(Object(r.a)(this,t),(n=Object(c.a)(this,Object(u.a)(t).call(this,e))).listHeight=window.outerHeight-300,"undefined"!==typeof Storage){var i=localStorage.getItem("1");null!==i&&(f.items=JSON.parse(i))}return n.state={todos:f.items},n}return Object(h.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return a.a.createElement("div",null,a.a.createElement(m,{createTask:this.createTask.bind(this),removeAll:this.removeAll.bind(this)}),a.a.createElement(d,{showTask:this.state,removeTask:this.removeTask.bind(this),listHeight:this.listHeight}))}},{key:"createTask",value:function(e){if(""!==e){var t=this.state.todos.length+1;f.add({id:t,taskValue:e}),this.setState({todos:f.get()}),"undefined"!==typeof Storage&&localStorage.setItem("1",JSON.stringify(this.state.todos))}}},{key:"removeTask",value:function(e){f.remove(e),this.setState({todos:f.get()}),"undefined"!==typeof Storage&&localStorage.setItem("1",JSON.stringify(this.state.todos))}},{key:"removeAll",value:function(){f.removeAll(),this.setState({todos:f.get()}),"undefined"!==typeof Storage&&localStorage.clear()}}]),t}(i.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(a.a.createElement(v,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},8:function(e,t,n){e.exports=n(16)}},[[8,1,2]]]);
//# sourceMappingURL=main.e15ecc2c.chunk.js.map