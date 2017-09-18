import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms"

@Component({
    selector: "Registration",
    templateUrl: "./src/proj/Template/Registration.html"
})

export class RegistrationComponent implements OnInit {
    regForm: FormGroup;
    msg: string;
    ngOnInit() {
        this.regForm = new FormGroup({
            firstName: new FormControl("", [Validators.required, Validators.pattern("^[a-zA-Z]*$")]),
            lastName: new FormControl("", [Validators.required, Validators.pattern("^[a-zA-Z]*$")]),
            contactNo: new FormControl("", [Validators.required, Validators.pattern("^[0-9]*$"), Validators.maxLength(10)]),
            email: new FormControl("", [Validators.required, Validators.email]),
            password: new FormControl("", [Validators.required, Validators.minLength(5)]),
            repassword: new FormControl("", [Validators.required, Validators.minLength(5)])
        });
    }
    InvalidMessage(): boolean {
        return (this.regForm.controls.firstName.invalid && this.regForm.controls.firstName.touched);
    }
    InvalidMessageLname(): boolean {
        return (this.regForm.controls.lastName.invalid && this.regForm.controls.lastName.touched);
    }
    InvalidContact(): boolean {
        return this.regForm.controls.contactNo.invalid && this.regForm.controls.contactNo.touched;
    }
    InvalidEmail(): boolean {
        return this.regForm.controls.email.invalid && this.regForm.controls.email.touched;
    }
    InvalidPassword(): boolean {
        return this.regForm.controls.password.invalid && this.regForm.controls.password.touched;
    }
    PasswordMatch(): boolean {
        if (this.regForm.controls.repassword.value)
            return (this.regForm.controls.password.value != this.regForm.controls.repassword.value);
        return false;
    }
    submit(form: any) {
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

    }
}