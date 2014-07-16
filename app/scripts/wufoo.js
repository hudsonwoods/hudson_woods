var JSON;if(!JSON){JSON={};}
(function(){"use strict";function f(n){return n<10?'0'+n:n;}
if(typeof Date.prototype.toJSON!=='function'){Date.prototype.toJSON=function(key){return isFinite(this.valueOf())?this.getUTCFullYear()+'-'+
f(this.getUTCMonth()+1)+'-'+
f(this.getUTCDate())+'T'+
f(this.getUTCHours())+':'+
f(this.getUTCMinutes())+':'+
f(this.getUTCSeconds())+'Z':null;};String.prototype.toJSON=Number.prototype.toJSON=Boolean.prototype.toJSON=function(key){return this.valueOf();};}
var cx=/[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,escapable=/[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,gap,indent,meta={'\b':'\\b','\t':'\\t','\n':'\\n','\f':'\\f','\r':'\\r','"':'\\"','\\':'\\\\'},rep;function quote(string){escapable.lastIndex=0;return escapable.test(string)?'"'+string.replace(escapable,function(a){var c=meta[a];return typeof c==='string'?c:'\\u'+('0000'+a.charCodeAt(0).toString(16)).slice(-4);})+'"':'"'+string+'"';}
function str(key,holder){var i,k,v,length,mind=gap,partial,value=holder[key];if(value&&typeof value==='object'&&typeof value.toJSON==='function'){value=value.toJSON(key);}
if(typeof rep==='function'){value=rep.call(holder,key,value);}
switch(typeof value){case'string':return quote(value);case'number':return isFinite(value)?String(value):'null';case'boolean':case'null':return String(value);case'object':if(!value){return'null';}
gap+=indent;partial=[];if(Object.prototype.toString.apply(value)==='[object Array]'){length=value.length;for(i=0;i<length;i+=1){partial[i]=str(i,value)||'null';}
v=partial.length===0?'[]':gap?'[\n'+gap+partial.join(',\n'+gap)+'\n'+mind+']':'['+partial.join(',')+']';gap=mind;return v;}
if(rep&&typeof rep==='object'){length=rep.length;for(i=0;i<length;i+=1){k=rep[i];if(typeof k==='string'){v=str(k,value);if(v){partial.push(quote(k)+(gap?': ':':')+v);}}}}else{for(k in value){if(Object.hasOwnProperty.call(value,k)){v=str(k,value);if(v){partial.push(quote(k)+(gap?': ':':')+v);}}}}
v=partial.length===0?'{}':gap?'{\n'+gap+partial.join(',\n'+gap)+'\n'+mind+'}':'{'+partial.join(',')+'}';gap=mind;return v;}}
if(typeof JSON.stringify!=='function'){JSON.stringify=function(value,replacer,space){var i;gap='';indent='';if(typeof space==='number'){for(i=0;i<space;i+=1){indent+=' ';}}else if(typeof space==='string'){indent=space;}
rep=replacer;if(replacer&&typeof replacer!=='function'&&(typeof replacer!=='object'||typeof replacer.length!=='number')){throw new Error('JSON.stringify');}
return str('',{'':value});};}
if(typeof JSON.parse!=='function'){JSON.parse=function(text,reviver){var j;function walk(holder,key){var k,v,value=holder[key];if(value&&typeof value==='object'){for(k in value){if(Object.hasOwnProperty.call(value,k)){v=walk(value,k);if(v!==undefined){value[k]=v;}else{delete value[k];}}}}
return reviver.call(holder,key,value);}
text=String(text);cx.lastIndex=0;if(cx.test(text)){text=text.replace(cx,function(a){return'\\u'+
('0000'+a.charCodeAt(0).toString(16)).slice(-4);});}
if(/^[\],:{}\s]*$/.test(text.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,'@').replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,']').replace(/(?:^|:|,)(?:\s*\[)+/g,''))){j=eval('('+text+')');return typeof reviver==='function'?walk({'':j},''):j;}
throw new SyntaxError('JSON.parse');};}}());
(function(I,c,l,F,g,C){var b=this;var j=Math.floor(Math.random()*100)*100;var m=Function.prototype;var L=/^(http.?:\/\/([^\/\s]+))/;var M=/[\-\w]+\/\.\.\//;var A=/([^:])\/\//g;var D="";var k={};var H=I.easyXDM;var P="easyXDM_";var z;function x(S,U){var T=typeof S[U];return T=="function"||(!!(T=="object"&&S[U]))||T=="unknown"}function q(S,T){return!!(typeof(S[T])=="object"&&S[T])}function n(S){return Object.prototype.toString.call(S)==="[object Array]"}var r,t;if(x(I,"addEventListener")){r=function(U,S,T){U.addEventListener(S,T,false)};t=function(U,S,T){U.removeEventListener(S,T,false)}}else{if(x(I,"attachEvent")){r=function(S,U,T){S.attachEvent("on"+U,T)};t=function(S,U,T){S.detachEvent("on"+U,T)}}else{throw new Error("Browser not supported")}}var R=false,E=[],G;if("readyState"in c){G=c.readyState;R=G=="complete"||(~navigator.userAgent.indexOf("AppleWebKit/")&&(G=="loaded"||G=="interactive"))}else{R=!!c.body}function o(){o=m;R=true;for(var S=0;S<E.length;S++){E[S]()}E.length=0}if(!R){if(x(I,"addEventListener")){r(c,"DOMContentLoaded",o)}else{r(c,"readystatechange",function(){if(c.readyState=="complete"){o()}});if(c.documentElement.doScroll&&I===top){(function e(){if(R){return}try{c.documentElement.doScroll("left")}catch(S){F(e,1);return}o()}())}}r(I,"load",o)}function B(T,S){if(R){T.call(S);return}E.push(function(){T.call(S)})}function i(){var U=parent;if(D!==""){for(var S=0,T=D.split(".");S<T.length;S++){U=U[T[S]]}}return U.easyXDM}function d(S){I.easyXDM=H;D=S;if(D){P="easyXDM_"+D.replace(".","_")+"_"}return k}function u(S){return S.match(L)[2]}function f(S){return S.match(L)[1]}function w(S){S=S.replace(A,"$1/");if(!S.match(/^(http||https):\/\//)){var T=(S.substring(0,1)==="/")?"":l.pathname;if(T.substring(T.length-1)!=="/"){T=T.substring(0,T.lastIndexOf("/")+1)}S=l.protocol+"//"+l.host+T+S}while(M.test(S)){S=S.replace(M,"")}return S}function K(S,V){var X="",U=S.indexOf("#");if(U!==-1){X=S.substring(U);S=S.substring(0,U)}var W=[];for(var T in V){if(V.hasOwnProperty(T)){W.push(T+"="+C(V[T]))}}return S+((S.indexOf("?")===-1)?"?":"&")+W.join("&")+X}var N=(function(){var U={},V,T=l.search.substring(1).split("&"),S=T.length;while(S--){V=T[S].split("=");U[V[0]]=g(V[1])}return U}());function p(S){return typeof S==="undefined"}function J(){var T={};var U={a:[1,2,3]},S='{"a":[1,2,3]}';if(JSON&&typeof JSON.stringify==="function"&&JSON.stringify(U).replace((/\s/g),"")===S){return JSON}if(Object.toJSON){if(Object.toJSON(U).replace((/\s/g),"")===S){T.stringify=Object.toJSON}}if(typeof String.prototype.evalJSON==="function"){U=S.evalJSON();if(U.a&&U.a.length===3&&U.a[2]===3){T.parse=function(V){return V.evalJSON()}}}if(T.stringify&&T.parse){J=function(){return T};return T}return null}function O(S,T,U){var W;for(var V in T){if(T.hasOwnProperty(V)){if(V in S){W=T[V];if(typeof W==="object"){O(S[V],W,U)}else{if(!U){S[V]=T[V]}}}else{S[V]=T[V]}}}return S}function a(){var S=c.createElement("iframe");S.name=P+"TEST";O(S.style,{position:"absolute",left:"-2000px",top:"0px"});c.body.appendChild(S);z=!(S.contentWindow===I.frames[S.name]);c.body.removeChild(S)}function v(S){if(p(z)){a()}var T;if(z){T=c.createElement('<iframe name="'+S.props.name+'"/>')}else{T=c.createElement("IFRAME");T.name=S.props.name}T.id=T.name=S.props.name;delete S.props.name;if(S.onLoad){r(T,"load",S.onLoad)}if(typeof S.container=="string"){S.container=c.getElementById(S.container)}if(!S.container){T.style.position="absolute";T.style.left="-2000px";T.style.top="0px";S.container=c.body}T.border=T.frameBorder=0;S.container.insertBefore(T,S.container.firstChild);O(T,S.props);return T}function Q(V,U){if(typeof V=="string"){V=[V]}var T,S=V.length;while(S--){T=V[S];T=new RegExp(T.substr(0,1)=="^"?T:("^"+T.replace(/(\*)/g,".$1").replace(/\?/g,".")+"$"));if(T.test(U)){return true}}return false}function h(U){var Z=U.protocol,T;U.isHost=U.isHost||p(N.xdm_p);if(!U.props){U.props={}}if(!U.isHost){U.channel=N.xdm_c;U.secret=N.xdm_s;U.remote=N.xdm_e;Z=N.xdm_p;if(U.acl&&!Q(U.acl,U.remote)){throw new Error("Access denied for "+U.remote)}}else{U.remote=w(U.remote);U.channel=U.channel||"default"+j++;U.secret=Math.random().toString(16).substring(2);if(p(Z)){if(f(l.href)==f(U.remote)){Z="4"}else{if(x(I,"postMessage")||x(c,"postMessage")){Z="1"}else{if(x(I,"ActiveXObject")&&x(I,"execScript")){Z="3"}else{if(navigator.product==="Gecko"&&"frameElement"in I&&navigator.userAgent.indexOf("WebKit")==-1){Z="5"}else{if(U.remoteHelper){U.remoteHelper=w(U.remoteHelper);Z="2"}else{Z="0"}}}}}}}switch(Z){case"0":O(U,{interval:100,delay:2000,useResize:true,useParent:false,usePolling:false},true);if(U.isHost){if(!U.local){var X=l.protocol+"//"+l.host,S=c.body.getElementsByTagName("img"),Y;var V=S.length;while(V--){Y=S[V];if(Y.src.substring(0,X.length)===X){U.local=Y.src;break}}if(!U.local){U.local=I}}var W={xdm_c:U.channel,xdm_p:0};if(U.local===I){U.usePolling=true;U.useParent=true;U.local=l.protocol+"//"+l.host+l.pathname+l.search;W.xdm_e=U.local;W.xdm_pa=1}else{W.xdm_e=w(U.local)}if(U.container){U.useResize=false;W.xdm_po=1}U.remote=K(U.remote,W)}else{O(U,{channel:N.xdm_c,remote:N.xdm_e,useParent:!p(N.xdm_pa),usePolling:!p(N.xdm_po),useResize:U.useParent?false:U.useResize})}T=[new k.stack.HashTransport(U),new k.stack.ReliableBehavior({}),new k.stack.QueueBehavior({encode:true,maxLength:4000-U.remote.length}),new k.stack.VerifyBehavior({initiate:U.isHost})];break;case"1":T=[new k.stack.PostMessageTransport(U)];break;case"2":T=[new k.stack.NameTransport(U),new k.stack.QueueBehavior(),new k.stack.VerifyBehavior({initiate:U.isHost})];break;case"3":T=[new k.stack.NixTransport(U)];break;case"4":T=[new k.stack.SameOriginTransport(U)];break;case"5":T=[new k.stack.FrameElementTransport(U)];break}T.push(new k.stack.QueueBehavior({lazy:U.lazy,remove:true}));return T}function y(V){var W,U={incoming:function(Y,X){this.up.incoming(Y,X)},outgoing:function(X,Y){this.down.outgoing(X,Y)},callback:function(X){this.up.callback(X)},init:function(){this.down.init()},destroy:function(){this.down.destroy()}};for(var T=0,S=V.length;T<S;T++){W=V[T];O(W,U,true);if(T!==0){W.down=V[T-1]}if(T!==S-1){W.up=V[T+1]}}return W}function s(S){S.up.down=S.down;S.down.up=S.up;S.up=S.down=null}O(k,{version:"2.4.10.103",query:N,stack:{},apply:O,getJSONObject:J,whenReady:B,noConflict:d});k.DomHelper={on:r,un:t,requiresJSON:function(S){if(!q(I,"JSON")){c.write('<script type="text/javascript" src="'+S+'"><\/script>')}}};(function(){var S={};k.Fn={set:function(T,U){S[T]=U},get:function(U,T){var V=S[U];if(T){delete S[U]}return V}}}());k.Socket=function(T){var S=y(h(T).concat([{incoming:function(W,V){T.onMessage(W,V)},callback:function(V){if(T.onReady){T.onReady(V)}}}])),U=f(T.remote);this.origin=f(T.remote);this.destroy=function(){S.destroy()};this.postMessage=function(V){S.outgoing(V,U)};S.init()};k.Rpc=function(U,T){if(T.local){for(var W in T.local){if(T.local.hasOwnProperty(W)){var V=T.local[W];if(typeof V==="function"){T.local[W]={method:V}}}}}var S=y(h(U).concat([new k.stack.RpcBehavior(this,T),{callback:function(X){if(U.onReady){U.onReady(X)}}}]));this.origin=f(U.remote);this.destroy=function(){S.destroy()};S.init()};k.stack.SameOriginTransport=function(T){var U,W,V,S;return(U={outgoing:function(Y,Z,X){V(Y);if(X){X()}},destroy:function(){if(W){W.parentNode.removeChild(W);W=null}},onDOMReady:function(){S=f(T.remote);if(T.isHost){O(T.props,{src:K(T.remote,{xdm_e:l.protocol+"//"+l.host+l.pathname,xdm_c:T.channel,xdm_p:4}),name:P+T.channel+"_provider"});W=v(T);k.Fn.set(T.channel,function(X){V=X;F(function(){U.up.callback(true)},0);return function(Y){U.up.incoming(Y,S)}})}else{V=i().Fn.get(T.channel,true)(function(X){U.up.incoming(X,S)});F(function(){U.up.callback(true)},0)}},init:function(){B(U.onDOMReady,U)}})};k.stack.PostMessageTransport=function(V){var X,Y,T,U;function S(Z){if(Z.origin){return Z.origin}if(Z.uri){return f(Z.uri)}if(Z.domain){return l.protocol+"//"+Z.domain}throw"Unable to retrieve the origin of the event"}function W(aa){var Z=S(aa);if(Z==U&&aa.data.substring(0,V.channel.length+1)==V.channel+" "){X.up.incoming(aa.data.substring(V.channel.length+1),Z)}}return(X={outgoing:function(aa,ab,Z){T.postMessage(V.channel+" "+aa,ab||U);if(Z){Z()}},destroy:function(){t(I,"message",W);if(Y){T=null;Y.parentNode.removeChild(Y);Y=null}},onDOMReady:function(){U=f(V.remote);if(V.isHost){r(I,"message",function Z(aa){if(aa.data==V.channel+"-ready"){T=("postMessage"in Y.contentWindow)?Y.contentWindow:Y.contentWindow.document;t(I,"message",Z);r(I,"message",W);F(function(){X.up.callback(true)},0)}});O(V.props,{src:K(V.remote,{xdm_e:l.protocol+"//"+l.host,xdm_c:V.channel,xdm_p:1}),name:P+V.channel+"_provider"});Y=v(V)}else{r(I,"message",W);T=("postMessage"in I.parent)?I.parent:I.parent.document;T.postMessage(V.channel+"-ready",U);F(function(){X.up.callback(true)},0)}},init:function(){B(X.onDOMReady,X)}})};k.stack.FrameElementTransport=function(T){var U,W,V,S;return(U={outgoing:function(Y,Z,X){V.call(this,Y);if(X){X()}},destroy:function(){if(W){W.parentNode.removeChild(W);W=null}},onDOMReady:function(){S=f(T.remote);if(T.isHost){O(T.props,{src:K(T.remote,{xdm_e:l.protocol+"//"+l.host+l.pathname+l.search,xdm_c:T.channel,xdm_p:5}),name:P+T.channel+"_provider"});W=v(T);W.fn=function(X){delete W.fn;V=X;F(function(){U.up.callback(true)},0);return function(Y){U.up.incoming(Y,S)}}}else{I.parent.location=N.xdm_e+"#";V=I.frameElement.fn(function(X){U.up.incoming(X,S)});U.up.callback(true)}},init:function(){B(U.onDOMReady,U)}})};k.stack.NixTransport=function(T){var V,X,W,S,U;return(V={outgoing:function(Z,aa,Y){W(Z);if(Y){Y()}},destroy:function(){U=null;if(X){X.parentNode.removeChild(X);X=null}},onDOMReady:function(){S=f(T.remote);if(T.isHost){try{if(!x(I,"getNixProxy")){I.execScript("Class NixProxy\n    Private m_parent, m_child, m_Auth\n\n    Public Sub SetParent(obj, auth)\n        If isEmpty(m_Auth) Then m_Auth = auth\n        SET m_parent = obj\n    End Sub\n    Public Sub SetChild(obj)\n        SET m_child = obj\n        m_parent.ready()\n    End Sub\n\n    Public Sub SendToParent(data, auth)\n        If m_Auth = auth Then m_parent.send(CStr(data))\n    End Sub\n    Public Sub SendToChild(data, auth)\n        If m_Auth = auth Then m_child.send(CStr(data))\n    End Sub\nEnd Class\nFunction getNixProxy()\n    Set GetNixProxy = New NixProxy\nEnd Function\n","vbscript")}U=getNixProxy();U.SetParent({send:function(aa){V.up.incoming(aa,S)},ready:function(){F(function(){V.up.callback(true)},0)}},T.secret);W=function(aa){U.SendToChild(aa,T.secret)}}catch(Z){throw new Error("Could not set up VBScript NixProxy:"+Z.message)}O(T.props,{src:K(T.remote,{xdm_e:l.protocol+"//"+l.host+l.pathname+l.search,xdm_c:T.channel,xdm_s:T.secret,xdm_p:3}),name:P+T.channel+"_provider"});X=v(T);X.contentWindow.opener=U}else{I.parent.location=N.xdm_e+"#";try{U=I.opener}catch(Y){throw new Error("Cannot access window.opener")}U.SetChild({send:function(aa){b.setTimeout(function(){V.up.incoming(aa,S)},0)}});W=function(aa){U.SendToParent(aa,T.secret)};F(function(){V.up.callback(true)},0)}},init:function(){B(V.onDOMReady,V)}})};k.stack.NameTransport=function(W){var X;var Z,ad,V,ab,ac,T,S;function aa(ag){var af=W.remoteHelper+(Z?"#_3":"#_2")+W.channel;ad.contentWindow.sendMessage(ag,af)}function Y(){if(Z){if(++ab===2||!Z){X.up.callback(true)}}else{aa("ready");X.up.callback(true)}}function ae(af){X.up.incoming(af,T)}function U(){if(ac){F(function(){ac(true)},0)}}return(X={outgoing:function(ag,ah,af){ac=af;aa(ag)},destroy:function(){ad.parentNode.removeChild(ad);ad=null;if(Z){V.parentNode.removeChild(V);V=null}},onDOMReady:function(){Z=W.isHost;ab=0;T=f(W.remote);W.local=w(W.local);if(Z){k.Fn.set(W.channel,function(ag){if(Z&&ag==="ready"){k.Fn.set(W.channel,ae);Y()}});S=K(W.remote,{xdm_e:W.local,xdm_c:W.channel,xdm_p:2});O(W.props,{src:S+"#"+W.channel,name:P+W.channel+"_provider"});V=v(W)}else{W.remoteHelper=W.remote;k.Fn.set(W.channel,ae)}ad=v({props:{src:W.local+"#_4"+W.channel},onLoad:function af(){t(ad,"load",af);k.Fn.set(W.channel+"_load",U);(function ag(){if(typeof ad.contentWindow.sendMessage=="function"){Y()}else{F(ag,50)}}())}})},init:function(){B(X.onDOMReady,X)}})};k.stack.HashTransport=function(U){var X;var ac=this,aa,V,S,Y,ah,W,ag;var ab,T;function af(aj){if(!ag){return}var ai=U.remote+"#"+(ah++)+"_"+aj;((aa||!ab)?ag.contentWindow:ag).location=ai}function Z(ai){Y=ai;X.up.incoming(Y.substring(Y.indexOf("_")+1),T)}function ae(){if(!W){return}var ai=W.location.href,ak="",aj=ai.indexOf("#");if(aj!=-1){ak=ai.substring(aj)}if(ak&&ak!=Y){Z(ak)}}function ad(){V=setInterval(ae,S)}return(X={outgoing:function(ai,aj){af(ai)},destroy:function(){I.clearInterval(V);if(aa||!ab){ag.parentNode.removeChild(ag)}ag=null},onDOMReady:function(){aa=U.isHost;S=U.interval;Y="#"+U.channel;ah=0;ab=U.useParent;T=f(U.remote);if(aa){U.props={src:U.remote,name:P+U.channel+"_provider"};if(ab){U.onLoad=function(){W=I;ad();X.up.callback(true)}}else{var ak=0,ai=U.delay/50;(function aj(){if(++ak>ai){throw new Error("Unable to reference listenerwindow")}try{W=ag.contentWindow.frames[P+U.channel+"_consumer"]}catch(al){}if(W){ad();X.up.callback(true)}else{F(aj,50)}}())}ag=v(U)}else{W=I;ad();if(ab){ag=parent;X.up.callback(true)}else{O(U,{props:{src:U.remote+"#"+U.channel+new Date(),name:P+U.channel+"_consumer"},onLoad:function(){X.up.callback(true)}});ag=v(U)}}},init:function(){B(X.onDOMReady,X)}})};k.stack.ReliableBehavior=function(T){var V,X;var W=0,S=0,U="";return(V={incoming:function(aa,Y){var Z=aa.indexOf("_"),ab=aa.substring(0,Z).split(",");aa=aa.substring(Z+1);if(ab[0]==W){U="";if(X){X(true)}}if(aa.length>0){V.down.outgoing(ab[1]+","+W+"_"+U,Y);if(S!=ab[1]){S=ab[1];V.up.incoming(aa,Y)}}},outgoing:function(aa,Y,Z){U=aa;X=Z;V.down.outgoing(S+","+(++W)+"_"+aa,Y)}})};k.stack.QueueBehavior=function(U){var X,Y=[],ab=true,V="",aa,S=0,T=false,W=false;function Z(){if(U.remove&&Y.length===0){s(X);return}if(ab||Y.length===0||aa){return}ab=true;var ac=Y.shift();X.down.outgoing(ac.data,ac.origin,function(ad){ab=false;if(ac.callback){F(function(){ac.callback(ad)},0)}Z()})}return(X={init:function(){if(p(U)){U={}}if(U.maxLength){S=U.maxLength;W=true}if(U.lazy){T=true}else{X.down.init()}},callback:function(ad){ab=false;var ac=X.up;Z();ac.callback(ad)},incoming:function(af,ad){if(W){var ae=af.indexOf("_"),ac=parseInt(af.substring(0,ae),10);V+=af.substring(ae+1);if(ac===0){if(U.encode){V=g(V)}X.up.incoming(V,ad);V=""}}else{X.up.incoming(af,ad)}},outgoing:function(ag,ad,af){if(U.encode){ag=C(ag)}var ac=[],ae;if(W){while(ag.length!==0){ae=ag.substring(0,S);ag=ag.substring(ae.length);ac.push(ae)}while((ae=ac.shift())){Y.push({data:ac.length+"_"+ae,origin:ad,callback:ac.length===0?af:null})}}else{Y.push({data:ag,origin:ad,callback:af})}if(T){X.down.init()}else{Z()}},destroy:function(){aa=true;X.down.destroy()}})};k.stack.VerifyBehavior=function(W){var X,V,T,U=false;function S(){V=Math.random().toString(16).substring(2);X.down.outgoing(V)}return(X={incoming:function(aa,Y){var Z=aa.indexOf("_");if(Z===-1){if(aa===V){X.up.callback(true)}else{if(!T){T=aa;if(!W.initiate){S()}X.down.outgoing(aa)}}}else{if(aa.substring(0,Z)===T){X.up.incoming(aa.substring(Z+1),Y)}}},outgoing:function(aa,Y,Z){X.down.outgoing(V+"_"+aa,Y,Z)},callback:function(Y){if(W.initiate){S()}}})};k.stack.RpcBehavior=function(Y,T){var V,aa=T.serializer||J();var Z=0,X={};function S(ab){ab.jsonrpc="2.0";V.down.outgoing(aa.stringify(ab))}function W(ab,ad){var ac=Array.prototype.slice;return function(){var ae=arguments.length,ag,af={method:ad};if(ae>0&&typeof arguments[ae-1]==="function"){if(ae>1&&typeof arguments[ae-2]==="function"){ag={success:arguments[ae-2],error:arguments[ae-1]};af.params=ac.call(arguments,0,ae-2)}else{ag={success:arguments[ae-1]};af.params=ac.call(arguments,0,ae-1)}X[""+(++Z)]=ag;af.id=Z}else{af.params=ac.call(arguments,0)}if(ab.namedParams&&af.params.length===1){af.params=af.params[0]}S(af)}}function U(ai,ah,ad,ag){if(!ad){if(ah){S({id:ah,error:{code:-32601,message:"Procedure not found."}})}return}var af,ac;if(ah){af=function(aj){af=m;S({id:ah,result:aj})};ac=function(aj,ak){ac=m;var al={id:ah,error:{code:-32099,message:aj}};if(ak){al.error.data=ak}S(al)}}else{af=ac=m}if(!n(ag)){ag=[ag]}try{var ab=ad.method.apply(ad.scope,ag.concat([af,ac]));if(!p(ab)){af(ab)}}catch(ae){ac(ae.message)}}return(V={incoming:function(ac,ab){var ad=aa.parse(ac);if(ad.method){if(T.handle){T.handle(ad,S)}else{U(ad.method,ad.id,T.local[ad.method],ad.params)}}else{var ae=X[ad.id];if(ad.error){if(ae.error){ae.error(ad.error)}}else{if(ae.success){ae.success(ad.result)}}delete X[ad.id]}},init:function(){if(T.remote){for(var ab in T.remote){if(T.remote.hasOwnProperty(ab)){Y[ab]=W(T.remote[ab],ab)}}}V.down.init()},destroy:function(){for(var ab in T.remote){if(T.remote.hasOwnProperty(ab)&&Y.hasOwnProperty(ab)){delete Y[ab]}}V.down.destroy()}})};b.easyXDM=k})(window,document,location,window.setTimeout,decodeURIComponent,encodeURIComponent);
var WufooFormEmbedKit=function(params){var userSubdomain=null;var self=this;self.host='wufoo.com';for(key in params){this[key]=params[key];}
if(typeof provider==='undefined')this.provider='generic'
var getRemote=function(subdomain){var remote='https://'+subdomain+'.'+self.host+'/integration/iframe/';remote=remote.replace('xdm1','xdm2');return remote.substring(0,remote.lastIndexOf('/'));}
var switchToSubdomain=function(subdomain){userSubdomain=subdomain;newTransport=new easyXDM.Socket({remote:getRemote(subdomain)+'/iframe_intermediate.html?url=forms/provider/'+provider+'/',container:displayElement,onMessage:function(message,origin){if(origin=='https://'+subdomain+'.'+self.host){userDefinedCallback(message,transport);}},onReady:function(){if(typeof transport!=='undefined'){transport.destroy();};},props:{style:{width:"655px",height:"484px"}}});}
return{display:function(userSubdomain){transport=new easyXDM.Socket({remote:getRemote('secure')+'/iframe_intermediate.html?url=login/provider/'+provider+'/',container:displayElement,onMessage:function(message,origin){if(origin=='https://secure.'+self.host){var objMessage=JSON.parse(message);if(objMessage.ready){}else{switchToSubdomain(objMessage.subdomain);}}},props:{style:{width:"655px",height:"480px"}}});},destroy:function(){if(typeof transport!=='undefined')transport.destroy();if(typeof newTransport!=='undefined')newTransport.destroy();},getSubdomain:function(){return userSubdomain;}}};