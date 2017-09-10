import {Injectable} from '@angular/core';
import  { Http,Response } from '@angular/http';
import 'rxjs/add/operator/map';
import somename = require('./global');
import somenam = require('./global');
import { HeroJobAdComponent }   from './hero-job-ad.component';
import { HeroProfileComponent } from './hero-profile.component';
import { AdItem }               from './ad-item';

@Injectable()
export class appService{
   private _url="apidata/listdata.json"
   public cart:any=[];
    constructor(private _http: Http){}
    getData(){
        return this._http.get(this._url)
        .map((response:Response) => response.json());
        
    }
    getCart(data:any){
        var old = JSON.parse(localStorage.getItem('cart')) || [];
        old.push(data);

        localStorage.setItem('cart', JSON.stringify(old));

        this.cart = JSON.parse(localStorage.getItem('cart'));
        return this.cart;
        // return somename.gcart.push(data);
    }
    getDetail(data:any){
        return somenam.detail.push(data)
        
    }

     getAds() {
    return [
      new AdItem(HeroProfileComponent, {name: 'Summer', bio: 'https://az616578.vo.msecnd.net/files/responsive/embedded/any/desktop/2015/07/13/635724075064365992272945986_outfit_large_911c6cd9-82b1-4cb8-bdff-366e78a62e84.jpg'}),

      new AdItem(HeroProfileComponent, {name: 'Winter', bio: 'http://i.ebayimg.com/images/g/k8wAAOSwstxVQEvQ/s-l500.jpg'}),

      new AdItem(HeroJobAdComponent,   {headline: 'Hiring for several positions',
                                        body: 'https://t4.ftcdn.net/jpg/00/78/65/07/500_F_78650785_wPNW8EodMKId7C08zmtIvavaJO7krYZd.jpg'}),

      new AdItem(HeroJobAdComponent,   {headline: 'Openings in all departments',
                                        body: 'http://securepeoplebase.com/wp-content/uploads/2016/11/staffing.png'}),
    ];
  }
    
}


