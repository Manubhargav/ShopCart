import { Injectable }       from '@angular/core';
import {  Router, CanLoad, Route } from '@angular/router';
import {LocalStorageService} from 'ng2-webstorage';
import { CanActivate }    from '@angular/router';
@Injectable()
export class AuthGuard implements  CanLoad,CanActivate  {
  constructor( private router: Router,private localstorage:LocalStorageService) {}


  canActivate(){
    if (this.localstorage.retrieve('boundValue')=='admin') { return true; }
    alert('only admin access!!!');
    return false;
   
  }
  canLoad(route: Route): boolean {
    console.log(this.localstorage.retrieve('boundValue'));
    if (this.localstorage.retrieve('boundValue')) { return true; }
    alert('please login first to rate us!!!');
    return false;
  }
}