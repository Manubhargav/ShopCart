import {Component,OnInit} from '@angular/core';
import {ActivatedRoute,Router,Params} from '@angular/router';
@Component({
template:`
   <div class="row">
      <div *ngIf="catName=='Men'">
         <div class="col-md-4" *ngFor="let data of details | slice:0:6; let i = index  ">
            <img  class="img-responsive" src="{{data.url}}" alt="pic">
            <p style="text-align:center" >{{data.name}}
            </p>
         </div>
      </div>
       </div>
    <div class="row">
      <div *ngIf="catName=='Formals'">
         <div class="col-md-4" *ngFor="let data of details | slice:16:18; let i = index  ">
            <img  class="img-responsive" src="{{data.url}}" alt="pic">
            <p style="text-align:center" >{{data.name}}
            </p>
         </div>
      </div>
       </div>
   <div class="row">
   <div *ngIf="catName=='Women'">
      <div class="col-md-4" *ngFor="let data of details | slice:6:12; let i = index  ">
         <img  class="img-responsive" src="{{data.url}}" alt="pic">
         <p style="text-align:center">{{data.name}}
         <p>
      </div>
   </div>
   </div>
   <div class="row">
   <div *ngIf="catName=='Kids'">
      <div class="col-md-4" *ngFor="let data of details | slice:12:16; let i = index  ">
         <img  class="img-responsive" src="{{data.url}}" alt="pic">
         <p style="text-align:center">{{data.name}}
         <p>
      </div>
   </div>
</div>`
})

export class catComponent implements OnInit{
    details=
 [{"id":101,"name":"Formals","color":"Black","price":200000,"desc":"The coolest watch present in market","url":"http://www.minibazar.in/wp-content/uploads/rado-shine-black.jpg"},
        {"id":102,"name":"Casuals","color":"Black","price":3000,"desc":"The coolest tshirt present in market","url":"https://3.imimg.com/data3/HV/VV/MY-4437324/polo-neck-t-shirts-500x500.jpg"},
        {"id":103,"name":"Sportswear","color":"Black","price":20000,"desc":"The coolest shoes present in market","url":"http://i.ebayimg.com/images/i/271723310731-0-1/s-l1000.jpg"},
        {"id":104,"name":"Footwears","color":"Black","price":2000,"desc":"The coolest formals present in market","url":"https://4.imimg.com/data4/AK/DJ/MY-11904132/slim-fit-men-formal-trousers-500x500.jpg"},
        {"id":105,"name":"Accessories","color":"Black","price":200,"desc":"The coolest shirt present in market","url":"https://4.imimg.com/data4/AY/NP/MY-27633995/gents-shirts-500x500.jpg"},
    {"id":106,"name":"Grooming","color":"Black","price":1000,"desc":"The coolest wallet present in market","url":"http://i.ebayimg.com/00/s/NTAwWDUwMA==/z/UmUAAMXQVT9SsR-n/$_3.JPG?set_id=2"},
    {"id":107,"name":"Western Wear","color":"Black","price":200000,"desc":"The coolest watch present in market","url":"http://www.minibazar.in/wp-content/uploads/rado-shine-black.jpg"},
        {"id":108,"name":"Ethnic wear","color":"Black","price":3000,"desc":"The coolest tshirt present in market","url":"https://3.imimg.com/data3/HV/VV/MY-4437324/polo-neck-t-shirts-500x500.jpg"},
        {"id":109,"name":"Sportswear","color":"Black","price":20000,"desc":"The coolest shoes present in market","url":"http://i.ebayimg.com/images/i/271723310731-0-1/s-l1000.jpg"},
        {"id":110,"name":"Footwears","color":"Black","price":2000,"desc":"The coolest formals present in market","url":"https://4.imimg.com/data4/AK/DJ/MY-11904132/slim-fit-men-formal-trousers-500x500.jpg"},
        {"id":111,"name":"Accessories","color":"Black","price":200,"desc":"The coolest shirt present in market","url":"https://4.imimg.com/data4/AY/NP/MY-27633995/gents-shirts-500x500.jpg"},
    {"id":112,"name":"Jewellery","color":"Black","price":1000,"desc":"The coolest wallet present in market","url":"http://i.ebayimg.com/00/s/NTAwWDUwMA==/z/UmUAAMXQVT9SsR-n/$_3.JPG?set_id=2"},
    {"id":113,"name":"Toys","color":"Black","price":200000,"desc":"The coolest watch present in market","url":"http://www.minibazar.in/wp-content/uploads/rado-shine-black.jpg"},
        {"id":114,"name":"School supplies","color":"Black","price":3000,"desc":"The coolest tshirt present in market","url":"https://3.imimg.com/data3/HV/VV/MY-4437324/polo-neck-t-shirts-500x500.jpg"},
        {"id":115,"name":"Clothing","color":"Black","price":20000,"desc":"The coolest shoes present in market","url":"http://i.ebayimg.com/images/i/271723310731-0-1/s-l1000.jpg"},
        {"id":116,"name":"Kids Footwear","color":"Black","price":2000,"desc":"The coolest formals present in market","url":"https://4.imimg.com/data4/AK/DJ/MY-11904132/slim-fit-men-formal-trousers-500x500.jpg"},
        {"id":117,"name":"Oxford Shirt","color":"Black","price":20000,"desc":"The coolest shoes present in market","url":"http://i.ebayimg.com/images/i/271723310731-0-1/s-l1000.jpg"},
        {"id":118,"name":"Woolen trousers","color":"Black","price":2000,"desc":"The coolest formals present in market","url":"https://4.imimg.com/data4/AK/DJ/MY-11904132/slim-fit-men-formal-trousers-500x500.jpg"}
       
    
    
    
    ]

public catName:any;
constructor(private route:ActivatedRoute,private router:Router){}
ngOnInit(){
   this.route.params.subscribe((params:Params)=>{
       let  id=(params['cat']);
       this.catName=id;
   })
}
}