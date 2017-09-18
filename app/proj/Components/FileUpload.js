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
var FileUploadComponent = /** @class */ (function () {
    function FileUploadComponent() {
    }
    // handleUpload(E: any): void {
    //     this.msg = E.target.value;
    // }
    FileUploadComponent.prototype.ngOnInit = function () {
        this.fileForm = new forms_1.FormGroup({
            fileName: new forms_1.FormControl("", [forms_1.Validators.required])
        });
    };
    FileUploadComponent.prototype.fileEvent = function (fileInput) {
        this.file = fileInput.target.files[0];
        console.log(this.file);
    };
    FileUploadComponent.prototype.submit = function (form) {
        debugger;
        console.log(this.file);
        if (this.file != null)
            this.msg = this.file.name + " Uploaded successfully.";
        else {
            this.msg = "Uploaded unsuccessfully.";
        }
    };
    FileUploadComponent = __decorate([
        core_1.Component({
            selector: 'FileUpload',
            // template: `<div>
            // <input name="file" type= "file" [(ngModel)]="fileName" (ngModelChange)="InvalidMessage(fileName)"  />
            // </div>`,
            templateUrl: './src/proj/Template/FileUpload.html'
        })
    ], FileUploadComponent);
    return FileUploadComponent;
}());
exports.FileUploadComponent = FileUploadComponent;
//# sourceMappingURL=FileUpload.js.map