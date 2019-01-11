(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app-feature-catalogs-catalogs-module-ngfactory"],{

/***/ "./src/app/feature/catalogs/catalog-browser.component.ngfactory.js":
/*!*************************************************************************!*\
  !*** ./src/app/feature/catalogs/catalog-browser.component.ngfactory.js ***!
  \*************************************************************************/
/*! exports provided: RenderType_CatalogBrowserComponent, View_CatalogBrowserComponent_0, View_CatalogBrowserComponent_Host_0, CatalogBrowserComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_CatalogBrowserComponent", function() { return RenderType_CatalogBrowserComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_CatalogBrowserComponent_0", function() { return View_CatalogBrowserComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_CatalogBrowserComponent_Host_0", function() { return View_CatalogBrowserComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CatalogBrowserComponentNgFactory", function() { return CatalogBrowserComponentNgFactory; });
/* harmony import */ var _catalog_browser_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./catalog-browser.component.scss.shim.ngstyle */ "./src/app/feature/catalogs/catalog-browser.component.scss.shim.ngstyle.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _concrete_icon_icon_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../concrete/icon/icon.component.ngfactory */ "./src/concrete/icon/icon.component.ngfactory.js");
/* harmony import */ var _concrete_icon_icon_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../concrete/icon/icon.component */ "./src/concrete/icon/icon.component.ts");
/* harmony import */ var _concrete_breadcrumb_breadcrumb_component_ngfactory__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../concrete/breadcrumb/breadcrumb.component.ngfactory */ "./src/concrete/breadcrumb/breadcrumb.component.ngfactory.js");
/* harmony import */ var _concrete_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../concrete/breadcrumb/breadcrumb.component */ "./src/concrete/breadcrumb/breadcrumb.component.ts");
/* harmony import */ var _concrete_breadcrumb_breadcrumb_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../concrete/breadcrumb/breadcrumb.service */ "./src/concrete/breadcrumb/breadcrumb.service.ts");
/* harmony import */ var _shared_card_card_component_ngfactory__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../shared/card/card.component.ngfactory */ "./src/app/shared/card/card.component.ngfactory.js");
/* harmony import */ var _shared_card_card_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../shared/card/card.component */ "./src/app/shared/card/card.component.ts");
/* harmony import */ var _core_auth_ifcan_directive__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../core/auth/ifcan.directive */ "./src/app/core/auth/ifcan.directive.ts");
/* harmony import */ var _core_auth_policies_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../core/auth/policies.service */ "./src/app/core/auth/policies.service.ts");
/* harmony import */ var _core_auth_session_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../core/auth/session.service */ "./src/app/core/auth/session.service.ts");
/* harmony import */ var _concrete_searchbox_searchbox_component_ngfactory__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../concrete/searchbox/searchbox.component.ngfactory */ "./src/concrete/searchbox/searchbox.component.ngfactory.js");
/* harmony import */ var _concrete_searchbox_searchbox_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../concrete/searchbox/searchbox.component */ "./src/concrete/searchbox/searchbox.component.ts");
/* harmony import */ var _concrete_tabs_tabs_component_ngfactory__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../concrete/tabs/tabs.component.ngfactory */ "./src/concrete/tabs/tabs.component.ngfactory.js");
/* harmony import */ var _concrete_tabs_tabs_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../concrete/tabs/tabs.component */ "./src/concrete/tabs/tabs.component.ts");
/* harmony import */ var _concrete_tabs_tabitem_component_ngfactory__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../concrete/tabs/tabitem.component.ngfactory */ "./src/concrete/tabs/tabitem.component.ngfactory.js");
/* harmony import */ var _concrete_tabs_tabitem_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../../concrete/tabs/tabitem.component */ "./src/concrete/tabs/tabitem.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _catalog_browser_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./catalog-browser.component */ "./src/app/feature/catalogs/catalog-browser.component.ts");
/* harmony import */ var _concrete_dialog_dialog_service__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../../concrete/dialog/dialog.service */ "./src/concrete/dialog/dialog.service.ts");
/* harmony import */ var _core_services_store_service__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../../core/services/store.service */ "./src/app/core/services/store.service.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */
/** PURE_IMPORTS_START _catalog_browser.component.scss.shim.ngstyle,_angular_core,_.._.._concrete_icon_icon.component.ngfactory,_.._.._concrete_icon_icon.component,_.._.._concrete_breadcrumb_breadcrumb.component.ngfactory,_.._.._concrete_breadcrumb_breadcrumb.component,_.._.._concrete_breadcrumb_breadcrumb.service,_.._shared_card_card.component.ngfactory,_.._shared_card_card.component,_.._core_auth_ifcan.directive,_.._core_auth_policies.service,_.._core_auth_session.service,_.._.._concrete_searchbox_searchbox.component.ngfactory,_.._.._concrete_searchbox_searchbox.component,_.._.._concrete_tabs_tabs.component.ngfactory,_.._.._concrete_tabs_tabs.component,_.._.._concrete_tabs_tabitem.component.ngfactory,_.._.._concrete_tabs_tabitem.component,_angular_router,_catalog_browser.component,_.._.._concrete_dialog_dialog.service,_.._core_services_store.service PURE_IMPORTS_END */
/** PURE_IMPORTS_START _catalog_browser.component.scss.shim.ngstyle,_angular_core,_.._.._concrete_icon_icon.component.ngfactory,_.._.._concrete_icon_icon.component,_.._.._concrete_breadcrumb_breadcrumb.component.ngfactory,_.._.._concrete_breadcrumb_breadcrumb.component,_.._.._concrete_breadcrumb_breadcrumb.service,_.._shared_card_card.component.ngfactory,_.._shared_card_card.component,_.._core_auth_ifcan.directive,_.._core_auth_policies.service,_.._core_auth_session.service,_.._.._concrete_searchbox_searchbox.component.ngfactory,_.._.._concrete_searchbox_searchbox.component,_.._.._concrete_tabs_tabs.component.ngfactory,_.._.._concrete_tabs_tabs.component,_.._.._concrete_tabs_tabitem.component.ngfactory,_.._.._concrete_tabs_tabitem.component,_angular_router,_catalog_browser.component,_.._.._concrete_dialog_dialog.service,_.._core_services_store.service PURE_IMPORTS_END */






















var styles_CatalogBrowserComponent = [_catalog_browser_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];
var RenderType_CatalogBrowserComponent = /*@__PURE__*/ /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({ encapsulation: 0, styles: styles_CatalogBrowserComponent, data: {} });

function View_CatalogBrowserComponent_1(_l) {
    return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 4, "button", [["class", "btn btn-secondary"], ["title", "Create a new synapse"]], null, [[null, "click"]], function (_v, en, $event) {
            var ad = true;
            var _co = _v.component;
            if (("click" === en)) {
                var pd_0 = (_co.create() !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 1, "cn-icon", [["value", "plus"]], null, null, null, _concrete_icon_icon_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_CnIconComponent_0"], _concrete_icon_icon_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_CnIconComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 49152, null, 0, _concrete_icon_icon_component__WEBPACK_IMPORTED_MODULE_3__["CnIconComponent"], [], { value: [0, "value"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 1, "span", [["class", "sh d-none d-sm-inline-block"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["New synapse"]))], function (_ck, _v) { var currVal_0 = "plus"; _ck(_v, 2, 0, currVal_0); }, null);
}
function View_CatalogBrowserComponent_0(_l) {
    return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 3, "div", [["class", "page-navigation"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 2, "div", [["class", "container"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 1, "cn-breadcrumb", [], null, null, null, _concrete_breadcrumb_breadcrumb_component_ngfactory__WEBPACK_IMPORTED_MODULE_4__["View_CnBreadcrumbComponent_0"], _concrete_breadcrumb_breadcrumb_component_ngfactory__WEBPACK_IMPORTED_MODULE_4__["RenderType_CnBreadcrumbComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](3, 245760, null, 0, _concrete_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_5__["CnBreadcrumbComponent"], [_concrete_breadcrumb_breadcrumb_service__WEBPACK_IMPORTED_MODULE_6__["CnBreadcrumbService"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, null, 34, "article", [["class", "page-content"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](5, 0, null, null, 4, "div", [["class", "page-header"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](6, 0, null, null, 3, "div", [["class", "container"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](7, 0, null, null, 2, "header", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](8, 0, null, null, 1, "h1", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Synapses"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](10, 0, null, null, 28, "section", [["class", "page-section"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](11, 0, null, null, 27, "div", [["class", "page-body container"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](12, 0, null, null, 26, "app-card", [], null, null, null, _shared_card_card_component_ngfactory__WEBPACK_IMPORTED_MODULE_7__["View_CardComponent_0"], _shared_card_card_component_ngfactory__WEBPACK_IMPORTED_MODULE_7__["RenderType_CardComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](13, 49152, null, 0, _shared_card_card_component__WEBPACK_IMPORTED_MODULE_8__["CardComponent"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](14, 0, null, 0, 6, "div", [["class", "page-form form-group hidden-print"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](15, 0, null, null, 3, "div", [["class", "page-buttons"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 2, null, View_CatalogBrowserComponent_1)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](17, 737280, null, 0, _core_auth_ifcan_directive__WEBPACK_IMPORTED_MODULE_9__["IfCanDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _core_auth_policies_service__WEBPACK_IMPORTED_MODULE_10__["PoliciesService"], _core_auth_session_service__WEBPACK_IMPORTED_MODULE_11__["SessionService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { gate: [0, "gate"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpad"](18, 1), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](19, 0, null, null, 1, "cn-searchbox", [["icon", "search"], ["placeholder", "Search by keyword"]], null, [[null, "search"]], function (_v, en, $event) {
            var ad = true;
            var _co = _v.component;
            if (("search" === en)) {
                var pd_0 = (_co.search($event.value) !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, _concrete_searchbox_searchbox_component_ngfactory__WEBPACK_IMPORTED_MODULE_12__["View_CnSearchboxComponent_0"], _concrete_searchbox_searchbox_component_ngfactory__WEBPACK_IMPORTED_MODULE_12__["RenderType_CnSearchboxComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](20, 770048, null, 0, _concrete_searchbox_searchbox_component__WEBPACK_IMPORTED_MODULE_13__["CnSearchboxComponent"], [], { searchValue: [0, "searchValue"], placeholder: [1, "placeholder"], icon: [2, "icon"] }, { searchEvent: "search" }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](21, 0, null, 0, 14, "div", [["class", "catalog-browser-tabs"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](22, 0, null, null, 13, "cn-tabs", [], null, [[null, "valueChange"]], function (_v, en, $event) {
            var ad = true;
            var _co = _v.component;
            if (("valueChange" === en)) {
                var pd_0 = (_co.pick($event) !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, _concrete_tabs_tabs_component_ngfactory__WEBPACK_IMPORTED_MODULE_14__["View_CnTabsComponent_0"], _concrete_tabs_tabs_component_ngfactory__WEBPACK_IMPORTED_MODULE_14__["RenderType_CnTabsComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](23, 49152, null, 0, _concrete_tabs_tabs_component__WEBPACK_IMPORTED_MODULE_15__["CnTabsComponent"], [], { value: [0, "value"] }, { valueChange: "valueChange" }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](24, 0, null, 0, 3, "cn-tabitem", [["value", "taxonomies"]], null, null, null, _concrete_tabs_tabitem_component_ngfactory__WEBPACK_IMPORTED_MODULE_16__["View_CnTabItemComponent_0"], _concrete_tabs_tabitem_component_ngfactory__WEBPACK_IMPORTED_MODULE_16__["RenderType_CnTabItemComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](25, 49152, null, 0, _concrete_tabs_tabitem_component__WEBPACK_IMPORTED_MODULE_17__["CnTabItemComponent"], [_concrete_tabs_tabs_component__WEBPACK_IMPORTED_MODULE_15__["CnTabsComponent"]], { value: [0, "value"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](26, 0, null, 0, 1, "span", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Taxonomies"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](28, 0, null, 0, 3, "cn-tabitem", [["value", "synapses"]], null, null, null, _concrete_tabs_tabitem_component_ngfactory__WEBPACK_IMPORTED_MODULE_16__["View_CnTabItemComponent_0"], _concrete_tabs_tabitem_component_ngfactory__WEBPACK_IMPORTED_MODULE_16__["RenderType_CnTabItemComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](29, 49152, null, 0, _concrete_tabs_tabitem_component__WEBPACK_IMPORTED_MODULE_17__["CnTabItemComponent"], [_concrete_tabs_tabs_component__WEBPACK_IMPORTED_MODULE_15__["CnTabsComponent"]], { value: [0, "value"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](30, 0, null, 0, 1, "span", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Synapses"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](32, 0, null, 0, 3, "cn-tabitem", [["value", "tags"]], null, null, null, _concrete_tabs_tabitem_component_ngfactory__WEBPACK_IMPORTED_MODULE_16__["View_CnTabItemComponent_0"], _concrete_tabs_tabitem_component_ngfactory__WEBPACK_IMPORTED_MODULE_16__["RenderType_CnTabItemComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](33, 49152, null, 0, _concrete_tabs_tabitem_component__WEBPACK_IMPORTED_MODULE_17__["CnTabItemComponent"], [_concrete_tabs_tabs_component__WEBPACK_IMPORTED_MODULE_15__["CnTabsComponent"]], { value: [0, "value"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](34, 0, null, 0, 1, "span", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Tags"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](36, 0, null, 0, 2, "div", [["class", "tabs-outlet"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](37, 16777216, null, null, 1, "router-outlet", [], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](38, 212992, null, 0, _angular_router__WEBPACK_IMPORTED_MODULE_18__["RouterOutlet"], [_angular_router__WEBPACK_IMPORTED_MODULE_18__["ChildrenOutletContexts"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"], [8, null], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]], null, null)], function (_ck, _v) { var _co = _v.component; _ck(_v, 3, 0); var currVal_0 = _ck(_v, 18, 0, "manage-synapses"); _ck(_v, 17, 0, currVal_0); var currVal_1 = _co.keywords; var currVal_2 = "Search by keyword"; var currVal_3 = "search"; _ck(_v, 20, 0, currVal_1, currVal_2, currVal_3); var currVal_4 = _co.childPath; _ck(_v, 23, 0, currVal_4); var currVal_5 = "taxonomies"; _ck(_v, 25, 0, currVal_5); var currVal_6 = "synapses"; _ck(_v, 29, 0, currVal_6); var currVal_7 = "tags"; _ck(_v, 33, 0, currVal_7); _ck(_v, 38, 0); }, null);
}
function View_CatalogBrowserComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "ng-component", [], null, null, null, View_CatalogBrowserComponent_0, RenderType_CatalogBrowserComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 49152, null, 0, _catalog_browser_component__WEBPACK_IMPORTED_MODULE_19__["CatalogBrowserComponent"], [_angular_router__WEBPACK_IMPORTED_MODULE_18__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_18__["ActivatedRoute"], _concrete_dialog_dialog_service__WEBPACK_IMPORTED_MODULE_20__["CnDialog"], _core_services_store_service__WEBPACK_IMPORTED_MODULE_21__["StoreService"]], null, null)], null, null); }
var CatalogBrowserComponentNgFactory = /*@__PURE__*/ /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("ng-component", _catalog_browser_component__WEBPACK_IMPORTED_MODULE_19__["CatalogBrowserComponent"], View_CatalogBrowserComponent_Host_0, {}, {}, []);




/***/ }),

/***/ "./src/app/feature/catalogs/catalog-browser.component.scss.shim.ngstyle.js":
/*!*********************************************************************************!*\
  !*** ./src/app/feature/catalogs/catalog-browser.component.scss.shim.ngstyle.js ***!
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
var styles = [".tabs-outlet[_ngcontent-%COMP%] {\n  border: 1px solid #dddddd;\n  border-top: 0;\n  padding: 0 1rem;\n  min-height: 30rem; }\n  @media (min-width: 992px) {\n    .tabs-outlet[_ngcontent-%COMP%] {\n      padding: 0 2rem; } }\n  @media (max-width: 991.98px) {\n  .catalog-browser-tabs[_ngcontent-%COMP%]     .nav-link {\n    font-size: 95%; } }\n    .state-message {\n  border: none !important; }"];




/***/ }),

/***/ "./src/app/feature/catalogs/catalog-browser.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/feature/catalogs/catalog-browser.component.ts ***!
  \***************************************************************/
/*! exports provided: CatalogBrowserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CatalogBrowserComponent", function() { return CatalogBrowserComponent; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _catalogs_messages__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./catalogs.messages */ "./src/app/feature/catalogs/catalogs.messages.ts");


var CatalogBrowserComponent = /** @class */ /*@__PURE__*/ (function () {
    /**
     * Component constructor.
     */
    function CatalogBrowserComponent(router, route, dialog, store) {
        // Set the active route path on route changes. This
        // activates the tab for the current route.
        var _this = this;
        this.router = router;
        this.route = route;
        this.dialog = dialog;
        this.store = store;
        /** Active route path */
        this.childPath = 'taxonomies';
        /** Search keywords */
        this.keywords = null;
        router.events.subscribe(function (event) {
            if (!(event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_0__["NavigationEnd"])) {
                return;
            }
            for (var _i = 0, _a = route.children; _i < _a.length; _i++) {
                var child = _a[_i];
                if (route.outlet === _angular_router__WEBPACK_IMPORTED_MODULE_0__["PRIMARY_OUTLET"]) {
                    _this.childPath = child.snapshot.url[0].path;
                    break;
                }
            }
        });
        // Listen to URL parameters. This preserves the search
        // parameter between routes
        route.queryParamMap.subscribe(function (paramMap) {
            _this.keywords = paramMap.get('search');
        });
    }
    /**
     * Search the catalog.
     *
     * @param search    Search keywords
     */
    CatalogBrowserComponent.prototype.search = function (keywords) {
        this.router.navigate([this.childPath], {
            relativeTo: this.route,
            queryParams: { search: keywords }
        });
    };
    /**
     * Pick the shown catalog page.
     *
     * @param path      Catalog path
     */
    CatalogBrowserComponent.prototype.pick = function (path) {
        this.router.navigate([path], {
            relativeTo: this.route,
            queryParams: { search: this.keywords }
        });
    };
    /**
     * Edit an existing synapse.
     */
    CatalogBrowserComponent.prototype.edit = function (synapse) {
        this.router.navigate(['/editors', 'synapses', synapse.id]);
    };
    /**
     * Create a new synapse.
     */
    CatalogBrowserComponent.prototype.create = function () {
        var _this = this;
        var prompt = _catalogs_messages__WEBPACK_IMPORTED_MODULE_1__["CatalogMessages"].CreateSynapsePrompt();
        this.dialog.open(prompt)
            .filter(function (event) { return event.confirmed; })
            .filter(function (event) { return !!event.value.trim(); })
            .subscribe(function (event) {
            var params = { name: event.value };
            var path = '/api/synapses';
            _this.store.create(path, params)
                .subscribe(function (s) { return _this.edit(s); });
        });
    };
    return CatalogBrowserComponent;
}());




/***/ }),

/***/ "./src/app/feature/catalogs/catalogs.messages.ts":
/*!*******************************************************!*\
  !*** ./src/app/feature/catalogs/catalogs.messages.ts ***!
  \*******************************************************/
/*! exports provided: CatalogMessages */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CatalogMessages", function() { return CatalogMessages; });
/* harmony import */ var i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! i18n */ "./src/i18n.ts");

/**
 * Static message functions.
 */
var CatalogMessages = /** @class */ /*@__PURE__*/ (function () {
    function CatalogMessages() {
    }
    /** The synapse was successfully deleted */
    CatalogMessages.RemoveSynapseSuccess = function (tag) { return Object(i18n__WEBPACK_IMPORTED_MODULE_0__["format"])(Object(i18n__WEBPACK_IMPORTED_MODULE_0__["_"])('The synapse «<strong>{name}</strong>» has been deleted.'), { name: tag.name }); };
    /** The tag was successfully deleted */
    CatalogMessages.RemoveTagSuccess = function (tag) { return Object(i18n__WEBPACK_IMPORTED_MODULE_0__["format"])(Object(i18n__WEBPACK_IMPORTED_MODULE_0__["_"])('The tag «<strong>{name}</strong>» has been deleted.'), { name: tag.name }); };
    /** The tag was successfully restored */
    CatalogMessages.RestoreTagSuccess = function (tag) { return Object(i18n__WEBPACK_IMPORTED_MODULE_0__["format"])(Object(i18n__WEBPACK_IMPORTED_MODULE_0__["_"])('The tag «<strong>{name}</strong>» has been restored.'), { name: tag.name }); };
    /** Delete synapse confirmation dialog */
    CatalogMessages.RemoveSynapseConfirm = function (tag) {
        return ({
            type: 'confirm',
            confirm: Object(i18n__WEBPACK_IMPORTED_MODULE_0__["_"])('Delete synapse'),
            text: "\n          <p>\n            " + Object(i18n__WEBPACK_IMPORTED_MODULE_0__["format"])(Object(i18n__WEBPACK_IMPORTED_MODULE_0__["_"])('Do you want to delete «<strong>{name}</strong>»?'), { name: tag.name }) + "\n          </p>\n          <p>\n            <small class=\"text-muted\">\n              " + Object(i18n__WEBPACK_IMPORTED_MODULE_0__["_"])('This action cannot be undone.') + "\n            </small>\n          </p>"
        });
    };
    /** Delete tag confirmation dialog */
    CatalogMessages.RemoveTagConfirm = function (tag) {
        return ({
            type: 'confirm',
            confirm: Object(i18n__WEBPACK_IMPORTED_MODULE_0__["_"])('Delete tag'),
            text: "\n          <p>\n            " + Object(i18n__WEBPACK_IMPORTED_MODULE_0__["format"])(Object(i18n__WEBPACK_IMPORTED_MODULE_0__["_"])('Do you want to delete «<strong>{name}</strong>»?'), { name: tag.name }) + "\n          </p>\n          <p>\n            <small class=\"text-muted\">\n              " + Object(i18n__WEBPACK_IMPORTED_MODULE_0__["_"])('The tag will not longer show on search results but can be restored later on.') + "\n            </small>\n          </p>"
        });
    };
    /** Create synapse prompt dialog */
    CatalogMessages.CreateSynapsePrompt = function () {
        return ({
            type: 'prompt',
            confirm: Object(i18n__WEBPACK_IMPORTED_MODULE_0__["_"])('Create synapse'),
            prompt: Object(i18n__WEBPACK_IMPORTED_MODULE_0__["_"])('Name of the synapse'),
            text: "<p>" + Object(i18n__WEBPACK_IMPORTED_MODULE_0__["_"])('Please enter a name for the new synapse.') + "</p>"
        });
    };
    /** Create tag prompt dialog */
    CatalogMessages.CreateTagPrompt = function (tag) {
        return ({
            type: 'prompt',
            confirm: Object(i18n__WEBPACK_IMPORTED_MODULE_0__["_"])('Create synapse'),
            prompt: Object(i18n__WEBPACK_IMPORTED_MODULE_0__["_"])('Name of the synapse'),
            text: "\n          <p>\n            " + Object(i18n__WEBPACK_IMPORTED_MODULE_0__["format"])(Object(i18n__WEBPACK_IMPORTED_MODULE_0__["_"])('No synapse exists for the tag «<strong>{name}</strong>».'), { name: tag.name }) + "\n          </p>\n          <p>\n            <small class=\"text-muted\">\n              " + Object(i18n__WEBPACK_IMPORTED_MODULE_0__["_"])('To edit the tag, a synapse must be created.') + "\n              " + Object(i18n__WEBPACK_IMPORTED_MODULE_0__["_"])('Please enter a name to create a new synapse for the tag.') + "\n            </small>\n          </p>"
        });
    };
    return CatalogMessages;
}());




/***/ }),

/***/ "./src/app/feature/catalogs/catalogs.module.ngfactory.js":
/*!***************************************************************!*\
  !*** ./src/app/feature/catalogs/catalogs.module.ngfactory.js ***!
  \***************************************************************/
/*! exports provided: CatalogsModuleNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CatalogsModuleNgFactory", function() { return CatalogsModuleNgFactory; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _catalogs_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./catalogs.module */ "./src/app/feature/catalogs/catalogs.module.ts");
/* harmony import */ var _node_modules_angular_router_router_ngfactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/@angular/router/router.ngfactory */ "./node_modules/@angular/router/router.ngfactory.js");
/* harmony import */ var _catalog_browser_component_ngfactory__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./catalog-browser.component.ngfactory */ "./src/app/feature/catalogs/catalog-browser.component.ngfactory.js");
/* harmony import */ var _synapses_synapses_catalog_component_ngfactory__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./synapses/synapses-catalog.component.ngfactory */ "./src/app/feature/catalogs/synapses/synapses-catalog.component.ngfactory.js");
/* harmony import */ var _tags_tags_catalog_component_ngfactory__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./tags/tags-catalog.component.ngfactory */ "./src/app/feature/catalogs/tags/tags-catalog.component.ngfactory.js");
/* harmony import */ var _taxonomies_taxonomies_catalog_component_ngfactory__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./taxonomies/taxonomies-catalog.component.ngfactory */ "./src/app/feature/catalogs/taxonomies/taxonomies-catalog.component.ngfactory.js");
/* harmony import */ var _concrete_dialog_dialog_component_ngfactory__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../concrete/dialog/dialog.component.ngfactory */ "./src/concrete/dialog/dialog.component.ngfactory.js");
/* harmony import */ var _concrete_toaster_toaster_component_ngfactory__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../concrete/toaster/toaster.component.ngfactory */ "./src/concrete/toaster/toaster.component.ngfactory.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _concrete_breadcrumb_breadcrumb_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../concrete/breadcrumb/breadcrumb.service */ "./src/concrete/breadcrumb/breadcrumb.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ng2_dragula_components_dragula_provider__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ng2-dragula/components/dragula.provider */ "./node_modules/ng2-dragula/components/dragula.provider.js");
/* harmony import */ var ng2_dragula_components_dragula_provider__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(ng2_dragula_components_dragula_provider__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _shared_social_social_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../shared/social/social.service */ "./src/app/shared/social/social.service.ts");
/* harmony import */ var _catalogs_routes__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./catalogs.routes */ "./src/app/feature/catalogs/catalogs.routes.ts");
/* harmony import */ var _core_auth_auth_module__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../core/auth/auth.module */ "./src/app/core/auth/auth.module.ts");
/* harmony import */ var _shared_card_card_module__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../shared/card/card.module */ "./src/app/shared/card/card.module.ts");
/* harmony import */ var _shared_block_block_module__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../shared/block/block.module */ "./src/app/shared/block/block.module.ts");
/* harmony import */ var _concrete_breadcrumb_breadcrumb_module__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../../concrete/breadcrumb/breadcrumb.module */ "./src/concrete/breadcrumb/breadcrumb.module.ts");
/* harmony import */ var _concrete_expandable_expandable_module__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../../concrete/expandable/expandable.module */ "./src/concrete/expandable/expandable.module.ts");
/* harmony import */ var _concrete_details_details_module__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../../../concrete/details/details.module */ "./src/concrete/details/details.module.ts");
/* harmony import */ var _concrete_overlay_overlay_module__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../../../concrete/overlay/overlay.module */ "./src/concrete/overlay/overlay.module.ts");
/* harmony import */ var _concrete_dialog_dialog_module__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../../../concrete/dialog/dialog.module */ "./src/concrete/dialog/dialog.module.ts");
/* harmony import */ var _concrete_icon_icon_module__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../../../concrete/icon/icon.module */ "./src/concrete/icon/icon.module.ts");
/* harmony import */ var _concrete_menu_menu_module__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../../../concrete/menu/menu.module */ "./src/concrete/menu/menu.module.ts");
/* harmony import */ var _concrete_pagination_pagination_module__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ../../../concrete/pagination/pagination.module */ "./src/concrete/pagination/pagination.module.ts");
/* harmony import */ var _concrete_picker_picker_module__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ../../../concrete/picker/picker.module */ "./src/concrete/picker/picker.module.ts");
/* harmony import */ var _concrete_searchbox_searchbox_module__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ../../../concrete/searchbox/searchbox.module */ "./src/concrete/searchbox/searchbox.module.ts");
/* harmony import */ var _concrete_sortable_sortable_module__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ../../../concrete/sortable/sortable.module */ "./src/concrete/sortable/sortable.module.ts");
/* harmony import */ var _concrete_spinner_spinner_module__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ../../../concrete/spinner/spinner.module */ "./src/concrete/spinner/spinner.module.ts");
/* harmony import */ var _concrete_tabs_tabs_module__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ../../../concrete/tabs/tabs.module */ "./src/concrete/tabs/tabs.module.ts");
/* harmony import */ var _concrete_toaster_toaster_module__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ../../../concrete/toaster/toaster.module */ "./src/concrete/toaster/toaster.module.ts");
/* harmony import */ var _concrete_concrete_module__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ../../../concrete/concrete.module */ "./src/concrete/concrete.module.ts");
/* harmony import */ var _shared_blockpicker_blockpicker_module__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ../../shared/blockpicker/blockpicker.module */ "./src/app/shared/blockpicker/blockpicker.module.ts");
/* harmony import */ var _shared_colorpicker_colorpicker_module__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ../../shared/colorpicker/colorpicker.module */ "./src/app/shared/colorpicker/colorpicker.module.ts");
/* harmony import */ var _shared_datepicker_datepicker_module__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ../../shared/datepicker/datepicker.module */ "./src/app/shared/datepicker/datepicker.module.ts");
/* harmony import */ var _shared_errors_errors_module__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ../../shared/errors/errors.module */ "./src/app/shared/errors/errors.module.ts");
/* harmony import */ var _shared_feedback_feedback_module__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ../../shared/feedback/feedback.module */ "./src/app/shared/feedback/feedback.module.ts");
/* harmony import */ var _tinymce_tinymce_angular__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! @tinymce/tinymce-angular */ "./node_modules/@tinymce/tinymce-angular/fesm5/tinymce-tinymce-angular.js");
/* harmony import */ var _shared_htmleditor_htmleditor_module__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ../../shared/htmleditor/htmleditor.module */ "./src/app/shared/htmleditor/htmleditor.module.ts");
/* harmony import */ var ng2_dragula_components_dragular_module__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ng2-dragula/components/dragular.module */ "./node_modules/ng2-dragula/components/dragular.module.js");
/* harmony import */ var ng2_dragula_components_dragular_module__WEBPACK_IMPORTED_MODULE_41___default = /*#__PURE__*/__webpack_require__.n(ng2_dragula_components_dragular_module__WEBPACK_IMPORTED_MODULE_41__);
/* harmony import */ var _shared_sidebar_sidebar_module__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ../../shared/sidebar/sidebar.module */ "./src/app/shared/sidebar/sidebar.module.ts");
/* harmony import */ var _shared_typeahead_typeahead_module__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ../../shared/typeahead/typeahead.module */ "./src/app/shared/typeahead/typeahead.module.ts");
/* harmony import */ var _shared_search_search_module__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ../../shared/search/search.module */ "./src/app/shared/search/search.module.ts");
/* harmony import */ var _shared_share_share_form_module__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! ../../shared/share/share-form.module */ "./src/app/shared/share/share-form.module.ts");
/* harmony import */ var _shared_social_social_module__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! ../../shared/social/social.module */ "./src/app/shared/social/social.module.ts");
/* harmony import */ var _shared_sourceeditor_sourceeditor_module__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! ../../shared/sourceeditor/sourceeditor.module */ "./src/app/shared/sourceeditor/sourceeditor.module.ts");
/* harmony import */ var _shared_state_state_module__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! ../../shared/state/state.module */ "./src/app/shared/state/state.module.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! ../../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _catalog_browser_component__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! ./catalog-browser.component */ "./src/app/feature/catalogs/catalog-browser.component.ts");
/* harmony import */ var _synapses_synapses_catalog_component__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(/*! ./synapses/synapses-catalog.component */ "./src/app/feature/catalogs/synapses/synapses-catalog.component.ts");
/* harmony import */ var _tags_tags_catalog_component__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(/*! ./tags/tags-catalog.component */ "./src/app/feature/catalogs/tags/tags-catalog.component.ts");
/* harmony import */ var _taxonomies_taxonomies_catalog_component__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(/*! ./taxonomies/taxonomies-catalog.component */ "./src/app/feature/catalogs/taxonomies/taxonomies-catalog.component.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */
/** PURE_IMPORTS_START _angular_core,_catalogs.module,_.._.._.._node_modules__angular_router_router.ngfactory,_catalog_browser.component.ngfactory,_synapses_synapses_catalog.component.ngfactory,_tags_tags_catalog.component.ngfactory,_taxonomies_taxonomies_catalog.component.ngfactory,_.._.._concrete_dialog_dialog.component.ngfactory,_.._.._concrete_toaster_toaster.component.ngfactory,_angular_common,_.._.._concrete_breadcrumb_breadcrumb.service,_angular_router,_angular_forms,ng2_dragula_components_dragula.provider,_.._shared_social_social.service,_catalogs.routes,_.._core_auth_auth.module,_.._shared_card_card.module,_.._shared_block_block.module,_.._.._concrete_breadcrumb_breadcrumb.module,_.._.._concrete_expandable_expandable.module,_.._.._concrete_details_details.module,_.._.._concrete_overlay_overlay.module,_.._.._concrete_dialog_dialog.module,_.._.._concrete_icon_icon.module,_.._.._concrete_menu_menu.module,_.._.._concrete_pagination_pagination.module,_.._.._concrete_picker_picker.module,_.._.._concrete_searchbox_searchbox.module,_.._.._concrete_sortable_sortable.module,_.._.._concrete_spinner_spinner.module,_.._.._concrete_tabs_tabs.module,_.._.._concrete_toaster_toaster.module,_.._.._concrete_concrete.module,_.._shared_blockpicker_blockpicker.module,_.._shared_colorpicker_colorpicker.module,_.._shared_datepicker_datepicker.module,_.._shared_errors_errors.module,_.._shared_feedback_feedback.module,_tinymce_tinymce_angular,_.._shared_htmleditor_htmleditor.module,ng2_dragula_components_dragular.module,_.._shared_sidebar_sidebar.module,_.._shared_typeahead_typeahead.module,_.._shared_search_search.module,_.._shared_share_share_form.module,_.._shared_social_social.module,_.._shared_sourceeditor_sourceeditor.module,_.._shared_state_state.module,_.._shared_shared.module,_catalog_browser.component,_synapses_synapses_catalog.component,_tags_tags_catalog.component,_taxonomies_taxonomies_catalog.component PURE_IMPORTS_END */
/** PURE_IMPORTS_START _angular_core,_catalogs.module,_.._.._.._node_modules__angular_router_router.ngfactory,_catalog_browser.component.ngfactory,_synapses_synapses_catalog.component.ngfactory,_tags_tags_catalog.component.ngfactory,_taxonomies_taxonomies_catalog.component.ngfactory,_.._.._concrete_dialog_dialog.component.ngfactory,_.._.._concrete_toaster_toaster.component.ngfactory,_angular_common,_.._.._concrete_breadcrumb_breadcrumb.service,_angular_router,_angular_forms,ng2_dragula_components_dragula.provider,_.._shared_social_social.service,_catalogs.routes,_.._core_auth_auth.module,_.._shared_card_card.module,_.._shared_block_block.module,_.._.._concrete_breadcrumb_breadcrumb.module,_.._.._concrete_expandable_expandable.module,_.._.._concrete_details_details.module,_.._.._concrete_overlay_overlay.module,_.._.._concrete_dialog_dialog.module,_.._.._concrete_icon_icon.module,_.._.._concrete_menu_menu.module,_.._.._concrete_pagination_pagination.module,_.._.._concrete_picker_picker.module,_.._.._concrete_searchbox_searchbox.module,_.._.._concrete_sortable_sortable.module,_.._.._concrete_spinner_spinner.module,_.._.._concrete_tabs_tabs.module,_.._.._concrete_toaster_toaster.module,_.._.._concrete_concrete.module,_.._shared_blockpicker_blockpicker.module,_.._shared_colorpicker_colorpicker.module,_.._shared_datepicker_datepicker.module,_.._shared_errors_errors.module,_.._shared_feedback_feedback.module,_tinymce_tinymce_angular,_.._shared_htmleditor_htmleditor.module,ng2_dragula_components_dragular.module,_.._shared_sidebar_sidebar.module,_.._shared_typeahead_typeahead.module,_.._shared_search_search.module,_.._shared_share_share_form.module,_.._shared_social_social.module,_.._shared_sourceeditor_sourceeditor.module,_.._shared_state_state.module,_.._shared_shared.module,_catalog_browser.component,_synapses_synapses_catalog.component,_tags_tags_catalog.component,_taxonomies_taxonomies_catalog.component PURE_IMPORTS_END */






















































var CatalogsModuleNgFactory = /*@__PURE__*/ /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcmf"](_catalogs_module__WEBPACK_IMPORTED_MODULE_1__["CatalogsModule"], [], function (_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmod"]([_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵCodegenComponentFactoryResolver"], [[8, [_node_modules_angular_router_router_ngfactory__WEBPACK_IMPORTED_MODULE_2__["ɵEmptyOutletComponentNgFactory"], _catalog_browser_component_ngfactory__WEBPACK_IMPORTED_MODULE_3__["CatalogBrowserComponentNgFactory"], _synapses_synapses_catalog_component_ngfactory__WEBPACK_IMPORTED_MODULE_4__["SynapsesCatalogComponentNgFactory"], _tags_tags_catalog_component_ngfactory__WEBPACK_IMPORTED_MODULE_5__["TagsCatalogComponentNgFactory"], _taxonomies_taxonomies_catalog_component_ngfactory__WEBPACK_IMPORTED_MODULE_6__["TaxonomiesCatalogComponentNgFactory"], _concrete_dialog_dialog_component_ngfactory__WEBPACK_IMPORTED_MODULE_7__["CnDialogComponentNgFactory"], _concrete_toaster_toaster_component_ngfactory__WEBPACK_IMPORTED_MODULE_8__["CnToasterComponentNgFactory"]]], [3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"]], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModuleRef"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgLocalization"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgLocaleLocalization"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["LOCALE_ID"], [2, _angular_common__WEBPACK_IMPORTED_MODULE_9__["ɵangular_packages_common_common_a"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](135680, _concrete_breadcrumb_breadcrumb_service__WEBPACK_IMPORTED_MODULE_10__["CnBreadcrumbService"], _concrete_breadcrumb_breadcrumb_service__WEBPACK_IMPORTED_MODULE_10__["CnBreadcrumbService"], [_angular_router__WEBPACK_IMPORTED_MODULE_11__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_11__["ActivatedRoute"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_forms__WEBPACK_IMPORTED_MODULE_12__["ɵangular_packages_forms_forms_i"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__["ɵangular_packages_forms_forms_i"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormBuilder"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormBuilder"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, ng2_dragula_components_dragula_provider__WEBPACK_IMPORTED_MODULE_13__["DragulaService"], ng2_dragula_components_dragula_provider__WEBPACK_IMPORTED_MODULE_13__["DragulaService"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _shared_social_social_service__WEBPACK_IMPORTED_MODULE_14__["SocialService"], _shared_social_social_service__WEBPACK_IMPORTED_MODULE_14__["SocialService"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_router__WEBPACK_IMPORTED_MODULE_11__["RouterModule"], _angular_router__WEBPACK_IMPORTED_MODULE_11__["RouterModule"], [[2, _angular_router__WEBPACK_IMPORTED_MODULE_11__["ɵangular_packages_router_router_a"]], [2, _angular_router__WEBPACK_IMPORTED_MODULE_11__["Router"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _catalogs_routes__WEBPACK_IMPORTED_MODULE_15__["CatalogsRoutes"], _catalogs_routes__WEBPACK_IMPORTED_MODULE_15__["CatalogsRoutes"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _core_auth_auth_module__WEBPACK_IMPORTED_MODULE_16__["AuthModule"], _core_auth_auth_module__WEBPACK_IMPORTED_MODULE_16__["AuthModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_common__WEBPACK_IMPORTED_MODULE_9__["CommonModule"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["CommonModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _shared_card_card_module__WEBPACK_IMPORTED_MODULE_17__["CardModule"], _shared_card_card_module__WEBPACK_IMPORTED_MODULE_17__["CardModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _shared_block_block_module__WEBPACK_IMPORTED_MODULE_18__["BlockModule"], _shared_block_block_module__WEBPACK_IMPORTED_MODULE_18__["BlockModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _concrete_breadcrumb_breadcrumb_module__WEBPACK_IMPORTED_MODULE_19__["CnBreadcrumbModule"], _concrete_breadcrumb_breadcrumb_module__WEBPACK_IMPORTED_MODULE_19__["CnBreadcrumbModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _concrete_expandable_expandable_module__WEBPACK_IMPORTED_MODULE_20__["CnExpandableModule"], _concrete_expandable_expandable_module__WEBPACK_IMPORTED_MODULE_20__["CnExpandableModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _concrete_details_details_module__WEBPACK_IMPORTED_MODULE_21__["CnDetailsModule"], _concrete_details_details_module__WEBPACK_IMPORTED_MODULE_21__["CnDetailsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _concrete_overlay_overlay_module__WEBPACK_IMPORTED_MODULE_22__["CnOverlayModule"], _concrete_overlay_overlay_module__WEBPACK_IMPORTED_MODULE_22__["CnOverlayModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _concrete_dialog_dialog_module__WEBPACK_IMPORTED_MODULE_23__["CnDialogModule"], _concrete_dialog_dialog_module__WEBPACK_IMPORTED_MODULE_23__["CnDialogModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _concrete_icon_icon_module__WEBPACK_IMPORTED_MODULE_24__["CnIconModule"], _concrete_icon_icon_module__WEBPACK_IMPORTED_MODULE_24__["CnIconModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _concrete_menu_menu_module__WEBPACK_IMPORTED_MODULE_25__["CnMenuModule"], _concrete_menu_menu_module__WEBPACK_IMPORTED_MODULE_25__["CnMenuModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _concrete_pagination_pagination_module__WEBPACK_IMPORTED_MODULE_26__["CnPaginationModule"], _concrete_pagination_pagination_module__WEBPACK_IMPORTED_MODULE_26__["CnPaginationModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _concrete_picker_picker_module__WEBPACK_IMPORTED_MODULE_27__["CnPickerModule"], _concrete_picker_picker_module__WEBPACK_IMPORTED_MODULE_27__["CnPickerModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _concrete_searchbox_searchbox_module__WEBPACK_IMPORTED_MODULE_28__["CnSearchboxModule"], _concrete_searchbox_searchbox_module__WEBPACK_IMPORTED_MODULE_28__["CnSearchboxModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _concrete_sortable_sortable_module__WEBPACK_IMPORTED_MODULE_29__["CnSortableModule"], _concrete_sortable_sortable_module__WEBPACK_IMPORTED_MODULE_29__["CnSortableModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _concrete_spinner_spinner_module__WEBPACK_IMPORTED_MODULE_30__["CnSpinnerModule"], _concrete_spinner_spinner_module__WEBPACK_IMPORTED_MODULE_30__["CnSpinnerModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _concrete_tabs_tabs_module__WEBPACK_IMPORTED_MODULE_31__["CnTabsModule"], _concrete_tabs_tabs_module__WEBPACK_IMPORTED_MODULE_31__["CnTabsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _concrete_toaster_toaster_module__WEBPACK_IMPORTED_MODULE_32__["CnToasterModule"], _concrete_toaster_toaster_module__WEBPACK_IMPORTED_MODULE_32__["CnToasterModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _concrete_concrete_module__WEBPACK_IMPORTED_MODULE_33__["ConcreteModule"], _concrete_concrete_module__WEBPACK_IMPORTED_MODULE_33__["ConcreteModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_forms__WEBPACK_IMPORTED_MODULE_12__["ɵangular_packages_forms_forms_bb"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__["ɵangular_packages_forms_forms_bb"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _shared_blockpicker_blockpicker_module__WEBPACK_IMPORTED_MODULE_34__["BlockpickerModule"], _shared_blockpicker_blockpicker_module__WEBPACK_IMPORTED_MODULE_34__["BlockpickerModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _shared_colorpicker_colorpicker_module__WEBPACK_IMPORTED_MODULE_35__["ColorpickerModule"], _shared_colorpicker_colorpicker_module__WEBPACK_IMPORTED_MODULE_35__["ColorpickerModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _shared_datepicker_datepicker_module__WEBPACK_IMPORTED_MODULE_36__["DatepickerModule"], _shared_datepicker_datepicker_module__WEBPACK_IMPORTED_MODULE_36__["DatepickerModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _shared_errors_errors_module__WEBPACK_IMPORTED_MODULE_37__["ErrorsModule"], _shared_errors_errors_module__WEBPACK_IMPORTED_MODULE_37__["ErrorsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _shared_feedback_feedback_module__WEBPACK_IMPORTED_MODULE_38__["FeedbackModule"], _shared_feedback_feedback_module__WEBPACK_IMPORTED_MODULE_38__["FeedbackModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _tinymce_tinymce_angular__WEBPACK_IMPORTED_MODULE_39__["EditorModule"], _tinymce_tinymce_angular__WEBPACK_IMPORTED_MODULE_39__["EditorModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _shared_htmleditor_htmleditor_module__WEBPACK_IMPORTED_MODULE_40__["HTMLEditorModule"], _shared_htmleditor_htmleditor_module__WEBPACK_IMPORTED_MODULE_40__["HTMLEditorModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_forms__WEBPACK_IMPORTED_MODULE_12__["ReactiveFormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__["ReactiveFormsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, ng2_dragula_components_dragular_module__WEBPACK_IMPORTED_MODULE_41__["DragulaModule"], ng2_dragula_components_dragular_module__WEBPACK_IMPORTED_MODULE_41__["DragulaModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _shared_sidebar_sidebar_module__WEBPACK_IMPORTED_MODULE_42__["SidebarModule"], _shared_sidebar_sidebar_module__WEBPACK_IMPORTED_MODULE_42__["SidebarModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _shared_typeahead_typeahead_module__WEBPACK_IMPORTED_MODULE_43__["TypeaheadModule"], _shared_typeahead_typeahead_module__WEBPACK_IMPORTED_MODULE_43__["TypeaheadModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _shared_search_search_module__WEBPACK_IMPORTED_MODULE_44__["SearchModule"], _shared_search_search_module__WEBPACK_IMPORTED_MODULE_44__["SearchModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _shared_share_share_form_module__WEBPACK_IMPORTED_MODULE_45__["ShareFormModule"], _shared_share_share_form_module__WEBPACK_IMPORTED_MODULE_45__["ShareFormModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _shared_social_social_module__WEBPACK_IMPORTED_MODULE_46__["SocialModule"], _shared_social_social_module__WEBPACK_IMPORTED_MODULE_46__["SocialModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _shared_sourceeditor_sourceeditor_module__WEBPACK_IMPORTED_MODULE_47__["SourceEditorModule"], _shared_sourceeditor_sourceeditor_module__WEBPACK_IMPORTED_MODULE_47__["SourceEditorModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _shared_state_state_module__WEBPACK_IMPORTED_MODULE_48__["StateModule"], _shared_state_state_module__WEBPACK_IMPORTED_MODULE_48__["StateModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _shared_shared_module__WEBPACK_IMPORTED_MODULE_49__["SharedModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_49__["SharedModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _catalogs_module__WEBPACK_IMPORTED_MODULE_1__["CatalogsModule"], _catalogs_module__WEBPACK_IMPORTED_MODULE_1__["CatalogsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _angular_router__WEBPACK_IMPORTED_MODULE_11__["ROUTES"], function () { return [[{ path: "", component: _catalog_browser_component__WEBPACK_IMPORTED_MODULE_50__["CatalogBrowserComponent"], children: [{ path: "synapses", component: _synapses_synapses_catalog_component__WEBPACK_IMPORTED_MODULE_51__["SynapsesCatalogComponent"], data: { title: "Synapses" } }, { path: "tags", component: _tags_tags_catalog_component__WEBPACK_IMPORTED_MODULE_52__["TagsCatalogComponent"], data: { title: "Tags" } }, { path: "taxonomies", component: _taxonomies_taxonomies_catalog_component__WEBPACK_IMPORTED_MODULE_53__["TaxonomiesCatalogComponent"], data: { title: "Taxonomies" } }, { path: "", redirectTo: "taxonomies" }] }]]; }, []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, _angular_core__WEBPACK_IMPORTED_MODULE_0__["LOCALE_ID"], "en", [])]); });




/***/ }),

/***/ "./src/app/feature/catalogs/catalogs.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/feature/catalogs/catalogs.module.ts ***!
  \*****************************************************/
/*! exports provided: CatalogsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CatalogsModule", function() { return CatalogsModule; });
var CatalogsModule = /** @class */ /*@__PURE__*/ (function () {
    function CatalogsModule() {
    }
    return CatalogsModule;
}());




/***/ }),

/***/ "./src/app/feature/catalogs/catalogs.routes.ts":
/*!*****************************************************!*\
  !*** ./src/app/feature/catalogs/catalogs.routes.ts ***!
  \*****************************************************/
/*! exports provided: ROUTING_COMPONENTS, ROUTES, CatalogsRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ROUTING_COMPONENTS", function() { return ROUTING_COMPONENTS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ROUTES", function() { return ROUTES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CatalogsRoutes", function() { return CatalogsRoutes; });
/* harmony import */ var _catalog_browser_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./catalog-browser.component */ "./src/app/feature/catalogs/catalog-browser.component.ts");
/* harmony import */ var _synapses__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./synapses */ "./src/app/feature/catalogs/synapses/index.ts");
/* harmony import */ var _tags__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tags */ "./src/app/feature/catalogs/tags/index.ts");
/* harmony import */ var _taxonomies__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./taxonomies */ "./src/app/feature/catalogs/taxonomies/index.ts");
/* harmony import */ var i18n__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! i18n */ "./src/i18n.ts");





/**
 * Routing components
 */
var ROUTING_COMPONENTS = [
    _catalog_browser_component__WEBPACK_IMPORTED_MODULE_0__["CatalogBrowserComponent"],
    _synapses__WEBPACK_IMPORTED_MODULE_1__["SynapsesCatalogComponent"],
    _tags__WEBPACK_IMPORTED_MODULE_2__["TagsCatalogComponent"],
    _taxonomies__WEBPACK_IMPORTED_MODULE_3__["TaxonomiesCatalogComponent"]
];
/**
 * Module routes
 */
var ROUTES = [{
        path: '',
        component: _catalog_browser_component__WEBPACK_IMPORTED_MODULE_0__["CatalogBrowserComponent"],
        children: [{
                path: 'synapses',
                component: _synapses__WEBPACK_IMPORTED_MODULE_1__["SynapsesCatalogComponent"],
                data: { title: Object(i18n__WEBPACK_IMPORTED_MODULE_4__["_"])('Synapses') }
            }, {
                path: 'tags',
                component: _tags__WEBPACK_IMPORTED_MODULE_2__["TagsCatalogComponent"],
                data: { title: Object(i18n__WEBPACK_IMPORTED_MODULE_4__["_"])('Tags') }
            }, {
                path: 'taxonomies',
                component: _taxonomies__WEBPACK_IMPORTED_MODULE_3__["TaxonomiesCatalogComponent"],
                data: { title: Object(i18n__WEBPACK_IMPORTED_MODULE_4__["_"])('Taxonomies') }
            }, {
                path: '',
                redirectTo: 'taxonomies'
            }]
    }];
/**
 * Routing module
 */
var CatalogsRoutes = /** @class */ /*@__PURE__*/ (function () {
    function CatalogsRoutes() {
    }
    return CatalogsRoutes;
}());




/***/ }),

/***/ "./src/app/feature/catalogs/synapses/index.ts":
/*!****************************************************!*\
  !*** ./src/app/feature/catalogs/synapses/index.ts ***!
  \****************************************************/
/*! exports provided: SynapsesCatalogComponent, SynapsesTableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _synapses_catalog_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./synapses-catalog.component */ "./src/app/feature/catalogs/synapses/synapses-catalog.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SynapsesCatalogComponent", function() { return _synapses_catalog_component__WEBPACK_IMPORTED_MODULE_0__["SynapsesCatalogComponent"]; });

/* harmony import */ var _synapses_table_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./synapses-table.component */ "./src/app/feature/catalogs/synapses/synapses-table.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SynapsesTableComponent", function() { return _synapses_table_component__WEBPACK_IMPORTED_MODULE_1__["SynapsesTableComponent"]; });






/***/ }),

/***/ "./src/app/feature/catalogs/synapses/synapses-catalog.component.ngfactory.js":
/*!***********************************************************************************!*\
  !*** ./src/app/feature/catalogs/synapses/synapses-catalog.component.ngfactory.js ***!
  \***********************************************************************************/
/*! exports provided: RenderType_SynapsesCatalogComponent, View_SynapsesCatalogComponent_0, View_SynapsesCatalogComponent_Host_0, SynapsesCatalogComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_SynapsesCatalogComponent", function() { return RenderType_SynapsesCatalogComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_SynapsesCatalogComponent_0", function() { return View_SynapsesCatalogComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_SynapsesCatalogComponent_Host_0", function() { return View_SynapsesCatalogComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SynapsesCatalogComponentNgFactory", function() { return SynapsesCatalogComponentNgFactory; });
/* harmony import */ var _synapses_catalog_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./synapses-catalog.component.scss.shim.ngstyle */ "./src/app/feature/catalogs/synapses/synapses-catalog.component.scss.shim.ngstyle.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _synapses_table_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./synapses-table.component.ngfactory */ "./src/app/feature/catalogs/synapses/synapses-table.component.ngfactory.js");
/* harmony import */ var _synapses_table_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./synapses-table.component */ "./src/app/feature/catalogs/synapses/synapses-table.component.ts");
/* harmony import */ var _core_auth_policies_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../core/auth/policies.service */ "./src/app/core/auth/policies.service.ts");
/* harmony import */ var _concrete_pagination_pagination_component_ngfactory__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../concrete/pagination/pagination.component.ngfactory */ "./src/concrete/pagination/pagination.component.ngfactory.js");
/* harmony import */ var _concrete_pagination_pagination_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../concrete/pagination/pagination.component */ "./src/concrete/pagination/pagination.component.ts");
/* harmony import */ var _shared_state_state_component_ngfactory__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../shared/state/state.component.ngfactory */ "./src/app/shared/state/state.component.ngfactory.js");
/* harmony import */ var _shared_state_state_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../shared/state/state.component */ "./src/app/shared/state/state.component.ts");
/* harmony import */ var _concrete_spinner_spinner_component_ngfactory__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../concrete/spinner/spinner.component.ngfactory */ "./src/concrete/spinner/spinner.component.ngfactory.js");
/* harmony import */ var _concrete_spinner_spinner_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../concrete/spinner/spinner.component */ "./src/concrete/spinner/spinner.component.ts");
/* harmony import */ var _core_services_manager_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../core/services/manager.service */ "./src/app/core/services/manager.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _synapses_catalog_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./synapses-catalog.component */ "./src/app/feature/catalogs/synapses/synapses-catalog.component.ts");
/* harmony import */ var _core_services_store_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../core/services/store.service */ "./src/app/core/services/store.service.ts");
/* harmony import */ var _core_auth_session_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../core/auth/session.service */ "./src/app/core/auth/session.service.ts");
/* harmony import */ var _concrete_dialog_dialog_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../../concrete/dialog/dialog.service */ "./src/concrete/dialog/dialog.service.ts");
/* harmony import */ var _concrete_toaster_toaster_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../../../concrete/toaster/toaster.service */ "./src/concrete/toaster/toaster.service.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */
/** PURE_IMPORTS_START _synapses_catalog.component.scss.shim.ngstyle,_angular_core,_synapses_table.component.ngfactory,_synapses_table.component,_.._.._core_auth_policies.service,_.._.._.._concrete_pagination_pagination.component.ngfactory,_.._.._.._concrete_pagination_pagination.component,_.._.._shared_state_state.component.ngfactory,_.._.._shared_state_state.component,_.._.._.._concrete_spinner_spinner.component.ngfactory,_.._.._.._concrete_spinner_spinner.component,_.._.._core_services_manager.service,_angular_router,_synapses_catalog.component,_.._.._core_services_store.service,_.._.._core_auth_session.service,_.._.._.._concrete_dialog_dialog.service,_.._.._.._concrete_toaster_toaster.service PURE_IMPORTS_END */
/** PURE_IMPORTS_START _synapses_catalog.component.scss.shim.ngstyle,_angular_core,_synapses_table.component.ngfactory,_synapses_table.component,_.._.._core_auth_policies.service,_.._.._.._concrete_pagination_pagination.component.ngfactory,_.._.._.._concrete_pagination_pagination.component,_.._.._shared_state_state.component.ngfactory,_.._.._shared_state_state.component,_.._.._.._concrete_spinner_spinner.component.ngfactory,_.._.._.._concrete_spinner_spinner.component,_.._.._core_services_manager.service,_angular_router,_synapses_catalog.component,_.._.._core_services_store.service,_.._.._core_auth_session.service,_.._.._.._concrete_dialog_dialog.service,_.._.._.._concrete_toaster_toaster.service PURE_IMPORTS_END */


















var styles_SynapsesCatalogComponent = [_synapses_catalog_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];
var RenderType_SynapsesCatalogComponent = /*@__PURE__*/ /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({ encapsulation: 0, styles: styles_SynapsesCatalogComponent, data: {} });

function View_SynapsesCatalogComponent_0(_l) {
    return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 10, "section", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 2, "div", [], [[8, "hidden", 0]], null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 1, "app-synapses-table", [], null, [[null, "sortChange"], [null, "deleteRow"], [null, "editRow"]], function (_v, en, $event) {
            var ad = true;
            var _co = _v.component;
            if (("sortChange" === en)) {
                var pd_0 = (_co.sort($event.values) !== false);
                ad = (pd_0 && ad);
            }
            if (("deleteRow" === en)) {
                var pd_1 = (_co.remove($event) !== false);
                ad = (pd_1 && ad);
            }
            if (("editRow" === en)) {
                var pd_2 = (_co.edit($event) !== false);
                ad = (pd_2 && ad);
            }
            return ad;
        }, _synapses_table_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_SynapsesTableComponent_0"], _synapses_table_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_SynapsesTableComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](3, 49152, null, 0, _synapses_table_component__WEBPACK_IMPORTED_MODULE_3__["SynapsesTableComponent"], [_core_auth_policies_service__WEBPACK_IMPORTED_MODULE_4__["PoliciesService"]], { synapses: [0, "synapses"], sort: [1, "sort"] }, { sortChange: "sortChange", editRow: "editRow", deleteRow: "deleteRow" }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, null, 1, "cn-pagination", [], null, [[null, "pageChange"]], function (_v, en, $event) {
            var ad = true;
            var _co = _v.component;
            if (("pageChange" === en)) {
                var pd_0 = (_co.page($event) !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, _concrete_pagination_pagination_component_ngfactory__WEBPACK_IMPORTED_MODULE_5__["View_CnPaginationComponent_0"], _concrete_pagination_pagination_component_ngfactory__WEBPACK_IMPORTED_MODULE_5__["RenderType_CnPaginationComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](5, 49152, null, 0, _concrete_pagination_pagination_component__WEBPACK_IMPORTED_MODULE_6__["CnPaginationComponent"], [], { collection: [0, "collection"] }, { pageChange: "pageChange" }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](6, 0, null, null, 1, "app-state", [], null, null, null, _shared_state_state_component_ngfactory__WEBPACK_IMPORTED_MODULE_7__["View_StateComponent_0"], _shared_state_state_component_ngfactory__WEBPACK_IMPORTED_MODULE_7__["RenderType_StateComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](7, 49152, null, 0, _shared_state_state_component__WEBPACK_IMPORTED_MODULE_8__["StateComponent"], [], { state: [0, "state"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](8, 0, null, null, 2, "div", [["class", "backdrop"]], [[8, "hidden", 0]], null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](9, 0, null, null, 1, "cn-spinner", [], null, null, null, _concrete_spinner_spinner_component_ngfactory__WEBPACK_IMPORTED_MODULE_9__["View_CnSpinnerComponent_0"], _concrete_spinner_spinner_component_ngfactory__WEBPACK_IMPORTED_MODULE_9__["RenderType_CnSpinnerComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](10, 49152, null, 0, _concrete_spinner_spinner_component__WEBPACK_IMPORTED_MODULE_10__["CnSpinnerComponent"], [], null, null)], function (_ck, _v) { var _co = _v.component; var currVal_1 = _co.collection; var currVal_2 = _co.request.sort; _ck(_v, 3, 0, currVal_1, currVal_2); var currVal_3 = _co.collection; _ck(_v, 5, 0, currVal_3); var currVal_4 = _co.state; _ck(_v, 7, 0, currVal_4); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = ((_co.state == "empty") || (_co.state == "error")); _ck(_v, 1, 0, currVal_0); var currVal_5 = (_co.state != "pending"); _ck(_v, 8, 0, currVal_5); });
}
function View_SynapsesCatalogComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "app-synapses-catalog", [], null, null, null, View_SynapsesCatalogComponent_0, RenderType_SynapsesCatalogComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](131584, null, _core_services_manager_service__WEBPACK_IMPORTED_MODULE_11__["RequestManager"], _core_services_manager_service__WEBPACK_IMPORTED_MODULE_11__["RequestManager"], [_angular_router__WEBPACK_IMPORTED_MODULE_12__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_12__["ActivatedRoute"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 245760, null, 0, _synapses_catalog_component__WEBPACK_IMPORTED_MODULE_13__["SynapsesCatalogComponent"], [_core_services_store_service__WEBPACK_IMPORTED_MODULE_14__["StoreService"], _core_auth_session_service__WEBPACK_IMPORTED_MODULE_15__["SessionService"], _core_services_manager_service__WEBPACK_IMPORTED_MODULE_11__["RequestManager"], _concrete_dialog_dialog_service__WEBPACK_IMPORTED_MODULE_16__["CnDialog"], _concrete_toaster_toaster_service__WEBPACK_IMPORTED_MODULE_17__["CnToaster"]], null, null)], function (_ck, _v) { _ck(_v, 2, 0); }, null); }
var SynapsesCatalogComponentNgFactory = /*@__PURE__*/ /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("app-synapses-catalog", _synapses_catalog_component__WEBPACK_IMPORTED_MODULE_13__["SynapsesCatalogComponent"], View_SynapsesCatalogComponent_Host_0, { defaults: "defaults", bindings: "bindings" }, {}, []);




/***/ }),

/***/ "./src/app/feature/catalogs/synapses/synapses-catalog.component.scss.shim.ngstyle.js":
/*!*******************************************************************************************!*\
  !*** ./src/app/feature/catalogs/synapses/synapses-catalog.component.scss.shim.ngstyle.js ***!
  \*******************************************************************************************/
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
var styles = [""];




/***/ }),

/***/ "./src/app/feature/catalogs/synapses/synapses-catalog.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/feature/catalogs/synapses/synapses-catalog.component.ts ***!
  \*************************************************************************/
/*! exports provided: SynapsesCatalogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SynapsesCatalogComponent", function() { return SynapsesCatalogComponent; });
/* harmony import */ var app_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/core */ "./src/app/core/index.ts");
/* harmony import */ var _catalogs_messages__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../catalogs.messages */ "./src/app/feature/catalogs/catalogs.messages.ts");
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


var SynapsesCatalogComponent = /** @class */ /*@__PURE__*/ (function (_super) {
    __extends(SynapsesCatalogComponent, _super);
    function SynapsesCatalogComponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /** This catalog storage path */
        _this.path = '/api/synapses';
        /** Default query values for requests */
        _this.defaults = {
            sort: ['name']
        };
        /** Query bindings for requests */
        _this.bindings = {
            type: ['synapses', 'tags']
        };
        return _this;
    }
    /**
     * Edit an existing synapse.
     */
    SynapsesCatalogComponent.prototype.edit = function (synapse) {
        this.manager.navigate(['/editors', 'synapses', synapse.id]);
    };
    /**
     * Delete an existing synapse.
     */
    SynapsesCatalogComponent.prototype.remove = function (synapse) {
        var _this = this;
        var confirm = _catalogs_messages__WEBPACK_IMPORTED_MODULE_1__["CatalogMessages"].RemoveSynapseConfirm(synapse);
        var success = _catalogs_messages__WEBPACK_IMPORTED_MODULE_1__["CatalogMessages"].RemoveSynapseSuccess(synapse);
        this.dialog.open(confirm)
            .filter(function (e) { return e.confirmed; })
            .subscribe(function () {
            _this.store.delete(_this.path, synapse.id)
                .subscribe(function () {
                synapse.deleted_at = (new Date()).toISOString();
                _this.toaster.success(success);
            });
        });
    };
    return SynapsesCatalogComponent;
}(app_core__WEBPACK_IMPORTED_MODULE_0__["CatalogComponent"]));




/***/ }),

/***/ "./src/app/feature/catalogs/synapses/synapses-table.component.ngfactory.js":
/*!*********************************************************************************!*\
  !*** ./src/app/feature/catalogs/synapses/synapses-table.component.ngfactory.js ***!
  \*********************************************************************************/
/*! exports provided: RenderType_SynapsesTableComponent, View_SynapsesTableComponent_0, View_SynapsesTableComponent_Host_0, SynapsesTableComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_SynapsesTableComponent", function() { return RenderType_SynapsesTableComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_SynapsesTableComponent_0", function() { return View_SynapsesTableComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_SynapsesTableComponent_Host_0", function() { return View_SynapsesTableComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SynapsesTableComponentNgFactory", function() { return SynapsesTableComponentNgFactory; });
/* harmony import */ var _synapses_table_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./synapses-table.component.scss.shim.ngstyle */ "./src/app/feature/catalogs/synapses/synapses-table.component.scss.shim.ngstyle.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _concrete_icon_icon_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../concrete/icon/icon.component.ngfactory */ "./src/concrete/icon/icon.component.ngfactory.js");
/* harmony import */ var _concrete_icon_icon_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../concrete/icon/icon.component */ "./src/concrete/icon/icon.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _core_auth_ifcan_directive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../core/auth/ifcan.directive */ "./src/app/core/auth/ifcan.directive.ts");
/* harmony import */ var _core_auth_policies_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../core/auth/policies.service */ "./src/app/core/auth/policies.service.ts");
/* harmony import */ var _core_auth_session_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../core/auth/session.service */ "./src/app/core/auth/session.service.ts");
/* harmony import */ var _concrete_sortable_sortable_component_ngfactory__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../concrete/sortable/sortable.component.ngfactory */ "./src/concrete/sortable/sortable.component.ngfactory.js");
/* harmony import */ var _concrete_sortable_sort_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../concrete/sortable/sort.service */ "./src/concrete/sortable/sort.service.ts");
/* harmony import */ var _concrete_sortable_sortable_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../concrete/sortable/sortable.component */ "./src/concrete/sortable/sortable.component.ts");
/* harmony import */ var _concrete_sortable_sortby_directive__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../concrete/sortable/sortby.directive */ "./src/concrete/sortable/sortby.directive.ts");
/* harmony import */ var _shared_striptags_pipe__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../shared/striptags.pipe */ "./src/app/shared/striptags.pipe.ts");
/* harmony import */ var _synapses_table_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./synapses-table.component */ "./src/app/feature/catalogs/synapses/synapses-table.component.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */
/** PURE_IMPORTS_START _synapses_table.component.scss.shim.ngstyle,_angular_core,_.._.._.._concrete_icon_icon.component.ngfactory,_.._.._.._concrete_icon_icon.component,_angular_common,_angular_router,_.._.._core_auth_ifcan.directive,_.._.._core_auth_policies.service,_.._.._core_auth_session.service,_.._.._.._concrete_sortable_sortable.component.ngfactory,_.._.._.._concrete_sortable_sort.service,_.._.._.._concrete_sortable_sortable.component,_.._.._.._concrete_sortable_sortby.directive,_.._.._shared_striptags.pipe,_synapses_table.component PURE_IMPORTS_END */
/** PURE_IMPORTS_START _synapses_table.component.scss.shim.ngstyle,_angular_core,_.._.._.._concrete_icon_icon.component.ngfactory,_.._.._.._concrete_icon_icon.component,_angular_common,_angular_router,_.._.._core_auth_ifcan.directive,_.._.._core_auth_policies.service,_.._.._core_auth_session.service,_.._.._.._concrete_sortable_sortable.component.ngfactory,_.._.._.._concrete_sortable_sort.service,_.._.._.._concrete_sortable_sortable.component,_.._.._.._concrete_sortable_sortby.directive,_.._.._shared_striptags.pipe,_synapses_table.component PURE_IMPORTS_END */















var styles_SynapsesTableComponent = [_synapses_table_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];
var RenderType_SynapsesTableComponent = /*@__PURE__*/ /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({ encapsulation: 0, styles: styles_SynapsesTableComponent, data: {} });

function View_SynapsesTableComponent_2(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "th", [["class", "actions-column"], ["title", "Actions"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 1, "cn-icon", [["value", "pencil"]], null, null, null, _concrete_icon_icon_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_CnIconComponent_0"], _concrete_icon_icon_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_CnIconComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 49152, null, 0, _concrete_icon_icon_component__WEBPACK_IMPORTED_MODULE_3__["CnIconComponent"], [], { value: [0, "value"] }, null)], function (_ck, _v) { var currVal_0 = "pencil"; _ck(_v, 2, 0, currVal_0); }, null); }
function View_SynapsesTableComponent_4(_l) {
    return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 6, "td", [["class", "actions-column"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 2, "button", [["class", "btn btn-sm btn-secondary"], ["title", "Edit synapse"]], [[8, "disabled", 0]], [[null, "click"]], function (_v, en, $event) {
            var ad = true;
            var _co = _v.component;
            if (("click" === en)) {
                var pd_0 = (_co.editRow.emit(_v.parent.context.$implicit) !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 1, "cn-icon", [["value", "edit"]], null, null, null, _concrete_icon_icon_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_CnIconComponent_0"], _concrete_icon_icon_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_CnIconComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](3, 49152, null, 0, _concrete_icon_icon_component__WEBPACK_IMPORTED_MODULE_3__["CnIconComponent"], [], { value: [0, "value"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, null, 2, "button", [["class", "btn btn-sm btn-secondary"], ["title", "Delete synapse"]], [[8, "disabled", 0]], [[null, "click"]], function (_v, en, $event) {
            var ad = true;
            var _co = _v.component;
            if (("click" === en)) {
                var pd_0 = (_co.deleteRow.emit(_v.parent.context.$implicit) !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](5, 0, null, null, 1, "cn-icon", [["value", "remove"]], null, null, null, _concrete_icon_icon_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_CnIconComponent_0"], _concrete_icon_icon_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_CnIconComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](6, 49152, null, 0, _concrete_icon_icon_component__WEBPACK_IMPORTED_MODULE_3__["CnIconComponent"], [], { value: [0, "value"] }, null)], function (_ck, _v) { var currVal_1 = "edit"; _ck(_v, 3, 0, currVal_1); var currVal_3 = "remove"; _ck(_v, 6, 0, currVal_3); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = !_co.policies.can("update-synapse", _v.parent.context.$implicit); _ck(_v, 1, 0, currVal_0); var currVal_2 = !_co.policies.can("destroy-synapse", _v.parent.context.$implicit); _ck(_v, 4, 0, currVal_2); });
}
function View_SynapsesTableComponent_3(_l) {
    return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 14, "tr", [], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgClass"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["KeyValueDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], { ngClass: [0, "ngClass"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpod"](2, { "deleted-row": 0 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 5, "td", [["class", "main-column w-50"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, null, 4, "a", [], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) {
            var ad = true;
            if (("click" === en)) {
                var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 5).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](5, 671744, null, 0, _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLinkWithHref"], [_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["LocationStrategy"]], { routerLink: [0, "routerLink"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpad"](6, 2), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](7, 0, null, null, 1, "span", [["class", "synapse-name"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](8, null, [" ", " "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](9, 0, null, null, 2, "td", [["class", "w-50"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](10, 0, null, null, 1, "span", [], [[8, "innerHTML", 1]], null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](11, 1), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 2, null, View_SynapsesTableComponent_4)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](13, 737280, null, 0, _core_auth_ifcan_directive__WEBPACK_IMPORTED_MODULE_6__["IfCanDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _core_auth_policies_service__WEBPACK_IMPORTED_MODULE_7__["PoliciesService"], _core_auth_session_service__WEBPACK_IMPORTED_MODULE_8__["SessionService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { gate: [0, "gate"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpad"](14, 1)], function (_ck, _v) { var currVal_0 = _ck(_v, 2, 0, _v.context.$implicit.deleted_at); _ck(_v, 1, 0, currVal_0); var currVal_3 = _ck(_v, 6, 0, "/synapses", _v.context.$implicit.slug); _ck(_v, 5, 0, currVal_3); var currVal_6 = _ck(_v, 14, 0, "manage-synapses"); _ck(_v, 13, 0, currVal_6); }, function (_ck, _v) { var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 5).target; var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 5).href; _ck(_v, 4, 0, currVal_1, currVal_2); var currVal_4 = _v.context.$implicit.name; _ck(_v, 8, 0, currVal_4); var currVal_5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 10, 0, _ck(_v, 11, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v.parent.parent, 0), _v.context.$implicit.description)); _ck(_v, 10, 0, currVal_5); });
}
function View_SynapsesTableComponent_1(_l) {
    return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 17, "div", [["class", "synapses-table"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 16, "div", [["class", "table-responsive"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 15, "table", [["class", "table table-striped table-hover"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 11, "thead", [["cn-sortable", ""]], null, [[null, "cnSortChange"]], function (_v, en, $event) {
            var ad = true;
            var _co = _v.component;
            if (("cnSortChange" === en)) {
                var pd_0 = (_co.sortChange.emit($event) !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, _concrete_sortable_sortable_component_ngfactory__WEBPACK_IMPORTED_MODULE_9__["View_CnSortableComponent_0"], _concrete_sortable_sortable_component_ngfactory__WEBPACK_IMPORTED_MODULE_9__["RenderType_CnSortableComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](512, null, _concrete_sortable_sort_service__WEBPACK_IMPORTED_MODULE_10__["CnSortService"], _concrete_sortable_sort_service__WEBPACK_IMPORTED_MODULE_10__["CnSortService"], []), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](5, 770048, null, 0, _concrete_sortable_sortable_component__WEBPACK_IMPORTED_MODULE_11__["CnSortableComponent"], [_concrete_sortable_sort_service__WEBPACK_IMPORTED_MODULE_10__["CnSortService"]], { value: [0, "value"] }, { sortChange: "cnSortChange" }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](6, 0, null, 0, 8, "tr", [["role", "row"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](7, 0, null, null, 2, "th", [["cnSortBy", "name"]], null, [[null, "click"], [null, "keyup.enter"]], function (_v, en, $event) {
            var ad = true;
            if (("click" === en)) {
                var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 8).onClick() !== false);
                ad = (pd_0 && ad);
            }
            if (("keyup.enter" === en)) {
                var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 8).onEnterUp() !== false);
                ad = (pd_1 && ad);
            }
            return ad;
        }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](8, 212992, null, 0, _concrete_sortable_sortby_directive__WEBPACK_IMPORTED_MODULE_12__["CnSortByDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _concrete_sortable_sort_service__WEBPACK_IMPORTED_MODULE_10__["CnSortService"]], { key: [0, "key"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Name"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](10, 0, null, null, 1, "th", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Description"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 2, null, View_SynapsesTableComponent_2)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](13, 737280, null, 0, _core_auth_ifcan_directive__WEBPACK_IMPORTED_MODULE_6__["IfCanDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _core_auth_policies_service__WEBPACK_IMPORTED_MODULE_7__["PoliciesService"], _core_auth_session_service__WEBPACK_IMPORTED_MODULE_8__["SessionService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { gate: [0, "gate"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpad"](14, 1), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](15, 0, null, null, 2, "tbody", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_SynapsesTableComponent_3)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](17, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"]], { ngForOf: [0, "ngForOf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.sort; _ck(_v, 5, 0, currVal_0); var currVal_1 = "name"; _ck(_v, 8, 0, currVal_1); var currVal_2 = _ck(_v, 14, 0, "manage-synapses"); _ck(_v, 13, 0, currVal_2); var currVal_3 = _co.synapses; _ck(_v, 17, 0, currVal_3); }, null);
}
function View_SynapsesTableComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](0, _shared_striptags_pipe__WEBPACK_IMPORTED_MODULE_13__["StripTagsPipe"], []), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_SynapsesTableComponent_1)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.synapses; _ck(_v, 2, 0, currVal_0); }, null); }
function View_SynapsesTableComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "app-synapses-table", [], null, null, null, View_SynapsesTableComponent_0, RenderType_SynapsesTableComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 49152, null, 0, _synapses_table_component__WEBPACK_IMPORTED_MODULE_14__["SynapsesTableComponent"], [_core_auth_policies_service__WEBPACK_IMPORTED_MODULE_7__["PoliciesService"]], null, null)], null, null); }
var SynapsesTableComponentNgFactory = /*@__PURE__*/ /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("app-synapses-table", _synapses_table_component__WEBPACK_IMPORTED_MODULE_14__["SynapsesTableComponent"], View_SynapsesTableComponent_Host_0, { synapses: "synapses", sort: "sort" }, { sortChange: "sortChange", editRow: "editRow", deleteRow: "deleteRow" }, []);




/***/ }),

/***/ "./src/app/feature/catalogs/synapses/synapses-table.component.scss.shim.ngstyle.js":
/*!*****************************************************************************************!*\
  !*** ./src/app/feature/catalogs/synapses/synapses-table.component.scss.shim.ngstyle.js ***!
  \*****************************************************************************************/
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
var styles = ["a[_ngcontent-%COMP%]:hover   .synapse-name[_ngcontent-%COMP%], a[_ngcontent-%COMP%]:focus   .synapse-name[_ngcontent-%COMP%] {\n  color: black;\n  background: #dddddd; }\n\n.synapse-name[_ngcontent-%COMP%] {\n  color: white;\n  background: #c00000;\n  font-weight: 600;\n  padding: .2rem .5rem;\n  white-space: nowrap; }\n\n.deleted-row[_ngcontent-%COMP%]   .actions-column[_ngcontent-%COMP%] {\n  opacity: .2;\n  pointer-events: none; }\n\n.deleted-row[_ngcontent-%COMP%]   .synapse-name[_ngcontent-%COMP%] {\n  opacity: .2; }"];




/***/ }),

/***/ "./src/app/feature/catalogs/synapses/synapses-table.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/feature/catalogs/synapses/synapses-table.component.ts ***!
  \***********************************************************************/
/*! exports provided: SynapsesTableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SynapsesTableComponent", function() { return SynapsesTableComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");

var SynapsesTableComponent = /** @class */ /*@__PURE__*/ (function () {
    /**
     * Component constructor.
     */
    function SynapsesTableComponent(policies) {
        this.policies = policies;
        /** Table sorting columns */
        this.sort = [];
        /** Table sort event */
        this.sortChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /** Row edition event */
        this.editRow = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /** Row removal event */
        this.deleteRow = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    return SynapsesTableComponent;
}());




/***/ }),

/***/ "./src/app/feature/catalogs/tags/index.ts":
/*!************************************************!*\
  !*** ./src/app/feature/catalogs/tags/index.ts ***!
  \************************************************/
/*! exports provided: TagsCatalogComponent, TagsTableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tags_catalog_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tags-catalog.component */ "./src/app/feature/catalogs/tags/tags-catalog.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TagsCatalogComponent", function() { return _tags_catalog_component__WEBPACK_IMPORTED_MODULE_0__["TagsCatalogComponent"]; });

/* harmony import */ var _tags_table_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tags-table.component */ "./src/app/feature/catalogs/tags/tags-table.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TagsTableComponent", function() { return _tags_table_component__WEBPACK_IMPORTED_MODULE_1__["TagsTableComponent"]; });






/***/ }),

/***/ "./src/app/feature/catalogs/tags/tags-catalog.component.ngfactory.js":
/*!***************************************************************************!*\
  !*** ./src/app/feature/catalogs/tags/tags-catalog.component.ngfactory.js ***!
  \***************************************************************************/
/*! exports provided: RenderType_TagsCatalogComponent, View_TagsCatalogComponent_0, View_TagsCatalogComponent_Host_0, TagsCatalogComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_TagsCatalogComponent", function() { return RenderType_TagsCatalogComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_TagsCatalogComponent_0", function() { return View_TagsCatalogComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_TagsCatalogComponent_Host_0", function() { return View_TagsCatalogComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TagsCatalogComponentNgFactory", function() { return TagsCatalogComponentNgFactory; });
/* harmony import */ var _tags_catalog_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tags-catalog.component.scss.shim.ngstyle */ "./src/app/feature/catalogs/tags/tags-catalog.component.scss.shim.ngstyle.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _tags_table_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tags-table.component.ngfactory */ "./src/app/feature/catalogs/tags/tags-table.component.ngfactory.js");
/* harmony import */ var _tags_table_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tags-table.component */ "./src/app/feature/catalogs/tags/tags-table.component.ts");
/* harmony import */ var _concrete_pagination_pagination_component_ngfactory__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../concrete/pagination/pagination.component.ngfactory */ "./src/concrete/pagination/pagination.component.ngfactory.js");
/* harmony import */ var _concrete_pagination_pagination_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../concrete/pagination/pagination.component */ "./src/concrete/pagination/pagination.component.ts");
/* harmony import */ var _shared_state_state_component_ngfactory__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../shared/state/state.component.ngfactory */ "./src/app/shared/state/state.component.ngfactory.js");
/* harmony import */ var _shared_state_state_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../shared/state/state.component */ "./src/app/shared/state/state.component.ts");
/* harmony import */ var _concrete_spinner_spinner_component_ngfactory__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../concrete/spinner/spinner.component.ngfactory */ "./src/concrete/spinner/spinner.component.ngfactory.js");
/* harmony import */ var _concrete_spinner_spinner_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../concrete/spinner/spinner.component */ "./src/concrete/spinner/spinner.component.ts");
/* harmony import */ var _core_services_manager_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../core/services/manager.service */ "./src/app/core/services/manager.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _tags_catalog_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./tags-catalog.component */ "./src/app/feature/catalogs/tags/tags-catalog.component.ts");
/* harmony import */ var _core_services_store_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../core/services/store.service */ "./src/app/core/services/store.service.ts");
/* harmony import */ var _core_auth_session_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../core/auth/session.service */ "./src/app/core/auth/session.service.ts");
/* harmony import */ var _concrete_dialog_dialog_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../../concrete/dialog/dialog.service */ "./src/concrete/dialog/dialog.service.ts");
/* harmony import */ var _concrete_toaster_toaster_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../../concrete/toaster/toaster.service */ "./src/concrete/toaster/toaster.service.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */
/** PURE_IMPORTS_START _tags_catalog.component.scss.shim.ngstyle,_angular_core,_tags_table.component.ngfactory,_tags_table.component,_.._.._.._concrete_pagination_pagination.component.ngfactory,_.._.._.._concrete_pagination_pagination.component,_.._.._shared_state_state.component.ngfactory,_.._.._shared_state_state.component,_.._.._.._concrete_spinner_spinner.component.ngfactory,_.._.._.._concrete_spinner_spinner.component,_.._.._core_services_manager.service,_angular_router,_tags_catalog.component,_.._.._core_services_store.service,_.._.._core_auth_session.service,_.._.._.._concrete_dialog_dialog.service,_.._.._.._concrete_toaster_toaster.service PURE_IMPORTS_END */
/** PURE_IMPORTS_START _tags_catalog.component.scss.shim.ngstyle,_angular_core,_tags_table.component.ngfactory,_tags_table.component,_.._.._.._concrete_pagination_pagination.component.ngfactory,_.._.._.._concrete_pagination_pagination.component,_.._.._shared_state_state.component.ngfactory,_.._.._shared_state_state.component,_.._.._.._concrete_spinner_spinner.component.ngfactory,_.._.._.._concrete_spinner_spinner.component,_.._.._core_services_manager.service,_angular_router,_tags_catalog.component,_.._.._core_services_store.service,_.._.._core_auth_session.service,_.._.._.._concrete_dialog_dialog.service,_.._.._.._concrete_toaster_toaster.service PURE_IMPORTS_END */

















var styles_TagsCatalogComponent = [_tags_catalog_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];
var RenderType_TagsCatalogComponent = /*@__PURE__*/ /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({ encapsulation: 0, styles: styles_TagsCatalogComponent, data: {} });

function View_TagsCatalogComponent_0(_l) {
    return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 10, "section", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 2, "div", [], [[8, "hidden", 0]], null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 1, "app-tags-table", [], null, [[null, "sortChange"], [null, "deleteRow"], [null, "editRow"], [null, "restoreRow"]], function (_v, en, $event) {
            var ad = true;
            var _co = _v.component;
            if (("sortChange" === en)) {
                var pd_0 = (_co.sort($event.values) !== false);
                ad = (pd_0 && ad);
            }
            if (("deleteRow" === en)) {
                var pd_1 = (_co.remove($event) !== false);
                ad = (pd_1 && ad);
            }
            if (("editRow" === en)) {
                var pd_2 = (_co.editOrCreate($event) !== false);
                ad = (pd_2 && ad);
            }
            if (("restoreRow" === en)) {
                var pd_3 = (_co.restore($event) !== false);
                ad = (pd_3 && ad);
            }
            return ad;
        }, _tags_table_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_TagsTableComponent_0"], _tags_table_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_TagsTableComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](3, 49152, null, 0, _tags_table_component__WEBPACK_IMPORTED_MODULE_3__["TagsTableComponent"], [], { tags: [0, "tags"], sort: [1, "sort"] }, { sortChange: "sortChange", editRow: "editRow", deleteRow: "deleteRow", restoreRow: "restoreRow" }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, null, 1, "cn-pagination", [], null, [[null, "pageChange"]], function (_v, en, $event) {
            var ad = true;
            var _co = _v.component;
            if (("pageChange" === en)) {
                var pd_0 = (_co.page($event) !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, _concrete_pagination_pagination_component_ngfactory__WEBPACK_IMPORTED_MODULE_4__["View_CnPaginationComponent_0"], _concrete_pagination_pagination_component_ngfactory__WEBPACK_IMPORTED_MODULE_4__["RenderType_CnPaginationComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](5, 49152, null, 0, _concrete_pagination_pagination_component__WEBPACK_IMPORTED_MODULE_5__["CnPaginationComponent"], [], { collection: [0, "collection"] }, { pageChange: "pageChange" }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](6, 0, null, null, 1, "app-state", [], null, null, null, _shared_state_state_component_ngfactory__WEBPACK_IMPORTED_MODULE_6__["View_StateComponent_0"], _shared_state_state_component_ngfactory__WEBPACK_IMPORTED_MODULE_6__["RenderType_StateComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](7, 49152, null, 0, _shared_state_state_component__WEBPACK_IMPORTED_MODULE_7__["StateComponent"], [], { state: [0, "state"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](8, 0, null, null, 2, "div", [["class", "backdrop"]], [[8, "hidden", 0]], null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](9, 0, null, null, 1, "cn-spinner", [], null, null, null, _concrete_spinner_spinner_component_ngfactory__WEBPACK_IMPORTED_MODULE_8__["View_CnSpinnerComponent_0"], _concrete_spinner_spinner_component_ngfactory__WEBPACK_IMPORTED_MODULE_8__["RenderType_CnSpinnerComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](10, 49152, null, 0, _concrete_spinner_spinner_component__WEBPACK_IMPORTED_MODULE_9__["CnSpinnerComponent"], [], null, null)], function (_ck, _v) { var _co = _v.component; var currVal_1 = _co.collection; var currVal_2 = _co.request.sort; _ck(_v, 3, 0, currVal_1, currVal_2); var currVal_3 = _co.collection; _ck(_v, 5, 0, currVal_3); var currVal_4 = _co.state; _ck(_v, 7, 0, currVal_4); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = ((_co.state == "empty") || (_co.state == "error")); _ck(_v, 1, 0, currVal_0); var currVal_5 = (_co.state != "pending"); _ck(_v, 8, 0, currVal_5); });
}
function View_TagsCatalogComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "app-tags-catalog", [], null, null, null, View_TagsCatalogComponent_0, RenderType_TagsCatalogComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](131584, null, _core_services_manager_service__WEBPACK_IMPORTED_MODULE_10__["RequestManager"], _core_services_manager_service__WEBPACK_IMPORTED_MODULE_10__["RequestManager"], [_angular_router__WEBPACK_IMPORTED_MODULE_11__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_11__["ActivatedRoute"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 245760, null, 0, _tags_catalog_component__WEBPACK_IMPORTED_MODULE_12__["TagsCatalogComponent"], [_core_services_store_service__WEBPACK_IMPORTED_MODULE_13__["StoreService"], _core_auth_session_service__WEBPACK_IMPORTED_MODULE_14__["SessionService"], _core_services_manager_service__WEBPACK_IMPORTED_MODULE_10__["RequestManager"], _concrete_dialog_dialog_service__WEBPACK_IMPORTED_MODULE_15__["CnDialog"], _concrete_toaster_toaster_service__WEBPACK_IMPORTED_MODULE_16__["CnToaster"]], null, null)], function (_ck, _v) { _ck(_v, 2, 0); }, null); }
var TagsCatalogComponentNgFactory = /*@__PURE__*/ /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("app-tags-catalog", _tags_catalog_component__WEBPACK_IMPORTED_MODULE_12__["TagsCatalogComponent"], View_TagsCatalogComponent_Host_0, { defaults: "defaults", bindings: "bindings" }, {}, []);




/***/ }),

/***/ "./src/app/feature/catalogs/tags/tags-catalog.component.scss.shim.ngstyle.js":
/*!***********************************************************************************!*\
  !*** ./src/app/feature/catalogs/tags/tags-catalog.component.scss.shim.ngstyle.js ***!
  \***********************************************************************************/
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
var styles = [""];




/***/ }),

/***/ "./src/app/feature/catalogs/tags/tags-catalog.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/feature/catalogs/tags/tags-catalog.component.ts ***!
  \*****************************************************************/
/*! exports provided: TagsCatalogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TagsCatalogComponent", function() { return TagsCatalogComponent; });
/* harmony import */ var app_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/core */ "./src/app/core/index.ts");
/* harmony import */ var _catalogs_messages__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../catalogs.messages */ "./src/app/feature/catalogs/catalogs.messages.ts");
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


var TagsCatalogComponent = /** @class */ /*@__PURE__*/ (function (_super) {
    __extends(TagsCatalogComponent, _super);
    function TagsCatalogComponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /** This catalog storage path */
        _this.path = '/api/tags';
        /** Default query values for requests */
        _this.defaults = {
            sort: ['-post_count', 'name']
        };
        /** Query bindings for requests */
        _this.bindings = {
            'min-post_count': 2,
            'with': ['synapse']
        };
        return _this;
    }
    /**
     * Edit an existing tag synapse or create a new synapse
     * if a synapse for the tag does not exist.
     *
     * @param tag   Tag object
     */
    TagsCatalogComponent.prototype.editOrCreate = function (tag) {
        if (tag.synapse !== null) {
            this.edit(tag);
        }
        else {
            this.create(tag);
        }
    };
    /**
     * Edit an existing tag synapse.
     *
     * @param tag   Tag object
     */
    TagsCatalogComponent.prototype.edit = function (tag) {
        this.manager.navigate(['/editors', 'synapses', tag.synapse_id]);
    };
    /**
     * Create a new synapse for the tag.
     *
     * @param tag   Tag object
     */
    TagsCatalogComponent.prototype.create = function (tag) {
        var _this = this;
        var prompt = _catalogs_messages__WEBPACK_IMPORTED_MODULE_1__["CatalogMessages"].CreateTagPrompt(tag);
        this.dialog.open(prompt)
            .filter(function (event) { return event.confirmed; })
            .filter(function (event) { return !!event.value.trim(); })
            .subscribe(function (event) {
            var params = { name: event.value };
            var createPath = "/api/synapses/tags/" + tag.id;
            _this.store.create(createPath, params)
                .subscribe(function (response) {
                tag.synapse_id = response['id'];
                _this.edit(tag);
            });
        });
    };
    /**
     * Delete an existing tag.
     *
     * @param tag   Tag object
     */
    TagsCatalogComponent.prototype.remove = function (tag) {
        var _this = this;
        var confirm = _catalogs_messages__WEBPACK_IMPORTED_MODULE_1__["CatalogMessages"].RemoveTagConfirm(tag);
        var success = _catalogs_messages__WEBPACK_IMPORTED_MODULE_1__["CatalogMessages"].RemoveTagSuccess(tag);
        this.dialog.open(confirm)
            .filter(function (e) { return e.confirmed; })
            .subscribe(function () {
            var deleted_at = (new Date()).toISOString();
            _this.store.delete(_this.path, tag.id)
                .subscribe(function () {
                tag.deleted_at = deleted_at;
                _this.toaster.success(success);
            });
        });
    };
    /**
     * Restore a deleted tag.
     */
    TagsCatalogComponent.prototype.restore = function (tag) {
        var _this = this;
        var success = _catalogs_messages__WEBPACK_IMPORTED_MODULE_1__["CatalogMessages"].RestoreTagSuccess(tag);
        this.store.restore(this.path, tag.id)
            .subscribe(function (event) {
            tag.deleted_at = null;
            _this.toaster.success(success);
        });
    };
    return TagsCatalogComponent;
}(app_core__WEBPACK_IMPORTED_MODULE_0__["CatalogComponent"]));




/***/ }),

/***/ "./src/app/feature/catalogs/tags/tags-table.component.ngfactory.js":
/*!*************************************************************************!*\
  !*** ./src/app/feature/catalogs/tags/tags-table.component.ngfactory.js ***!
  \*************************************************************************/
/*! exports provided: RenderType_TagsTableComponent, View_TagsTableComponent_0, View_TagsTableComponent_Host_0, TagsTableComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_TagsTableComponent", function() { return RenderType_TagsTableComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_TagsTableComponent_0", function() { return View_TagsTableComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_TagsTableComponent_Host_0", function() { return View_TagsTableComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TagsTableComponentNgFactory", function() { return TagsTableComponentNgFactory; });
/* harmony import */ var _tags_table_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tags-table.component.scss.shim.ngstyle */ "./src/app/feature/catalogs/tags/tags-table.component.scss.shim.ngstyle.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _concrete_icon_icon_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../concrete/icon/icon.component.ngfactory */ "./src/concrete/icon/icon.component.ngfactory.js");
/* harmony import */ var _concrete_icon_icon_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../concrete/icon/icon.component */ "./src/concrete/icon/icon.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _core_auth_ifcan_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../core/auth/ifcan.directive */ "./src/app/core/auth/ifcan.directive.ts");
/* harmony import */ var _core_auth_policies_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../core/auth/policies.service */ "./src/app/core/auth/policies.service.ts");
/* harmony import */ var _core_auth_session_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../core/auth/session.service */ "./src/app/core/auth/session.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _concrete_sortable_sortable_component_ngfactory__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../concrete/sortable/sortable.component.ngfactory */ "./src/concrete/sortable/sortable.component.ngfactory.js");
/* harmony import */ var _concrete_sortable_sort_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../concrete/sortable/sort.service */ "./src/concrete/sortable/sort.service.ts");
/* harmony import */ var _concrete_sortable_sortable_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../concrete/sortable/sortable.component */ "./src/concrete/sortable/sortable.component.ts");
/* harmony import */ var _concrete_sortable_sortby_directive__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../concrete/sortable/sortby.directive */ "./src/concrete/sortable/sortby.directive.ts");
/* harmony import */ var _shared_striptags_pipe__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../shared/striptags.pipe */ "./src/app/shared/striptags.pipe.ts");
/* harmony import */ var _tags_table_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./tags-table.component */ "./src/app/feature/catalogs/tags/tags-table.component.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */
/** PURE_IMPORTS_START _tags_table.component.scss.shim.ngstyle,_angular_core,_.._.._.._concrete_icon_icon.component.ngfactory,_.._.._.._concrete_icon_icon.component,_angular_common,_.._.._core_auth_ifcan.directive,_.._.._core_auth_policies.service,_.._.._core_auth_session.service,_angular_router,_.._.._.._concrete_sortable_sortable.component.ngfactory,_.._.._.._concrete_sortable_sort.service,_.._.._.._concrete_sortable_sortable.component,_.._.._.._concrete_sortable_sortby.directive,_.._.._shared_striptags.pipe,_tags_table.component PURE_IMPORTS_END */
/** PURE_IMPORTS_START _tags_table.component.scss.shim.ngstyle,_angular_core,_.._.._.._concrete_icon_icon.component.ngfactory,_.._.._.._concrete_icon_icon.component,_angular_common,_.._.._core_auth_ifcan.directive,_.._.._core_auth_policies.service,_.._.._core_auth_session.service,_angular_router,_.._.._.._concrete_sortable_sortable.component.ngfactory,_.._.._.._concrete_sortable_sort.service,_.._.._.._concrete_sortable_sortable.component,_.._.._.._concrete_sortable_sortby.directive,_.._.._shared_striptags.pipe,_tags_table.component PURE_IMPORTS_END */















var styles_TagsTableComponent = [_tags_table_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];
var RenderType_TagsTableComponent = /*@__PURE__*/ /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({ encapsulation: 0, styles: styles_TagsTableComponent, data: {} });

function View_TagsTableComponent_2(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "th", [["class", "actions-column"], ["title", "Actions"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 1, "cn-icon", [["value", "pencil"]], null, null, null, _concrete_icon_icon_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_CnIconComponent_0"], _concrete_icon_icon_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_CnIconComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 49152, null, 0, _concrete_icon_icon_component__WEBPACK_IMPORTED_MODULE_3__["CnIconComponent"], [], { value: [0, "value"] }, null)], function (_ck, _v) { var currVal_0 = "pencil"; _ck(_v, 2, 0, currVal_0); }, null); }
function View_TagsTableComponent_6(_l) {
    return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "button", [["class", "btn btn-sm btn-secondary"], ["title", "Create synapse"]], null, [[null, "click"]], function (_v, en, $event) {
            var ad = true;
            var _co = _v.component;
            if (("click" === en)) {
                var pd_0 = (_co.editRow.emit(_v.parent.parent.parent.context.$implicit) !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 1, "cn-icon", [["value", "plus"]], null, null, null, _concrete_icon_icon_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_CnIconComponent_0"], _concrete_icon_icon_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_CnIconComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 49152, null, 0, _concrete_icon_icon_component__WEBPACK_IMPORTED_MODULE_3__["CnIconComponent"], [], { value: [0, "value"] }, null)], function (_ck, _v) { var currVal_0 = "plus"; _ck(_v, 2, 0, currVal_0); }, null);
}
function View_TagsTableComponent_7(_l) {
    return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "button", [["class", "btn btn-sm btn-secondary"], ["title", "Edit synapse"]], null, [[null, "click"]], function (_v, en, $event) {
            var ad = true;
            var _co = _v.component;
            if (("click" === en)) {
                var pd_0 = (_co.editRow.emit(_v.parent.parent.parent.context.$implicit) !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 1, "cn-icon", [["value", "edit"]], null, null, null, _concrete_icon_icon_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_CnIconComponent_0"], _concrete_icon_icon_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_CnIconComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 49152, null, 0, _concrete_icon_icon_component__WEBPACK_IMPORTED_MODULE_3__["CnIconComponent"], [], { value: [0, "value"] }, null)], function (_ck, _v) { var currVal_0 = "edit"; _ck(_v, 2, 0, currVal_0); }, null);
}
function View_TagsTableComponent_5(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 4, null, null, null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_TagsTableComponent_6)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_TagsTableComponent_7)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](4, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](0, null, null, 0))], function (_ck, _v) { var currVal_0 = !_v.parent.parent.context.$implicit.synapse_id; _ck(_v, 2, 0, currVal_0); var currVal_1 = _v.parent.parent.context.$implicit.synapse_id; _ck(_v, 4, 0, currVal_1); }, null); }
function View_TagsTableComponent_8(_l) {
    return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "button", [["class", "btn btn-sm btn-secondary"], ["title", "Delete tag"]], null, [[null, "click"]], function (_v, en, $event) {
            var ad = true;
            var _co = _v.component;
            if (("click" === en)) {
                var pd_0 = (_co.deleteRow.emit(_v.parent.parent.context.$implicit) !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 1, "cn-icon", [["value", "ban"]], null, null, null, _concrete_icon_icon_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_CnIconComponent_0"], _concrete_icon_icon_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_CnIconComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 49152, null, 0, _concrete_icon_icon_component__WEBPACK_IMPORTED_MODULE_3__["CnIconComponent"], [], { value: [0, "value"] }, null)], function (_ck, _v) { var currVal_0 = "ban"; _ck(_v, 2, 0, currVal_0); }, null);
}
function View_TagsTableComponent_9(_l) {
    return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "button", [["class", "btn btn-sm btn-secondary"], ["title", "Restore tag"]], null, [[null, "click"]], function (_v, en, $event) {
            var ad = true;
            var _co = _v.component;
            if (("click" === en)) {
                var pd_0 = (_co.restoreRow.emit(_v.parent.parent.context.$implicit) !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 1, "cn-icon", [["value", "undo"]], null, null, null, _concrete_icon_icon_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_CnIconComponent_0"], _concrete_icon_icon_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_CnIconComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 49152, null, 0, _concrete_icon_icon_component__WEBPACK_IMPORTED_MODULE_3__["CnIconComponent"], [], { value: [0, "value"] }, null)], function (_ck, _v) { var currVal_0 = "undo"; _ck(_v, 2, 0, currVal_0); }, null);
}
function View_TagsTableComponent_4(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 7, "td", [["class", "actions-column"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 2, null, View_TagsTableComponent_5)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 737280, null, 0, _core_auth_ifcan_directive__WEBPACK_IMPORTED_MODULE_5__["IfCanDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _core_auth_policies_service__WEBPACK_IMPORTED_MODULE_6__["PoliciesService"], _core_auth_session_service__WEBPACK_IMPORTED_MODULE_7__["SessionService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { gate: [0, "gate"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpad"](3, 1), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_TagsTableComponent_8)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](5, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_TagsTableComponent_9)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](7, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var currVal_0 = _ck(_v, 3, 0, "manage-synapses"); _ck(_v, 2, 0, currVal_0); var currVal_1 = !_v.parent.context.$implicit.deleted_at; _ck(_v, 5, 0, currVal_1); var currVal_2 = _v.parent.context.$implicit.deleted_at; _ck(_v, 7, 0, currVal_2); }, null); }
function View_TagsTableComponent_3(_l) {
    return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 17, "tr", [], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgClass"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["KeyValueDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], { ngClass: [0, "ngClass"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpod"](2, { "deleted-row": 0 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 4, "td", [["class", "main-column w-50"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, null, 3, "a", [], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) {
            var ad = true;
            if (("click" === en)) {
                var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 5).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](5, 671744, null, 0, _angular_router__WEBPACK_IMPORTED_MODULE_8__["RouterLinkWithHref"], [_angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_8__["ActivatedRoute"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["LocationStrategy"]], { routerLink: [0, "routerLink"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpad"](6, 2), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](7, null, [" ", " "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](8, 0, null, null, 2, "td", [["class", "w-50"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](9, 0, null, null, 1, "span", [], [[8, "innerHTML", 1]], null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](10, 1), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](11, 0, null, null, 3, "td", [["class", "numeric-cell"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](12, 0, null, null, 2, "data", [], [[1, "value", 0]], null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](13, null, [" ", " "])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](14, 1), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 2, null, View_TagsTableComponent_4)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](16, 737280, null, 0, _core_auth_ifcan_directive__WEBPACK_IMPORTED_MODULE_5__["IfCanDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _core_auth_policies_service__WEBPACK_IMPORTED_MODULE_6__["PoliciesService"], _core_auth_session_service__WEBPACK_IMPORTED_MODULE_7__["SessionService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { gate: [0, "gate"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpad"](17, 1)], function (_ck, _v) { var currVal_0 = _ck(_v, 2, 0, _v.context.$implicit.deleted_at); _ck(_v, 1, 0, currVal_0); var currVal_3 = _ck(_v, 6, 0, "/tags", _v.context.$implicit.slug); _ck(_v, 5, 0, currVal_3); var currVal_8 = _ck(_v, 17, 0, "manage-tags"); _ck(_v, 16, 0, currVal_8); }, function (_ck, _v) { var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 5).target; var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 5).href; _ck(_v, 4, 0, currVal_1, currVal_2); var currVal_4 = _v.context.$implicit.name; _ck(_v, 7, 0, currVal_4); var currVal_5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 9, 0, _ck(_v, 10, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v.parent.parent, 0), ((_v.context.$implicit.synapse == null) ? null : _v.context.$implicit.synapse.description))); _ck(_v, 9, 0, currVal_5); var currVal_6 = _v.context.$implicit.post_count; _ck(_v, 12, 0, currVal_6); var currVal_7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 13, 0, _ck(_v, 14, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v.parent.parent, 1), _v.context.$implicit.post_count)); _ck(_v, 13, 0, currVal_7); });
}
function View_TagsTableComponent_1(_l) {
    return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 20, "div", [["class", "tags-table"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 19, "div", [["class", "table-responsive"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 18, "table", [["class", "table table-striped table-hover"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 14, "thead", [["cn-sortable", ""]], null, [[null, "cnSortChange"]], function (_v, en, $event) {
            var ad = true;
            var _co = _v.component;
            if (("cnSortChange" === en)) {
                var pd_0 = (_co.sortChange.emit($event) !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, _concrete_sortable_sortable_component_ngfactory__WEBPACK_IMPORTED_MODULE_9__["View_CnSortableComponent_0"], _concrete_sortable_sortable_component_ngfactory__WEBPACK_IMPORTED_MODULE_9__["RenderType_CnSortableComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](512, null, _concrete_sortable_sort_service__WEBPACK_IMPORTED_MODULE_10__["CnSortService"], _concrete_sortable_sort_service__WEBPACK_IMPORTED_MODULE_10__["CnSortService"], []), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](5, 770048, null, 0, _concrete_sortable_sortable_component__WEBPACK_IMPORTED_MODULE_11__["CnSortableComponent"], [_concrete_sortable_sort_service__WEBPACK_IMPORTED_MODULE_10__["CnSortService"]], { value: [0, "value"] }, { sortChange: "cnSortChange" }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](6, 0, null, 0, 11, "tr", [["role", "row"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](7, 0, null, null, 2, "th", [["cnSortBy", "name"]], null, [[null, "click"], [null, "keyup.enter"]], function (_v, en, $event) {
            var ad = true;
            if (("click" === en)) {
                var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 8).onClick() !== false);
                ad = (pd_0 && ad);
            }
            if (("keyup.enter" === en)) {
                var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 8).onEnterUp() !== false);
                ad = (pd_1 && ad);
            }
            return ad;
        }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](8, 212992, null, 0, _concrete_sortable_sortby_directive__WEBPACK_IMPORTED_MODULE_12__["CnSortByDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _concrete_sortable_sort_service__WEBPACK_IMPORTED_MODULE_10__["CnSortService"]], { key: [0, "key"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Name"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](10, 0, null, null, 1, "th", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Description"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](12, 0, null, null, 2, "th", [["cnSortBy", "post_count"]], null, [[null, "click"], [null, "keyup.enter"]], function (_v, en, $event) {
            var ad = true;
            if (("click" === en)) {
                var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 13).onClick() !== false);
                ad = (pd_0 && ad);
            }
            if (("keyup.enter" === en)) {
                var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 13).onEnterUp() !== false);
                ad = (pd_1 && ad);
            }
            return ad;
        }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](13, 212992, null, 0, _concrete_sortable_sortby_directive__WEBPACK_IMPORTED_MODULE_12__["CnSortByDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _concrete_sortable_sort_service__WEBPACK_IMPORTED_MODULE_10__["CnSortService"]], { key: [0, "key"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Posts"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 2, null, View_TagsTableComponent_2)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](16, 737280, null, 0, _core_auth_ifcan_directive__WEBPACK_IMPORTED_MODULE_5__["IfCanDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _core_auth_policies_service__WEBPACK_IMPORTED_MODULE_6__["PoliciesService"], _core_auth_session_service__WEBPACK_IMPORTED_MODULE_7__["SessionService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { gate: [0, "gate"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpad"](17, 1), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](18, 0, null, null, 2, "tbody", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_TagsTableComponent_3)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](20, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"]], { ngForOf: [0, "ngForOf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.sort; _ck(_v, 5, 0, currVal_0); var currVal_1 = "name"; _ck(_v, 8, 0, currVal_1); var currVal_2 = "post_count"; _ck(_v, 13, 0, currVal_2); var currVal_3 = _ck(_v, 17, 0, "manage-tags"); _ck(_v, 16, 0, currVal_3); var currVal_4 = _co.tags; _ck(_v, 20, 0, currVal_4); }, null);
}
function View_TagsTableComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](0, _shared_striptags_pipe__WEBPACK_IMPORTED_MODULE_13__["StripTagsPipe"], []), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](0, _angular_common__WEBPACK_IMPORTED_MODULE_4__["DecimalPipe"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["LOCALE_ID"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_TagsTableComponent_1)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](3, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.tags; _ck(_v, 3, 0, currVal_0); }, null); }
function View_TagsTableComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "app-tags-table", [], null, null, null, View_TagsTableComponent_0, RenderType_TagsTableComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 49152, null, 0, _tags_table_component__WEBPACK_IMPORTED_MODULE_14__["TagsTableComponent"], [], null, null)], null, null); }
var TagsTableComponentNgFactory = /*@__PURE__*/ /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("app-tags-table", _tags_table_component__WEBPACK_IMPORTED_MODULE_14__["TagsTableComponent"], View_TagsTableComponent_Host_0, { tags: "tags", sort: "sort" }, { sortChange: "sortChange", editRow: "editRow", deleteRow: "deleteRow", restoreRow: "restoreRow" }, []);




/***/ }),

/***/ "./src/app/feature/catalogs/tags/tags-table.component.scss.shim.ngstyle.js":
/*!*********************************************************************************!*\
  !*** ./src/app/feature/catalogs/tags/tags-table.component.scss.shim.ngstyle.js ***!
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
var styles = [""];




/***/ }),

/***/ "./src/app/feature/catalogs/tags/tags-table.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/feature/catalogs/tags/tags-table.component.ts ***!
  \***************************************************************/
/*! exports provided: TagsTableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TagsTableComponent", function() { return TagsTableComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");

var TagsTableComponent = /** @class */ /*@__PURE__*/ (function () {
    function TagsTableComponent() {
        /** Table sorting columns */
        this.sort = [];
        /** Table sort event */
        this.sortChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /** Row edition event */
        this.editRow = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /** Row removal event */
        this.deleteRow = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /** Row restore event */
        this.restoreRow = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    return TagsTableComponent;
}());




/***/ }),

/***/ "./src/app/feature/catalogs/taxonomies/index.ts":
/*!******************************************************!*\
  !*** ./src/app/feature/catalogs/taxonomies/index.ts ***!
  \******************************************************/
/*! exports provided: TaxonomiesCatalogComponent, TaxonomiesTreeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _taxonomies_catalog_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./taxonomies-catalog.component */ "./src/app/feature/catalogs/taxonomies/taxonomies-catalog.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TaxonomiesCatalogComponent", function() { return _taxonomies_catalog_component__WEBPACK_IMPORTED_MODULE_0__["TaxonomiesCatalogComponent"]; });

/* harmony import */ var _taxonomies_tree_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./taxonomies-tree.component */ "./src/app/feature/catalogs/taxonomies/taxonomies-tree.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TaxonomiesTreeComponent", function() { return _taxonomies_tree_component__WEBPACK_IMPORTED_MODULE_1__["TaxonomiesTreeComponent"]; });






/***/ }),

/***/ "./src/app/feature/catalogs/taxonomies/taxonomies-catalog.component.ngfactory.js":
/*!***************************************************************************************!*\
  !*** ./src/app/feature/catalogs/taxonomies/taxonomies-catalog.component.ngfactory.js ***!
  \***************************************************************************************/
/*! exports provided: RenderType_TaxonomiesCatalogComponent, View_TaxonomiesCatalogComponent_0, View_TaxonomiesCatalogComponent_Host_0, TaxonomiesCatalogComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_TaxonomiesCatalogComponent", function() { return RenderType_TaxonomiesCatalogComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_TaxonomiesCatalogComponent_0", function() { return View_TaxonomiesCatalogComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_TaxonomiesCatalogComponent_Host_0", function() { return View_TaxonomiesCatalogComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaxonomiesCatalogComponentNgFactory", function() { return TaxonomiesCatalogComponentNgFactory; });
/* harmony import */ var _taxonomies_catalog_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./taxonomies-catalog.component.scss.shim.ngstyle */ "./src/app/feature/catalogs/taxonomies/taxonomies-catalog.component.scss.shim.ngstyle.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _taxonomies_tree_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./taxonomies-tree.component.ngfactory */ "./src/app/feature/catalogs/taxonomies/taxonomies-tree.component.ngfactory.js");
/* harmony import */ var _taxonomies_tree_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./taxonomies-tree.component */ "./src/app/feature/catalogs/taxonomies/taxonomies-tree.component.ts");
/* harmony import */ var _concrete_pagination_pagination_component_ngfactory__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../concrete/pagination/pagination.component.ngfactory */ "./src/concrete/pagination/pagination.component.ngfactory.js");
/* harmony import */ var _concrete_pagination_pagination_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../concrete/pagination/pagination.component */ "./src/concrete/pagination/pagination.component.ts");
/* harmony import */ var _shared_state_state_component_ngfactory__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../shared/state/state.component.ngfactory */ "./src/app/shared/state/state.component.ngfactory.js");
/* harmony import */ var _shared_state_state_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../shared/state/state.component */ "./src/app/shared/state/state.component.ts");
/* harmony import */ var _concrete_spinner_spinner_component_ngfactory__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../concrete/spinner/spinner.component.ngfactory */ "./src/concrete/spinner/spinner.component.ngfactory.js");
/* harmony import */ var _concrete_spinner_spinner_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../concrete/spinner/spinner.component */ "./src/concrete/spinner/spinner.component.ts");
/* harmony import */ var _core_services_manager_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../core/services/manager.service */ "./src/app/core/services/manager.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _taxonomies_catalog_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./taxonomies-catalog.component */ "./src/app/feature/catalogs/taxonomies/taxonomies-catalog.component.ts");
/* harmony import */ var _core_services_store_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../core/services/store.service */ "./src/app/core/services/store.service.ts");
/* harmony import */ var _core_auth_session_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../core/auth/session.service */ "./src/app/core/auth/session.service.ts");
/* harmony import */ var _concrete_dialog_dialog_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../../concrete/dialog/dialog.service */ "./src/concrete/dialog/dialog.service.ts");
/* harmony import */ var _concrete_toaster_toaster_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../../concrete/toaster/toaster.service */ "./src/concrete/toaster/toaster.service.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */
/** PURE_IMPORTS_START _taxonomies_catalog.component.scss.shim.ngstyle,_angular_core,_taxonomies_tree.component.ngfactory,_taxonomies_tree.component,_.._.._.._concrete_pagination_pagination.component.ngfactory,_.._.._.._concrete_pagination_pagination.component,_.._.._shared_state_state.component.ngfactory,_.._.._shared_state_state.component,_.._.._.._concrete_spinner_spinner.component.ngfactory,_.._.._.._concrete_spinner_spinner.component,_.._.._core_services_manager.service,_angular_router,_taxonomies_catalog.component,_.._.._core_services_store.service,_.._.._core_auth_session.service,_.._.._.._concrete_dialog_dialog.service,_.._.._.._concrete_toaster_toaster.service PURE_IMPORTS_END */
/** PURE_IMPORTS_START _taxonomies_catalog.component.scss.shim.ngstyle,_angular_core,_taxonomies_tree.component.ngfactory,_taxonomies_tree.component,_.._.._.._concrete_pagination_pagination.component.ngfactory,_.._.._.._concrete_pagination_pagination.component,_.._.._shared_state_state.component.ngfactory,_.._.._shared_state_state.component,_.._.._.._concrete_spinner_spinner.component.ngfactory,_.._.._.._concrete_spinner_spinner.component,_.._.._core_services_manager.service,_angular_router,_taxonomies_catalog.component,_.._.._core_services_store.service,_.._.._core_auth_session.service,_.._.._.._concrete_dialog_dialog.service,_.._.._.._concrete_toaster_toaster.service PURE_IMPORTS_END */

















var styles_TaxonomiesCatalogComponent = [_taxonomies_catalog_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];
var RenderType_TaxonomiesCatalogComponent = /*@__PURE__*/ /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({ encapsulation: 0, styles: styles_TaxonomiesCatalogComponent, data: {} });

function View_TaxonomiesCatalogComponent_0(_l) {
    return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 10, "section", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 2, "div", [], [[8, "hidden", 0]], null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 1, "app-taxonomies-tree", [], null, [[null, "expand"]], function (_v, en, $event) {
            var ad = true;
            var _co = _v.component;
            if (("expand" === en)) {
                var pd_0 = (_co.expand($event) !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, _taxonomies_tree_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_TaxonomiesTreeComponent_0"], _taxonomies_tree_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_TaxonomiesTreeComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](3, 49152, null, 0, _taxonomies_tree_component__WEBPACK_IMPORTED_MODULE_3__["TaxonomiesTreeComponent"], [], { nodes: [0, "nodes"] }, { expand: "expand" }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, null, 1, "cn-pagination", [], null, [[null, "pageChange"]], function (_v, en, $event) {
            var ad = true;
            var _co = _v.component;
            if (("pageChange" === en)) {
                var pd_0 = (_co.page($event) !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, _concrete_pagination_pagination_component_ngfactory__WEBPACK_IMPORTED_MODULE_4__["View_CnPaginationComponent_0"], _concrete_pagination_pagination_component_ngfactory__WEBPACK_IMPORTED_MODULE_4__["RenderType_CnPaginationComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](5, 49152, null, 0, _concrete_pagination_pagination_component__WEBPACK_IMPORTED_MODULE_5__["CnPaginationComponent"], [], { collection: [0, "collection"] }, { pageChange: "pageChange" }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](6, 0, null, null, 1, "app-state", [], null, null, null, _shared_state_state_component_ngfactory__WEBPACK_IMPORTED_MODULE_6__["View_StateComponent_0"], _shared_state_state_component_ngfactory__WEBPACK_IMPORTED_MODULE_6__["RenderType_StateComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](7, 49152, null, 0, _shared_state_state_component__WEBPACK_IMPORTED_MODULE_7__["StateComponent"], [], { state: [0, "state"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](8, 0, null, null, 2, "div", [["class", "backdrop"]], [[8, "hidden", 0]], null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](9, 0, null, null, 1, "cn-spinner", [], null, null, null, _concrete_spinner_spinner_component_ngfactory__WEBPACK_IMPORTED_MODULE_8__["View_CnSpinnerComponent_0"], _concrete_spinner_spinner_component_ngfactory__WEBPACK_IMPORTED_MODULE_8__["RenderType_CnSpinnerComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](10, 49152, null, 0, _concrete_spinner_spinner_component__WEBPACK_IMPORTED_MODULE_9__["CnSpinnerComponent"], [], null, null)], function (_ck, _v) { var _co = _v.component; var currVal_1 = _co.collection; _ck(_v, 3, 0, currVal_1); var currVal_2 = _co.collection; _ck(_v, 5, 0, currVal_2); var currVal_3 = _co.state; _ck(_v, 7, 0, currVal_3); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = ((_co.state == "empty") || (_co.state == "error")); _ck(_v, 1, 0, currVal_0); var currVal_4 = (_co.state != "pending"); _ck(_v, 8, 0, currVal_4); });
}
function View_TaxonomiesCatalogComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "app-taxonomies-catalog", [], null, null, null, View_TaxonomiesCatalogComponent_0, RenderType_TaxonomiesCatalogComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](131584, null, _core_services_manager_service__WEBPACK_IMPORTED_MODULE_10__["RequestManager"], _core_services_manager_service__WEBPACK_IMPORTED_MODULE_10__["RequestManager"], [_angular_router__WEBPACK_IMPORTED_MODULE_11__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_11__["ActivatedRoute"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 245760, null, 0, _taxonomies_catalog_component__WEBPACK_IMPORTED_MODULE_12__["TaxonomiesCatalogComponent"], [_core_services_store_service__WEBPACK_IMPORTED_MODULE_13__["StoreService"], _core_auth_session_service__WEBPACK_IMPORTED_MODULE_14__["SessionService"], _core_services_manager_service__WEBPACK_IMPORTED_MODULE_10__["RequestManager"], _concrete_dialog_dialog_service__WEBPACK_IMPORTED_MODULE_15__["CnDialog"], _concrete_toaster_toaster_service__WEBPACK_IMPORTED_MODULE_16__["CnToaster"]], null, null)], function (_ck, _v) { _ck(_v, 2, 0); }, null); }
var TaxonomiesCatalogComponentNgFactory = /*@__PURE__*/ /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("app-taxonomies-catalog", _taxonomies_catalog_component__WEBPACK_IMPORTED_MODULE_12__["TaxonomiesCatalogComponent"], View_TaxonomiesCatalogComponent_Host_0, { defaults: "defaults", bindings: "bindings" }, {}, []);




/***/ }),

/***/ "./src/app/feature/catalogs/taxonomies/taxonomies-catalog.component.scss.shim.ngstyle.js":
/*!***********************************************************************************************!*\
  !*** ./src/app/feature/catalogs/taxonomies/taxonomies-catalog.component.scss.shim.ngstyle.js ***!
  \***********************************************************************************************/
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
var styles = [""];




/***/ }),

/***/ "./src/app/feature/catalogs/taxonomies/taxonomies-catalog.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/feature/catalogs/taxonomies/taxonomies-catalog.component.ts ***!
  \*****************************************************************************/
/*! exports provided: TaxonomiesCatalogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaxonomiesCatalogComponent", function() { return TaxonomiesCatalogComponent; });
/* harmony import */ var app_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/core */ "./src/app/core/index.ts");
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

var TaxonomiesCatalogComponent = /** @class */ /*@__PURE__*/ (function (_super) {
    __extends(TaxonomiesCatalogComponent, _super);
    function TaxonomiesCatalogComponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /** This catalog storage path */
        _this.path = '/api/synapses/nodes';
        /** Query bindings for requests */
        _this.bindings = {
            type: ['synapses', 'tags'],
            sort: ['name'],
            with: ['childs']
        };
        return _this;
    }
    /**
     * Expand a synapse node with its children.
     *
     * @param node      Synapse model
     */
    TaxonomiesCatalogComponent.prototype.expand = function (node) {
        if (node.child_count < 1 || node.childs) {
            return;
        }
        this.store.query(this.path + "/" + node.id, {
            type: 'synapses', sort: ['name']
        }).subscribe(function (nodes) {
            setTimeout(function () {
                node.childs = [];
                nodes.forEach(function (child) {
                    node.childs.push(child);
                });
            }, 200);
        });
    };
    return TaxonomiesCatalogComponent;
}(app_core__WEBPACK_IMPORTED_MODULE_0__["CatalogComponent"]));




/***/ }),

/***/ "./src/app/feature/catalogs/taxonomies/taxonomies-tree.component.ngfactory.js":
/*!************************************************************************************!*\
  !*** ./src/app/feature/catalogs/taxonomies/taxonomies-tree.component.ngfactory.js ***!
  \************************************************************************************/
/*! exports provided: RenderType_TaxonomiesTreeComponent, View_TaxonomiesTreeComponent_0, View_TaxonomiesTreeComponent_Host_0, TaxonomiesTreeComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_TaxonomiesTreeComponent", function() { return RenderType_TaxonomiesTreeComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_TaxonomiesTreeComponent_0", function() { return View_TaxonomiesTreeComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_TaxonomiesTreeComponent_Host_0", function() { return View_TaxonomiesTreeComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaxonomiesTreeComponentNgFactory", function() { return TaxonomiesTreeComponentNgFactory; });
/* harmony import */ var _taxonomies_tree_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./taxonomies-tree.component.scss.shim.ngstyle */ "./src/app/feature/catalogs/taxonomies/taxonomies-tree.component.scss.shim.ngstyle.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _concrete_spinner_spinner_component_ngfactory__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../concrete/spinner/spinner.component.ngfactory */ "./src/concrete/spinner/spinner.component.ngfactory.js");
/* harmony import */ var _concrete_spinner_spinner_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../concrete/spinner/spinner.component */ "./src/concrete/spinner/spinner.component.ts");
/* harmony import */ var _concrete_details_details_component_ngfactory__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../concrete/details/details.component.ngfactory */ "./src/concrete/details/details.component.ngfactory.js");
/* harmony import */ var _concrete_details_details_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../concrete/details/details.component */ "./src/concrete/details/details.component.ts");
/* harmony import */ var _concrete_details_summary_component_ngfactory__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../concrete/details/summary.component.ngfactory */ "./src/concrete/details/summary.component.ngfactory.js");
/* harmony import */ var _concrete_details_summary_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../concrete/details/summary.component */ "./src/concrete/details/summary.component.ts");
/* harmony import */ var _taxonomies_tree_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./taxonomies-tree.component */ "./src/app/feature/catalogs/taxonomies/taxonomies-tree.component.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */
/** PURE_IMPORTS_START _taxonomies_tree.component.scss.shim.ngstyle,_angular_core,_angular_router,_angular_common,_.._.._.._concrete_spinner_spinner.component.ngfactory,_.._.._.._concrete_spinner_spinner.component,_.._.._.._concrete_details_details.component.ngfactory,_.._.._.._concrete_details_details.component,_.._.._.._concrete_details_summary.component.ngfactory,_.._.._.._concrete_details_summary.component,_taxonomies_tree.component PURE_IMPORTS_END */
/** PURE_IMPORTS_START _taxonomies_tree.component.scss.shim.ngstyle,_angular_core,_angular_router,_angular_common,_.._.._.._concrete_spinner_spinner.component.ngfactory,_.._.._.._concrete_spinner_spinner.component,_.._.._.._concrete_details_details.component.ngfactory,_.._.._.._concrete_details_details.component,_.._.._.._concrete_details_summary.component.ngfactory,_.._.._.._concrete_details_summary.component,_taxonomies_tree.component PURE_IMPORTS_END */











var styles_TaxonomiesTreeComponent = [_taxonomies_tree_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];
var RenderType_TaxonomiesTreeComponent = /*@__PURE__*/ /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({ encapsulation: 0, styles: styles_TaxonomiesTreeComponent, data: {} });

function View_TaxonomiesTreeComponent_2(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 0, null, null, null, null, null, null, null))], null, null); }
function View_TaxonomiesTreeComponent_6(_l) {
    return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 7, null, null, null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 6, "span", [["class", "node-summary"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 3, "a", [["class", "tree-node"]], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) {
            var ad = true;
            if (("click" === en)) {
                var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 3).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](3, 671744, null, 0, _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["LocationStrategy"]], { routerLink: [0, "routerLink"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpad"](4, 2), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](5, null, [" ", " "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](6, 0, null, null, 1, "span", [["class", "node-slug"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](7, null, ["", ""]))], function (_ck, _v) { var currVal_2 = _ck(_v, 4, 0, "/synapses", _v.parent.context.$implicit.slug); _ck(_v, 3, 0, currVal_2); }, function (_ck, _v) { var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 3).target; var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 3).href; _ck(_v, 2, 0, currVal_0, currVal_1); var currVal_3 = _v.parent.context.$implicit.name; _ck(_v, 5, 0, currVal_3); var currVal_4 = _v.parent.context.$implicit.slug; _ck(_v, 7, 0, currVal_4); });
}
function View_TaxonomiesTreeComponent_8(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 0, null, null, null, null, null, null, null))], null, null); }
function View_TaxonomiesTreeComponent_9(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 5, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 4, "span", [["class", "node-spinner"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 1, "cn-spinner", [], null, null, null, _concrete_spinner_spinner_component_ngfactory__WEBPACK_IMPORTED_MODULE_4__["View_CnSpinnerComponent_0"], _concrete_spinner_spinner_component_ngfactory__WEBPACK_IMPORTED_MODULE_4__["RenderType_CnSpinnerComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](3, 49152, null, 0, _concrete_spinner_spinner_component__WEBPACK_IMPORTED_MODULE_5__["CnSpinnerComponent"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, null, 1, "span", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Loading"]))], null, null); }
function View_TaxonomiesTreeComponent_7(_l) {
    return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 17, null, null, null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 16, "cn-details", [], null, [[null, "toggle"]], function (_v, en, $event) {
            var ad = true;
            var _co = _v.component;
            if (("toggle" === en)) {
                var pd_0 = (_co.toggle(_v.parent.context.$implicit, $event) !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, _concrete_details_details_component_ngfactory__WEBPACK_IMPORTED_MODULE_6__["View_CnDetailsComponent_0"], _concrete_details_details_component_ngfactory__WEBPACK_IMPORTED_MODULE_6__["RenderType_CnDetailsComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 49152, null, 0, _concrete_details_details_component__WEBPACK_IMPORTED_MODULE_7__["CnDetailsComponent"], [], { setOpen: [0, "setOpen"] }, { toggleEvent: "toggle" }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, 0, 9, "cn-summary", [], null, null, null, _concrete_details_summary_component_ngfactory__WEBPACK_IMPORTED_MODULE_8__["View_CnSummaryComponent_0"], _concrete_details_summary_component_ngfactory__WEBPACK_IMPORTED_MODULE_8__["RenderType_CnSummaryComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](4, 49152, null, 0, _concrete_details_summary_component__WEBPACK_IMPORTED_MODULE_9__["CnSummaryComponent"], [_concrete_details_details_component__WEBPACK_IMPORTED_MODULE_7__["CnDetailsComponent"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](5, 0, null, 0, 7, "span", [["class", "node-summary"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](6, 0, null, null, 4, "a", [["class", "tree-node"]], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) {
            var ad = true;
            if (("click" === en)) {
                var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 7).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](7, 671744, null, 0, _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["LocationStrategy"]], { routerLink: [0, "routerLink"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpad"](8, 2), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](9, 0, null, null, 1, "strong", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](10, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](11, 0, null, null, 1, "span", [["class", "node-slug"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](12, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, 1, 2, null, View_TaxonomiesTreeComponent_8)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](14, 540672, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgTemplateOutlet"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"]], { ngTemplateOutletContext: [0, "ngTemplateOutletContext"], ngTemplateOutlet: [1, "ngTemplateOutlet"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpod"](15, { $implicit: 0 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, 1, 1, null, View_TaxonomiesTreeComponent_9)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](17, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var currVal_0 = _v.parent.context.$implicit.childs; _ck(_v, 2, 0, currVal_0); var currVal_3 = _ck(_v, 8, 0, "/synapses", _v.parent.context.$implicit.slug); _ck(_v, 7, 0, currVal_3); var currVal_6 = _ck(_v, 15, 0, _v.parent.context.$implicit.childs); var currVal_7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v.parent.parent.parent.parent, 4); _ck(_v, 14, 0, currVal_6, currVal_7); var currVal_8 = !_v.parent.context.$implicit.childs; _ck(_v, 17, 0, currVal_8); }, function (_ck, _v) { var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 7).target; var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 7).href; _ck(_v, 6, 0, currVal_1, currVal_2); var currVal_4 = _v.parent.context.$implicit.name; _ck(_v, 10, 0, currVal_4); var currVal_5 = _v.parent.context.$implicit.slug; _ck(_v, 12, 0, currVal_5); });
}
function View_TaxonomiesTreeComponent_5(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 6, "li", [["class", "synapses-node"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgClass"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["KeyValueDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], { klass: [0, "klass"], ngClass: [1, "ngClass"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpod"](2, { "root-node": 0 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_TaxonomiesTreeComponent_6)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](4, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_TaxonomiesTreeComponent_7)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](6, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var currVal_0 = "synapses-node"; var currVal_1 = _ck(_v, 2, 0, !_v.context.$implicit.synapse_id); _ck(_v, 1, 0, currVal_0, currVal_1); var currVal_2 = !_v.context.$implicit.child_count; _ck(_v, 4, 0, currVal_2); var currVal_3 = _v.context.$implicit.child_count; _ck(_v, 6, 0, currVal_3); }, null); }
function View_TaxonomiesTreeComponent_4(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "ul", [["class", "synapses-tree"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_TaxonomiesTreeComponent_5)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"]], { ngForOf: [0, "ngForOf"] }, null)], function (_ck, _v) { var currVal_0 = _v.parent.context.$implicit; _ck(_v, 2, 0, currVal_0); }, null); }
function View_TaxonomiesTreeComponent_3(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_TaxonomiesTreeComponent_4)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](0, null, null, 0))], function (_ck, _v) { var currVal_0 = _v.context.$implicit; _ck(_v, 1, 0, currVal_0); }, null); }
function View_TaxonomiesTreeComponent_1(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 4, "div", [["class", "synapses-taxonomy"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 2, null, View_TaxonomiesTreeComponent_2)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 540672, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgTemplateOutlet"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"]], { ngTemplateOutletContext: [0, "ngTemplateOutletContext"], ngTemplateOutlet: [1, "ngTemplateOutlet"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpod"](3, { $implicit: 0 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](0, [["tree", 2]], null, 0, null, View_TaxonomiesTreeComponent_3))], function (_ck, _v) { var _co = _v.component; var currVal_0 = _ck(_v, 3, 0, _co.nodes); var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 4); _ck(_v, 2, 0, currVal_0, currVal_1); }, null); }
function View_TaxonomiesTreeComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_TaxonomiesTreeComponent_1)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.nodes; _ck(_v, 1, 0, currVal_0); }, null); }
function View_TaxonomiesTreeComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "app-taxonomies-tree", [], null, null, null, View_TaxonomiesTreeComponent_0, RenderType_TaxonomiesTreeComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 49152, null, 0, _taxonomies_tree_component__WEBPACK_IMPORTED_MODULE_10__["TaxonomiesTreeComponent"], [], null, null)], null, null); }
var TaxonomiesTreeComponentNgFactory = /*@__PURE__*/ /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("app-taxonomies-tree", _taxonomies_tree_component__WEBPACK_IMPORTED_MODULE_10__["TaxonomiesTreeComponent"], View_TaxonomiesTreeComponent_Host_0, { nodes: "nodes" }, { expand: "expand", collapse: "collapse" }, []);




/***/ }),

/***/ "./src/app/feature/catalogs/taxonomies/taxonomies-tree.component.scss.shim.ngstyle.js":
/*!********************************************************************************************!*\
  !*** ./src/app/feature/catalogs/taxonomies/taxonomies-tree.component.scss.shim.ngstyle.js ***!
  \********************************************************************************************/
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
var styles = ["@charset \"UTF-8\";\n.node-spinner[_ngcontent-%COMP%] {\n  display: inline-block;\n  margin-left: 1.5rem;\n  padding: .8rem;\n  color: #dddddd; }\n.node-spinner[_ngcontent-%COMP%]     .fa {\n    font-size: 1.3rem; }\n.synapses-tree[_ngcontent-%COMP%] {\n  list-style: none;\n  padding: 0; }\n.synapses-tree[_ngcontent-%COMP%]   .synapses-tree[_ngcontent-%COMP%] {\n    padding-left: 1rem;\n    border-left: 1px dotted #999999;\n    margin-left: .75rem; }\n.synapses-tree[_ngcontent-%COMP%]   .synapses-node[_ngcontent-%COMP%]    > .node-summary[_ngcontent-%COMP%] {\n    margin-left: 1.5rem; }\n.synapses-tree[_ngcontent-%COMP%]   .root-node[_ngcontent-%COMP%]    > .node-summary[_ngcontent-%COMP%]:first-child   a[_ngcontent-%COMP%] {\n    font-weight: 600; }\n.synapses-tree[_ngcontent-%COMP%]   .node-summary[_ngcontent-%COMP%] {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    padding: .8rem; }\n.synapses-tree[_ngcontent-%COMP%]   .node-summary[_ngcontent-%COMP%]:hover {\n    background: whitesmoke; }\n.synapses-tree[_ngcontent-%COMP%]   .node-slug[_ngcontent-%COMP%] {\n    font-size: .8rem;\n    padding: .07rem .5rem;\n    color: white;\n    background: #999999;\n    border-radius: 1rem;\n    font-weight: 600; }\n@media (max-width: 767.98px) {\n      .synapses-tree[_ngcontent-%COMP%]   .node-slug[_ngcontent-%COMP%] {\n        display: none; } }\n.synapses-tree[_ngcontent-%COMP%]     .cn-details-header {\n    display: flex;\n    flex-direction: row-reverse;\n    justify-content: space-between;\n    align-items: center;\n    cursor: pointer; }\n.synapses-tree[_ngcontent-%COMP%]     .cn-details-header .cn-details-marker {\n      display: inline-block;\n      font-size: .9rem;\n      width: 1rem;\n      margin-left: .5rem; }\n.synapses-tree[_ngcontent-%COMP%]     .cn-details.open .cn-details-marker i:before {\n    content: \"\uF068\" !important; }\n.synapses-tree[_ngcontent-%COMP%]     .cn-details.closed .cn-details-marker i:before {\n    content: \"\uF067\" !important; }\n@media (max-width: 991.98px) {\n  .synapses-taxonomy[_ngcontent-%COMP%] {\n    font-size: 90%; } }"];




/***/ }),

/***/ "./src/app/feature/catalogs/taxonomies/taxonomies-tree.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/feature/catalogs/taxonomies/taxonomies-tree.component.ts ***!
  \**************************************************************************/
/*! exports provided: TaxonomiesTreeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaxonomiesTreeComponent", function() { return TaxonomiesTreeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");

var TaxonomiesTreeComponent = /** @class */ /*@__PURE__*/ (function () {
    /**
     * Component constructor.
     */
    function TaxonomiesTreeComponent() {
        this.expand = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.collapse = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    /**
     * Toggle a node.
     */
    TaxonomiesTreeComponent.prototype.toggle = function (node, open) {
        (open === true) ?
            this.expand.emit(node) :
            this.collapse.emit(node);
    };
    return TaxonomiesTreeComponent;
}());




/***/ }),

/***/ "./src/app/shared/striptags.pipe.ts":
/*!******************************************!*\
  !*** ./src/app/shared/striptags.pipe.ts ***!
  \******************************************/
/*! exports provided: StripTagsPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StripTagsPipe", function() { return StripTagsPipe; });
var StripTagsPipe = /** @class */ /*@__PURE__*/ (function () {
    function StripTagsPipe() {
    }
    /**
     * Strips HTML tags from a string.
     *
     * @param value     String to transform
     * @returns         String with tags stripped.
     */
    StripTagsPipe.prototype.transform = function (value) {
        return value ? value.replace(/(<[^>]*>)/ig, '') : null;
    };
    return StripTagsPipe;
}());




/***/ }),

/***/ "./src/concrete/breadcrumb/breadcrumb.component.ngfactory.js":
/*!*******************************************************************!*\
  !*** ./src/concrete/breadcrumb/breadcrumb.component.ngfactory.js ***!
  \*******************************************************************/
/*! exports provided: RenderType_CnBreadcrumbComponent, View_CnBreadcrumbComponent_0, View_CnBreadcrumbComponent_Host_0, CnBreadcrumbComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_CnBreadcrumbComponent", function() { return RenderType_CnBreadcrumbComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_CnBreadcrumbComponent_0", function() { return View_CnBreadcrumbComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_CnBreadcrumbComponent_Host_0", function() { return View_CnBreadcrumbComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CnBreadcrumbComponentNgFactory", function() { return CnBreadcrumbComponentNgFactory; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _breadcrumb_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./breadcrumb.component */ "./src/concrete/breadcrumb/breadcrumb.component.ts");
/* harmony import */ var _breadcrumb_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./breadcrumb.service */ "./src/concrete/breadcrumb/breadcrumb.service.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */
/** PURE_IMPORTS_START _angular_core,_angular_router,_angular_common,_breadcrumb.component,_breadcrumb.service PURE_IMPORTS_END */
/** PURE_IMPORTS_START _angular_core,_angular_router,_angular_common,_breadcrumb.component,_breadcrumb.service PURE_IMPORTS_END */





var styles_CnBreadcrumbComponent = [];
var RenderType_CnBreadcrumbComponent = /*@__PURE__*/ /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcrt"]({ encapsulation: 2, styles: styles_CnBreadcrumbComponent, data: {} });

function View_CnBreadcrumbComponent_2(_l) {
    return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 7, "li", [["class", "breadcrumb-item"], ["routerLinkActive", "active"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 1720320, null, 2, _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkActive"], [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]], { routerLinkActiveOptions: [0, "routerLinkActiveOptions"], routerLinkActive: [1, "routerLinkActive"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵqud"](603979776, 1, { links: 1 }), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵqud"](603979776, 2, { linksWithHrefs: 1 }), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵpod"](4, { exact: 0 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](5, 0, null, null, 2, "a", [], [[8, "title", 0], [1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) {
            var ad = true;
            if (("click" === en)) {
                var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 6).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](6, 671744, [[2, 4]], 0, _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["LocationStrategy"]], { routerLink: [0, "routerLink"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](7, null, [" ", " "]))], function (_ck, _v) { var currVal_0 = _ck(_v, 4, 0, true); var currVal_1 = "active"; _ck(_v, 1, 0, currVal_0, currVal_1); var currVal_5 = _v.parent.context.$implicit.href; _ck(_v, 6, 0, currVal_5); }, function (_ck, _v) { var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵinlineInterpolate"](1, "Back: ", _v.parent.context.$implicit.title, ""); var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 6).target; var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 6).href; _ck(_v, 5, 0, currVal_2, currVal_3, currVal_4); var currVal_6 = _v.parent.context.$implicit.title; _ck(_v, 7, 0, currVal_6); });
}
function View_CnBreadcrumbComponent_1(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 2, null, null, null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_CnBreadcrumbComponent_2)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](2, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](0, null, null, 0))], function (_ck, _v) { var currVal_0 = _v.context.$implicit["title"]; _ck(_v, 2, 0, currVal_0); }, null); }
function View_CnBreadcrumbComponent_0(_l) {
    return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 7, "nav", [["aria-label", "Breadcrumb"], ["role", "navigation"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](1, 0, null, null, 6, "ol", [["class", "breadcrumb"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](2, 0, null, null, 3, "li", [["class", "breadcrumb-item"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](3, 0, null, null, 2, "a", [["routerLink", ""], ["title", "Back: Home"]], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) {
            var ad = true;
            if (("click" === en)) {
                var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 4).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](4, 671744, null, 0, _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["LocationStrategy"]], { routerLink: [0, "routerLink"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, [" Home "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_CnBreadcrumbComponent_1)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](7, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["IterableDiffers"]], { ngForOf: [0, "ngForOf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_2 = ""; _ck(_v, 4, 0, currVal_2); var currVal_3 = _co.breadcrumb; _ck(_v, 7, 0, currVal_3); }, function (_ck, _v) { var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 4).target; var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 4).href; _ck(_v, 3, 0, currVal_0, currVal_1); });
}
function View_CnBreadcrumbComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 1, "cn-breadcrumb", [], null, null, null, View_CnBreadcrumbComponent_0, RenderType_CnBreadcrumbComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 245760, null, 0, _breadcrumb_component__WEBPACK_IMPORTED_MODULE_3__["CnBreadcrumbComponent"], [_breadcrumb_service__WEBPACK_IMPORTED_MODULE_4__["CnBreadcrumbService"]], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var CnBreadcrumbComponentNgFactory = /*@__PURE__*/ /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵccf"]("cn-breadcrumb", _breadcrumb_component__WEBPACK_IMPORTED_MODULE_3__["CnBreadcrumbComponent"], View_CnBreadcrumbComponent_Host_0, {}, {}, []);




/***/ }),

/***/ "./src/concrete/breadcrumb/breadcrumb.component.ts":
/*!*********************************************************!*\
  !*** ./src/concrete/breadcrumb/breadcrumb.component.ts ***!
  \*********************************************************/
/*! exports provided: CnBreadcrumbComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CnBreadcrumbComponent", function() { return CnBreadcrumbComponent; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");

var CnBreadcrumbComponent = /** @class */ /*@__PURE__*/ (function () {
    /**
     * Component constructor.
     */
    function CnBreadcrumbComponent(service) {
        this.service = service;
        /** Breadcrumb for the active route */
        this.breadcrumb = [];
        /** Unsubscribe subject */
        this.unsubscribe = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
    }
    /**
     * Component initialization method.
     */
    CnBreadcrumbComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.service.breadcrumb
            .takeUntil(this.unsubscribe)
            .subscribe(function (breadcrumb) {
            _this.breadcrumb = breadcrumb;
        });
    };
    /**
     * Component destructor.
     */
    CnBreadcrumbComponent.prototype.ngOnDestroy = function () {
        this.unsubscribe.next();
        this.unsubscribe.complete();
    };
    return CnBreadcrumbComponent;
}());




/***/ })

}]);
//# sourceMappingURL=app-feature-catalogs-catalogs-module-ngfactory.js.map