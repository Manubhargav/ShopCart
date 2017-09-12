import {finalComponent } from './app.final';
import { async,ComponentFixture,TestBed } from "@angular/core/testing";
import { By }              from '@angular/platform-browser';
import { DebugElement }    from '@angular/core';
import somenam = require('./global');

describe('Final component', () => {

  let comp:    finalComponent;
  let fixture: ComponentFixture<finalComponent>;
  let de:      DebugElement[];
  let el:      HTMLElement;
  let detail:any=['test1','test2','test3','test4']
  let taskTitles: any[];
  let appServiceStub: {
    detail: any;
  };
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ finalComponent ], // declare the test component
    })
    // .compileComponents();  // compile template and css
  }));

   beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ finalComponent ], // declare the test component
       
      
    });
   

    fixture = TestBed.createComponent(finalComponent);
    comp = fixture.componentInstance; // BannerComponent test instance
    fixture.whenStable().then(() => {
    // after something in the component changes, you should detect changes
    fixture.detectChanges();

    // everything else in the beforeEach needs to be done here.
     de = fixture.debugElement.queryAll(By.css('h1.test'));

})
    // query for the title <h1> by CSS element selector
    // de = fixture.debugElement.queryAll(By.css('h1.test'));
    // el = de.nativeElement;
  });

 

  it('should create component', () => expect(de).toBeDefined() );
   it('should create component', () => {
       fixture = TestBed.createComponent(finalComponent);
    comp = fixture.componentInstance; // BannerComponent test instance
    fixture.whenStable().then(() => {
    // after something in the component changes, you should detect changes
    fixture.detectChanges();

    // everything else in the beforeEach needs to be done here.
     de = fixture.debugElement.queryAll(By.css('h1.test'));

})
       expect(de).toContain('firstname')
}
     );
 

});


