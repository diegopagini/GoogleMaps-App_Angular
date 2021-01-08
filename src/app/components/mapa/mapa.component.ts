import { Component, OnInit } from '@angular/core';
import { Marcador } from '../../clases/marcador.class';

@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.component.html',
  styleUrls: ['./mapa.component.css'],
})
export class MapaComponent implements OnInit {
  marcadores: Marcador[] = [];
  lat: number = 51.678418;
  lng: number = 7.809007;

  constructor() {
    const nuevoMarcador = new Marcador(51.678418, 7.809007);
    this.marcadores.push(nuevoMarcador);
  }

  ngOnInit(): void {}

  agregarMarcador(event) {
    const coords: { lat: number; lng: number } = event.coords;
    const nuevoMarcador = new Marcador(coords.lat, coords.lng);
    this.marcadores.push(nuevoMarcador);
  }

  guardarStorage() {
    localStorage.setItem('marcadores', JSON.stringify(this.marcadores));
  }
}
