import { Routes } from "@angular/router";
import { HomeComponent } from './home/home.component';
import { MenusComponent } from './menus/menus.component';
import { RestaurantesComponent } from './restaurantes/restaurantes.component';
import { AboutComponent } from './about/about.component';

export const ROUTES: Routes = [
    {path: "", component: HomeComponent},
    {path: "menu", component: MenusComponent},
    {path: "restaurantes", component: RestaurantesComponent},
    {path: "about", component: AboutComponent}
];