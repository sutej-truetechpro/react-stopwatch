(this["webpackJsonpreact-test"]=this["webpackJsonpreact-test"]||[]).push([[0],{11:function(e,t,a){e.exports=a(20)},16:function(e,t,a){},17:function(e,t,a){},19:function(e,t,a){},20:function(e,t,a){"use strict";a.r(t);var i=a(0),r=a.n(i),s=a(3),n=a.n(s),l=(a(16),a(17),a(8)),c=a(4),o=a(5),m=a(9),u=a(6),h=a(1),d=a(10),p=a(7),v=(a(19),function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(m.a)(this,Object(u.a)(t).call(this,e))).state={timer:"",handler:"",splitArr:[]},a.time="",a.updateTime=a.updateTime.bind(Object(h.a)(a)),a.startTimer=a.startTimer.bind(Object(h.a)(a)),a.stopTimer=a.stopTimer.bind(Object(h.a)(a)),a.pauseTimer=a.pauseTimer.bind(Object(h.a)(a)),a.resumeTimer=a.resumeTimer.bind(Object(h.a)(a)),a.split=a.split.bind(Object(h.a)(a)),a}return Object(d.a)(t,e),Object(o.a)(t,[{key:"startTimer",value:function(){this.setState({splitArr:[]}),this.time=new Date("2000-01-01 00:00:00"),this.updateTime(),this.setState({handler:setInterval(this.updateTime,100)})}},{key:"pauseTimer",value:function(){clearInterval(this.state.handler),this.setState({handler:!1})}},{key:"resumeTimer",value:function(){this.setState({handler:setInterval(this.updateTime,100)})}},{key:"stopTimer",value:function(){clearInterval(this.state.handler),this.setState({handler:!1,timer:""})}},{key:"updateTime",value:function(){var e=this.time.setMilliseconds(this.time.getMilliseconds()+100);this.setState({timer:p(e).format("mm:ss:SSS")})}},{key:"split",value:function(){var e=this.state.splitArr;e.push(this.state.timer),this.setState({splitArr:e}),console.log("timer",this.state.splitArr)}},{key:"render",value:function(){var e=[],t=!0,a=!1,i=void 0;try{for(var s,n=this.state.splitArr.entries()[Symbol.iterator]();!(t=(s=n.next()).done);t=!0){var c=Object(l.a)(s.value,2),o=(c[0],c[1]);e.push(r.a.createElement("form",null,r.a.createElement("div",{className:"form-group row mx-auto m-2"},r.a.createElement("label",{className:"col-sm-2 col-form-label"},o),r.a.createElement("span",{className:"col-sm-1"}),r.a.createElement("div",{className:"col-sm-8"},r.a.createElement("input",{type:"text",className:"form-control"})))))}}catch(m){a=!0,i=m}finally{try{t||null==n.return||n.return()}finally{if(a)throw i}}return r.a.createElement("div",null,r.a.createElement("div",{className:"heading"},"Stop Watch"),r.a.createElement("button",{disabled:this.state.handler,onClick:this.startTimer},"Start"," Timer"),r.a.createElement("button",{onClick:this.split},"Split"),r.a.createElement("button",{disabled:!this.state.handler,onClick:this.stopTimer},"Stop Timer"),r.a.createElement("div",{className:"timer"},this.state.timer),this.state.splitArr.length>0?r.a.createElement("div",{className:"comment-box"},e):null)}}]),t}(r.a.Component));var b=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(v,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n.a.render(r.a.createElement(b,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[11,1,2]]]);
//# sourceMappingURL=main.cfa1739f.chunk.js.map