"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var forms_1 = require("@angular/forms");
var platform_browser_1 = require("@angular/platform-browser");
var ng_bootstrap_1 = require("@ng-bootstrap/ng-bootstrap");
var Home_1 = require("./Components/Home");
var Registration_1 = require("./Components/Registration");
var Routing_1 = require("./Routes/Routing");
var SignIn_1 = require("./Components/SignIn");
var Contact_1 = require("./Components/Contact");
var Menu_1 = require("./Components/Menu");
var FileUpload_1 = require("./Components/FileUpload");
var Transaction_1 = require("./Components/Transaction");
var FundTransfer_1 = require("./Components/FundTransfer");
var http_1 = require("@angular/http");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            exports: [platform_browser_1.BrowserModule],
            imports: [ng_bootstrap_1.NgbModule.forRoot(), Routing_1.RouterComponent, forms_1.FormsModule, forms_1.ReactiveFormsModule, common_1.CommonModule, http_1.HttpModule],
            bootstrap: [Home_1.HomeComponent],
            declarations: [Home_1.HomeComponent, Registration_1.RegistrationComponent, SignIn_1.SignInComponent, Contact_1.ContactComponent, Menu_1.MenuComponent, FileUpload_1.FileUploadComponent, Transaction_1.TransactionComponent, FundTransfer_1.FundTransferComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=module.js.map