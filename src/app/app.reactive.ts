import {Component} from '@angular/core';
import {FormGroup,FormControl,Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {appService} from './app.service';
@Component({
template:`
<table>

<form [formGroup]="userform" (ngSubmit)="onSub()">

<tr>
<td>
<label >Name</label></td>
<td class="tooltip">
<input type="text" ngModel #refname formControlName="name"  class="form-control "><span class="tooltiptext">Contain only alphabets</span></td>
</tr>

<tr>
<td>
<label >Email</label></td>
<td class="tooltip">
<input type="email" ngModel  #refemail formControlName="email"  class="form-control" email><span class="tooltiptext">Provide valid email id</span></td>
</tr>

<tr>
<td>
<label >Street</label></td>
<td>
<input type="text" ngModel #refstreet formControlName="street"  class="form-control"></td>
</tr>
<tr>
<td>
<label >City</label></td>
<td>
<input type="dropdown" ngModel #refcity formControlName="city"  class="form-control"></td>
</tr>
<tr>
<td>
<label >Pincode</label></td>
<td>
<input type="text" ngModel #refpincode formControlName="pincode"  class="form-control"></td>
</tr>

<tr><td>
<label>Phone</label></td>
<td>
<input type="text" ngModel formControlName="phone"  class="form-control"></td>
</tr>
<br>

<tr style="font-size:20px; font-weight:bold;"><td>
<input type="radio" formControlName="type" value="Cash" > COD</td>
<td>
<input type="radio" formControlName="type" value="Card" > Card Payment</td>
</tr>
<tr style="font-size:13px;"><td  colspan="2">
<input type="checkbox" name="active" ngModel required formControlName="check">I understand the terms and conditions
</td></tr>
<button type="submit" class="btn btn-success" [disabled]="!userform.valid" (click)="gd.getDetail([refname.value,refstreet.value,refcity.value,refpincode.value]) ; rip()">Place order</button>
</form>
</table>
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
   
        street:new FormControl(null,[Validators.required,Validators.maxLength(50)]),
        city:new FormControl(null,Validators.required),
        pincode:new FormControl(null,[Validators.required,Validators.pattern("^[1-9][0-9]{5}$")])
    ,
    phone:new FormControl(null,[Validators.required,Validators.pattern("^[7-9][0-9]{9}$")]),
    check:new FormControl(null,[Validators.required]),
    type: new FormControl(null,[Validators.required])

});
onSub(){
  
    this.route.navigate(["/detail"])
    return 'gfhnjm'
}
rip(){
     localStorage.removeItem('cart');
 } 
//  data(pincode:any){
//     var lat;
//     var lng;
//     var geocoder = new google.maps.Geocoder();
//     geocoder.geocode({ 'address': zip }, function (results, status) {
//         if (status == google.maps.GeocoderStatus.OK) {
//             geocoder.geocode({'latLng': results[0].geometry.location}, function(results, status) {
//             if (status == google.maps.GeocoderStatus.OK) {
//                 if (results[1]) {
//                     var loc = getCityState(results);
//                 }
//             }
//         });
//         }
//     }); 

//  getCityState(results)
//     {
//         var a = results[0].address_components;
//         var city, state;
//         for(i = 0; i <  a.length; ++i)
//         {
//            var t = a[i].types;
//            if(compIsType(t, 'administrative_area_level_1'))
//               state = a[i].long_name; //store the state
//            else if(compIsType(t, 'locality'))
//               city = a[i].long_name; //store the city
//         }
//         return (city + ', ' + state)
//     }

// function compIsType(t, s) { 
//        for(z = 0; z < t.length; ++z) 
//           if(t[z] == s)
//              return true;
//        return false;
//     }

//  }
    
}