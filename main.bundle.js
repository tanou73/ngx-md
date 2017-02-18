webpackJsonp([1,4],{

/***/ 155:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_es6_reflect__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_es6_reflect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_core_js_es6_reflect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_es7_reflect__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_es7_reflect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_core_js_es7_reflect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_zone_js_dist_zone__ = __webpack_require__(265);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_zone_js_dist_zone___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_zone_js_dist_zone__);
/**
 * This file includes polyfills needed by Angular and is loaded before the app.
 * You can add your own extra polyfills to this file.
 *
 * This file is divided into 2 sections:
 *   1. Browser polyfills. These are applied before loading ZoneJS and are sorted by browsers.
 *   2. Application imports. Files imported after ZoneJS that should be loaded before your main
 *      file.
 *
 * The current setup is for so-called "evergreen" browsers; the last versions of browsers that
 * automatically update themselves. This includes Safari >= 10, Chrome >= 55 (including Opera),
 * Edge >= 13 on the desktop, and iOS 10 and Chrome on mobile.
 *
 * Learn more in https://angular.io/docs/ts/latest/guide/browser-support.html
 */



/***************************************************************************************************
 * APPLICATION IMPORTS
 */
/**
 * Date, currency, decimal and percent pipes.
 * Needed for: All but Chrome, Firefox, Edge, IE11 and Safari 10
 */
// import 'intl';  // Run `npm install --save intl`.
//# sourceMappingURL=/Users/dimpu/CODEBASE/github/angular2-markdown/src/polyfills.js.map

/***/ }),

/***/ 341:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(190);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__(494);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MarkdownService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MarkdownService = (function () {
    function MarkdownService(http) {
        this.http = http;
    }
    MarkdownService.prototype.getContent = function (path) {
        return this.http.get(path);
    };
    MarkdownService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === 'function' && _a) || Object])
    ], MarkdownService);
    return MarkdownService;
    var _a;
}());
//# sourceMappingURL=/Users/dimpu/CODEBASE/github/angular2-markdown/src/markdown.service.js.map

/***/ }),

/***/ 370:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 370;


/***/ }),

/***/ 371:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__polyfills_ts__ = __webpack_require__(155);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(453);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(477);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_demo_demo_module__ = __webpack_require__(474);





if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_4__app_demo_demo_module__["a" /* DemoModule */]);
//# sourceMappingURL=/Users/dimpu/CODEBASE/github/angular2-markdown/src/main.js.map

/***/ }),

/***/ 473:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DemoComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

// import fileContent from 'raw-loader!./demo.cpp';
var DemoComponent = (function () {
    function DemoComponent() {
        this.myText = "# Headers\n# H1\n## H2\n### H3\n#### H4\n##### H5\n###### H6\n";
    }
    DemoComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Component */])({
            selector: 'app-demo',
            template: __webpack_require__(492),
            styles: [__webpack_require__(481)]
        }), 
        __metadata('design:paramtypes', [])
    ], DemoComponent);
    return DemoComponent;
}());
//# sourceMappingURL=/Users/dimpu/CODEBASE/github/angular2-markdown/src/demo.component.js.map

/***/ }),

/***/ 474:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__demo_component__ = __webpack_require__(473);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__markdown_markdown_module__ = __webpack_require__(476);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DemoModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DemoModule = (function () {
    function DemoModule() {
    }
    DemoModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__demo_component__["a" /* DemoComponent */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_3__markdown_markdown_module__["a" /* MarkdownModule */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__demo_component__["a" /* DemoComponent */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2__demo_component__["a" /* DemoComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], DemoModule);
    return DemoModule;
}());
//# sourceMappingURL=/Users/dimpu/CODEBASE/github/angular2-markdown/src/demo.module.js.map

/***/ }),

/***/ 475:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(190);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_marked__ = __webpack_require__(482);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_marked___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_marked__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__markdown_service__ = __webpack_require__(341);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_prismjs_prism__ = __webpack_require__(491);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_prismjs_prism___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_prismjs_prism__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_prismjs_components_prism_c__ = __webpack_require__(483);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_prismjs_components_prism_c___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_prismjs_components_prism_c__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_prismjs_components_prism_java__ = __webpack_require__(486);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_prismjs_components_prism_java___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_prismjs_components_prism_java__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_prismjs_components_prism_cpp__ = __webpack_require__(484);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_prismjs_components_prism_cpp___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_prismjs_components_prism_cpp__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_prismjs_components_prism_python__ = __webpack_require__(489);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_prismjs_components_prism_python___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_prismjs_components_prism_python__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_prismjs_components_prism_perl__ = __webpack_require__(487);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_prismjs_components_prism_perl___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_prismjs_components_prism_perl__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_prismjs_components_prism_php__ = __webpack_require__(488);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_prismjs_components_prism_php___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_prismjs_components_prism_php__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_prismjs_components_prism_scss__ = __webpack_require__(490);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_prismjs_components_prism_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_prismjs_components_prism_scss__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_prismjs_components_prism_diff__ = __webpack_require__(485);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_prismjs_components_prism_diff___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_prismjs_components_prism_diff__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MarkdownComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};













var MarkdownComponent = (function () {
    function MarkdownComponent(mdService, el, http) {
        this.mdService = mdService;
        this.el = el;
        this.http = http;
    }
    MarkdownComponent.prototype.ngOnInit = function () {
        // console.log(this.path);
        // console.log('The component is initialized');
    };
    /**
     * on path input change
     */
    MarkdownComponent.prototype.ngOnChanges = function () {
        this.getContent();
    };
    /**
     *
     */
    MarkdownComponent.prototype.ngAfterViewInit = function () {
        if (!this.path) {
            this.md = this.prepare(this.el.nativeElement.innerHTML);
            this.el.nativeElement.innerHTML = __WEBPACK_IMPORTED_MODULE_2_marked__(this.md);
            Prism.highlightAll(false);
        }
        else {
            this.getContent();
        }
    };
    /**
     * get remote conent;
     */
    MarkdownComponent.prototype.getContent = function () {
        var _this = this;
        if (!!this.path) {
            this.ext = this.path.split('.').splice(-1).join();
        }
        this.mdService.getContent(this.path)
            .subscribe(function (resp) {
            _this.md = _this.ext !== 'md' ? '```' + _this.ext + '\n' + resp.text() + '\n```' : resp.text();
            _this.el.nativeElement.innerHTML = __WEBPACK_IMPORTED_MODULE_2_marked__(_this.prepare(_this.md));
            Prism.highlightAll(false);
        }, function (err) { return _this.handleError; });
    };
    /**
     * catch http error
     */
    MarkdownComponent.prototype.handleError = function (error) {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    };
    /**
     * Prepare string
     */
    MarkdownComponent.prototype.prepare = function (raw) {
        var _this = this;
        if (!raw) {
            return '';
        }
        if (this.ext === 'md' || !this.path) {
            var isCodeBlock_1 = false;
            return raw.split('\n').map(function (line) {
                if (_this.trimLeft(line).substring(0, 3) === "```") {
                    isCodeBlock_1 = !isCodeBlock_1;
                }
                return isCodeBlock_1 ? line : line.trim();
            }).join('\n');
        }
        return raw;
    };
    /**
     * Trim left whitespace
     */
    MarkdownComponent.prototype.trimLeft = function (line) {
        return line.replace(/^\s+|\s+$/g, '');
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* Input */])(), 
        __metadata('design:type', String)
    ], MarkdownComponent.prototype, "path", void 0);
    MarkdownComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Component */])({
            selector: 'markdown,[Markdown]',
            template: '<ng-content></ng-content>',
            styles: [
                ".token.operator, .token.entity, .token.url, .language-css .token.string, .style .token.string {\n            background: none;\n        }"
            ]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__markdown_service__["a" /* MarkdownService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__markdown_service__["a" /* MarkdownService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* ElementRef */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* ElementRef */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === 'function' && _c) || Object])
    ], MarkdownComponent);
    return MarkdownComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=/Users/dimpu/CODEBASE/github/angular2-markdown/src/markdown.component.js.map

/***/ }),

/***/ 476:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(190);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__markdown_component__ = __webpack_require__(475);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__markdown_service__ = __webpack_require__(341);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MarkdownModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MarkdownModule = (function () {
    function MarkdownModule() {
    }
    MarkdownModule.forRoot = function () {
        return {
            ngModule: MarkdownModule,
        };
    };
    MarkdownModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
            exports: [__WEBPACK_IMPORTED_MODULE_2__markdown_component__["a" /* MarkdownComponent */]],
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* HttpModule */]],
            declarations: [__WEBPACK_IMPORTED_MODULE_2__markdown_component__["a" /* MarkdownComponent */]],
            providers: [__WEBPACK_IMPORTED_MODULE_3__markdown_service__["a" /* MarkdownService */]],
        }), 
        __metadata('design:paramtypes', [])
    ], MarkdownModule);
    return MarkdownModule;
}());
//# sourceMappingURL=/Users/dimpu/CODEBASE/github/angular2-markdown/src/markdown.module.js.map

/***/ }),

/***/ 477:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.
var environment = {
    production: false
};
//# sourceMappingURL=/Users/dimpu/CODEBASE/github/angular2-markdown/src/environment.js.map

/***/ }),

/***/ 481:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(112)();
// imports
exports.push([module.i, "@import url(https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css);", ""]);

// module
exports.push([module.i, "\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 492:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n\n    <h1 class=\"text-center\">\n        Angular 2 markdown Example\n    </h1>\n\n    <div class=\"row\">\n\n\n        <div class=\"col-xs-6 col-sm-6 col-md-6 col-lg-6\">\n            <pre>\n# Headers\n\n# H1\n## H2\n### H3\n#### H4\n##### H5\n###### H6\n\nAlternatively, for H1 and H2, an underline-ish style:\n\nAlt-H1\n======\n\nAlt-H2\n------\n\n\n\n# Emphasis\n\nEmphasis, aka italics, with *asterisks* or _underscores_.\n\nStrong emphasis, aka bold, with **asterisks** or __underscores__.\n\nCombined emphasis with **asterisks and _underscores_**.\n\nStrikethrough uses two tildes. ~~Scratch this.~~\n\n# Lists\n\n(In this example, leading and trailing spaces are shown with with dots: ⋅)\n\n1. First ordered list item\n2. Another item\n⋅⋅* Unordered sub-list.\n1. Actual numbers don't matter, just that it's a number\n⋅⋅1. Ordered sub-list\n4. And another item.\n\n⋅⋅⋅You can have properly indented paragraphs within list items. Notice the blank line above, and the leading spaces (at least one, but we'll use three here to also align the raw Markdown).\n\n⋅⋅⋅To have a line break without a paragraph, you will need to use two trailing spaces.⋅⋅\n⋅⋅⋅Note that this line is separate, but within the same paragraph.⋅⋅\n⋅⋅⋅(This is contrary to the typical GFM line break behaviour, where trailing spaces are not required.)\n\n* Unordered list can use asterisks\n- Or minuses\n+ Or pluses\n\n\n# Links\n\nThere are two ways to create links.\n\n[I'm an inline-style link](https://www.google.com)\n\n[I'm an inline-style link with title](https://www.google.com \"Google's Homepage\")\n\n[I'm a reference-style link][Arbitrary case-insensitive reference text]\n\n[I'm a relative reference to a repository file](../blob/master/LICENSE)\n\n[You can use numbers for reference-style link definitions][1]\n\nOr leave it empty and use the [link text itself].\n\nURLs and URLs in angle brackets will automatically get turned into links.\nhttp://www.example.com or <http://www.example.com> and sometimes\nexample.com (but not on Github, for example).\n\nSome text to show that the reference links can follow later.\n\n[arbitrary case-insensitive reference text]: https://www.mozilla.org\n[1]: http://slashdot.org\n[link text itself]: http://www.reddit.com\n\n\n\n# Images\n\nHere's our logo (hover to see the title text):\n\nInline-style:\n![alt text](https://github.com/adam-p/markdown-here/raw/master/src/common/images/icon48.png \"Logo Title Text 1\")\n\nReference-style:\n![alt text][logo]\n\n[logo]: https://github.com/adam-p/markdown-here/raw/master/src/common/images/icon48.png \"Logo Title Text\n\n\n\n# Code and Syntax Highlighting\n\nInline `code` has `back-ticks around` it.\n\n```javascript\nvar s = \"JavaScript syntax highlighting\";\nalert(s);\n```\n\n```python\ns = \"Python syntax highlighting\"\nprint s\n```\n\n```\nNo language indicated, so no syntax highlighting.\nBut let's throw in a <b>tag</b>.\n```\nvar s = \"JavaScript syntax highlighting\";\nalert(s);\ns = \"Python syntax highlighting\"\nprint s\n\n\n\n# Blockquotes\n\n> Blockquotes are very handy in email to emulate reply text.\n> This line is part of the same quote.\n\nQuote break.\n\n> This is a very long line that will still be quoted properly when it wraps. Oh boy let's keep writing to make sure this is long enough to actually wrap for everyone. Oh, you can *put* **Markdown** into a blockquote.\n\n\n# Horizontal Rule\n\nThree or more...\n\n---\n\nHyphens\n\n***\n\nAsterisks\n\n___\n\nUnderscores\n            </pre>\n        </div>\n\n        <div class=\"col-xs-6 col-sm-6 col-md-6 col-lg-6\">\n            <markdown>\n\n              # Headers\n\n              # H1\n              ## H2\n              ### H3\n              #### H4\n              ##### H5\n              ###### H6\n\n              Alternatively, for H1 and H2, an underline-ish style:\n\n              Alt-H1\n              ======\n\n              Alt-H2\n              ------\n\n\n\n              # Emphasis\n\n              Emphasis, aka italics, with *asterisks* or _underscores_.\n\n              Strong emphasis, aka bold, with **asterisks** or __underscores__.\n\n              Combined emphasis with **asterisks and _underscores_**.\n\n              Strikethrough uses two tildes. ~~Scratch this.~~\n\n              # Lists\n\n              (In this example, leading and trailing spaces are shown with with dots: ⋅)\n\n              1. First ordered list item\n              2. Another item\n              ⋅⋅* Unordered sub-list.\n              1. Actual numbers don't matter, just that it's a number\n              ⋅⋅1. Ordered sub-list\n              4. And another item.\n\n              ⋅⋅⋅You can have properly indented paragraphs within list items. Notice the blank line above, and the leading spaces (at least one, but we'll use three here to also align the raw Markdown).\n\n              ⋅⋅⋅To have a line break without a paragraph, you will need to use two trailing spaces.⋅⋅\n              ⋅⋅⋅Note that this line is separate, but within the same paragraph.⋅⋅\n              ⋅⋅⋅(This is contrary to the typical GFM line break behaviour, where trailing spaces are not required.)\n\n              * Unordered list can use asterisks\n              - Or minuses\n              + Or pluses\n\n\n              # Links\n\n              There are two ways to create links.\n\n              [I'm an inline-style link](https://www.google.com)\n\n              [I'm an inline-style link with title](https://www.google.com \"Google's Homepage\")\n\n              [I'm a reference-style link][Arbitrary case-insensitive reference text]\n\n              [I'm a relative reference to a repository file](../blob/master/LICENSE)\n\n              [You can use numbers for reference-style link definitions][1]\n\n              Or leave it empty and use the [link text itself].\n\n              URLs and URLs in angle brackets will automatically get turned into links.\n              http://www.example.com or <http://www.example.com> and sometimes\n              example.com (but not on Github, for example).\n\n              Some text to show that the reference links can follow later.\n\n              [arbitrary case-insensitive reference text]: https://www.mozilla.org\n              [1]: http://slashdot.org\n              [link text itself]: http://www.reddit.com\n\n\n\n              # Images\n\n              Here's our logo (hover to see the title text):\n\n              Inline-style:\n              ![alt text](https://github.com/adam-p/markdown-here/raw/master/src/common/images/icon48.png \"Logo Title Text 1\")\n\n              Reference-style:\n              ![alt text][logo]\n\n              [logo]: https://github.com/adam-p/markdown-here/raw/master/src/common/images/icon48.png \"Logo Title Text\n\n\n\n              # Code and Syntax Highlighting\n\n              Inline `code` has `back-ticks around` it.\n\n              ```javascript\n              var s = \"JavaScript syntax highlighting\";\n              alert(s);\n              ```\n\n              ```python\n              s = \"Python syntax highlighting\"\n              print s\n              ```\n\n              ```\n              No language indicated, so no syntax highlighting.\n              But let's throw in a <b>tag</b>.\n              ```\n              var s = \"JavaScript syntax highlighting\";\n              alert(s);\n              s = \"Python syntax highlighting\"\n              print s\n\n\n\n              # Blockquotes\n\n              > Blockquotes are very handy in email to emulate reply text.\n              > This line is part of the same quote.\n\n              Quote break.\n\n              > This is a very long line that will still be quoted properly when it wraps. Oh boy let's keep writing to make sure this is long enough to actually wrap for everyone. Oh, you can *put* **Markdown** into a blockquote.\n\n\n              # Horizontal Rule\n\n              Three or more...\n\n              ---\n\n              Hyphens\n\n              ***\n\n              Asterisks\n\n              ___\n\n              Underscores\n\n\n            </markdown>\n        </div>\n    </div>\n\n\n\n\n\n    <div class=\"row\">\n\n        <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12\">\n            <markdown path=\"src/app/demo/demo.md\"> </markdown>\n            <div Markdown path=\"src/app/demo/demo.html\"> </div>\n            <div Markdown path=\"src/app/demo/demo.cpp\"> </div>\n        </div>\n    </div>\n\n\n\n</div>\n"

/***/ }),

/***/ 768:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(371);


/***/ })

},[768]);
//# sourceMappingURL=main.bundle.js.map