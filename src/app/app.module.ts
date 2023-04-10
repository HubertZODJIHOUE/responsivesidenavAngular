import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SettingsComponent } from './settings/settings.component';
import { MediaComponent } from './media/media.component';
import { StatisticComponent } from './statistic/statistic.component';
import { PagesComponent } from './pages/pages.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BodyComponent } from './body/body.component';
import { CoupensComponent } from './coupens/coupens.component';
import { ProductsComponent } from './products/products.component';
import {RouterLink, RouterOutlet} from "@angular/router";
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    SettingsComponent,
    MediaComponent,
    StatisticComponent,
    PagesComponent,
    SidebarComponent,
    DashboardComponent,
    BodyComponent,
    CoupensComponent,
    ProductsComponent
  ],
  imports: [
    BrowserModule,
    RouterLink,
    AppRoutingModule,
    RouterOutlet
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
