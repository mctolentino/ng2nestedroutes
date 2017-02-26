import {Component} from "@angular/core";
import {Routes, ActivatedRoute, Router} from "@angular/router";
import {MainComponent} from "./main/main.component";
import {InterestComponent} from "./interest/interest.component";
import {SportifyComponent} from "./sportify/sportify.component";
import {ByIdComponent} from "./by-id/by-id.component";

export const routes: Routes = [
  {path: '', redirectTo: 'main', pathMatch: 'full'},
  {path: 'main', component: MainComponent},
  {path: 'interest', component: InterestComponent},
  {path: 'sportify', component: SportifyComponent},
  {path: ':id', component: ByIdComponent}
];

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {

  constructor(private router: Router, private route: ActivatedRoute) {
  }

  goToProduct(id: string): void {
    this.router.navigate(['./', id], {
      relativeTo: this.route
    })
  }
}
