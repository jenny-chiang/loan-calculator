(this["webpackJsonploan-calculator"]=this["webpackJsonploan-calculator"]||[]).push([[0],{45:function(e,a,t){e.exports=t(53)},53:function(e,a,t){"use strict";t.r(a);var l=t(0),n=t.n(l),r=t(7),c=t.n(r);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var u=t(24),o=t(82),m=t(86),i=t(87),E=t(88),s=t(89),v=t(90),h=t(91),g=t(92),b=[{value:0,label:"\u8acb\u9078\u64c7\u5b78\u671f\u6578"},{value:1,label:"1 \u5b78\u671f"},{value:2,label:"2 \u5b78\u671f"},{value:3,label:"3 \u5b78\u671f"},{value:4,label:"4 \u5b78\u671f"},{value:5,label:"5 \u5b78\u671f"},{value:6,label:"6 \u5b78\u671f"},{value:7,label:"7 \u5b78\u671f"},{value:8,label:"8 \u5b78\u671f"},{value:9,label:"9 \u5b78\u671f"},{value:10,label:"10 \u5b78\u671f"},{value:11,label:"11 \u5b78\u671f"},{value:12,label:"12 \u5b78\u671f"},{value:13,label:"13 \u5b78\u671f"},{value:14,label:"14 \u5b78\u671f"},{value:15,label:"15 \u5b78\u671f"},{value:16,label:"16 \u5b78\u671f"}],y=function(){var e=Object(l.useState)(0),a=Object(u.a)(e,2),t=a[0],r=a[1],c=Object(l.useState)(0),y=Object(u.a)(c,2),d=y[0],p=y[1],f=Object(l.useState)(.9),M=Object(u.a)(f,2),w=M[0],j=M[1],O=Object(l.useState)(0),C=Object(u.a)(O,2),S=C[0],k=C[1],x=Object(l.useState)(0),I=Object(u.a)(x,2),R=I[0],F=I[1],H=function(e){for(var a=e.moneyTotal,t=e.semesters,l=e.rate,n=e.returnedMoney,r=e.monthlyReturn,c=[],u=12*t,o=a-n,m=0;m<=u;++m){var i=u-m,E=Math.pow(1+l,i),s=o>0?Math.ceil(o*(l*E/(E-1))):0,v=Math.ceil(o/i),h=Math.max(s-v,0);c.push({year:Math.ceil(m/12),month:m,money:o,moneyMonthly:v,loanRequired:h,monthRemaining:i,loanMoney:s}),o-=r?Math.min(v,r):s}return c}({moneyTotal:d,semesters:t,rate:w/100/12,returnedMoney:S,monthlyReturn:R});return n.a.createElement("div",{style:{height:"auto",maxHeight:600,width:"auto",maxWidth:800,padding:10,borderStyle:"solid",margin:"auto",backgroundColor:"#FCFCFC"}},n.a.createElement(o.a,null,n.a.createElement(m.a,null,n.a.createElement(i.a,null,n.a.createElement(E.a,{colSpan:3},"\u5fc5\u586b\u6b04\u4f4d")),n.a.createElement(s.a,null,n.a.createElement(v.a,null,n.a.createElement(E.a,null,n.a.createElement(h.a,{label:"\u7e3d\u8cb8\u6b3e\u91d1\u984d",value:d,onChange:function(e){return p(parseInt(e.target.value,10)||0)}})),n.a.createElement(E.a,null,n.a.createElement(h.a,{style:{width:130},select:!0,label:"\u8cb8\u6b3e\u5b78\u671f\u7e3d\u6578",value:t,onChange:function(e){return r(parseInt(e.target.value,10)||0)}},b.map((function(e){return n.a.createElement(g.a,{key:e.value,value:e.value},e.label)})))),n.a.createElement(E.a,null,n.a.createElement(h.a,{label:"\u5e74\u5229\u7387",value:w,onChange:function(e){return j(parseFloat(e.target.value))}})))))),n.a.createElement(o.a,null,n.a.createElement(m.a,null,n.a.createElement(i.a,null,n.a.createElement(E.a,{colSpan:2},"\u9078\u586b\u6b04\u4f4d")),n.a.createElement(s.a,null,n.a.createElement(v.a,null,n.a.createElement(E.a,null,n.a.createElement(h.a,{label:"\u7b2c\u4e00\u5e74\u511f\u9084\u672c\u91d1",value:S,onChange:function(e){return k(parseInt(e.target.value,10)||0)}})),n.a.createElement(E.a,null,n.a.createElement(h.a,{label:"\u6bcf\u6b21\u511f\u9084\u672c\u91d1",value:R,onChange:function(e){return F(parseInt(e.target.value,10)||0)}})))))),n.a.createElement(o.a,{style:{maxHeight:300}},n.a.createElement(m.a,{stickyHeader:!0},n.a.createElement(i.a,null,n.a.createElement(v.a,null,n.a.createElement(E.a,{align:"center"},"\u5e74"),n.a.createElement(E.a,{align:"center"},"\u671f\u6578"),n.a.createElement(E.a,{align:"center"},"\u672c\u91d1"),n.a.createElement(E.a,{align:"center"},"\u61c9\u9084\u672c\u91d1"),n.a.createElement(E.a,{align:"center"},"\u61c9\u9084\u5229\u606f"),n.a.createElement(E.a,{align:"center"},"\u5269\u9918\u671f\u6578"),n.a.createElement(E.a,{align:"center"},"\u61c9\u9084\u672c\u606f"))),n.a.createElement(s.a,null,H.map((function(e){return n.a.createElement(v.a,{key:e.month},n.a.createElement(E.a,{align:"center"},e.year),n.a.createElement(E.a,{align:"center"},e.month),n.a.createElement(E.a,{align:"center"},e.money),n.a.createElement(E.a,{align:"center"},e.moneyMonthly||0),n.a.createElement(E.a,{align:"center"},e.loanRequired||0),n.a.createElement(E.a,{align:"center"},e.monthRemaining),n.a.createElement(E.a,{align:"center"},e.loanMoney))}))))))};function d(){return n.a.createElement("div",{style:{textAlign:"center"}},n.a.createElement("h1",{style:{margin:20}},"\u5b78\u8cb8\u8a08\u7b97\u6a5f"),n.a.createElement(y,null),n.a.createElement("div",{style:{margin:20}},n.a.createElement("p",null," \u4e00\u5b78\u671f\u7684\u8cb8\u6b3e\u91d1\u984d\u6709\u4e00\u5e74\u7684\u9084\u6b3e\u671f ",n.a.createElement("br",null)," * \u5047\u8a2d\u5927\u5b78\u56db\u5e74\u6bcf\u5b78\u671f\u7686\u6709\u8cb8\u6b3e\uff0c\u9084\u6b3e\u671f\u9650\u5247\u70ba 8 \u5e74 \uff081 \u5b78\u5e74 2 \u5b78\u671f\uff09* "),n.a.createElement("p",null," 2020\u5e74 1 \u6708\u4e4b\u5f8c\uff0c\u6bcf\u6708\u6536\u5165\u672a\u9054\u5230 35,000 \u5143\uff0c\u53ef\u5411\u627f\u8cb8\u9280\u884c\u7533\u8acb\u7de9\u7e73\u672c\u91d1 ",n.a.createElement("br",null)," * 1 \u6b21\u53ef\u4ee5\u5ef6\u5f8c 1 \u5e74\uff0c\u6700\u591a\u53ef\u4ee5\u7533\u8acb 3 \u6b21 * "),n.a.createElement("p",null,n.a.createElement("a",{href:"https://cpd.moe.gov.tw/articleInfo.php?id=3106"},"\u6559\u80b2\u90e8\u8cc7\u8a0a"))))}c.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(d,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[45,1,2]]]);
//# sourceMappingURL=main.f292cdfa.chunk.js.map