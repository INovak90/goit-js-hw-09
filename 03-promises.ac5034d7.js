!function(){function e(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},o={},r=n.parcelRequired7c6;null==r&&((r=function(e){if(e in t)return t[e].exports;if(e in o){var n=o[e];delete o[e];var r={id:e,exports:{}};return t[e]=r,n.call(r.exports,r,r.exports),r.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,n){o[e]=n},n.parcelRequired7c6=r);var i=r("6JpON"),u=document.querySelector("form"),a={};u.addEventListener("input",(function(e){a[e.target.name]=e.target.value})),u.addEventListener("submit",(function(n){n.preventDefault();for(var t=0;t<a.amount;t+=1)a.delay=0===t?Number(a.delay)+Number(a.step)*t:Number(a.delay)+Number(a.step),d(a).then((function(n){var t=n.position,o=n.delay;setTimeout((function(){return e(i).Notify.success("Fulfilled promise ".concat(t," in ").concat(o,"ms"),{closeButton:!0})}),o)})).catch((function(n){var t=n.delay,o=n.position;setTimeout((function(){return e(i).Notify.failure("Fulfilled promise ".concat(o," in ").concat(t,"ms"),{closeButton:!0})}),t)}))}));var l=0;function d(e){var n=e.delay;e.step,e.amount;return new Promise((function(e,t){var o=Math.random()>.3;l+=1,o?e({position:l,delay:n}):t({position:l,delay:n})}))}}();
//# sourceMappingURL=03-promises.ac5034d7.js.map