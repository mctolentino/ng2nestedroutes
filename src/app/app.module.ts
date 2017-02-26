import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import {AppComponent} from './app.component';
import {Routes, RouterModule} from "@angular/router";
import {HomeComponent} from './home/home.component';
import {ProductsComponent, routes as productRoutes} from './products/products.component';
import {MainComponent} from './products/main/main.component';
import {InterestComponent} from './products/interest/interest.component';
import {SportifyComponent} from './products/sportify/sportify.component';
import {ByIdComponent} from './products/by-id/by-id.component';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'products', component: ProductsComponent, children: productRoutes}
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductsComponent,
    MainComponent,
    InterestComponent,
    SportifyComponent,
    ByIdComponent,
    ByIdComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
