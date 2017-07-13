import {Component, OnInit} from '@angular/core';
import {AppComponent} from './app.component'
import somename = require('./global');

@Component({
    template:`
<div on-mouseover="compute()" (click)="compute()">
    Following are the items:<h3 *ngFor="let item of cart">{{item.name}} : {{item.price}} </h3>
    <br/><h3> Total: {{sum}}</h3>
    </div>
    <button type="submit" routerLink="/form" class="btn btn-primary">Click To Buy</button>`
})

export class cartComponent implements OnInit{
    public cart:any=[];
    public sum:any=0;
    ngOnInit(){
        // console.log(somename.gcart)    
        // this.total+=this.cart[0].price
        // console.log(this.total);
        this.cart=somename.gcart;
        this.sum=somename.total; 
       
          
    }   
    compute(){
        this.sum=0;
        for (var number of this.cart) {            
            this.sum+=number.price;
            console.log(this.sum)
        }  
    }
}