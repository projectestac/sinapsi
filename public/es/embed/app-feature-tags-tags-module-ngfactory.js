(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app-feature-tags-tags-module-ngfactory"],{

/***/ "./src/app/feature/tags/details/index.ts":
/*!***********************************************!*\
  !*** ./src/app/feature/tags/details/index.ts ***!
  \***********************************************/
/*! exports provided: TagDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tag_details_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tag-details.component */ "./src/app/feature/tags/details/tag-details.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TagDetailsComponent", function() { return _tag_details_component__WEBPACK_IMPORTED_MODULE_0__["TagDetailsComponent"]; });





/***/ }),

/***/ "./src/app/feature/tags/details/tag-details.component.ngfactory.js":
/*!*************************************************************************!*\
  !*** ./src/app/feature/tags/details/tag-details.component.ngfactory.js ***!
  \*************************************************************************/
/*! exports provided: RenderType_TagDetailsComponent, View_TagDetailsComponent_0, View_TagDetailsComponent_Host_0, TagDetailsComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_TagDetailsComponent", function() { return RenderType_TagDetailsComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_TagDetailsComponent_0", function() { return View_TagDetailsComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_TagDetailsComponent_Host_0", function() { return View_TagDetailsComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TagDetailsComponentNgFactory", function() { return TagDetailsComponentNgFactory; });
/* harmony import */ var _tag_details_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tag-details.component.scss.shim.ngstyle */ "./src/app/feature/tags/details/tag-details.component.scss.shim.ngstyle.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_social_social_links_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/social/social-links.component.ngfactory */ "./src/app/shared/social/social-links.component.ngfactory.js");
/* harmony import */ var _shared_social_social_links_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/social/social-links.component */ "./src/app/shared/social/social-links.component.ts");
/* harmony import */ var _shared_social_social_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/social/social.service */ "./src/app/shared/social/social.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _concrete_icon_icon_component_ngfactory__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../concrete/icon/icon.component.ngfactory */ "./src/concrete/icon/icon.component.ngfactory.js");
/* harmony import */ var _concrete_icon_icon_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../concrete/icon/icon.component */ "./src/concrete/icon/icon.component.ts");
/* harmony import */ var _core_auth_ifcan_directive__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../core/auth/ifcan.directive */ "./src/app/core/auth/ifcan.directive.ts");
/* harmony import */ var _core_auth_policies_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../core/auth/policies.service */ "./src/app/core/auth/policies.service.ts");
/* harmony import */ var _core_auth_session_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../core/auth/session.service */ "./src/app/core/auth/session.service.ts");
/* harmony import */ var _shared_search_search_component_ngfactory__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../shared/search/search.component.ngfactory */ "./src/app/shared/search/search.component.ngfactory.js");
/* harmony import */ var _shared_search_search_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../shared/search/search.component */ "./src/app/shared/search/search.component.ts");
/* harmony import */ var _shared_search_toolbar_component_ngfactory__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../shared/search/toolbar.component.ngfactory */ "./src/app/shared/search/toolbar.component.ngfactory.js");
/* harmony import */ var _shared_search_toolbar_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../shared/search/toolbar.component */ "./src/app/shared/search/toolbar.component.ts");
/* harmony import */ var _posts_posts_browser_component_ngfactory__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../posts/posts-browser.component.ngfactory */ "./src/app/feature/posts/posts-browser.component.ngfactory.js");
/* harmony import */ var _core_services_manager_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../../core/services/manager.service */ "./src/app/core/services/manager.service.ts");
/* harmony import */ var _posts_posts_browser_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../posts/posts-browser.component */ "./src/app/feature/posts/posts-browser.component.ts");
/* harmony import */ var _shared_sidebar_sidebar_component_ngfactory__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../../shared/sidebar/sidebar.component.ngfactory */ "./src/app/shared/sidebar/sidebar.component.ngfactory.js");
/* harmony import */ var _shared_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../../shared/sidebar/sidebar.component */ "./src/app/shared/sidebar/sidebar.component.ts");
/* harmony import */ var ng2_dragula_components_dragula_provider__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ng2-dragula/components/dragula.provider */ "./node_modules/ng2-dragula/components/dragula.provider.js");
/* harmony import */ var ng2_dragula_components_dragula_provider__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(ng2_dragula_components_dragula_provider__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var _concrete_dialog_dialog_service__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../../../../concrete/dialog/dialog.service */ "./src/concrete/dialog/dialog.service.ts");
/* harmony import */ var _shared_errors_errors_component_ngfactory__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../../../shared/errors/errors.component.ngfactory */ "./src/app/shared/errors/errors.component.ngfactory.js");
/* harmony import */ var _shared_errors_errors_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../../../shared/errors/errors.component */ "./src/app/shared/errors/errors.component.ts");
/* harmony import */ var _concrete_breadcrumb_breadcrumb_component_ngfactory__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../../../../concrete/breadcrumb/breadcrumb.component.ngfactory */ "./src/concrete/breadcrumb/breadcrumb.component.ngfactory.js");
/* harmony import */ var _concrete_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ../../../../concrete/breadcrumb/breadcrumb.component */ "./src/concrete/breadcrumb/breadcrumb.component.ts");
/* harmony import */ var _concrete_breadcrumb_breadcrumb_service__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ../../../../concrete/breadcrumb/breadcrumb.service */ "./src/concrete/breadcrumb/breadcrumb.service.ts");
/* harmony import */ var _tag_details_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./tag-details.component */ "./src/app/feature/tags/details/tag-details.component.ts");
/* harmony import */ var _core_services_store_service__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ../../../core/services/store.service */ "./src/app/core/services/store.service.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */
/** PURE_IMPORTS_START _tag_details.component.scss.shim.ngstyle,_angular_core,_.._.._shared_social_social_links.component.ngfactory,_.._.._shared_social_social_links.component,_.._.._shared_social_social.service,_angular_router,_angular_common,_.._.._.._concrete_icon_icon.component.ngfactory,_.._.._.._concrete_icon_icon.component,_.._.._core_auth_ifcan.directive,_.._.._core_auth_policies.service,_.._.._core_auth_session.service,_.._.._shared_search_search.component.ngfactory,_.._.._shared_search_search.component,_.._.._shared_search_toolbar.component.ngfactory,_.._.._shared_search_toolbar.component,_.._posts_posts_browser.component.ngfactory,_.._.._core_services_manager.service,_.._posts_posts_browser.component,_.._.._shared_sidebar_sidebar.component.ngfactory,_.._.._shared_sidebar_sidebar.component,ng2_dragula_components_dragula.provider,_.._.._.._concrete_dialog_dialog.service,_.._.._shared_errors_errors.component.ngfactory,_.._.._shared_errors_errors.component,_.._.._.._concrete_breadcrumb_breadcrumb.component.ngfactory,_.._.._.._concrete_breadcrumb_breadcrumb.component,_.._.._.._concrete_breadcrumb_breadcrumb.service,_tag_details.component,_.._.._core_services_store.service PURE_IMPORTS_END */
/** PURE_IMPORTS_START _tag_details.component.scss.shim.ngstyle,_angular_core,_.._.._shared_social_social_links.component.ngfactory,_.._.._shared_social_social_links.component,_.._.._shared_social_social.service,_angular_router,_angular_common,_.._.._.._concrete_icon_icon.component.ngfactory,_.._.._.._concrete_icon_icon.component,_.._.._core_auth_ifcan.directive,_.._.._core_auth_policies.service,_.._.._core_auth_session.service,_.._.._shared_search_search.component.ngfactory,_.._.._shared_search_search.component,_.._.._shared_search_toolbar.component.ngfactory,_.._.._shared_search_toolbar.component,_.._posts_posts_browser.component.ngfactory,_.._.._core_services_manager.service,_.._posts_posts_browser.component,_.._.._shared_sidebar_sidebar.component.ngfactory,_.._.._shared_sidebar_sidebar.component,ng2_dragula_components_dragula.provider,_.._.._.._concrete_dialog_dialog.service,_.._.._shared_errors_errors.component.ngfactory,_.._.._shared_errors_errors.component,_.._.._.._concrete_breadcrumb_breadcrumb.component.ngfactory,_.._.._.._concrete_breadcrumb_breadcrumb.component,_.._.._.._concrete_breadcrumb_breadcrumb.service,_tag_details.component,_.._.._core_services_store.service PURE_IMPORTS_END */






























var styles_TagDetailsComponent = [_tag_details_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];
var RenderType_TagDetailsComponent = /*@__PURE__*/ /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({ encapsulation: 0, styles: styles_TagDetailsComponent, data: {} });

function View_TagDetailsComponent_1(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, null, null, null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 1, "app-social-links", [], null, null, null, _shared_social_social_links_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_SocialLinksComponent_0"], _shared_social_social_links_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_SocialLinksComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 573440, null, 0, _shared_social_social_links_component__WEBPACK_IMPORTED_MODULE_3__["SocialLinksComponent"], [_shared_social_social_service__WEBPACK_IMPORTED_MODULE_4__["SocialService"]], { tag: [0, "tag"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.tag; _ck(_v, 2, 0, currVal_0); }, null); }
function View_TagDetailsComponent_4(_l) {
    return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 8, null, null, null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 7, "div", [["class", "admin-block card p-3 mb-3"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 6, "a", [], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) {
            var ad = true;
            if (("click" === en)) {
                var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 3).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](3, 671744, null, 0, _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLinkWithHref"], [_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["LocationStrategy"]], { routerLink: [0, "routerLink"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpad"](4, 2), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](5, 0, null, null, 1, "cn-icon", [["value", "edit"]], null, null, null, _concrete_icon_icon_component_ngfactory__WEBPACK_IMPORTED_MODULE_7__["View_CnIconComponent_0"], _concrete_icon_icon_component_ngfactory__WEBPACK_IMPORTED_MODULE_7__["RenderType_CnIconComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](6, 49152, null, 0, _concrete_icon_icon_component__WEBPACK_IMPORTED_MODULE_8__["CnIconComponent"], [], { value: [0, "value"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](7, 0, null, null, 1, "span", [["class", "sh"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Editar la sinapsis"]))], function (_ck, _v) { var _co = _v.component; var currVal_2 = _ck(_v, 4, 0, "/editors/synapses", _co.synapse.id); _ck(_v, 3, 0, currVal_2); var currVal_3 = "edit"; _ck(_v, 6, 0, currVal_3); }, function (_ck, _v) { var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 3).target; var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 3).href; _ck(_v, 2, 0, currVal_0, currVal_1); });
}
function View_TagDetailsComponent_3(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 3, null, null, null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 2, null, View_TagDetailsComponent_4)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 737280, null, 0, _core_auth_ifcan_directive__WEBPACK_IMPORTED_MODULE_9__["IfCanDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _core_auth_policies_service__WEBPACK_IMPORTED_MODULE_10__["PoliciesService"], _core_auth_session_service__WEBPACK_IMPORTED_MODULE_11__["SessionService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { gate: [0, "gate"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpad"](3, 2), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](0, null, null, 0))], function (_ck, _v) { var _co = _v.component; var currVal_0 = _ck(_v, 3, 0, "update-synapse", _co.synapse); _ck(_v, 2, 0, currVal_0); }, null); }
function View_TagDetailsComponent_2(_l) {
    return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 26, "article", [["class", "page-content"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 12, "div", [["class", "page-header"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 11, "div", [["class", "container"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 5, "header", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, null, 3, "h1", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](5, 0, null, null, 1, "span", [["class", "tag-hash"]], [[8, "hidden", 0]], null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["#"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](7, null, [" ", " "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](8, 0, null, null, 0, "div", [["role", "contentinfo"]], [[8, "innerHTML", 1]], null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](9, 0, null, null, 4, "aside", [["role", "search"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](10, 0, null, null, 1, "app-search", [], null, [[null, "search"]], function (_v, en, $event) {
            var ad = true;
            var _co = _v.component;
            if (("search" === en)) {
                var pd_0 = (_co.search($event) !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, _shared_search_search_component_ngfactory__WEBPACK_IMPORTED_MODULE_12__["View_SearchComponent_0"], _shared_search_search_component_ngfactory__WEBPACK_IMPORTED_MODULE_12__["RenderType_SearchComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](11, 49152, null, 0, _shared_search_search_component__WEBPACK_IMPORTED_MODULE_13__["SearchComponent"], [], { value: [0, "value"] }, { searchEvent: "search" }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](12, 0, null, null, 1, "app-search-toolbar", [], null, [[null, "input"]], function (_v, en, $event) {
            var ad = true;
            var _co = _v.component;
            if (("input" === en)) {
                var pd_0 = (_co.filter($event) !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, _shared_search_toolbar_component_ngfactory__WEBPACK_IMPORTED_MODULE_14__["View_SearchToolbarComponent_0"], _shared_search_toolbar_component_ngfactory__WEBPACK_IMPORTED_MODULE_14__["RenderType_SearchToolbarComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](13, 4243456, null, 0, _shared_search_toolbar_component__WEBPACK_IMPORTED_MODULE_15__["SearchToolbarComponent"], [], { value: [0, "value"] }, { input: "input" }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](14, 0, null, null, 12, "section", [["class", "page-section"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](15, 0, null, null, 11, "div", [["class", "page-body container"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](16, 0, null, null, 10, "div", [["class", "row"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](17, 0, null, null, 3, "div", [["class", "col-lg-8"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](18, 0, null, null, 2, "app-posts-browser", [], null, null, null, _posts_posts_browser_component_ngfactory__WEBPACK_IMPORTED_MODULE_16__["View_PostsBrowserComponent_0"], _posts_posts_browser_component_ngfactory__WEBPACK_IMPORTED_MODULE_16__["RenderType_PostsBrowserComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](131584, null, _core_services_manager_service__WEBPACK_IMPORTED_MODULE_17__["RequestManager"], _core_services_manager_service__WEBPACK_IMPORTED_MODULE_17__["RequestManager"], [_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](20, 245760, null, 0, _posts_posts_browser_component__WEBPACK_IMPORTED_MODULE_18__["PostsBrowserComponent"], [_core_services_manager_service__WEBPACK_IMPORTED_MODULE_17__["RequestManager"]], { sections: [0, "sections"], synapse: [1, "synapse"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](21, 0, null, null, 5, "div", [["class", "col-lg-4"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](22, 0, null, null, 4, "aside", [["class", "synapse-blocks"], ["role", "complementary"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_TagDetailsComponent_3)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](24, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](25, 0, null, null, 1, "app-sidebar", [], null, null, null, _shared_sidebar_sidebar_component_ngfactory__WEBPACK_IMPORTED_MODULE_19__["View_SidebarComponent_0"], _shared_sidebar_sidebar_component_ngfactory__WEBPACK_IMPORTED_MODULE_19__["RenderType_SidebarComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](26, 770048, null, 0, _shared_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_20__["SidebarComponent"], [ng2_dragula_components_dragula_provider__WEBPACK_IMPORTED_MODULE_21__["DragulaService"], _concrete_dialog_dialog_service__WEBPACK_IMPORTED_MODULE_22__["CnDialog"]], { blocks: [0, "blocks"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_3 = _co.request.search; _ck(_v, 11, 0, currVal_3); var currVal_4 = _co.request; _ck(_v, 13, 0, currVal_4); var currVal_5 = _co.sections; var currVal_6 = _co.synapse; _ck(_v, 20, 0, currVal_5, currVal_6); var currVal_7 = _co.synapse.id; _ck(_v, 24, 0, currVal_7); var currVal_8 = _co.blocks; _ck(_v, 26, 0, currVal_8); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.synapse.id; _ck(_v, 5, 0, currVal_0); var currVal_1 = _co.synapse.name; _ck(_v, 7, 0, currVal_1); var currVal_2 = _co.synapse.description; _ck(_v, 8, 0, currVal_2); });
}
function View_TagDetailsComponent_5(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, null, null, null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 1, "app-errors", [["code", "404"]], null, null, null, _shared_errors_errors_component_ngfactory__WEBPACK_IMPORTED_MODULE_23__["View_ErrorsComponent_0"], _shared_errors_errors_component_ngfactory__WEBPACK_IMPORTED_MODULE_23__["RenderType_ErrorsComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 49152, null, 0, _shared_errors_errors_component__WEBPACK_IMPORTED_MODULE_24__["ErrorsComponent"], [_core_auth_session_service__WEBPACK_IMPORTED_MODULE_11__["SessionService"]], { code: [0, "code"] }, null)], function (_ck, _v) { var currVal_0 = "404"; _ck(_v, 2, 0, currVal_0); }, null); }
function View_TagDetailsComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 5, "div", [["class", "page-navigation"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 4, "div", [["class", "container"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 1, "cn-breadcrumb", [], null, null, null, _concrete_breadcrumb_breadcrumb_component_ngfactory__WEBPACK_IMPORTED_MODULE_25__["View_CnBreadcrumbComponent_0"], _concrete_breadcrumb_breadcrumb_component_ngfactory__WEBPACK_IMPORTED_MODULE_25__["RenderType_CnBreadcrumbComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](3, 245760, null, 0, _concrete_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_26__["CnBreadcrumbComponent"], [_concrete_breadcrumb_breadcrumb_service__WEBPACK_IMPORTED_MODULE_27__["CnBreadcrumbService"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_TagDetailsComponent_1)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](5, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_TagDetailsComponent_2)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](7, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_TagDetailsComponent_5)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](9, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var _co = _v.component; _ck(_v, 3, 0); var currVal_0 = (_co.tag && !_co.tag.deleted_at); _ck(_v, 5, 0, currVal_0); var currVal_1 = _co.tag; _ck(_v, 7, 0, currVal_1); var currVal_2 = (_co.state === "empty"); _ck(_v, 9, 0, currVal_2); }, null); }
function View_TagDetailsComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "app-tag-details", [], null, null, null, View_TagDetailsComponent_0, RenderType_TagDetailsComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](131584, null, _core_services_manager_service__WEBPACK_IMPORTED_MODULE_17__["RequestManager"], _core_services_manager_service__WEBPACK_IMPORTED_MODULE_17__["RequestManager"], [_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 245760, null, 0, _tag_details_component__WEBPACK_IMPORTED_MODULE_28__["TagDetailsComponent"], [_core_services_manager_service__WEBPACK_IMPORTED_MODULE_17__["RequestManager"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"], _core_auth_session_service__WEBPACK_IMPORTED_MODULE_11__["SessionService"], _core_services_store_service__WEBPACK_IMPORTED_MODULE_29__["StoreService"]], null, null)], function (_ck, _v) { _ck(_v, 2, 0); }, null); }
var TagDetailsComponentNgFactory = /*@__PURE__*/ /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("app-tag-details", _tag_details_component__WEBPACK_IMPORTED_MODULE_28__["TagDetailsComponent"], View_TagDetailsComponent_Host_0, {}, {}, []);




/***/ }),

/***/ "./src/app/feature/tags/details/tag-details.component.scss.shim.ngstyle.js":
/*!*********************************************************************************!*\
  !*** ./src/app/feature/tags/details/tag-details.component.scss.shim.ngstyle.js ***!
  \*********************************************************************************/
/*! exports provided: styles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styles", function() { return styles; });
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */
/** PURE_IMPORTS_START  PURE_IMPORTS_END */
/** PURE_IMPORTS_START  PURE_IMPORTS_END */
var styles = [".tag-hash[_ngcontent-%COMP%] {\n  color: #999999; }\n\n.page-header[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%] {\n  margin-bottom: 1rem; }\n\n@media (min-width: 576px) {\n    .page-header[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%] {\n      margin-bottom: 2rem; } }\n\n.admin-block[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  font-size: .875rem;\n  font-weight: 600; }\n\n.admin-block[_ngcontent-%COMP%]     .fa {\n  color: #333333; }"];




/***/ }),

/***/ "./src/app/feature/tags/details/tag-details.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/feature/tags/details/tag-details.component.ts ***!
  \***************************************************************/
/*! exports provided: TagDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TagDetailsComponent", function() { return TagDetailsComponent; });
/* harmony import */ var app_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/core */ "./src/app/core/index.ts");
/* harmony import */ var app_feature_posts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/feature/posts */ "./src/app/feature/posts/index.ts");
/* harmony import */ var app_models__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/models */ "./src/app/models/index.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b)
            if (b.hasOwnProperty(p))
                d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();



var TagDetailsComponent = /** @class */ /*@__PURE__*/ (function (_super) {
    __extends(TagDetailsComponent, _super);
    function TagDetailsComponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /** Tag object */
        _this.tag = null;
        /** Post browser sections */
        _this.sections = app_feature_posts__WEBPACK_IMPORTED_MODULE_1__["SectionsBuilder"].forSynapse();
        return _this;
    }
    /**
     * Clear this component parameters.
     */
    TagDetailsComponent.prototype.clear = function () {
        _super.prototype.clear.call(this);
        this.tag = null;
    };
    /**
     * Fetch the home synapse and its side blocks.
     */
    TagDetailsComponent.prototype.fetchSynapse = function (slug) {
        this.fetchTag(slug);
    };
    /**
     * Fetch the given tag, along with its synapse and blocks if
     * they exist. If no synapse exists for the tag, a new dummy
     * synapse object is created.
     *
     * @param slug      Unique tag slug
     */
    TagDetailsComponent.prototype.fetchTag = function (slug) {
        var _this = this;
        var params = { slug: slug, limit: 1, with: ['synapse'] };
        this.states.next("pending" /* PENDING */);
        this.store.query('/api/tags', params)
            .subscribe(function (collection) {
            if (collection.length > 0) {
                _this.tag = collection[0];
                _this.states.next("ready" /* READY */);
                _this.synapse = _this.tag['synapse'] ?
                    _this.tag.synapse : _this.createSynapse(_this.tag);
                if (Array.isArray(_this.synapse.blocks)) {
                    _this.fetchBlocks(_this.synapse.blocks);
                }
            }
            else {
                _this.states.next("empty" /* EMPTY */);
            }
        }, function (errors) {
            _this.states.next("error" /* ERROR */);
        });
    };
    /**
     * Creates a synapse object for the given tag.
     *
     * @param tag       Tag object
     * @returns         Synapse object
     */
    TagDetailsComponent.prototype.createSynapse = function (tag) {
        var synapse = new app_models__WEBPACK_IMPORTED_MODULE_2__["Synapse"]();
        synapse.name = tag.name;
        synapse.slug = tag.slug;
        synapse.filters = { tag_id: tag.id };
        synapse.type = app_models__WEBPACK_IMPORTED_MODULE_2__["SynapseType"].TAGS;
        return synapse;
    };
    return TagDetailsComponent;
}(app_core__WEBPACK_IMPORTED_MODULE_0__["DetailsComponent"]));




/***/ }),

/***/ "./src/app/feature/tags/tags.component.ngfactory.js":
/*!**********************************************************!*\
  !*** ./src/app/feature/tags/tags.component.ngfactory.js ***!
  \**********************************************************/
/*! exports provided: RenderType_TagsComponent, View_TagsComponent_0, View_TagsComponent_Host_0, TagsComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_TagsComponent", function() { return RenderType_TagsComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_TagsComponent_0", function() { return View_TagsComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_TagsComponent_Host_0", function() { return View_TagsComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TagsComponentNgFactory", function() { return TagsComponentNgFactory; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _tags_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tags.component */ "./src/app/feature/tags/tags.component.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */
/** PURE_IMPORTS_START _angular_core,_angular_router,_tags.component PURE_IMPORTS_END */
/** PURE_IMPORTS_START _angular_core,_angular_router,_tags.component PURE_IMPORTS_END */



var styles_TagsComponent = [];
var RenderType_TagsComponent = /*@__PURE__*/ /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcrt"]({ encapsulation: 2, styles: styles_TagsComponent, data: {} });

function View_TagsComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 16777216, null, null, 1, "router-outlet", [], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 212992, null, 0, _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"], [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ChildrenOutletContexts"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"], [8, null], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
function View_TagsComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 1, "ng-component", [], null, null, null, View_TagsComponent_0, RenderType_TagsComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 49152, null, 0, _tags_component__WEBPACK_IMPORTED_MODULE_2__["TagsComponent"], [], null, null)], null, null); }
var TagsComponentNgFactory = /*@__PURE__*/ /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵccf"]("ng-component", _tags_component__WEBPACK_IMPORTED_MODULE_2__["TagsComponent"], View_TagsComponent_Host_0, {}, {}, []);




/***/ }),

/***/ "./src/app/feature/tags/tags.component.ts":
/*!************************************************!*\
  !*** ./src/app/feature/tags/tags.component.ts ***!
  \************************************************/
/*! exports provided: TagsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TagsComponent", function() { return TagsComponent; });
var TagsComponent = /** @class */ /*@__PURE__*/ (function () {
    function TagsComponent() {
    }
    return TagsComponent;
}());




/***/ }),

/***/ "./src/app/feature/tags/tags.module.ngfactory.js":
/*!*******************************************************!*\
  !*** ./src/app/feature/tags/tags.module.ngfactory.js ***!
  \*******************************************************/
/*! exports provided: TagsModuleNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TagsModuleNgFactory", function() { return TagsModuleNgFactory; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _tags_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tags.module */ "./src/app/feature/tags/tags.module.ts");
/* harmony import */ var _node_modules_angular_router_router_ngfactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/@angular/router/router.ngfactory */ "./node_modules/@angular/router/router.ngfactory.js");
/* harmony import */ var _concrete_dialog_dialog_component_ngfactory__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../concrete/dialog/dialog.component.ngfactory */ "./src/concrete/dialog/dialog.component.ngfactory.js");
/* harmony import */ var _concrete_toaster_toaster_component_ngfactory__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../concrete/toaster/toaster.component.ngfactory */ "./src/concrete/toaster/toaster.component.ngfactory.js");
/* harmony import */ var _tags_component_ngfactory__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./tags.component.ngfactory */ "./src/app/feature/tags/tags.component.ngfactory.js");
/* harmony import */ var _details_tag_details_component_ngfactory__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./details/tag-details.component.ngfactory */ "./src/app/feature/tags/details/tag-details.component.ngfactory.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _concrete_breadcrumb_breadcrumb_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../concrete/breadcrumb/breadcrumb.service */ "./src/concrete/breadcrumb/breadcrumb.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ng2_dragula_components_dragula_provider__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ng2-dragula/components/dragula.provider */ "./node_modules/ng2-dragula/components/dragula.provider.js");
/* harmony import */ var ng2_dragula_components_dragula_provider__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(ng2_dragula_components_dragula_provider__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _shared_social_social_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../shared/social/social.service */ "./src/app/shared/social/social.service.ts");
/* harmony import */ var _core_auth_auth_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../core/auth/auth.module */ "./src/app/core/auth/auth.module.ts");
/* harmony import */ var _shared_card_card_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../shared/card/card.module */ "./src/app/shared/card/card.module.ts");
/* harmony import */ var _shared_block_block_module__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../shared/block/block.module */ "./src/app/shared/block/block.module.ts");
/* harmony import */ var _concrete_breadcrumb_breadcrumb_module__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../concrete/breadcrumb/breadcrumb.module */ "./src/concrete/breadcrumb/breadcrumb.module.ts");
/* harmony import */ var _concrete_expandable_expandable_module__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../../concrete/expandable/expandable.module */ "./src/concrete/expandable/expandable.module.ts");
/* harmony import */ var _concrete_details_details_module__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../../concrete/details/details.module */ "./src/concrete/details/details.module.ts");
/* harmony import */ var _concrete_overlay_overlay_module__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../../concrete/overlay/overlay.module */ "./src/concrete/overlay/overlay.module.ts");
/* harmony import */ var _concrete_dialog_dialog_module__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../../concrete/dialog/dialog.module */ "./src/concrete/dialog/dialog.module.ts");
/* harmony import */ var _concrete_icon_icon_module__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../../../concrete/icon/icon.module */ "./src/concrete/icon/icon.module.ts");
/* harmony import */ var _concrete_menu_menu_module__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../../../concrete/menu/menu.module */ "./src/concrete/menu/menu.module.ts");
/* harmony import */ var _concrete_pagination_pagination_module__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../../../concrete/pagination/pagination.module */ "./src/concrete/pagination/pagination.module.ts");
/* harmony import */ var _concrete_picker_picker_module__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../../../concrete/picker/picker.module */ "./src/concrete/picker/picker.module.ts");
/* harmony import */ var _concrete_searchbox_searchbox_module__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../../../concrete/searchbox/searchbox.module */ "./src/concrete/searchbox/searchbox.module.ts");
/* harmony import */ var _concrete_sortable_sortable_module__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ../../../concrete/sortable/sortable.module */ "./src/concrete/sortable/sortable.module.ts");
/* harmony import */ var _concrete_spinner_spinner_module__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ../../../concrete/spinner/spinner.module */ "./src/concrete/spinner/spinner.module.ts");
/* harmony import */ var _concrete_tabs_tabs_module__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ../../../concrete/tabs/tabs.module */ "./src/concrete/tabs/tabs.module.ts");
/* harmony import */ var _concrete_toaster_toaster_module__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ../../../concrete/toaster/toaster.module */ "./src/concrete/toaster/toaster.module.ts");
/* harmony import */ var _concrete_concrete_module__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ../../../concrete/concrete.module */ "./src/concrete/concrete.module.ts");
/* harmony import */ var _shared_blockpicker_blockpicker_module__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ../../shared/blockpicker/blockpicker.module */ "./src/app/shared/blockpicker/blockpicker.module.ts");
/* harmony import */ var _shared_colorpicker_colorpicker_module__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ../../shared/colorpicker/colorpicker.module */ "./src/app/shared/colorpicker/colorpicker.module.ts");
/* harmony import */ var _shared_datepicker_datepicker_module__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ../../shared/datepicker/datepicker.module */ "./src/app/shared/datepicker/datepicker.module.ts");
/* harmony import */ var _shared_errors_errors_module__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ../../shared/errors/errors.module */ "./src/app/shared/errors/errors.module.ts");
/* harmony import */ var _shared_feedback_feedback_module__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ../../shared/feedback/feedback.module */ "./src/app/shared/feedback/feedback.module.ts");
/* harmony import */ var _tinymce_tinymce_angular__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! @tinymce/tinymce-angular */ "./node_modules/@tinymce/tinymce-angular/fesm5/tinymce-tinymce-angular.js");
/* harmony import */ var _shared_htmleditor_htmleditor_module__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ../../shared/htmleditor/htmleditor.module */ "./src/app/shared/htmleditor/htmleditor.module.ts");
/* harmony import */ var ng2_dragula_components_dragular_module__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ng2-dragula/components/dragular.module */ "./node_modules/ng2-dragula/components/dragular.module.js");
/* harmony import */ var ng2_dragula_components_dragular_module__WEBPACK_IMPORTED_MODULE_38___default = /*#__PURE__*/__webpack_require__.n(ng2_dragula_components_dragular_module__WEBPACK_IMPORTED_MODULE_38__);
/* harmony import */ var _shared_sidebar_sidebar_module__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ../../shared/sidebar/sidebar.module */ "./src/app/shared/sidebar/sidebar.module.ts");
/* harmony import */ var _shared_typeahead_typeahead_module__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ../../shared/typeahead/typeahead.module */ "./src/app/shared/typeahead/typeahead.module.ts");
/* harmony import */ var _shared_search_search_module__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ../../shared/search/search.module */ "./src/app/shared/search/search.module.ts");
/* harmony import */ var _shared_share_share_form_module__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ../../shared/share/share-form.module */ "./src/app/shared/share/share-form.module.ts");
/* harmony import */ var _shared_social_social_module__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ../../shared/social/social.module */ "./src/app/shared/social/social.module.ts");
/* harmony import */ var _shared_sourceeditor_sourceeditor_module__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ../../shared/sourceeditor/sourceeditor.module */ "./src/app/shared/sourceeditor/sourceeditor.module.ts");
/* harmony import */ var _shared_state_state_module__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! ../../shared/state/state.module */ "./src/app/shared/state/state.module.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! ../../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _comments_comments_module__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! ../comments/comments.module */ "./src/app/feature/comments/comments.module.ts");
/* harmony import */ var _posts_posts_module__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! ../posts/posts.module */ "./src/app/feature/posts/posts.module.ts");
/* harmony import */ var _tags_routes__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! ./tags.routes */ "./src/app/feature/tags/tags.routes.ts");
/* harmony import */ var _tags_component__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! ./tags.component */ "./src/app/feature/tags/tags.component.ts");
/* harmony import */ var _details_tag_details_component__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(/*! ./details/tag-details.component */ "./src/app/feature/tags/details/tag-details.component.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */
/** PURE_IMPORTS_START _angular_core,_tags.module,_.._.._.._node_modules__angular_router_router.ngfactory,_.._.._concrete_dialog_dialog.component.ngfactory,_.._.._concrete_toaster_toaster.component.ngfactory,_tags.component.ngfactory,_details_tag_details.component.ngfactory,_angular_common,_.._.._concrete_breadcrumb_breadcrumb.service,_angular_router,_angular_forms,ng2_dragula_components_dragula.provider,_.._shared_social_social.service,_.._core_auth_auth.module,_.._shared_card_card.module,_.._shared_block_block.module,_.._.._concrete_breadcrumb_breadcrumb.module,_.._.._concrete_expandable_expandable.module,_.._.._concrete_details_details.module,_.._.._concrete_overlay_overlay.module,_.._.._concrete_dialog_dialog.module,_.._.._concrete_icon_icon.module,_.._.._concrete_menu_menu.module,_.._.._concrete_pagination_pagination.module,_.._.._concrete_picker_picker.module,_.._.._concrete_searchbox_searchbox.module,_.._.._concrete_sortable_sortable.module,_.._.._concrete_spinner_spinner.module,_.._.._concrete_tabs_tabs.module,_.._.._concrete_toaster_toaster.module,_.._.._concrete_concrete.module,_.._shared_blockpicker_blockpicker.module,_.._shared_colorpicker_colorpicker.module,_.._shared_datepicker_datepicker.module,_.._shared_errors_errors.module,_.._shared_feedback_feedback.module,_tinymce_tinymce_angular,_.._shared_htmleditor_htmleditor.module,ng2_dragula_components_dragular.module,_.._shared_sidebar_sidebar.module,_.._shared_typeahead_typeahead.module,_.._shared_search_search.module,_.._shared_share_share_form.module,_.._shared_social_social.module,_.._shared_sourceeditor_sourceeditor.module,_.._shared_state_state.module,_.._shared_shared.module,_comments_comments.module,_posts_posts.module,_tags.routes,_tags.component,_details_tag_details.component PURE_IMPORTS_END */
/** PURE_IMPORTS_START _angular_core,_tags.module,_.._.._.._node_modules__angular_router_router.ngfactory,_.._.._concrete_dialog_dialog.component.ngfactory,_.._.._concrete_toaster_toaster.component.ngfactory,_tags.component.ngfactory,_details_tag_details.component.ngfactory,_angular_common,_.._.._concrete_breadcrumb_breadcrumb.service,_angular_router,_angular_forms,ng2_dragula_components_dragula.provider,_.._shared_social_social.service,_.._core_auth_auth.module,_.._shared_card_card.module,_.._shared_block_block.module,_.._.._concrete_breadcrumb_breadcrumb.module,_.._.._concrete_expandable_expandable.module,_.._.._concrete_details_details.module,_.._.._concrete_overlay_overlay.module,_.._.._concrete_dialog_dialog.module,_.._.._concrete_icon_icon.module,_.._.._concrete_menu_menu.module,_.._.._concrete_pagination_pagination.module,_.._.._concrete_picker_picker.module,_.._.._concrete_searchbox_searchbox.module,_.._.._concrete_sortable_sortable.module,_.._.._concrete_spinner_spinner.module,_.._.._concrete_tabs_tabs.module,_.._.._concrete_toaster_toaster.module,_.._.._concrete_concrete.module,_.._shared_blockpicker_blockpicker.module,_.._shared_colorpicker_colorpicker.module,_.._shared_datepicker_datepicker.module,_.._shared_errors_errors.module,_.._shared_feedback_feedback.module,_tinymce_tinymce_angular,_.._shared_htmleditor_htmleditor.module,ng2_dragula_components_dragular.module,_.._shared_sidebar_sidebar.module,_.._shared_typeahead_typeahead.module,_.._shared_search_search.module,_.._shared_share_share_form.module,_.._shared_social_social.module,_.._shared_sourceeditor_sourceeditor.module,_.._shared_state_state.module,_.._shared_shared.module,_comments_comments.module,_posts_posts.module,_tags.routes,_tags.component,_details_tag_details.component PURE_IMPORTS_END */




















































var TagsModuleNgFactory = /*@__PURE__*/ /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcmf"](_tags_module__WEBPACK_IMPORTED_MODULE_1__["TagsModule"], [], function (_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmod"]([_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵCodegenComponentFactoryResolver"], [[8, [_node_modules_angular_router_router_ngfactory__WEBPACK_IMPORTED_MODULE_2__["ɵEmptyOutletComponentNgFactory"], _concrete_dialog_dialog_component_ngfactory__WEBPACK_IMPORTED_MODULE_3__["CnDialogComponentNgFactory"], _concrete_toaster_toaster_component_ngfactory__WEBPACK_IMPORTED_MODULE_4__["CnToasterComponentNgFactory"], _tags_component_ngfactory__WEBPACK_IMPORTED_MODULE_5__["TagsComponentNgFactory"], _details_tag_details_component_ngfactory__WEBPACK_IMPORTED_MODULE_6__["TagDetailsComponentNgFactory"]]], [3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"]], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModuleRef"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgLocalization"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgLocaleLocalization"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["LOCALE_ID"], [2, _angular_common__WEBPACK_IMPORTED_MODULE_7__["ɵangular_packages_common_common_a"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](135680, _concrete_breadcrumb_breadcrumb_service__WEBPACK_IMPORTED_MODULE_8__["CnBreadcrumbService"], _concrete_breadcrumb_breadcrumb_service__WEBPACK_IMPORTED_MODULE_8__["CnBreadcrumbService"], [_angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_9__["ActivatedRoute"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ɵangular_packages_forms_forms_i"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ɵangular_packages_forms_forms_i"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormBuilder"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormBuilder"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, ng2_dragula_components_dragula_provider__WEBPACK_IMPORTED_MODULE_11__["DragulaService"], ng2_dragula_components_dragula_provider__WEBPACK_IMPORTED_MODULE_11__["DragulaService"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _shared_social_social_service__WEBPACK_IMPORTED_MODULE_12__["SocialService"], _shared_social_social_service__WEBPACK_IMPORTED_MODULE_12__["SocialService"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _core_auth_auth_module__WEBPACK_IMPORTED_MODULE_13__["AuthModule"], _core_auth_auth_module__WEBPACK_IMPORTED_MODULE_13__["AuthModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_common__WEBPACK_IMPORTED_MODULE_7__["CommonModule"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["CommonModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _shared_card_card_module__WEBPACK_IMPORTED_MODULE_14__["CardModule"], _shared_card_card_module__WEBPACK_IMPORTED_MODULE_14__["CardModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _shared_block_block_module__WEBPACK_IMPORTED_MODULE_15__["BlockModule"], _shared_block_block_module__WEBPACK_IMPORTED_MODULE_15__["BlockModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_router__WEBPACK_IMPORTED_MODULE_9__["RouterModule"], _angular_router__WEBPACK_IMPORTED_MODULE_9__["RouterModule"], [[2, _angular_router__WEBPACK_IMPORTED_MODULE_9__["ɵangular_packages_router_router_a"]], [2, _angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _concrete_breadcrumb_breadcrumb_module__WEBPACK_IMPORTED_MODULE_16__["CnBreadcrumbModule"], _concrete_breadcrumb_breadcrumb_module__WEBPACK_IMPORTED_MODULE_16__["CnBreadcrumbModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _concrete_expandable_expandable_module__WEBPACK_IMPORTED_MODULE_17__["CnExpandableModule"], _concrete_expandable_expandable_module__WEBPACK_IMPORTED_MODULE_17__["CnExpandableModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _concrete_details_details_module__WEBPACK_IMPORTED_MODULE_18__["CnDetailsModule"], _concrete_details_details_module__WEBPACK_IMPORTED_MODULE_18__["CnDetailsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _concrete_overlay_overlay_module__WEBPACK_IMPORTED_MODULE_19__["CnOverlayModule"], _concrete_overlay_overlay_module__WEBPACK_IMPORTED_MODULE_19__["CnOverlayModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _concrete_dialog_dialog_module__WEBPACK_IMPORTED_MODULE_20__["CnDialogModule"], _concrete_dialog_dialog_module__WEBPACK_IMPORTED_MODULE_20__["CnDialogModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _concrete_icon_icon_module__WEBPACK_IMPORTED_MODULE_21__["CnIconModule"], _concrete_icon_icon_module__WEBPACK_IMPORTED_MODULE_21__["CnIconModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _concrete_menu_menu_module__WEBPACK_IMPORTED_MODULE_22__["CnMenuModule"], _concrete_menu_menu_module__WEBPACK_IMPORTED_MODULE_22__["CnMenuModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _concrete_pagination_pagination_module__WEBPACK_IMPORTED_MODULE_23__["CnPaginationModule"], _concrete_pagination_pagination_module__WEBPACK_IMPORTED_MODULE_23__["CnPaginationModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _concrete_picker_picker_module__WEBPACK_IMPORTED_MODULE_24__["CnPickerModule"], _concrete_picker_picker_module__WEBPACK_IMPORTED_MODULE_24__["CnPickerModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _concrete_searchbox_searchbox_module__WEBPACK_IMPORTED_MODULE_25__["CnSearchboxModule"], _concrete_searchbox_searchbox_module__WEBPACK_IMPORTED_MODULE_25__["CnSearchboxModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _concrete_sortable_sortable_module__WEBPACK_IMPORTED_MODULE_26__["CnSortableModule"], _concrete_sortable_sortable_module__WEBPACK_IMPORTED_MODULE_26__["CnSortableModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _concrete_spinner_spinner_module__WEBPACK_IMPORTED_MODULE_27__["CnSpinnerModule"], _concrete_spinner_spinner_module__WEBPACK_IMPORTED_MODULE_27__["CnSpinnerModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _concrete_tabs_tabs_module__WEBPACK_IMPORTED_MODULE_28__["CnTabsModule"], _concrete_tabs_tabs_module__WEBPACK_IMPORTED_MODULE_28__["CnTabsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _concrete_toaster_toaster_module__WEBPACK_IMPORTED_MODULE_29__["CnToasterModule"], _concrete_toaster_toaster_module__WEBPACK_IMPORTED_MODULE_29__["CnToasterModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _concrete_concrete_module__WEBPACK_IMPORTED_MODULE_30__["ConcreteModule"], _concrete_concrete_module__WEBPACK_IMPORTED_MODULE_30__["ConcreteModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ɵangular_packages_forms_forms_bb"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ɵangular_packages_forms_forms_bb"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _shared_blockpicker_blockpicker_module__WEBPACK_IMPORTED_MODULE_31__["BlockpickerModule"], _shared_blockpicker_blockpicker_module__WEBPACK_IMPORTED_MODULE_31__["BlockpickerModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _shared_colorpicker_colorpicker_module__WEBPACK_IMPORTED_MODULE_32__["ColorpickerModule"], _shared_colorpicker_colorpicker_module__WEBPACK_IMPORTED_MODULE_32__["ColorpickerModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _shared_datepicker_datepicker_module__WEBPACK_IMPORTED_MODULE_33__["DatepickerModule"], _shared_datepicker_datepicker_module__WEBPACK_IMPORTED_MODULE_33__["DatepickerModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _shared_errors_errors_module__WEBPACK_IMPORTED_MODULE_34__["ErrorsModule"], _shared_errors_errors_module__WEBPACK_IMPORTED_MODULE_34__["ErrorsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _shared_feedback_feedback_module__WEBPACK_IMPORTED_MODULE_35__["FeedbackModule"], _shared_feedback_feedback_module__WEBPACK_IMPORTED_MODULE_35__["FeedbackModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _tinymce_tinymce_angular__WEBPACK_IMPORTED_MODULE_36__["EditorModule"], _tinymce_tinymce_angular__WEBPACK_IMPORTED_MODULE_36__["EditorModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _shared_htmleditor_htmleditor_module__WEBPACK_IMPORTED_MODULE_37__["HTMLEditorModule"], _shared_htmleditor_htmleditor_module__WEBPACK_IMPORTED_MODULE_37__["HTMLEditorModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ReactiveFormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ReactiveFormsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, ng2_dragula_components_dragular_module__WEBPACK_IMPORTED_MODULE_38__["DragulaModule"], ng2_dragula_components_dragular_module__WEBPACK_IMPORTED_MODULE_38__["DragulaModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _shared_sidebar_sidebar_module__WEBPACK_IMPORTED_MODULE_39__["SidebarModule"], _shared_sidebar_sidebar_module__WEBPACK_IMPORTED_MODULE_39__["SidebarModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _shared_typeahead_typeahead_module__WEBPACK_IMPORTED_MODULE_40__["TypeaheadModule"], _shared_typeahead_typeahead_module__WEBPACK_IMPORTED_MODULE_40__["TypeaheadModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _shared_search_search_module__WEBPACK_IMPORTED_MODULE_41__["SearchModule"], _shared_search_search_module__WEBPACK_IMPORTED_MODULE_41__["SearchModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _shared_share_share_form_module__WEBPACK_IMPORTED_MODULE_42__["ShareFormModule"], _shared_share_share_form_module__WEBPACK_IMPORTED_MODULE_42__["ShareFormModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _shared_social_social_module__WEBPACK_IMPORTED_MODULE_43__["SocialModule"], _shared_social_social_module__WEBPACK_IMPORTED_MODULE_43__["SocialModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _shared_sourceeditor_sourceeditor_module__WEBPACK_IMPORTED_MODULE_44__["SourceEditorModule"], _shared_sourceeditor_sourceeditor_module__WEBPACK_IMPORTED_MODULE_44__["SourceEditorModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _shared_state_state_module__WEBPACK_IMPORTED_MODULE_45__["StateModule"], _shared_state_state_module__WEBPACK_IMPORTED_MODULE_45__["StateModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _shared_shared_module__WEBPACK_IMPORTED_MODULE_46__["SharedModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_46__["SharedModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _comments_comments_module__WEBPACK_IMPORTED_MODULE_47__["CommentsModule"], _comments_comments_module__WEBPACK_IMPORTED_MODULE_47__["CommentsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _posts_posts_module__WEBPACK_IMPORTED_MODULE_48__["PostsModule"], _posts_posts_module__WEBPACK_IMPORTED_MODULE_48__["PostsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _tags_routes__WEBPACK_IMPORTED_MODULE_49__["TagsRoutes"], _tags_routes__WEBPACK_IMPORTED_MODULE_49__["TagsRoutes"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _tags_module__WEBPACK_IMPORTED_MODULE_1__["TagsModule"], _tags_module__WEBPACK_IMPORTED_MODULE_1__["TagsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, _angular_core__WEBPACK_IMPORTED_MODULE_0__["LOCALE_ID"], "es", []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _angular_router__WEBPACK_IMPORTED_MODULE_9__["ROUTES"], function () { return [[{ path: "", component: _tags_component__WEBPACK_IMPORTED_MODULE_50__["TagsComponent"], children: [{ path: ":slug", component: _details_tag_details_component__WEBPACK_IMPORTED_MODULE_51__["TagDetailsComponent"] }, { path: "", redirectTo: "/catalogs/tags" }] }]]; }, []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, _angular_core__WEBPACK_IMPORTED_MODULE_0__["TRANSLATIONS_FORMAT"], "xlf", [])]); });




/***/ }),

/***/ "./src/app/feature/tags/tags.module.ts":
/*!*********************************************!*\
  !*** ./src/app/feature/tags/tags.module.ts ***!
  \*********************************************/
/*! exports provided: TagsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TagsModule", function() { return TagsModule; });
var TagsModule = /** @class */ /*@__PURE__*/ (function () {
    function TagsModule() {
    }
    return TagsModule;
}());




/***/ }),

/***/ "./src/app/feature/tags/tags.routes.ts":
/*!*********************************************!*\
  !*** ./src/app/feature/tags/tags.routes.ts ***!
  \*********************************************/
/*! exports provided: ROUTING_COMPONENTS, ROUTES, TagsRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ROUTING_COMPONENTS", function() { return ROUTING_COMPONENTS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ROUTES", function() { return ROUTES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TagsRoutes", function() { return TagsRoutes; });
/* harmony import */ var _details__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./details */ "./src/app/feature/tags/details/index.ts");
/* harmony import */ var _tags_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tags.component */ "./src/app/feature/tags/tags.component.ts");


/**
 * Routing components
 */
var ROUTING_COMPONENTS = [
    _tags_component__WEBPACK_IMPORTED_MODULE_1__["TagsComponent"],
    _details__WEBPACK_IMPORTED_MODULE_0__["TagDetailsComponent"]
];
/**
 * Module routes
 */
var ROUTES = [{
        path: '',
        component: _tags_component__WEBPACK_IMPORTED_MODULE_1__["TagsComponent"],
        children: [{
                path: ':slug',
                component: _details__WEBPACK_IMPORTED_MODULE_0__["TagDetailsComponent"]
            }, {
                path: '',
                redirectTo: '/catalogs/tags'
            }]
    }];
/**
 * Routing module
 */
var TagsRoutes = /** @class */ /*@__PURE__*/ (function () {
    function TagsRoutes() {
    }
    return TagsRoutes;
}());




/***/ })

}]);
//# sourceMappingURL=app-feature-tags-tags-module-ngfactory.js.map