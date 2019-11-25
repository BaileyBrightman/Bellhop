!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports):"function"==typeof define&&define.amd?define(["exports"],t):t(e.window=e.window||{})}(this,function(e){"use strict";var t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n=function(e){return function(){var t=e.apply(this,arguments);return new Promise(function(e,n){return function i(r,o){try{var s=t[r](o),c=s.value}catch(e){return void n(e)}if(!s.done)return Promise.resolve(c).then(function(e){i("next",e)},function(e){i("throw",e)});e(c)}("next")})}},i=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},r=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),o=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t},s=function(){function e(){i(this,e),this._listeners={}}return r(e,[{key:"on",value:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0;this._listeners[e]||(this._listeners[e]=[]),t._priority=parseInt(n)||0,-1===this._listeners[e].indexOf(t)&&(this._listeners[e].push(t),this._listeners[e].length>1&&this._listeners[e].sort(this.listenerSorter))}},{key:"listenerSorter",value:function(e,t){return e._priority-t._priority}},{key:"off",value:function(e,t){if(void 0!==this._listeners[e])if(void 0!==t){var n=this._listeners[e].indexOf(t);-1<n&&this._listeners[e].splice(n,1)}else delete this._listeners[e]}},{key:"trigger",value:function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if("string"==typeof e&&(e={type:e,data:"object"===(void 0===n?"undefined":t(n))&&null!==n?n:{}}),void 0!==this._listeners[e.type])for(var i=this._listeners[e.type].length-1;i>=0;i--)this._listeners[e.type][i](e)}},{key:"destroy",value:function(){this._listeners={}}}]),e}(),c=function(e){function c(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:100*Math.random()|0;i(this,c);var t=o(this,(c.__proto__||Object.getPrototypeOf(c)).call(this));return t.id="BELLHOP:"+e,t.connected=!1,t.isChild=!0,t.connecting=!1,t.origin="*",t._sendLater=[],t.iframe=null,t.receive=t.receive.bind(t),t}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(c,s),r(c,[{key:"receive",value:function(e){if(this.target===e.source)if("connected"===e.data)this.onConnectionReceived(e.data);else{var n=e.data;if("string"==typeof n)try{n=JSON.parse(n)}catch(e){console.error("Bellhop error: ",e)}this.connected&&"object"===(void 0===n?"undefined":t(n))&&n.type&&this.trigger(n)}}},{key:"onConnectionReceived",value:function(e){this.connecting=!1,this.connected=!0,this.isChild||this.target.postMessage(e,this.origin);for(var t=0;t<this._sendLater.length;t++){var n=this._sendLater[t],i=n.type,r=n.data;this.send(i,r)}this._sendLater.length=0,this.trigger("connected")}},{key:"connect",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"*";this.connecting||(this.disconnect(),this.connecting=!0,e instanceof HTMLIFrameElement&&(this.iframe=e),this.isChild=void 0===e,this.supported=!0,this.isChild&&(this.supported=window!=e),this.origin=t,window.addEventListener("message",this.receive),this.isChild&&(window===this.target?this.trigger("failed"):this.target.postMessage("connected",this.origin)))}},{key:"disconnect",value:function(){this.connected=!1,this.connecting=!1,this.origin=null,this.iframe=null,this.isChild=!0,this._sendLater.length=0,window.removeEventListener("message",this.receive)}},{key:"send",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if("string"!=typeof e)throw"The event type must be a string";var n={type:e,data:t};this.connecting?this._sendLater.push(n):this.target.postMessage(JSON.stringify(n),this.origin)}},{key:"fetch",value:function(e,t){var n=this,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=arguments.length>3&&void 0!==arguments[3]&&arguments[3];if(!this.connecting&&!this.connected)throw"No connection, please call connect() first";this.on(e,function e(i){r&&n.off(i.type,e),t(i)}),this.send(e,i)}},{key:"respond",value:function(){var e=n(regeneratorRuntime.mark(function e(t){var i,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},o=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:i=function(){var e=n(regeneratorRuntime.mark(function e(n){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:o&&this.off(n.type,i),this.send(t,r);case 2:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),this.on(t,i);case 2:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()},{key:"destroy",value:function(){(function e(t,n,i){null===t&&(t=Function.prototype);var r=Object.getOwnPropertyDescriptor(t,n);if(void 0===r){var o=Object.getPrototypeOf(t);return null===o?void 0:e(o,n,i)}if("value"in r)return r.value;var s=r.get;return void 0!==s?s.call(i):void 0})(c.prototype.__proto__||Object.getPrototypeOf(c.prototype),"destroy",this).call(this),this.disconnect(),this._sendLater.length=0}},{key:"target",get:function(){return this.isChild?window.parent:this.iframe.contentWindow}}]),c}();e.BellhopEventDispatcher=s,e.Bellhop=c,Object.defineProperty(e,"__esModule",{value:!0})});
//# sourceMappingURL=bellhop-umd.js.map
