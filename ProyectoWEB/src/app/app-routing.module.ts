import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PlanesComponent } from './planes/planes.component';
import { AboutUsComponent } from './about-us/about-us.component';




const routes: Routes = [

  { path: 'home', component: HomeComponent},
  { path: 'planes', component: PlanesComponent},
  { path: 'about', component: AboutUsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
