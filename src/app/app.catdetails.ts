import {Component,OnInit} from '@angular/core';
import {ActivatedRoute,Router,Params} from '@angular/router';
import {appService} from './app.service'
@Component({
template:`
    <div class="row">
   <div [ngSwitch]="true" >
      <div *ngSwitchCase="catName=='Men'">
         <div class="col-md-4" *ngFor="let data of details | slice:0:6; let i = index  ">
            <img  class="img-responsive" src="{{data.url}}" alt="pic">
            <p style="text-align:center" >{{data.name}}
            </p>
         </div>
      </div>
      <div *ngSwitchCase="catName=='Women'">
         <div class="col-md-4"  *ngFor="let data of details | slice:6:12; let i = index  ">
            <img  class="img-responsive" src="{{data.url}}" alt="pic">
            <p style="text-align:center" >{{data.name}}
            </p>
         </div>
      </div>
      <div *ngSwitchCase="catName=='Kids'">
         <div class="col-md-4"  *ngFor="let data of details | slice:12:16; let i = index  ">
            <img  class="img-responsive" src="{{data.url}}" alt="pic">
            <p style="text-align:center" >{{data.name}}
            </p>
         </div>
      </div>
      <div   *ngFor="let data of details">
         <div *ngSwitchCase="catName=='Formals'">
            <div *ngIf="data.cat==catName" class="container-fluid row">
               <div class="col-md-12">
                  <img  class="img-responsive col-md-4" src="{{data.url}}" alt="pic">
                  <div class="col-md-8">
                     <p><em><b>Name:</b></em>{{data.name}}
                     <p>
                     <p><em><b>Price:</b></em>{{data.price | currency:'INR'}}
                     <p>
                     <p><em><b>Color:</b></em>{{data.color}}
                     <p>
                     <p><em><b>Description: </b></em>{{data.desc}}</p>
                     <button class="btn-success btn" (click)="gc.getCart(data)"> Add to Cart
                     </button>
                  </div>
               </div>
               <hr>
            </div>
         </div>
         <div *ngSwitchCase="catName=='Casuals'">
            <div *ngIf="data.cat==catName" class="container-fluid row">
               <div class="col-md-12">
                  <img  class="img-responsive col-md-4" src="{{data.url}}" alt="pic">
                  <div class="col-md-8">
                     <p><em><b>Name:</b></em>{{data.name}}
                     <p>
                     <p><em><b>Price:</b></em>{{data.price | currency:'INR'}}
                     <p>
                     <p><em><b>Color:</b></em>{{data.color}}
                     <p>
                     <p><em><b>Description: </b></em>{{data.desc}}</p>
                     <button class="btn-success btn" (click)="gc.getCart(data)"> Add to Cart
                     </button>
                  </div>
               </div>
               <hr>
            </div>
         </div>
         <div *ngSwitchCase="catName=='Sports & Active Wear'">
            <div *ngIf="data.cat==catName" class="container-fluid row">
               <div class="col-md-12">
                  <img  class="img-responsive col-md-4" src="{{data.url}}" alt="pic">
                  <div class="col-md-8">
                     <p><em><b>Name:</b></em>{{data.name}}
                     <p>
                     <p><em><b>Price:</b></em>{{data.price | currency:'INR'}}
                     <p>
                     <p><em><b>Color:</b></em>{{data.color}}
                     <p>
                     <p><em><b>Description: </b></em>{{data.desc}}</p>
                     <button class="btn-success btn" (click)="gc.getCart(data)"> Add to Cart
                     </button>
                  </div>
               </div>
               <hr>
            </div>
         </div>
         <div *ngSwitchCase="catName=='Men Accesorries'">
            <div *ngIf="data.cat==catName" class="container-fluid row">
               <div class="col-md-12">
                  <img  class="img-responsive col-md-4" src="{{data.url}}" alt="pic">
                  <div class="col-md-8">
                     <p><em><b>Name:</b></em>{{data.name}}
                     <p>
                     <p><em><b>Price:</b></em>{{data.price | currency:'INR'}}
                     <p>
                     <p><em><b>Color:</b></em>{{data.color}}
                     <p>
                     <p><em><b>Description: </b></em>{{data.desc}}</p>
                     <button class="btn-success btn" (click)="gc.getCart(data)"> Add to Cart
                     </button>
                  </div>
               </div>
               <hr>
            </div>
         </div>
         <div *ngSwitchCase="catName=='Men Footwear'">
            <div *ngIf="data.cat==catName" class="container-fluid row">
               <div class="col-md-12">
                  <img  class="img-responsive col-md-4" src="{{data.url}}" alt="pic">
                  <div class="col-md-8">
                     <p><em><b>Name:</b></em>{{data.name}}
                     <p>
                     <p><em><b>Price:</b></em>{{data.price | currency:'INR'}}
                     <p>
                     <p><em><b>Color:</b></em>{{data.color}}
                     <p>
                     <p><em><b>Description: </b></em>{{data.desc}}</p>
                     <button class="btn-success btn" (click)="gc.getCart(data)"> Add to Cart
                     </button>
                  </div>
               </div>
               <hr>
            </div>
         </div>
         <div *ngSwitchCase="catName=='Grooming and Shaving'">
            <div *ngIf="data.cat==catName" class="container-fluid row">
               <div class="col-md-12">
                  <img  class="img-responsive col-md-4" src="{{data.url}}" alt="pic">
                  <div class="col-md-8">
                     <p><em><b>Name:</b></em>{{data.name}}
                     <p>
                     <p><em><b>Price:</b></em>{{data.price | currency:'INR'}}
                     <p>
                     <p><em><b>Color:</b></em>{{data.color}}
                     <p>
                     <p><em><b>Description: </b></em>{{data.desc}}</p>
                     <button class="btn-success btn" (click)="gc.getCart(data)"> Add to Cart
                     </button>
                  </div>
               </div>
               <hr>
            </div>
         </div>
         <div *ngSwitchCase="catName=='Western Wear'">
            <div *ngIf="data.cat==catName" class="container-fluid row">
               <div class="col-md-12">
                  <img  class="img-responsive col-md-4" src="{{data.url}}" alt="pic">
                  <div class="col-md-8">
                     <p><em><b>Name:</b></em>{{data.name}}
                     <p>
                     <p><em><b>Price:</b></em>{{data.price | currency:'INR'}}
                     <p>
                     <p><em><b>Color:</b></em>{{data.color}}
                     <p>
                     <p><em><b>Description: </b></em>{{data.desc}}</p>
                     <button class="btn-success btn" (click)="gc.getCart(data)"> Add to Cart
                     </button>
                  </div>
               </div>
               <hr>
            </div>
         </div>
         <div *ngSwitchCase="catName=='Sports & Active Wears'">
            <div *ngIf="data.cat==catName" class="container-fluid row">
               <div class="col-md-12">
                  <img  class="img-responsive col-md-4" src="{{data.url}}" alt="pic">
                  <div class="col-md-8">
                     <p><em><b>Name:</b></em>{{data.name}}
                     <p>
                     <p><em><b>Price:</b></em>{{data.price | currency:'INR'}}
                     <p>
                     <p><em><b>Color:</b></em>{{data.color}}
                     <p>
                     <p><em><b>Description: </b></em>{{data.desc}}</p>
                     <button class="btn-success btn" (click)="gc.getCart(data)"> Add to Cart
                     </button>
                  </div>
               </div>
               <hr>
            </div>
         </div>
         <div *ngSwitchCase="catName=='Ethnic Wear'">
            <div *ngIf="data.cat==catName" class="container-fluid row">
               <div class="col-md-12">
                  <img  class="img-responsive col-md-4" src="{{data.url}}" alt="pic">
                  <div class="col-md-8">
                     <p><em><b>Name:</b></em>{{data.name}}
                     <p>
                     <p><em><b>Price:</b></em>{{data.price | currency:'INR'}}
                     <p>
                     <p><em><b>Color:</b></em>{{data.color}}
                     <p>
                     <p><em><b>Description: </b></em>{{data.desc}}</p>
                     <button class="btn-success btn" (click)="gc.getCart(data)"> Add to Cart
                     </button>
                  </div>
               </div>
               <hr>
            </div>
         </div>
         <div *ngSwitchCase="catName=='Women Footwear'">
            <div *ngIf="data.cat==catName" class="container-fluid row">
               <div class="col-md-12">
                  <img  class="img-responsive col-md-4" src="{{data.url}}" alt="pic">
                  <div class="col-md-8">
                     <p><em><b>Name:</b></em>{{data.name}}
                     <p>
                     <p><em><b>Price:</b></em>{{data.price | currency:'INR'}}
                     <p>
                     <p><em><b>Color:</b></em>{{data.color}}
                     <p>
                     <p><em><b>Description: </b></em>{{data.desc}}</p>
                     <button class="btn-success btn" (click)="gc.getCart(data)"> Add to Cart
                     </button>
                  </div>
               </div>
               <hr>
            </div>
         </div>
         <div *ngSwitchCase="catName=='Women Accesorries'">
            <div *ngIf="data.cat==catName" class="container-fluid row">
               <div class="col-md-12">
                  <img  class="img-responsive col-md-4" src="{{data.url}}" alt="pic">
                  <div class="col-md-8">
                     <p><em><b>Name:</b></em>{{data.name}}
                     <p>
                     <p><em><b>Price:</b></em>{{data.price | currency:'INR'}}
                     <p>
                     <p><em><b>Color:</b></em>{{data.color}}
                     <p>
                     <p><em><b>Description: </b></em>{{data.desc}}</p>
                     <button class="btn-success btn" (click)="gc.getCart(data)"> Add to Cart
                     </button>
                  </div>
               </div>
               <hr>
            </div>
         </div>
         <div *ngSwitchCase="catName=='Jewellery'">
            <div *ngIf="data.cat==catName" class="container-fluid row">
               <div class="col-md-12">
                  <img  class="img-responsive col-md-4" src="{{data.url}}" alt="pic">
                  <div class="col-md-8">
                     <p><em><b>Name:</b></em>{{data.name}}
                     <p>
                     <p><em><b>Price:</b></em>{{data.price | currency:'INR'}}
                     <p>
                     <p><em><b>Color:</b></em>{{data.color}}
                     <p>
                     <p><em><b>Description: </b></em>{{data.desc}}</p>
                     <button class="btn-success btn" (click)="gc.getCart(data)"> Add to Cart
                     </button>
                  </div>
               </div>
               <hr>
            </div>
         </div>
         <div *ngSwitchCase="catName=='Toys'">
            <div *ngIf="data.cat==catName" class="container-fluid row">
               <div class="col-md-12">
                  <img  class="img-responsive col-md-4" src="{{data.url}}" alt="pic">
                  <div class="col-md-8">
                     <p><em><b>Name:</b></em>{{data.name}}
                     <p>
                     <p><em><b>Price:</b></em>{{data.price | currency:'INR'}}
                     <p>
                     <p><em><b>Color:</b></em>{{data.color}}
                     <p>
                     <p><em><b>Description: </b></em>{{data.desc}}</p>
                     <button class="btn-success btn" (click)="gc.getCart(data)"> Add to Cart
                     </button>
                  </div>
               </div>
               <hr>
            </div>
         </div>
         <div *ngSwitchCase="catName=='School Supplies'">
            <div *ngIf="data.cat==catName" class="container-fluid row">
               <div class="col-md-12">
                  <img  class="img-responsive col-md-4" src="{{data.url}}" alt="pic">
                  <div class="col-md-8">
                     <p><em><b>Name:</b></em>{{data.name}}
                     <p>
                     <p><em><b>Price:</b></em>{{data.price | currency:'INR'}}
                     <p>
                     <p><em><b>Color:</b></em>{{data.color}}
                     <p>
                     <p><em><b>Description: </b></em>{{data.desc}}</p>
                     <button class="btn-success btn" (click)="gc.getCart(data)"> Add to Cart
                     </button>
                  </div>
               </div>
               <hr>
            </div>
         </div>
         <div *ngSwitchCase="catName=='Clothing'">
            <div *ngIf="data.cat==catName" class="container-fluid row">
               <div class="col-md-12">
                  <img  class="img-responsive col-md-4" src="{{data.url}}" alt="pic">
                  <div class="col-md-8">
                     <p><em><b>Name:</b></em>{{data.name}}
                     <p>
                     <p><em><b>Price:</b></em>{{data.price | currency:'INR'}}
                     <p>
                     <p><em><b>Color:</b></em>{{data.color}}
                     <p>
                     <p><em><b>Description: </b></em>{{data.desc}}</p>
                     <button class="btn-success btn" (click)="gc.getCart(data)"> Add to Cart
                     </button>
                  </div>
               </div>
               <hr>
            </div>
         </div>
         <div *ngSwitchCase="catName=='Kids Footwear'">
            <div *ngIf="data.cat==catName" class="container-fluid row">
               <div class="col-md-12">
                  <img  class="img-responsive col-md-4" src="{{data.url}}" alt="pic">
                  <div class="col-md-8">
                     <p><em><b>Name:</b></em>{{data.name}}
                     <p>
                     <p><em><b>Price:</b></em>{{data.price | currency:'INR'}}
                     <p>
                     <p><em><b>Color:</b></em>{{data.color}}
                     <p>
                     <p><em><b>Description: </b></em>{{data.desc}}</p>
                     <button class="btn-success btn" (click)="gc.getCart(data)"> Add to Cart
                     </button>
                  </div>
               </div>
               <hr>
            </div>
         </div>
      </div>
   </div>
</div>
     `
})

export class catComponent implements OnInit{
    details=
        [
        {"id":101,"name":"Shirts","cat":"Formals","color":"Black","price":200000,"desc":"The coolest watch present in market","url":"https://4.imimg.com/data4/AY/NP/MY-27633995/gents-shirts-500x500.jpg"},
        {"id":102,"name":"Casual Shirts","cat":"Casuals","color":"Black","price":3000,"desc":"The coolest tshirt present in market","url":"https://3.imimg.com/data3/HV/VV/MY-4437324/polo-neck-t-shirts-500x500.jpg"},
        {"id":103,"name":"Sportswear","cat":"Sports & Active Wear","color":"Black","price":20000,"desc":"The coolest shoes present in market","url":"https://s-media-cache-ak0.pinimg.com/736x/e3/6b/e6/e36be60a131d33849f686c6094fcd686--mens-sportswear-suit-men.jpg"},
        {"id":104,"name":"footwear","cat":"Men Footwear","color":"Black","price":2000,"desc":"The coolest formals present in market","url":"http://i.ebayimg.com/images/i/271723310731-0-1/s-l1000.jpg"},
        {"id":105,"name":"Watches","cat":"Men Accesorries","color":"Black","price":200,"desc":"The coolest shirt present in market","url":"http://www.greatbusinessresults.co.uk/images/WnnyQgsvDT/mens-leather-black-eliros-chronograph-maurice-lacroix-men-accessories-el1098ss0013111-strap-watch-17JW.jpg"},
        {"id":106,"name":"wallet","cat":"Grooming and Shaving","color":"Black","price":1000,"desc":"The coolest wallet present in market","url":"http://i.ebayimg.com/00/s/NTAwWDUwMA==/z/UmUAAMXQVT9SsR-n/$_3.JPG?set_id=2"},
        {"id":107,"name":"western wear","cat":"Western Wear","color":"Black","price":200000,"desc":"The coolest watch present in market","url":"https://4.imimg.com/data4/JQ/KA/MY-9013556/indo-western-dress-500x500.jpg"},
        {"id":108,"name":"ethnic wear","cat":"Ethnic Wear","color":"Black","price":3000,"desc":"The coolest tshirt present in market","url":"https://5.imimg.com/data5/DD/PT/MY-33689127/party-wear-dresses-500x500.jpg"},
        {"id":109,"name":"sport","cat":"Sports & Active Wears","color":"Black","price":20000,"desc":"The coolest shoes present in market","url":"https://s-media-cache-ak0.pinimg.com/736x/40/7c/d2/407cd29ab2c7a95a375a5bcae1118291--girls-sportswear-nikes-girl.jpg"},
        {"id":110,"name":"women footwear","cat":"Women Footwear","color":"Black","price":2000,"desc":"The coolest formals present in market","url":"http://www.fashionfist.com/wp-content/uploads/2014/12/Jimmy-Choo-Ladies-Stunning-Bridal-Shoes2015-Girls-Footwear-Fashion-Fist-4.jpg"},
        {"id":111,"name":"Bags","cat":"Women Accesorries","color":"Black","price":200,"desc":"The coolest shirt present in market","url":"https://4.imimg.com/data4/AL/OG/MY-2409344/right-choice-women-s-fashion-shoulder-handbag-5no-heavy-zip-500x500.jpg"},
        {"id":112,"name":"jewellery","cat":"Jewellery","color":"Black","price":1000,"desc":"The coolest wallet present in market","url":"https://cdn.shopify.com/s/files/1/1088/7532/t/6/assets/feature3.jpg?4762852817932839041"},
        {"id":113,"name":"toys","cat":"Toys","color":"Black","price":200000,"desc":"The coolest watch present in market","url":"http://ecx.images-amazon.com/images/I/51OcLXDTxOL.jpg"},
        {"id":114,"name":"schools","cat":"School Supplies","color":"Black","price":3000,"desc":"The coolest tshirt present in market","url":"https://s-media-cache-ak0.pinimg.com/736x/17/2f/37/172f3714ee40d164351b147c272350bb--teen-backpacks-school-backpacks.jpg"},
        {"id":115,"name":"kids dress","cat":"Clothing","color":"Black","price":20000,"desc":"The coolest shoes present in market","url":"https://s-media-cache-ak0.pinimg.com/736x/9e/c9/43/9ec94356145327ff16cfb3354b2b80d5.jpg"},
        {"id":116,"name":"kids footwear","cat":"Kids Footwear","color":"Black","price":2000,"desc":"The coolest formals present in market","url":"https://ddstep.com.au/wp-content/uploads/2015/08/children_shoes_perth_kids_footwear_AC290-39BM06-500x500.jpg"}
       
        ]

public catName:any;
constructor(private route:ActivatedRoute,private router:Router, public gc:appService){}
ngOnInit(){
   this.route.params.subscribe((params:Params)=>{
       let  id=(params['cat']);
       this.catName=id;
   })
}
}