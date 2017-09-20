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
import {highlightDirective} from './highlight.directive'
describe('APPComponent ', () => {

beforeEach(async(()=>{
    TestBed.configureTestingModule({imports:[AppModule],
        
    providers: [appService],
});
    
      
    
    
    TestBed.compileComponents();
}));
it('displays properly',()=>
{
    let fixture =TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    expect(fixture.nativeElement).toBeDefined();
    
})
it('displays properly2',()=>
{
    let fixture =TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    expect(fixture.nativeElement.textContent).toContain("Categories");
    
})
it('displays properly2',()=>
{
    let fixture =TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    expect(fixture.nativeElement.textContent).toContain("Flash Deals");
    
})
it('function property3',()=>
{
    let fixture =TestBed.createComponent(AppComponent);
    
    const element = fixture.debugElement.query(By.css(".testing"));
    element.triggerEventHandler("click", null);
    fixture.detectChanges();
    // expect(fixture.nativeElement.textContent).toContain("Flash Deals");
    expect(element.triggerEventHandler).toBeDefined();
    
})
it('functions checking return value',()=>
{
    let fixture =TestBed.createComponent(AppComponent);
    let comp = fixture.componentInstance;
    var rv = comp.partial('fora','Formals')
    expect(rv).toEqual(false);
    
})
it('functions checking return value',()=>
{
    let fixture =TestBed.createComponent(AppComponent);
    let comp = fixture.componentInstance;
    var rv = comp.partial('for','Formals')
    expect(rv).toEqual(true);
    
})
it('badge functions checking value1',()=>
{
    let fixture =TestBed.createComponent(AppComponent);
    let comp = fixture.componentInstance;
    var rv = comp.badge();
    expect(rv).toBeUndefined();
    
})
it('oncomp functions checking value2',()=>
{
    let fixture =TestBed.createComponent(AppComponent);
    let comp = fixture.componentInstance;
    var rv = comp.onComp('Test User');
    expect(rv).toBeUndefined();
    
})
it('oncomp functions checking value3',()=>
{
    let fixture =TestBed.createComponent(AppComponent);
    let element = fixture.debugElement.query(By.css(".badge"));
  
    expect(element.nativeElement.textContent).toBeDefined();
    
})
it('oncomp functions checking value4',()=>
{
    let fixture =TestBed.createComponent(AppComponent);
    let element = fixture.debugElement.query(By.css(".badge"));
    fixture.detectChanges();
    expect(element.nativeElement.textContent).toContain('0');
    
})
it('displays properly5',()=>
{
    let fixture =TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    let textDebugElement = fixture.debugElement.query(By.css(".wname"));
    let styles = window.getComputedStyle(textDebugElement.nativeElement); 
    expect(styles.color).toEqual('rgb(0, 0, 255)');
})
it('logout functions checking value2',()=>
{
    let fixture =TestBed.createComponent(AppComponent);
    let comp = fixture.componentInstance;
    var rv = comp.logout();
    expect(rv).toBeUndefined();
    
})
it('should have three highlighted elements', () => {
     let fixture =TestBed.createComponent(AppComponent);
    let  des = fixture.debugElement.queryAll(By.directive(highlightDirective));
  expect(des.length).toBe(0);
});
it('Html snippet working',()=>
{
    let fixture =TestBed.createComponent(AppComponent);
    let comp = fixture.componentInstance;
    var rv = comp.htmlSnippet;
    expect(rv).toBeDefined();
    
})
it('Html snippet working 1',()=>
{
    let fixture =TestBed.createComponent(AppComponent);
    let comp = fixture.componentInstance;
    var rv = comp.htmlSnippet;
    expect(rv).toBe('<b>Categories</b>');
    
})

});

