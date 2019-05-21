import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//form control para ngModel
import { FormsModule } from '@angular/forms';


// import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { HttpRouteBaseService } from './services/http-route-base.service';
import { ProductosService } from './services/productos.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { NavComponent } from './components/nav/nav.component';
import { FootComponent } from './components/foot/foot.component';
import { ListadoComponent } from './components/listado/listado.component';
import { BotonBorrarComponent } from './components/boton-borrar/boton-borrar.component';
import { BuscadorComponent } from './components/buscador/buscador.component';
import { AltaComponent } from './components/alta/alta.component';
import { ProductosBoardComponent } from './components/productos-board/productos-board.component';
import { DetalleComponent } from './components/detalle/detalle.component';
import { ActorBoardComponent } from './components/actor-board/actor-board.component';
import { ActorAltaComponent } from './components/actor-alta/actor-alta.component';
import { ActorListadoComponent } from './components/actor-listado/actor-listado.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PageNotFoundComponent,
    NavComponent,
    FootComponent,
    ListadoComponent,
    BotonBorrarComponent,
    BuscadorComponent,
    AltaComponent,
    ProductosBoardComponent,
    DetalleComponent,
    ActorBoardComponent,
    ActorAltaComponent,
    ActorListadoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, // form control
    HttpClientModule,
  ],
  providers: [
    HttpRouteBaseService,
    ProductosService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
