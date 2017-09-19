import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By }              from '@angular/platform-browser';
import { DebugElement }    from '@angular/core';
import { FormsModule,ReactiveFormsModule }   from '@angular/forms';
import {Router} from '@angular/router';
import {LoginComponent} from './login.component';
import {AppRoutingModule} from './app-routing.module';
import {menComponent} from './app.menComponent';
import {advertiseComponent} from './app.advertise';
import {flashComponent} from './app.flashDetails';
import {catComponent} from './app.catdetails';
import {cartComponent} from './app.cart';
import {reactiveComponent} from './app.reactive';
import {finalComponent} from './app.final';
import {AppModule} from './app.module';
import {AppComponent} from './app.component';
import {appService} from './app.service'

describe('loginComponent (templateUrl)', () => {

beforeEach(async(()=>{
    TestBed.configureTestingModule({imports:[AppModule],
    providers: [appService],
});
    TestBed.compileComponents();
}));
it('logincomponent defined properly',()=>
{
    let fixture =TestBed.createComponent(LoginComponent);
    fixture.detectChanges();
    expect(fixture.nativeElement).toBeDefined();   
})
it('template forms contains button',()=>
{
    let fixture =TestBed.createComponent(LoginComponent);
    fixture.detectChanges();
    let loginBtn = fixture.debugElement.query(By.css('button'));
    expect(loginBtn).toBeDefined();
})
it('template forms contains button',()=>
{
    let fixture =TestBed.createComponent(LoginComponent);
    fixture.detectChanges();
     let textDebugElement = fixture.debugElement.query(By.css("div.user"));
     let styles = window.getComputedStyle(textDebugElement.nativeElement);

    expect(styles.backgroundColor).toBe("rgb(255, 255, 255)");
})
});

