(this.webpackJsonpreact_clock=this.webpackJsonpreact_clock||[]).push([[0],{13:function(e,t,n){},14:function(e,t,n){"use strict";n.r(t);var c=n(7),a=n.n(c),o=n(2),r=n(3),i=n(5),s=n(4),l=n(1),u=n(0);function m(){return(new Date).toUTCString().slice(-12,-4)}var h=function(e){Object(i.a)(n,e);var t=Object(s.a)(n);function n(){var e;Object(o.a)(this,n);for(var c=arguments.length,a=new Array(c),r=0;r<c;r++)a[r]=arguments[r];return(e=t.call.apply(t,[this].concat(a))).state={time:m(),clockName:e.props.name},e.timerId=0,e}return Object(r.a)(n,[{key:"componentDidMount",value:function(){var e=this;this.timerId=window.setInterval((function(){var t=m();e.setState({time:t}),console.info(t)}),1e3),this.setState({clockName:this.props.name})}},{key:"componentDidUpdate",value:function(e){e.name!==this.props.name&&this.changeStateClockName()}},{key:"componentWillUnmount",value:function(){clearInterval(this.timerId)}},{key:"changeStateClockName",value:function(){var e=this.props.name;this.setState((function(t,n){return console.debug("Renamed from ".concat(t.clockName," to ").concat(n.name)),{clockName:e}}))}},{key:"render",value:function(){var e=this.state,t=e.time,n=e.clockName;return Object(u.jsxs)("div",{className:"Clock",children:[Object(u.jsxs)("span",{children:[Object(u.jsx)("strong",{className:"Clock__name",children:n})," time is "]}),Object(u.jsx)("span",{className:"Clock__time",children:t})]})}}]),n}(l.Component);n(13);var d=function(e){Object(i.a)(n,e);var t=Object(s.a)(n);function n(){var e;Object(o.a)(this,n);for(var c=arguments.length,a=new Array(c),r=0;r<c;r++)a[r]=arguments[r];return(e=t.call.apply(t,[this].concat(a))).state={hasClock:!0,clockName:"Clock-0"},e.timerId=0,e.currentName="",e}return Object(r.a)(n,[{key:"componentDidMount",value:function(){var e=this;document.addEventListener("click",(function(){e.setState({hasClock:!0})})),document.addEventListener("contextmenu",(function(t){t.preventDefault(),e.setState({hasClock:!1})})),this.timerId=window.setInterval((function(){e.currentName=function(){var e=Date.now().toString().slice(-4);return"Clock-".concat(e)}(),e.setState({clockName:e.currentName})}),3300)}},{key:"componentWillUnmount",value:function(){clearInterval(this.timerId)}},{key:"render",value:function(){var e=this.state,t=e.hasClock,n=e.clockName;return Object(u.jsxs)("div",{className:"App",children:[Object(u.jsx)("h1",{children:"React Clock"}),t&&Object(u.jsx)(h,{name:n})]})}}]),n}(l.Component);a.a.render(Object(u.jsx)(d,{}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.68acd71b.chunk.js.map