(this["webpackJsonpreact-user-guide-example"]=this["webpackJsonpreact-user-guide-example"]||[]).push([[0],{10:function(e,t,n){e.exports=n(21)},15:function(e,t,n){},21:function(e,t,n){"use strict";n.r(t);var i=n(2),s=n.n(i),o=n(4),r=n.n(o),u=(n(15),n(5)),a=n(6),d=n(9),l=n(8),c=n(7),p={width:"20vw",backgroundColor:"grey",marginTop:"30vh",marginLeft:"40vw",padding:5},f={yesText:"Yes",noText:"No",nextText:"Next",skipText:"Skip",finishText:"Finish"},h=[{querySelector:".unique-classname",position:"east",title:"First",message:"User guide position 'east'"},{querySelector:".unique-classname",position:"west",title:"Second",message:"User guide position 'west'"},{querySelector:".unique-classname",position:"north",title:"Third",message:"User guide position 'north'"},{querySelector:".unique-classname",tooltipWidth:500,position:"south",title:"Forth",message:"User guide position 'south', with custom width"}],g=function(e){Object(d.a)(n,e);var t=Object(l.a)(n);function n(){return Object(u.a)(this,n),t.apply(this,arguments)}return Object(a.a)(n,[{key:"render",value:function(){return s.a.createElement(c.a,{buttonConfig:f,guides:h},s.a.createElement("div",{style:p,className:"unique-classname"},"Target element"))}}]),n}(i.Component);r.a.render(s.a.createElement(g,null),document.getElementById("root"))},7:function(e,t,n){"use strict";(function(e){var i=n(1),s=n.n(i),o=n(0),r=n.n(o);function u(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function d(e,t,n){return t&&a(e.prototype,t),n&&a(e,n),e}function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(){return(c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e}).apply(this,arguments)}function p(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&h(e,t)}function f(e){return(f=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function h(e,t){return(h=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function g(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function y(e,t){return!t||"object"!==typeof t&&"function"!==typeof t?g(e):t}function x(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,i=f(e);if(t){var s=f(this).constructor;n=Reflect.construct(i,arguments,s)}else n=i.apply(this,arguments);return y(this,n)}}var m="undefined"!==typeof globalThis?globalThis:"undefined"!==typeof window?window:"undefined"!==typeof e?e:"undefined"!==typeof self?self:{},v=/^\s+|\s+$/g,b=/^[-+]0x[0-9a-f]+$/i,_=/^0b[01]+$/i,T=/^0o[0-7]+$/i,k=parseInt,G="object"==typeof m&&m&&m.Object===Object&&m,M="object"==typeof self&&self&&self.Object===Object&&self,w=G||M||Function("return this")(),N=Object.prototype.toString,O=Math.max,C=Math.min,S=function(){return w.Date.now()};function j(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function E(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==N.call(e)}(e))return NaN;if(j(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=j(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(v,"");var n=_.test(e);return n||T.test(e)?k(e.slice(2),n?2:8):b.test(e)?NaN:+e}var q=function(e,t,n){var i,s,o,r,u,a,d=0,l=!1,c=!1,p=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function f(t){var n=i,o=s;return i=s=void 0,d=t,r=e.apply(o,n)}function h(e){return d=e,u=setTimeout(y,t),l?f(e):r}function g(e){var n=e-a;return void 0===a||n>=t||n<0||c&&e-d>=o}function y(){var e=S();if(g(e))return x(e);u=setTimeout(y,function(e){var n=t-(e-a);return c?C(n,o-(e-d)):n}(e))}function x(e){return u=void 0,p&&i?f(e):(i=s=void 0,r)}function m(){var e=S(),n=g(e);if(i=arguments,s=this,a=e,n){if(void 0===u)return h(a);if(c)return u=setTimeout(y,t),f(a)}return void 0===u&&(u=setTimeout(y,t)),r}return t=E(t)||0,j(n)&&(l=!!n.leading,o=(c="maxWait"in n)?O(E(n.maxWait)||0,t):o,p="trailing"in n?!!n.trailing:p),m.cancel=function(){void 0!==u&&clearTimeout(u),d=0,i=a=s=u=void 0},m.flush=function(){return void 0===u?r:x(S())},m};var R={userGuideMask:"styles_userGuideMask__-c1uH",userGuideModal:"styles_userGuideModal__35YuQ",userGuideModalHeader:"styles_userGuideModalHeader__5bEOj",userGuideModalContent:"styles_userGuideModalContent__3wTOG",userGuideMessage:"styles_userGuideMessage__21wOv",userGuideMessageTitle:"styles_userGuideMessageTitle__TROIw",userGuideMessageBody:"styles_userGuideMessageBody__2MNO5",userGuideMessageeast:"styles_userGuideMessageeast__dPQ7D",userGuideMessagewest:"styles_userGuideMessagewest__j8qB_",userGuideMessagenorth:"styles_userGuideMessagenorth__1jvFw",userGuideMessagesouth:"styles_userGuideMessagesouth__3AyGG"};!function(e,t){void 0===t&&(t={});var n=t.insertAt;if(e&&"undefined"!==typeof document){var i=document.head||document.getElementsByTagName("head")[0],s=document.createElement("style");s.type="text/css","top"===n&&i.firstChild?i.insertBefore(s,i.firstChild):i.appendChild(s),s.styleSheet?s.styleSheet.cssText=e:s.appendChild(document.createTextNode(e))}}(".styles_userGuideMask__-c1uH, .styles_userGuideModal__35YuQ {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: rgba(0, 0, 0, 0.7);\n  z-index: 1;\n  padding: 10px; }\n\n.styles_userGuideModalHeader__5bEOj {\n  margin: 0; }\n\n.styles_userGuideModalContent__3wTOG {\n  max-width: 500px;\n  margin: 35vh auto;\n  padding: 25px;\n  background-color: #fff; }\n\n.styles_userGuideMessage__21wOv {\n  position: absolute;\n  top: -10000px;\n  padding: 20px;\n  background-color: #fff;\n  border: 1px solid #eee; }\n  .styles_userGuideMessage__21wOv:after {\n    content: '';\n    height: 10px;\n    width: 10px;\n    background-color: #fff;\n    position: absolute;\n    transform: rotate(45deg); }\n  .styles_userGuideMessageTitle__TROIw {\n    margin: 0 0 5px; }\n  .styles_userGuideMessageBody__2MNO5 {\n    margin: 0 0 15px; }\n  .styles_userGuideMessageeast__dPQ7D:after {\n    left: -6px;\n    top: 50%;\n    margin-top: -5px;\n    border-left: 1px solid #eee;\n    border-bottom: 1px solid #eee; }\n  .styles_userGuideMessagewest__j8qB_:after {\n    right: -6px;\n    top: 50%;\n    margin-top: -5px;\n    border-right: 1px solid #eee;\n    border-top: 1px solid #eee; }\n  .styles_userGuideMessagenorth__1jvFw {\n    text-align: center; }\n    .styles_userGuideMessagenorth__1jvFw:after {\n      left: 50%;\n      bottom: -6px;\n      margin-left: -5px;\n      border-right: 1px solid #eee;\n      border-bottom: 1px solid #eee; }\n  .styles_userGuideMessagesouth__3AyGG {\n    text-align: center; }\n    .styles_userGuideMessagesouth__3AyGG:after {\n      left: 50%;\n      top: -6px;\n      margin-left: -5px;\n      border-left: 1px solid #eee;\n      border-top: 1px solid #eee; }\n");var D=window,I=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",i=document.createElement(e);return i.className=t,i.innerHTML=n,i},B=function(e){e&&e.parentNode&&e.parentNode.removeChild(e)},F=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=e;return Object.keys(t).forEach((function(e){n.style[e]=t[e]})),n},L={yesText:"Yes",noText:"No",nextText:"Next",skipText:"Skip",finishText:"Finish"},P=function(e){p(n,e);var t=x(n);function n(e){var i;return u(this,n),(i=t.call(this,e)).debouncedApplyStyleToCurrentNode=q(i.applyStyleToCurrentNode.bind(g(i)),10),i.mask=I("div","userGuide--mask ".concat(R.userGuideMask)),i}return d(n,[{key:"componentDidMount",value:function(){this.showHelp(),D.addEventListener("resize",this.debouncedApplyStyleToCurrentNode)}},{key:"componentDidUpdate",value:function(){this.showHelp()}},{key:"componentWillUnmount",value:function(){this.removeResizeListener()}},{key:"removeResizeListener",value:function(){D.removeEventListener("resize",this.debouncedApplyStyleToCurrentNode)}},{key:"getNode",value:function(){var e=this.props,t=e.title,n=e.message,i=e.onNext,s=e.onSkip,o=e.position,r=e.tooltipWidth,u=e.isLast,a=e.nextText,d=e.skipText,l=e.finishText,c=I("span","userGuide--message ".concat(R.userGuideMessage," ").concat(R["userGuideMessage".concat(o)]),""),p=I("h3",R.userGuideMessageTitle,t),f=I("p",R.userGuideMessageBody,n),h=I("button",u?"finish":"next",u?l:a);if(h.addEventListener("click",i),c.appendChild(p),c.appendChild(f),!u){var g=I("button","skip",d);g.addEventListener("click",s),c.appendChild(g)}return c.appendChild(h),F(c,{width:"".concat(r,"px")})}},{key:"applyStyleToCurrentNode",value:function(){if(this.helpNeededDOM&&this.node){var e=this.props.position,t=this.helpNeededDOM.dom.getBoundingClientRect(),n=t.top,i=t.left,s=t.width,o=t.height,r=this.node.getBoundingClientRect(),u=r.height,a=r.width;switch(e){case"east":this.node=F(this.node,{left:"".concat(10+i+s,"px"),top:"".concat(n+(o/2-u/2),"px")});break;case"west":this.node=F(this.node,{left:"".concat(i-a-10,"px"),top:"".concat(n+(o/2-u/2),"px")});break;case"north":this.node=F(this.node,{left:"".concat(i+(s/2-a/2),"px"),top:"".concat(n-u-10,"px")});break;case"south":this.node=F(this.node,{left:"".concat(i+(s/2-a/2),"px"),top:"".concat(n+o+10,"px")})}}}},{key:"showHelp",value:function(){this.helpNeededDOM&&(this.helpNeededDOM.dom.style.position=this.helpNeededDOM.position,this.helpNeededDOM.dom.style.zIndex=this.helpNeededDOM.zIndex,delete this.helpNeededDOM);var e=this.props,t=e.querySelector,n=e.onNext;if(t){var i=document.querySelector(t);i?(this.helpNeededDOM={dom:i,position:i.style.position,zIndex:i.style.zIndex},i.scrollIntoView(),i.style.position="relative",i.style.zIndex=1234,B(this.node),this.node=this.getNode(),this.mask.appendChild(this.node),this.mask.offsetParent||document.body.appendChild(this.mask),this.applyStyleToCurrentNode()):n()}else B(this.mask),this.removeResizeListener()}},{key:"render",value:function(){return this.props.children||""}}]),n}(i.Component);l(P,"propTypes",{querySelector:r.a.string,tooltipWidth:r.a.number,title:r.a.string,message:r.a.string,position:r.a.string,nextText:r.a.string.isRequired,skipText:r.a.string.isRequired,finishText:r.a.string.isRequired,onNext:r.a.func,onSkip:r.a.func,isLast:r.a.bool.isRequired,children:r.a.oneOfType([r.a.array,r.a.element,r.a.string])}),l(P,"defaultProps",{tooltipWidth:240,position:"north",isLast:!1});var z=function(e){p(n,e);var t=x(n);function n(e){var i;return u(this,n),(i=t.call(this,e)).state={helpIndex:0,acceptedConfirm:!1},i.userGuideDisabledFromBegenning=!!D.localStorage.getItem("userGuide-".concat(e.guideKey)),i.onSkip=i.onSkip.bind(g(i)),i.onNext=i.onNext.bind(g(i)),i.acceptConfirm=i.acceptConfirm.bind(g(i)),i}return d(n,[{key:"onSkip",value:function(){var e=this.props,t=e.guides,n=e.guideKey;D.localStorage.setItem("userGuide-".concat(n),!0),this.setState({helpIndex:t.length})}},{key:"onNext",value:function(){var e=this.props.guides,t=this.state.helpIndex+1;t>e.length-1?this.onSkip():this.setState({helpIndex:t})}},{key:"getYesText",value:function(){return this.props.buttonConfig.yesText||L.yesText}},{key:"getNoText",value:function(){return this.props.buttonConfig.noText||L.noText}},{key:"getNextText",value:function(){return this.props.buttonConfig.nextText||L.nextText}},{key:"getSkipText",value:function(){return this.props.buttonConfig.skipText||L.skipText}},{key:"getFinishText",value:function(){return this.props.buttonConfig.finishText||L.finishText}},{key:"acceptConfirm",value:function(){this.setState({acceptedConfirm:!0})}},{key:"render",value:function(){var e=this.props,t=e.children,n=e.guides,o=e.title,r=e.content,u=this.state,a=u.helpIndex,d=u.acceptedConfirm,l=n[a]||{},p=a===n.length-1;return this.userGuideDisabledFromBegenning?t||"":0!==a||d?s.a.createElement(P,c({},l,{nextText:this.getNextText(),skipText:this.getSkipText(),finishText:this.getFinishText(),onNext:this.onNext,onSkip:this.onSkip,isLast:p}),t||""):s.a.createElement(i.Fragment,null,t||"",s.a.createElement("div",{className:"userGuide--modal ".concat(R.userGuideModal)},s.a.createElement("div",{className:R.userGuideModalContent},s.a.createElement("h1",{className:R.userGuideModalHeader},o),s.a.createElement("p",null,r),s.a.createElement("div",null,s.a.createElement("button",{onClick:this.onSkip},this.getNoText()),s.a.createElement("button",{onClick:this.acceptConfirm},this.getYesText())))))}}]),n}(i.Component);l(z,"propTypes",{title:r.a.string,content:r.a.string,guideKey:r.a.string.isRequired,guides:r.a.array.isRequired,buttonConfig:r.a.shape({yesText:r.a.string,noText:r.a.string,nextText:r.a.string,skipText:r.a.string,finishText:r.a.string}),children:r.a.oneOfType([r.a.array,r.a.element,r.a.string])}),l(z,"defaultProps",{guideKey:"guideKey",guides:[],title:"Quick Guide",content:"Would you like us to walk you through different features in this app?",buttonConfig:L}),t.a=z}).call(this,n(16))}},[[10,1,2]]]);
//# sourceMappingURL=main.5516c54d.chunk.js.map