import {Component,OnInit} from '@angular/core'
import{FormControl,FormGroup,Validators} from '@angular/forms'

@Component({
    selector:'SignIn',
    templateUrl:'./src/proj/Template/SignIn.html'

})

export class SignInComponent implements OnInit{
regForm: FormGroup;
msg: string;
ngOnInit(){
    this.regForm=new FormGroup({
email: new FormControl("",[Validators.required,Validators.email]),
password: new FormControl("",[Validators.required,Validators.minLength(5)])

    })
}

InvalidEmail():boolean{
    return this.regForm.controls.email.invalid && this.regForm.controls.email.touched;
}
InvalidPassword():boolean {
    return this.regForm.controls.password.invalid && this.regForm.controls.password.touched;
}
}