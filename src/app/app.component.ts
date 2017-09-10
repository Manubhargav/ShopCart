import { Component,OnInit,Pipe,PipeTransform } from '@angular/core';
import { appService } from './app.service';
import {Router} from '@angular/router';
import somename = require('./global');
import {LocalStorage,LocalStorageService, SessionStorageService} from 'ng2-webstorage';
import { NavigationEnd} from '@angular/router';



@Component({
  selector: 'my-app',
  templateUrl: `./app.component.html`,
  providers:[appService]
})
export class AppComponent implements OnInit{
  name1 = 'MyApp';
  public categories = [{x:'Men',y:["Formals","Casuals","Sports & Active Wear","Men Footwear","Men Accesorries","Grooming and Shaving"]},
  {x:'Women',y:["Western Wear","Ethnic Wear","Sports & Active Wears","Women Footwear","Women Accesorries","Jewellery"]},{x:'Kids',y:["Toys","School Supplies","Clothing","Kids Footwear"]}]
  public raw:any;
  public emp:any=true;
  @LocalStorage()  public value:any;
  public valid:any=false;
  public emp1:any;
  public cart:any=[];
  public flag=true;


   Login(){
     this.raw = true ;
     this.emp=false;
    
   }
   
  onComp(value: any) {
   this.value=value;
   this.emp1=true;
  }
  logout(){
    this.emp=true;
    this.emp1=false;
    // this.value=false;
     
    // this.storage.clear('boundValue');
   
      this.storage.clear(); //clear all the managed storage items
    localStorage.clear();
    
  
  }
  expand(p: any) {
     p.expanded = !p.expanded;
  }
  data:any=[];
  constructor(private _data1:appService,private router:Router, private storage:LocalStorageService){}
  
  ngOnInit(){
   
    // this.cart=somename.gcart;
    
    this.cart = JSON.parse(localStorage.getItem('cart')) || [];
    
    this._data1.getData()
    .subscribe(res => this.data=res);

   this.router.events.subscribe((evt) => {
          // $("body").animate({"scrollTop": "0px"}, 729);
        });

    // localStorage["cart"] = JSON.stringify(this.cart);

    // this.cart = JSON.parse(localStorage["cart"]);
 
    // console.log(this.cart);

  //  this.storage.observe('boundValue')
  //       .subscribe((newValue:any) => {
  //       console.log(newValue);})
    
  //  this.storage.observe('boundValue2')
  //       .subscribe((newValue1:any) => {
  //       console.log(newValue1);})
     
     
  }
  
  badge(){
    this.cart = JSON.parse(localStorage.getItem('cart')) || [];
  }
onSelect(cat:any){
    this.router.navigate(['/Home',cat])
}
add(data:any){
    
    // somename.gcart.push(data);

    // let old = JSON.parse(localStorage["cart"]);

    // let old = localStorage.getItem("cart");
  

    var old = JSON.parse(localStorage.getItem('cart')) || [];
  

    // localStorage["cart"] = JSON.stringify(old+data);
    // this.cart = JSON.parse(localStorage["cart"]);

    // localStorage.setItem("cart",old+data);
    // this.cart = localStorage.getItem("cart");

    old.push(data);

    localStorage.setItem('cart', JSON.stringify(old));

    this.cart = JSON.parse(localStorage.getItem('cart'));


    
    
    // somename.total=0;
    // for (var number of somename.gcart) {
    //     somename.total+=number.price;
       
    // }
   
  // this.router.navigate(['/cart'])
}
onmatch(data:any){
    for(let i of this.categories){
     
      if((i.x.toLowerCase()==data.toLowerCase() || this.partial(data,i.x))&& data.length>2){
        this.router.navigate(['/Home',i.x])
        this.flag=false;
      }else{
        
        for(let j of i.y){
          if(j.toLowerCase()==data.toLowerCase() || this.partial(data,j) && data.length>2){
             this.router.navigate(['/Home',j])
             this.flag=false;
          }
        }
      }   
    }
     if(this.flag){ alert("no such data")}
     this.flag=true;
  }

partial(data:any,data2:any){
  
    let a=data.length;
   
    
    if(data2.slice(0,a).toLowerCase()==data.toLowerCase()){
      return true;
    }
    return false;
  }
 check(){
   if(window.location.pathname=="/cart"){
     return false
   }else{
     return true
   }
 }


}
  


