(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(e,t,n){},15:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),s=n(7),o=n.n(s),r=(n(14),n(1)),c=n(2),l=n(4),u=n(3),m=n(5),h=function(e){function t(){return Object(r.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return i.a.createElement("form",{style:{textAlign:"center"},onSubmit:this.onSubmit.bind(this)},i.a.createElement("input",{type:"text",placeholder:"Task",ref:"task",autoFocus:!0}),i.a.createElement("button",{style:{width:"90%",display:"inline"},className:"btn btn-primary  btn-block"},"Add"))}},{key:"onSubmit",value:function(e){this.props.createTask(this.refs.task.value),this.refs.task.value="",e.preventDefault()}}]),t}(i.a.Component),d=function(e){function t(){return Object(r.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this,t=this.props.showTask;return console.log(t.todos),i.a.createElement("div",null,i.a.createElement("ul",{className:"table-view"},t.todos.map(function(t){return i.a.createElement("li",{className:"table-view-cell",key:t.id},t.taskValue,i.a.createElement("button",{className:"btn btn-negative",value:t.id,onClick:function(n){return e.props.removeTask(t.id)}},"Remove"))})))}}]),t}(i.a.Component),b=(n(15),{items:[],get:function(){return this.items},add:function(e){this.items.push(e)},remove:function(e){for(var t=0;t<this.items.length;t++)if(this.items[t].id===e)return void this.items.splice(t,1)}}),v=function(e){function t(e){var n;return Object(r.a)(this,t),(n=Object(l.a)(this,Object(u.a)(t).call(this,e))).state={todos:b.items},n}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement(h,{createTask:this.createTask.bind(this)}),i.a.createElement(d,{showTask:this.state,removeTask:this.removeTask.bind(this)}))}},{key:"createTask",value:function(e){if(""!==e){var t=this.state.todos.length+1;b.add({id:t,taskValue:e}),this.setState({todos:b.get()})}}},{key:"removeTask",value:function(e){b.remove(e),this.setState({todos:b.get()})}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(i.a.createElement(v,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},8:function(e,t,n){e.exports=n(16)}},[[8,1,2]]]);
//# sourceMappingURL=main.97141f8d.chunk.js.map