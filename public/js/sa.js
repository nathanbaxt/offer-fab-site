/* First-party analytics v2 (Fleet adsboard Website tab). No cookies set, no PII, honours DNT/GPC, skips bots. */
(function(){var d=document,w=window,n=navigator,s=d.currentScript;if(!s)return;
var of=w.fetch,E=s.getAttribute('data-e'),K=s.getAttribute('data-k'),T=0,ss,lst;try{ss=w.sessionStorage;lst=w.localStorage}catch(e){}
try{T=/[?&]sa_test=1/.test(location.search)||ss.getItem('sa_t')=='1';if(T)ss.setItem('sa_t','1')}catch(e){}
if(n.doNotTrack=='1'||w.doNotTrack=='1'||n.globalPrivacyControl||(n.webdriver&&!T)||(w.Shopify&&Shopify.designMode))return;
function rid(){return Math.random().toString(36).slice(2,10)+Date.now().toString(36)}
/* new vs returning: only a visit COUNT is kept on the device; no id is ever sent */
var S,L=0,ret=0,vn=1;try{S=ss.getItem('sa_s');if(!S){S=rid();L=1;ss.setItem('sa_s',S);var v=JSON.parse(lst.getItem('sa_v')||'null');if(v&&v.n){ret=1;vn=v.n+1}lst.setItem('sa_v',JSON.stringify({n:vn}));ss.setItem('sa_r',ret+','+vn)}else{var rv=(ss.getItem('sa_r')||'0,1').split(',');ret=+rv[0];vn=+rv[1]}}catch(e){S=rid();L=1}
var P=rid(),mx=0,et=0,act=Date.now(),de=d.documentElement,loc=location,path=loc.pathname,M=(w.ShopifyAnalytics&&ShopifyAnalytics.meta)||{};
var pt=(M.page&&M.page.pageType)||(path=='/'?'home':'');if(/^404\b|not found/i.test(d.title))pt='404';if(path=='/search'||/^search/.test(pt))pt='search';
function send(o){o.k=K;o.s=S;o.v=P;o.p=path;if(T)o.tst=1;var b=JSON.stringify(o);try{if(n.sendBeacon&&n.sendBeacon(E,b))return}catch(e){}try{of.call(w,E,{method:'POST',body:b,keepalive:true,mode:'no-cors'})}catch(e){}}
function x(y,a,b,c,v){send({t:'x',y:y,a:a==null?'':String(a).slice(0,140),b:b==null?'':String(b).slice(0,140),c:c||'',n:v||0})}
function sc(){var h=Math.max(de.scrollHeight,d.body?d.body.scrollHeight:0),v=Math.round(Math.min(1,(w.scrollY+w.innerHeight)/(h||1))*100);if(v>mx)mx=v}
function sn(el){return el.id.replace(/^shopify-section-/,'').replace(/^(template|sections)--\d+__/,'')}
function lab(a){return (a.getAttribute('aria-label')||a.alt||a.innerText||a.value||a.title||'').replace(/\s+/g,' ').trim().slice(0,60)}
function secOf(a){var e=a.closest&&a.closest('[id^="shopify-section-"]');return e?sn(e):''}
function ctok(){var m=d.cookie.match(/(?:^|; )cart=([^;]+)/);return m?decodeURIComponent(m[1]).split('?')[0].slice(0,80):''}
var ua=n.userAgent,br=/FBAN|FBAV/.test(ua)?'Facebook app':/Instagram/.test(ua)?'Instagram app':/SamsungBrowser/.test(ua)?'Samsung':/Edg\//.test(ua)?'Edge':/CriOS|Chrome\//.test(ua)?'Chrome':/FxiOS|Firefox/.test(ua)?'Firefox':/Safari/.test(ua)?'Safari':'Other',
os=/iPhone|iPad|iPod/.test(ua)?'iOS':/Android/.test(ua)?'Android':/Mac OS X/.test(ua)?'Mac':/Windows/.test(ua)?'Windows':'Other';
var q=new URLSearchParams(loc.search),r='';try{var ru=new URL(d.referrer);if(ru.host!=loc.host)r=ru.host}catch(e){}
var gad=q.get('gclid')||q.get('gbraid')||q.get('wbraid')||q.get('gad_source'),fb=q.get('fbclid');
send({t:'pv',r:r,l:L,us:q.get('utm_source')||(gad?'google':fb?'facebook':''),um:q.get('utm_medium')||(gad?'cpc':fb?'fbclid':''),uc:q.get('utm_campaign')||(gad&&q.get('gad_campaignid')?'gad '+q.get('gad_campaignid'):''),
 w:w.innerWidth,th:(w.Shopify&&Shopify.theme&&Shopify.theme.id)||'',pt:pt,br:br,os:os,ret:ret,vn:vn});
/* page-level facts */
var hd=path.split('/products/')[1];hd=hd?hd.split('/')[0]:'';
if(pt=='product'){var pm=M.product||{},og=d.querySelector('meta[property="og:title"]');x('pd',hd,og?og.content:d.title,'',pm.variants&&pm.variants[0]&&pm.variants[0].price)}
var SQ='';if(pt=='search'){SQ=(q.get('q')||'').trim().toLowerCase();var cm=d.title.match(/(\d+) results?/i);x('sq',SQ,'page','',cm?+cm[1]+1:0)}
if(pt=='404')x('404',path,r);if(pt=='cart')x('cd','page');
/* engagement + scroll */
sc();w.addEventListener('scroll',function(){sc();act=Date.now()},{passive:true});
['mousemove','keydown','touchstart','pointerdown'].forEach(function(t){w.addEventListener(t,function(){act=Date.now()},{passive:true})});
var vis={},SV={},LS='',LE='',gi=0,lcp=0,ne=0;
try{var io=new IntersectionObserver(function(es){es.forEach(function(e){var k=sn(e.target);if(e.isIntersecting&&(e.intersectionRatio>=.5||e.intersectionRect.height>=innerHeight*.5)){vis[k]=1;LS=k}else delete vis[k]})},{threshold:[0,.25,.5,.75,1]});
d.querySelectorAll('[id^="shopify-section-"]').forEach(function(el){if(!/header|announcement|drawer|popup/i.test(el.id)&&!/^[0-9a-f]{12,}$/.test(sn(el))&&getComputedStyle(el).position!='fixed')io.observe(el)})}catch(e){}
setInterval(function(){if(!d.hidden&&Date.now()-act<30000){et++;for(var k in vis)SV[k]=(SV[k]||0)+1}},1000);
try{new PerformanceObserver(function(l){var es=l.getEntries();lcp=Math.round(es[es.length-1].startTime)}).observe({type:'largest-contentful-paint',buffered:true})}catch(e){}
/* clicks: ranking, outbound, rage, dead, search/fit/checkout intent */
var rc=[],rl=0,ldd=0,ckd=0,PQ='',lg=0;
d.addEventListener('click',function(e){var t=e.target;if(!t||!t.closest)return;var now=Date.now();
rc=rc.filter(function(c){return now-c[0]<1000&&Math.abs(c[1]-e.clientX)<40&&Math.abs(c[2]-e.clientY)<40});rc.push([now,e.clientX,e.clientY]);
if(rc.length>=3&&now-rl>1500){rl=now;x('rg',lab(t)||t.tagName.toLowerCase(),secOf(t))}
if(t.closest('product-gallery,[class*=gallery],[class*=thumbnail],[class*=media]')&&now-lg>400){lg=now;gi++}
var a=t.closest('a,button,[role=button],summary,input[type=submit],label,select,[data-evnc-filter]');
if(!a&&rc.length<2&&now-ldd>2000&&!t.closest('input,textarea,video,iframe,[onclick],[tabindex],predictive-search,product-gallery')){var mu=0,mo=new MutationObserver(function(){mu=1}),u0=loc.href;mo.observe(d.body,{subtree:true,childList:true,attributes:true});
 ldd=now;setTimeout(function(){mo.disconnect();if(!mu&&loc.href==u0&&rc.length<3)x('dd',(t.alt||lab(t)||t.tagName.toLowerCase()).slice(0,60),secOf(t))},700)}
if(!a)return;var h='';if(a.href){try{var u=new URL(a.href,loc.href);h=/^https?:$/.test(u.protocol)?(u.host==loc.host?u.pathname:u.host+u.pathname):u.protocol}catch(z){}}
var tx=lab(a),sid=secOf(a);LE=(sid?sid+': ':'')+(tx||h);sc();
send({t:'c',h:h,tx:tx,sc:sid,xp:Math.round(e.clientX/w.innerWidth*1000),yp:Math.round(Math.min(1,e.pageY/Math.max(de.scrollHeight,1))*1000)});
if(a.hasAttribute('data-evnc-filter'))x('fit',a.getAttribute('data-evnc-filter'),a.getAttribute('data-value')||tx);
else if(/vehicle|evc_categories|fitment|shop_by/i.test(sid)&&h)x('fit','vehicle',tx||h);
if(h&&a.closest('predictive-search,[class*=predictive]')&&PQ){if(pqF){clearTimeout(pqT);pqF()}x('sk',PQ,h)}else if(pt=='search'&&SQ&&/^\/(products|collections|pages)\//.test(h))x('sk',SQ,h);
if(!ckd&&(a.closest('[name=checkout],a[href*="/checkout"],[class*=shopify-payment-button],shopify-accelerated-checkout,shopify-accelerated-checkout-cart'))){ckd=1;x('ck',/payment|accelerated/i.test(a.className+a.tagName)?'express':'checkout','',ctok(),CT)}},true);
d.addEventListener('scroll',function(e){var t=e.target;if(t&&t.closest&&t.closest('product-gallery,[class*=gallery]')&&Date.now()-lg>800){lg=Date.now();gi++}},true);
d.addEventListener('focusin',function(e){var t=e.target;if(t&&/INPUT|TEXTAREA|SELECT/.test(t.tagName))LE=(secOf(t)?secOf(t)+': ':'')+'field '+(t.name||t.type||'').slice(0,30)});
d.addEventListener('change',function(e){var t=e.target;if(!t||!t.closest||!e.isTrusted||t.type=='hidden'||t.name=='id')return;
if(t.tagName=='SELECT'&&/make|model|year|vehicle/i.test((t.name||'')+(t.id||'')+(t.getAttribute('aria-label')||'')))x('fit',t.name||t.id,t.options[t.selectedIndex]&&t.options[t.selectedIndex].text);
else if(pt=='product'&&t.name!='quantity'&&t.closest('form[action*="/cart/add"],variant-picker,variant-radios,variant-selects,[class*=variant]'))x('vr',hd,t.tagName=='SELECT'?t.options[t.selectedIndex].text:t.value)},true);
d.addEventListener('submit',function(e){var f=e.target,sb=e.submitter;if(!f||!f.action)return;
if(/\/cart\/add/.test(f.action))setTimeout(function(){if(!e.defaultPrevented)x('ac',hd,d.title,ctok(),0)},0);
if(!ckd&&((sb&&sb.name=='checkout')||/\/checkout/.test(f.action))){ckd=1;x('ck','checkout','',ctok(),CT)}},true);
/* cart + predictive search: observe the theme's own requests (read-only) */
var PREV=null,CT=0,pqT,pqF=null;
function ck(u){var m=String(u||'').match(/\/cart\/(add|change|update|clear)|\/cart\.js/);return m?(m[1]||'get'):''}
function bo(b){var o={};try{if(typeof b=='string'){try{return JSON.parse(b)}catch(z){new URLSearchParams(b).forEach(function(v,k){o[k]=v})}}else if(b&&b.forEach)b.forEach(function(v,k){o[k]=v})}catch(z){}return o}
function hk(k,u,b,t){try{if(/search\/suggest/.test(u)){var qq=(new URL(u,loc.href).searchParams.get('q')||'').trim().toLowerCase(),nr=0;
 try{nr=JSON.parse(t).resources.results.products.length}catch(z){var seen={};(t.match(/\/products\/[a-z0-9-]+/g)||[]).forEach(function(m){seen[m]=1});nr=Object.keys(seen).length}
 PQ=qq;clearTimeout(pqT);pqF=null;if(qq.length>1){pqF=function(){pqF=null;x('sq',qq,'predictive','',nr+1)};pqT=setTimeout(pqF,1500)}return}
 var j=JSON.parse(t),bd=bo(b);
 if(k=='add'){(j.items||[j]).forEach(function(i){if(i&&i.handle){x('ac',i.handle,i.product_title+(i.variant_title?' / '+i.variant_title:''),ctok(),i.final_line_price||i.price*i.quantity);if(PREV)PREV[i.key]=[i.handle,i.product_title,(PREV[i.key]?PREV[i.key][2]:0)+i.quantity]}});return}
 if(j&&j.items){var nw={};j.items.forEach(function(i){nw[i.key]=[i.handle,i.product_title,i.quantity]});CT=j.total_price||0;
  if(PREV&&k!='get')for(var key in PREV){var o=PREV[key],m2=nw[key];if(!m2||m2[2]<o[2])x('rm',o[0],o[1])}
  else if(!PREV&&k!='get'&&(bd.quantity==0||bd.quantity=='0'))x('rm','','(item)');PREV=nw}}catch(z){}}
if(of)w.fetch=function(i,o){var u=typeof i=='string'?i:(i&&i.url)||'',k=ck(u),p=of.apply(this,arguments);
 if(k||/search\/suggest/.test(u))p.then(function(rs){rs.clone().text().then(function(t){hk(k,u,o&&o.body,t)})}).catch(function(){});return p};
try{var XP=XMLHttpRequest.prototype,XO=XP.open,XS=XP.send;XP.open=function(m,u){this._sa=String(u||'');return XO.apply(this,arguments)};
XP.send=function(b){var r=this,u=r._sa||'',k=ck(u);if(k||/search\/suggest/.test(u))r.addEventListener('load',function(){hk(k,u,b,r.responseText)});return XS.apply(this,arguments)}}catch(e){}
/* cart drawer opens */
try{var cd=d.querySelector('cart-drawer,#cart-drawer,#CartDrawer'),lo=0;if(cd)new MutationObserver(function(){var op=cd.hasAttribute('open')||/\b(active|open|is-open)\b/.test(cd.className);if(op&&!lo&&Date.now())x('cd','drawer');lo=op}).observe(cd,{attributes:true,attributeFilter:['open','class']})}catch(e){}
/* errors */
var NZ=/_AutofillCallbackHandler|Load failed|Failed to fetch|NetworkError|ResizeObserver loop/;
w.addEventListener('error',function(e){if(e.message&&!NZ.test(e.message)&&ne++<5)x('er',e.message,(e.filename||'').split('/').pop().split('?')[0]+':'+(e.lineno||0))});
w.addEventListener('unhandledrejection',function(e){var m=String(e.reason&&e.reason.message||e.reason);if(!NZ.test(m)&&ne++<5)x('er',m.slice(0,140),'promise')});
/* page end: exit facts */
function end(){sc();var nv=performance.getEntriesByType&&performance.getEntriesByType('navigation')[0];
send({t:'e',sd:mx,et:et,sv:SV,ls:LS,le:LE,gi:gi,lcp:lcp,ld:nv&&nv.loadEventEnd?Math.round(nv.loadEventEnd):0})}
d.addEventListener('visibilitychange',function(){if(d.hidden)end()});w.addEventListener('pagehide',end);
})();
