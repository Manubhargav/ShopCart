import {Component} from '@angular/core';
import {Router} from '@angular/router';
@Component({
selector:'men-list',
template:`<div style="height: 81.75vh;overflow: auto" class="force-overflow" id="style-3">
   <h2>50% Off On Men's product</h2>
   <div class="container-fluid " >
      <div class="row ">
         <div class="col-md-4 "  *ngFor="let item of details" (click)="onSelect(item)">            
         <img class="img-responsive" src="{{item.url}}" alt="book" class="img-responsive" style="height:40vh" >
         <p style="text-align:center"><b>{{item.name}}</b></p>
      </div>
   </div>
</div>
<h2><a routerLink="/Home" routerLinkActive="active">Go back home</a></h2>
</div>`

})

export class menComponent{
constructor(private router:Router){}
 details=
 [{"id":1,"name":"Rado watch","color":"Black","price":200000,"desc":"The coolest watch present in market","url":"http://www.minibazar.in/wp-content/uploads/rado-shine-black.jpg"},
        {"id":2,"name":"tshirt","color":"Black","price":200000,"desc":"The coolest watch present in market","url":"https://3.imimg.com/data3/HV/VV/MY-4437324/polo-neck-t-shirts-500x500.jpg"},
        {"id":3,"name":"shoes","color":"Black","price":200000,"desc":"The coolest watch present in market","url":"http://i.ebayimg.com/images/i/271723310731-0-1/s-l1000.jpg"},
        {"id":4,"name":"formals","color":"Black","price":200000,"desc":"The coolest watch present in market","url":"https://4.imimg.com/data4/AK/DJ/MY-11904132/slim-fit-men-formal-trousers-500x500.jpg"},
        {"id":5,"name":"shirt","color":"Black","price":200000,"desc":"The coolest watch present in market","url":"https://4.imimg.com/data4/AY/NP/MY-27633995/gents-shirts-500x500.jpg"},
    {"id":6,"name":"wallet","color":"Black","price":200000,"desc":"The coolest watch present in market","url":"http://i.ebayimg.com/00/s/NTAwWDUwMA==/z/UmUAAMXQVT9SsR-n/$_3.JPG?set_id=2"}]

onSelect(item:any){
    this.router.navigate(['/Flashdeals',item.id])
}


}