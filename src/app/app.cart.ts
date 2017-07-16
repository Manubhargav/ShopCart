import {Component, OnInit} from '@angular/core';
import {AppComponent} from './app.component'
import somename = require('./global');
import {LocalStorage,LocalStorageService} from 'ng2-webstorage';

@Component({
    template:`
<div on-mouseover="compute()" (click)="compute()">
    Following are the items:<h3 *ngFor="let item of cart">{{item.name}} : {{item.price}} </h3>
    <br/><h3> Total Amount: {{sum}}</h3>
    </div>
    <button type="submit" routerLink="/form" class="btn btn-primary">Click To Buy</button>`
})

export class cartComponent implements OnInit{
    // @LocalStorage() 
    public cart:any=[];
    public sum:any=0;

    constructor(private storage:LocalStorageService) {}

    ngOnInit(){
        // console.log(somename.gcart)    
        // this.total+=this.cart[0].price
        // console.log(this.total);
        this.cart=somename.gcart;
        this.sum=somename.total; 
        // localStorage["cart"] = JSON.stringify(this.cart);

        // this.cart = JSON.parse(localStorage["cart"]);
        // this.storage.store('boundValue2', this.cart);
        // this.cart1 = this.storage.retrieve('boundValue2');
          
    }   
    compute(){
        this.sum=0;
        for (var number of this.cart) {            
            this.sum+=number.price;
            console.log(this.sum)
        }  
    }
}