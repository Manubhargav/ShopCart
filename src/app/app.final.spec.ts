// import { async, ComponentFixture, TestBed } from '@angular/core/testing';
// import { By }              from '@angular/platform-browser';
// import { DebugElement }    from '@angular/core';
// import { FormsModule,ReactiveFormsModule }   from '@angular/forms';
// import {Router} from '@angular/router';
// import {LoginComponent} from './login.component';
// import {AppRoutingModule} from './app-routing.module';
// import {menComponent} from './app.menComponent';
// import {advertiseComponent} from './app.advertise';
// import {flashComponent} from './app.flashDetails';
// import {catComponent} from './app.catdetails';
// import {cartComponent} from './app.cart';
// import {reactiveComponent} from './app.reactive';
// import {finalComponent} from './app.final';
// import {AppModule} from './app.module';
// import {AppComponent} from './app.component';
// import {appService} from './app.service';

// describe('finalComponent (templateUrl)', () => {

// beforeEach(async(()=>{
//     TestBed.configureTestingModule({imports:[AppModule]
//     ,providers:[appService]});
//     TestBed.compileComponents();
// }));
// it('displays properly1',()=>
// {
//     let fixture =TestBed.createComponent(finalComponent);
//     fixture.detectChanges();
//     expect(fixture.nativeElement.textContent).toContain('Order');
    
// })
// });

// import {Location} from "@angular/common";
// import {TestBed, fakeAsync, tick,async} from '@angular/core/testing';
// import {RouterTestingModule} from "@angular/router/testing";
// import {Router} from "@angular/router";
// import {routes} from "./app-routing.module";
// import {AppRoutingModule} from "./app-routing.module";
// import {LoginComponent} from './login.component';
// import {menComponent} from './app.menComponent';
// import {advertiseComponent} from './app.advertise';
// import {flashComponent} from './app.flashDetails';
// import {catComponent} from './app.catdetails';
// import {cartComponent} from './app.cart';
// import {reactiveComponent} from './app.reactive';
// import {finalComponent} from './app.final';
// import {AppModule} from './app.module';
// import {AppComponent} from './app.component';
// import {appService} from './app.service'
// import {FormGroup,FormControl,Validators} from '@angular/forms';
// describe('Router: App', () => {

//   let location: Location;
//   let router: Router;
//   let fixture;

//   beforeEach(async() => {
//     TestBed.configureTestingModule({
//       imports: [    RouterTestingModule.withRoutes(routes)],
//       declarations: [
//         menComponent,advertiseComponent,flashComponent,catComponent,cartComponent,reactiveComponent,finalComponent
//       ]
     
      
//     }).compileComponents();
    

//     // router = TestBed.get(Router);
//     // location = TestBed.get(Location);

//     // fixture = TestBed.createComponent(AppComponent);
//     // router.initialNavigation();
//   });

// //   it('fakeAsync works', fakeAsync(() => {
// //     let promise = new Promise((resolve) => {
// //       setTimeout(resolve, 10)
// //     });
// //     let done = false;
// //     promise.then(() => done = true);
// //     tick(50);
// //     expect(done).toBeTruthy();
// //   }));

//   it('navigate to "" redirects you to /home', async(() => {
//       router = TestBed.get(Router);
//     location = TestBed.get(Location);

//     fixture = TestBed.createComponent(AppComponent);
//     router.initialNavigation();
//     router.navigate(['']);
//     tick(50);
//     expect(location.path()).toBe('/Home');
//   }));

// //   it('navigate to "search" takes you to /search', async(() => {
// //     router.navigate(['/cart']);
// //     tick(50);
// //     expect(location.path()).toBe('/cart');
// //   }));
// });