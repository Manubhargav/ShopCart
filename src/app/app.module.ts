import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import {RouterModule} from '@angular/router';
import {HttpModule} from '@angular/http';
import { AppComponent }  from './app.component';
import { LoginComponent }  from './login.component';
import {menComponent} from './app.menComponent';
import {advertiseComponent} from './app.advertise';
import {flashComponent} from './app.flashDetails';
import {catComponent} from './app.catdetails';
import {cartComponent} from './app.cart';
import {reactiveComponent} from './app.reactive';
import {ReactiveFormsModule} from '@angular/forms';
import {finalComponent} from './app.final';

@NgModule({
  imports: [
    BrowserModule,ReactiveFormsModule,
    FormsModule, HttpModule,RouterModule.forRoot([{
    path:'Flashdeals',component:menComponent},
    { path:'Home',component:advertiseComponent},
    { path: 'Flashdeals/:id', component: flashComponent },
     { path: 'Home/:cat', component: catComponent },
      { path: 'cart', component: cartComponent },
       { path: 'form', component: reactiveComponent },
       {path: 'detail', component: finalComponent},

    { path:'', redirectTo: '/Home', pathMatch: 'full' }
    ])
  ],
  declarations: [
    AppComponent, LoginComponent,menComponent,advertiseComponent,flashComponent,catComponent,cartComponent,reactiveComponent,finalComponent
  ],
  
  bootstrap: [ AppComponent ]
})
export class AppModule { }