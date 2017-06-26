import {Component,  OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
@Component({
template:`<h3>you have selected category=</h3>`
})
export class categoryComponent  implements OnInit{

public categoryname:any;
constructor(private route:ActivatedRoute){}
ngOnInit(){
    let id=this.route.snapshot.params['name'];
    this.categoryname=id;
}

}