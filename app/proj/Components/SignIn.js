"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var SignInComponent = /** @class */ (function () {
    function SignInComponent() {
    }
    SignInComponent.prototype.ngOnInit = function () {
        this.regForm = new forms_1.FormGroup({
            email: new forms_1.FormControl("", [forms_1.Validators.required, forms_1.Validators.email]),
            password: new forms_1.FormControl("", [forms_1.Validators.required, forms_1.Validators.minLength(5)])
        });
    };
    SignInComponent.prototype.InvalidEmail = function () {
        return this.regForm.controls.email.invalid && this.regForm.controls.email.touched;
    };
    SignInComponent.prototype.InvalidPassword = function () {
        return this.regForm.controls.password.invalid && this.regForm.controls.password.touched;
    };
    SignInComponent = __decorate([
        core_1.Component({
            selector: 'SignIn',
            templateUrl: './src/proj/Template/SignIn.html'
        })
    ], SignInComponent);
    return SignInComponent;
}());
exports.SignInComponent = SignInComponent;
//# sourceMappingURL=SignIn.js.map