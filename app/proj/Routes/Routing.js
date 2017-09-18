"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var Registration_1 = require("../Components/Registration");
var SignIn_1 = require("../Components/SignIn");
var Contact_1 = require("../Components/Contact");
var Menu_1 = require("../Components/Menu");
var FileUpload_1 = require("../Components/FileUpload");
var Transaction_1 = require("../Components/Transaction");
var FundTransfer_1 = require("../Components/FundTransfer");
var route = [
    {
        path: "reg",
        component: Registration_1.RegistrationComponent
    },
    {
        path: "signIn",
        component: SignIn_1.SignInComponent
    },
    {
        path: "contact",
        component: Contact_1.ContactComponent
    },
    {
        path: "menu",
        component: Menu_1.MenuComponent,
        children: [
            {
                path: "Registration",
                component: Registration_1.RegistrationComponent,
                outlet: "menu"
            },
            {
                path: "contact",
                component: Contact_1.ContactComponent,
                outlet: "menu"
            }
        ]
    },
    {
        path: "fileUpload",
        component: FileUpload_1.FileUploadComponent
    },
    {
        path: "transaction",
        component: Transaction_1.TransactionComponent
    },
    {
        path: "FundTransfer",
        component: FundTransfer_1.FundTransferComponent
    }
];
var RouterComponent = /** @class */ (function () {
    function RouterComponent() {
    }
    RouterComponent = __decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forRoot(route)],
            exports: [router_1.RouterModule]
        })
    ], RouterComponent);
    return RouterComponent;
}());
exports.RouterComponent = RouterComponent;
//# sourceMappingURL=Routing.js.map