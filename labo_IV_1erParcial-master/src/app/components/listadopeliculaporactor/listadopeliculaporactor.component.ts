import { Component, OnInit, Input } from '@angular/core';
import { Pelicula } from './../../class/pelicula';

@Component({
  selector: 'app-listadopeliculaporactor',
  templateUrl: './listadopeliculaporactor.component.html',
  styleUrls: ['./listadopeliculaporactor.component.css']
})
export class ListadopeliculaporactorComponent implements OnInit {

  @Input() listado: Pelicula[];

  constructor() { }

  ngOnInit() {
  }

}
