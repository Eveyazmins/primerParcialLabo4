import { Component, OnInit } from '@angular/core';
import { Pelicula } from './../../class/pelicula';
import { PeliculasService } from '../../services/peliculas.service';


@Component({
  selector: 'app-alta',
  templateUrl: './alta.component.html',
  styleUrls: ['./alta.component.css']
})
export class AltaComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
