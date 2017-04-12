!function(e,t,a,s){"use strict";function r(e){if(e){var t=1+e.substr(1).search(/[A-Z]/),a=e.substr(0,t).toLowerCase(),s=e.substr(t).toLowerCase();return""!==a?"-"+a+"-"+s:s}}function n(e){return e?e+",":""}function i(e){return e.length>0?e:null}function o(r){function n(t,a){var s=p(t),r={oldStyle:e(t).attr("style")||""},n={data:s,stepData:r};f.call(this,"beforeInitStep",e(t),n),r.delegate=s.delegate,f.call(this,"initStep",e(t),n),e(t).data("stepData",r),e(t).attr("id")||e(t).attr("id","step-"+(a+1)),f.call(this,"applyStep",e(t),n)}function o(t){var a=e(t).data("stepData");e(t).attr("style",a.oldStyle),f.call(this,"unapplyStep",e(t),{stepData:a})}function c(t){f.call(this,"unapplyStep",e(t),{stepData:t.data("stepData")}),f.call(this,"applyStep",e(t),{stepData:t.data("stepData")})}function l(){O&&f.call(this,"setInactive",O,{stepData:e(O).data("stepData"),reason:"deinit"}),Z.jmpressClass&&e(I).removeClass(Z.jmpressClass),f.call(this,"beforeDeinit",e(this),{}),e(N.stepSelector,I).each(function(){o.call(I,this)}),z.attr("style",X.container),N.fullscreen&&e("html").attr("style",""),k.attr("style",X.area),e(Y).children().each(function(){I.append(e(this))}),N.fullscreen?Y.remove():(Y.remove(),k.remove()),f.call(this,"afterDeinit",e(this),{}),e(I).data("jmpressmethods",!1),Z.idleTimeout&&clearTimeout(Z.idleTimeout)}function f(t,a,s){s.settings=N,s.current=Z,s.container=z,s.parents=a?d(a):null,s.current=Z,s.jmpress=this;var r={};return e.each(N[t],function(e,t){r.value=t.call(I,a,s)||r.value}),r.value}function d(t){return e(t).parentsUntil(I).not(I).filter(N.stepSelector)}function v(e){return g({step:O,substep:Q},e)}function g(t,a){var r;if(e.isPlainObject(t)&&(r=t.substep,t=t.step),"string"==typeof t&&(t=I.find(t).first()),!t||!e(t).data("stepData"))return!1;b.call(this);var n=e(t).data("stepData"),o=!1;if(f.call(this,"beforeChange",t,{stepData:n,reason:a,cancel:function(){o=!0}}),o)return s;var c={},l=t;e(t).data("stepData").delegate&&(l=i(e(t).parentsUntil(I).filter(N.stepSelector).filter(n.delegate))||i(e(t).near(n.delegate))||i(e(t).near(n.delegate,!0))||i(e(n.delegate,I)),l?n=l.data("stepData"):l=t),F&&f.call(this,"setInactive",F,{stepData:e(F).data("stepData"),delegatedFrom:O,reason:a,target:c,nextStep:l,nextSubstep:r,nextStepData:n});var u={stepData:n,delegatedFrom:t,reason:a,target:c,substep:r,prevStep:F,prevSubstep:Q,prevStepData:F&&e(F).data("stepData")};return f.call(this,"beforeActive",l,u),f.call(this,"setActive",l,u),Z.jmpressClass&&e(I).removeClass(Z.jmpressClass),e(I).addClass(Z.jmpressClass="step-"+e(l).attr("id")),Z.jmpressDelegatedClass&&e(I).removeClass(Z.jmpressDelegatedClass),e(I).addClass(Z.jmpressDelegatedClass="delegating-step-"+e(t).attr("id")),f.call(this,"applyTarget",l,e.extend({canvas:Y,area:k,beforeActive:F},u)),O=t,Q=u.substep,F=l,Z.idleTimeout&&clearTimeout(Z.idleTimeout),Z.idleTimeout=setTimeout(function(){f.call(this,"idle",l,u)},Math.max(1,N.transitionDuration-100)),l}function b(){!function t(){function s(){0===e(z).scrollTop()&&0===e(z).scrollLeft()||t()}if("BODY"===e(z)[0].tagName)try{a.scrollTo(0,0)}catch(e){}e(z).scrollTop(0),e(z).scrollLeft(0),setTimeout(s,1),setTimeout(s,10),setTimeout(s,100),setTimeout(s,200),setTimeout(s,400)}()}function j(e){return g.call(this,e,"jump")}function y(){return g.call(this,f.call(this,"selectNext",O,{stepData:e(O).data("stepData"),substep:Q}),"next")}function D(){return g.call(this,f.call(this,"selectPrev",O,{stepData:e(O).data("stepData"),substep:Q}),"prev")}function S(){return g.call(this,f.call(this,"selectHome",O,{stepData:e(O).data("stepData")}),"home")}function w(){return g.call(this,f.call(this,"selectEnd",O,{stepData:e(O).data("stepData")}),"end")}function x(t){return u(Y,t||{}),e(Y)}function C(){return F&&e(F)}function T(t,a,s){if(h[t])return f.call(this,t,a,s);e.error("callback "+t+" is not registered.")}function P(){var e=navigator.userAgent.toLowerCase();return-1===e.search(/(iphone)|(ipod)|(android)/)||-1!==e.search(/(chrome)/)}r=e.extend(!0,{},r||{});var A={},M=null;for(M in h)A[M]=e.isFunction(r[M])?[r[M]]:r[M],r[M]=[];var N=e.extend(!0,{},m,r);for(M in h)A[M]&&Array.prototype.push.apply(N[M],A[M]);var I=e(this),z=null,k=null,X={container:"",area:""},Y=null,Z=null,O=!1,Q=null,F=!1;if(I.data("jmpressmethods",{select:g,reselect:v,scrollFix:b,goTo:j,next:y,prev:D,home:S,end:w,canvas:x,container:function(){return z},settings:function(){return N},active:C,current:function(){return Z},fire:T,init:function(t){n.call(this,e(t),Z.nextIdNumber++)},deinit:function(t){t?o.call(this,e(t)):l.call(this)},reapply:c}),!1===P()||f.call(this,"checkNoSupport",null,{}))return void(N.notSupportedClass&&I.addClass(N.notSupportedClass));N.notSupportedClass&&I.removeClass(N.notSupportedClass);var E=e(N.stepSelector,I);z=I,k=e("<div />"),Y=e("<div />"),e(I).children().filter(E).each(function(){Y.append(e(this))}),N.fullscreen&&(z=e("body"),e("html").css({overflow:"hidden"}),k=I),X.area=k.attr("style")||"",X.container=z.attr("style")||"",N.fullscreen?(z.css({height:"100%"}),I.append(Y)):(z.css({position:"relative"}),k.append(Y),I.append(k)),e(z).addClass(N.containerClass),e(k).addClass(N.areaClass),e(Y).addClass(N.canvasClass),t.documentElement.style.height="100%",z.css({overflow:"hidden"});var _={position:"absolute",transitionDuration:"0s"};_=e.extend({},N.animation,_),u(k,_),u(Y,_),Z={},f.call(this,"beforeInit",null,{canvas:Y,area:k}),E.each(function(e){n.call(I,this,e)}),Z.nextIdNumber=E.length,f.call(this,"afterInit",null,{}),g.call(this,f.call(this,"selectInitialStep","init",{})),N.initClass&&e(E).removeClass(N.initClass)}function c(){return m}function l(t,a){e.isFunction(a)?g[t]?e.error("function "+t+" is already registered."):g[t]=a:h[t]?e.error("callback "+t+" is already registered."):(h[t]=1,m[t]=[])}function u(t,a){var s,r,n={};for(s in a)a.hasOwnProperty(s)&&null!==(r=d(s))&&(n[r]=a[s]);return e(t).css(n),t}function p(t){function a(e){e=e.split("-");for(var t=1;t<e.length;t++)e[t]=e[t].substr(0,1).toUpperCase()+e[t].substr(1);return e.join("")}if(e(t)[0].dataset)return e.extend({},e(t)[0].dataset);var s={},r=e(t)[0].attributes;return e.each(r,function(e,t){"data-"===t.nodeName.substr(0,5)&&(s[a(t.nodeName.substr(5))]=t.nodeValue)}),s}function f(){return!!e(this).data("jmpressmethods")}var d=function(){var e=t.createElement("dummy").style,a="Webkit Moz O ms Khtml".split(" "),r={};return function(t){if("undefined"==typeof r[t]){var n=t.charAt(0).toUpperCase()+t.substr(1),i=(t+" "+a.join(n+" ")+n).split(" ");r[t]=null;for(var o in i)if(e[i[o]]!==s){r[t]=i[o];break}}return r[t]}}(),m={stepSelector:".step",containerClass:"",canvasClass:"",areaClass:"",notSupportedClass:"not-supported",fullscreen:!0,animation:{transformOrigin:"center center",transitionProperty:n(r(d("transform")))+n(r(d("perspective")))+"opacity",transitionDuration:"1s",transitionDelay:"500ms",transitionTimingFunction:"ease-in-out",transformStyle:"preserve-3d"},transitionDuration:1500},h={beforeChange:1,beforeInitStep:1,initStep:1,checkNoSupport:1,beforeInit:1,afterInit:1,beforeDeinit:1,afterDeinit:1,applyStep:1,unapplyStep:1,setInactive:1,beforeActive:1,setActive:1,selectInitialStep:1,selectPrev:1,selectNext:1,selectHome:1,selectEnd:1,idle:1,applyTarget:1};for(var v in h)m[v]=[];var g={init:o,initialized:f,deinit:function(){},css:u,pfx:d,defaults:c,register:l,dataset:p};e.fn.jmpress=function(t){function a(){var a=e(this).data("jmpressmethods");if(a&&a[t])return a[t].apply(this,Array.prototype.slice.call(arguments,1));if(g[t])return g[t].apply(this,Array.prototype.slice.call(arguments,1));if(h[t]&&a){var s=a.settings(),r=Array.prototype.slice.call(arguments,1)[0];e.isFunction(r)&&(s[t]=s[t]||[],s[t].push(r))}else{if("object"==typeof t||!t)return o.apply(this,arguments);e.error("Method "+t+" does not exist on jQuery.jmpress")}return this}var s,r=arguments;return e(this).each(function(e,t){s=a.apply(t,r)}),s},e.extend({jmpress:function(t){if(g[t])return g[t].apply(this,Array.prototype.slice.call(arguments,1));if(h[t]){var a=Array.prototype.slice.call(arguments,1)[0];e.isFunction(a)?m[t].push(a):e.error("Second parameter should be a function: $.jmpress( callbackName, callbackFunction )")}else e.error("Method "+t+" does not exist on jQuery.jmpress")}})}(jQuery,document,window),function(e){"use strict";function t(t,a,s,r){var n;return t.each(function(t,i){return(!r||!(n=a(i,s,r)))&&(e(i).is(s)?(n=i,!1):!(!r&&(n=a(i,s,r)))&&void 0)}),n}function a(s,r,n){var i=e(s).children();return n&&(i=e(i.get().reverse())),t(i,a,r,n)}function s(s,r,n){return t(e(s)[n?"prevAll":"nextAll"](),a,r,n)}function r(t,a,r){var n,i=e(t).parents();return i=e(i.get()),e.each(i.get(),function(t,i){return r&&e(i).is(a)?(n=i,!1):!(n=s(i,a,r))&&void 0}),n}e.fn.near=function(t,n){var i=[];return e(this).each(function(e,o){var c=!n&&a(o,t,n)||s(o,t,n)||r(o,t,n);c&&i.push(c)}),e(i)}}(jQuery,document,window),function(e,t,a,s){"use strict";function r(e){return Math.round(1e4*e)/1e4+""}var n={3:{transform:function(t,a,s){var n="translate(-"+s.originX+",-"+s.originY+")";e.each(a,function(e,t){var a,s=["X","Y","Z"];if("translate"===t[0])n+=" translate3d("+r(t[1]||0)+"px,"+r(t[2]||0)+"px,"+r(t[3]||0)+"px)";else if("rotate"===t[0]){var i=t[4]?[1,2,3]:[3,2,1];for(a=0;a<3;a++)n+=" rotate"+s[i[a]-1]+"("+r(t[i[a]]||0)+"deg)"}else if("scale"===t[0])for(a=0;a<3;a++)n+=" scale"+s[a]+"("+r(t[a+1]||1)+")"}),e.jmpress("css",t,e.extend({},{transform:n}))}},2:{transform:function(t,a,s){var n="translate(-"+s.originX+",-"+s.originY+")";e.each(a,function(e,t){var a=["X","Y"];if("translate"===t[0])n+=" translate("+r(t[1]||0)+"px,"+r(t[2]||0)+"px)";else if("rotate"===t[0])n+=" rotate("+r(t[3]||0)+"deg)";else if("scale"===t[0])for(var s=0;s<2;s++)n+=" scale"+a[s]+"("+r(t[s+1]||1)+")"}),e.jmpress("css",t,e.extend({},{transform:n}))}}},i=function(){return e.jmpress("pfx","perspective")?n[3]:e.jmpress("pfx","transform")?n[2]:void 0}();i||e.jmpress("checkNoSupport",function(){return!0});var o=e.jmpress("defaults");o.reasonableAnimation={},o.originX="50%",o.originY="50%",e.jmpress("initStep",function(t,a){var s=a.data,r=a.stepData,n=parseFloat;e.extend(r,{x:n(s.x)||0,y:n(s.y)||0,z:n(s.z)||0,r:n(s.r)||0,phi:n(s.phi)||0,rotate:n(s.rotate)||0,rotateX:n(s.rotateX)||0,rotateY:n(s.rotateY)||0,rotateZ:n(s.rotateZ)||0,revertRotate:!1,scale:n(s.scale)||1,scaleX:n(s.scaleX)||!1,scaleY:n(s.scaleY)||!1,scaleZ:n(s.scaleZ)||1})}),e.jmpress("beforeInit",function(t,a){e.jmpress("css",a.area,{left:a.settings.originX,top:a.settings.originY,perspective:"1000px"})}),e.jmpress("afterInit",function(t,a){var s=a.settings.stepSelector,r=a.current;r.perspectiveScale=1,r.maxNestedDepth=0;for(var n=e(a.jmpress).find(s).children(s);n.length;)r.maxNestedDepth++,n=n.children(s)}),e.jmpress("applyStep",function(t,a){e.jmpress("css",e(t),{position:"absolute",transformStyle:"preserve-3d"}),a.parents.length>0&&e.jmpress("css",e(t),{top:"50%",left:"50%"});var s=a.stepData,r=[["translate",s.x||s.r*Math.sin(s.phi*Math.PI/180),s.y||-s.r*Math.cos(s.phi*Math.PI/180),s.z],["rotate",s.rotateX,s.rotateY,s.rotateZ||s.rotate,!0],["scale",s.scaleX||s.scale,s.scaleY||s.scale,s.scaleZ||s.scale]];i.transform(t,r,a.settings)}),e.jmpress("setActive",function(t,a){var r=a.target,n=a.stepData,i=r.transform=[];r.perspectiveScale=1;for(var o=a.current.maxNestedDepth;o>(a.parents.length||0);o--)i.push(["scale"],["rotate"],["translate"]);i.push(["scale",1/(n.scaleX||n.scale),1/(n.scaleY||n.scale),1/n.scaleZ]),i.push(["rotate",-n.rotateX,-n.rotateY,-(n.rotateZ||n.rotate)]),i.push(["translate",-(n.x||n.r*Math.sin(n.phi*Math.PI/180)),-(n.y||-n.r*Math.cos(n.phi*Math.PI/180)),-n.z]),r.perspectiveScale*=n.scaleX||n.scale,e.each(a.parents,function(t,a){var s=e(a).data("stepData");i.push(["scale",1/(s.scaleX||s.scale),1/(s.scaleY||s.scale),1/s.scaleZ]),i.push(["rotate",-s.rotateX,-s.rotateY,-(s.rotateZ||s.rotate)]),i.push(["translate",-(s.x||s.r*Math.sin(s.phi*Math.PI/180)),-(s.y||-s.r*Math.cos(s.phi*Math.PI/180)),-s.z]),r.perspectiveScale*=s.scaleX||s.scale}),e.each(i,function(e,t){function r(r){a.current["rotate"+r+"-"+e]===s&&(a.current["rotate"+r+"-"+e]=t[r]||0);var n=a.current["rotate"+r+"-"+e],i=t[r]||0,o=n%360,c=i%360;o<0&&(o+=360),c<0&&(c+=360);var l=c-o;l<-180?l+=360:l>180&&(l-=360),a.current["rotate"+r+"-"+e]=t[r]=n+l}"rotate"===t[0]&&(r(1),r(2),r(3))})}),e.jmpress("applyTarget",function(t,a){var s,r=a.target,n=(a.stepData,a.settings),o=1.3*r.perspectiveScale<a.current.perspectiveScale,c=r.perspectiveScale>1.3*a.current.perspectiveScale,l=-1;e.each(r.transform,function(e,t){if(!(t.length<=1||"rotate"===t[0]&&t[1]%360==0&&t[2]%360==0&&t[3]%360==0))return"scale"===t[0]&&void(l=e)}),l!==a.current.oldLastScale&&(o=c=!1,a.current.oldLastScale=l);var u=[];if(-1!==l)for(;l>=0;)"scale"===r.transform[l][0]&&(u.push(r.transform[l]),r.transform[l]=["scale"]),l--;var p=n.animation;n.reasonableAnimation[a.reason]&&(p=e.extend({},p,n.reasonableAnimation[a.reason])),s={perspective:Math.round(1e3*r.perspectiveScale)+"px"},s=e.extend({},p,s),o||(s.transitionDelay="0s"),a.beforeActive||(s.transitionDuration="0s",s.transitionDelay="0s"),e.jmpress("css",a.area,s),i.transform(a.area,u,a.settings),s=e.extend({},p),c||(s.transitionDelay="0s"),a.beforeActive||(s.transitionDuration="0s",s.transitionDelay="0s"),a.current.perspectiveScale=r.perspectiveScale,e.jmpress("css",a.canvas,s),i.transform(a.canvas,r.transform,a.settings)})}(jQuery,document,window),function(e){"use strict";var t=e.jmpress,a="activeClass",s="nestedActiveClass",r=t("defaults");r[s]="nested-active",r[a]="active",t("setInactive",function(t,r){var n=r.settings,i=n[a],o=n[s];i&&e(t).removeClass(i),o&&e.each(r.parents,function(t,a){e(a).removeClass(o)})}),t("setActive",function(t,r){var n=r.settings,i=n[a],o=n[s];i&&e(t).addClass(i),o&&e.each(r.parents,function(t,a){e(a).addClass(o)})})}(jQuery,document,window),function(e){"use strict";function t(t,a){return e(this).find(a.settings.stepSelector).first()}function a(t,a,s,r){if(!a)return!1;var n=s.settings.stepSelector;a=e(a);do{var i=a.near(n,r);if(0!==i.length&&0!==i.closest(t).length||(i=e(t).find(n)[r?"last":"first"]()),!i.length)return!1;a=i}while(a.data("stepData").exclude);return a}var s=e.jmpress;s("initStep",function(e,t){t.stepData.exclude=t.data.exclude&&-1===["false","no"].indexOf(t.data.exclude)}),s("selectInitialStep",t),s("selectHome",t),s("selectEnd",function(t,a){return e(this).find(a.settings.stepSelector).last()}),s("selectPrev",function(e,t){return a(this,e,t,!0)}),s("selectNext",function(e,t){return a(this,e,t)})}(jQuery,document,window),function(e){"use strict";e.jmpress("selectInitialStep",function(e,t){return t.settings.start})}(jQuery,document,window),function(e){"use strict";function t(t,a,s){for(var r=0;r<a.length-1;r++){var n=a[r],i=a[r+1];e(t).jmpress("initialized")?e(n,t).data("stepData")[s]=i:e(n,t).attr("data-"+s,i)}}function a(t,a,s,r){var n=a.stepData;if(n[s]){var i=e(t).near(n[s],r);if(i&&i.length)return i;if((i=e(n[s],this)[r?"last":"first"]())&&i.length)return i}}var s=e.jmpress;s("register","route",function(e,a,s){"string"==typeof e&&(e=[e,e]),t(this,e,s?"prev":"next"),a||t(this,e.reverse(),s?"next":"prev")}),s("initStep",function(e,t){for(var a in{next:1,prev:1})t.stepData[a]=t.data[a]}),s("selectNext",function(e,t){return a.call(this,e,t,"next")}),s("selectPrev",function(e,t){return a.call(this,e,t,"prev",!0)})}(jQuery,document,window),function(e){"use strict";var t=e.jmpress,a="ajax:afterStepLoaded",s="ajax:loadStep";t("register",s),t("register",a),t("defaults").ajaxLoadedClass="loaded",t("initStep",function(t,a){a.stepData.src=e(t).attr("href")||a.data.src||!1,a.stepData.srcLoaded=!1}),t(s,function(t,s){var r=s.stepData,n=r&&r.src,i=s.settings;n&&(e(t).addClass(i.ajaxLoadedClass),r.srcLoaded=!0,e(t).load(n,function(r,n,i){e(s.jmpress).jmpress("fire",a,t,e.extend({},s,{response:r,status:n,xhr:i}))}))}),t("idle",function(t,a){if(t){var r=a.settings,n=e(this);a.stepData;e(t).add(e(t).near(r.stepSelector)).add(e(t).near(r.stepSelector,!0)).add(n.jmpress("fire","selectPrev",t,{stepData:e(t).data("stepData")})).add(n.jmpress("fire","selectNext",t,{stepData:e(t).data("stepData")})).each(function(){var t=this,a=e(t).data("stepData");a.src&&!a.srcLoaded&&n.jmpress("fire",s,t,{stepData:e(t).data("stepData")})})}}),t("setActive",function(t){var a=e(t).data("stepData");a.src&&!a.srcLoaded&&e(this).jmpress("fire",s,t,{stepData:e(t).data("stepData")})})}(jQuery,document,window),function(e,t,a,s){"use strict";function r(){return""+Math.round(1e5*Math.random(),0)}function n(t){try{var r=e("#"+a.location.hash.replace(/^#\/?/,""));return r.length>0&&r.is(t.stepSelector)?r:s}catch(e){}}function i(e){var t="#/"+e;a.history&&a.history.pushState?a.location.hash!==t&&a.history.pushState({},"",t):a.location.hash!==t&&(a.location.hash=t)}var o=e.jmpress,c='a[href^="#"]';o("defaults").hash={use:!0,update:!0,bindChange:!0},o("selectInitialStep",function(t,s){var o=s.settings,l=o.hash,u=s.current,p=e(this);if(s.current.hashNamespace=".jmpress-"+r(),l.use)return l.bindChange&&(e(a).bind("hashchange"+u.hashNamespace,function(e){var t=n(o);p.jmpress("initialized")&&p.jmpress("scrollFix"),t&&t.length&&(t.attr("id")!==p.jmpress("active").attr("id")&&p.jmpress("select",t),i(t.attr("id"))),e.preventDefault()}),e(+c).on("click"+u.hashNamespace,function(t){var a=e(this).attr("href");try{e(a).is(o.stepSelector)&&(p.jmpress("select",a),t.preventDefault(),t.stopPropagation())}catch(e){}})),n(o)}),o("afterDeinit",function(t,s){e(c).off(s.current.hashNamespace),e(a).unbind(s.current.hashNamespace)}),o("setActive",function(t,a){var s=a.settings,r=a.current;s.hash.use&&s.hash.update&&(clearTimeout(r.hashtimeout),r.hashtimeout=setTimeout(function(){i(e(a.delegatedFrom).attr("id"))},s.transitionDuration+200))})}(jQuery,document,window),function(e,t,a,s){"use strict";function r(){return""+Math.round(1e5*Math.random(),0)}function n(e){e.preventDefault(),e.stopPropagation()}var i=e.jmpress,o="next",c="prev";i("defaults").keyboard={use:!0,keys:{33:c,37:c,38:c,9:o+":"+c,32:o,34:o,39:o,40:o,36:"home",35:"end"},ignore:{INPUT:[32,37,38,39,40],TEXTAREA:[32,37,38,39,40],SELECT:[38,40]},tabSelector:"a[href]:visible, :input:visible"},i("afterInit",function(a,i){var o=i.settings,c=o.keyboard,l=c.ignore,u=i.current,p=e(this);o.fullscreen||p.attr("tabindex",0),u.keyboardNamespace=".jmpress-"+r(),e(o.fullscreen?t:p).bind("keypress"+u.keyboardNamespace,function(e){for(var t in l)if(e.target.nodeName===t&&-1!==l[t].indexOf(e.which))return;(e.which>=37&&e.which<=40||32===e.which)&&n(e)}),e(o.fullscreen?t:p).bind("keydown"+u.keyboardNamespace,function(t){var a=e(t.target);if((o.fullscreen||a.closest(p).length)&&c.use){for(var r in l)if(a[0].nodeName===r&&-1!==l[r].indexOf(t.which))return;var i,u=!1;if(9===t.which){if(a.closest(p.jmpress("active")).length?(i=a.near(c.tabSelector,t.shiftKey),e(i).closest(o.stepSelector).is(p.jmpress("active"))||(i=s)):t.shiftKey?u=!0:i=p.jmpress("active").find("a[href], :input").filter(":visible").first(),i&&i.length>0)return i.focus(),p.jmpress("scrollFix"),void n(t);t.shiftKey&&(u=!0)}var f=c.keys[t.which];"string"==typeof f?(-1!==f.indexOf(":")&&(f=f.split(":"),f=t.shiftKey?f[1]:f[0]),p.jmpress(f),n(t)):e.isFunction(f)?f.call(p,t):f&&(p.jmpress.apply(p,f),n(t)),u&&(i=p.jmpress("active").find("a[href], :input").filter(":visible").last(),i.focus(),p.jmpress("scrollFix"))}})}),i("afterDeinit",function(a,s){e(t).unbind(s.current.keyboardNamespace)})}(jQuery,document,window),function(e,t,a,s){"use strict";function r(){return""+Math.round(1e5*Math.random(),0)}function n(e,t){return Math.max(Math.min(e,t),-t)}function i(t,a,s){var r=e(this).jmpress("current"),i=e(this).jmpress("settings"),o=e(this).jmpress("active").data("stepData"),c=e(this).jmpress("container");if(!(0===r.userZoom&&s<0)){var l=o.viewPortZoomable||i.viewPort.zoomable;if(!(r.userZoom===l&&s>0)){r.userZoom+=s;var u=e(c).innerWidth()/2,p=e(c).innerHeight()/2;t=t?t-u:t,a=a?a-p:a,r.userTranslateX=n(r.userTranslateX-s*t/r.zoomOriginWindowScale/l,u*r.userZoom*r.userZoom/l),r.userTranslateY=n(r.userTranslateY-s*a/r.zoomOriginWindowScale/l,p*r.userZoom*r.userZoom/l),e(this).jmpress("reselect","zoom")}}}var o=function(){var e=navigator.userAgent.toLowerCase();return(/(chrome)[ \/]([\w.]+)/.exec(e)||/(webkit)[ \/]([\w.]+)/.exec(e)||/(opera)(?:.*version|)[ \/]([\w.]+)/.exec(e)||/(msie) ([\w.]+)/.exec(e)||e.indexOf("compatible")<0&&/(mozilla)(?:.*? rv:([\w.]+)|)/.exec(e)||[])[1]||""}(),c=e.jmpress("defaults");c.viewPort={width:!1,height:!1,maxScale:0,minScale:0,zoomable:0,zoomBindMove:!0,zoomBindWheel:!0};var l=c.keyboard.keys;l["mozilla"===o?107:187]="zoomIn",l["mozilla"===o?109:189]="zoomOut",c.reasonableAnimation.resize={transitionDuration:"0s",transitionDelay:"0ms"},c.reasonableAnimation.zoom={transitionDuration:"0s",transitionDelay:"0ms"},e.jmpress("initStep",function(e,t){for(var a in{viewPortHeight:1,viewPortWidth:1,viewPortMinScale:1,viewPortMaxScale:1,viewPortZoomable:1})t.stepData[a]=t.data[a]&&parseFloat(t.data[a])}),e.jmpress("afterInit",function(n,i){var o=this;i.current.viewPortNamespace=".jmpress-"+r(),e(a).bind("resize"+i.current.viewPortNamespace,function(){e(o).jmpress("reselect","resize")}),i.current.userZoom=0,i.current.userTranslateX=0,i.current.userTranslateY=0,i.settings.viewPort.zoomBindWheel&&e(i.settings.fullscreen?t:this).bind("mousewheel"+i.current.viewPortNamespace+" DOMMouseScroll"+i.current.viewPortNamespace,function(t,a){a=a||t.originalEvent.wheelDelta||-t.originalEvent.detail;var s=a/Math.abs(a);return s<0?e(i.jmpress).jmpress("zoomOut",t.originalEvent.clientX,t.originalEvent.clientY):s>0&&e(i.jmpress).jmpress("zoomIn",t.originalEvent.clientX,t.originalEvent.clientY),!1}),i.settings.viewPort.zoomBindMove&&e(i.settings.fullscreen?t:this).bind("mousedown"+i.current.viewPortNamespace,function(e){i.current.userZoom&&(i.current.userTranslating={x:e.clientX,y:e.clientY},e.preventDefault(),e.stopImmediatePropagation())}).bind("mousemove"+i.current.viewPortNamespace,function(t){var a=i.current.userTranslating;a&&(e(o).jmpress("zoomTranslate",t.clientX-a.x,t.clientY-a.y),a.x=t.clientX,a.y=t.clientY,t.preventDefault(),t.stopImmediatePropagation())}).bind("mouseup"+i.current.viewPortNamespace,function(e){i.current.userTranslating&&(i.current.userTranslating=s,e.preventDefault(),e.stopImmediatePropagation())})}),e.jmpress("register","zoomIn",function(e,t){i.call(this,e||0,t||0,1)}),e.jmpress("register","zoomOut",function(e,t){i.call(this,e||0,t||0,-1)}),e.jmpress("register","zoomTranslate",function(t,a){var s=e(this).jmpress("current"),r=e(this).jmpress("settings"),i=e(this).jmpress("active").data("stepData"),o=e(this).jmpress("container"),c=i.viewPortZoomable||r.viewPort.zoomable,l=e(o).innerWidth(),u=e(o).innerHeight();s.userTranslateX=n(s.userTranslateX+t/s.zoomOriginWindowScale,l*s.userZoom*s.userZoom/c),s.userTranslateY=n(s.userTranslateY+a/s.zoomOriginWindowScale,u*s.userZoom*s.userZoom/c),e(this).jmpress("reselect","zoom")}),e.jmpress("afterDeinit",function(s,r){e(r.settings.fullscreen?t:this).unbind(r.current.viewPortNamespace),e(a).unbind(r.current.viewPortNamespace)}),e.jmpress("setActive",function(t,a){var s=a.settings.viewPort,r=a.stepData.viewPortHeight||s.height,n=a.stepData.viewPortWidth||s.width,i=a.stepData.viewPortMaxScale||s.maxScale,o=a.stepData.viewPortMinScale||s.minScale,c=r&&e(a.container).innerHeight()/r,l=n&&e(a.container).innerWidth()/n,u=(l||c)&&Math.min(l||c,c||l);if(u){u=u||1,i&&(u=Math.min(u,i)),o&&(u=Math.max(u,o));var p=a.stepData.viewPortZoomable||a.settings.viewPort.zoomable;if(p){var f=1/u-1/i;f/=p,u=1/(1/u-f*a.current.userZoom)}a.target.transform.reverse(),a.current.userTranslateX&&a.current.userTranslateY?a.target.transform.push(["translate",a.current.userTranslateX,a.current.userTranslateY,0]):a.target.transform.push(["translate"]),a.target.transform.push(["scale",u,u,1]),a.target.transform.reverse(),a.target.perspectiveScale/=u}a.current.zoomOriginWindowScale=u}),e.jmpress("setInactive",function(t,a){a.nextStep&&t&&e(a.nextStep).attr("id")===e(t).attr("id")||(a.current.userZoom=0,a.current.userTranslateX=0,a.current.userTranslateY=0)})}(jQuery,document,window),function(e){"use strict";function t(){return""+Math.round(1e5*Math.random(),0)}var a=e.jmpress;a("defaults").mouse={clickSelects:!0},a("afterInit",function(a,s){var r=s.settings,n=r.stepSelector,i=s.current,o=e(this);i.clickableStepsNamespace=".jmpress-"+t(),o.bind("click"+i.clickableStepsNamespace,function(t){if(r.mouse.clickSelects&&!i.userZoom){var a=e(t.target).closest(n);a.is(o.jmpress("active"))||a.length&&(o.jmpress("select",a[0],"click"),t.preventDefault(),t.stopPropagation())}})}),a("afterDeinit",function(t,a){e(this).unbind(a.current.clickableStepsNamespace)})}(jQuery,document,window),function(e,t){"use strict";function a(){return""+Math.round(1e5*Math.random(),0)}var s=e.jmpress;s("afterInit",function(s,r){var n=r.settings,i=r.current,o=r.jmpress;i.mobileNamespace=".jmpress-"+a();var c,l=[0,0];e(n.fullscreen?t:o).bind("touchstart"+i.mobileNamespace,function(e){c=e.originalEvent.touches[0],l=[c.pageX,c.pageY]}).bind("touchmove"+i.mobileNamespace,function(e){return c=e.originalEvent.touches[0],e.preventDefault(),!1}).bind("touchend"+i.mobileNamespace,function(t){var a=[c.pageX,c.pageY],s=[a[0]-l[0],a[1]-l[1]];if(Math.max(Math.abs(s[0]),Math.abs(s[1]))>50)return s=Math.abs(s[0])>Math.abs(s[1])?s[0]:s[1],e(o).jmpress(s>0?"prev":"next"),t.preventDefault(),!1})}),s("afterDeinit",function(a,s){var r=s.settings,n=s.current,i=s.jmpress;e(r.fullscreen?t:i).unbind(n.mobileNamespace)})}(jQuery,document,window),function(e,t,a,s){"use strict";function r(t,a,n){for(var i in a){var o=i;n&&(o=n+o.substr(0,1).toUpperCase()+o.substr(1)),e.isPlainObject(a[i])?r(t,a[i],o):t[o]===s&&(t[o]=a[i])}}function n(t,a){e.isArray(a)?a.length<t.length?e.error("more nested steps than children in template"):t.each(function(t,s){s=e(s);var n=s.data(l)||{};r(n,a[t]),s.data(l,n)}):e.isFunction(a)&&t.each(function(s,n){n=e(n);var i=n.data(l)||{};r(i,a(s,n,t)),n.data(l,i)})}function i(e,t,a,s){if(a.children){n(t.children(s.settings.stepSelector),a.children)}o(e,a)}function o(e,t){r(e,t)}var c=e.jmpress,l="_template_",u="_applied_template_",p={};c("beforeInitStep",function(t,a){t=e(t);var s=a.data,r=s.template,n=t.data(u),o=t.data(l);r&&e.each(r.split(" "),function(e,r){var n=p[r];i(s,t,n,a)}),n&&i(s,t,n,a),o&&(i(s,t,o,a),t.data(l,null),o.template&&e.each(o.template.split(" "),function(e,r){var n=p[r];i(s,t,n,a)}))}),c("beforeInit",function(t,a){var s=c("dataset",this),r=s.template,i=a.settings.stepSelector;if(r){var o=p[r];n(e(this).find(i).filter(function(){return!e(this).parent().is(i)}),o.children)}}),c("register","template",function(t,a){p[t]?p[t]=e.extend(!0,{},p[t],a):p[t]=e.extend(!0,{},a)}),c("register","apply",function(t,a){if(a)if(e.isArray(a))n(e(t),a);else{var s;s="string"==typeof a?p[a]:e.extend(!0,{},a),e(t).each(function(t,a){a=e(a);var n=a.data(u)||{};r(n,s),a.data(u,n)})}else{var i=e(this).jmpress("settings").stepSelector;n(e(this).find(i).filter(function(){return!e(this).parent().is(i)}),t)}})}(jQuery,document,window),function(e){"use strict";e.jmpress("setActive",function(t,a){a.prevStep!==t&&e(t).triggerHandler("enterStep")}),e.jmpress("setInactive",function(t,a){a.nextStep!==t&&e(t).triggerHandler("leaveStep")})}(jQuery,document,window),function(e,t,a,s){"use strict";function r(t){for(var a=t.split(" "),s=a[0],r={willClass:"will-"+s,doClass:"do-"+s,hasClass:"has-"+s},n="",i=1;i<a.length;i++){var o=a[i];switch(n){case"":"after"===o?n="after":e.warn("unknown keyword in '"+t+"'. '"+o+"' unknown.");break;case"after":if(o.match(/^[1-9][0-9]*m?s?/)){var c=parseFloat(o);-1!==o.indexOf("ms")?c*=1:-1!==o.indexOf("s")?c*=1e3:-1!==o.indexOf("m")&&(c*=6e4),r.delay=c}else r.after=Array.prototype.slice.call(a,i).join(" "),i=a.length}}return r}function n(t,a,s,r){r=r||t.length-1,s=s||0;for(var n=s;n<r+1;n++)if(e(t[n].element).is(a))return n}function i(t,a,s){e.each(a._on,function(e,a){t.push({substep:a.substep,delay:a.delay+s}),i(t,a.substep,a.delay+s)})}e.jmpress("defaults").customAnimationDataAttribute="jmpress",e.jmpress("afterInit",function(e,t){t.current.animationTimeouts=[],t.current.animationCleanupWaiting=[]}),e.jmpress("applyStep",function(t,a){function o(e,t){if(t.substep._after)return u=t.substep._after,!1}var c={},l=[];if(e(t).find("[data-"+a.settings.customAnimationDataAttribute+"]").each(function(s,r){e(r).closest(a.settings.stepSelector).is(t)&&l.push({element:r})}),0!==l.length){e.each(l,function(t,s){s.info=r(e(s.element).data(a.settings.customAnimationDataAttribute)),e(s.element).addClass(s.info.willClass),s._on=[],s._after=null});var u={_after:s,_on:[],info:{}};if(e.each(l,function(e,t){var a=t.info.after;if(a)if("step"===a)a=u;else if("prev"===a)a=l[e-1];else{var r=n(l,a,0,e-1);r===s&&(r=n(l,a)),a=r===s||r===e?l[e-1]:l[r]}else a=l[e-1];if(a){if(!t.info.delay){if(!a._after)return void(a._after=t);a=a._after}a._on.push({substep:t,delay:t.info.delay||0})}}),u._after===s&&0===u._on.length){var p=n(l,a.stepData.startSubstep)||0;u._after=l[p]}var f=[];do{var d=[{substep:u,delay:0}];i(d,u,0),f.push(d),u=null,e.each(d,o)}while(u);c.list=f,e(t).data("substepsData",c)}}),e.jmpress("unapplyStep",function(t){var a=e(t).data("substepsData");a&&e.each(a.list,function(t,a){e.each(a,function(t,a){a.substep.info.willClass&&e(a.substep.element).removeClass(a.substep.info.willClass),a.substep.info.hasClass&&e(a.substep.element).removeClass(a.substep.info.hasClass),a.substep.info.doClass&&e(a.substep.element).removeClass(a.substep.info.doClass)})})}),e.jmpress("setActive",function(t,a){var r=e(t).data("substepsData");if(r){a.substep===s&&(a.substep="prev"===a.reason?r.list.length-1:0);var n=a.substep;e.each(a.current.animationTimeouts,function(e,t){clearTimeout(t)}),a.current.animationTimeouts=[],e.each(r.list,function(t,s){var r=t<n,i=t<=n;e.each(s,function(t,s){function n(){e(s.substep.element).addClass(s.substep.info.doClass)}s.substep.info.hasClass&&e(s.substep.element)[(r?"add":"remove")+"Class"](s.substep.info.hasClass),i&&!r&&s.delay&&"prev"!==a.reason?s.substep.info.doClass&&(e(s.substep.element).removeClass(s.substep.info.doClass),a.current.animationTimeouts.push(setTimeout(n,s.delay))):s.substep.info.doClass&&e(s.substep.element)[(i?"add":"remove")+"Class"](s.substep.info.doClass)})})}}),e.jmpress("setInactive",function(t,a){function s(t){e.each(t.list,function(t,a){e.each(a,function(t,a){a.substep.info.hasClass&&e(a.substep.element).removeClass(a.substep.info.hasClass),a.substep.info.doClass&&e(a.substep.element).removeClass(a.substep.info.doClass)})})}if(a.nextStep!==t){e.each(a.current.animationCleanupWaiting,function(e,t){s(t)}),a.current.animationCleanupWaiting=[];var r=e(t).data("substepsData");r&&a.current.animationCleanupWaiting.push(r)}}),e.jmpress("selectNext",function(t,a){if(a.substep!==s){var r=e(t).data("substepsData");if(r)return a.substep<r.list.length-1?{step:t,substep:a.substep+1}:void 0}}),e.jmpress("selectPrev",function(t,a){if(a.substep!==s){if(e(t).data("substepsData"))return a.substep>0?{step:t,substep:a.substep-1}:void 0}})}(jQuery,document,window),function(e,t){"use strict";e.jmpress("register","toggle",function(a,s,r){var n=this;e(t).bind("keydown",function(t){t.keyCode===a&&(e(n).jmpress("initialized")?e(n).jmpress("deinit"):e(n).jmpress(s))}),r&&e(n).jmpress(s)})}(jQuery,document,window),function(e){"use strict";function t(t,a,s){if(t.secondary&&-1!==t.secondary.split(" ").indexOf(a)){for(var r in t)if(r.length>9&&0===r.indexOf("secondary")){var n=t[r],i=r.substr(9);i=i.substr(0,1).toLowerCase()+i.substr(1),t[r]=t[i],t[i]=n}e(this).jmpress("reapply",e(s))}}e.jmpress("initStep",function(e,t){for(var a in t.data)0===a.indexOf("secondary")&&(t.stepData[a]=t.data[a])}),e.jmpress("beforeActive",function(a,s){t.call(s.jmpress,e(a).data("stepData"),"self",a);var r=e(a).parent();e(r).children(s.settings.stepSelector).each(function(a,r){var n=e(r).data("stepData");t.call(s.jmpress,n,"siblings",r)});for(var n=1;n<s.parents.length;n++)e(s.parents[n]).children(s.settings.stepSelector).each()}),e.jmpress("setInactive",function(a,s){function r(a,r){var n=e(r).data("stepData");t.call(s.jmpress,n,"grandchildren",r)}t.call(s.jmpress,e(a).data("stepData"),"self",a);var n=e(a).parent();e(n).children(s.settings.stepSelector).each(function(a,r){var n=e(r).data("stepData");t.call(s.jmpress,n,"siblings",r)});for(var i=1;i<s.parents.length;i++)e(s.parents[i]).children(s.settings.stepSelector).each(r)})}(jQuery,document,window),function(e,t,a,s){"use strict";e.jmpress("defaults").duration={defaultValue:-1,defaultAction:"next",barSelector:s,barProperty:"width",barPropertyStart:"0",barPropertyEnd:"100%"},e.jmpress("initStep",function(e,t){
t.stepData.duration=t.data.duration&&parseInt(t.data.duration,10),t.stepData.durationAction=t.data.durationAction}),e.jmpress("setInactive",function(t,a){var s=a.settings,r=s.duration,n=a.current;a.stepData.duration||r.defaultValue;if(n.durationTimeout){if(r.barSelector){var i={transitionProperty:r.barProperty,transitionDuration:"0",transitionDelay:"0",transitionTimingFunction:"linear"};i[r.barProperty]=r.barPropertyStart;var o=e(r.barSelector);e.jmpress("css",o,i),o.each(function(t,a){var s=e(a).next(),r=e(a).parent();e(a).detach(),s.length?s.insertBefore(a):r.append(a)})}clearTimeout(n.durationTimeout),delete n.durationTimeout}}),e.jmpress("setActive",function(t,a){var r=a.settings,n=r.duration,i=a.current,o=a.stepData.duration||n.defaultValue;if(o&&o>0){if(n.barSelector){var c={transitionProperty:n.barProperty,transitionDuration:o-2*r.transitionDuration/3-100+"ms",transitionDelay:2*r.transitionDuration/3+"ms",transitionTimingFunction:"linear"};c[n.barProperty]=n.barPropertyEnd,e.jmpress("css",e(n.barSelector),c)}var l=this;i.durationTimeout&&(clearTimeout(i.durationTimeout),i.durationTimeout=s),i.durationTimeout=setTimeout(function(){var t=a.stepData.durationAction||n.defaultAction;e(l).jmpress(t)},o)}})}(jQuery,document,window);