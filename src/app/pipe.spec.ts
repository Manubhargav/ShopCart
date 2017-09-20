import {FetchJsonPipe} from './app.fetch';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Http, HttpModule } from '@angular/http';

describe('TitleCasePipe', () => {
  // This pipe is a pure, stateless function so no need for BeforeEach
 
  var  http:Http;
  let pipe:FetchJsonPipe;
    pipe= new FetchJsonPipe(http as Http);
  it('transforms fetch no data initially', () => {
     expect(pipe.transform('')).toBe(null);
   })
   
});