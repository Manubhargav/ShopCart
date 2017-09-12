import {ExtraComponent } from './extramodule/extra.component';
import { async,ComponentFixture,TestBed } from "@angular/core/testing";
import { By }              from '@angular/platform-browser';
import { DebugElement }    from '@angular/core';


describe('Extracomponent test ----- ', () => {

  let comp:    ExtraComponent;
  let fixture: ComponentFixture<ExtraComponent>;
  let de:      DebugElement;
  let el:      HTMLElement;
   beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ ExtraComponent ], // declare the test component
      
    });

    fixture = TestBed.createComponent(ExtraComponent);
    comp = fixture.componentInstance; // BannerComponent test instance

    // query for the title <h1> by CSS element selector
    de = fixture.debugElement.query(By.css('h1'));
    el = de.nativeElement;
  });

  it('no title in the DOM until manually call `detectChanges`', () => {
   
    expect(el.textContent).toEqual('');
  });

  it('should display original title', () => {
    
    fixture.detectChanges();
    expect(el.textContent).toContain(comp.title);
  });

  it('should display a different test title', () => {
   
    comp.title = 'Rate your experience';
    fixture.detectChanges();
    expect(el.textContent).toContain('Rate your experience');
  });
});
  // async beforeEach
  // beforeEach(async(() => {
  //   TestBed.configureTestingModule({
  //     declarations: [ ExtraComponent ], // declare the test component
  //   })
  //   .compileComponents();  // compile template and css
  // }));

  // //synchronous beforeEach
  // beforeEach(() => {
  //   fixture = TestBed.createComponent(ExtraComponent);

  //   comp = fixture.componentInstance; // BannerComponent test instance

  //   //query for the title <h1> by CSS element selector
  //   de = fixture.debugElement.query(By.css('h3'));
  //   el = de.nativeElement;
  // });

  // //  it('true is true', () => expect(true).toBe(true));
  // //  it('false is false', () => expect(false).toBe(false));
  //    it('no title in the DOM until manually call `detectChanges`', () => {
  //   expect(el.textContent).toEqual('');
  // });

  // it('should display original title', () => {
  //   fixture.detectChanges();
  //   expect(el.textContent).toContain(comp.title);
  // });
  //  it("some test",()=>{
  //    comp.title = 'Test Title';
  //   fixture.detectChanges();
  //   expect(el.textContent).toContain('Test Title');
  //  });

  // it('no title in the DOM until manually call `detectChanges`', () => {
  //   expect(el.textContent).toEqual('');
  // });




// describe('search',()=>{
//   it("result",()=>{
//     const result=AppComponent.partial("for","Formals");
//     expect(result).toBe(true);
//   })
// })


// describe('AppComponent', function () {
//   it('true is true', () => expect(true).toBe(true));
//     let fixture: ComponentFixture<AppComponent>;

//     beforeEach(() => {
//         TestBed.configureTestingModule({
//             declarations: [AppComponent]
//         });

//         fixture = TestBed.createComponent(AppComponent);
//         fixture.detectChanges();
//     });
    
// })


// describe('1st tests', () => {
//   it('true is true', () => expect(true).toBe(true));
// });