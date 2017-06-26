import { Component,OnInit,Pipe,PipeTransform } from '@angular/core';
import { appService } from './app.service';
import {Router} from '@angular/router';
@Component({
  selector: 'my-app',
  templateUrl: `./app.component.html`,
  providers:[appService]
})
export class AppComponent implements OnInit{
  name1 = 'MyApp';
  public categories = [{x:'Men',y:["Formals","Casuals","Sports & Active Wear","Footwear","Accesorries","Grooming and Shaving"]},
  {x:'Women',y:["Western Wear","Ethnic Wear","Sports & Active Wear","Footwear","Accesorries","Jewellery"]},{x:'Kids',y:["Toys","School Supplies","Clothing","Kids Footwear"]}]
  public raw:any;
  public emp:any=true;
  public value:any;
  public valid:any=false;
  public emp1:any;
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

}