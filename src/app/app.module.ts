import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule,LOCALE_ID,DEFAULT_CURRENCY_CODE } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from 'src/services/in-memory-data.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstCmpComponent } from './first-cmp/first-cmp.component';
import { SecondCmpComponent } from './second-cmp/second-cmp.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'
import { LOCATION_INITIALIZED, registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr'
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import { HeroDetailComponent } from './hero-detail/hero-detail.component'
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';


registerLocaleData(localeFr,'fr')

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

@NgModule({
  declarations: [
    AppComponent,
    FirstCmpComponent,
    SecondCmpComponent,
    HeroDetailComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation:false,
        passThruUnknownUrl : true}
      
    ),
    BrowserAnimationsModule,
    TranslateModule.forRoot(
      {
        defaultLanguage: 'fr',
        loader : {
          provide: TranslateLoader,
          useFactory: HttpLoaderFactory,
          deps: [HttpClient]
        }
      }
    ),
    FormsModule
  ],
  providers: [
    {
      provide:LOCALE_ID, useValue:'fr'
    },
    {
      provide : DEFAULT_CURRENCY_CODE , useValue :'EUR'
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
