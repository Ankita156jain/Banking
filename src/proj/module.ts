import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { BrowserModule } from '@angular/platform-browser'
import { NgbModule } from "@ng-bootstrap/ng-bootstrap"
import { HomeComponent } from './Components/Home'
import { RegistrationComponent } from './Components/Registration'
import { RouterComponent } from './Routes/Routing'
import { SignInComponent } from './Components/SignIn'
import { ContactComponent } from './Components/Contact'
import { MenuComponent } from './Components/Menu'
import { FileUploadComponent } from './Components/FileUpload'
import { TransactionComponent } from './Components/Transaction'
import { FundTransferComponent } from './Components/FundTransfer'
import { HttpModule } from '@angular/http'
@NgModule({
    exports: [BrowserModule],
    imports: [NgbModule.forRoot(), RouterComponent, FormsModule, ReactiveFormsModule, CommonModule,HttpModule],
    bootstrap: [HomeComponent],
    declarations: [HomeComponent, RegistrationComponent, SignInComponent, ContactComponent, MenuComponent, FileUploadComponent, TransactionComponent, FundTransferComponent]
})
export class AppModule { }

