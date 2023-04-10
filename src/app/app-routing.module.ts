import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DashboardComponent} from "./dashboard/dashboard.component";
import {Routes} from "@angular/router";
import {ProductsComponent} from "./products/products.component";
import {CoupensComponent} from "./coupens/coupens.component";
import {MediaComponent} from "./media/media.component";
import {SettingsComponent} from "./settings/settings.component";
import {PagesComponent} from "./pages/pages.component";


const  routes: Routes =[
  {path: 'dashboard', component: DashboardComponent},
  {path: 'products', component: ProductsComponent},
  {path: 'coupens', component: CoupensComponent},
  {path: 'media', component: MediaComponent},
  {path: 'settings', component: SettingsComponent},
  {path: 'pages', component: PagesComponent},

]
@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class AppRoutingModule { }
