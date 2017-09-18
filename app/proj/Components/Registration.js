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
var RegistrationComponent = /** @class */ (function () {
    function RegistrationComponent() {
    }
    RegistrationComponent.prototype.ngOnInit = function () {
        this.regForm = new forms_1.FormGroup({
            firstName: new forms_1.FormControl("", [forms_1.Validators.required, forms_1.Validators.pattern("^[a-zA-Z]*$")]),
            lastName: new forms_1.FormControl("", [forms_1.Validators.required, forms_1.Validators.pattern("^[a-zA-Z]*$")]),
            contactNo: new forms_1.FormControl("", [forms_1.Validators.required, forms_1.Validators.pattern("^[0-9]*$"), forms_1.Validators.maxLength(10)]),
            email: new forms_1.FormControl("", [forms_1.Validators.required, forms_1.Validators.email]),
            password: new forms_1.FormControl("", [forms_1.Validators.required, forms_1.Validators.minLength(5)]),
            repassword: new forms_1.FormControl("", [forms_1.Validators.required, forms_1.Validators.minLength(5)])
        });
    };
    RegistrationComponent.prototype.InvalidMessage = function () {
        return (this.regForm.controls.firstName.invalid && this.regForm.controls.firstName.touched);
    };
    RegistrationComponent.prototype.InvalidMessageLname = function () {
        return (this.regForm.controls.lastName.invalid && this.regForm.controls.lastName.touched);
    };
    RegistrationComponent.prototype.InvalidContact = function () {
        return this.regForm.controls.contactNo.invalid && this.regForm.controls.contactNo.touched;
    };
    RegistrationComponent.prototype.InvalidEmail = function () {
        return this.regForm.controls.email.invalid && this.regForm.controls.email.touched;
    };
    RegistrationComponent.prototype.InvalidPassword = function () {
        return this.regForm.controls.password.invalid && this.regForm.controls.password.touched;
    };
    RegistrationComponent.prototype.PasswordMatch = function () {
        if (this.regForm.controls.repassword.value)
            return (this.regForm.controls.password.value != this.regForm.controls.repassword.value);
        return false;
    };
    RegistrationComponent.prototype.submit = function (form) {
        console.log(form);
        if (this.regForm.valid) {
            this.msg = "successfully Registered";
            this.msg = "First Name:" + this.regForm.controls.firstName.value +
                "Last Name:" + this.regForm.controls.lastName +
                "Contact No.:" + this.regForm.controls.contactNo +
                "Email:" + this.regForm.controls.email +
                "Password:" + this.regForm.controls.password +
                "Confirm Password:" + this.regForm.controls.repassword;
        }
    };
    RegistrationComponent = __decorate([
        core_1.Component({
            selector: "Registration",
            templateUrl: "./src/proj/Template/Registration.html"
        })
    ], RegistrationComponent);
    return RegistrationComponent;
}());
exports.RegistrationComponent = RegistrationComponent;
//# sourceMappingURL=Registration.js.map