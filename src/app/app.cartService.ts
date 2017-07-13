import {Injectable} from '@angular/core';
import  { Http,Response } from '@angular/http';
import 'rxjs/add/operator/map';
import somename = require('./global');

@Injectable()
export class appService{
   private _url="apidata/listdata.json"
    constructor(){}

    getCart(data:any){
        return somename.gcart.push(data);
    }
    
}


