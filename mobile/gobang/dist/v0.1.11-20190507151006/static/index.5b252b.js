!function(e){function __webpack_require__(a){if(r[a])return r[a].exports;var t=r[a]={i:a,l:!1,exports:{}};return e[a].call(t.exports,t,t.exports,__webpack_require__),t.l=!0,t.exports}var r={};__webpack_require__.m=e,__webpack_require__.c=r,__webpack_require__.i=function(e){return e},__webpack_require__.d=function(e,r,a){__webpack_require__.o(e,r)||Object.defineProperty(e,r,{configurable:!1,enumerable:!0,get:a})},__webpack_require__.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return __webpack_require__.d(r,"a",r),r},__webpack_require__.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)},__webpack_require__.p="",__webpack_require__(__webpack_require__.s=12)}([function(e,r,a){"use strict";var t=function(e){for(var r=[],a=0;a<e;a++){r[a]=[];for(var t=0;t<e;t++)r[a][t]=0}return r},n=function(e){for(var r=[],a=[],t=[],n=0,o=0;o<15;o++){r[o]=[];for(var i=0;i<15;i++)r[o][i]=[]}for(var s=0;s<15;s++)for(var c=0;c<11;c++){for(var u=0;u<5;u++)r[s][c+u][n]=!0;n++}for(var d=0;d<15;d++)for(var l=0;l<11;l++){for(var f=0;f<5;f++)r[l+f][d][n]=!0;n++}for(var v=0;v<11;v++)for(var h=0;h<11;h++){for(var _=0;_<5;_++)r[v+_][h+_][n]=!0;n++}for(var b=0;b<11;b++)for(var p=14;p>3;p--){for(var w=0;w<5;w++)r[b+w][p-w][n]=!0;n++}for(var m=0;m<n;m++)a[m]=0,t[m]=0;return"wins"===e?r:"aiWin"===e?t:"myWin"===e?a:n},o=function(e){return{chessboard:null,chessType:"canvas",chessPositons:t(15),chessPositonsHistory:[],count:n(),wins:n("wins"),myWin:n("myWin"),aiWin:n("aiWin"),width:0,lineNum:15,interval:0,pieceWidth:0,lineColor:"#afafaf",chessColor:!0,gameOver:!1,createChessPositons:t,createWins:n,players:[{name:"玩家",type:!0,color:!0},{name:"AlphaGo",type:!1,color:!1}]}}();window.state=o,r.a=o},function(e,r,a){"use strict";function createChessboard(e){return a.i(t.a)()}function drawChessBoard(e){return a.i(t.b)()}function clearChessBoard(e){return a.i(t.c)()}a.d(r,"a",function(){return createChessboard}),a.d(r,"b",function(){return drawChessBoard}),a.d(r,"c",function(){return clearChessBoard});var t=a(9);a(10)},function(e,r,a){"use strict";function drawChessman(e,r){return a.i(t.a)(r)}a.d(r,"a",function(){return drawChessman});var t=a(11)},function(e,r,a){"use strict";function yhtml5(){console.clear(),console.log("%c YHTML5 %c https://github.com/yhtml5",'font-family: "microsoft yahei", Helvetica, Arial, sans-serif;font-size:64px;color:#00bbee;-webkit-text-fill-color:#00bbee;-webkit-text-stroke: 1px #00bbee;',"font-size:12px;color:#999999;"),console.log("%c We work hard to contribute our work back to the web, mobile, big data, && new Front-End technology.","color:#333;font-size:16px;margin:4px;"),console.log("%c Author: yhtml5","color:#333;font-size:16px;margin:4px;")}a.d(r,"a",function(){return yhtml5})},function(e,r,a){"use strict";function addDashboardListener(e){document.getElementById("dashboard").addEventListener("click",function(r){var a=r.target.id;"dashboardStart"===(void 0===a?"":a)?resetChessPositons(e):alertAd()})}function alertAd(){alert("关注XXX公众号, 解锁更多玩法!")}function resetChessPositons(e){e.chessPositons=e.createChessPositons(15),e.wins=e.createWins("wins"),e.myWin=e.createWins("myWin"),e.aiWin=e.createWins("aiWin"),e.gameOver=!1,a.i(t.c)("canvas"),a.i(t.b)("canvas")}a.d(r,"a",function(){return addDashboardListener});var t=a(1)},function(e,r,a){"use strict";var t=a(18),n=(a.n(t),a(16)),o=(a.n(n),a(15)),i=(a.n(o),a(13)),s=(a.n(i),a(14)),c=(a.n(s),a(17));a.n(c)},function(e,r,a){"use strict";function ai(){for(var e=t.a.over,r=(t.a.gameOver,t.a.chessColor),o=t.a.chessPositons,i=t.a.count,s=t.a.wins,c=t.a.myWin,u=t.a.aiWin,d=[],l=[],f=0,v=0,h=0,_=0;_<15;_++){d[_]=[],l[_]=[];for(var b=0;b<15;b++)d[_][b]=0,l[_][b]=0}for(var p=0;p<15;p++)for(var w=0;w<15;w++)if(0==o[p][w]){for(var m=0;m<i;m++)s[p][w][m]&&(1==c[m]?d[p][w]+=200:2==c[m]?d[p][w]+=400:3==c[m]?d[p][w]+=2e3:4==c[m]&&(d[p][w]+=1e4),1==u[m]?l[p][w]+=220:2==u[m]?l[p][w]+=420:3==u[m]?l[p][w]+=2100:4==u[m]&&(l[p][w]+=2e4));d[p][w]>f?(f=d[p][w],v=p,h=w):d[p][w]==f&&l[p][w]>l[v][h]&&(v=p,h=w),l[p][w]>f?(f=l[p][w],v=p,h=w):l[p][w]==f&&d[p][w]>d[v][h]&&(v=p,h=w)}a.i(n.a)("canvas",{i:v,j:h,color:t.a.players[1].color}),o[v][h]=2;for(var C=0;C<i;C++)s[v][h][C]&&(u[C]++,c[C]=6),5==u[C]&&(alert("电脑赢了."),!0);e||(r=!r)}a.d(r,"a",function(){return ai});var t=a(0),n=a(2)},function(e,r,a){"use strict";function playChess(e,r){if(!t.a.gameOver){var o=e.offsetX,i=e.offsetY,s=Math.floor(o/t.a.interval),c=Math.floor(i/t.a.interval);if(0==t.a.chessPositons[s][c]){a.i(n.a)("canvas",{i:s,j:c,color:t.a.players[0].color}),t.a.chessPositons[s][c]=1;for(var u=0;u<t.a.count;u++)t.a.wins[s][c][u]&&(t.a.myWin[u]++,t.a.aiWin[u]=6),5==t.a.myWin[u]&&(t.a.gameOver=!0,alert("你赢了."));t.a.gameOver||(t.a.chessColor=!t.a.chessColor,r&&r())}}}a.d(r,"a",function(){return playChess});var t=a(0),n=a(2)},function(e,r,a){"use strict";function setChessboard(e,r){e.width=r,e.interval=r/15,e.pieceWidth=r/15/15*13}a.d(r,"a",function(){return t});var t=function(e){document.body.clientWidth<500?setChessboard(e,400):setChessboard(e,500)}},function(e,r,a){"use strict";function createChessboard(e){var r=document.getElementById("body"),a=document.createElement("canvas"),n=document.createTextNode("Your browser does not support Html5 canvas, please change a browser.");a.setAttribute("width",2*t.a.width+"px"),a.setAttribute("height",2*t.a.width+"px"),a.setAttribute("id","chessboard"),a.setAttribute("style","width: "+t.a.width+"px; height: "+t.a.width+"px;"),a.id="chessboard",a.appendChild(n),r.appendChild(a)}function drawChessBoard(){var e=t.a.chessboard.getContext("2d");e.strokeStyle=t.a.lineColor;for(var r=0;r<t.a.lineNum;r++)e.moveTo(t.a.interval+r*t.a.interval*2,t.a.interval),e.lineTo(t.a.interval+r*t.a.interval*2,29*t.a.interval),e.stroke(),e.moveTo(t.a.interval,t.a.interval+r*t.a.interval*2),e.lineTo(29*t.a.interval,t.a.interval+r*t.a.interval*2),e.stroke()}function clearChessBoard(){t.a.chessboard.getContext("2d");t.a.chessboard.height=t.a.chessboard.height}a.d(r,"a",function(){return createChessboard}),a.d(r,"b",function(){return drawChessBoard}),a.d(r,"c",function(){return clearChessBoard});var t=a(0)},function(e,r,a){"use strict"},function(e,r,a){"use strict";function drawChessman(e){var r=e.i,a=e.j,n=e.color,o=t.a.chessboard.getContext("2d");o.beginPath(),o.arc(t.a.interval+2*r*t.a.interval,t.a.interval+2*a*t.a.interval,t.a.pieceWidth,0,2*Math.PI),o.closePath();var i=o.createRadialGradient(t.a.interval+2*r*t.a.interval+t.a.width/15/15*2,t.a.interval+2*a*t.a.interval-t.a.width/15/15*2,t.a.width/15/15*13,t.a.interval+2*r*t.a.interval,t.a.interval+2*a*t.a.interval,0);n?(i.addColorStop(0,"#0a0a0a"),i.addColorStop(1,"#636363")):(i.addColorStop(0,"#d1d1d1"),i.addColorStop(1,"#f9f9f9")),o.fillStyle=i,o.fill()}a.d(r,"a",function(){return drawChessman});var t=a(0)},function(e,r,a){"use strict";Object.defineProperty(r,"__esModule",{value:!0});var t=a(3),n=a(1),o=a(7),i=a(4),s=a(6),c=a(8),u=a(0);a(5);a.i(t.a)(),a.i(c.a)(u.a),a.i(n.a)("canvas"),u.a.chessboard=document.getElementById("chessboard"),a.i(n.b)("canvas"),u.a.chessboard.addEventListener("click",function(e){return a.i(o.a)(e,s.a)}),a.i(i.a)(u.a)},function(e,r){},function(e,r){},function(e,r){},function(e,r){},function(e,r){},function(e,r){}]);