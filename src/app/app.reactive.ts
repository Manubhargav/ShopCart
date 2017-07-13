import {Component} from '@angular/core';
import {FormGroup,FormControl,Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {appService} from './app.service';
@Component({
template:`
<form [formGroup]="userform" (ngSubmit)="onSub()">
<div class="form-group">
<label >name</label>
<input type="text" ngModel #refname formControlName="name"  class="form-control">
</div>
<div class="form-group">
<label >Email</label>
<input type="email" ngModel  #refemail formControlName="email"  class="form-control" email>
</div>
<div formGroupName="address" #refadd>
<div class="form-group">
<label >street</label>
<input type="text" ngModel #refstreet formControlName="street"  class="form-control">
</div>
<div class="form-group">
<label >city</label>
<input type="text" ngModel #refcity formControlName="city"  class="form-control">
</div>
<div class="form-group">
<label >pincode</label>
<input type="text" ngModel #refpincode formControlName="pincode"  class="form-control">
</div>
</div>
<div class="form-group">
<label>phone</label>
<input type="text" ngModel formControlName="phone"  class="form-control">
</div>

<div class="form-group">
<input type="radio" formControlName="type" value="Cash" > Cash on Delivery
<input type="radio" formControlName="type" value="Card"> Card Payment
</div>
<div class="form-group">
<input type="checkbox" name="active" ngModel required formControlName="check">I understand the terms and conditions
</div>
<button type="submit" class="btn btn-success" [disabled]="!userform.valid" (click)="gd.getDetail([refname.value,refstreet.value,refcity.value,refpincode.value])">Place order</button>
</form>

`,
styles:[`input.ng-invalid{
border-left:5px solid red}
input.ng-valid
{border-left:5px solid green
}
`]
})
export class reactiveComponent{
constructor(private route:Router,public gd:appService){}
userform=new FormGroup({
    name:new FormControl(null,[Validators.required,Validators.minLength(4),Validators.maxLength(15)]),
    email:new FormControl(null,Validators.required,Validators.email["email"]),
    address:new FormGroup({
        street:new FormControl(null,Validators.required),
        city:new FormControl(null,Validators.required),
        pincode:new FormControl(null,[Validators.required,Validators.pattern("^[1-9][0-9]{5}$")])
        
    }) ,
    phone:new FormControl(null,[Validators.required,Validators.pattern("^[7-9][0-9]{9}$")]),
    check:new FormControl(null,[Validators.required]),
    type: new FormControl(null,[Validators.required])

});
onSub(){
    alert("Thanks for shopping");
    this.route.navigate(["/detail"])
}


}