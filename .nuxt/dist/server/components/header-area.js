exports.ids = [4];
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

/***/ })

};;
//# sourceMappingURL=header-area.js.map