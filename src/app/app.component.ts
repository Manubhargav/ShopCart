import { Component,OnInit,Pipe,PipeTransform } from '@angular/core';
import { appService } from './app.service';
import {Router} from '@angular/router';
import somename = require('./global');

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
  public value:any;
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
    this.value=false;
  }
  expand(p: any) {
     p.expanded = !p.expanded;
  }
  data:any=[];
  constructor(private _data1:appService,private router:Router){}
  ngOnInit(){
    this._data1.getData()
    .subscribe(res => this.data=res);
     
  }
  
onSelect(cat:any){
    this.router.navigate(['/Home',cat])
}
add(data:any){
    alert("added to ur cart "+data.name)
    somename.gcart.push(data);
    // somename.total=0;
    // for (var number of somename.gcart) {
    //     somename.total+=number.price;
       
    // }
   
  // this.router.navigate(['/cart'])
}
onmatch(data:any){
    for(let i of this.categories){
     
      if(i.x.toLowerCase()==data.toLowerCase() || this.partial(data,i.x)){
        this.router.navigate(['/Home',i.x])
        this.flag=false;
      }else{
        
        for(let j of i.y){
          if(j.toLowerCase()==data.toLowerCase() || this.partial(data,j)){
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
    console.log(data2.slice(0,a))
    
    if(data2.slice(0,a).toLowerCase()==data.toLowerCase()){
      return true;
    }
    
    return false;
  }
 
}
  


