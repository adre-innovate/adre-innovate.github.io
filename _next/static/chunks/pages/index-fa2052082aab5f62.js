(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5405],{8273:function(e,t,n){"use strict";n.r(t),n.d(t,{CountUp:function(){return a}});var s=function(){return(s=Object.assign||function(e){for(var t,n=1,s=arguments.length;n<s;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e}).apply(this,arguments)},a=function(){function e(e,t,n){var a=this;this.endVal=t,this.options=n,this.version="2.8.0",this.defaults={startVal:0,decimalPlaces:0,duration:2,useEasing:!0,useGrouping:!0,useIndianSeparators:!1,smartEasingThreshold:999,smartEasingAmount:333,separator:",",decimal:".",prefix:"",suffix:"",enableScrollSpy:!1,scrollSpyDelay:200,scrollSpyOnce:!1},this.finalEndVal=null,this.useEasing=!0,this.countDown=!1,this.error="",this.startVal=0,this.paused=!0,this.once=!1,this.count=function(e){a.startTime||(a.startTime=e);var t=e-a.startTime;a.remaining=a.duration-t,a.useEasing?a.countDown?a.frameVal=a.startVal-a.easingFn(t,0,a.startVal-a.endVal,a.duration):a.frameVal=a.easingFn(t,a.startVal,a.endVal-a.startVal,a.duration):a.frameVal=a.startVal+(a.endVal-a.startVal)*(t/a.duration);var n=a.countDown?a.frameVal<a.endVal:a.frameVal>a.endVal;a.frameVal=n?a.endVal:a.frameVal,a.frameVal=Number(a.frameVal.toFixed(a.options.decimalPlaces)),a.printValue(a.frameVal),t<a.duration?a.rAF=requestAnimationFrame(a.count):null!==a.finalEndVal?a.update(a.finalEndVal):a.options.onCompleteCallback&&a.options.onCompleteCallback()},this.formatNumber=function(e){var t,n,s,i=(Math.abs(e).toFixed(a.options.decimalPlaces)+"").split(".");if(t=i[0],n=i.length>1?a.options.decimal+i[1]:"",a.options.useGrouping){s="";for(var o=3,r=0,l=0,c=t.length;l<c;++l)a.options.useIndianSeparators&&4===l&&(o=2,r=1),0!==l&&r%o==0&&(s=a.options.separator+s),r++,s=t[c-l-1]+s;t=s}return a.options.numerals&&a.options.numerals.length&&(t=t.replace(/[0-9]/g,function(e){return a.options.numerals[+e]}),n=n.replace(/[0-9]/g,function(e){return a.options.numerals[+e]})),(e<0?"-":"")+a.options.prefix+t+n+a.options.suffix},this.easeOutExpo=function(e,t,n,s){return n*(1-Math.pow(2,-10*e/s))*1024/1023+t},this.options=s(s({},this.defaults),n),this.formattingFn=this.options.formattingFn?this.options.formattingFn:this.formatNumber,this.easingFn=this.options.easingFn?this.options.easingFn:this.easeOutExpo,this.startVal=this.validateValue(this.options.startVal),this.frameVal=this.startVal,this.endVal=this.validateValue(t),this.options.decimalPlaces=Math.max(this.options.decimalPlaces),this.resetDuration(),this.options.separator=String(this.options.separator),this.useEasing=this.options.useEasing,""===this.options.separator&&(this.options.useGrouping=!1),this.el="string"==typeof e?document.getElementById(e):e,this.el?this.printValue(this.startVal):this.error="[CountUp] target is null or undefined","undefined"!=typeof window&&this.options.enableScrollSpy&&(this.error?console.error(this.error,e):(window.onScrollFns=window.onScrollFns||[],window.onScrollFns.push(function(){return a.handleScroll(a)}),window.onscroll=function(){window.onScrollFns.forEach(function(e){return e()})},this.handleScroll(this)))}return e.prototype.handleScroll=function(e){if(e&&window&&!e.once){var t=window.innerHeight+window.scrollY,n=e.el.getBoundingClientRect(),s=n.top+window.pageYOffset,a=n.top+n.height+window.pageYOffset;a<t&&a>window.scrollY&&e.paused?(e.paused=!1,setTimeout(function(){return e.start()},e.options.scrollSpyDelay),e.options.scrollSpyOnce&&(e.once=!0)):(window.scrollY>a||s>t)&&!e.paused&&e.reset()}},e.prototype.determineDirectionAndSmartEasing=function(){var e=this.finalEndVal?this.finalEndVal:this.endVal;if(this.countDown=this.startVal>e,Math.abs(e-this.startVal)>this.options.smartEasingThreshold&&this.options.useEasing){this.finalEndVal=e;var t=this.countDown?1:-1;this.endVal=e+t*this.options.smartEasingAmount,this.duration=this.duration/2}else this.endVal=e,this.finalEndVal=null;null!==this.finalEndVal?this.useEasing=!1:this.useEasing=this.options.useEasing},e.prototype.start=function(e){this.error||(this.options.onStartCallback&&this.options.onStartCallback(),e&&(this.options.onCompleteCallback=e),this.duration>0?(this.determineDirectionAndSmartEasing(),this.paused=!1,this.rAF=requestAnimationFrame(this.count)):this.printValue(this.endVal))},e.prototype.pauseResume=function(){this.paused?(this.startTime=null,this.duration=this.remaining,this.startVal=this.frameVal,this.determineDirectionAndSmartEasing(),this.rAF=requestAnimationFrame(this.count)):cancelAnimationFrame(this.rAF),this.paused=!this.paused},e.prototype.reset=function(){cancelAnimationFrame(this.rAF),this.paused=!0,this.resetDuration(),this.startVal=this.validateValue(this.options.startVal),this.frameVal=this.startVal,this.printValue(this.startVal)},e.prototype.update=function(e){cancelAnimationFrame(this.rAF),this.startTime=null,this.endVal=this.validateValue(e),this.endVal!==this.frameVal&&(this.startVal=this.frameVal,null==this.finalEndVal&&this.resetDuration(),this.finalEndVal=null,this.determineDirectionAndSmartEasing(),this.rAF=requestAnimationFrame(this.count))},e.prototype.printValue=function(e){var t;if(this.el){var n=this.formattingFn(e);(null===(t=this.options.plugin)||void 0===t?void 0:t.render)?this.options.plugin.render(this.el,n):"INPUT"===this.el.tagName?this.el.value=n:"text"===this.el.tagName||"tspan"===this.el.tagName?this.el.textContent=n:this.el.innerHTML=n}},e.prototype.ensureNumber=function(e){return"number"==typeof e&&!isNaN(e)},e.prototype.validateValue=function(e){var t=Number(e);return this.ensureNumber(t)?t:(this.error="[CountUp] invalid start or end value: ".concat(e),null)},e.prototype.resetDuration=function(){this.startTime=null,this.duration=1e3*Number(this.options.duration),this.remaining=this.duration},e}()},5728:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(9683)}])},7741:function(e,t,n){"use strict";n.d(t,{Z:function(){return o}});var s=n(5893),a=JSON.parse('{"TN":" just give our team a<br/><strong> shout! </strong>","Oc":"Get in Touch","fL":"<a href=\\"mailto:adre-innovate@gmail.com\\" target=\\"_blank\\">adre-innovate@gmail.com</a>","Md":"/images/cta-bg-1.jpg","_l":"/images/cta-circle2.png","xs":[{"link":"https://instagram.com/","icon":"fab fa-instagram","title":"Instagram"},{"link":"https://twitter.com/","icon":"fab fa-twitter","title":"Twitter"},{"link":"https://linkedin.com/","icon":"fab fa-linkedin-in","title":"LinkedIn"}]}');let i=()=>(0,s.jsx)(s.Fragment,{children:(0,s.jsx)("section",{className:"onovo-section gap-top-140 gap-bottom-140",style:{backgroundImage:"url("+a.Md+")",backgroundPosition:"center center",backgroundRepeat:"no-repeat",backgroundSize:"cover"},children:(0,s.jsx)("div",{className:"container",children:(0,s.jsxs)("div",{className:"row",children:[(0,s.jsxs)("div",{className:"col-xs-12 col-sm-12 col-md-12 col-lg-6",children:[(0,s.jsxs)("div",{className:"onovo-heading gap-bottom-40 onovo-text-white",children:[(0,s.jsx)("div",{className:"onovo-subtitle-1",children:(0,s.jsx)("span",{children:a.Oc})}),(0,s.jsx)("h2",{className:"onovo-title-2",children:(0,s.jsx)("span",{dangerouslySetInnerHTML:{__html:a.TN}})})]}),(0,s.jsx)("div",{className:"onovo-cta-text",dangerouslySetInnerHTML:{__html:a.fL}})]}),(0,s.jsx)("div",{className:"col-xs-12 col-sm-12 col-md-12 col-lg-6",children:(0,s.jsxs)("div",{className:"onovo-cta-social",children:[(0,s.jsxs)("div",{className:"image",style:{backgroundImage:"url("+a._l+")"},children:[(0,s.jsx)("div",{className:"cta-img-circle img-circle--1"}),(0,s.jsx)("div",{className:"cta-img-circle img-circle--2"}),(0,s.jsx)("div",{className:"cta-img-circle img-circle--3"})]}),(0,s.jsx)("div",{className:"desc",children:(0,s.jsx)("ul",{children:a.xs.map((e,t)=>(0,s.jsx)("li",{children:(0,s.jsxs)("a",{className:"onovo-btn btn--white btn--large btn--icon onovo-hover-btn",href:e.link,target:"_blank",children:[(0,s.jsx)("i",{"aria-hidden":"true",className:e.icon}),(0,s.jsx)("span",{children:e.title})]})},"cta-social-item-".concat(t)))})})]})})]})})})});var o=i},2287:function(e,t,n){"use strict";n.d(t,{Z:function(){return r}});var s=n(5893),a=JSON.parse('{"e":[{"value":"100","label":"Cities Covered","after":"+"},{"value":"25","label":"Ads Played","after":"K"},{"value":"10","label":"Audience Reached","after":"M"}]}'),i=n(7857);let o=()=>(0,s.jsx)(s.Fragment,{children:(0,s.jsx)("section",{className:"onovo-section gap-top-140 gap-bottom-140",children:(0,s.jsx)("div",{className:"container",children:(0,s.jsx)("div",{className:"row",children:a.e.map((e,t)=>(0,s.jsx)("div",{className:"col-xs-12 col-sm-12 col-md-4 col-lg-4 align-center",children:(0,s.jsxs)("div",{className:"onovo-counter",children:[(0,s.jsx)("div",{className:"num onovo-text-white js-counter",children:(0,s.jsx)(i.ZP,{end:e.value,duration:7,enableScrollSpy:!0,scrollSpyOnce:!0})}),""!=e.after&&(0,s.jsx)("div",{className:"num-after onovo-text-white",children:e.after}),(0,s.jsx)("div",{className:"label",children:e.label})]})},"counters-item-".concat(t)))})})})});var r=o},4759:function(e,t,n){"use strict";n.d(t,{Z:function(){return o}});var s=n(5893),a=JSON.parse('{"Oc":"Fantastic and Premium Colabs","TN":"Our collaborations with clients have been nothing short of an adventure!","ev":[{"link":"https://google.com","label":"Visit Website","image":"/images/brand1.png"},{"link":"https://google.com","label":"Visit Website","image":"/images/brand2.png"},{"link":"https://google.com","label":"Visit Website","image":"/images/brand3.png"},{"link":"https://google.com","label":"Visit Website","image":"/images/brand4.png"},{"link":"https://google.com","label":"Visit Website","image":"/images/brand5.png"},{"link":"https://google.com","label":"Visit Website","image":"/images/brand6.png"},{"link":"https://google.com","label":"Visit Website","image":"/images/brand7.png"},{"link":"https://google.com","label":"Visit Website","image":"/images/brand2.png"}]}');let i=e=>{let{paddingTop:t}=e;return(0,s.jsx)(s.Fragment,{children:(0,s.jsx)("section",{className:t?"onovo-section gap-top-140":"onovo-section",children:(0,s.jsxs)("div",{className:"container",children:[(0,s.jsxs)("div",{className:"onovo-heading gap-bottom-40",children:[(0,s.jsx)("div",{className:"onovo-subtitle-1",children:(0,s.jsx)("span",{dangerouslySetInnerHTML:{__html:a.Oc}})}),(0,s.jsx)("h2",{className:"onovo-title-2",children:(0,s.jsx)("span",{dangerouslySetInnerHTML:{__html:a.TN}})})]}),(0,s.jsx)("div",{className:"row gap-row",children:a.ev.map((e,t)=>(0,s.jsx)("div",{className:"col-6 col-xs-6 col-sm-6 col-md-4 col-lg-3",children:(0,s.jsx)("div",{className:"onovo-brands onovo-hover-3 onovo-hover-label","data-onovo-overlay":!0,"data-onovo-scroll":!0,children:(0,s.jsxs)("a",{target:"_blank",href:e.link,children:[(0,s.jsx)("span",{className:"image",children:(0,s.jsx)("img",{decoding:"async",src:e.image,width:"285",height:"200",alt:e.alt})}),(0,s.jsx)("span",{className:"label onovo-white-black",children:"Visit Website"})]})})},"partners-item-".concat(t)))})]})})})};var o=i},9729:function(e,t,n){"use strict";n.d(t,{Z:function(){return l}});var s=n(5893),a=n(7294),i=JSON.parse('{"PS":"Play Video - Play Video - Play Video -","lX":"Gu6z6kIukgg","Md":"/images/posts1.jpg"}'),o=n(6641);let r=()=>{(0,a.useEffect)(()=>{(0,o.V0)()},[]);let e=e=>{e.preventDefault(),e.target.parentNode.classList.add("active");let t=e.target.parentNode.querySelector(".js-video-iframe"),n=t.dataset.src;t.setAttribute("src",n)};return(0,s.jsx)(s.Fragment,{children:(0,s.jsx)("section",{className:"onovo-section",children:(0,s.jsx)("div",{className:"container",children:(0,s.jsxs)("div",{className:"onovo-video","data-onovo-overlay":!0,"data-onovo-scroll":!0,children:[(0,s.jsx)("div",{className:"image",onClick:t=>e(t),style:{backgroundImage:"url("+i.Md+")"}}),(0,s.jsx)("iframe",{className:"js-video-iframe","data-src":"https://www.youtube.com/embed/"+i.lX+"?showinfo=0&rel=0&autoplay=1"}),(0,s.jsxs)("div",{className:"play onovo-circle-text",onClick:t=>e(t),children:[(0,s.jsx)("div",{className:"arrow"}),(0,s.jsx)("div",{className:"label onovo-text-black onovo-circle-text-label",children:i.PS})]})]})})})})};var l=r},3265:function(e,t,n){"use strict";n.d(t,{Z:function(){return o}});var s=n(5893),a=n(8420),i=n(4900);function o(e){let{dateString:t}=e,n=(0,a.Z)(t);return(0,s.jsx)("time",{dateTime:t,children:(0,i.Z)(n,"LLLL d, yyyy")})}},9683:function(e,t,n){"use strict";n.r(t),n.d(t,{__N_SSG:function(){return O},default:function(){return E}});var s=n(5893),a=n(7294),i=n(47),o=n(5152),r=n.n(o),l=n(6641),c=JSON.parse('{"e":[{"image":"/images/campaign-icon.png","title":"Campaigns","text":"Boost your brand with creativity, sparking memorable experiences that captivate your audience.","link":"/services/service-1"},{"image":"/images/billboard-icon.png","title":"Billboards","text":"Your go-to for outdoor ads worldwide. Choose any billboard, anywhere. Ownership? Doesn\'t matter.","link":"/services/service-2"},{"image":"/images/drone-icon-2.png","title":"AirSign","text":"Go global with your message, regardless of location. grab attention, and rise above the competition.","link":"/services/service-3"}]}'),d=n(1664),u=n.n(d);let m=()=>((0,a.useEffect)(()=>{(0,l.jx)()},[]),(0,s.jsx)(s.Fragment,{children:(0,s.jsx)("section",{className:"onovo-section gap-top-140 gap-bottom-140",children:(0,s.jsx)("div",{className:"container-xl",children:(0,s.jsx)("div",{className:"row onovo-services-grid-fw",children:c.e.map((e,t)=>(0,s.jsx)("div",{className:"col-xs-12 col-sm-12 col-md-6 col-lg-4 align-center",children:(0,s.jsxs)("div",{className:1==t?"onovo-service-grid-item onovo-hover-1 active active--default":"onovo-service-grid-item onovo-hover-1",children:[(0,s.jsx)("div",{className:"image",children:(0,s.jsx)(u(),{href:e.link,children:(0,s.jsx)("img",{decoding:"async",src:e.image,alt:e.title})})}),(0,s.jsx)("h5",{className:"onovo-title-3",children:(0,s.jsx)("a",{href:e.link,children:(0,s.jsx)("span",{children:e.title})})}),(0,s.jsx)("div",{className:"onovo-text",children:(0,s.jsx)("div",{children:(0,s.jsx)("p",{children:e.text})})}),(0,s.jsxs)("div",{className:"onovo-bubble",children:[(0,s.jsx)("div",{className:"bubble-1"}),(0,s.jsx)("div",{className:"bubble-2"}),(0,s.jsx)("div",{className:"bubble-3"})]})]})},"services-item-".concat(t)))})})})}));var h=JSON.parse('{"TN":"AdRe: <br/>Your Time, Your Ads, <br/>Your way !","Oc":"Welcome to","Rx":{"S":"2500+","P":"Screens Reached"},"ev":[{"text":"Diving into the world of  <strong> Digital Out-Of-Home Advertising  isn\'t limited </strong> to large corporations alone. Any organization, regardless of size, can engage with a global audience and showcase their creativity <strong> on a worldwide scale</strong>. Our vision is to empower all entities to connect with audiences across the globe, leveraging the potential of Digital Out-Of-Home Advertising  to share their unique messages and creative endeavors."}]}');let p=()=>(0,s.jsx)(s.Fragment,{children:(0,s.jsx)("section",{className:"onovo-section gap-bottom-140",children:(0,s.jsx)("div",{className:"container",children:(0,s.jsxs)("div",{className:"row",children:[(0,s.jsxs)("div",{className:"col-xs-12 col-sm-12 col-md-12 col-lg-8",children:[(0,s.jsxs)("div",{className:"row",children:[(0,s.jsx)("div",{className:"col-xs-12 col-sm-12 col-md-8 col-lg-12",children:(0,s.jsxs)("div",{className:"onovo-heading gap-bottom-40",children:[(0,s.jsx)("div",{className:"onovo-subtitle-1",children:(0,s.jsx)("span",{children:h.Oc})}),(0,s.jsx)("h2",{className:"onovo-title-2",children:(0,s.jsx)("span",{dangerouslySetInnerHTML:{__html:h.TN}})})]})}),(0,s.jsx)("div",{className:"col-xs-12 col-sm-12 col-md-4 col-lg-12 hide-on-desktop gap-bottom-60",children:(0,s.jsxs)("div",{className:"onovo-number onovo-circle-text mrg-left",children:[(0,s.jsx)("div",{className:"num onovo-text-white",children:(0,s.jsx)("span",{children:h.Rx.S})}),(0,s.jsx)("div",{className:"label onovo-text-black onovo-circle-text-label",children:h.Rx.P})]})})]}),(0,s.jsx)("div",{className:"row",children:h.ev.map((e,t)=>(0,s.jsxs)("div",{className:"col-xs-12 col-sm-12 col-md-4 col-lg-12",children:[(0,s.jsx)("h5",{className:"text-uppercase",children:e.title}),(0,s.jsx)("p",{dangerouslySetInnerHTML:{__html:e.text}}),void 0!=e.button&&(0,s.jsxs)(u(),{className:"onovo-btn onovo-hover-btn",href:e.button.link,children:[(0,s.jsx)("i",{className:"arrow",children:(0,s.jsx)("span",{})}),(0,s.jsx)("span",{children:e.button.label})]})]},"about-item-".concat(t)))})]}),(0,s.jsx)("div",{className:"col-xs-12 col-sm-12 col-md-12 col-lg-4 hide-on-mobile",children:(0,s.jsxs)("div",{className:"onovo-number onovo-circle-text mrg-right",children:[(0,s.jsx)("div",{className:"num onovo-text-white",children:(0,s.jsx)("span",{children:h.Rx.S})}),(0,s.jsx)("div",{className:"label onovo-text-black onovo-circle-text-label",children:h.Rx.P})]})})]})})})});var v=JSON.parse('{"Oc":"Shine Spot","TN":"Product Highlights","LI":{"P":"Dashboard","p":"/projects"},"jX":5}');let f=e=>{let{projects:t}=e;return(0,a.useEffect)(()=>{(0,l.dO)()},[]),(0,s.jsx)(s.Fragment,{children:(0,s.jsx)("section",{className:"onovo-section gap-bottom-140",style:{borderBottom:"1px solid #555"},children:(0,s.jsxs)("div",{className:"container",children:[(0,s.jsxs)("div",{className:"onovo-heading gap-bottom-40",children:[(0,s.jsx)("div",{className:"onovo-subtitle-1",children:(0,s.jsx)("span",{children:v.Oc})}),(0,s.jsx)("h2",{className:"onovo-title-2",children:(0,s.jsx)("span",{children:v.TN})})]}),(0,s.jsxs)("div",{className:"onovo-showcase gap-bottom-40",children:[(0,s.jsx)("div",{className:"img-circle onovo-circle-move"}),(0,s.jsx)("div",{className:"onovo-showcase-items",children:t.slice(0,v.jX).map((e,t)=>(0,s.jsxs)("div",{className:"onovo-showcase-item",children:[(0,s.jsx)("div",{className:"category",children:(0,s.jsx)("a",{href:"/projects/".concat(e.id),children:(0,s.jsx)("span",{"data-splitting":!0,"data-onovo-scroll":!0,children:(0,s.jsx)("span",{children:e.category})})})}),(0,s.jsx)("h3",{className:"title",children:(0,s.jsx)("a",{href:"/projects/".concat(e.id),children:(0,s.jsx)("span",{className:"onovo-lnk","data-splitting":!0,"data-onovo-scroll":!0,children:e.title})})}),(0,s.jsx)("div",{className:"image","data-onovo-overlay":!0,"data-onovo-scroll":!0,children:(0,s.jsx)("span",{className:"img",style:{backgroundImage:"url("+e.image+")"}})})]},"showcase-item-".concat(t)))})]}),(0,s.jsxs)(u(),{className:"onovo-btn onovo-hover-btn",href:v.LI.p,children:[(0,s.jsx)("i",{className:"arrow",children:(0,s.jsx)("span",{})}),(0,s.jsx)("span",{children:v.LI.P})]})]})})})};var g=JSON.parse('{"Oc":"Experts Team Members","TN":"We do awesome Services <br>for our clients.","jX":4}');let x=e=>{let{team:t}=e;return(0,s.jsx)(s.Fragment,{children:(0,s.jsx)("section",{className:"onovo-section gap-top-140 gap-bottom-140",children:(0,s.jsxs)("div",{className:"container",children:[(0,s.jsxs)("div",{className:"onovo-heading align-center gap-bottom-40",children:[(0,s.jsx)("div",{className:"onovo-subtitle-1",children:(0,s.jsx)("span",{children:g.Oc})}),(0,s.jsx)("h2",{className:"onovo-title-2",children:(0,s.jsx)("span",{dangerouslySetInnerHTML:{__html:g.TN}})})]}),(0,s.jsx)("div",{className:"row gap-row",children:t.slice(0,g.jX).map((e,t)=>(0,s.jsx)("div",{className:"col-xs-12 col-sm-12 col-md-6 col-lg-3",children:(0,s.jsx)("div",{className:"onovo-team","data-onovo-overlay":!0,"data-onovo-scroll":!0,children:(0,s.jsxs)("div",{className:"onovo-team-item onovo-hover-3",children:[(0,s.jsxs)("div",{className:"desc",children:[(0,s.jsx)("h5",{className:"title",children:(0,s.jsx)(u(),{href:"/team/".concat(e.id),className:"onovo-lnk",children:(0,s.jsx)("span",{"data-splitting":!0,"data-onovo-scroll":!0,children:e.name})})}),(0,s.jsx)("div",{className:"onovo-subtitle-1",children:(0,s.jsx)("span",{"data-splitting":!0,"data-onovo-scroll":!0,children:e.role})}),(0,s.jsx)("div",{className:"onovo-social-1",children:(0,s.jsx)("ul",{children:e.social.map((e,n)=>(0,s.jsx)("li",{children:(0,s.jsx)("a",{className:"onovo-social-link onovo-hover-2",href:e.link,title:e.title,target:"_blank",children:(0,s.jsx)("i",{"aria-hidden":"true",className:e.icon})})},"team-item-".concat(t,"-social-link-").concat(n)))})})]}),(0,s.jsx)("div",{className:"image",children:(0,s.jsx)(u(),{href:"/team/".concat(e.id),children:(0,s.jsx)("img",{decoding:"async",src:e.image,width:"350",height:"530",alt:e.name})})}),(0,s.jsx)("div",{className:"num onovo-text-white",children:(0,s.jsx)("span",{children:e.first_letter})})]})})},"team-item-".concat(t)))})]})})})};var j=n(9729),b=n(2287),N=n(7741);n(3265);var y=n(4759);let w=r()(()=>Promise.all([n.e(6641),n.e(903)]).then(n.bind(n,4076)),{loadableGenerated:{webpack:()=>[4076]},ssr:!1}),V=r()(()=>Promise.all([n.e(2097),n.e(8264)]).then(n.bind(n,7879)),{loadableGenerated:{webpack:()=>[7879]},ssr:!1});r()(()=>Promise.all([n.e(2097),n.e(2283)]).then(n.bind(n,1563)),{loadableGenerated:{webpack:()=>[1563]},ssr:!1});let S=e=>((0,a.useEffect)(()=>{(0,l.V0)()},[]),(0,s.jsx)(i.Z,{children:(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(w,{}),(0,s.jsx)(m,{}),(0,s.jsx)(p,{}),(0,s.jsx)(V,{}),(0,s.jsx)(f,{projects:e.projects}),(0,s.jsx)(x,{team:e.team}),(0,s.jsx)(j.Z,{}),(0,s.jsx)(b.Z,{}),(0,s.jsx)(N.Z,{}),"\xa0",(0,s.jsx)(y.Z,{})]})}));var O=!0,E=S},7857:function(e,t,n){"use strict";var s=n(7294),a=n(8273);function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,s)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach(function(t){var s,a,i;s=e,a=t,i=n[t],(a=function(e){var t=function(e,t){if("object"!=typeof e||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var s=n.call(e,t||"default");if("object"!=typeof s)return s;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:String(t)}(a))in s?Object.defineProperty(s,a,{value:i,enumerable:!0,configurable:!0,writable:!0}):s[a]=i}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function r(){return(r=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&(e[s]=n[s])}return e}).apply(this,arguments)}function l(e,t){if(null==e)return{};var n,s,a=function(e,t){if(null==e)return{};var n,s,a={},i=Object.keys(e);for(s=0;s<i.length;s++)n=i[s],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(s=0;s<i.length;s++)n=i[s],!(t.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}function c(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,s=Array(t);n<t;n++)s[n]=e[n];return s}var d="undefined"!=typeof window&&void 0!==window.document&&void 0!==window.document.createElement?s.useLayoutEffect:s.useEffect;function u(e){var t=s.useRef(e);return d(function(){t.current=e}),s.useCallback(function(){for(var e=arguments.length,n=Array(e),s=0;s<e;s++)n[s]=arguments[s];return t.current.apply(void 0,n)},[])}var m=function(e,t){var n=t.decimal,s=t.decimals,i=t.duration,o=t.easingFn,r=t.end,l=t.formattingFn,c=t.numerals,d=t.prefix,u=t.separator,m=t.start,h=t.suffix,p=t.useEasing,v=t.useGrouping,f=t.useIndianSeparators,g=t.enableScrollSpy,x=t.scrollSpyDelay,j=t.scrollSpyOnce,b=t.plugin;return new a.CountUp(e,r,{startVal:m,duration:i,decimal:n,decimalPlaces:s,easingFn:o,formattingFn:l,numerals:c,separator:u,prefix:d,suffix:h,plugin:b,useEasing:p,useIndianSeparators:f,useGrouping:v,enableScrollSpy:g,scrollSpyDelay:x,scrollSpyOnce:j})},h=["ref","startOnMount","enableReinitialize","delay","onEnd","onStart","onPauseResume","onReset","onUpdate"],p={decimal:".",separator:",",delay:null,prefix:"",suffix:"",duration:2,start:0,decimals:0,startOnMount:!0,enableReinitialize:!0,useEasing:!0,useGrouping:!0,useIndianSeparators:!1},v=function(e){var t=Object.fromEntries(Object.entries(e).filter(function(e){return void 0!==(function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var s,a,i,o,r=[],l=!0,c=!1;try{if(i=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;l=!1}else for(;!(l=(s=i.call(n)).done)&&(r.push(s.value),r.length!==t);l=!0);}catch(e){c=!0,a=e}finally{try{if(!l&&null!=n.return&&(o=n.return(),Object(o)!==o))return}finally{if(c)throw a}}return r}}(e,2)||function(e,t){if(e){if("string"==typeof e)return c(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if("Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return c(e,t)}}(e,2)||function(){throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}())[1]})),n=s.useMemo(function(){return o(o({},p),t)},[e]),a=n.ref,i=n.startOnMount,r=n.enableReinitialize,d=n.delay,v=n.onEnd,f=n.onStart,g=n.onPauseResume,x=n.onReset,j=n.onUpdate,b=l(n,h),N=s.useRef(),y=s.useRef(),w=s.useRef(!1),V=u(function(){return m("string"==typeof a?a:a.current,b)}),S=u(function(e){var t=N.current;if(t&&!e)return t;var n=V();return N.current=n,n}),O=u(function(){var e=function(){return S(!0).start(function(){null==v||v({pauseResume:E,reset:k,start:F,update:P})})};d&&d>0?y.current=setTimeout(e,1e3*d):e(),null==f||f({pauseResume:E,reset:k,update:P})}),E=u(function(){S().pauseResume(),null==g||g({reset:k,start:F,update:P})}),k=u(function(){S().el&&(y.current&&clearTimeout(y.current),S().reset(),null==x||x({pauseResume:E,start:F,update:P}))}),P=u(function(e){S().update(e),null==j||j({pauseResume:E,reset:k,start:F})}),F=u(function(){k(),O()}),T=u(function(e){i&&(e&&k(),O())});return s.useEffect(function(){w.current?r&&T(!0):(w.current=!0,T())},[r,w,T,d,e.start,e.suffix,e.prefix,e.duration,e.separator,e.decimals,e.decimal,e.formattingFn]),s.useEffect(function(){return function(){k()}},[k]),{start:F,pauseResume:E,reset:k,update:P,getCountUp:S}},f=["className","redraw","containerProps","children","style"];t.ZP=function(e){var t=e.className,n=e.redraw,a=e.containerProps,i=e.children,c=e.style,d=l(e,f),m=s.useRef(null),h=s.useRef(!1),p=v(o(o({},d),{},{ref:m,startOnMount:"function"!=typeof i||0===e.delay,enableReinitialize:!1})),g=p.start,x=p.reset,j=p.update,b=p.pauseResume,N=p.getCountUp,y=u(function(){g()}),w=u(function(t){e.preserveValue||x(),j(t)}),V=u(function(){if("function"==typeof e.children&&!(m.current instanceof Element)){console.error('Couldn\'t find attached element to hook the CountUp instance into! Try to attach "containerRef" from the render prop to a an Element, eg. <span ref={containerRef} />.');return}N()});return(s.useEffect(function(){V()},[V]),s.useEffect(function(){h.current&&w(e.end)},[e.end,w]),s.useEffect(function(){n&&h.current&&y()},[y,n,n&&e]),s.useEffect(function(){!n&&h.current&&y()},[y,n,e.start,e.suffix,e.prefix,e.duration,e.separator,e.decimals,e.decimal,e.className,e.formattingFn]),s.useEffect(function(){h.current=!0},[]),"function"==typeof i)?i({countUpRef:m,start:g,reset:x,update:j,pauseResume:b,getCountUp:N}):s.createElement("span",r({className:t,ref:m,style:c},a),void 0!==e.start?N().formattingFn(e.start):"")}}},function(e){e.O(0,[7142,3790,47,9774,2888,179],function(){return e(e.s=5728)}),_N_E=e.O()}]);