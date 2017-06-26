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

@NgModule({
  imports: [
    BrowserModule,
    FormsModule, HttpModule,RouterModule.forRoot([{
    path:'Men',component:menComponent},
    { path:'Home',component:advertiseComponent},
    { path: 'Men/:id', component: flashComponent },
     { path: 'Home/:cat', component: catComponent },

    { path:'', redirectTo: '/Home', pathMatch: 'full' }
    ])
  ],
  declarations: [
    AppComponent, LoginComponent,menComponent,advertiseComponent,flashComponent,catComponent
  ],
  
  bootstrap: [ AppComponent ]
})
export class AppModule { }