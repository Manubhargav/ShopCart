import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import {HttpModule} from '@angular/http';
import { AppComponent }  from './app.component';
import { LoginComponent }  from './login.component';
import {AppRoutingModule} from './app-routing.module';
import {routingComponents} from './app-routing.module';
import {ReactiveFormsModule} from '@angular/forms';
import {Ng2Webstorage} from 'ng2-webstorage';
import { HeroJobAdComponent }   from './hero-job-ad.component';
import { AdBannerComponent }    from './ad-banner.component';
import { HeroProfileComponent } from './hero-profile.component';
import { AdDirective }          from './ad.directive';
import {highlightDirective} from './highlight.directive';
import { FetchJsonPipe} from './app.fetch';
@NgModule({
  imports: [
    BrowserModule,ReactiveFormsModule, Ng2Webstorage,
    FormsModule, HttpModule,AppRoutingModule
  ],
  declarations: [
    AppComponent, LoginComponent,routingComponents,AdBannerComponent,
                  HeroJobAdComponent,
                  HeroProfileComponent,
                  AdDirective,highlightDirective, FetchJsonPipe
  ],
   entryComponents: [ HeroJobAdComponent, HeroProfileComponent ],
  bootstrap: [ AppComponent ]
})
export class AppModule {}