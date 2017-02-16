/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.l = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };

/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};

/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};

/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

/* *Project Name:SAF招聘项目模板v1.0
*=====================================
*Copy 2016-2017 SAF网络联盟
*Web: http://www.52saf.com
*=====================================
*Author: 逸轩
*QQ：740749820
*Date: ${date} */

/* swiper animate */
var mySwiper = new Swiper ('.swiper-container', {
  direction : 'vertical',
  pagination: '.swiper-pagination',
  mousewheelControl : true,
  onInit: function(swiper){ //Swiper2.x的初始化是onFirstInit
  swiperAnimateCache(swiper); //隐藏动画元素 
  swiperAnimate(swiper); //初始化完成开始动画
  }, 
  onSlideChangeEnd: function(swiper){ 
    swiperAnimate(swiper); //每个slide切换结束时也运行当前slide动画
  } 
})

/*背景音乐*/
var img=document.querySelector('.play');
var audio=document.createElement('audio');
audio.src='http://ojax5auf5.bkt.clouddn.com/52saf.com.mp3';
audio.autoplay=true;
document.body.appendChild(audio);
$('.play').click(function () {
  if(audio.paused){
    audio.play();
    img.style.animationPlayState='running';
    img.style.webkitAnimationPlayState='running';
  }else{
    audio.pause();
    img.style.animationPlayState='paused';
    img.style.webkitAnimationPlayState='paused';
  }
})

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(2);
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(4)(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!./../node_modules/css-loader/index.js!./style.css", function() {
			var newContent = require("!!./../node_modules/css-loader/index.js!./style.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)();
// imports


// module
exports.push([module.i, "/* *Project Name:SAF招聘项目模板v1.0\n*=====================================\n*Copy 2016-2017 SAF网络联盟\n*Web: http://www.52saf.com\n*=====================================\n*Author: 逸轩\n*QQ：740749820\n*Date: ${date} */\n\n* {\n  margin: 0;\n  padding: 0;\n  outline: none;\n} \n*:not(input,textarea) {\n  -webkit-touch-callout: inherit;\n  -webkit-user-select: auto;\n}\nhtml, body {\n  position: relative;\n  height: 100%;\n  overflow:hidden;\n}\nbody {\n  background: #eee;\n  font-family: Helvetica Neue, Helvetica, Arial, sans-serif;\n  font-size: 14px;\n  color:#000;\n  margin: 0;\n  padding: 0;\n}\n.swiper-container {\n  width: 100%;\n  height: 100%;\n}\n.swiper-slide {\n  text-align: center;\n  font-size: 18px;\n  background: #fff;\n  \n  /* Center slide text vertically */\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: -webkit-flex;\n  display: flex;\n  -webkit-box-pack: center;\n  -ms-flex-pack: center;\n  -webkit-justify-content: center;\n  justify-content: center;\n  -webkit-box-align: center;\n  -ms-flex-align: center;\n  -webkit-align-items: center;\n  align-items: center;\n}\n\n/* 背景音乐 */\n@-webkit-keyframes rotate {\n  from{\n    -webkit-transform: rotate(0deg);\n  }\n  to{\n    -webkit-transform: rotate(360deg);\n  }\n}\n@keyframes rotate {\n  from{\n    transform: rotate(0deg);\n  }\n  to{\n    transform: rotate(360deg);\n  }\n}\n.play{          \n  -webkit-animation:rotate 3s infinite linear;\n  animation:rotate 3s infinite linear;\n}\n\n/* 通用设置 */\n/* img自动上滑动画 */\n.img-up{\n  position:absolute;\n  width:10%;\n  left:50%;\n  transform:translateX(-50%);\n  animation:goup 1s infinite;\n  -webkit-animation:goup 1s infinite; /*Safari and Chrome*/\n  z-index:3;\n}\n@keyframes goup{\n  from {bottom:25px;}\n  to {bottom:40px;}\n}\n/*Safari and Chrome*/\n@-webkit-keyframes goup{\n  from {bottom:25px;}\n  to {bottom:40px;}\n}\n\n.ani{\n\tposition:absolute;\n\t}\n\n/* display */\n.hide{\n/*    display:none; */\n}\n\n/* 页面背景 */\n.page-1-1{ background-color:#EDEDED; background: url(http://i1.piimg.com/570614/9880fca1b66b82e7.png) center center no-repeat ; background-size:cover;}\n.page-2-1{ background-color:#EDEDED; background: url(http://i1.piimg.com/570614/e271fd4320df49cf.png) center center no-repeat ; background-size:cover}\n.page-3-1{ background-color:#EDEDED; background: url(http://i1.piimg.com/570614/a45dd54c9494071c.png) center center no-repeat ; background-size:cover}\n.page-4-1{ background-color:#F94848;}\n.page-5-1{ background-color:#EC5F55;}\n.page-6-1{ background-color:#7876B7;}\n.page-7-1{ background-color:#147C79;}\n.page-8-1{ background-color:#619B51;}\n.page-9-1{ background-color:#5FBDD9;}\n.page-10-1{ background-color:#CBFFFA;background: url(http://p1.bpimg.com/570614/793c6b5d8581aa48.png) center center no-repeat ; background-size:cover}\n\n/* 页面1配置 */\n.page-1-1 .img_1 {\n  \theight:auto;\n  \twidth:70%;\n\tposition:absolute;\n\tleft:50%;\n\ttop:50%;\n\tmargin-left:-330px;\n\tmargin-top:-330px;\n  \tz-index:1;\n}\n.page-1-1 .img_2 {\n  height:auto;\n  width:600px;\n  position:absolute;\n  left:50%;\n  top:55%;\n  margin-left:-300px;\n  margin-top:-300px;\n  z-index:1;\n}\n\n/* 页面2配置 */\n.page-2-1 .img_1 {\n  height:auto;\n  width:200px;\n  position:absolute;\n  left:50%;\n  top:5%;\n  margin-left:-100px;\n  z-index:2;\n}\n.page-2-1 .img_2 {\n\theight:auto;\n  width:360px;\n\tposition:absolute;\n\tleft:50%;\n\tbottom:13%;\n\tmargin-left:-180px;\n}\n\n/* 页面3配置 */\n.page-3-1 .img_1{\n  height:auto;\n  width:360px;\n\t position:absolute;\n\t left:50%;\n\t top:10%;\n\t margin-left:-180px;\n\t z-index:2;\n}\n.page-3-1 .img_2{\n  height:auto;\n  width:400px;\n\t position:absolute;\n\t left:50%; \n\t margin-left:-200px;\n\t bottom:20%;\n}\n\n/* 页面4配置 */\n.page-4-1 .img_1{\n\t height:auto;\n  width:600px;\n\t position:absolute;\n\t left:50%;\n\t top:13%;\n\t margin-left:-300px;\n\t z-index:2;\n}\n.page-4-1 .img_2 {\n\t height:auto;\n  width:600px;\n\t position:absolute;\n\t left:50%;\n\t top:40%;\n\t margin-left:-300px;\n}\n.page-4-1 .img_3 {\n\theight:auto;width:600px;\n\tposition:absolute;\n\tleft:50%;\n\tbottom:20%;\n\tmargin-left:-300px;\n}\n\n/* 页面5配置 */\n.page-5-1 .img_1 {\n\theight:auto;\n\twidth:500px;\n\tposition:absolute;\n\tleft:50%;\n\ttop:0px;\n\tmargin-left:-250px;\n}\n.page-5-1 .img_2 {\n\theight:auto;\n\twidth:500px;\n\tposition:absolute;\n\tleft:50%;\n\ttop:13%;\n\tmargin-left:-250px;\n}\n.page-5-1 .img_3 {\n\theight:auto;\n\twidth:500px;\n\tposition:absolute;\n\tleft:50%;\n\tbottom:15%;\n\tmargin-left:-250px;\n}\n\n/* 页面6配置 */\n.page-6-1 .img_1 {\n\theight:auto;\n\twidth:500px;\n\tposition:absolute;\n\tleft:50%;\n\ttop:60px;\n\tmargin-left:-250px;\n\t \n}\n.page-6-1 .img_2 {\n\theight:auto;\n\twidth:500px;\n\tposition:absolute;\n\tleft:50%;\n\ttop:13%;\n\tmargin-left:-250px;\n}\n.page-6-1 .img_3 {\n\theight:auto;\n\twidth:400px;\n\tposition:absolute;\n\tleft:50%;\n\tbottom:15%;\n\tmargin-left:-200px;\n}\n\n/* 页面7配置 */\n.page-7-1 .img_1 {\n\theight:auto;\n\twidth:500px;\n\tposition:absolute;\n\tleft:50%;\n\ttop:0px;\n\tmargin-left:-250px;\n\t \n}\n.page-7-1 .img_2 {\n\theight:auto;\n\twidth:500px;\n\tposition:absolute;\n\tleft:50%;\n\ttop:28px;\n\tmargin-left:-250px;\n}\n.page-7-1 .img_3 {\n\theight:auto;\n\twidth:400px;\n\tposition:absolute;\n\tleft:50%;\n\tbottom:15%;\n\tmargin-left:-200px;\n}\n\n/* 页面8配置 */\n.page-8-1 .img_1 {\n\theight:auto;\n\twidth:500px;\n\tposition:absolute;\n\tleft:50%;\n\ttop:50px;\n\tmargin-left:-250px;\n\t \n}\n.page-8-1 .img_2 {\n\theight:auto;\n\twidth:500px;\n\tposition:absolute;\n\tleft:50%;\n\ttop:60px;\n\tmargin-left:-250px;\n}\n.page-8-1 .img_3 {\n\theight:auto;\n\twidth:400px;\n\tposition:absolute;\n\tleft:50%;\n\tbottom:15%;\n\tmargin-left:-200px;\n}\n\n/* 页面9配置 */\n.page-9-1 .img_1 {\n\theight:auto;\n\twidth:500px;\n\tposition:absolute;\n\tleft:50%;\n\ttop:0px;\n\tmargin-left:-250px;\n\t \n}\n.page-9-1 .img_2 {\n\theight:auto;\n\twidth:600px;\n\tposition:absolute;\n\tleft:50%;\n\tbottom:0px;\n\tmargin-left:-300px;\n}\n\n/* 页面10配置 */\n.page-10-1 .img_1 {\n\theight:auto;\n\twidth:800px;\n\tposition:absolute;\n\tleft:50%;\n\ttop:40px;\n\tmargin-left:-400px;\t \n}\n.page-10-1 div h2{\n\ttext-align:center;\n}\n.page-10-1 div.text{\n\ttop:700px;\t\n\tcolor:#FF811A;\n\tfont-size:40px;\n\tposition:absolute;\n\ttext-align:center;\n\twidth:100%;\n\tleft:50%;\n\ttransform:translateX(-50%);\n\tline-height:1.5em;\n}\n.page-10-1 div.text a{\n\tcolor:#FF811A;\n}\n.page-10-1 span h2{\n\tfont-size:28px;\n}\n.page-10-1 span h3{\n\tfont-size:24px;\n}\n\n.page-10-1 ul{\n  list-style:none;\n  position:absolute;\n\tleft:50%;\n\ttransform:translateX(-50%);\n  bottom:5px;\n}\n.page-10-1 li{\n  margin:10px;\n}\n.page-10-1 #img{\n  \twidth:450px;\n  \theight:auto;\n}", ""]);

// exports


/***/ }),
/* 3 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function() {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		var result = [];
		for(var i = 0; i < this.length; i++) {
			var item = this[i];
			if(item[2]) {
				result.push("@media " + item[2] + "{" + item[1] + "}");
			} else {
				result.push(item[1]);
			}
		}
		return result.join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};


/***/ }),
/* 4 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
var stylesInDom = {},
	memoize = function(fn) {
		var memo;
		return function () {
			if (typeof memo === "undefined") memo = fn.apply(this, arguments);
			return memo;
		};
	},
	isOldIE = memoize(function() {
		return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
	}),
	getHeadElement = memoize(function () {
		return document.head || document.getElementsByTagName("head")[0];
	}),
	singletonElement = null,
	singletonCounter = 0,
	styleElementsInsertedAtTop = [];

module.exports = function(list, options) {
	if(typeof DEBUG !== "undefined" && DEBUG) {
		if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};
	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (typeof options.singleton === "undefined") options.singleton = isOldIE();

	// By default, add <style> tags to the bottom of <head>.
	if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

	var styles = listToStyles(list);
	addStylesToDom(styles, options);

	return function update(newList) {
		var mayRemove = [];
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			domStyle.refs--;
			mayRemove.push(domStyle);
		}
		if(newList) {
			var newStyles = listToStyles(newList);
			addStylesToDom(newStyles, options);
		}
		for(var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];
			if(domStyle.refs === 0) {
				for(var j = 0; j < domStyle.parts.length; j++)
					domStyle.parts[j]();
				delete stylesInDom[domStyle.id];
			}
		}
	};
}

function addStylesToDom(styles, options) {
	for(var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];
		if(domStyle) {
			domStyle.refs++;
			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}
			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];
			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}
			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles(list) {
	var styles = [];
	var newStyles = {};
	for(var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};
		if(!newStyles[id])
			styles.push(newStyles[id] = {id: id, parts: [part]});
		else
			newStyles[id].parts.push(part);
	}
	return styles;
}

function insertStyleElement(options, styleElement) {
	var head = getHeadElement();
	var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
	if (options.insertAt === "top") {
		if(!lastStyleElementInsertedAtTop) {
			head.insertBefore(styleElement, head.firstChild);
		} else if(lastStyleElementInsertedAtTop.nextSibling) {
			head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			head.appendChild(styleElement);
		}
		styleElementsInsertedAtTop.push(styleElement);
	} else if (options.insertAt === "bottom") {
		head.appendChild(styleElement);
	} else {
		throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
	}
}

function removeStyleElement(styleElement) {
	styleElement.parentNode.removeChild(styleElement);
	var idx = styleElementsInsertedAtTop.indexOf(styleElement);
	if(idx >= 0) {
		styleElementsInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement(options) {
	var styleElement = document.createElement("style");
	styleElement.type = "text/css";
	insertStyleElement(options, styleElement);
	return styleElement;
}

function createLinkElement(options) {
	var linkElement = document.createElement("link");
	linkElement.rel = "stylesheet";
	insertStyleElement(options, linkElement);
	return linkElement;
}

function addStyle(obj, options) {
	var styleElement, update, remove;

	if (options.singleton) {
		var styleIndex = singletonCounter++;
		styleElement = singletonElement || (singletonElement = createStyleElement(options));
		update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
		remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
	} else if(obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function") {
		styleElement = createLinkElement(options);
		update = updateLink.bind(null, styleElement);
		remove = function() {
			removeStyleElement(styleElement);
			if(styleElement.href)
				URL.revokeObjectURL(styleElement.href);
		};
	} else {
		styleElement = createStyleElement(options);
		update = applyToTag.bind(null, styleElement);
		remove = function() {
			removeStyleElement(styleElement);
		};
	}

	update(obj);

	return function updateStyle(newObj) {
		if(newObj) {
			if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
				return;
			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;
		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag(styleElement, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (styleElement.styleSheet) {
		styleElement.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = styleElement.childNodes;
		if (childNodes[index]) styleElement.removeChild(childNodes[index]);
		if (childNodes.length) {
			styleElement.insertBefore(cssNode, childNodes[index]);
		} else {
			styleElement.appendChild(cssNode);
		}
	}
}

function applyToTag(styleElement, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		styleElement.setAttribute("media", media)
	}

	if(styleElement.styleSheet) {
		styleElement.styleSheet.cssText = css;
	} else {
		while(styleElement.firstChild) {
			styleElement.removeChild(styleElement.firstChild);
		}
		styleElement.appendChild(document.createTextNode(css));
	}
}

function updateLink(linkElement, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	if(sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = linkElement.href;

	linkElement.href = URL.createObjectURL(blob);

	if(oldSrc)
		URL.revokeObjectURL(oldSrc);
}


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Created by Administrator on 2017/2/16.
 */
__webpack_require__(1);
__webpack_require__(0)

/***/ })
/******/ ]);