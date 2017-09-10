import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import {HttpModule} from '@angular/http';
import { AppComponent }  from './app.component';
import { LoginComponent }  from './login.component';
import {AppRoutingModule} from './app-routing.module';
import {routingComponents} from './app-routing.module';
import {ReactiveFormsModule} from '@angular/forms';
import {Ng2Webstorage} from 'ng2-webstorage';

@NgModule({
  imports: [
    BrowserModule,ReactiveFormsModule, Ng2Webstorage,
    FormsModule, HttpModule,AppRoutingModule
  ],
  declarations: [
    AppComponent, LoginComponent,routingComponents
  ],
  
  bootstrap: [ AppComponent ]
})
export class AppModule {}