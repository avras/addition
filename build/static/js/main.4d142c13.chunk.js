(this.webpackJsonpaddition=this.webpackJsonpaddition||[]).push([[0],{44:function(e,n,t){e.exports=t(54)},54:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),o=t(7),i=t.n(o),s=t(30),c=t(20),l=t(31),u={firstNum:0,secondNum:0,answerResponse:"",showAnswerResponse:!1,showNewExerciseButton:!1},m=function(e,n){return e=Math.ceil(e),n=Math.floor(n),Math.floor(Math.random()*(n-e))+e},d=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:u,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case"ADDITION_PROBLEM_INITIALIZE":var t=m(100,1e3),a=m(100,1e3);return Object(l.a)({},u,{firstNum:t,secondNum:a});case"ADDITION_PROBLEM_CHECK_ANSWER":var r=n.answer;return console.log(r),console.log(r===e.firstNum+e.secondNum),console.log(parseInt(r)===e.firstNum+e.secondNum),parseInt(r)===e.firstNum+e.secondNum?Object(l.a)({},e,{answerResponse:"Yay! "+r+" is the correct answer.",showAnswerResponse:!0,showNewExerciseButton:!0}):Object(l.a)({},e,{answerResponse:"No. "+r+" is not the right answer.",showAnswerResponse:!0,showNewExerciseButton:!1});default:return e}},h=Object(c.b)({additionProblem:d}),w=t(22),f=t(93),p=t(91),N=t(92),b=t(87),E=t(95),g=t(94),I=Object(b.a)((function(e){return{exercise:{backgroundColor:e.palette.background.paper},form:{margin:e.spacing(1),flexDirection:"column",alignItems:"center",justifyContent:"center"},submit:{margin:e.spacing(3,0,2)}}})),v=Object(s.b)((function(e){return{additionProblem:e.additionProblem}}),{additionProblemInitialize:function(){return{type:"ADDITION_PROBLEM_INITIALIZE"}},additionProblemCheckAnswer:function(e){return{type:"ADDITION_PROBLEM_CHECK_ANSWER",answer:e}}})((function(e){var n=e.additionProblem,t=e.additionProblemInitialize,a=e.additionProblemCheckAnswer,o=I(),i=r.a.useState(""),s=Object(w.a)(i,2),c=s[0],l=s[1];r.a.useEffect((function(){t()}),[t]);var u=function(){l(""),t()},m=function(e){return""===e||!isNaN(e)&&parseInt(e)===Number(e)&&!isNaN(parseInt(e,10))};return r.a.createElement(N.a,{component:"main",maxWidth:"xs"},r.a.createElement("div",{className:o.exercise},r.a.createElement(f.a,null),r.a.createElement(p.a,{variant:"h6",align:"center",gutterBottom:!0},"Answer please!"),r.a.createElement(p.a,{variant:"h2",align:"center"},n.firstNum," + ",n.secondNum," = ?")),r.a.createElement("form",{className:o.form,noValidate:!0,onSubmit:function(e){e.preventDefault(),a(c)},autoComplete:"off"},r.a.createElement(g.a,{id:"answer",label:"Enter your answer here",margin:"normal",fullWidth:!0,variant:"outlined",inputProps:{style:{textAlign:"right",fontSize:50}},value:c,onChange:function(e){l(e.target.value)},error:!m(c),helperText:m(c)?null:"Please enter an integer"}),r.a.createElement(E.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",className:o.submit,disabled:0===c.length||!m(c)},"Check Answer")),n.showAnswerResponse?r.a.createElement(p.a,{variant:"h6",align:"center"},n.answerResponse):null,n.showNewExerciseButton?r.a.createElement(E.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",className:o.submit,onClick:u},"New Exercise"):null)}));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var A=Object(c.c)(h);i.a.render(r.a.createElement(s.a,{store:A},r.a.createElement(v,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[44,1,2]]]);
//# sourceMappingURL=main.4d142c13.chunk.js.map