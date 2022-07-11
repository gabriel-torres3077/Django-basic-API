import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PhoneComponent } from './phone/phone.component';
import { PhoneViewComponent } from './phone/phone-view/phone-view.component';
import { PhoneDetailComponent } from './phone/phone-detail/phone-detail.component';

import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './component/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    PhoneComponent,
    PhoneViewComponent,
    PhoneDetailComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
