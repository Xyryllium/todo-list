(this.webpackJsonpreact_crash_todo=this.webpackJsonpreact_crash_todo||[]).push([[0],{30:function(t,e,n){t.exports=n(58)},57:function(t,e,n){},58:function(t,e,n){"use strict";n.r(e);var a=n(0),o=n.n(a),r=n(27),c=n.n(r),l=n(16),i=n(5),d=n(6),s=n(7),u=n(8),p=n(10),m=n(1);function h(){return o.a.createElement("header",{style:f},o.a.createElement("h1",null,"Todo List"),o.a.createElement(p.b,{style:b,to:"/"},"Home")," ","|"," ",o.a.createElement(p.b,{style:b,to:"/about"},"About"))}var f={background:"#333",color:"#fff",textAlign:"center",padding:"10px"},b={color:"#fff",textDecoratio:"none"},v=function(t){Object(u.a)(n,t);var e=Object(s.a)(n);function n(){var t;Object(i.a)(this,n);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(t=e.call.apply(e,[this].concat(o))).getStyle=function(){return{background:"#f4f4f4",padding:"10px",borderBottom:"1px #ccc dotted",textDecoration:t.props.todo.completed?"line-through":"none"}},t}return Object(d.a)(n,[{key:"render",value:function(){var t=this.props.todo,e=t.id,n=t.title;return o.a.createElement("div",{style:this.getStyle()},o.a.createElement("p",null,o.a.createElement("input",{type:"checkbox",onChange:this.props.markComplete.bind(this,e)})," ",n,o.a.createElement("button",{onClick:this.props.deleteTodo.bind(this,e),style:y},"x")))}}]),n}(a.Component),y={background:"#a34040",color:"#fff",border:"none",padding:"5px 10px",borderRadius:"70%",cursor:"pointer",float:"right"},E=v,g=function(t){Object(u.a)(n,t);var e=Object(s.a)(n);function n(){return Object(i.a)(this,n),e.apply(this,arguments)}return Object(d.a)(n,[{key:"render",value:function(){var t=this;return this.props.todos.map((function(e){return o.a.createElement(E,{key:e.id,todo:e,markComplete:t.props.markComplete,deleteTodo:t.props.deleteTodo})}))}}]),n}(o.a.Component),j=n(29),k=function(t){Object(u.a)(n,t);var e=Object(s.a)(n);function n(){var t;Object(i.a)(this,n);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(t=e.call.apply(e,[this].concat(o))).state={title:""},t.onSubmit=function(e){e.preventDefault(),t.props.addTodo(t.state.title),t.setState({title:""})},t.onChange=function(e){return t.setState(Object(j.a)({},e.target.name,e.target.value))},t}return Object(d.a)(n,[{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement("form",{onSubmit:this.onSubmit,style:{display:"flex"}},o.a.createElement("input",{type:"text",name:"title",style:{flex:"10",padding:"5px"},placeholder:"Add Todo ...",value:this.state.title,onChange:this.onChange}),o.a.createElement("input",{type:"submit",value:"Submit",className:"btn",style:{flex:"1"}})))}}]),n}(a.Component);function O(){return o.a.createElement(o.a.Fragment,null,o.a.createElement("h1",null,"About"),o.a.createElement("p",null,"This is the TodoList app v1.0.0. It is part of the React crash course"))}var x=n(11),C=n.n(x),T=(n(57),function(t){Object(u.a)(n,t);var e=Object(s.a)(n);function n(){var t;Object(i.a)(this,n);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(t=e.call.apply(e,[this].concat(o))).state={todos:[]},t.markComplete=function(e){t.setState({todos:t.state.todos.map((function(t){return t.id===e&&(t.completed=!t.completed),t}))})},t.deleteTodo=function(e){C.a.delete("https://jsonplaceholder.typicode.com/todos/".concat(e)).then((function(n){return t.setState({todos:Object(l.a)(t.state.todos.filter((function(t){return t.id!==e})))})}))},t.addTodo=function(e){C.a.post("https://jsonplaceholder.typicode.com/todos",{title:e,completed:!1}).then((function(e){return t.setState({todos:[].concat(Object(l.a)(t.state.todos),[e.data])})}))},t}return Object(d.a)(n,[{key:"componentDidMount",value:function(){var t=this;C.a.get("https://jsonplaceholder.typicode.com/todos?_limit=10").then((function(e){return t.setState({todos:e.data})}))}},{key:"render",value:function(){var t=this;return o.a.createElement(p.a,null,o.a.createElement("div",{className:"App"},o.a.createElement("div",{className:"container"},o.a.createElement(h,null),o.a.createElement(m.a,{exact:!0,path:"/",render:function(e){return o.a.createElement(o.a.Fragment,null,o.a.createElement(k,{addTodo:t.addTodo}),o.a.createElement(g,{todos:t.state.todos,markComplete:t.markComplete,deleteTodo:t.deleteTodo}))}}),o.a.createElement(m.a,{path:"/about",component:O}))))}}]),n}(o.a.Component));c.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(T,null)),document.getElementById("root"))}},[[30,1,2]]]);
//# sourceMappingURL=main.92bfb157.chunk.js.map