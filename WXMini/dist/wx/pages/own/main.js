require("../../common/manifest.js")
require("../../debug/GenerateTestUserSig.js")
require("../../common/vendor.js")
global.webpackJsonpMpvue([4],{

/***/ "PpMG":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__("5nAL");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__("nVT/");



var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */]);
app.$mount();

/***/ }),

/***/ "Sl4T":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "container"
  }, [_c('div', {
    staticClass: "card"
  }, [_c('div', {
    staticClass: "item"
  }, [_c('i-row', {
    attrs: {
      "mpcomid": '2'
    }
  }, [_c('i-col', {
    attrs: {
      "span": "8",
      "mpcomid": '0'
    }
  }, [_c('div', {
    staticClass: "avatar"
  }, [_c('image', {
    staticStyle: {
      "width": "80px",
      "height": "80px",
      "border-radius": "8px"
    },
    attrs: {
      "src": _vm.myInfo.avatar || '/static/images/header.png'
    }
  })])]), _vm._v(" "), _c('i-col', {
    attrs: {
      "span": "16",
      "mpcomid": '1'
    }
  }, [_c('div', {
    staticClass: "right"
  }, [_c('div', {
    staticClass: "username"
  }, [_vm._v(_vm._s(_vm.myInfo.nick))]), _vm._v(" "), _c('div', {
    staticClass: "account"
  }, [_vm._v("账号：" + _vm._s(_vm.myInfo.userID))])])])], 1)], 1)]), _vm._v(" "), _c('div', {
    staticClass: "revise"
  }, [_c('i-button', {
    attrs: {
      "type": "primary",
      "long": "true",
      "shape": "circle",
      "eventid": '0',
      "mpcomid": '3'
    },
    on: {
      "click": _vm.reviseInfo
    }
  }, [_vm._v("修改资料")])], 1), _vm._v(" "), _c('div', {
    staticClass: "revise"
  }, [_c('i-button', {
    attrs: {
      "type": "error",
      "long": "true",
      "shape": "circle",
      "eventid": '1',
      "mpcomid": '4'
    },
    on: {
      "click": _vm.logout
    }
  }, [_vm._v("退出登陆")])], 1)])
}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ "T6iq":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["a"] = ({
  data: function data() {
    return {
      search: '',
      myInfo: {}
    };
  },

  methods: {
    reviseInfo: function reviseInfo() {
      var url = '../profile/main';
      wx.navigateTo({ url: url });
    },
    logout: function logout() {
      this.$store.commit('resetGroup');
      this.$store.commit('resetUser');
      this.$store.commit('resetCurrentConversation');
      this.$store.commit('resetAllConversation');
      wx.$app.logout();
      wx.clearStorage();
      wx.hideLoading();
      wx.reLaunch({
        url: '../login/main'
      });
    }
  },
  // 更新自己的个人信息
  onShow: function onShow() {
    this.myInfo = this.$store.state.user.myInfo;
  }
});

/***/ }),

/***/ "aQEe":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "nVT/":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__("T6iq");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_08192f12_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__("Sl4T");
function injectStyle (ssrContext) {
  __webpack_require__("aQEe")
}
var normalizeComponent = __webpack_require__("ybqe")
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-08192f12"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_08192f12_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ })

},["PpMG"]);