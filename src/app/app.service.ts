import {Injectable} from '@angular/core';
import  { Http,Response } from '@angular/http';
import 'rxjs/add/operator/map';
import somename = require('./global');
import somenam = require('./global');

@Injectable()
export class appService{
   private _url="apidata/listdata.json"
    constructor(private _http: Http){}
    getData(){
        return this._http.get(this._url)
        .map((response:Response) => response.json());
        
    }
    getCart(data:any){
        return somename.gcart.push(data);
    }
    getDetail(data:any){
        return somenam.detail.push(data)
        
    }
    
}


