(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,function(e){e.exports=[{id:1,name:"draco",image:"./images/hp/draco.jpg"},{id:2,name:"dumbledore",image:"./images/hp/dumbledore.jpg"},{id:3,name:"ginny",image:"./images/hp/ginny.jpg"},{id:4,name:"hagrid",image:"./images/hp/hagrid.jpg"},{id:5,name:"harry",image:"./images/hp/harry.jpg"},{id:6,name:"hermione",image:"./images/hp/hermione.jpg"},{id:7,name:"luna",image:"./images/hp/luna.jpg"},{id:8,name:"mcgonagall",image:"./images/hp/mcgonagall.jpg"},{id:9,name:"ron",image:"./images/hp/ron.jpg"},{id:10,name:"snape",image:"./images/hp/snape.jpg"},{id:11,name:"umbridge",image:"./images/hp/umbridge.jpg"},{id:12,name:"voldemort",image:"./images/hp/voldemort.jpg"}]},,,function(e,a,t){e.exports=t(21)},,,,,,function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){"use strict";t.r(a);var s=t(0),r=t.n(s),n=t(2),c=t.n(n),i=(t(15),t(3)),o=t(4),l=t(7),m=t(5),d=t(8);t(16);var u=function(e){return r.a.createElement("div",{className:"wrapper"},e.children)};t(17);var h=function(e){return r.a.createElement("nav",{className:"navbar"},r.a.createElement("ul",null,r.a.createElement("li",{className:"brand"},r.a.createElement("a",{href:e.homeAddress},"Clicky Game")),r.a.createElement("li",{className:e.statusClass},e.statusText),r.a.createElement("li",null,"Score: ",e.score," | Top Score: ",e.topScore)))};t(18);var g=function(){return r.a.createElement("div",{className:"jumbotron"},r.a.createElement("h1",null,"Clicky Game!"),r.a.createElement("h2",null,"Click every image to win, but don't click the same image twice!"))};t(19);var p=function(e){return r.a.createElement("div",{onClick:function(){return e.cardClicked(e.id)},className:e.cardClass,style:{backgroundImage:"url('"+e.image+"')"}})},f=t(6),k=(t(20),function(e){function a(){var e,t;Object(i.a)(this,a);for(var s=arguments.length,r=new Array(s),n=0;n<s;n++)r[n]=arguments[n];return(t=Object(l.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(r)))).state={score:0,topScore:0,homeAddress:window.location.href,statusText:"Click an image to begin!",statusClass:"",characters:f,cardClass:"click-item"},t.shuffleCards=function(e){for(var a=[],s=[];a.length!==e.length;){var r=Math.floor(Math.random()*e.length);-1===s.indexOf(r)&&(a.push(e[r]),s.push(r))}t.setState({characters:a})},t.cardClicked=function(e){t.state.characters.forEach(function(a){a.id!==e||a.clicked?a.id===e&&a.clicked&&(t.state.score>t.state.topScore&&t.setState({topScore:t.state.score}),t.setState({cardClass:"click-item shake",statusText:"Oops! Already chosen!",statusClass:"incorrect",score:0}),t.state.characters.forEach(function(e){return e.clicked=!1})):(a.clicked=!0,t.setState({cardClass:"click-item",statusClass:"correct",score:t.state.score+1}),t.state.score===t.state.characters.length-1?t.setState({statusText:"You won!",topScore:t.state.characters.length,score:0}):t.setState({statusText:"Great! Choose another!"}))}),t.shuffleCards(t.state.characters)},t}return Object(d.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement(u,null,r.a.createElement(h,{score:this.state.score,topScore:this.state.topScore,homeAddress:this.state.homeAddress,statusText:this.state.statusText,statusClass:this.state.statusClass}),r.a.createElement(g,null),r.a.createElement("div",{className:"container"},this.state.characters.map(function(a){return r.a.createElement(p,{cardClicked:e.cardClicked,key:a.id,id:a.id,cardClass:e.state.cardClass,image:a.image})})))}}]),a}(s.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(k,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[9,1,2]]]);
//# sourceMappingURL=main.739f6422.chunk.js.map