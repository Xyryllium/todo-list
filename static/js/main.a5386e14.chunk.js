(this.webpackJsonpreact_crash_todo=this.webpackJsonpreact_crash_todo||[]).push([[0],{30:function(e,t,a){e.exports=a(58)},57:function(e,t,a){},58:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(26),c=a.n(r),l=a(15),i=a(5),d=a(6),u=a(7),s=a(8),p=a(10),m=a(1);function f(){return o.a.createElement("header",{style:h},o.a.createElement("h1",null,"Todo List"),o.a.createElement(p.b,{style:b,to:"/"},"Home")," ","|"," ",o.a.createElement(p.b,{style:b,to:"/about"},"About"))}var h={background:"#333",color:"#fff",textAlign:"center",padding:"10px"},b={color:"#fff",textDecoratio:"none"},v=function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(e=t.call.apply(t,[this].concat(o))).getStyle=function(){return{background:"#f4f4f4",padding:"10px",borderBottom:"1px #ccc dotted",textDecoration:e.props.todo.completed?"line-through":"none"}},e}return Object(d.a)(a,[{key:"render",value:function(){var e=this.props.todo,t=e.id,a=e.title;return o.a.createElement("div",{style:this.getStyle()},o.a.createElement("p",null,o.a.createElement("input",{type:"checkbox",onChange:this.props.markComplete.bind(this,t)})," ",a,o.a.createElement("button",{onClick:this.props.deleteTodo.bind(this,t),style:y},"x")))}}]),a}(n.Component),y={background:"#a34040",color:"#fff",border:"none",padding:"5px 10px",borderRadius:"70%",cursor:"pointer",float:"right"},E=v,g=function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(d.a)(a,[{key:"render",value:function(){var e=this;return this.props.todos.map((function(t){return o.a.createElement(E,{key:t.id,todo:t,markComplete:e.props.markComplete,deleteTodo:e.props.deleteTodo})}))}}]),a}(o.a.Component),j=a(28),O=function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(e=t.call.apply(t,[this].concat(o))).state={title:""},e.onSubmit=function(t){t.preventDefault(),e.props.addTodo(e.state.title),e.setState({title:""})},e.onChange=function(t){return e.setState(Object(j.a)({},t.target.name,t.target.value))},e}return Object(d.a)(a,[{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement("form",{onSubmit:this.onSubmit,style:{display:"flex"}},o.a.createElement("input",{type:"text",name:"title",style:{flex:"10",padding:"5px"},placeholder:"Add Todo ...",value:this.state.title,onChange:this.onChange}),o.a.createElement("input",{type:"submit",value:"Submit",className:"btn",style:{flex:"1"}})))}}]),a}(n.Component);function k(){return o.a.createElement(o.a.Fragment,null,o.a.createElement("h1",null,"About"),o.a.createElement("p",null,"This is the TodoList app v1.0.0. It is part of the React crash course"))}var x=a(60),C=a(29),T=a.n(C),S=(a(57),function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(e=t.call.apply(t,[this].concat(o))).state={todos:[]},e.markComplete=function(t){e.setState({todos:e.state.todos.map((function(e){return e.id===t&&(e.completed=!e.completed),e}))})},e.deleteTodo=function(t){e.setState({todos:Object(l.a)(e.state.todos.filter((function(e){return e.id!==t})))})},e.addTodo=function(t){var a={id:Object(x.a)(),title:t,completed:!1};e.setState({todos:[].concat(Object(l.a)(e.state.todos),[a])})},e}return Object(d.a)(a,[{key:"componentDidMount",value:function(){var e=this;T.a.get("https://jsonplaceholder.typicode.com/todos?_limit=10").then((function(t){return e.setState({todos:t.data})}))}},{key:"render",value:function(){var e=this;return o.a.createElement(p.a,null,o.a.createElement("div",{className:"App"},o.a.createElement("div",{className:"container"},o.a.createElement(f,null),o.a.createElement(m.a,{exact:!0,path:"/",render:function(t){return o.a.createElement(o.a.Fragment,null,o.a.createElement(O,{addTodo:e.addTodo}),o.a.createElement(g,{todos:e.state.todos,markComplete:e.markComplete,deleteTodo:e.deleteTodo}))}}),o.a.createElement(m.a,{path:"/about",component:k}))))}}]),a}(o.a.Component));c.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(S,null)),document.getElementById("root"))}},[[30,1,2]]]);
//# sourceMappingURL=main.a5386e14.chunk.js.map