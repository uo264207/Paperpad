(this.webpackJsonppaperpad=this.webpackJsonppaperpad||[]).push([[0],{11:function(e,t,a){e.exports=a(40)},16:function(e,t,a){},17:function(e,t,a){e.exports=a.p+"static/media/logo.5d5d9eef.svg"},18:function(e,t,a){},19:function(e,t,a){},20:function(e,t,a){},38:function(e,t,a){},39:function(e,t,a){},40:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),o=a(7),r=a.n(o),c=(a(16),a(2)),l=a(3),i=a(5),m=a(4),p=(a(17),a(18),a(19),a(20),function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,s=new Array(n),o=0;o<n;o++)s[o]=arguments[o];return(e=t.call.apply(t,[this].concat(s))).state={focus:!1,note:{}},e.handleClick=function(t){e.node.contains(t.target)||e.props.handlePop()},e}return Object(l.a)(a,[{key:"componentWillMount",value:function(){document.addEventListener("mousedown",this.handleClick,!1)}},{key:"componentWillUnmount",value:function(){document.removeEventListener("mousedown",this.handleClick,!1)}},{key:"render",value:function(){var e=this,t=this.state;t.focus,t.note,this.props.updateOnly;return s.a.createElement("div",{ref:function(t){return e.node=t},className:"notepopup-container"},s.a.createElement("div",{className:"notepopup-paper"},s.a.createElement("span",{onClick:function(){return e.props.handlePop()},className:"close-popup"},"X"),s.a.createElement("div",{className:"notepopup-header"},"This is a note header"),s.a.createElement("p",{className:"notepopup-text"},this.props.message)))}}]),a}(n.Component)),u=function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,s=new Array(n),o=0;o<n;o++)s[o]=arguments[o];return(e=t.call.apply(t,[this].concat(s))).state={focus:!1,note:{}},e}return Object(l.a)(a,[{key:"popupNote",value:function(){return s.a.createElement(p,{message:this.props.message})}},{key:"render",value:function(){var e=this.state;e.focus,e.note,this.props.updateOnly;return s.a.createElement("div",null,s.a.createElement("div",{className:"note-paper"},s.a.createElement("div",{className:"note-header"},"This is a note header"),s.a.createElement("p",{className:"note-text"},this.props.message)))}}]),a}(n.Component),d=a(10),h=(a(38),{dark:!1,switchTheme:function(){this.dark=!this.dark}});a(39);function f(){h.switchTheme(),h.dark?document.documentElement.setAttribute("data-theme","dark"):document.documentElement.setAttribute("data-theme","")}n.Component;var E=function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"showSettings",value:function(e){e.preventDefault()}},{key:"render",value:function(){return s.a.createElement(d.push,{disableAutoFocus:!0,className:"bm-menu",pageWrapId:this.props.pageWrapId,outerContainerId:this.props.container},s.a.createElement("nav",{className:"bm-item-list"},s.a.createElement("h2",{className:"bm-item",tabIndex:"0"},s.a.createElement("span",{className:"bm-item-title"},"PaperPad")),s.a.createElement("div",{id:"notes-item",className:"menu-item"},s.a.createElement("i",{className:"fa fa-fw fas fa-info-circle"}),s.a.createElement("span",null,"Notes"))))}}]),a}(n.Component),v=function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,s=new Array(n),o=0;o<n;o++)s[o]=arguments[o];return(e=t.call.apply(t,[this].concat(s))).state={shownote:!1,popupmsg:""},e}return Object(l.a)(a,[{key:"render",value:function(){var e,t=this;return s.a.createElement("div",{className:"App",id:"outer-container"},s.a.createElement(E,{pageWrapId:"page-wrap",container:"outer-container"}),s.a.createElement("header",{className:"App-header",id:"page-wrap"},s.a.createElement("div",{className:"tableContainer"},s.a.createElement("div",{className:"popup-note"},this.state.shownote?(e=this.state.popupmsg,s.a.createElement(p,{handlePop:function(){t.setState({shownote:!t.state.shownote})},message:e})):null),s.a.createElement("ul",null,s.a.createElement(u,{message:"Hola a todos"}),s.a.createElement("li",{onClick:function(){t.setState({shownote:!0,popupmsg:"esto va a acabar estando dentro del propio GNote, vaya desastre de code"}),console.log("w")},className:"note-li"},s.a.createElement(u,{message:"Hola a todos asddddddddasssssssssas asd   asdasd   asd sssssssssss"})),s.a.createElement("li",{className:"note-li"},s.a.createElement(u,{message:"Hola a todos que tal estais aasas"})),s.a.createElement("li",{className:"note-li"},s.a.createElement(u,{message:"Hola a todos"})),s.a.createElement("li",{className:"note-li"},s.a.createElement(u,{message:"Hola a todos"})),s.a.createElement("li",{className:"note-li"},s.a.createElement(u,{message:"Hola a todos"})),s.a.createElement("li",{className:"note-li"},s.a.createElement(u,{message:"Hola a todos"}))))))}}]),a}(s.a.Component);r.a.render(s.a.createElement(s.a.StrictMode,null,s.a.createElement(v,null)),document.getElementById("root"))}},[[11,1,2]]]);
//# sourceMappingURL=main.da7e851d.chunk.js.map