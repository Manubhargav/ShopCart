import {Component, OnInit} from '@angular/core';
import {AppComponent} from './app.component'
import somename = require('./global');


@Component({
    template:`
<div on-mouseover="compute()" (click)="compute()">
    Following are the items:<h3 *ngFor="let item of cart ;let i=index">{{item.name}} : {{item.price}} <img style="height:25px;padding-left:20px;padding-top:2px;opacity:0.5"src="https://d30y9cdsu7xlg0.cloudfront.net/png/6447-200.png" (click)="remove(i)"></h3>
    <br/><h3> Total Amount: {{sum}}</h3>
    </div>
    <button [disabled]="sum==0" type="submit" routerLink="/form" class="btn btn-primary">Click To Buy</button>`
})

export class cartComponent implements OnInit{
    // @LocalStorage() 
    public cart:any=[];
    public sum:any=0;


    ngOnInit(){
        // console.log(somename.gcart)    
        // this.total+=this.cart[0].price
        // console.log(this.total);
        this.cart=somename.gcart;
        this.sum=somename.total; 

        this.cart = JSON.parse(localStorage.getItem('cart')) || [];
        this.compute();



        // localStorage["cart"] = JSON.stringify(this.cart);
        // this.cart = JSON.parse(localStorage["cart"]);
        // this.storage.store('boundValue2', this.cart);
        // this.cart1 = this.storage.retrieve('boundValue2');
          
    }   
    compute(){
    //    this.cart=JSON.parse(localStorage.getItem('cart')) || [];
        this.sum=0;
        for (var number of this.cart) {            
            this.sum+=number.price;
           
        }  
    }
    remove(d:any){
    var json = JSON.parse(localStorage["cart"]);
    for ( var i=0;i<json.length;i++)
            if (i == d) json.splice(i,1);
    localStorage["cart"] = JSON.stringify(json);
    this.cart=JSON.parse(localStorage.getItem('cart')) || [];
    this.compute();
    }
}