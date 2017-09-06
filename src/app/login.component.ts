import { Component, Input,Output } from '@angular/core';
import {EventEmitter} from '@angular/core';
import {AppComponent} from './app.component';
import {LocalStorage,LocalStorageService} from 'ng2-webstorage';

@Component({
  selector: 'login-form',
  templateUrl: `./login.component.html`,
  styles:[`input.ng-invalid{
      border-left:5px solid red;
  }
  input.ng-valid{
       border-left:5px solid green;
  }`]
})
export class LoginComponent {
   @Input() raw:any;
   @Input() emp:any;
  @Output() onComp=new EventEmitter<any>();
  public attribute:any;
  
  constructor(private storage:LocalStorageService) {}

   onSubmit(value:any){
       if(value.name==value.password && value.name!='' && value.name.length>=4){
       alert("welcome "+ value.name);
           this.raw=false;
            this.emp=true;
           
       }else{
           alert("Please enter username and password correctly");
       }
   }
   call(value:string,value1:string){
       if(value==value1){
           this.storage.store('boundValue', value);
           
           this.attribute = this.storage.retrieve('boundValue');
            this.onComp.emit(this.attribute);      
       } 
   }
}