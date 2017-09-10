import { NgModule }      from '@angular/core';
import {RouterModule,Routes} from '@angular/router';
import {menComponent} from './app.menComponent';
import {advertiseComponent} from './app.advertise';
import {flashComponent} from './app.flashDetails';
import {catComponent} from './app.catdetails';
import {cartComponent} from './app.cart';
import {reactiveComponent} from './app.reactive';
import {finalComponent} from './app.final';
const routes:Routes=[{
    path:'Flashdeals',component:menComponent},
    { path:'Home',component:advertiseComponent},
    { path: 'Flashdeals/:id', component: flashComponent },
     { path: 'Home/:cat', component: catComponent },
      { path: 'cart', component: cartComponent },
       { path: 'form', component: reactiveComponent },
       {path: 'detail', component: finalComponent},
    { path:'', redirectTo: '/Home', pathMatch: 'full' }];

@NgModule({
    imports:[
RouterModule.forRoot(routes)
    ],
    exports:[
        RouterModule
    ]
})
export class AppRoutingModule{}
export const routingComponents=[menComponent,advertiseComponent,flashComponent,catComponent,cartComponent,reactiveComponent,finalComponent]