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

describe('catdetailsComponent (templateUrl)', () => {

beforeEach(async(()=>{
    TestBed.configureTestingModule({imports:[AppModule]});
    TestBed.compileComponents();
}));
it('displays properly1',()=>
{
    let fixture =TestBed.createComponent(catComponent);
    fixture.detectChanges();
    expect(fixture.nativeElement).toBeDefined();
    
})
it('displays properly2',()=>
{
    let fixture =TestBed.createComponent(catComponent);
    fixture.detectChanges();
    expect(fixture.nativeElement.textContent).toContain('');
    
})
it('displays properly3',()=>
{
    let fixture =TestBed.createComponent(catComponent);
    fixture.detectChanges();
    let styles = window.getComputedStyle(fixture.nativeElement);
    
    expect(styles.color).toEqual('rgb(0, 0, 0)');
    
})
let textDebugElement: DebugElement;
it('displays properly4',()=>
{
    let fixture =TestBed.createComponent(catComponent);
    fixture.detectChanges();
    textDebugElement = fixture.debugElement.query(By.css("div"));
    let styles = window.getComputedStyle(textDebugElement.nativeElement);

    expect(styles.color).toContain("rgb(0, 0, 0)")
    
})




});

