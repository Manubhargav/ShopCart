import {Component,OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {AppComponent} from './app.component';
import {appService} from './app.service'
// import somename = require('./global');

@Component({
template:`
 
    <div *ngFor="let data of details|slice:itemid-1:itemid; let i = index;" style="color:red">
    <div class="col-md-12 force-overflow" id="style-3" >
        <img class="col-md-6 img-responsive" src="{{data.url}}" alt="pic" style="margin-top:50px;">
        <div class="col-md-6 " style="margin-top:150px;" >
            <p><em><b>Name:</b></em>{{data.name}}<p>
            <p><em><b>Price:</b></em>{{data.price | currency:'INR'}}<p>
            <p><em><b>Color:</b></em>{{data.color}}<p>
            <p><em><b>Description: </b></em>{{data.desc}}</p>
            <button (click)="gc.getCart(data)" class="btn btn-success">Add to Cart</button> 
        </div>
    </div>
    </div>
    `
})

export class flashComponent implements OnInit{
    details=
 [{"id":1,"name":"Rado watch","color":"Black","price":200000,"desc":"The coolest watch present in market","url":"http://www.minibazar.in/wp-content/uploads/rado-shine-black.jpg"},
        {"id":2,"name":"tshirt","color":"Black","price":3000,"desc":"The coolest tshirt present in market","url":"https://3.imimg.com/data3/HV/VV/MY-4437324/polo-neck-t-shirts-500x500.jpg"},
        {"id":3,"name":"shoes","color":"Black","price":20000,"desc":"The coolest shoes present in market","url":"http://i.ebayimg.com/images/i/271723310731-0-1/s-l1000.jpg"},
        {"id":4,"name":"formals","color":"Black","price":2000,"desc":"The coolest formals present in market","url":"https://4.imimg.com/data4/AK/DJ/MY-11904132/slim-fit-men-formal-trousers-500x500.jpg"},
        {"id":5,"name":"shirt","color":"Black","price":200,"desc":"The coolest shirt present in market","url":"https://4.imimg.com/data4/AY/NP/MY-27633995/gents-shirts-500x500.jpg"},
    {"id":6,"name":"wallet","color":"Black","price":1000,"desc":"The coolest wallet present in market","url":"http://i.ebayimg.com/00/s/NTAwWDUwMA==/z/UmUAAMXQVT9SsR-n/$_3.JPG?set_id=2"}]

public itemid:any;
constructor(private route:ActivatedRoute, public gc:appService){}
ngOnInit(){
    let id=this.route.snapshot.params['id'];
    this.itemid=id;
}
}
