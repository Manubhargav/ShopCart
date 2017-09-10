import {Component, OnInit} from '@angular/core';
import somenam = require('./global');
import { appService }         from './app.service';
import { AdItem }            from './ad-item';

@Component({
    template:`
    <h3><b>Order placed successfully.</b></h3>
    <br>
    <h3 *ngFor="let details of detail"><span style="text-decoration:underline">Order Details</span> <br/> <h4>Name:{{details[0]}}<br/></h4>
     <h4>Address:{{details[1]+" ,"+details[2]+" -"
    +details[3]}}</h4></h3><br>
    <a href="/Home"> <button class="btn">Shop more</button></a>
    <button routerLink="extra">Rate Us</button><br>
    <add-banner [ads]="ads"></add-banner>`
})
export class finalComponent implements OnInit{
    ads: AdItem[];

  constructor(private adService: appService) {}
    detail:any=[];
    ngOnInit(){
        this.detail=somenam.detail;
        this.ads = this.adService.getAds();
       
    }


}