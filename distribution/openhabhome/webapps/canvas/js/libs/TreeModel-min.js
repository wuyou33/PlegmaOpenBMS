!function(t){"object"==typeof exports?module.exports=t():"function"==typeof define&&define.amd?define(t):"undefined"!=typeof window?window.TreeModel=t():"undefined"!=typeof global?global.TreeModel=t():"undefined"!=typeof self&&(self.TreeModel=t())}(function(){var t,e,n;return function r(t,e,n){function i(s,f){if(!e[s]){if(!t[s]){var a=typeof require=="function"&&require;if(!f&&a)return a(s,!0);if(o)return o(s,!0);throw new Error("Cannot find module '"+s+"'")}var l=e[s]={exports:{}};t[s][0].call(l.exports,function(e){var n=t[s][1][e];return i(n?n:e)},l,l.exports,r,t,e,n)}return e[s].exports}var o=typeof require=="function"&&require;for(var s=0;s<n.length;s++)i(n[s]);return i}({1:[function(t,e,n){var r,i;r=t("mergesort");i=t("find-insert-index");e.exports=function(){"use strict";var t;t={};function TreeModel(t){t=t||{};this.config=t;this.config.childrenPropertyName=t.childrenPropertyName||"children";this.config.modelComparatorFn=t.modelComparatorFn}TreeModel.prototype.parse=function(t){var i,o,s;if(!(t instanceof Object)){throw new TypeError("Model must be of type object.")}s=new n(this.config,t);if(t[this.config.childrenPropertyName]instanceof Array){if(this.config.modelComparatorFn){t[this.config.childrenPropertyName]=r(this.config.modelComparatorFn,t[this.config.childrenPropertyName])}for(i=0,o=t[this.config.childrenPropertyName].length;i<o;i++){e(s,this.parse(t[this.config.childrenPropertyName][i]))}}return s};function e(t,e){e.parent=t;t.children.push(e);return e}function n(t,e){this.config=t;this.model=e;this.children=[]}n.prototype.isRoot=function(){return this.parent===undefined};n.prototype.addChild=function(t){var e;if(!(t instanceof n)){throw new TypeError("Child must be of type Node.")}t.parent=this;if(!(this.model[this.config.childrenPropertyName]instanceof Array)){this.model[this.config.childrenPropertyName]=[]}if(this.config.modelComparatorFn){e=i(this.config.modelComparatorFn,this.model[this.config.childrenPropertyName],t.model);this.model[this.config.childrenPropertyName].splice(e,0,t.model);this.children.splice(e,0,t)}else{this.model[this.config.childrenPropertyName].push(t.model);this.children.push(t)}return t};n.prototype.getPath=function(){var t=[];!function e(n){t.unshift(n);if(!n.isRoot()){e(n.parent)}}(this);return t};function o(){var e={};if(arguments.length===1){e.fn=arguments[0]}else if(arguments.length===2){if(typeof arguments[0]==="function"){e.fn=arguments[0];e.ctx=arguments[1]}else{e.options=arguments[0];e.fn=arguments[1]}}else{e.options=arguments[0];e.fn=arguments[1];e.ctx=arguments[2]}e.options=e.options||{};if(!e.options.strategy){e.options.strategy="pre"}if(!t[e.options.strategy]){throw new Error("Unknown tree walk strategy. Valid strategies are 'pre' [default], 'post' and 'breadth'.")}return e}n.prototype.walk=function(){var e;e=o.apply(this,arguments);t[e.options.strategy].call(this,e.fn,e.ctx)};t.pre=function s(t,e){var n,r,i;i=t.call(e,this);for(n=0,r=this.children.length;n<r;n++){if(i===false){return false}i=s.call(this.children[n],t,e)}return i};t.post=function f(t,e){var n,r,i;for(n=0,r=this.children.length;n<r;n++){i=f.call(this.children[n],t,e);if(i===false){return false}}i=t.call(e,this);return i};t.breadth=function a(t,e){var n=[this];!function r(){var i,o,s;if(n.length===0){return}s=n.shift();for(i=0,o=s.children.length;i<o;i++){n.push(s.children[i])}if(t.call(e,s)!==false){r()}}()};n.prototype.all=function(){var e,n=[];e=o.apply(this,arguments);t[e.options.strategy].call(this,function(t){if(e.fn.call(e.ctx,t)){n.push(t)}},e.ctx);return n};n.prototype.first=function(){var e,n;e=o.apply(this,arguments);t[e.options.strategy].call(this,function(t){if(e.fn.call(e.ctx,t)){n=t;return false}},e.ctx);return n};n.prototype.drop=function(){var t;if(!this.isRoot()){t=this.parent.children.indexOf(this);this.parent.children.splice(t,1);this.parent.model.children.splice(t,1);this.parent=undefined;delete this.parent}return this};return TreeModel}()},{"find-insert-index":2,mergesort:3}],2:[function(t,e,n){e.exports=function(){"use strict";function t(t,e,n){var r,i;for(r=0,i=e.length;r<i;r++){if(t(e[r],n)>0){break}}return r}return t}()},{}],3:[function(t,e,n){e.exports=function(){"use strict";function t(n,r){var i=r.length,o,s;if(i>=2){o=r.slice(0,i/2);s=r.slice(i/2,i);return e(n,t(n,o),t(n,s))}else{return r.slice()}}function e(t,e,n){var r=[],i=e.length,o=n.length;while(i>0&&o>0){if(t(e[0],n[0])<=0){r.push(e.shift());i--}else{r.push(n.shift());o--}}if(i>0){r.push.apply(r,e)}else{r.push.apply(r,n)}return r}return t}()},{}]},{},[1])(1)});