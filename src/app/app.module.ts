import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing';
import { LayoutComponent } from './layout/layout.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { CustomService } from './shared/services/custom.service';

import { Config }         from './shared/config/config';

// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './models/in-memory-data.service';

import { PublicService } from './shared/services/public/public.service';
import { InitLoadCustomService } from './shared/services/init-load-custom.service';
import { ShoppingCartService } from './shared/services/shopping-cart.service';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    //InMemoryWebApiModule.forRoot(InMemoryDataService),
    AppRoutingModule
  ],
  providers: [
    CustomService,
    PublicService,
    InitLoadCustomService,
    ShoppingCartService,
    Config
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
