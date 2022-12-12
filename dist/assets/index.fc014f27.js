import{r as Y,c as Bn,j as l,a as h,R as Ra,u as Ma,F as jn,L as ue,D as za,b as Un,d as La}from"./index.c8dbbb75.js";const Wn=(e=!1)=>{const[t,a]=Y.exports.useState(e),r=Y.exports.useCallback(()=>a(n=>!n),[t]);return[t,r,a]},Hn=()=>{const[e,t]=Y.exports.useState(window.innerWidth);return Y.exports.useEffect(()=>{const a=()=>{t(window.innerWidth)};return window.addEventListener("resize",a),()=>{window.removeEventListener("resize",a)}},[]),e};var Yn={},ut={},Ut={},gt={},x={exports:{}},Da="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",Qa=Da,Fa=Qa;function qn(){}function Gn(){}Gn.resetWarningCache=qn;var Ba=function(){function e(r,n,i,o,s,c){if(c!==Fa){var u=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw u.name="Invariant Violation",u}}e.isRequired=e;function t(){return e}var a={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:Gn,resetWarningCache:qn};return a.PropTypes=a,a};x.exports=Ba();var rn;function ja(){return rn||(rn=1,function(e){(function(t,a){a(e,Y.exports,x.exports)})(Bn,function(t,a,r){Object.defineProperty(t,"__esModule",{value:!0}),t.setHasSupportToCaptureOption=N;var n=o(a),i=o(r);function o(p){return p&&p.__esModule?p:{default:p}}var s=Object.assign||function(p){for(var A=1;A<arguments.length;A++){var w=arguments[A];for(var m in w)Object.prototype.hasOwnProperty.call(w,m)&&(p[m]=w[m])}return p};function c(p,A){var w={};for(var m in p)A.indexOf(m)>=0||!Object.prototype.hasOwnProperty.call(p,m)||(w[m]=p[m]);return w}function u(p,A){if(!(p instanceof A))throw new TypeError("Cannot call a class as a function")}var f=function(){function p(A,w){for(var m=0;m<w.length;m++){var k=w[m];k.enumerable=k.enumerable||!1,k.configurable=!0,"value"in k&&(k.writable=!0),Object.defineProperty(A,k.key,k)}}return function(A,w,m){return w&&p(A.prototype,w),m&&p(A,m),A}}();function d(p,A){if(!p)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return A&&(typeof A=="object"||typeof A=="function")?A:p}function g(p,A){if(typeof A!="function"&&A!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof A);p.prototype=Object.create(A&&A.prototype,{constructor:{value:p,enumerable:!1,writable:!0,configurable:!0}}),A&&(Object.setPrototypeOf?Object.setPrototypeOf(p,A):p.__proto__=A)}var y=!1;function N(p){y=p}try{addEventListener("test",null,Object.defineProperty({},"capture",{get:function(){N(!0)}}))}catch{}function T(){var p=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{capture:!0};return y?p:p.capture}function P(p){if("touches"in p){var A=p.touches[0],w=A.pageX,m=A.pageY;return{x:w,y:m}}var k=p.screenX,z=p.screenY;return{x:k,y:z}}var M=function(p){g(A,p);function A(){var w;u(this,A);for(var m=arguments.length,k=Array(m),z=0;z<m;z++)k[z]=arguments[z];var C=d(this,(w=A.__proto__||Object.getPrototypeOf(A)).call.apply(w,[this].concat(k)));return C._handleSwipeStart=C._handleSwipeStart.bind(C),C._handleSwipeMove=C._handleSwipeMove.bind(C),C._handleSwipeEnd=C._handleSwipeEnd.bind(C),C._onMouseDown=C._onMouseDown.bind(C),C._onMouseMove=C._onMouseMove.bind(C),C._onMouseUp=C._onMouseUp.bind(C),C._setSwiperRef=C._setSwiperRef.bind(C),C}return f(A,[{key:"componentDidMount",value:function(){this.swiper&&this.swiper.addEventListener("touchmove",this._handleSwipeMove,T({capture:!0,passive:!1}))}},{key:"componentWillUnmount",value:function(){this.swiper&&this.swiper.removeEventListener("touchmove",this._handleSwipeMove,T({capture:!0,passive:!1}))}},{key:"_onMouseDown",value:function(m){!this.props.allowMouseEvents||(this.mouseDown=!0,document.addEventListener("mouseup",this._onMouseUp),document.addEventListener("mousemove",this._onMouseMove),this._handleSwipeStart(m))}},{key:"_onMouseMove",value:function(m){!this.mouseDown||this._handleSwipeMove(m)}},{key:"_onMouseUp",value:function(m){this.mouseDown=!1,document.removeEventListener("mouseup",this._onMouseUp),document.removeEventListener("mousemove",this._onMouseMove),this._handleSwipeEnd(m)}},{key:"_handleSwipeStart",value:function(m){var k=P(m),z=k.x,C=k.y;this.moveStart={x:z,y:C},this.props.onSwipeStart(m)}},{key:"_handleSwipeMove",value:function(m){if(!!this.moveStart){var k=P(m),z=k.x,C=k.y,F=z-this.moveStart.x,Ue=C-this.moveStart.y;this.moving=!0;var Ta=this.props.onSwipeMove({x:F,y:Ue},m);Ta&&m.cancelable&&m.preventDefault(),this.movePosition={deltaX:F,deltaY:Ue}}}},{key:"_handleSwipeEnd",value:function(m){this.props.onSwipeEnd(m);var k=this.props.tolerance;this.moving&&this.movePosition&&(this.movePosition.deltaX<-k?this.props.onSwipeLeft(1,m):this.movePosition.deltaX>k&&this.props.onSwipeRight(1,m),this.movePosition.deltaY<-k?this.props.onSwipeUp(1,m):this.movePosition.deltaY>k&&this.props.onSwipeDown(1,m)),this.moveStart=null,this.moving=!1,this.movePosition=null}},{key:"_setSwiperRef",value:function(m){this.swiper=m,this.props.innerRef(m)}},{key:"render",value:function(){var m=this.props;m.tagName;var k=m.className,z=m.style,C=m.children;m.allowMouseEvents,m.onSwipeUp,m.onSwipeDown,m.onSwipeLeft,m.onSwipeRight,m.onSwipeStart,m.onSwipeMove,m.onSwipeEnd,m.innerRef,m.tolerance;var F=c(m,["tagName","className","style","children","allowMouseEvents","onSwipeUp","onSwipeDown","onSwipeLeft","onSwipeRight","onSwipeStart","onSwipeMove","onSwipeEnd","innerRef","tolerance"]);return n.default.createElement(this.props.tagName,s({ref:this._setSwiperRef,onMouseDown:this._onMouseDown,onTouchStart:this._handleSwipeStart,onTouchEnd:this._handleSwipeEnd,className:k,style:z},F),C)}}]),A}(a.Component);M.displayName="ReactSwipe",M.propTypes={tagName:i.default.string,className:i.default.string,style:i.default.object,children:i.default.node,allowMouseEvents:i.default.bool,onSwipeUp:i.default.func,onSwipeDown:i.default.func,onSwipeLeft:i.default.func,onSwipeRight:i.default.func,onSwipeStart:i.default.func,onSwipeMove:i.default.func,onSwipeEnd:i.default.func,innerRef:i.default.func,tolerance:i.default.number.isRequired},M.defaultProps={tagName:"div",allowMouseEvents:!1,onSwipeUp:function(){},onSwipeDown:function(){},onSwipeLeft:function(){},onSwipeRight:function(){},onSwipeStart:function(){},onSwipeMove:function(){},onSwipeEnd:function(){},innerRef:function(){},tolerance:0},t.default=M})}(gt)),gt}(function(e){(function(t,a){a(e,ja())})(Bn,function(t,a){Object.defineProperty(t,"__esModule",{value:!0});var r=n(a);function n(i){return i&&i.__esModule?i:{default:i}}t.default=r.default})})(Ut);var ze={},Vn={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/(function(e){(function(){var t={}.hasOwnProperty;function a(){for(var r=[],n=0;n<arguments.length;n++){var i=arguments[n];if(!!i){var o=typeof i;if(o==="string"||o==="number")r.push(i);else if(Array.isArray(i)){if(i.length){var s=a.apply(null,i);s&&r.push(s)}}else if(o==="object"){if(i.toString!==Object.prototype.toString&&!i.toString.toString().includes("[native code]")){r.push(i.toString());continue}for(var c in i)t.call(i,c)&&i[c]&&r.push(c)}}}return r.join(" ")}e.exports?(a.default=a,e.exports=a):window.classNames=a})()})(Vn);Object.defineProperty(ze,"__esModule",{value:!0});ze.default=void 0;var ae=Ua(Vn.exports);function Ua(e){return e&&e.__esModule?e:{default:e}}function Wa(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}var Ha={ROOT:function(t){return(0,ae.default)(Wa({"carousel-root":!0},t||"",!!t))},CAROUSEL:function(t){return(0,ae.default)({carousel:!0,"carousel-slider":t})},WRAPPER:function(t,a){return(0,ae.default)({"thumbs-wrapper":!t,"slider-wrapper":t,"axis-horizontal":a==="horizontal","axis-vertical":a!=="horizontal"})},SLIDER:function(t,a){return(0,ae.default)({thumbs:!t,slider:t,animated:!a})},ITEM:function(t,a,r){return(0,ae.default)({thumb:!t,slide:t,selected:a,previous:r})},ARROW_PREV:function(t){return(0,ae.default)({"control-arrow control-prev":!0,"control-disabled":t})},ARROW_NEXT:function(t){return(0,ae.default)({"control-arrow control-next":!0,"control-disabled":t})},DOT:function(t){return(0,ae.default)({dot:!0,selected:t})}};ze.default=Ha;var Le={},ft={};Object.defineProperty(ft,"__esModule",{value:!0});ft.outerWidth=void 0;var Ya=function(t){var a=t.offsetWidth,r=getComputedStyle(t);return a+=parseInt(r.marginLeft)+parseInt(r.marginRight),a};ft.outerWidth=Ya;var we={};Object.defineProperty(we,"__esModule",{value:!0});we.default=void 0;var qa=function(t,a,r){var n=t===0?t:t+a,i=r==="horizontal"?[n,0,0]:[0,n,0],o="translate3d",s="("+i.join(",")+")";return o+s};we.default=qa;var De={};Object.defineProperty(De,"__esModule",{value:!0});De.default=void 0;var Ga=function(){return window};De.default=Ga;Object.defineProperty(Le,"__esModule",{value:!0});Le.default=void 0;var U=Ka(Y.exports),ce=dt(ze),Va=ft,on=dt(we),Xa=dt(Ut),We=dt(De);function dt(e){return e&&e.__esModule?e:{default:e}}function Xn(){if(typeof WeakMap!="function")return null;var e=new WeakMap;return Xn=function(){return e},e}function Ka(e){if(e&&e.__esModule)return e;if(e===null||ke(e)!=="object"&&typeof e!="function")return{default:e};var t=Xn();if(t&&t.has(e))return t.get(e);var a={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){var i=r?Object.getOwnPropertyDescriptor(e,n):null;i&&(i.get||i.set)?Object.defineProperty(a,n,i):a[n]=e[n]}return a.default=e,t&&t.set(e,a),a}function ke(e){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?ke=function(a){return typeof a}:ke=function(a){return a&&typeof Symbol=="function"&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a},ke(e)}function St(){return St=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e},St.apply(this,arguments)}function Ja(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function sn(e,t){for(var a=0;a<t.length;a++){var r=t[a];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function Za(e,t,a){return t&&sn(e.prototype,t),a&&sn(e,a),e}function $a(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&kt(e,t)}function kt(e,t){return kt=Object.setPrototypeOf||function(r,n){return r.__proto__=n,r},kt(e,t)}function er(e){var t=nr();return function(){var r=at(e),n;if(t){var i=at(this).constructor;n=Reflect.construct(r,arguments,i)}else n=r.apply(this,arguments);return tr(this,n)}}function tr(e,t){return t&&(ke(t)==="object"||typeof t=="function")?t:Q(e)}function Q(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function nr(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch{return!1}}function at(e){return at=Object.setPrototypeOf?Object.getPrototypeOf:function(a){return a.__proto__||Object.getPrototypeOf(a)},at(e)}function D(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}var ar=function(t){return t.hasOwnProperty("key")},Wt=function(e){$a(a,e);var t=er(a);function a(r){var n;return Ja(this,a),n=t.call(this,r),D(Q(n),"itemsWrapperRef",void 0),D(Q(n),"itemsListRef",void 0),D(Q(n),"thumbsRef",void 0),D(Q(n),"setItemsWrapperRef",function(i){n.itemsWrapperRef=i}),D(Q(n),"setItemsListRef",function(i){n.itemsListRef=i}),D(Q(n),"setThumbsRef",function(i,o){n.thumbsRef||(n.thumbsRef=[]),n.thumbsRef[o]=i}),D(Q(n),"updateSizes",function(){if(!(!n.props.children||!n.itemsWrapperRef||!n.thumbsRef)){var i=U.Children.count(n.props.children),o=n.itemsWrapperRef.clientWidth,s=n.props.thumbWidth?n.props.thumbWidth:(0,Va.outerWidth)(n.thumbsRef[0]),c=Math.floor(o/s),u=c<i,f=u?i-c:0;n.setState(function(d,g){return{itemSize:s,visibleItems:c,firstItem:u?n.getFirstItem(g.selectedItem):0,lastPosition:f,showArrows:u}})}}),D(Q(n),"handleClickItem",function(i,o,s){if(!ar(s)||s.key==="Enter"){var c=n.props.onSelectItem;typeof c=="function"&&c(i,o)}}),D(Q(n),"onSwipeStart",function(){n.setState({swiping:!0})}),D(Q(n),"onSwipeEnd",function(){n.setState({swiping:!1})}),D(Q(n),"onSwipeMove",function(i){var o=i.x;if(!n.state.itemSize||!n.itemsWrapperRef||!n.state.visibleItems)return!1;var s=0,c=U.Children.count(n.props.children),u=-(n.state.firstItem*100)/n.state.visibleItems,f=Math.max(c-n.state.visibleItems,0),d=-f*100/n.state.visibleItems;u===s&&o>0&&(o=0),u===d&&o<0&&(o=0);var g=n.itemsWrapperRef.clientWidth,y=u+100/(g/o);return n.itemsListRef&&["WebkitTransform","MozTransform","MsTransform","OTransform","transform","msTransform"].forEach(function(N){n.itemsListRef.style[N]=(0,on.default)(y,"%",n.props.axis)}),!0}),D(Q(n),"slideRight",function(i){n.moveTo(n.state.firstItem-(typeof i=="number"?i:1))}),D(Q(n),"slideLeft",function(i){n.moveTo(n.state.firstItem+(typeof i=="number"?i:1))}),D(Q(n),"moveTo",function(i){i=i<0?0:i,i=i>=n.state.lastPosition?n.state.lastPosition:i,n.setState({firstItem:i})}),n.state={selectedItem:r.selectedItem,swiping:!1,showArrows:!1,firstItem:0,visibleItems:0,lastPosition:0},n}return Za(a,[{key:"componentDidMount",value:function(){this.setupThumbs()}},{key:"componentDidUpdate",value:function(n){this.props.selectedItem!==this.state.selectedItem&&this.setState({selectedItem:this.props.selectedItem,firstItem:this.getFirstItem(this.props.selectedItem)}),this.props.children!==n.children&&this.updateSizes()}},{key:"componentWillUnmount",value:function(){this.destroyThumbs()}},{key:"setupThumbs",value:function(){(0,We.default)().addEventListener("resize",this.updateSizes),(0,We.default)().addEventListener("DOMContentLoaded",this.updateSizes),this.updateSizes()}},{key:"destroyThumbs",value:function(){(0,We.default)().removeEventListener("resize",this.updateSizes),(0,We.default)().removeEventListener("DOMContentLoaded",this.updateSizes)}},{key:"getFirstItem",value:function(n){var i=n;return n>=this.state.lastPosition&&(i=this.state.lastPosition),n<this.state.firstItem+this.state.visibleItems&&(i=this.state.firstItem),n<this.state.firstItem&&(i=n),i}},{key:"renderItems",value:function(){var n=this;return this.props.children.map(function(i,o){var s=ce.default.ITEM(!1,o===n.state.selectedItem),c={key:o,ref:function(f){return n.setThumbsRef(f,o)},className:s,onClick:n.handleClickItem.bind(n,o,n.props.children[o]),onKeyDown:n.handleClickItem.bind(n,o,n.props.children[o]),"aria-label":"".concat(n.props.labels.item," ").concat(o+1),style:{width:n.props.thumbWidth}};return U.default.createElement("li",St({},c,{role:"button",tabIndex:0}),i)})}},{key:"render",value:function(){var n=this;if(!this.props.children)return null;var i=U.Children.count(this.props.children)>1,o=this.state.showArrows&&this.state.firstItem>0,s=this.state.showArrows&&this.state.firstItem<this.state.lastPosition,c={},u=-this.state.firstItem*(this.state.itemSize||0),f=(0,on.default)(u,"px",this.props.axis),d=this.props.transitionTime+"ms";return c={WebkitTransform:f,MozTransform:f,MsTransform:f,OTransform:f,transform:f,msTransform:f,WebkitTransitionDuration:d,MozTransitionDuration:d,MsTransitionDuration:d,OTransitionDuration:d,transitionDuration:d,msTransitionDuration:d},U.default.createElement("div",{className:ce.default.CAROUSEL(!1)},U.default.createElement("div",{className:ce.default.WRAPPER(!1),ref:this.setItemsWrapperRef},U.default.createElement("button",{type:"button",className:ce.default.ARROW_PREV(!o),onClick:function(){return n.slideRight()},"aria-label":this.props.labels.leftArrow}),i?U.default.createElement(Xa.default,{tagName:"ul",className:ce.default.SLIDER(!1,this.state.swiping),onSwipeLeft:this.slideLeft,onSwipeRight:this.slideRight,onSwipeMove:this.onSwipeMove,onSwipeStart:this.onSwipeStart,onSwipeEnd:this.onSwipeEnd,style:c,innerRef:this.setItemsListRef,allowMouseEvents:this.props.emulateTouch},this.renderItems()):U.default.createElement("ul",{className:ce.default.SLIDER(!1,this.state.swiping),ref:function(y){return n.setItemsListRef(y)},style:c},this.renderItems()),U.default.createElement("button",{type:"button",className:ce.default.ARROW_NEXT(!s),onClick:function(){return n.slideLeft()},"aria-label":this.props.labels.rightArrow})))}}]),a}(U.Component);Le.default=Wt;D(Wt,"displayName","Thumbs");D(Wt,"defaultProps",{axis:"horizontal",labels:{leftArrow:"previous slide / item",rightArrow:"next slide / item",item:"slide item"},selectedItem:0,thumbWidth:80,transitionTime:350});var mt={};Object.defineProperty(mt,"__esModule",{value:!0});mt.default=void 0;var rr=function(){return document};mt.default=rr;var B={};Object.defineProperty(B,"__esModule",{value:!0});B.setPosition=B.getPosition=B.isKeyboardEvent=B.defaultStatusFormatter=B.noop=void 0;var ir=Y.exports,or=sr(we);function sr(e){return e&&e.__esModule?e:{default:e}}var lr=function(){};B.noop=lr;var cr=function(t,a){return"".concat(t," of ").concat(a)};B.defaultStatusFormatter=cr;var ur=function(t){return t?t.hasOwnProperty("key"):!1};B.isKeyboardEvent=ur;var fr=function(t,a){if(a.infiniteLoop&&++t,t===0)return 0;var r=ir.Children.count(a.children);if(a.centerMode&&a.axis==="horizontal"){var n=-t*a.centerSlidePercentage,i=r-1;return t&&(t!==i||a.infiniteLoop)?n+=(100-a.centerSlidePercentage)/2:t===i&&(n+=100-a.centerSlidePercentage),n}return-t*100};B.getPosition=fr;var dr=function(t,a){var r={};return["WebkitTransform","MozTransform","MsTransform","OTransform","transform","msTransform"].forEach(function(n){r[n]=(0,or.default)(t,"%",a)}),r};B.setPosition=dr;var V={};Object.defineProperty(V,"__esModule",{value:!0});V.fadeAnimationHandler=V.slideStopSwipingHandler=V.slideSwipeAnimationHandler=V.slideAnimationHandler=void 0;var Kn=Y.exports,mr=pr(we),X=B;function pr(e){return e&&e.__esModule?e:{default:e}}function ln(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable})),a.push.apply(a,r)}return a}function fe(e){for(var t=1;t<arguments.length;t++){var a=arguments[t]!=null?arguments[t]:{};t%2?ln(Object(a),!0).forEach(function(r){vr(e,r,a[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):ln(Object(a)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(a,r))})}return e}function vr(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}var hr=function(t,a){var r={},n=a.selectedItem,i=n,o=Kn.Children.count(t.children)-1,s=t.infiniteLoop&&(n<0||n>o);if(s)return i<0?t.centerMode&&t.centerSlidePercentage&&t.axis==="horizontal"?r.itemListStyle=(0,X.setPosition)(-(o+2)*t.centerSlidePercentage-(100-t.centerSlidePercentage)/2,t.axis):r.itemListStyle=(0,X.setPosition)(-(o+2)*100,t.axis):i>o&&(r.itemListStyle=(0,X.setPosition)(0,t.axis)),r;var c=(0,X.getPosition)(n,t),u=(0,mr.default)(c,"%",t.axis),f=t.transitionTime+"ms";return r.itemListStyle={WebkitTransform:u,msTransform:u,OTransform:u,transform:u},a.swiping||(r.itemListStyle=fe(fe({},r.itemListStyle),{},{WebkitTransitionDuration:f,MozTransitionDuration:f,OTransitionDuration:f,transitionDuration:f,msTransitionDuration:f})),r};V.slideAnimationHandler=hr;var br=function(t,a,r,n){var i={},o=a.axis==="horizontal",s=Kn.Children.count(a.children),c=0,u=(0,X.getPosition)(r.selectedItem,a),f=a.infiniteLoop?(0,X.getPosition)(s-1,a)-100:(0,X.getPosition)(s-1,a),d=o?t.x:t.y,g=d;u===c&&d>0&&(g=0),u===f&&d<0&&(g=0);var y=u+100/(r.itemSize/g),N=Math.abs(d)>a.swipeScrollTolerance;return a.infiniteLoop&&N&&(r.selectedItem===0&&y>-100?y-=s*100:r.selectedItem===s-1&&y<-s*100&&(y+=s*100)),(!a.preventMovementUntilSwipeScrollTolerance||N||r.swipeMovementStarted)&&(r.swipeMovementStarted||n({swipeMovementStarted:!0}),i.itemListStyle=(0,X.setPosition)(y,a.axis)),N&&!r.cancelClick&&n({cancelClick:!0}),i};V.slideSwipeAnimationHandler=br;var gr=function(t,a){var r=(0,X.getPosition)(a.selectedItem,t),n=(0,X.setPosition)(r,t.axis);return{itemListStyle:n}};V.slideStopSwipingHandler=gr;var yr=function(t,a){var r=t.transitionTime+"ms",n="ease-in-out",i={position:"absolute",display:"block",zIndex:-2,minHeight:"100%",opacity:0,top:0,right:0,left:0,bottom:0,transitionTimingFunction:n,msTransitionTimingFunction:n,MozTransitionTimingFunction:n,WebkitTransitionTimingFunction:n,OTransitionTimingFunction:n};return a.swiping||(i=fe(fe({},i),{},{WebkitTransitionDuration:r,MozTransitionDuration:r,OTransitionDuration:r,transitionDuration:r,msTransitionDuration:r})),{slideStyle:i,selectedStyle:fe(fe({},i),{},{opacity:1,position:"relative"}),prevStyle:fe({},i)}};V.fadeAnimationHandler=yr;Object.defineProperty(ut,"__esModule",{value:!0});ut.default=void 0;var O=xr(Y.exports),Ar=Qe(Ut),Z=Qe(ze),wr=Qe(Le),He=Qe(mt),Ye=Qe(De),Ee=B,rt=V;function Qe(e){return e&&e.__esModule?e:{default:e}}function Jn(){if(typeof WeakMap!="function")return null;var e=new WeakMap;return Jn=function(){return e},e}function xr(e){if(e&&e.__esModule)return e;if(e===null||Ne(e)!=="object"&&typeof e!="function")return{default:e};var t=Jn();if(t&&t.has(e))return t.get(e);var a={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){var i=r?Object.getOwnPropertyDescriptor(e,n):null;i&&(i.get||i.set)?Object.defineProperty(a,n,i):a[n]=e[n]}return a.default=e,t&&t.set(e,a),a}function Ne(e){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?Ne=function(a){return typeof a}:Ne=function(a){return a&&typeof Symbol=="function"&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a},Ne(e)}function Nt(){return Nt=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e},Nt.apply(this,arguments)}function cn(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable})),a.push.apply(a,r)}return a}function W(e){for(var t=1;t<arguments.length;t++){var a=arguments[t]!=null?arguments[t]:{};t%2?cn(Object(a),!0).forEach(function(r){E(e,r,a[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):cn(Object(a)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(a,r))})}return e}function Er(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function un(e,t){for(var a=0;a<t.length;a++){var r=t[a];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function Sr(e,t,a){return t&&un(e.prototype,t),a&&un(e,a),e}function kr(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&Ct(e,t)}function Ct(e,t){return Ct=Object.setPrototypeOf||function(r,n){return r.__proto__=n,r},Ct(e,t)}function Nr(e){var t=Or();return function(){var r=it(e),n;if(t){var i=it(this).constructor;n=Reflect.construct(r,arguments,i)}else n=r.apply(this,arguments);return Cr(this,n)}}function Cr(e,t){return t&&(Ne(t)==="object"||typeof t=="function")?t:S(e)}function S(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function Or(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch{return!1}}function it(e){return it=Object.setPrototypeOf?Object.getPrototypeOf:function(a){return a.__proto__||Object.getPrototypeOf(a)},it(e)}function E(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}var Ht=function(e){kr(a,e);var t=Nr(a);function a(r){var n;Er(this,a),n=t.call(this,r),E(S(n),"thumbsRef",void 0),E(S(n),"carouselWrapperRef",void 0),E(S(n),"listRef",void 0),E(S(n),"itemsRef",void 0),E(S(n),"timer",void 0),E(S(n),"animationHandler",void 0),E(S(n),"setThumbsRef",function(o){n.thumbsRef=o}),E(S(n),"setCarouselWrapperRef",function(o){n.carouselWrapperRef=o}),E(S(n),"setListRef",function(o){n.listRef=o}),E(S(n),"setItemsRef",function(o,s){n.itemsRef||(n.itemsRef=[]),n.itemsRef[s]=o}),E(S(n),"autoPlay",function(){O.Children.count(n.props.children)<=1||(n.clearAutoPlay(),n.props.autoPlay&&(n.timer=setTimeout(function(){n.increment()},n.props.interval)))}),E(S(n),"clearAutoPlay",function(){n.timer&&clearTimeout(n.timer)}),E(S(n),"resetAutoPlay",function(){n.clearAutoPlay(),n.autoPlay()}),E(S(n),"stopOnHover",function(){n.setState({isMouseEntered:!0},n.clearAutoPlay)}),E(S(n),"startOnLeave",function(){n.setState({isMouseEntered:!1},n.autoPlay)}),E(S(n),"isFocusWithinTheCarousel",function(){return n.carouselWrapperRef?!!((0,He.default)().activeElement===n.carouselWrapperRef||n.carouselWrapperRef.contains((0,He.default)().activeElement)):!1}),E(S(n),"navigateWithKeyboard",function(o){if(!!n.isFocusWithinTheCarousel()){var s=n.props.axis,c=s==="horizontal",u={ArrowUp:38,ArrowRight:39,ArrowDown:40,ArrowLeft:37},f=c?u.ArrowRight:u.ArrowDown,d=c?u.ArrowLeft:u.ArrowUp;f===o.keyCode?n.increment():d===o.keyCode&&n.decrement()}}),E(S(n),"updateSizes",function(){if(!(!n.state.initialized||!n.itemsRef||n.itemsRef.length===0)){var o=n.props.axis==="horizontal",s=n.itemsRef[0];if(!!s){var c=o?s.clientWidth:s.clientHeight;n.setState({itemSize:c}),n.thumbsRef&&n.thumbsRef.updateSizes()}}}),E(S(n),"setMountState",function(){n.setState({hasMount:!0}),n.updateSizes()}),E(S(n),"handleClickItem",function(o,s){if(O.Children.count(n.props.children)!==0){if(n.state.cancelClick){n.setState({cancelClick:!1});return}n.props.onClickItem(o,s),o!==n.state.selectedItem&&n.setState({selectedItem:o})}}),E(S(n),"handleOnChange",function(o,s){O.Children.count(n.props.children)<=1||n.props.onChange(o,s)}),E(S(n),"handleClickThumb",function(o,s){n.props.onClickThumb(o,s),n.moveTo(o)}),E(S(n),"onSwipeStart",function(o){n.setState({swiping:!0}),n.props.onSwipeStart(o)}),E(S(n),"onSwipeEnd",function(o){n.setState({swiping:!1,cancelClick:!1,swipeMovementStarted:!1}),n.props.onSwipeEnd(o),n.clearAutoPlay(),n.state.autoPlay&&n.autoPlay()}),E(S(n),"onSwipeMove",function(o,s){n.props.onSwipeMove(s);var c=n.props.swipeAnimationHandler(o,n.props,n.state,n.setState.bind(S(n)));return n.setState(W({},c)),!!Object.keys(c).length}),E(S(n),"decrement",function(){var o=arguments.length>0&&arguments[0]!==void 0?arguments[0]:1;n.moveTo(n.state.selectedItem-(typeof o=="number"?o:1))}),E(S(n),"increment",function(){var o=arguments.length>0&&arguments[0]!==void 0?arguments[0]:1;n.moveTo(n.state.selectedItem+(typeof o=="number"?o:1))}),E(S(n),"moveTo",function(o){if(typeof o=="number"){var s=O.Children.count(n.props.children)-1;o<0&&(o=n.props.infiniteLoop?s:0),o>s&&(o=n.props.infiniteLoop?0:s),n.selectItem({selectedItem:o}),n.state.autoPlay&&n.state.isMouseEntered===!1&&n.resetAutoPlay()}}),E(S(n),"onClickNext",function(){n.increment(1)}),E(S(n),"onClickPrev",function(){n.decrement(1)}),E(S(n),"onSwipeForward",function(){n.increment(1),n.props.emulateTouch&&n.setState({cancelClick:!0})}),E(S(n),"onSwipeBackwards",function(){n.decrement(1),n.props.emulateTouch&&n.setState({cancelClick:!0})}),E(S(n),"changeItem",function(o){return function(s){(!(0,Ee.isKeyboardEvent)(s)||s.key==="Enter")&&n.moveTo(o)}}),E(S(n),"selectItem",function(o){n.setState(W({previousItem:n.state.selectedItem},o),function(){n.setState(n.animationHandler(n.props,n.state))}),n.handleOnChange(o.selectedItem,O.Children.toArray(n.props.children)[o.selectedItem])}),E(S(n),"getInitialImage",function(){var o=n.props.selectedItem,s=n.itemsRef&&n.itemsRef[o],c=s&&s.getElementsByTagName("img")||[];return c[0]}),E(S(n),"getVariableItemHeight",function(o){var s=n.itemsRef&&n.itemsRef[o];if(n.state.hasMount&&s&&s.children.length){var c=s.children[0].getElementsByTagName("img")||[];if(c.length>0){var u=c[0];if(!u.complete){var f=function y(){n.forceUpdate(),u.removeEventListener("load",y)};u.addEventListener("load",f)}}var d=c[0]||s.children[0],g=d.clientHeight;return g>0?g:null}return null});var i={initialized:!1,previousItem:r.selectedItem,selectedItem:r.selectedItem,hasMount:!1,isMouseEntered:!1,autoPlay:r.autoPlay,swiping:!1,swipeMovementStarted:!1,cancelClick:!1,itemSize:1,itemListStyle:{},slideStyle:{},selectedStyle:{},prevStyle:{}};return n.animationHandler=typeof r.animationHandler=="function"&&r.animationHandler||r.animationHandler==="fade"&&rt.fadeAnimationHandler||rt.slideAnimationHandler,n.state=W(W({},i),n.animationHandler(r,i)),n}return Sr(a,[{key:"componentDidMount",value:function(){!this.props.children||this.setupCarousel()}},{key:"componentDidUpdate",value:function(n,i){!n.children&&this.props.children&&!this.state.initialized&&this.setupCarousel(),!n.autoFocus&&this.props.autoFocus&&this.forceFocus(),i.swiping&&!this.state.swiping&&this.setState(W({},this.props.stopSwipingHandler(this.props,this.state))),(n.selectedItem!==this.props.selectedItem||n.centerMode!==this.props.centerMode)&&(this.updateSizes(),this.moveTo(this.props.selectedItem)),n.autoPlay!==this.props.autoPlay&&(this.props.autoPlay?this.setupAutoPlay():this.destroyAutoPlay(),this.setState({autoPlay:this.props.autoPlay}))}},{key:"componentWillUnmount",value:function(){this.destroyCarousel()}},{key:"setupCarousel",value:function(){var n=this;this.bindEvents(),this.state.autoPlay&&O.Children.count(this.props.children)>1&&this.setupAutoPlay(),this.props.autoFocus&&this.forceFocus(),this.setState({initialized:!0},function(){var i=n.getInitialImage();i&&!i.complete?i.addEventListener("load",n.setMountState):n.setMountState()})}},{key:"destroyCarousel",value:function(){this.state.initialized&&(this.unbindEvents(),this.destroyAutoPlay())}},{key:"setupAutoPlay",value:function(){this.autoPlay();var n=this.carouselWrapperRef;this.props.stopOnHover&&n&&(n.addEventListener("mouseenter",this.stopOnHover),n.addEventListener("mouseleave",this.startOnLeave))}},{key:"destroyAutoPlay",value:function(){this.clearAutoPlay();var n=this.carouselWrapperRef;this.props.stopOnHover&&n&&(n.removeEventListener("mouseenter",this.stopOnHover),n.removeEventListener("mouseleave",this.startOnLeave))}},{key:"bindEvents",value:function(){(0,Ye.default)().addEventListener("resize",this.updateSizes),(0,Ye.default)().addEventListener("DOMContentLoaded",this.updateSizes),this.props.useKeyboardArrows&&(0,He.default)().addEventListener("keydown",this.navigateWithKeyboard)}},{key:"unbindEvents",value:function(){(0,Ye.default)().removeEventListener("resize",this.updateSizes),(0,Ye.default)().removeEventListener("DOMContentLoaded",this.updateSizes);var n=this.getInitialImage();n&&n.removeEventListener("load",this.setMountState),this.props.useKeyboardArrows&&(0,He.default)().removeEventListener("keydown",this.navigateWithKeyboard)}},{key:"forceFocus",value:function(){var n;(n=this.carouselWrapperRef)===null||n===void 0||n.focus()}},{key:"renderItems",value:function(n){var i=this;return this.props.children?O.Children.map(this.props.children,function(o,s){var c=s===i.state.selectedItem,u=s===i.state.previousItem,f=c&&i.state.selectedStyle||u&&i.state.prevStyle||i.state.slideStyle||{};i.props.centerMode&&i.props.axis==="horizontal"&&(f=W(W({},f),{},{minWidth:i.props.centerSlidePercentage+"%"})),i.state.swiping&&i.state.swipeMovementStarted&&(f=W(W({},f),{},{pointerEvents:"none"}));var d={ref:function(y){return i.setItemsRef(y,s)},key:"itemKey"+s+(n?"clone":""),className:Z.default.ITEM(!0,s===i.state.selectedItem,s===i.state.previousItem),onClick:i.handleClickItem.bind(i,s,o),style:f};return O.default.createElement("li",d,i.props.renderItem(o,{isSelected:s===i.state.selectedItem,isPrevious:s===i.state.previousItem}))}):[]}},{key:"renderControls",value:function(){var n=this,i=this.props,o=i.showIndicators,s=i.labels,c=i.renderIndicator,u=i.children;return o?O.default.createElement("ul",{className:"control-dots"},O.Children.map(u,function(f,d){return c&&c(n.changeItem(d),d===n.state.selectedItem,d,s.item)})):null}},{key:"renderStatus",value:function(){return this.props.showStatus?O.default.createElement("p",{className:"carousel-status"},this.props.statusFormatter(this.state.selectedItem+1,O.Children.count(this.props.children))):null}},{key:"renderThumbs",value:function(){return!this.props.showThumbs||!this.props.children||O.Children.count(this.props.children)===0?null:O.default.createElement(wr.default,{ref:this.setThumbsRef,onSelectItem:this.handleClickThumb,selectedItem:this.state.selectedItem,transitionTime:this.props.transitionTime,thumbWidth:this.props.thumbWidth,labels:this.props.labels,emulateTouch:this.props.emulateTouch},this.props.renderThumbs(this.props.children))}},{key:"render",value:function(){var n=this;if(!this.props.children||O.Children.count(this.props.children)===0)return null;var i=this.props.swipeable&&O.Children.count(this.props.children)>1,o=this.props.axis==="horizontal",s=this.props.showArrows&&O.Children.count(this.props.children)>1,c=s&&(this.state.selectedItem>0||this.props.infiniteLoop)||!1,u=s&&(this.state.selectedItem<O.Children.count(this.props.children)-1||this.props.infiniteLoop)||!1,f=this.renderItems(!0),d=f.shift(),g=f.pop(),y={className:Z.default.SLIDER(!0,this.state.swiping),onSwipeMove:this.onSwipeMove,onSwipeStart:this.onSwipeStart,onSwipeEnd:this.onSwipeEnd,style:this.state.itemListStyle,tolerance:this.props.swipeScrollTolerance},N={};if(o){if(y.onSwipeLeft=this.onSwipeForward,y.onSwipeRight=this.onSwipeBackwards,this.props.dynamicHeight){var T=this.getVariableItemHeight(this.state.selectedItem);N.height=T||"auto"}}else y.onSwipeUp=this.props.verticalSwipe==="natural"?this.onSwipeBackwards:this.onSwipeForward,y.onSwipeDown=this.props.verticalSwipe==="natural"?this.onSwipeForward:this.onSwipeBackwards,y.style=W(W({},y.style),{},{height:this.state.itemSize}),N.height=this.state.itemSize;return O.default.createElement("div",{"aria-label":this.props.ariaLabel,className:Z.default.ROOT(this.props.className),ref:this.setCarouselWrapperRef,tabIndex:this.props.useKeyboardArrows?0:void 0},O.default.createElement("div",{className:Z.default.CAROUSEL(!0),style:{width:this.props.width}},this.renderControls(),this.props.renderArrowPrev(this.onClickPrev,c,this.props.labels.leftArrow),O.default.createElement("div",{className:Z.default.WRAPPER(!0,this.props.axis),style:N},i?O.default.createElement(Ar.default,Nt({tagName:"ul",innerRef:this.setListRef},y,{allowMouseEvents:this.props.emulateTouch}),this.props.infiniteLoop&&g,this.renderItems(),this.props.infiniteLoop&&d):O.default.createElement("ul",{className:Z.default.SLIDER(!0,this.state.swiping),ref:function(M){return n.setListRef(M)},style:this.state.itemListStyle||{}},this.props.infiniteLoop&&g,this.renderItems(),this.props.infiniteLoop&&d)),this.props.renderArrowNext(this.onClickNext,u,this.props.labels.rightArrow),this.renderStatus()),this.renderThumbs())}}]),a}(O.default.Component);ut.default=Ht;E(Ht,"displayName","Carousel");E(Ht,"defaultProps",{ariaLabel:void 0,axis:"horizontal",centerSlidePercentage:80,interval:3e3,labels:{leftArrow:"previous slide / item",rightArrow:"next slide / item",item:"slide item"},onClickItem:Ee.noop,onClickThumb:Ee.noop,onChange:Ee.noop,onSwipeStart:function(){},onSwipeEnd:function(){},onSwipeMove:function(){return!1},preventMovementUntilSwipeScrollTolerance:!1,renderArrowPrev:function(t,a,r){return O.default.createElement("button",{type:"button","aria-label":r,className:Z.default.ARROW_PREV(!a),onClick:t})},renderArrowNext:function(t,a,r){return O.default.createElement("button",{type:"button","aria-label":r,className:Z.default.ARROW_NEXT(!a),onClick:t})},renderIndicator:function(t,a,r,n){return O.default.createElement("li",{className:Z.default.DOT(a),onClick:t,onKeyDown:t,value:r,key:r,role:"button",tabIndex:0,"aria-label":"".concat(n," ").concat(r+1)})},renderItem:function(t){return t},renderThumbs:function(t){var a=O.Children.map(t,function(r){var n=r;if(r.type!=="img"&&(n=O.Children.toArray(r.props.children).find(function(i){return i.type==="img"})),!!n)return n});return a.filter(function(r){return r}).length===0?(console.warn("No images found! Can't build the thumb list without images. If you don't need thumbs, set showThumbs={false} in the Carousel. Note that it's not possible to get images rendered inside custom components. More info at https://github.com/leandrowd/react-responsive-carousel/blob/master/TROUBLESHOOTING.md"),[]):a},statusFormatter:Ee.defaultStatusFormatter,selectedItem:0,showArrows:!0,showIndicators:!0,showStatus:!0,showThumbs:!0,stopOnHover:!0,swipeScrollTolerance:5,swipeable:!0,transitionTime:350,verticalSwipe:"standard",width:"100%",animationHandler:"slide",swipeAnimationHandler:rt.slideSwipeAnimationHandler,stopSwipingHandler:rt.slideStopSwipingHandler});var Pr={};(function(e){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"Carousel",{enumerable:!0,get:function(){return t.default}}),Object.defineProperty(e,"CarouselProps",{enumerable:!0,get:function(){return a.CarouselProps}}),Object.defineProperty(e,"Thumbs",{enumerable:!0,get:function(){return r.default}});var t=n(ut),a=Pr,r=n(Le);function n(i){return i&&i.__esModule?i:{default:i}}})(Yn);const Ir="/online-telecom/assets/online_alimentos.46e967b4.png",_r="/online-telecom/assets/online_combo.2baa5824.png",Tr="/online-telecom/assets/online_esportes.0b2d9789.png",Rr="/online-telecom/assets/online_leitura.7aa3691d.png",Mr="/online-telecom/assets/online_music.142ff5ef.png",zr="/online-telecom/assets/online_video01.04f622d3.png",Lr="/online-telecom/assets/online_video02.cb72dfe8.png",Dr="/online-telecom/assets/online_alimentos.a54db1fe.png",Qr="/online-telecom/assets/online_combo.8f1a7cfa.png",Fr="/online-telecom/assets/online_esportes.e135e64f.png",Br="/online-telecom/assets/online_leitura.817c6b26.png",jr="/online-telecom/assets/online_music.d74c3982.png",Ur="/online-telecom/assets/online_video01.ad525d6c.png",Wr="/online-telecom/assets/online_video02.94bbfc93.png",Hr={banners:[Ir,zr,Tr,Mr,Rr,Lr,_r]},Yr={banners:[Dr,Ur,Fr,jr,Br,Wr,Qr]},qr=()=>{const e=Hn()>=580?Hr.banners:Yr.banners;return l(Yn.Carousel,{className:"carousel",showStatus:!1,autoPlay:!0,interval:6e3,infiniteLoop:!0,showThumbs:!1,emulateTouch:!0,showArrows:!1,preventMovementUntilSwipeScrollTolerance:!0,swipeScrollTolerance:50,renderIndicator:(t,a)=>{const r={width:"12px",height:"12px",borderRadius:"100%",margin:"0px 5px",background:"transparent",border:"1px white solid",cursor:"pointer",transition:"background 0.2s ease"},n={...r,background:"white"};return l("div",{style:{display:"inline-flex"},children:l("span",{onClick:t,style:a?n:r})})},children:e.map((t,a)=>l("div",{children:l("img",{src:t,alt:"banner"})},a))})};const Gr="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAFkSURBVHgBnVPRTYRAEJ1ZDqOJH1cCVuCaQOATK9AOjBUcVnBQgViBsQJDBcefeBCzV4GUwJcxOdhxIBezwTOevI/NzmTe7OzbtwgjhFLOP2ZHCwSQQCSHJEKtNTxZepsXStVmPZqB73kLIoo5qUBDRkg1ong2awgwXlfr5EcD3/XugfAaUd8WVZUbeRpPqQHSsirv+r3ol8B1lwO5E5cm+TcwKfJdPxomCKR0aGa/a4SLsizVuHjfBDs0J+32THTCDjnI95H/QC92NBOCbjjIYAL6lxJ8d6frVZ/Ugc4HEQXRHCaCG5BCRAemgKAWiLDhWa5gApDdKT7bNuV3kq7rhvBfaCsXSqnG0pRYiI+9Jw7lsqWTQhX1IOLLW5WC1hnZ9srzPHkA+4H/Qzxcw8yzpWPuvORt3mnKWGJlAa6+eQQNIiWvFR+4A46bBzJwQHQh9QZjjwxEJMWjbo7b0zRXeWPWfwFIOpHJDy738gAAAABJRU5ErkJggg==",Vr="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAAAXNSR0IB2cksfwAAAAlwSFlzAAALEwAACxMBAJqcGAAAAHhQTFRFAAAAv8/PycvJyMvJyMzKyMvKys3Kx8/PyMrKycvLyMvLyM3LyczMyMvKyMvKyMzJx8vLysvKx8vLx8/HyMvIysrKyMvKycvJyMvLyMvJy8vLyMrKyMzLx8vLx83Kz8/PycvKxs3LyMzMyMzKy83LyczKycvLv8+/WdiUFQAAACh0Uk5TABB/r9+/YCBv779wUP+P30CPfyBwMO+AcLBA36+AYBDvcJCQcO+vEPqKBlYAAACBSURBVHicXc/rEoIgEAXgoy1S5GZlXoKwe73/G7aMMYrnB7Pnm1kGAEmWr4hUofHPemO2JUvyse+qvZwB+BD6saoRgU+A5gYTtBkKhRlwB9MncAbZBByoXMAlXVHw6aUDrjc7B3nT3ekJujA+XBPhOa57Vi8r9d3H79aDIfr4b5h/OT0JK8F8x2IAAAAASUVORK5CYII=",Xr="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAgAAAAIAAQMAAADOtka5AAAAAXNSR0IB2cksfwAAAAlwSFlzAAALEwAACxMBAJqcGAAAAAZQTFRFAAAA////pdmf3QAAAAJ0Uk5TAP9bkSK1AAAHdklEQVR4nO2cTZIcKwyEPeGFl30EjsLR4GgchSN4OYuJKfdfUfykpITZvBdBLkEkSPo87o4q+tevra2tra2tra2tra2tra2tra2tra2tra3/pz6+5+JD7AaO43NmvTuOduDPcRy9p6KPe3huRvx95C9vcLuHfzUjxzCi6rFfk8Pvx8BEGR/hR+qONFGEj2d4nfLzSF1ZFP05+pTDYKnqdeA65ecAT4J7xV8Dr5z4NrwOXNXslVMPl6x3eC4Dt6O3VPU+cFWzd05NZxX9Pvqa+eFMqs6Mr5qF4UyqzoyvPh7DmVSdGZein0Vh+3hmXIp+FoX953RmXIp+FoUFoYTn98CtjERlWVHJuBS9FIUDoWRcil6KwoFwZXwWvRSFA+HK+Cx6GeBAuDJ+F/0qCgfClfG76FdROBCujN9Fv4rCgVCF5+fArRqJ9voq43fRq6IwIFQZv4teFYUBoc74VfSqKAwIdcavolcDDAh1xsdgQIBQZ/wsel1VBoQ642fR66oyIDTh+VdbVQKE5sDPot+akWQZtAd+FL2pqg1Ce+BH0Zuq2iDcBoOmqjYI7YEfXWsGbBDaAx99VW0Q2gPfu9YZmCAcvcHvYURVv18aDJJu0Ifnrq8mCGP4rRsxQBjD+xEDBDcY9CMGCH7YrzcwQAiDQW9pgNBHf40GUVvfY4AMkmbQY4AMsmbQY3A3CP2QCkLf9HvNBwMVBEcYqCAMCX8PfdFBGLY7RgMVBBA9DkV5/YABNEiywYABNMiywYABNFBAGDCABgoIjjJQQPCUgQJCoAwUEFAwGIvSeoABNEiSAcAAGmTJAGAADUQQAAbQQATBkQYiCJ40EEEIpIEIAoxFgxGvRxgc8FgJGyAMwB/VQwQBYYANBBAQBt+wNQIIDoSC/9oOEQQcikYFEFC22EAAAUV+wcQwCBCD8SPOUwkZIAzuBqg3GASEwb3jwjCQsBU0gCDAZDPODILgUeT4YfspCELABrA5EAQYGOXxXuJOwskGwVwPqTZ5NIDt+pYMAAgQgy+pvQAEMU507iSeVMytU0BxWatuJxiWxP7Gfr0SJlo3Ug4a0EzuDZRSeTQ1gKA0y6GpAQQligNBOScHQkBR2apvJRiUrA5fUoMU8yL1mAHN5dZALZRHkx0IaqscmuxAUGMYENRTMiAEFHPWiQEBhpydIkAwQlR75pABzebawCiTR9MNCEajHJpuQDAibBCMM9ogBBRxVckGAQZcfTJBMAOMDewjBjR/pWgXyaOACgSzTQ4FfPLz5g7WCc0cA5qvamRWGU5XXbL6TPzB0Lcg/mQFFFGSJP5oehRSykz82XYo5JObJfbQz0dkGdBsbgz0OsPJ1BionaY+QGibUB9hAorJTIGIQlMf4xwK+rTnirRdtNMVaXkGNJc7A63ScCp1BkqvyS8U8jbkV5qAorJVnkoehf21GlTJobBPfaaRvI98tkZypgHN5MFArjWcSIOB2G0SA3kj9putmCr73VosNvvtXmy3ND5I2kk62SAp14DGMzCQqg2HEzAQ+k1jIG1FYyAlS2MglZvGQGo4HoUGeC98LmiAsw1oNEMDXG+oBA1wx6EiNMAgQOH1GAQk6SGMZw2kx0CONZAeREEQkKRHYRAEpCwY0CAkwYAGIQoGNAjSehYE+aGs5wzkx8KOM5AfTJMgyI/GSRCyaECCkEQDEoQoGpAgyOs5ELSXNDxjoL0m4hgD7UUVCgTtVRkKhKwYUCAkxYACISoGFAjaegYE/aUtbxvor40520B/cY0AQX91jgAhqwYECEk1IECIqgEBgr7eBsF6idNbBtZrpM4ysF5kNUGwXqU1QciGgQlCMgxMEKJhYIJgrbdAsF/q9rqB/Vq50w3sF9sNEOxX6w0QsmlggJBMAwOEaBoYINjrdRCYSx5eM2CumTjNgLnoooLAXLVRQciEgQpCIgxUECJhoILArNdA4C59edmAu3bmZAPu4psCAnf1TgEhUwYKCIkyUECIlIECArdeBoG9SuslA/YWqZMM2HusIgjsTVoRhEwaiCAk0kAEIZIGIgjsegkE/ka1xwb8nW6HDfiL7QII/LV0AYRMGwggJNpAACHSBgII/HoMwszvE3hkMHG1n3+mIAmCMPHrBBiEPGEAQUgTBhCEOGEw9T49VBjXz/1MhR8NZjCAIEz9zAUCYQYDCEKeMgAgpCkDAEKcMpi8aAUU+vWTv1YygjCHAQBhDgMAwhwGAIQ8aTCAkCYNBhDipMEAwuz6HoRZDAYQZjEYQJjFYABhFoMBhDxt0IGQpg06EOK0QQfC/PoWhHkMOhDmMehAmMegA2Eegw6EvGDQgJAWDBoQ4oJBA8LK+hqEFQwaEFYwaEBYwaABYQWDBoS8ZFCBkJYMKhDikkEFwtr6C4Q1DCoQ1jCoQFjDoAJhDYMKhLxoUEBIiwYFhLhoUEBYXX+CsIpBAWEVgwLCKgYFhFUMSh/zssHHD7t49nF9/asN6118t2G9Ce9/TvkHBh8/rOGzCOscPvTnZxncdVvHcGtra2tra2tra2tra2tra2tra2tra2vrv6l/trxdWjbY2mMAAAAASUVORK5CYII=",Kr="/online-telecom/assets/chevrondown_icon.ce64683f.png",Zn="data:image/webp;base64,UklGRoYIAABXRUJQVlA4WAoAAAAQAAAAZwAAUAAAQUxQSDYGAAABoEbb2vImul+ItKFpvgruVHB3KO4uKzBuuFMYV9zdgjtr0HF3d3d3LcUrKUmb58f7vO/3fW9G/0XEBMDpjIEzd+w/eHDPrYObuWCnv+3Q8fn544d3yzCQyDVuePVUnKTFn93dwqXmqjPj/l+ixMYKXrkp25Uo1VefIqulJzuqZIXPkMWSBzokhGtuAdm6uiqXuraE7DxUV7+q98XI5s/aCj2/J5t/uEy3rE/J/vMjYEwqItujtxlatfidnLx49YxycrBiWUCj9I/I2XiMHI0t0SfjIVKPFv5eEFGzHI9boIvXaXMzKb98W5dqgaptQvdFbHpt+dCePQfMekKJ/szUJCOi8n5/yOuftCH2cCtIG+wpU6AjLj2WkuLeAFQ9cy5ZuXiZAUVj5O8Ksa5aBL9W2O+FujHKwp+jYLF5gYwOaDGa5I8GYXm92lhY7n9BFvHrcEJW0hLWg++qPGlYw3YZDdLhtOwhwwbcoBDtCxvTSmV3aRAg+XjYGYjLvvfZgSOyxw3nGik0tQVfyO6FrdNkb7md6yG7VMeeR2TL7Rks+9jvXD9ZmU0PyRba00/2mQYtZJRjz9sO9ZZ9Xtm5TIWhtrhjsvyEMy7KDtkykuSNHfrM7xyekhXUsCHwiOysy6FPdZghox0+a9dFZffBoU90qH1GRndYalZE8jF/AdirUDbZUOvyC8m/y3Tq42Qd2ihQ+b50BW9+hBTvhFMfaYH9CkRFi3oGDMDd+K7PSfWDtL+GwCcqYuTnC2SxpBX+GtDktAXrZTNhey/dMKzIkfKd+OvA4D8dKF9o/JWg6xe2XZxkQIeP/dqg1uGYPW92gKPZ5yQvG/oAvV8us/bNdBccfkxyDbRO7rX/N6XCJ6/PgOPZHzFHPHoBqNbnziNv/Fj0x3sPbhhXG1oG5z7z/n1jvPi/u0+Y7YFqYXaF/68qn9h5yCb2VNX/XLIq2IK/vsp5bCfon9zr1vDB3fP7pUiCndh6QNrlGw9uHl/FitGJbeau14lNA7JmbT+wdoxHperVy/ftX3dDfaWa2wqJL92czfQkdr1nTiGJkZl+NR+xX6SsIvay1A0REr8PSZqfLCX+uW4S3/SfSPXsPJfK5nCcpHsNR+a8QNLIQMGYXEiKxcvdzFyyWDHfUCiIk7yipyN/kuJ3VQDkx0i54mbhyrgVis5xydT3G06oTwe6F5PFoq5ATiGxFYU/FXBU2kYlHpV9leJMeVT2MIwXSSxZ0jlv/kWBnk7CMmJPTcj01L2hhKGtCh+E2l/2B1dYzZEHB3aad577CHlxoWIWAEwvF6Idjd+ZSB7EUDHzo19SVBNArwvMuepOPJcEYBr3DXaR+G2q4P1OoAV148z9BoMHmUgzyVEAcL2nwRwAyI5J3mW+uI39ijnRhdhZ4Ccw8R6S9QKe0eByoWYx5/6JsfhmHjdTchVDPS08pcFlal5bPs7lHjIYYzsTaZtY+ISJfaP8gOc8U9qNaVXC/G4m2H3MbwGoH2Loh0FuoMt3xO5Ggl3B0GqXYFx9rLHQuYyhsi+f+6yY2AtdEs37NRO7d2jd+sMeLKOfBgEwlnCqFYuRaLg6KhDRpXISz8zwAK7jcQvx3Z7EM1bHOfmyZACejSVKkcVJSDwkLSlRKl4egOjt8Vxc9ngPiAkHI++FmCT+xmjIjfqzj7zwxnP7puWArxZiWzHdQuJoP3JDbDO4QuwwT5MQW0NIGRkShwgAcuYefv6Nlw7f1NrA/7RuU/QIftM0TZeQ5JElmaZpujmzWmXOU7WaT3CnCp4kPYJLVj++YfUQYfPm1atXNxTG9JDlh1evXt1L8MzeumTLfDeAqps3LT/c3wAaf1IXwNItegBYUwPsngxIx/eV3d0W0mnXA8hyAxkvVAdSjnUEWt2314X+G49od6BhMBiw1icYDAoZh33gh98MALnLgFbzLxuXeixdv2Pb1q9fEbQyf9/69eubAqh1HNKJo4TMsFBp93150G9PBqQqd7cFn37IlPRZJfS8S0Dt8UiAA1mmabqZ4aZpupm+pml6AGD0onRftWtSgUo7h/iT257MZUR9pmRyd4fD4XArYfCucDicJVy9OxwOjxKMwZu3bhnoApAyc+uuTdkAsq5l7tLmLxlWUDggKgIAAJAQAJ0BKmgAUQA+kTyZSaW/oiErcRy78BIJYg2wA1WHrXLI8YwSXrEAv9A9Rv2gb4DzAfsz+wHvM9IB/R/9j1ofoAeW17Ff7jftU791EsciDD4gTNBTvrBEoZF98Sb50pBy6fhRmCoxxcE/nSu9wWmH53KUxO2b1QH7ps99oyOktXKLHGNx5mHG/7hcAAD+/F437r3S3/IoJlby6/dRcza6d5fcTd3KEJlzX9VSyGm9gNOWTQSRatq6TjP0bxkh4kFdqdgkIGfHxTA8FcYVMadtUztqc91PCHcSF24QZuoLaTlZnP3ERH2AVr24TnpuRl8Rr+haiGa3HKN1lKSQ0stvIarkfdpRJImJ067e0qEpFOlMxxRxZ16SaZV149P8GQQbf/gcIyOQS3IP1O3JUUPUdHb/v7v4mv/+w64AAOibtf+zixRX6guTzrICC6aazbXSnCiDhIqDSqIiElZtTsoCmHR/VnAX/APplos6eMX4J8fbjYxD+RN6Vw9w2iCdaEh1qS3Kse3Ya/f9ZXwqFWG8nU4NyItvflGT0FeOrT/3DkF/YKs2GfLAVh+QE44Q8oPRJ97F+cs/sSG0eBUlqJRDUQQVJgNqCdMgHHFgETddJBL10+Sdt//qr2lNDXwaaeEJhRiXFwkn0N2uYSM4IaJyZ0io3ziLHLyQnQoJlxXquA6XDILCYhxZbKMk2shmkS+rdE9I3B4+9gARtPf//w3ARf//lZrXgAAA",Jr="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAbCAMAAABRPb9kAAAAAXNSR0IB2cksfwAAAAlwSFlzAAALEwAACxMBAJqcGAAAATVQTFRFAAAA////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////bwFteAAAAGd0Uk5TAAM4n9r4FKD1/wGi/fzQo3TTNBjh3STgY/tFqhHJzgKz2Q1y9jYm7r8OjbYby+KdcBW7BmDsygcgL4H5g1E5hNGAJT7q6Tw/5uenpuUn6+1tCShPYW7oil9ihdLNpan0mfrWMsLBMflcXZsAAAE6SURBVHicbZHXVsJQFAUvnU0vBggQaiihVwER7EqxUewNsPz/JxiMiQlxnmbteTl3XUIENFqd3mDQ67QaosBoMuMHs8ko3y1WG+wOp9Nhh81qkQUX4PasxeMGXH+7dwuUT1AfBb9XCgHQQdGDNAJSCIEKix6mEJICg0hU9GgEjBRiiCdET8QRk0ISbEr0FIukFNIZZDlBuSwy6b97c0C+sJZCHsjJHsgVgVK5UimXgCInC6Rawy+1KlFQbxSbNN3cbtTJJq12p9NuKab0DsN2Hbu9fr+3t99lmYNDYT86xgYnp+v9bAAMR2O/sPnHoyFwzpeLS1xdT/i/ms7m89mU/6XJTQa3PnIH3FuUZ1gegEfyhNLGzpcBnkkXL6rLySveCLBQhwVAllgtVKyw5H/vXxjy/rFUz93Pr28Vii2qoAdCGAAAAABJRU5ErkJggg==",$n="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAbCAMAAABRPb9kAAAAAXNSR0IB2cksfwAAAAlwSFlzAAALEwAACxMBAJqcGAAAATVQTFRFAAAANzQ1NzQ1NzQ1NzQ1NzQ1NzQ1NzQ1NzQ1NzQ1NzQ1NzQ1NzQ1NzQ1NzQ1NzQ1NzQ1NzQ1NzQ1NzQ1NzQ1NzQ1NzQ1NzQ1NzQ1NzQ1NzQ1NzQ1NzQ1NzQ1NzQ1NzQ1NzQ1NzQ1NzQ1NzQ1NzQ1NzQ1NzQ1NzQ1NzQ1NzQ1NzQ1NzQ1NzQ1NzQ1NzQ1NzQ1NzQ1NzQ1NzQ1NzQ1NzQ1NzQ1NzQ1NzQ1NzQ1NzQ1NzQ1NzQ1NzQ1NzQ1NzQ1NzQ1NzQ1NzQ1NzQ1NzQ1NzQ1NzQ1NzQ1NzQ1NzQ1NzQ1NzQ1NzQ1NzQ1NzQ1NzQ1NzQ1NzQ1NzQ1NzQ1NzQ1NzQ1NzQ1NzQ1NzQ1NzQ1NzQ1NzQ1NzQ1NzQ1NzQ1NzQ1NzQ1NzQ1NzQ1NzQ1NzQ1NzQ1NzQ1NzQ1hgw8FgAAAGd0Uk5TAAM4n9r4FKD1/wGi/fzQo3TTNBjh3STgY/tFqhHJzgKz2Q1y9jYm7r8OjbYby+KdcBW7BmDsygcgL4H5g1E5hNGAJT7q6Tw/5uenpuUn6+1tCShPYW7oil9ihdLNpan0mfrWMsLBMflcXZsAAAE6SURBVHicbZHXVsJQFAUvnU0vBggQaiihVwER7EqxUewNsPz/JxiMiQlxnmbteTl3XUIENFqd3mDQ67QaosBoMuMHs8ko3y1WG+wOp9Nhh81qkQUX4PasxeMGXH+7dwuUT1AfBb9XCgHQQdGDNAJSCIEKix6mEJICg0hU9GgEjBRiiCdET8QRk0ISbEr0FIukFNIZZDlBuSwy6b97c0C+sJZCHsjJHsgVgVK5UimXgCInC6Rawy+1KlFQbxSbNN3cbtTJJq12p9NuKab0DsN2Hbu9fr+3t99lmYNDYT86xgYnp+v9bAAMR2O/sPnHoyFwzpeLS1xdT/i/ms7m89mU/6XJTQa3PnIH3FuUZ1gegEfyhNLGzpcBnkkXL6rLySveCLBQhwVAllgtVKyw5H/vXxjy/rFUz93Pr28Vii2qoAdCGAAAAABJRU5ErkJggg==";const Ce=e=>{switch(e.theme){case"outline":return l("button",{className:"outline__button",...e});case"red":return l("button",{className:"red__button",...e});default:return l("button",{className:"default__button",...e})}};const Zr=({onClick:e,open:t})=>{const a=()=>t?"-active":"";return h("button",{"aria-label":"burger menu",className:"burgericon",onClick:()=>{e()},children:[l("div",{className:`burgerbar1${a()}`}),l("div",{className:`burgerbar2${a()}`}),l("div",{className:`burgerbar3${a()}`})]})};const $r={left:"0px"},ei={left:"100%"},ti=({open:e=!1})=>(e?document.body.style.overflow="hidden":document.body.style.overflow="unset",Ra.createPortal(l("div",{className:"mobile__navbar-modal",style:e?$r:ei,children:e?l("div",{style:{color:"white"},children:h("ul",{className:"list",children:[l("li",{children:l("a",{children:"Para voc\xEA"})}),l("li",{children:l("a",{children:"Para empresas"})}),l("li",{children:l("a",{children:"Produtos e servi\xE7os"})}),l("li",{children:l("a",{children:"Institucional"})}),l("li",{children:l("a",{children:"Blog"})}),l("li",{children:l(Ce,{theme:"red",className:"red__button",children:"Assine j\xE1"})}),l("li",{children:l("a",{children:"2\xAA Via"})}),l("li",{children:h(Ce,{theme:"default",className:"dark__button",children:[l("img",{src:$n}),"Minha Online"]})})]})}):null}),document.getElementById("mobile__menu-portal"))),ea=({city:e=void 0,solid:t=!0})=>{const a=Hn(),[r,n,i]=Wn(),{themeType:o,setCurrentTheme:s}=Ma();Y.exports.useEffect(()=>{a>1090&&r&&i(!1)},[a]);const c=()=>o==="light"?"dark":"light";return l(jn,{children:h("div",{className:"main-navbar",children:[t?l("div",{className:"navbar__block"}):null,h("div",{className:"navbar",children:[l("div",{className:"navbar__top",children:h("div",{className:"container__top",children:[h("div",{className:"navbar__top-left",children:[l("div",{className:"number-contact",children:"0800 088 1111"}),l("div",{title:"Work in progress...",style:{cursor:"progress"},children:"aA"}),l("img",{alt:"tema",src:o==="light"?Gr:Vr,onClick:()=>{s(c())}})]}),h("div",{className:"navbar__top-right",children:[l("div",{children:e}),e?l("img",{alt:"trocar cidade",src:o==="light"?Kr:Xr}):null]})]})}),l("div",{className:"navbar__bottom",children:l("div",{className:"container__bottom",children:h("div",{className:"navbar__bottom-left",children:[h("div",{className:"bottom__left",children:[l(ue,{to:"/",children:l("img",{src:o==="light"?za:Zn,alt:"Online Telecom Logo"})}),h("div",{className:"bottom__left-options",children:[l(ue,{to:"",children:"PARA VOC\xCA"}),l(ue,{to:"",children:"PARA EMPRESAS"})]})]}),h("div",{className:"bottom__right",children:[h("div",{className:"bottom__right-options",children:[l(ue,{to:"",children:"Produtos e servi\xE7os"}),l(ue,{to:"",children:"Institucional"}),l(ue,{to:"",children:"Blog"})]}),l(Ce,{theme:"red",children:"Assine j\xE1"}),l(Ce,{theme:"outline",children:"2\xAA Via"}),h(Ce,{theme:"default",children:[l("img",{src:o==="light"?Jr:$n}),"Minha Online"]})]}),h("div",{className:"bottom__right-mobile",style:{margin:"auto 0"},children:[l(Zr,{onClick:()=>{n()},open:r}),l(ti,{open:r})]})]})})})]})]})})};const ni="/online-telecom/assets/bonus_bebanca.dee45ba2.png",ai="/online-telecom/assets/bonus_deezer.fd0653d4.png",ri="/online-telecom/assets/bonus_hbomax.d97a47c9.png",ii="/online-telecom/assets/bonus_nordestefc.dea7dc39.png",oi="/online-telecom/assets/bonus_tocalivros.b8a0668e.png",si="/online-telecom/assets/bonus_watchbr.050121fc.png";function fn(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable})),a.push.apply(a,r)}return a}function v(e){for(var t=1;t<arguments.length;t++){var a=arguments[t]!=null?arguments[t]:{};t%2?fn(Object(a),!0).forEach(function(r){L(e,r,a[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):fn(Object(a)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(a,r))})}return e}function ot(e){return ot=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},ot(e)}function li(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function dn(e,t){for(var a=0;a<t.length;a++){var r=t[a];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function ci(e,t,a){return t&&dn(e.prototype,t),a&&dn(e,a),Object.defineProperty(e,"prototype",{writable:!1}),e}function L(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function Yt(e,t){return fi(e)||mi(e,t)||ta(e,t)||vi()}function Fe(e){return ui(e)||di(e)||ta(e)||pi()}function ui(e){if(Array.isArray(e))return Ot(e)}function fi(e){if(Array.isArray(e))return e}function di(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function mi(e,t){var a=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(a!=null){var r=[],n=!0,i=!1,o,s;try{for(a=a.call(e);!(n=(o=a.next()).done)&&(r.push(o.value),!(t&&r.length===t));n=!0);}catch(c){i=!0,s=c}finally{try{!n&&a.return!=null&&a.return()}finally{if(i)throw s}}return r}}function ta(e,t){if(!!e){if(typeof e=="string")return Ot(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);if(a==="Object"&&e.constructor&&(a=e.constructor.name),a==="Map"||a==="Set")return Array.from(e);if(a==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return Ot(e,t)}}function Ot(e,t){(t==null||t>e.length)&&(t=e.length);for(var a=0,r=new Array(t);a<t;a++)r[a]=e[a];return r}function pi(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function vi(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var mn=function(){},qt={},na={},aa=null,ra={mark:mn,measure:mn};try{typeof window<"u"&&(qt=window),typeof document<"u"&&(na=document),typeof MutationObserver<"u"&&(aa=MutationObserver),typeof performance<"u"&&(ra=performance)}catch{}var hi=qt.navigator||{},pn=hi.userAgent,vn=pn===void 0?"":pn,oe=qt,_=na,hn=aa,qe=ra;oe.document;var ne=!!_.documentElement&&!!_.head&&typeof _.addEventListener=="function"&&typeof _.createElement=="function",ia=~vn.indexOf("MSIE")||~vn.indexOf("Trident/"),Ge,Ve,Xe,Ke,Je,$="___FONT_AWESOME___",Pt=16,oa="fa",sa="svg-inline--fa",pe="data-fa-i2svg",It="data-fa-pseudo-element",bi="data-fa-pseudo-element-pending",Gt="data-prefix",Vt="data-icon",bn="fontawesome-i2svg",gi="async",yi=["HTML","HEAD","STYLE","SCRIPT"],la=function(){try{return!0}catch{return!1}}(),I="classic",R="sharp",Xt=[I,R];function Be(e){return new Proxy(e,{get:function(a,r){return r in a?a[r]:a[I]}})}var Ie=Be((Ge={},L(Ge,I,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit","fa-kit":"kit"}),L(Ge,R,{fa:"solid",fass:"solid","fa-solid":"solid"}),Ge)),_e=Be((Ve={},L(Ve,I,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),L(Ve,R,{solid:"fass"}),Ve)),Te=Be((Xe={},L(Xe,I,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),L(Xe,R,{fass:"fa-solid"}),Xe)),Ai=Be((Ke={},L(Ke,I,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),L(Ke,R,{"fa-solid":"fass"}),Ke)),wi=/fa(s|r|l|t|d|b|k|ss)?[\-\ ]/,ca="fa-layers-text",xi=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,Ei=Be((Je={},L(Je,I,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),L(Je,R,{900:"fass"}),Je)),ua=[1,2,3,4,5,6,7,8,9,10],Si=ua.concat([11,12,13,14,15,16,17,18,19,20]),ki=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],de={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},Re=new Set;Object.keys(_e[I]).map(Re.add.bind(Re));Object.keys(_e[R]).map(Re.add.bind(Re));var Ni=[].concat(Xt,Fe(Re),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",de.GROUP,de.SWAP_OPACITY,de.PRIMARY,de.SECONDARY]).concat(ua.map(function(e){return"".concat(e,"x")})).concat(Si.map(function(e){return"w-".concat(e)})),Oe=oe.FontAwesomeConfig||{};function Ci(e){var t=_.querySelector("script["+e+"]");if(t)return t.getAttribute(e)}function Oi(e){return e===""?!0:e==="false"?!1:e==="true"?!0:e}if(_&&typeof _.querySelector=="function"){var Pi=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];Pi.forEach(function(e){var t=Yt(e,2),a=t[0],r=t[1],n=Oi(Ci(a));n!=null&&(Oe[r]=n)})}var fa={styleDefault:"solid",familyDefault:"classic",cssPrefix:oa,replacementClass:sa,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};Oe.familyPrefix&&(Oe.cssPrefix=Oe.familyPrefix);var Ae=v(v({},fa),Oe);Ae.autoReplaceSvg||(Ae.observeMutations=!1);var b={};Object.keys(fa).forEach(function(e){Object.defineProperty(b,e,{enumerable:!0,set:function(a){Ae[e]=a,Pe.forEach(function(r){return r(b)})},get:function(){return Ae[e]}})});Object.defineProperty(b,"familyPrefix",{enumerable:!0,set:function(t){Ae.cssPrefix=t,Pe.forEach(function(a){return a(b)})},get:function(){return Ae.cssPrefix}});oe.FontAwesomeConfig=b;var Pe=[];function Ii(e){return Pe.push(e),function(){Pe.splice(Pe.indexOf(e),1)}}var re=Pt,K={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function _i(e){if(!(!e||!ne)){var t=_.createElement("style");t.setAttribute("type","text/css"),t.innerHTML=e;for(var a=_.head.childNodes,r=null,n=a.length-1;n>-1;n--){var i=a[n],o=(i.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(r=i)}return _.head.insertBefore(t,r),e}}var Ti="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function Me(){for(var e=12,t="";e-- >0;)t+=Ti[Math.random()*62|0];return t}function xe(e){for(var t=[],a=(e||[]).length>>>0;a--;)t[a]=e[a];return t}function Kt(e){return e.classList?xe(e.classList):(e.getAttribute("class")||"").split(" ").filter(function(t){return t})}function da(e){return"".concat(e).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function Ri(e){return Object.keys(e||{}).reduce(function(t,a){return t+"".concat(a,'="').concat(da(e[a]),'" ')},"").trim()}function pt(e){return Object.keys(e||{}).reduce(function(t,a){return t+"".concat(a,": ").concat(e[a].trim(),";")},"")}function Jt(e){return e.size!==K.size||e.x!==K.x||e.y!==K.y||e.rotate!==K.rotate||e.flipX||e.flipY}function Mi(e){var t=e.transform,a=e.containerWidth,r=e.iconWidth,n={transform:"translate(".concat(a/2," 256)")},i="translate(".concat(t.x*32,", ").concat(t.y*32,") "),o="scale(".concat(t.size/16*(t.flipX?-1:1),", ").concat(t.size/16*(t.flipY?-1:1),") "),s="rotate(".concat(t.rotate," 0 0)"),c={transform:"".concat(i," ").concat(o," ").concat(s)},u={transform:"translate(".concat(r/2*-1," -256)")};return{outer:n,inner:c,path:u}}function zi(e){var t=e.transform,a=e.width,r=a===void 0?Pt:a,n=e.height,i=n===void 0?Pt:n,o=e.startCentered,s=o===void 0?!1:o,c="";return s&&ia?c+="translate(".concat(t.x/re-r/2,"em, ").concat(t.y/re-i/2,"em) "):s?c+="translate(calc(-50% + ".concat(t.x/re,"em), calc(-50% + ").concat(t.y/re,"em)) "):c+="translate(".concat(t.x/re,"em, ").concat(t.y/re,"em) "),c+="scale(".concat(t.size/re*(t.flipX?-1:1),", ").concat(t.size/re*(t.flipY?-1:1),") "),c+="rotate(".concat(t.rotate,"deg) "),c}var Li=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-counter-scale, 0.25));
          transform: scale(var(--fa-counter-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom right;
          transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom left;
          transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top left;
          transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(var(--fa-li-width, 2em) * -1);
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  -webkit-animation-name: fa-beat;
          animation-name: fa-beat;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  -webkit-animation-name: fa-bounce;
          animation-name: fa-bounce;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  -webkit-animation-name: fa-fade;
          animation-name: fa-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  -webkit-animation-name: fa-beat-fade;
          animation-name: fa-beat-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  -webkit-animation-name: fa-flip;
          animation-name: fa-flip;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  -webkit-animation-name: fa-shake;
          animation-name: fa-shake;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 2s);
          animation-duration: var(--fa-animation-duration, 2s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, steps(8));
          animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    -webkit-animation-delay: -1ms;
            animation-delay: -1ms;
    -webkit-animation-duration: 1ms;
            animation-duration: 1ms;
    -webkit-animation-iteration-count: 1;
            animation-iteration-count: 1;
    transition-delay: 0s;
    transition-duration: 0s;
  }
}
@-webkit-keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@-webkit-keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@-webkit-keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@-webkit-keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@-webkit-keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@-webkit-keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@-webkit-keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
@keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
}

.fa-rotate-180 {
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
}

.fa-rotate-270 {
  -webkit-transform: rotate(270deg);
          transform: rotate(270deg);
}

.fa-flip-horizontal {
  -webkit-transform: scale(-1, 1);
          transform: scale(-1, 1);
}

.fa-flip-vertical {
  -webkit-transform: scale(1, -1);
          transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  -webkit-transform: scale(-1, -1);
          transform: scale(-1, -1);
}

.fa-rotate-by {
  -webkit-transform: rotate(var(--fa-rotate-angle, none));
          transform: rotate(var(--fa-rotate-angle, none));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;function ma(){var e=oa,t=sa,a=b.cssPrefix,r=b.replacementClass,n=Li;if(a!==e||r!==t){var i=new RegExp("\\.".concat(e,"\\-"),"g"),o=new RegExp("\\--".concat(e,"\\-"),"g"),s=new RegExp("\\.".concat(t),"g");n=n.replace(i,".".concat(a,"-")).replace(o,"--".concat(a,"-")).replace(s,".".concat(r))}return n}var gn=!1;function yt(){b.autoAddCss&&!gn&&(_i(ma()),gn=!0)}var Di={mixout:function(){return{dom:{css:ma,insertCss:yt}}},hooks:function(){return{beforeDOMElementCreation:function(){yt()},beforeI2svg:function(){yt()}}}},ee=oe||{};ee[$]||(ee[$]={});ee[$].styles||(ee[$].styles={});ee[$].hooks||(ee[$].hooks={});ee[$].shims||(ee[$].shims=[]);var H=ee[$],pa=[],Qi=function e(){_.removeEventListener("DOMContentLoaded",e),st=1,pa.map(function(t){return t()})},st=!1;ne&&(st=(_.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(_.readyState),st||_.addEventListener("DOMContentLoaded",Qi));function Fi(e){!ne||(st?setTimeout(e,0):pa.push(e))}function je(e){var t=e.tag,a=e.attributes,r=a===void 0?{}:a,n=e.children,i=n===void 0?[]:n;return typeof e=="string"?da(e):"<".concat(t," ").concat(Ri(r),">").concat(i.map(je).join(""),"</").concat(t,">")}function yn(e,t,a){if(e&&e[t]&&e[t][a])return{prefix:t,iconName:a,icon:e[t][a]}}var Bi=function(t,a){return function(r,n,i,o){return t.call(a,r,n,i,o)}},At=function(t,a,r,n){var i=Object.keys(t),o=i.length,s=n!==void 0?Bi(a,n):a,c,u,f;for(r===void 0?(c=1,f=t[i[0]]):(c=0,f=r);c<o;c++)u=i[c],f=s(f,t[u],u,t);return f};function ji(e){for(var t=[],a=0,r=e.length;a<r;){var n=e.charCodeAt(a++);if(n>=55296&&n<=56319&&a<r){var i=e.charCodeAt(a++);(i&64512)==56320?t.push(((n&1023)<<10)+(i&1023)+65536):(t.push(n),a--)}else t.push(n)}return t}function _t(e){var t=ji(e);return t.length===1?t[0].toString(16):null}function Ui(e,t){var a=e.length,r=e.charCodeAt(t),n;return r>=55296&&r<=56319&&a>t+1&&(n=e.charCodeAt(t+1),n>=56320&&n<=57343)?(r-55296)*1024+n-56320+65536:r}function An(e){return Object.keys(e).reduce(function(t,a){var r=e[a],n=!!r.icon;return n?t[r.iconName]=r.icon:t[a]=r,t},{})}function Tt(e,t){var a=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=a.skipHooks,n=r===void 0?!1:r,i=An(t);typeof H.hooks.addPack=="function"&&!n?H.hooks.addPack(e,An(t)):H.styles[e]=v(v({},H.styles[e]||{}),i),e==="fas"&&Tt("fa",t)}var Ze,$e,et,he=H.styles,Wi=H.shims,Hi=(Ze={},L(Ze,I,Object.values(Te[I])),L(Ze,R,Object.values(Te[R])),Ze),Zt=null,va={},ha={},ba={},ga={},ya={},Yi=($e={},L($e,I,Object.keys(Ie[I])),L($e,R,Object.keys(Ie[R])),$e);function qi(e){return~Ni.indexOf(e)}function Gi(e,t){var a=t.split("-"),r=a[0],n=a.slice(1).join("-");return r===e&&n!==""&&!qi(n)?n:null}var Aa=function(){var t=function(i){return At(he,function(o,s,c){return o[c]=At(s,i,{}),o},{})};va=t(function(n,i,o){if(i[3]&&(n[i[3]]=o),i[2]){var s=i[2].filter(function(c){return typeof c=="number"});s.forEach(function(c){n[c.toString(16)]=o})}return n}),ha=t(function(n,i,o){if(n[o]=o,i[2]){var s=i[2].filter(function(c){return typeof c=="string"});s.forEach(function(c){n[c]=o})}return n}),ya=t(function(n,i,o){var s=i[2];return n[o]=o,s.forEach(function(c){n[c]=o}),n});var a="far"in he||b.autoFetchSvg,r=At(Wi,function(n,i){var o=i[0],s=i[1],c=i[2];return s==="far"&&!a&&(s="fas"),typeof o=="string"&&(n.names[o]={prefix:s,iconName:c}),typeof o=="number"&&(n.unicodes[o.toString(16)]={prefix:s,iconName:c}),n},{names:{},unicodes:{}});ba=r.names,ga=r.unicodes,Zt=vt(b.styleDefault,{family:b.familyDefault})};Ii(function(e){Zt=vt(e.styleDefault,{family:b.familyDefault})});Aa();function $t(e,t){return(va[e]||{})[t]}function Vi(e,t){return(ha[e]||{})[t]}function me(e,t){return(ya[e]||{})[t]}function wa(e){return ba[e]||{prefix:null,iconName:null}}function Xi(e){var t=ga[e],a=$t("fas",e);return t||(a?{prefix:"fas",iconName:a}:null)||{prefix:null,iconName:null}}function se(){return Zt}var en=function(){return{prefix:null,iconName:null,rest:[]}};function vt(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=t.family,r=a===void 0?I:a,n=Ie[r][e],i=_e[r][e]||_e[r][n],o=e in H.styles?e:null;return i||o||null}var wn=(et={},L(et,I,Object.keys(Te[I])),L(et,R,Object.keys(Te[R])),et);function ht(e){var t,a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=a.skipLookups,n=r===void 0?!1:r,i=(t={},L(t,I,"".concat(b.cssPrefix,"-").concat(I)),L(t,R,"".concat(b.cssPrefix,"-").concat(R)),t),o=null,s=I;(e.includes(i[I])||e.some(function(u){return wn[I].includes(u)}))&&(s=I),(e.includes(i[R])||e.some(function(u){return wn[R].includes(u)}))&&(s=R);var c=e.reduce(function(u,f){var d=Gi(b.cssPrefix,f);if(he[f]?(f=Hi[s].includes(f)?Ai[s][f]:f,o=f,u.prefix=f):Yi[s].indexOf(f)>-1?(o=f,u.prefix=vt(f,{family:s})):d?u.iconName=d:f!==b.replacementClass&&f!==i[I]&&f!==i[R]&&u.rest.push(f),!n&&u.prefix&&u.iconName){var g=o==="fa"?wa(u.iconName):{},y=me(u.prefix,u.iconName);g.prefix&&(o=null),u.iconName=g.iconName||y||u.iconName,u.prefix=g.prefix||u.prefix,u.prefix==="far"&&!he.far&&he.fas&&!b.autoFetchSvg&&(u.prefix="fas")}return u},en());return(e.includes("fa-brands")||e.includes("fab"))&&(c.prefix="fab"),(e.includes("fa-duotone")||e.includes("fad"))&&(c.prefix="fad"),!c.prefix&&s===R&&(he.fass||b.autoFetchSvg)&&(c.prefix="fass",c.iconName=me(c.prefix,c.iconName)||c.iconName),(c.prefix==="fa"||o==="fa")&&(c.prefix=se()||"fas"),c}var Ki=function(){function e(){li(this,e),this.definitions={}}return ci(e,[{key:"add",value:function(){for(var a=this,r=arguments.length,n=new Array(r),i=0;i<r;i++)n[i]=arguments[i];var o=n.reduce(this._pullDefinitions,{});Object.keys(o).forEach(function(s){a.definitions[s]=v(v({},a.definitions[s]||{}),o[s]),Tt(s,o[s]);var c=Te[I][s];c&&Tt(c,o[s]),Aa()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(a,r){var n=r.prefix&&r.iconName&&r.icon?{0:r}:r;return Object.keys(n).map(function(i){var o=n[i],s=o.prefix,c=o.iconName,u=o.icon,f=u[2];a[s]||(a[s]={}),f.length>0&&f.forEach(function(d){typeof d=="string"&&(a[s][d]=u)}),a[s][c]=u}),a}}]),e}(),xn=[],be={},ye={},Ji=Object.keys(ye);function Zi(e,t){var a=t.mixoutsTo;return xn=e,be={},Object.keys(ye).forEach(function(r){Ji.indexOf(r)===-1&&delete ye[r]}),xn.forEach(function(r){var n=r.mixout?r.mixout():{};if(Object.keys(n).forEach(function(o){typeof n[o]=="function"&&(a[o]=n[o]),ot(n[o])==="object"&&Object.keys(n[o]).forEach(function(s){a[o]||(a[o]={}),a[o][s]=n[o][s]})}),r.hooks){var i=r.hooks();Object.keys(i).forEach(function(o){be[o]||(be[o]=[]),be[o].push(i[o])})}r.provides&&r.provides(ye)}),a}function Rt(e,t){for(var a=arguments.length,r=new Array(a>2?a-2:0),n=2;n<a;n++)r[n-2]=arguments[n];var i=be[e]||[];return i.forEach(function(o){t=o.apply(null,[t].concat(r))}),t}function ve(e){for(var t=arguments.length,a=new Array(t>1?t-1:0),r=1;r<t;r++)a[r-1]=arguments[r];var n=be[e]||[];n.forEach(function(i){i.apply(null,a)})}function te(){var e=arguments[0],t=Array.prototype.slice.call(arguments,1);return ye[e]?ye[e].apply(null,t):void 0}function Mt(e){e.prefix==="fa"&&(e.prefix="fas");var t=e.iconName,a=e.prefix||se();if(!!t)return t=me(a,t)||t,yn(xa.definitions,a,t)||yn(H.styles,a,t)}var xa=new Ki,$i=function(){b.autoReplaceSvg=!1,b.observeMutations=!1,ve("noAuto")},eo={i2svg:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return ne?(ve("beforeI2svg",t),te("pseudoElements2svg",t),te("i2svg",t)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},a=t.autoReplaceSvgRoot;b.autoReplaceSvg===!1&&(b.autoReplaceSvg=!0),b.observeMutations=!0,Fi(function(){no({autoReplaceSvgRoot:a}),ve("watch",t)})}},to={icon:function(t){if(t===null)return null;if(ot(t)==="object"&&t.prefix&&t.iconName)return{prefix:t.prefix,iconName:me(t.prefix,t.iconName)||t.iconName};if(Array.isArray(t)&&t.length===2){var a=t[1].indexOf("fa-")===0?t[1].slice(3):t[1],r=vt(t[0]);return{prefix:r,iconName:me(r,a)||a}}if(typeof t=="string"&&(t.indexOf("".concat(b.cssPrefix,"-"))>-1||t.match(wi))){var n=ht(t.split(" "),{skipLookups:!0});return{prefix:n.prefix||se(),iconName:me(n.prefix,n.iconName)||n.iconName}}if(typeof t=="string"){var i=se();return{prefix:i,iconName:me(i,t)||t}}}},j={noAuto:$i,config:b,dom:eo,parse:to,library:xa,findIconDefinition:Mt,toHtml:je},no=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},a=t.autoReplaceSvgRoot,r=a===void 0?_:a;(Object.keys(H.styles).length>0||b.autoFetchSvg)&&ne&&b.autoReplaceSvg&&j.dom.i2svg({node:r})};function bt(e,t){return Object.defineProperty(e,"abstract",{get:t}),Object.defineProperty(e,"html",{get:function(){return e.abstract.map(function(r){return je(r)})}}),Object.defineProperty(e,"node",{get:function(){if(!!ne){var r=_.createElement("div");return r.innerHTML=e.html,r.children}}}),e}function ao(e){var t=e.children,a=e.main,r=e.mask,n=e.attributes,i=e.styles,o=e.transform;if(Jt(o)&&a.found&&!r.found){var s=a.width,c=a.height,u={x:s/c/2,y:.5};n.style=pt(v(v({},i),{},{"transform-origin":"".concat(u.x+o.x/16,"em ").concat(u.y+o.y/16,"em")}))}return[{tag:"svg",attributes:n,children:t}]}function ro(e){var t=e.prefix,a=e.iconName,r=e.children,n=e.attributes,i=e.symbol,o=i===!0?"".concat(t,"-").concat(b.cssPrefix,"-").concat(a):i;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:v(v({},n),{},{id:o}),children:r}]}]}function tn(e){var t=e.icons,a=t.main,r=t.mask,n=e.prefix,i=e.iconName,o=e.transform,s=e.symbol,c=e.title,u=e.maskId,f=e.titleId,d=e.extra,g=e.watchable,y=g===void 0?!1:g,N=r.found?r:a,T=N.width,P=N.height,M=n==="fak",p=[b.replacementClass,i?"".concat(b.cssPrefix,"-").concat(i):""].filter(function(F){return d.classes.indexOf(F)===-1}).filter(function(F){return F!==""||!!F}).concat(d.classes).join(" "),A={children:[],attributes:v(v({},d.attributes),{},{"data-prefix":n,"data-icon":i,class:p,role:d.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(T," ").concat(P)})},w=M&&!~d.classes.indexOf("fa-fw")?{width:"".concat(T/P*16*.0625,"em")}:{};y&&(A.attributes[pe]=""),c&&(A.children.push({tag:"title",attributes:{id:A.attributes["aria-labelledby"]||"title-".concat(f||Me())},children:[c]}),delete A.attributes.title);var m=v(v({},A),{},{prefix:n,iconName:i,main:a,mask:r,maskId:u,transform:o,symbol:s,styles:v(v({},w),d.styles)}),k=r.found&&a.found?te("generateAbstractMask",m)||{children:[],attributes:{}}:te("generateAbstractIcon",m)||{children:[],attributes:{}},z=k.children,C=k.attributes;return m.children=z,m.attributes=C,s?ro(m):ao(m)}function En(e){var t=e.content,a=e.width,r=e.height,n=e.transform,i=e.title,o=e.extra,s=e.watchable,c=s===void 0?!1:s,u=v(v(v({},o.attributes),i?{title:i}:{}),{},{class:o.classes.join(" ")});c&&(u[pe]="");var f=v({},o.styles);Jt(n)&&(f.transform=zi({transform:n,startCentered:!0,width:a,height:r}),f["-webkit-transform"]=f.transform);var d=pt(f);d.length>0&&(u.style=d);var g=[];return g.push({tag:"span",attributes:u,children:[t]}),i&&g.push({tag:"span",attributes:{class:"sr-only"},children:[i]}),g}function io(e){var t=e.content,a=e.title,r=e.extra,n=v(v(v({},r.attributes),a?{title:a}:{}),{},{class:r.classes.join(" ")}),i=pt(r.styles);i.length>0&&(n.style=i);var o=[];return o.push({tag:"span",attributes:n,children:[t]}),a&&o.push({tag:"span",attributes:{class:"sr-only"},children:[a]}),o}var wt=H.styles;function zt(e){var t=e[0],a=e[1],r=e.slice(4),n=Yt(r,1),i=n[0],o=null;return Array.isArray(i)?o={tag:"g",attributes:{class:"".concat(b.cssPrefix,"-").concat(de.GROUP)},children:[{tag:"path",attributes:{class:"".concat(b.cssPrefix,"-").concat(de.SECONDARY),fill:"currentColor",d:i[0]}},{tag:"path",attributes:{class:"".concat(b.cssPrefix,"-").concat(de.PRIMARY),fill:"currentColor",d:i[1]}}]}:o={tag:"path",attributes:{fill:"currentColor",d:i}},{found:!0,width:t,height:a,icon:o}}var oo={found:!1,width:512,height:512};function so(e,t){!la&&!b.showMissingIcons&&e&&console.error('Icon with name "'.concat(e,'" and prefix "').concat(t,'" is missing.'))}function Lt(e,t){var a=t;return t==="fa"&&b.styleDefault!==null&&(t=se()),new Promise(function(r,n){if(te("missingIconAbstract"),a==="fa"){var i=wa(e)||{};e=i.iconName||e,t=i.prefix||t}if(e&&t&&wt[t]&&wt[t][e]){var o=wt[t][e];return r(zt(o))}so(e,t),r(v(v({},oo),{},{icon:b.showMissingIcons&&e?te("missingIconAbstract")||{}:{}}))})}var Sn=function(){},Dt=b.measurePerformance&&qe&&qe.mark&&qe.measure?qe:{mark:Sn,measure:Sn},Se='FA "6.2.1"',lo=function(t){return Dt.mark("".concat(Se," ").concat(t," begins")),function(){return Ea(t)}},Ea=function(t){Dt.mark("".concat(Se," ").concat(t," ends")),Dt.measure("".concat(Se," ").concat(t),"".concat(Se," ").concat(t," begins"),"".concat(Se," ").concat(t," ends"))},nn={begin:lo,end:Ea},tt=function(){};function kn(e){var t=e.getAttribute?e.getAttribute(pe):null;return typeof t=="string"}function co(e){var t=e.getAttribute?e.getAttribute(Gt):null,a=e.getAttribute?e.getAttribute(Vt):null;return t&&a}function uo(e){return e&&e.classList&&e.classList.contains&&e.classList.contains(b.replacementClass)}function fo(){if(b.autoReplaceSvg===!0)return nt.replace;var e=nt[b.autoReplaceSvg];return e||nt.replace}function mo(e){return _.createElementNS("http://www.w3.org/2000/svg",e)}function po(e){return _.createElement(e)}function Sa(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=t.ceFn,r=a===void 0?e.tag==="svg"?mo:po:a;if(typeof e=="string")return _.createTextNode(e);var n=r(e.tag);Object.keys(e.attributes||[]).forEach(function(o){n.setAttribute(o,e.attributes[o])});var i=e.children||[];return i.forEach(function(o){n.appendChild(Sa(o,{ceFn:r}))}),n}function vo(e){var t=" ".concat(e.outerHTML," ");return t="".concat(t,"Font Awesome fontawesome.com "),t}var nt={replace:function(t){var a=t[0];if(a.parentNode)if(t[1].forEach(function(n){a.parentNode.insertBefore(Sa(n),a)}),a.getAttribute(pe)===null&&b.keepOriginalSource){var r=_.createComment(vo(a));a.parentNode.replaceChild(r,a)}else a.remove()},nest:function(t){var a=t[0],r=t[1];if(~Kt(a).indexOf(b.replacementClass))return nt.replace(t);var n=new RegExp("".concat(b.cssPrefix,"-.*"));if(delete r[0].attributes.id,r[0].attributes.class){var i=r[0].attributes.class.split(" ").reduce(function(s,c){return c===b.replacementClass||c.match(n)?s.toSvg.push(c):s.toNode.push(c),s},{toNode:[],toSvg:[]});r[0].attributes.class=i.toSvg.join(" "),i.toNode.length===0?a.removeAttribute("class"):a.setAttribute("class",i.toNode.join(" "))}var o=r.map(function(s){return je(s)}).join(`
`);a.setAttribute(pe,""),a.innerHTML=o}};function Nn(e){e()}function ka(e,t){var a=typeof t=="function"?t:tt;if(e.length===0)a();else{var r=Nn;b.mutateApproach===gi&&(r=oe.requestAnimationFrame||Nn),r(function(){var n=fo(),i=nn.begin("mutate");e.map(n),i(),a()})}}var an=!1;function Na(){an=!0}function Qt(){an=!1}var lt=null;function Cn(e){if(!!hn&&!!b.observeMutations){var t=e.treeCallback,a=t===void 0?tt:t,r=e.nodeCallback,n=r===void 0?tt:r,i=e.pseudoElementsCallback,o=i===void 0?tt:i,s=e.observeMutationsRoot,c=s===void 0?_:s;lt=new hn(function(u){if(!an){var f=se();xe(u).forEach(function(d){if(d.type==="childList"&&d.addedNodes.length>0&&!kn(d.addedNodes[0])&&(b.searchPseudoElements&&o(d.target),a(d.target)),d.type==="attributes"&&d.target.parentNode&&b.searchPseudoElements&&o(d.target.parentNode),d.type==="attributes"&&kn(d.target)&&~ki.indexOf(d.attributeName))if(d.attributeName==="class"&&co(d.target)){var g=ht(Kt(d.target)),y=g.prefix,N=g.iconName;d.target.setAttribute(Gt,y||f),N&&d.target.setAttribute(Vt,N)}else uo(d.target)&&n(d.target)})}}),ne&&lt.observe(c,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function ho(){!lt||lt.disconnect()}function bo(e){var t=e.getAttribute("style"),a=[];return t&&(a=t.split(";").reduce(function(r,n){var i=n.split(":"),o=i[0],s=i.slice(1);return o&&s.length>0&&(r[o]=s.join(":").trim()),r},{})),a}function go(e){var t=e.getAttribute("data-prefix"),a=e.getAttribute("data-icon"),r=e.innerText!==void 0?e.innerText.trim():"",n=ht(Kt(e));return n.prefix||(n.prefix=se()),t&&a&&(n.prefix=t,n.iconName=a),n.iconName&&n.prefix||(n.prefix&&r.length>0&&(n.iconName=Vi(n.prefix,e.innerText)||$t(n.prefix,_t(e.innerText))),!n.iconName&&b.autoFetchSvg&&e.firstChild&&e.firstChild.nodeType===Node.TEXT_NODE&&(n.iconName=e.firstChild.data)),n}function yo(e){var t=xe(e.attributes).reduce(function(n,i){return n.name!=="class"&&n.name!=="style"&&(n[i.name]=i.value),n},{}),a=e.getAttribute("title"),r=e.getAttribute("data-fa-title-id");return b.autoA11y&&(a?t["aria-labelledby"]="".concat(b.replacementClass,"-title-").concat(r||Me()):(t["aria-hidden"]="true",t.focusable="false")),t}function Ao(){return{iconName:null,title:null,titleId:null,prefix:null,transform:K,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function On(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},a=go(e),r=a.iconName,n=a.prefix,i=a.rest,o=yo(e),s=Rt("parseNodeAttributes",{},e),c=t.styleParser?bo(e):[];return v({iconName:r,title:e.getAttribute("title"),titleId:e.getAttribute("data-fa-title-id"),prefix:n,transform:K,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:i,styles:c,attributes:o}},s)}var wo=H.styles;function Ca(e){var t=b.autoReplaceSvg==="nest"?On(e,{styleParser:!1}):On(e);return~t.extra.classes.indexOf(ca)?te("generateLayersText",e,t):te("generateSvgReplacementMutation",e,t)}var le=new Set;Xt.map(function(e){le.add("fa-".concat(e))});Object.keys(Ie[I]).map(le.add.bind(le));Object.keys(Ie[R]).map(le.add.bind(le));le=Fe(le);function Pn(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!ne)return Promise.resolve();var a=_.documentElement.classList,r=function(d){return a.add("".concat(bn,"-").concat(d))},n=function(d){return a.remove("".concat(bn,"-").concat(d))},i=b.autoFetchSvg?le:Xt.map(function(f){return"fa-".concat(f)}).concat(Object.keys(wo));i.includes("fa")||i.push("fa");var o=[".".concat(ca,":not([").concat(pe,"])")].concat(i.map(function(f){return".".concat(f,":not([").concat(pe,"])")})).join(", ");if(o.length===0)return Promise.resolve();var s=[];try{s=xe(e.querySelectorAll(o))}catch{}if(s.length>0)r("pending"),n("complete");else return Promise.resolve();var c=nn.begin("onTree"),u=s.reduce(function(f,d){try{var g=Ca(d);g&&f.push(g)}catch(y){la||y.name==="MissingIcon"&&console.error(y)}return f},[]);return new Promise(function(f,d){Promise.all(u).then(function(g){ka(g,function(){r("active"),r("complete"),n("pending"),typeof t=="function"&&t(),c(),f()})}).catch(function(g){c(),d(g)})})}function xo(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;Ca(e).then(function(a){a&&ka([a],t)})}function Eo(e){return function(t){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=(t||{}).icon?t:Mt(t||{}),n=a.mask;return n&&(n=(n||{}).icon?n:Mt(n||{})),e(r,v(v({},a),{},{mask:n}))}}var So=function(t){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=a.transform,n=r===void 0?K:r,i=a.symbol,o=i===void 0?!1:i,s=a.mask,c=s===void 0?null:s,u=a.maskId,f=u===void 0?null:u,d=a.title,g=d===void 0?null:d,y=a.titleId,N=y===void 0?null:y,T=a.classes,P=T===void 0?[]:T,M=a.attributes,p=M===void 0?{}:M,A=a.styles,w=A===void 0?{}:A;if(!!t){var m=t.prefix,k=t.iconName,z=t.icon;return bt(v({type:"icon"},t),function(){return ve("beforeDOMElementCreation",{iconDefinition:t,params:a}),b.autoA11y&&(g?p["aria-labelledby"]="".concat(b.replacementClass,"-title-").concat(N||Me()):(p["aria-hidden"]="true",p.focusable="false")),tn({icons:{main:zt(z),mask:c?zt(c.icon):{found:!1,width:null,height:null,icon:{}}},prefix:m,iconName:k,transform:v(v({},K),n),symbol:o,title:g,maskId:f,titleId:N,extra:{attributes:p,styles:w,classes:P}})})}},ko={mixout:function(){return{icon:Eo(So)}},hooks:function(){return{mutationObserverCallbacks:function(a){return a.treeCallback=Pn,a.nodeCallback=xo,a}}},provides:function(t){t.i2svg=function(a){var r=a.node,n=r===void 0?_:r,i=a.callback,o=i===void 0?function(){}:i;return Pn(n,o)},t.generateSvgReplacementMutation=function(a,r){var n=r.iconName,i=r.title,o=r.titleId,s=r.prefix,c=r.transform,u=r.symbol,f=r.mask,d=r.maskId,g=r.extra;return new Promise(function(y,N){Promise.all([Lt(n,s),f.iconName?Lt(f.iconName,f.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(T){var P=Yt(T,2),M=P[0],p=P[1];y([a,tn({icons:{main:M,mask:p},prefix:s,iconName:n,transform:c,symbol:u,maskId:d,title:i,titleId:o,extra:g,watchable:!0})])}).catch(N)})},t.generateAbstractIcon=function(a){var r=a.children,n=a.attributes,i=a.main,o=a.transform,s=a.styles,c=pt(s);c.length>0&&(n.style=c);var u;return Jt(o)&&(u=te("generateAbstractTransformGrouping",{main:i,transform:o,containerWidth:i.width,iconWidth:i.width})),r.push(u||i.icon),{children:r,attributes:n}}}},No={mixout:function(){return{layer:function(a){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=r.classes,i=n===void 0?[]:n;return bt({type:"layer"},function(){ve("beforeDOMElementCreation",{assembler:a,params:r});var o=[];return a(function(s){Array.isArray(s)?s.map(function(c){o=o.concat(c.abstract)}):o=o.concat(s.abstract)}),[{tag:"span",attributes:{class:["".concat(b.cssPrefix,"-layers")].concat(Fe(i)).join(" ")},children:o}]})}}}},Co={mixout:function(){return{counter:function(a){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=r.title,i=n===void 0?null:n,o=r.classes,s=o===void 0?[]:o,c=r.attributes,u=c===void 0?{}:c,f=r.styles,d=f===void 0?{}:f;return bt({type:"counter",content:a},function(){return ve("beforeDOMElementCreation",{content:a,params:r}),io({content:a.toString(),title:i,extra:{attributes:u,styles:d,classes:["".concat(b.cssPrefix,"-layers-counter")].concat(Fe(s))}})})}}}},Oo={mixout:function(){return{text:function(a){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=r.transform,i=n===void 0?K:n,o=r.title,s=o===void 0?null:o,c=r.classes,u=c===void 0?[]:c,f=r.attributes,d=f===void 0?{}:f,g=r.styles,y=g===void 0?{}:g;return bt({type:"text",content:a},function(){return ve("beforeDOMElementCreation",{content:a,params:r}),En({content:a,transform:v(v({},K),i),title:s,extra:{attributes:d,styles:y,classes:["".concat(b.cssPrefix,"-layers-text")].concat(Fe(u))}})})}}},provides:function(t){t.generateLayersText=function(a,r){var n=r.title,i=r.transform,o=r.extra,s=null,c=null;if(ia){var u=parseInt(getComputedStyle(a).fontSize,10),f=a.getBoundingClientRect();s=f.width/u,c=f.height/u}return b.autoA11y&&!n&&(o.attributes["aria-hidden"]="true"),Promise.resolve([a,En({content:a.innerHTML,width:s,height:c,transform:i,title:n,extra:o,watchable:!0})])}}},Po=new RegExp('"',"ug"),In=[1105920,1112319];function Io(e){var t=e.replace(Po,""),a=Ui(t,0),r=a>=In[0]&&a<=In[1],n=t.length===2?t[0]===t[1]:!1;return{value:_t(n?t[0]:t),isSecondary:r||n}}function _n(e,t){var a="".concat(bi).concat(t.replace(":","-"));return new Promise(function(r,n){if(e.getAttribute(a)!==null)return r();var i=xe(e.children),o=i.filter(function(z){return z.getAttribute(It)===t})[0],s=oe.getComputedStyle(e,t),c=s.getPropertyValue("font-family").match(xi),u=s.getPropertyValue("font-weight"),f=s.getPropertyValue("content");if(o&&!c)return e.removeChild(o),r();if(c&&f!=="none"&&f!==""){var d=s.getPropertyValue("content"),g=~["Sharp"].indexOf(c[2])?R:I,y=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(c[2])?_e[g][c[2].toLowerCase()]:Ei[g][u],N=Io(d),T=N.value,P=N.isSecondary,M=c[0].startsWith("FontAwesome"),p=$t(y,T),A=p;if(M){var w=Xi(T);w.iconName&&w.prefix&&(p=w.iconName,y=w.prefix)}if(p&&!P&&(!o||o.getAttribute(Gt)!==y||o.getAttribute(Vt)!==A)){e.setAttribute(a,A),o&&e.removeChild(o);var m=Ao(),k=m.extra;k.attributes[It]=t,Lt(p,y).then(function(z){var C=tn(v(v({},m),{},{icons:{main:z,mask:en()},prefix:y,iconName:A,extra:k,watchable:!0})),F=_.createElement("svg");t==="::before"?e.insertBefore(F,e.firstChild):e.appendChild(F),F.outerHTML=C.map(function(Ue){return je(Ue)}).join(`
`),e.removeAttribute(a),r()}).catch(n)}else r()}else r()})}function _o(e){return Promise.all([_n(e,"::before"),_n(e,"::after")])}function To(e){return e.parentNode!==document.head&&!~yi.indexOf(e.tagName.toUpperCase())&&!e.getAttribute(It)&&(!e.parentNode||e.parentNode.tagName!=="svg")}function Tn(e){if(!!ne)return new Promise(function(t,a){var r=xe(e.querySelectorAll("*")).filter(To).map(_o),n=nn.begin("searchPseudoElements");Na(),Promise.all(r).then(function(){n(),Qt(),t()}).catch(function(){n(),Qt(),a()})})}var Ro={hooks:function(){return{mutationObserverCallbacks:function(a){return a.pseudoElementsCallback=Tn,a}}},provides:function(t){t.pseudoElements2svg=function(a){var r=a.node,n=r===void 0?_:r;b.searchPseudoElements&&Tn(n)}}},Rn=!1,Mo={mixout:function(){return{dom:{unwatch:function(){Na(),Rn=!0}}}},hooks:function(){return{bootstrap:function(){Cn(Rt("mutationObserverCallbacks",{}))},noAuto:function(){ho()},watch:function(a){var r=a.observeMutationsRoot;Rn?Qt():Cn(Rt("mutationObserverCallbacks",{observeMutationsRoot:r}))}}}},Mn=function(t){var a={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return t.toLowerCase().split(" ").reduce(function(r,n){var i=n.toLowerCase().split("-"),o=i[0],s=i.slice(1).join("-");if(o&&s==="h")return r.flipX=!0,r;if(o&&s==="v")return r.flipY=!0,r;if(s=parseFloat(s),isNaN(s))return r;switch(o){case"grow":r.size=r.size+s;break;case"shrink":r.size=r.size-s;break;case"left":r.x=r.x-s;break;case"right":r.x=r.x+s;break;case"up":r.y=r.y-s;break;case"down":r.y=r.y+s;break;case"rotate":r.rotate=r.rotate+s;break}return r},a)},zo={mixout:function(){return{parse:{transform:function(a){return Mn(a)}}}},hooks:function(){return{parseNodeAttributes:function(a,r){var n=r.getAttribute("data-fa-transform");return n&&(a.transform=Mn(n)),a}}},provides:function(t){t.generateAbstractTransformGrouping=function(a){var r=a.main,n=a.transform,i=a.containerWidth,o=a.iconWidth,s={transform:"translate(".concat(i/2," 256)")},c="translate(".concat(n.x*32,", ").concat(n.y*32,") "),u="scale(".concat(n.size/16*(n.flipX?-1:1),", ").concat(n.size/16*(n.flipY?-1:1),") "),f="rotate(".concat(n.rotate," 0 0)"),d={transform:"".concat(c," ").concat(u," ").concat(f)},g={transform:"translate(".concat(o/2*-1," -256)")},y={outer:s,inner:d,path:g};return{tag:"g",attributes:v({},y.outer),children:[{tag:"g",attributes:v({},y.inner),children:[{tag:r.icon.tag,children:r.icon.children,attributes:v(v({},r.icon.attributes),y.path)}]}]}}}},xt={x:0,y:0,width:"100%",height:"100%"};function zn(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return e.attributes&&(e.attributes.fill||t)&&(e.attributes.fill="black"),e}function Lo(e){return e.tag==="g"?e.children:[e]}var Do={hooks:function(){return{parseNodeAttributes:function(a,r){var n=r.getAttribute("data-fa-mask"),i=n?ht(n.split(" ").map(function(o){return o.trim()})):en();return i.prefix||(i.prefix=se()),a.mask=i,a.maskId=r.getAttribute("data-fa-mask-id"),a}}},provides:function(t){t.generateAbstractMask=function(a){var r=a.children,n=a.attributes,i=a.main,o=a.mask,s=a.maskId,c=a.transform,u=i.width,f=i.icon,d=o.width,g=o.icon,y=Mi({transform:c,containerWidth:d,iconWidth:u}),N={tag:"rect",attributes:v(v({},xt),{},{fill:"white"})},T=f.children?{children:f.children.map(zn)}:{},P={tag:"g",attributes:v({},y.inner),children:[zn(v({tag:f.tag,attributes:v(v({},f.attributes),y.path)},T))]},M={tag:"g",attributes:v({},y.outer),children:[P]},p="mask-".concat(s||Me()),A="clip-".concat(s||Me()),w={tag:"mask",attributes:v(v({},xt),{},{id:p,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[N,M]},m={tag:"defs",children:[{tag:"clipPath",attributes:{id:A},children:Lo(g)},w]};return r.push(m,{tag:"rect",attributes:v({fill:"currentColor","clip-path":"url(#".concat(A,")"),mask:"url(#".concat(p,")")},xt)}),{children:r,attributes:n}}}},Qo={provides:function(t){var a=!1;oe.matchMedia&&(a=oe.matchMedia("(prefers-reduced-motion: reduce)").matches),t.missingIconAbstract=function(){var r=[],n={fill:"currentColor"},i={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};r.push({tag:"path",attributes:v(v({},n),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var o=v(v({},i),{},{attributeName:"opacity"}),s={tag:"circle",attributes:v(v({},n),{},{cx:"256",cy:"364",r:"28"}),children:[]};return a||s.children.push({tag:"animate",attributes:v(v({},i),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:v(v({},o),{},{values:"1;0;1;1;0;1;"})}),r.push(s),r.push({tag:"path",attributes:v(v({},n),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:a?[]:[{tag:"animate",attributes:v(v({},o),{},{values:"1;0;0;0;0;1;"})}]}),a||r.push({tag:"path",attributes:v(v({},n),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:v(v({},o),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:r}}}},Fo={hooks:function(){return{parseNodeAttributes:function(a,r){var n=r.getAttribute("data-fa-symbol"),i=n===null?!1:n===""?!0:n;return a.symbol=i,a}}}},Bo=[Di,ko,No,Co,Oo,Ro,Mo,zo,Do,Qo,Fo];Zi(Bo,{mixoutsTo:j});j.noAuto;j.config;j.library;j.dom;var Ft=j.parse;j.findIconDefinition;j.toHtml;var jo=j.icon;j.layer;j.text;j.counter;function Ln(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable})),a.push.apply(a,r)}return a}function ie(e){for(var t=1;t<arguments.length;t++){var a=arguments[t]!=null?arguments[t]:{};t%2?Ln(Object(a),!0).forEach(function(r){ge(e,r,a[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):Ln(Object(a)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(a,r))})}return e}function ct(e){return ct=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},ct(e)}function ge(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function Uo(e,t){if(e==null)return{};var a={},r=Object.keys(e),n,i;for(i=0;i<r.length;i++)n=r[i],!(t.indexOf(n)>=0)&&(a[n]=e[n]);return a}function Wo(e,t){if(e==null)return{};var a=Uo(e,t),r,n;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],!(t.indexOf(r)>=0)&&(!Object.prototype.propertyIsEnumerable.call(e,r)||(a[r]=e[r]))}return a}function Bt(e){return Ho(e)||Yo(e)||qo(e)||Go()}function Ho(e){if(Array.isArray(e))return jt(e)}function Yo(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function qo(e,t){if(!!e){if(typeof e=="string")return jt(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);if(a==="Object"&&e.constructor&&(a=e.constructor.name),a==="Map"||a==="Set")return Array.from(e);if(a==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return jt(e,t)}}function jt(e,t){(t==null||t>e.length)&&(t=e.length);for(var a=0,r=new Array(t);a<t;a++)r[a]=e[a];return r}function Go(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Vo(e){var t,a=e.beat,r=e.fade,n=e.beatFade,i=e.bounce,o=e.shake,s=e.flash,c=e.spin,u=e.spinPulse,f=e.spinReverse,d=e.pulse,g=e.fixedWidth,y=e.inverse,N=e.border,T=e.listItem,P=e.flip,M=e.size,p=e.rotation,A=e.pull,w=(t={"fa-beat":a,"fa-fade":r,"fa-beat-fade":n,"fa-bounce":i,"fa-shake":o,"fa-flash":s,"fa-spin":c,"fa-spin-reverse":f,"fa-spin-pulse":u,"fa-pulse":d,"fa-fw":g,"fa-inverse":y,"fa-border":N,"fa-li":T,"fa-flip":P===!0,"fa-flip-horizontal":P==="horizontal"||P==="both","fa-flip-vertical":P==="vertical"||P==="both"},ge(t,"fa-".concat(M),typeof M<"u"&&M!==null),ge(t,"fa-rotate-".concat(p),typeof p<"u"&&p!==null&&p!==0),ge(t,"fa-pull-".concat(A),typeof A<"u"&&A!==null),ge(t,"fa-swap-opacity",e.swapOpacity),t);return Object.keys(w).map(function(m){return w[m]?m:null}).filter(function(m){return m})}function Xo(e){return e=e-0,e===e}function Oa(e){return Xo(e)?e:(e=e.replace(/[\-_\s]+(.)?/g,function(t,a){return a?a.toUpperCase():""}),e.substr(0,1).toLowerCase()+e.substr(1))}var Ko=["style"];function Jo(e){return e.charAt(0).toUpperCase()+e.slice(1)}function Zo(e){return e.split(";").map(function(t){return t.trim()}).filter(function(t){return t}).reduce(function(t,a){var r=a.indexOf(":"),n=Oa(a.slice(0,r)),i=a.slice(r+1).trim();return n.startsWith("webkit")?t[Jo(n)]=i:t[n]=i,t},{})}function Pa(e,t){var a=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof t=="string")return t;var r=(t.children||[]).map(function(c){return Pa(e,c)}),n=Object.keys(t.attributes||{}).reduce(function(c,u){var f=t.attributes[u];switch(u){case"class":c.attrs.className=f,delete t.attributes.class;break;case"style":c.attrs.style=Zo(f);break;default:u.indexOf("aria-")===0||u.indexOf("data-")===0?c.attrs[u.toLowerCase()]=f:c.attrs[Oa(u)]=f}return c},{attrs:{}}),i=a.style,o=i===void 0?{}:i,s=Wo(a,Ko);return n.attrs.style=ie(ie({},n.attrs.style),o),e.apply(void 0,[t.tag,ie(ie({},n.attrs),s)].concat(Bt(r)))}var Ia=!1;try{Ia=!0}catch{}function $o(){if(!Ia&&console&&typeof console.error=="function"){var e;(e=console).error.apply(e,arguments)}}function Dn(e){if(e&&ct(e)==="object"&&e.prefix&&e.iconName&&e.icon)return e;if(Ft.icon)return Ft.icon(e);if(e===null)return null;if(e&&ct(e)==="object"&&e.prefix&&e.iconName)return e;if(Array.isArray(e)&&e.length===2)return{prefix:e[0],iconName:e[1]};if(typeof e=="string")return{prefix:"fas",iconName:e}}function Et(e,t){return Array.isArray(t)&&t.length>0||!Array.isArray(t)&&t?ge({},e,t):{}}var q=Un.forwardRef(function(e,t){var a=e.icon,r=e.mask,n=e.symbol,i=e.className,o=e.title,s=e.titleId,c=e.maskId,u=Dn(a),f=Et("classes",[].concat(Bt(Vo(e)),Bt(i.split(" ")))),d=Et("transform",typeof e.transform=="string"?Ft.transform(e.transform):e.transform),g=Et("mask",Dn(r)),y=jo(u,ie(ie(ie(ie({},f),d),g),{},{symbol:n,title:o,titleId:s,maskId:c}));if(!y)return $o("Could not find icon",u),null;var N=y.abstract,T={ref:t};return Object.keys(e).forEach(function(P){q.defaultProps.hasOwnProperty(P)||(T[P]=e[P])}),es(N[0],T)});q.displayName="FontAwesomeIcon";q.propTypes={beat:x.exports.bool,border:x.exports.bool,beatFade:x.exports.bool,bounce:x.exports.bool,className:x.exports.string,fade:x.exports.bool,flash:x.exports.bool,mask:x.exports.oneOfType([x.exports.object,x.exports.array,x.exports.string]),maskId:x.exports.string,fixedWidth:x.exports.bool,inverse:x.exports.bool,flip:x.exports.oneOf([!0,!1,"horizontal","vertical","both"]),icon:x.exports.oneOfType([x.exports.object,x.exports.array,x.exports.string]),listItem:x.exports.bool,pull:x.exports.oneOf(["right","left"]),pulse:x.exports.bool,rotation:x.exports.oneOf([0,90,180,270]),shake:x.exports.bool,size:x.exports.oneOf(["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:x.exports.bool,spinPulse:x.exports.bool,spinReverse:x.exports.bool,symbol:x.exports.oneOfType([x.exports.bool,x.exports.string]),title:x.exports.string,titleId:x.exports.string,transform:x.exports.oneOfType([x.exports.string,x.exports.object]),swapOpacity:x.exports.bool};q.defaultProps={border:!1,className:"",mask:null,maskId:null,fixedWidth:!1,inverse:!1,flip:!1,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,spinPulse:!1,spinReverse:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:"",titleId:null,transform:null,swapOpacity:!1};var es=Pa.bind(null,Un.createElement),ts={prefix:"fas",iconName:"caret-right",icon:[256,512,[],"f0da","M246.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-9.2-9.2-22.9-11.9-34.9-6.9s-19.8 16.6-19.8 29.6l0 256c0 12.9 7.8 24.6 19.8 29.6s25.7 2.2 34.9-6.9l128-128z"]},ns={prefix:"fas",iconName:"wifi",icon:[640,512,["wifi-3","wifi-strong"],"f1eb","M54.2 202.9C123.2 136.7 216.8 96 320 96s196.8 40.7 265.8 106.9c12.8 12.2 33 11.8 45.2-.9s11.8-33-.9-45.2C549.7 79.5 440.4 32 320 32S90.3 79.5 9.8 156.7C-2.9 169-3.3 189.2 8.9 202s32.5 13.2 45.2 .9zM320 256c56.8 0 108.6 21.1 148.2 56c13.3 11.7 33.5 10.4 45.2-2.8s10.4-33.5-2.8-45.2C459.8 219.2 393 192 320 192s-139.8 27.2-190.5 72c-13.3 11.7-14.5 31.9-2.8 45.2s31.9 14.5 45.2 2.8c39.5-34.9 91.3-56 148.2-56zm64 160c0-35.3-28.7-64-64-64s-64 28.7-64 64s28.7 64 64 64s64-28.7 64-64z"]},as={prefix:"fas",iconName:"arrow-left",icon:[448,512,[8592],"f060","M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"]},rs={prefix:"fas",iconName:"envelope",icon:[512,512,[128386,9993,61443],"f0e0","M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"]},is={prefix:"fas",iconName:"angle-down",icon:[448,512,[8964],"f107","M201.4 374.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 306.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"]},os={prefix:"fas",iconName:"check",icon:[512,512,[10003,10004],"f00c","M470.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L192 338.7 425.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"]};const ss=e=>{switch(e){case"bebanca":return ni;case"deezer":return ai;case"hbomax":return ri;case"nordestefc":return ii;case"tocalivros":return oi;case"watchbr":return si;default:return""}},ls=e=>h("div",{className:"plan__button",children:[l("img",{src:ss(e.bonusType),alt:`${e.bonusType} logo`}),l(q,{icon:ts,className:"caret-right",size:"xl"})]}),J=e=>{var t;return h("div",{className:"plan__card",children:[h("div",{className:"plan__card-top",children:[h("h1",{children:[e.speed," Mega"]}),l("h2",{children:e.description==="fibra"?"Internet fibra + aplicativos":"de internet r\xE1dio"})]}),h("div",{className:"plan__card-center",children:[h("div",{className:"wifi-icon",children:[l(q,{icon:ns,className:"wifi-icon"}),"Wi-Fi"]}),(t=e.bonus)==null?void 0:t.map((a,r)=>l(ls,{bonusType:a},r)),e.bonus_info?l("span",{children:"Informa\xE7\xF5es adicionais"}):l("div",{})]}),h("div",{className:"plan__card-end",children:[h("div",{className:"plan__card-bottom",children:[h("h1",{children:["R$",e.price]}),l("span",{children:"/m\xEAs"})]}),l("a",{children:"ASSINE J\xC1!"})]})]})},cs="/online-telecom/assets/bg_teleco_tv.3d2cca4f.png",us="Abaetetuba-CE",fs="Bai\xE3o-CE",ds="Barcarena-CE",ms="Maguari-CE",ps="Marituba-CE ",vs="Mocajuba-CE",hs="Moju-CE",bs="Tail\xE2ndia-CE",gs="Vigia-CE",ys="Anapurus-MA",As="Brasileira-PI",ws="Piracuruca-PI",xs="Piripiri-PI",Es="Alc\xE2ntaras-CE",Ss="Ararend\xE1-CE",ks="Barroquinha-CE ",Ns="Cai\xE7ara-CE",Cs="Camocim-CE",Os="Carir\xE9-CE",Ps="Carnaubal-CE",Is="Catunda-CE",_s="Chaval-CE",Ts="Crate\xFAs-CE",Rs="Guaraciaba-CE",Ms="Hidrol\xE2ndia-CE",zs="Ibiapina-CE",Ls="Independ\xEAncia-CE",Ds="Ipueiras-CE",Qs="Iraj\xE1-CE",Fs="Itatira-CE",Bs="Lisieux-CE",js="Meruoca-CE",Us="Pacatuba-CE",Ws="Reriutaba-CE",Hs="Tamboril-CE",Ys="Ubajara-CE",qs="Varjota-CE",Gs={abaetuba:us,baiao:fs,barcarena:ds,maguari:ms,marituba:ps,mocajuba:vs,moju:hs,tailandia:bs,vigia:gs,"vila-dos-cabanos":"Vila dos Cabanos-CE",anapurus:ys,"sao-bernardo":"S\xE3o Bernardo-MA",brasileira:As,"pedro-ii":"Pedro II-PI",piracuruca:ws,piripiri:xs,alcantaras:Es,ararenda:Ss,barroquinha:ks,"boa-viagem":"Boa Viagem-CE",caicara:Ns,camocim:Cs,carire:Os,carnaubal:Ps,catunda:Is,chaval:_s,crateus:Ts,guaraciaba:Rs,hidrolandia:Ms,ibiapina:zs,independencia:Ls,ipueiras:Ds,iraja:Qs,itatira:Fs,liseux:Bs,meruoca:js,"monsenhor-tabosa":"Monsenhor Tabosa-CE","novo-oriente":"Novo Oriente-CE",pactuba:Us,reriutaba:Ws,"santa-quiteria":"Santa Quit\xE9ria-CE",tamboril:Hs,ubajara:Ys,varjota:qs};const Vs=()=>l("div",{className:"combo",children:h("div",{className:"container",children:[h("div",{className:"combo__text",children:[l("h3",{children:"Monte seu combo"}),l("p",{children:"Combos de TV, internet e telefone para voc\xEA com pre\xE7os especiais!"})]}),l("div",{className:"combo__button",children:"Monte agora"})]})});const Xs="/online-telecom/assets/newsletter-image.5416948f.png";const Ks=()=>{const[e,t]=Wn();return h("div",{className:"emailinput",children:[h("form",{children:[l("input",{className:"input",type:"email",placeholder:"E-mail"}),l("button",{children:"CADASTRAR"})]}),h("div",{className:"confirmation",onClick:()=>t(),children:[l(q,{icon:os,className:`check${e?"-active":""}`}),l("div",{children:"Aceito receber e-mails de not\xEDcias."})]})]})},Js=()=>l("div",{className:"newsletter",children:h("div",{className:"container",children:[h("div",{className:"newsletter_text",children:[l("img",{src:Xs}),l("small",{children:"CLUBE ONLINE"}),h("p",{children:["Assine nossa newsletter e"," ",l("b",{children:"fique por dentro de todas as nossas ofertas!"})]})]}),l("div",{className:"newsletter_emailinput",children:l(Ks,{})})]})}),Qn=e=>e.type==="combo"?l(Vs,{}):e.type==="newsletter"?l(Js,{}):l("div",{});const Zs=e=>l("div",{className:"angleicon",children:l(q,{className:`angledirection-${(()=>e.active?"up":"down")()}`,icon:is})}),G=e=>{const[t,a]=Y.exports.useState(e.active),r=()=>{a(!t)};return h("div",{className:"accordion",onClick:()=>{r()},children:[h("div",{className:"accordion__question",children:[e.question,l(Zs,{active:t})]}),t?l("p",{className:"accordion__answer",children:e.answer}):l("div",{})]})};const $s=()=>h("div",{className:"faq",children:[l("small",{children:"FAQ"}),l("h3",{children:"Tire suas d\xFAvidas"}),l(G,{question:"Por que a Online Telecom \xE9 a op\xE7\xE3o perfeita para voc\xEA?",answer:"Ofertamos internet de alta qualidade com condi\xE7\xF5es que cabem no seu bolso, suporte t\xE9cnico especializado e eficiente, atendimento 24h todos os dias\u2026 Atualmente, estamos em 4 estados das Regi\xF5es Norte e Nordeste, com aproximadamente mais de 100 mil clientes ativos, que utilizam e aprovam os nossos servi\xE7os.",active:!0}),l(G,{question:"Internet fibra \xF3ptica: o que \xE9 e como funciona?",answer:"A fibra \xF3ptica \xE9 um cabo fino e flex\xEDvel usado pra transmitir dados na velocidade da luz(muito r\xE1pido!). Essa tecnologia permite oferecer uma internet residencial de alta velocidade pros usu\xE1rios. A Online Fibra \xE9 a internet fibra \xF3ptica de alta tecnologia da Online Telecom. Com ela, voc\xEA pode ter uma internet mais r\xE1pida, est\xE1vel e de qualidade, ideal para ver todos os seus filmes e s\xE9ries e jogar com menos lag! Online Fibra oferece aos usu\xE1rios diversos planos de internet com velocidades que chegam at\xE9 500 Mega. Ao contratar Online fibra pra sua casa, o usu\xE1rio leva um roteador pra conectar todos os dispositivos, acesso ao tocalivros e ao NordesteFC e outros benef\xEDcios que s\xF3 nossos clientes t\xEAm.",active:!1}),l(G,{question:"Quero conhecer os planos Online Telecom, como fa\xE7o para contratar?",answer:"J\xE1 adianto que temos v\xE1rias op\xE7\xF5es para voc\xEA encontrar de forma simples e r\xE1pida o melhor plano pra atender sua necessidade: Op\xE7\xE3o 01. Voc\xEA pode acessar nosso site onlinetelecom.com.br Op\xE7\xE3o 02. Entrar em contato pelo nosso Whatsapp ou nos ligar pelo 0800 088 1111. Op\xE7\xE3o 03. Refor\xE7amos o convite para voc\xEA nos visitar na loja mais pr\xF3xima e ter uma experi\xEAncia totalmente ON. Ser\xE1 um prazer lhe receber!",active:!1}),l(G,{question:"Quais as op\xE7\xF5es de pagamento da minha fatura?",answer:"Os pagamentos dever\xE3o ser realizados atrav\xE9s do boleto disponibilizado, em ag\xEAncias Lot\xE9ricas, Bradesco Expresso, ou no aplicativo do seu Banco.",active:!1}),l(G,{question:"Estou sem acesso \xE0 internet, como posso resolver?",answer:"Primeiro, verifique se todos os cabos dos seus aparelhos est\xE3o conectados. Ap\xF3s isso, desconecte o equipamento da tomada e ap\xF3s 20 segundos, conecte novamente. Aguarde 5 minutos e confira se o sinal retornou. Caso o problema persista fale com um de nossos atendentes atrav\xE9s do WhatsApp ou por liga\xE7\xE3o no 0800 088 1111.",active:!1}),l(G,{question:"Como renegociar minhas faturas e ficar ON novamente?",answer:"Entre em contato com nossa central no 0800 088 1111 ou acesse o aplicativo Minha Online para iniciar um atendimento com um de nossos colaboradores e verificar qual a melhor condi\xE7\xE3o de renegocia\xE7\xE3o de d\xEDvida para voc\xEA.",active:!1}),l(G,{question:"Minha internet foi desativada por falta de pagamento, como proceder?",answer:"Quando a conex\xE3o \xE9 desativada por falta de pagamento e voc\xEA precisa que ela seja reativada, basta apresentar o comprovante de todos os boletos em atraso. Caso os comprovantes de pagamento sejam enviados dentro do hor\xE1rio comercial \xE9 poss\xEDvel a reativa\xE7\xE3o da sua conex\xE3o no mesmo dia, caso contr\xE1rio, a sua conex\xE3o ser\xE1 reativada no dia seguinte, assim que o pagamento for identificado.",active:!1}),l(G,{question:"Como alterar a velocidade do meu plano?",answer:"Voc\xEA pode entrar em contato atrav\xE9s dos nossos canais de atendimento pelo 0800 088 1111, l\xE1 voc\xEA ser\xE1 encaminhado para o setor especializado onde realizaremos a troca da sua velocidade. Ap\xF3s a solicita\xE7\xE3o ser realizada, o carn\xEA com o valor atualizado da mensalidade pode ser retirado na nossa loja mais pr\xF3xima ou pelo aplicativo.",active:!1}),l(G,{question:"Como realizar o cancelamento do meu Cadastro?",answer:"Entre em contato atrav\xE9s do nosso canal de atendimento 0800 088 1111, l\xE1 voc\xEA ser\xE1 direcionado ao nosso setor especializado ou visite nossa loja mais pr\xF3xima para receber orienta\xE7\xE3o. Mas, deixo aqui embaixo duas poss\xEDveis solu\xE7\xF5es com base na sua d\xFAvida: 01. Vou realizar uma mudan\xE7a de endere\xE7o, gostaria de saber se gera alguma cobran\xE7a? - Se for sua primeira solicita\xE7\xE3o n\xE3o, a cobran\xE7a ser\xE1 gerada a partir da segunda solicita\xE7\xE3o de mudan\xE7a e o valor cobrado poder\xE1 sofrer altera\xE7\xF5es de acordo com a revenda da sua cidade. 02. Gostaria de realizar uma mudan\xE7a de titularidade, como devo fazer? - O atual titular, juntamente com o novo titular do contrato, devem comparecer \xE0 loja de sua cidade com RG, CPF e comprovante de endere\xE7o do novo titular em m\xE3os para realizarmos a troca de titularidade e a emiss\xE3o do novo carn\xEA.",active:!1}),l(G,{question:"A sua opini\xE3o \xE9 muito importante para n\xF3s! Descubra como deixar uma cr\xEDtica, elogio e/ou sugest\xE3o de melhoria:",answer:"Entre em contato com a nossa central de atendimento acessando o aplicativo Minha Online ou fale agora pelo WhatsApp com o Teleco, a nossa intelig\xEAncia artificial. Tamb\xE9m podemos atender voc\xEA por telefone: ligue 0800 088 1111 , em qualquer dia e hor\xE1rio.",active:!1})]});const Fn=e=>l("div",{className:"help__item",children:h("div",{className:"help__item-container",children:[l("img",{src:e.icon,alt:`${e.icon} indicador`}),l("p",{children:e.text})]})}),el="/online-telecom/assets/call_icon.6a8a7f09.svg",tl="/online-telecom/assets/chat_icon.271fd80b.svg";const nl=e=>h("div",{className:"address__card",children:[l("small",{children:"Onde nos encontrar"}),l("h3",{children:"Endere\xE7o"}),l("p",{className:"Rua",children:e.place}),l("div",{className:"address__info",children:"Segunda a sexta, das 7h30min \xE0s 12h/ das 14h \xE0s 17h30min S\xE1bado, das 8h \xE0s 12h"})]}),al=()=>h("div",{className:"contact",children:[l("small",{children:"Entre em contato"}),l("h3",{children:"Precisa de ajuda?"}),h("div",{className:"help__grid",children:[l(Fn,{icon:el,text:"Ligue Agora"}),l(Fn,{icon:tl,text:"Chat Online"})]}),l(nl,{place:"Rua Sem Nome, 360 \u2013 Centro "})]});const rl="data:image/webp;base64,UklGRkQFAABXRUJQVlA4TDgFAAAvmEAMEG/kuG0kR1L1nLeBXf7Pi2LW73ZXGo4jSXKU6jktfoD/FmAIjvBWp+9mxkEkSYpUPUdPFt6/wGMsU5FsbAT9f2TRQAQaaCAATr9PIxLDNBmmiRGJYZoY9WlCAjRMk2GakDAAIUAM/5HBME1AJAwQhv9kmCYgEn2agAyGaUIChLAdJ+CABiGKqJe5xnEYzoqKKyseTp3fOOKUhZIbjkMXDBAZt1Wn0iN5GCGEik0IGBBOwA4n3EAWZ+AUCfngVLZEILietRJjIJqiAjHE6d443YrKiCGiDYjoAgFBBgQZsEBAkAGL86NgiLbEEL9a1yEk/F+HcpWjTqWDhNH0EYHj1LHrOJDPv0JvPhqNN2+NBoQAy6NRLnTcl0a5M4hJ9/FDxJcfjkAgOX/sJSIigsGWJEm1cr4Gd4cB+rq74O4yEbjrtQH2MF99DdeXiP5PAG1t/xs1jn8gw2qMbJJB8RBNENt7+9/A9/h8C0quIzmtlz8FMGzKWUT/J8Cy2poavp4v3l9cWK3dMSe+nF8+vL5o63LiK3r34V1TDF/TLy8a8EW9e/5l4dk/qFHcP/Z+TYqEnD4MvEYIVbSBsP2GDBoh5FTzwy/nIVcDhW9InzFCyKlqbvgVmEFdBSOZRfiu2FWIsLoKBhauqp+gqSo7O0YIOVV9vh17mXlOyxXAtiYaN9uYAG62eLo5wqIAVp0fI4Scqqp9/SKzlBpfyOmH0Nn5AOQU0qj4lJLa+RkyQshpuX3zAh5YbtJ13vSYr2C5yjd7ZFu0+SwZIeTLVJ/6XyTkuMF6lna7xkPaJyXwZ8kIoVDBHvGl63AhhIYnPobviZZWsCi3VXyw2WPn6/pMGSEUVNUe8R3unf4yatgKo439rXCmjBAKao9gf29v77e/DvFtPJARwt2I/2Cv4u8n8tjPj/PYz0/DCCFwtFf151G59r5q7D5kuQNYU4dQJwOy3OnguNqnEWWhXncqSf3xhIS8cxnHSaU/GbmQQpvbEE4opeZSSicj5F3n7YzjeG9v79e/GZmkhpEWQ9325TrU1tfWoW7yiNKEkEYBeFUDT+oQaoNtegjsUipHEnKsM/N2Bid7558Z6+UZuVY3dJbqRsBm6h0yJ0mu7BE0H1iqm1jLAVmO4wg51rh8O4Mwxk+1HmHSdU5TRUjSKq+kLSzk2vzjGK9Zzk5xj5n8wJP2cV7IYZLBUuE4Qp41rrg1gXql1NmlVAiqgLUmcKkVEFRh0lPIIx5JBlu5ESk1XkoD3Z1U8FrDpTZHEfIscvnWJOofMMm41BowyXbSUyDJ0WrCuKRJCGEhjehOGwYsVr6SjLU8JpVjCGGVmXlnCi/pVI9wSgCSmWRA1oQkt8dagyNCiKkwYE5TP+vspnqaVHEEIc8mM+9Ou/CiS03KUKUaeCQVptoAa815JD0dlzRhdJIY7IlyBToERa90BCHPAvPuTBAvbNLMBqImBkEevDwUpwBeLqXQNynspHi4SSHKM7DVRI5DDRkhrDDPh/Dyt5K8n3V2Tq7yUgabyoWpnIE59YJJzlhJs6qabg+wk9zTrVTF0IOXwsHGS+Re5o0sXnXr1Z0VsCDJZQBzkrzRbWPTdlhN9RRWTtJ0cwBWTk9ZOUlyBdhKdjDAPbs0iVcvOVuht2Rj8HE2Rq41p2t0H2fjwAZgZoXuWhVH+AiXVYxBSj33uYm1ZOetUveae++lacN543Gb2sL9t7YtnLsz+v9So/PL0hT7onx92d7l/JLcfXhvtXTFnV+Ouy8fXl1YVltzY8NX8/nLtxcX",il="data:image/webp;base64,UklGRqoEAABXRUJQVlA4TJ4EAAAvmEAMEEfkoI0kRyrpgTx/hJdmqj6QYNC2kaSsDsjxZ/jNJA7aRpKk7AI5/gz3u0oMQpKyCI8QSgohZZxBdQBUf3+vSiXgjolQqZgIqkpl5m8VJaBDWKdCMBEihEgmkjE9/yfzB0wqV8/+ESAzf5ZUZebv/j/uzPwRAhAO4ODK5M4qnQIlcL8PS2oTAUIIqO7vRakEIBpIIsKBM/f/UUEI41zvo1UAMjPHc4EQ4KCqrANcFELKoqrsjI0bSKETVxVCpFJR7QqyO5XK+/5NnXldiArP59QQDgtq17Ynjhs/U5jZoMLgLas4QbVdCFtFh1V03FYTRvcty0HnCed/D3rjuPQlov8T0Go9eHxp+nx8v9VqPfr51ohT563Bo9aDwYjT6Ghw7/EtTqe3Hl/ilDq6PLXw0v+t/jqw9pPp5MKqKDpWz5jUSonJnlN/rI+i5b/V06RPSwKfU4eiKDrARtgm96RG6EQsuRBkm7FkZ5sRUsy29BTZTVOZXGuj6CM2OOvdfIcksz20wrnMOpKcy6iZ95bcHkhKOrle3njkThNt57o60LsvTG6oDUnvjKtkzzK43uzkuX1y5+vvf3aVv/x6YtemV7Z/M6yhSc733ce+XyA6Jec7fq6Gl+09P3murYkKX3tjJirccLqe8bZPKZiXLw9Tk66Oc6SeNBdXRPVn/qykjDFdntPWLNKK65Dbw5epfatfY6j37Jk0dzdG9Vf+yEYlsLKwvgROmONRg1/z+V1tRwPvcckb5SfSqgY+bcLas2NRaMSlWu/xJIM8Ky818G0DDtBLTqNQ2IN+Vl5s4GgDCoAsMQd0zvtuh3TPzuoGdtfzUClsLvSsMXt8Lrg9xnSlkt9j9kiJgWaxg3LOBTJ0jXEh57vG2HNk6BrjxvBuAyuu1ErhMsSBpEfhAkmDQlvBIu+K5hFLWV4oCgCUkB75PkUBQDs0drCB6J3rNQQQbsXhgrjn5wCb094bICtxSHrnO4hDQQbERorazrlAhXbPK+hc3PNOqLDdewXb2E9NRK9eqjYPQ1roAkXSIs4ZkhqmZCscSYWsgKcUAC05TZIeEFISZPRQJOkRB7IH1djdzU1EW6op9MkhkJUJICUOqgTQxhiFw0Wk00B8tsxCk+RWHC6ziI0x24HG+HkjRyt5QGutgT1jK65AnktgamnYKqXNXV/XwNo7lQxK41ByBgglh6FLEvRZ30CXHYbKKbiyw1CsX4M/vFjve1YdAn2SHAJZicEsaZCSQWFPzpEabakiZ0gGVRAHkkPAkYcBKRPg8Lj4Ya39rOwQs1BD0wNKtwGXQ1snUEJqxIcpCZRO26bIQGmdAI7DBCpVGecArYEOyzgHtNM0OTsOflD0QtGbv1fTMEWHgZADki5zCQB9jqQoWFLaAFBiFQAkXZJfKSBxZCcBki6rsKMAJNlY7u6bWfb2d3/yxvH3Z1buvckxeiiKMG9gggiLQyDJ4M8Hlov3wuLzEpj35wPrnvfC6vWWcK7UwHAC/x0Z+vNlZ7xMFZP/36XLo6nl8a0p5fqTp4PRVDIa3G89HFwfTR2jW4OHrVbrwZPLl6bNy0+etlo=";var ol={prefix:"fab",iconName:"linkedin-in",icon:[448,512,[],"f0e1","M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"]},sl={prefix:"fab",iconName:"facebook-f",icon:[320,512,[],"f39e","M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"]},ll={prefix:"fab",iconName:"instagram",icon:[448,512,[],"f16d","M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"]},cl={prefix:"fab",iconName:"github",icon:[496,512,[],"f09b","M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"]},ul={prefix:"fab",iconName:"youtube",icon:[576,512,[61802],"f167","M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"]},fl={prefix:"fab",iconName:"twitter",icon:[512,512,[],"f099","M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"]};const _a=()=>{const e=[sl,ll,fl,ul,rs,ol];return l("footer",{className:"footer",children:h("div",{className:"container",children:[h("div",{className:"footer-container__columns",children:[h("div",{className:"footer-social_column",children:[h("div",{className:"logo",children:[l("img",{src:Zn,alt:"Online Logo"}),l("p",{children:"Baixe o app Minha Online"})]}),h("div",{className:"download",children:[l("img",{src:il,alt:"IOS Download"}),l("img",{src:rl,alt:"Android Download"})]}),l("div",{className:"social-media",children:(()=>e.map((a,r)=>l("div",{className:"social-icon",children:l(q,{icon:a,size:"lg",className:"icon"})},r)))()})]}),l("div",{className:"footer-options__container",children:h("ul",{className:"footer-institutional_column",children:[l("h2",{children:"Institucional"}),l("li",{children:"Minha online"}),l("li",{children:"Regulamentos"}),l("li",{children:"Trabalhe Conosco"}),l("li",{children:"Contato"}),l("li",{children:"Endere\xE7os"})]})}),l("div",{className:"footer-options__container",children:h("ul",{className:"footer-institutional_column",children:[l("h2",{children:"FAQ"}),l("li",{children:"Blog"}),l("li",{children:"RQUAL"}),l("li",{children:"Revendedores Autorizados"})]})}),l("div",{className:"footer-options__container",children:h("ul",{className:"footer-institutional_column",children:[l("h2",{children:"Regulamental"}),l("li",{children:"C\xF3digo de defesa do consumidor"}),l("li",{children:"Ouvidoria"}),l("li",{children:"Portal da Privacidade"})]})}),h("div",{className:"footer-contact_column",children:[l("div",{className:"footer-contact_item",children:l("a",{children:"0800 088 1111"})}),l("div",{className:"footer-contact_item",children:l("a",{children:"2\xAA Via"})}),l("div",{className:"footer-contact_item",children:l("a",{children:"falecom@online.net.br"})})]})]}),h("div",{className:"footer-container__copyrights",children:[l("div",{className:"copyright",children:"Todos os direitos reservados \xA9 Online Telecom"}),h("a",{href:"https://github.com/nellfs/online-telecom",children:[l(q,{icon:cl,size:"xl",style:{margin:"0 5px"}}),"Source-Code"]})]})]})})};const dl="/online-telecom/assets/tech_background.3144efb8.png",ml="/online-telecom/assets/404.17087247.png",pl=()=>h(jn,{children:[l(ea,{solid:!1}),l("div",{className:"main__404",children:h("div",{className:"container",children:[l("img",{className:"background",src:dl}),h("div",{className:"navbar__warning",children:[l("img",{className:"image404",src:ml}),l("h1",{children:"P\xC1GINA N\xC3O ENCONTRADA!"}),h(ue,{to:"/",children:[l(q,{className:"icon",icon:as})," ","VOLTAR"]})]})]})}),l("div",{className:"navbar__footer",children:l(_a,{})})]}),hl=()=>{const{city:e}=La(),t=Gs[e];return t===void 0?l(pl,{}):h("div",{className:"main-home",id:"home-id",children:[l(ea,{city:t}),l(qr,{}),h("div",{className:"page-home",children:[h("div",{className:"plans",children:[l("div",{className:"container",children:h("div",{className:"plans__header",children:[l("h3",{className:"plans__title",children:"Melhores ofertas para voc\xEA"}),h("div",{className:"plans__subtitle",children:[l("p",{children:"Planos de Internet de ultravelocidade + Wi-Fi e instala\xE7\xE3o gr\xE1tis"}),l("a",{children:"Veja todos os planos"})]})]})}),h("div",{className:"plans__container",children:[l(J,{speed:100,description:"fibra",bonus:["tocalivros","nordestefc","bebanca"],price:"79,90"}),l(J,{speed:300,description:"fibra",bonus:["tocalivros","nordestefc","bebanca"],price:"89,90"}),l(J,{speed:300,description:"fibra",bonus:["tocalivros","nordestefc","bebanca","deezer"],price:"99,90",bonus_info:!0}),l(J,{speed:500,description:"fibra",bonus:["tocalivros","nordestefc","bebanca","watchbr"],price:"109,90"}),l(J,{speed:500,description:"fibra",bonus:["tocalivros","nordestefc","bebanca","watchbr","deezer"],price:"119,90",bonus_info:!0}),l(J,{speed:600,description:"fibra",bonus:["tocalivros","nordestefc","bebanca","watchbr","hbomax"],price:"129,90"}),l(J,{speed:5,description:"radio",price:"59,90"}),l(J,{speed:7,description:"radio",price:"72,90"}),l(J,{speed:10,description:"radio",price:"84,90"})]})]}),h("div",{className:"new_services_container",children:[h("div",{className:"text",children:[h("div",{children:[l("h2",{children:"Novos servi\xE7os Online"}),l("p",{children:"Um mundo de possibilidades de entretenimento em v\xEDdeo que satisfaz os gostos de toda a fam\xEDlia. Desde desenhos animados para a crian\xE7ada, at\xE9 o futebol de domingo."})]}),h("div",{children:[l("h2",{children:"Como Funciona?"}),l("p",{children:"Voc\xEA pode conectar seus aparelhos como televisores, computadores e smartphones direto nos seus servi\xE7os preferidos e aproveitar as melhores solu\xE7\xF5es de entretenimento."})]})]}),l("img",{src:cs,alt:"teleco assistindo tv"})]}),l(Qn,{type:"combo"}),h("section",{className:"about-mode",children:[l($s,{}),l(al,{})]}),l(Qn,{type:"newsletter"})]}),l(_a,{})]})};export{hl as default};
