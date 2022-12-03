import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from 'src/services/in-memory-data.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstCmpComponent } from './first-cmp/first-cmp.component';
import { SecondCmpComponent } from './second-cmp/second-cmp.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstCmpComponent,
    SecondCmpComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation:false}
    )
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
