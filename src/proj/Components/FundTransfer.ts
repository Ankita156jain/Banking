import {Component,OnInit} from '@angular/core'
import {Http} from '@angular/http'

@Component({
    templateUrl:'./src/proj/Template/FundTransfer.html'

})
export class FundTransferComponent implements OnInit{
    banks:Array<any>
    constructor( private httpService:Http){
    }
ngOnInit(){
    this.httpService.get("./src/proj/Data/bank.json").subscribe((data)=>{
        this.banks=<any>data.json().banks;
        console.log(this.banks);
    });
}
}

