import {Component, OnInit} from '@angular/core';
import somenam = require('./global');
@Component({
    template:`
    <h3><b>Order placed successfully.</b></h3>
    <h3 *ngFor="let details of detail"><span style="text-decoration:underline">Order Details</span> <br/> <h4>Name:{{details[0]}}<br/></h4>
     <h4>Address:{{details[1]+" ,"+details[2]+" -"
    +details[3]}}</h4></h3>
    <a href="/Home"> <button class="btn">Shop more</button></a>`
})
export class finalComponent implements OnInit{
    detail:any=[];
    ngOnInit(){
        this.detail=somenam.detail;
       
    }


}