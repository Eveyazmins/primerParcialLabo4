import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
// ....... seccions ....... //
import { HomeComponent } from './components/home/home.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { ListadoComponent } from './components/listado/listado.component';
import { ProductosBoardComponent } from './components/productos-board/productos-board.component';
import { AltaComponent } from './components/alta/alta.component';

import { BuscadorComponent } from './components/buscador/buscador.component';

import { ActorBoardComponent } from './components/actor-board/actor-board.component';
import { ActorAltaComponent } from './components/actor-alta/actor-alta.component';
import { ActorListadoComponent } from './components/actor-listado/actor-listado.component';



const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'busqueda', component: BuscadorComponent },
  {
    path: 'peliculas', component: ProductosBoardComponent,
    children:
      [{ path: '', component: ListadoComponent },
      { path: 'alta', component: AltaComponent }]
    },
    {
      path: 'actor', component: ProductosBoardComponent,
      children:
        [{ path: '', component: ActorListadoComponent },
        { path: 'listado', component: ActorListadoComponent },
        { path: 'alta', component: ActorAltaComponent }]
      },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
    // other imports here
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }
