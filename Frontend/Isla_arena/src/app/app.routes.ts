import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Layout } from './componet/layout/layout';
import { Home } from './pages/home/home';
import { Bebidas } from './pages/bebidas/bebidas';
import { Alimentos } from './pages/alimentos/alimentos';

export const routes: Routes = [
    {path:'home', component: Home},
    {path:'bebida',component:Bebidas},
    {path:'alimentos', component:Alimentos}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }