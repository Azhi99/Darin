exports.ids = [12,1,3,4,5];
exports.modules = {

/***/ 123:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/HeaderArea.vue?vue&type=template&id=8857fd58&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('header',{staticClass:"header-area header-area-style-two"},[_vm._ssrNode("<div class=\"top-header\">","</div>",[_vm._ssrNode("<div class=\"container-fluid\">","</div>",[_vm._ssrNode("<div class=\"row align-items-center\">","</div>",[_vm._ssrNode("<div class=\"col-lg-6 col-md-6 col-5\"><ul class=\"header-left-content\"><li><a href=\"https://www.facebook.com/daringame/\" target=\"_blank\" rel=\"noopener noreferrer\"><i class=\"ri-facebook-fill\"></i></a></li> <li><a href=\"https://www.instagram.com/darin_game/\" target=\"_blank\" rel=\"noopener noreferrer\"><i class=\"ri-instagram-line\"></i></a></li></ul></div> "),_vm._ssrNode("<div class=\"col-lg-6 col-md-6 col-7 py-0\">","</div>",[_vm._ssrNode("<div"+(_vm._ssrClass("header-right-content",{'float-left': _vm.$vuetify.rtl}))+">","</div>",[_vm._ssrNode("<div class=\"languages-switcher\">","</div>",[_vm._ssrNode("<i class=\"ri-global-line\"></i> "),(_vm.$i18n.locale == 'ku')?_c('select',{directives:[{name:"model",rawName:"v-model",value:(_vm.lang),expression:"lang"}],on:{"change":function($event){var $$selectedVal = Array.prototype.filter.call($event.target.options,function(o){return o.selected}).map(function(o){var val = "_value" in o ? o._value : o.value;return val}); _vm.lang=$event.target.multiple ? $$selectedVal : $$selectedVal[0]}}},[_c('option',{attrs:{"value":"ku"}},[_vm._v("کوردی")]),_vm._v(" "),_c('option',{attrs:{"value":"en"}},[_vm._v("English")])]):_c('select',{directives:[{name:"model",rawName:"v-model",value:(_vm.lang),expression:"lang"}],on:{"change":function($event){var $$selectedVal = Array.prototype.filter.call($event.target.options,function(o){return o.selected}).map(function(o){var val = "_value" in o ? o._value : o.value;return val}); _vm.lang=$event.target.multiple ? $$selectedVal : $$selectedVal[0]}}},[_c('option',{attrs:{"value":"en"}},[_vm._v("English")]),_vm._v(" "),_c('option',{attrs:{"value":"ku"}},[_vm._v("کوردی")])])],2)])])],2)])]),_vm._ssrNode(" <div class=\"navbar-area navbar-area-style-two\"><div class=\"mobile-responsive-nav\"><div class=\"container-fluid\"><div class=\"mobile-responsive-menu\"><div class=\"logo\"><a href=\"/\"><img src=\"logo darin.png\" alt=\"logo\"></a></div></div></div></div> <div class=\"desktop-nav\"><div class=\"container-fluid pt-0\"><nav class=\"navbar navbar-expand-md navbar-light\"><a href=\"/\" class=\"navbar-brand py-1\" style=\"width: 100%;\"><img src=\"logo darin.png\" alt=\"logo\" width=\"20%;\"></a> <div id=\"navbarSupportedContent\" class=\"collapse navbar-collapse mean-menu float-left\"><ul class=\"navbar-nav\"><li class=\"nav-item\"><a href=\"/\""+(_vm._ssrClass("nav-link",{'active': _vm.$route.fullPath == '/'}))+">"+_vm._ssrEscape("\n                                "+_vm._s(_vm.$t('home'))+" \n                            ")+"</a></li> <li class=\"nav-item\"><a href=\"/about\""+(_vm._ssrClass("nav-link",{'active': _vm.$route.fullPath == '/about'}))+">"+_vm._ssrEscape(" "+_vm._s(_vm.$t('about'))+" ")+"</a></li> <li class=\"nav-item\"><a href=\"/contact\""+(_vm._ssrClass("nav-link",{'active': _vm.$route.fullPath == '/contact'}))+">"+_vm._ssrEscape(" "+_vm._s(_vm.$t('contact'))+" ")+"</a></li> <li class=\"nav-item\"><a href=\"/products\""+(_vm._ssrClass("nav-link",{'active': _vm.$route.fullPath == '/products'}))+">"+_vm._ssrEscape(" "+_vm._s(_vm.$t('products'))+" ")+"</a></li></ul> <div class=\"others-options\"><ul><li><a href=\"tel:+9647503079718\" class=\"default-btn\" style=\"color: white !important;\"><span dir=\"ltr\">\n                                +964(0) 750 307 9718\n                                <i class=\"ri-phone-fill\"></i></span></a></li></ul></div></div></nav></div></div></div>")],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/HeaderArea.vue?vue&type=template&id=8857fd58&

// EXTERNAL MODULE: external "jquery"
var external_jquery_ = __webpack_require__(64);
var external_jquery_default = /*#__PURE__*/__webpack_require__.n(external_jquery_);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/HeaderArea.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var HeaderAreavue_type_script_lang_js_ = ({
  data() {
    return {
      lang: 'en'
    };
  },

  mounted() {
    this.lang = localStorage.getItem('darinLang') || 'en';

    if (this.lang == 'ku') {
      this.$vuetify.rtl = true;
      setTimeout(() => {
        external_jquery_default()('.meanmenu-reveal').css({
          'right': 'auto',
          'left': '0'
        });
      }, 200);
    } else {
      this.$vuetify.rtl = false;
      setTimeout(() => {
        external_jquery_default()('.meanmenu-reveal').css({
          'right': '0',
          'left': 'auto'
        });
      }, 200);
    }
  },

  watch: {
    lang() {
      this.$i18n.locale = this.lang;

      if (this.lang == 'ku') {
        this.$vuetify.rtl = true;
        external_jquery_default()('.meanmenu-reveal').css({
          'right': 'auto',
          'left': '0'
        });
      } else {
        this.$vuetify.rtl = false;
        external_jquery_default()('.meanmenu-reveal').css({
          'right': '0',
          'left': 'auto'
        });
      }

      localStorage.setItem('darinLang', this.lang);
    }

  }
});
// CONCATENATED MODULE: ./components/HeaderArea.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_HeaderAreavue_type_script_lang_js_ = (HeaderAreavue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(7);

// CONCATENATED MODULE: ./components/HeaderArea.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_HeaderAreavue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "053391f3"
  
)

/* harmony default export */ var HeaderArea = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 124:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/FooterArea.vue?vue&type=template&id=0b2ce662&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('footer',{staticClass:"footer-area bg-color pt-70 pb-70"},[_vm._ssrNode("<div class=\"container\">","</div>",[_vm._ssrNode("<div class=\"row\">","</div>",[_vm._ssrNode("<div class=\"col-lg-6 col-md-6\">","</div>",[_vm._ssrNode("<div class=\"single-footer-widget single-bg\">","</div>",[_c('NuxtLink',{staticClass:"logo",attrs:{"to":"/"}},[_c('img',{attrs:{"src":"logo darin.png","alt":"Image","width":"25%;"}})]),_vm._ssrNode(" <p>"+_vm._ssrEscape(" "+_vm._s(_vm.$t('headTitle'))+"  ")+"<br>"+_vm._ssrEscape(" "+_vm._s(_vm.$t('razerDistributor'))+" ")+"</p> <ul class=\"social-icon\"><li><a href=\"https://www.facebook.com/daringame/\" target=\"_blank\" rel=\"noopener noreferrer\"><i class=\"ri-facebook-fill\" style=\"font-size: 28px;\"></i></a></li> <li><a href=\"https://www.instagram.com/darin_game/\" target=\"_blank\" rel=\"noopener noreferrer\"><i class=\"ri-instagram-line\" style=\"font-size: 28px;\"></i></a></li></ul>")],2)]),_vm._ssrNode(" <div class=\"col-lg-6 col-md-6\"><div class=\"single-footer-widget\"><h3"+(_vm._ssrStyle(null,("font-family: " + (_vm.$vuetify.rtl ? 'nrt !important' : '')), null))+">"+_vm._ssrEscape(" "+_vm._s(_vm.$t('getInTouch'))+" ")+"</h3> <div class=\"row\"><div class=\"col-3 py-0\" style=\"height: 30px;\"><span><i class=\"ri-map-pin-fill\"></i>"+_vm._ssrEscape(" "+_vm._s(_vm.$t('address'))+":")+"</span></div> <div class=\"col-9 py-0\" style=\"height: 30px;\"><p>"+_vm._ssrEscape(" "+_vm._s(_vm.$t('addressDetail'))+" ")+"</p></div></div> <div class=\"row\"><div class=\"col-3 py-1\"><span><i class=\"ri-phone-fill\""+(_vm._ssrStyle(null,_vm.$vuetify.rtl ? 'transform: rotateY(180deg);' : '', null))+"></i>"+_vm._ssrEscape(" "+_vm._s(_vm.$t('phone'))+":")+"</span></div> <div class=\"col-9 py-1\"><a href=\"tel:+9647503079718\" dir=\"ltr\">+964(0) 750 307 9718</a></div></div> <div class=\"row\"><div class=\"col-3 py-1\"><span><i class=\"ri-mail-fill\"></i>"+_vm._ssrEscape(" "+_vm._s(_vm.$t('email'))+":")+"</span></div> <div class=\"col-9 py-1\"><a href=\"mailto:info@daringame.com\" rel=\"noopener noreferrer\">info@daringame.com</a></div></div></div></div> "+((_vm.insta1)?("<div class=\"col-lg-4 col-md-4 col-sm-12\"><iframe"+(_vm._ssrAttr("src",_vm.insta1))+" frameborder=\"0\" width=\"100%\" height=\"740px\"></iframe></div>"):"<!---->")+" "+((_vm.insta2)?("<div class=\"col-lg-4 col-md-4 col-sm-12\"><iframe"+(_vm._ssrAttr("src",_vm.insta2))+" frameborder=\"0\" width=\"100%\" height=\"740px\"></iframe></div>"):"<!---->")+" "+((_vm.insta3)?("<div class=\"col-lg-4 col-md-4 col-sm-12\"><iframe"+(_vm._ssrAttr("src",_vm.insta3))+" frameborder=\"0\" width=\"100%\" height=\"740px\"></iframe></div>"):"<!---->"))],2)])])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/FooterArea.vue?vue&type=template&id=0b2ce662&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/FooterArea.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var FooterAreavue_type_script_lang_js_ = ({
  data() {
    return {
      insta1: '',
      insta2: '',
      insta3: ''
    };
  },

  created() {
    this.$axios.$get('/api/insta/getAll').then(data => {
      this.insta1 = data[0].link;
      this.insta2 = data[1].link;
      this.insta3 = data[2].link;
    });
  }

});
// CONCATENATED MODULE: ./components/FooterArea.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_FooterAreavue_type_script_lang_js_ = (FooterAreavue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(7);

// CONCATENATED MODULE: ./components/FooterArea.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_FooterAreavue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "4c987701"
  
)

/* harmony default export */ var FooterArea = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 159:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Partners.vue?vue&type=template&id=0f6541f8&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"partner-area pb-40",staticStyle:{"padding-top":"40px"},attrs:{"dir":"ltr"}},[_vm._ssrNode("<div class=\"container\"><div class=\"partner-bg\"><div class=\"row\"><div class=\"partner-slider owl-carousel owl-theme\"><div class=\"partner-item\"><a href=\"partner-details.html\"><img src=\"assets/images/partner/Logitech.png\" alt=\"Image\"></a></div> <div class=\"partner-item\"><a href=\"partner-details.html\"><img src=\"assets/images/partner/xbox.png\" alt=\"Image\"></a></div> <div class=\"partner-item\"><a href=\"partner-details.html\"><img src=\"assets/images/partner/Razer.png\" alt=\"Image\"></a></div> <div class=\"partner-item\"><a href=\"partner-details.html\"><img src=\"assets/images/partner/fantechlogo.png\" alt=\"Image\" style=\"width: 50%;\"></a></div> <div class=\"partner-item\"><a href=\"partner-details.html\"><img src=\"assets/images/partner/ps.png\" alt=\"Image\"></a></div> <div class=\"partner-item\"><a href=\"partner-details.html\"><img src=\"assets/images/partner/msi.png\" alt=\"Image\"></a></div> <div class=\"partner-item\"><a href=\"partner-details.html\"><img src=\"assets/images/partner/hyperx.png\" alt=\"Image\"></a></div></div></div></div></div>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/Partners.vue?vue&type=template&id=0f6541f8&

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(7);

// CONCATENATED MODULE: ./components/Partners.vue

var script = {}


/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  script,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "67e149a4"
  
)

/* harmony default export */ var Partners = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 160:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Copyright.vue?vue&type=template&id=e3218bce&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"copy-right-area bg-color"},[_vm._ssrNode("<div class=\"container py-0\"><p>\n            Copyright <i class=\"ri-copyright-line\"></i>"+_vm._ssrEscape(" "+_vm._s(new Date().getFullYear())+" Darin Company. Developed By \n            ")+"<a href=\"https://www.facebook.com/sulytech\" target=\"_blank\" rel=\"noopener noreferrer\">Suly Tech</a></p></div>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/Copyright.vue?vue&type=template&id=e3218bce&

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(7);

// CONCATENATED MODULE: ./components/Copyright.vue

var script = {}


/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  script,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "1aa3bf1e"
  
)

/* harmony default export */ var Copyright = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 200:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(209);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(9).default
module.exports.__inject__ = function (context) {
  add("7ec3001a", content, true, context)
};

/***/ }),

/***/ 208:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_638cd7b6_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(200);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_638cd7b6_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_638cd7b6_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_638cd7b6_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_638cd7b6_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 209:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(8);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".home .image[data-v-638cd7b6]{flex:1 1 40rem}.home .image img[data-v-638cd7b6]{width:80%;padding:9.5rem 1rem 1rem;-webkit-animation:float 3s linear infinite;animation:float 3s linear infinite}@media screen and (min-width:340px) and (max-width:600px){.home .image img[data-v-638cd7b6]{width:97%;padding:1rem;-webkit-animation:float 3s linear infinite;animation:float 3s linear infinite}.home .image[data-v-638cd7b6]{margin-left:0!important}#header-part[data-v-638cd7b6]{margin-top:10px!important}#header-text[data-v-638cd7b6],#header-text2[data-v-638cd7b6]{text-align:center}}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 240:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/index.vue?vue&type=template&id=638cd7b6&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_vm._ssrNode("<div class=\"preloader\" data-v-638cd7b6><div class=\"lds-ripple\" data-v-638cd7b6><div class=\"pl-spark-1 pl-spark-2\" data-v-638cd7b6></div></div></div> "),_c('HeaderArea'),_vm._ssrNode(" <div class=\"home\" data-v-638cd7b6><div class=\"container-fluid\" data-v-638cd7b6><div class=\"row\" data-v-638cd7b6><div id=\"header-part\" class=\"col-lg-6 col-md-6 col-sm-12 pl-5\" style=\"margin-top: 230px;\" data-v-638cd7b6><h1 id=\"header-text\""+(_vm._ssrStyle(null,("font-family: " + (_vm.$vuetify.rtl ? 'nrt !important' : '')), null))+" data-v-638cd7b6>"+_vm._ssrEscape(" "+_vm._s(_vm.$t('headTitle'))+" ")+"</h1> <h5 id=\"header-text2\""+(_vm._ssrStyle(null,("font-family: " + (_vm.$vuetify.rtl ? 'nrt !important' : '')), null))+" data-v-638cd7b6>"+_vm._ssrEscape(" "+_vm._s(_vm.$t('razerDistributor'))+" ")+"</h5></div> <div class=\"col-lg-6 col-md-6 col-sm-12\" data-v-638cd7b6><div class=\"image\""+(_vm._ssrStyle(null,("margin-" + (_vm.$vuetify.rtl ? 'right' : 'left') + ": 100px;"), null))+" data-v-638cd7b6><img src=\"assets/images/game.svg\" alt data-v-638cd7b6></div></div></div></div></div> <section class=\"success-area bg-color pt-70 pb-70\" data-v-638cd7b6><div class=\"container\" data-v-638cd7b6><div class=\"section-title\" data-v-638cd7b6><h2"+(_vm._ssrStyle(null,("font-family: " + (_vm.$vuetify.rtl ? 'nrt !important' : '')), null))+" data-v-638cd7b6>"+_vm._ssrEscape(" "+_vm._s(_vm.$t('bestGameNeed'))+" ")+"</h2> <p data-v-638cd7b6>"+_vm._ssrEscape(" "+_vm._s(_vm.$t('delivery'))+" ")+"</p></div></div></section> "),_c('Partners'),_vm._ssrNode(" "),_c('FooterArea'),_vm._ssrNode(" "),_c('Copyright'),_vm._ssrNode(" <div class=\"go-top\" data-v-638cd7b6><i class=\"ri-arrow-up-s-fill\" data-v-638cd7b6></i> <i class=\"ri-arrow-up-s-fill\" data-v-638cd7b6></i></div>")],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/index.vue?vue&type=template&id=638cd7b6&scoped=true&

// EXTERNAL MODULE: external "jquery"
var external_jquery_ = __webpack_require__(64);
var external_jquery_default = /*#__PURE__*/__webpack_require__.n(external_jquery_);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/index.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var lib_vue_loader_options_pagesvue_type_script_lang_js_ = ({
  mounted() {
    external_jquery_default()('.preloader').addClass('preloader-deactivate');
    this.$i18n.locale = localStorage.getItem('darinLang') || 'en';
  }

});
// CONCATENATED MODULE: ./pages/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var pagesvue_type_script_lang_js_ = (lib_vue_loader_options_pagesvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(7);

// CONCATENATED MODULE: ./pages/index.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(208)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pagesvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "638cd7b6",
  "1a648c0d"
  
)

/* harmony default export */ var pages = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {HeaderArea: __webpack_require__(123).default,Partners: __webpack_require__(159).default,FooterArea: __webpack_require__(124).default,Copyright: __webpack_require__(160).default})


/***/ })

};;
//# sourceMappingURL=index.js.map