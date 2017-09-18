import { Component, OnInit } from '@angular/core'
import { FormControl, FormGroup, Validators } from '@angular/forms'
@Component({
    selector: 'FileUpload',
    // template: `<div>
    // <input name="file" type= "file" [(ngModel)]="fileName" (ngModelChange)="InvalidMessage(fileName)"  />
    // </div>`,
    templateUrl: './src/proj/Template/FileUpload.html'

})

export class FileUploadComponent implements OnInit {
    fileForm: FormGroup;
    msg: string;
    file: any

    // handleUpload(E: any): void {

    //     this.msg = E.target.value;
    // }
    ngOnInit() {
        this.fileForm = new FormGroup({
            fileName: new FormControl("", [Validators.required])
        });
    }
    fileEvent(fileInput: any) {
        this.file = fileInput.target.files[0];
        console.log(this.file);
    }

    submit(form: any) {
        debugger;
        console.log(this.file);
        if (this.file != null)
            this.msg = this.file.name + " Uploaded successfully.";
        else {
            this.msg = "Uploaded unsuccessfully.";
        }

    }
}