import { Component, OnInit, Input } from '@angular/core';
import { Pelicula } from './../../class/pelicula';


@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css']
})
export class DetalleComponent implements OnInit {

  @Input() pelicula: Pelicula;


  constructor() {
    this.pelicula = new Pelicula(0, '', '', '', 0, '');
   }

  ngOnInit() {
  }

}
