import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Layout } from './componet/layout/layout';
import { Home } from './pages/home/home';
import { Bebidas } from './pages/bebidas/bebidas';
import { Alimentos } from './pages/alimentos/alimentos';
import { Administrador } from './componet/administrador/administrador';
import { Gestor } from './pages/gestor/gestor';
import { Gestoradmi } from './componet/gestoradmi/gestoradmi';

export const routes: Routes = [
    {
        path: '',
        component: Layout,
        children: [
            { path: 'home', component: Home },
            { path: 'bebida', component: Bebidas },
            { path: 'alimentos', component: Alimentos }
        ]
    },

    { path: 'administrador', component: Administrador, pathMatch: 'full' },
    {path:'gestor', component: Gestoradmi, pathMatch:'full'}
    
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }