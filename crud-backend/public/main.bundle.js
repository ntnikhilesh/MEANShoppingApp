webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<app-shopping-item></app-shopping-item>"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__data_service_service__ = __webpack_require__("../../../../../src/app/data-service.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shopping_item_shopping_item_component__ = __webpack_require__("../../../../../src/app/shopping-item/shopping-item.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["E" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_6__shopping_item_shopping_item_component__["a" /* ShoppingItemComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormsModule */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_4__data_service_service__["a" /* DataServiceService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/data-service.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataServiceService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DataServiceService = (function () {
    function DataServiceService(http) {
        this.http = http;
    }
    DataServiceService.prototype.getShoppingItems = function () {
        return this.http.get('api/get_items')
            .map(function (res) { return res.json(); });
    };
    DataServiceService.prototype.addShoppingItems = function (newItem) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('api/add_items', newItem, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    DataServiceService.prototype.deleteItems = function (id) {
        return this.http.delete('api/delete_item/' + id)
            .map(function (res) { return res.json(); });
    };
    DataServiceService.prototype.updateShoppingItems = function (id, newItem) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        return this.http.put('api/update_item/' + id, newItem, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    DataServiceService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], DataServiceService);
    return DataServiceService;
}());



/***/ }),

/***/ "../../../../../src/app/shopping-item/shopping-item.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/shopping-item/shopping-item.component.html":
/***/ (function(module, exports) {

module.exports = "<form #frm='ngForm' (ngSubmit)='addItem(frm)' *ngIf='!toogleEditForm'>\n  <h2>Add Item</h2>\n  <div class=\"form-group\">\n    <label for=''>\n      Name:\n    </label>\n    <input type=\"text\" class=\"form-control\" name='itemName' value=\"\" ngModel required>\n  </div>\n  <div class=\"form-group\">\n      <label for=''>\n        Quantity:\n      </label>\n      <input type=\"number\" class=\"form-control\" name='itemQuantity' value=\"\" ngModel required>\n    </div>\n    <button type=\"submit\" name='button' class=\"btn btn-success\" [disabled]=frm.invalid>Add Item</button>\n</form>\n\n<form #editfrm='ngForm' (ngSubmit)='updateItem(editfrm)' *ngIf='toogleEditForm'>\n    <h2>Edit Item</h2>\n    <div class=\"form-group\">\n      <label for=''>\n        Name:\n      </label>\n      <input type=\"text\" class=\"form-control\" name='itemName' value=\"\" [ngModel]='selectedItem.itemName'  required>\n    </div>\n    <div class=\"form-group\">\n        <label for=''>\n          Quantity:\n        </label>\n        <input type=\"number\" class=\"form-control\" name='itemQuantity'  [ngModel]='selectedItem.itemQuantity' value=\"\" required>\n      </div>\n      <button type=\"submit\" name='button' class=\"btn btn-success\" [disabled]=editfrm.invalid>Update Item</button>\n  </form>\n\n<h2>Shopping List</h2>\n<div class=\"row\">\n  <div *ngFor='let item of shoppingItemList'>\n    <div class=\"col-md-1\">\n        <input type=\"checkbox\" [checked]='item.itemBought' (click)='updateItemCheckBox(item)'>\n    </div>\n    <div class=\"col-md-3\">\n      {{item.itemName}}\n    </div>\n    <div class=\"col-md-2\">\n      {{item.itemQuantity}}\n    </div>\n    <div class=\"col-md-3\">\n      <button type=\"button\" name=\"button\" class=\"btn btn-primary\" (click)='showEditForm(item)' [disabled]='toogleEditForm'>Edit</button>\n    </div>\n    <div class=\"col-md-3\">\n      <button type=\"button\" name=\"button\" class=\"btn btn-danger\" (click)='deleteItems(item._id)'>Delete</button>\n    </div>\n    <br><br>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/shopping-item/shopping-item.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShoppingItemComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__data_service_service__ = __webpack_require__("../../../../../src/app/data-service.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ShoppingItemComponent = (function () {
    function ShoppingItemComponent(dataService) {
        this.dataService = dataService;
        this.toogleEditForm = false;
    }
    ShoppingItemComponent.prototype.ngOnInit = function () {
        this.getItems();
    };
    ShoppingItemComponent.prototype.addItem = function (form) {
        var _this = this;
        console.log(form.value);
        var obj = {};
        obj['itemName'] = form.value.itemName;
        obj['itemQuantity'] = form.value.itemQuantity;
        obj['itemBought'] = false;
        console.log(obj);
        this.dataService.addShoppingItems(obj).subscribe(function (items) {
            console.log('Data added succussfully...:', items);
            _this.getItems();
        });
    };
    ShoppingItemComponent.prototype.getItems = function () {
        var _this = this;
        this.dataService.getShoppingItems().subscribe(function (items) {
            _this.shoppingItemList = items;
            console.log('data from data service:', _this.shoppingItemList);
        });
    };
    ShoppingItemComponent.prototype.deleteItems = function (id) {
        var _this = this;
        this.dataService.deleteItems(id).subscribe(function (result) {
            console.log('data deleted succ:', result);
            _this.getItems();
            if (result.n == '1') {
                // this.getItems();
                console.log('show final item');
            }
        });
    };
    ShoppingItemComponent.prototype.showEditForm = function (selectedItem) {
        this.selectedItem = selectedItem;
        this.toogleEditForm = true;
    };
    ShoppingItemComponent.prototype.updateItem = function (form) {
        var _this = this;
        console.log(form.value);
        console.log(this.selectedItem);
        var obj = {};
        obj['id'] = this.selectedItem._id;
        obj['itemName'] = form.value.itemName;
        obj['itemQuantity'] = form.value.itemQuantity;
        obj['itemBought'] = false;
        console.log(obj);
        this.dataService.updateShoppingItems(this.selectedItem._id, obj).subscribe(function (items) {
            console.log('Data updated succussfully...:', items);
            _this.getItems();
        });
        this.toogleEditForm = !this.toogleEditForm;
    };
    ShoppingItemComponent.prototype.updateItemCheckBox = function (item) {
        var _this = this;
        console.log(item);
        item.itemBought = !item.itemBought;
        console.log(item);
        this.dataService.updateShoppingItems(item._id, item).subscribe(function (items) {
            console.log('Checkbox updated succussfully...:', items);
            _this.getItems();
        });
    };
    ShoppingItemComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-shopping-item',
            template: __webpack_require__("../../../../../src/app/shopping-item/shopping-item.component.html"),
            styles: [__webpack_require__("../../../../../src/app/shopping-item/shopping-item.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__data_service_service__["a" /* DataServiceService */]])
    ], ShoppingItemComponent);
    return ShoppingItemComponent;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_7" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map