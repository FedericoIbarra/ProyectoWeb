import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PlanesComponent } from './planes/planes.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { InfoNutrimentalComponent} from './info-nutrimental/info-nutrimental.component';




const routes: Routes = [

  { path: 'home', component: HomeComponent},
  { path: 'planes', component: PlanesComponent},
  { path: 'info', component: InfoNutrimentalComponent},
  { path: 'about', component: AboutUsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
