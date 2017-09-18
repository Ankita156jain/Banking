import { NgModule } from "@angular/core"
import { RouterModule, Routes } from "@angular/router"
import { RegistrationComponent } from "../Components/Registration"
import { SignInComponent } from "../Components/SignIn"
import { ContactComponent } from "../Components/Contact"
import { MenuComponent } from "../Components/Menu"
import { FileUploadComponent } from "../Components/FileUpload"
import {TransactionComponent} from "../Components/Transaction"
import {FundTransferComponent} from "../Components/FundTransfer"

const route: Routes = [
    {
        path: "reg",
        component: RegistrationComponent
    }
    ,
    {
        path: "signIn",
        component: SignInComponent
    },
    {
        path: "contact",
        component: ContactComponent
    },
    {
        path: "menu",
        component: MenuComponent,
        children: [
            {
                path: "Registration",
                component: RegistrationComponent,
                outlet: "menu"

            },
            {
                path: "contact",
                component: ContactComponent,
                outlet: "menu"
            }

        ]
    },
    {
        path: "fileUpload",
        component:FileUploadComponent
    },
    {
        path:"transaction",
        component:TransactionComponent
    },
    {
        path:"FundTransfer",
        component:FundTransferComponent
    }
]
@NgModule({
    imports: [RouterModule.forRoot(route)],
    exports: [RouterModule]
})

export class RouterComponent { }