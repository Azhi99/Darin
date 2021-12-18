exports.ids = [3];
exports.modules = {

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

/***/ })

};;
//# sourceMappingURL=footer-area.js.map