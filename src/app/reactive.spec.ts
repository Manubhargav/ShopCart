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

describe('reactiveComponent (templateUrl)', () => {

beforeEach(async(()=>{
    TestBed.configureTestingModule({imports:[AppModule],
    providers: [appService],
});
    
      
    
    
    TestBed.compileComponents();
}));
it('reactive forms defined',()=>
{
    let fixture =TestBed.createComponent(reactiveComponent);
    fixture.detectChanges();
    expect(fixture.nativeElement).toBeDefined();
    
})
it('reactive forms contains name',()=>
{
    let fixture =TestBed.createComponent(reactiveComponent);
    fixture.detectChanges();
    expect(fixture.nativeElement.textContent).toContain('Name');
    
})
it('reactive forms contains button',()=>
{
    let fixture =TestBed.createComponent(reactiveComponent);
    fixture.detectChanges();
    let loginBtn = fixture.debugElement.query(By.css('button')).nativeElement;
    expect(loginBtn.disabled).toBe(true);
})
it('reactive forms just checking',()=>
{
    let fixture =TestBed.createComponent(reactiveComponent);
    fixture.detectChanges();
    let comp = fixture.componentInstance;
    var returnvalue = comp.onSub();
    // let loginBtn = fixture.debugElement.query(By.css('button')).nativeElement;
    expect(returnvalue).toEqual('gfhnjm');
})



});

