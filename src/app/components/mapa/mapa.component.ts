import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.component.html',
  styleUrls: ['./mapa.component.css'],
})
export class MapaComponent implements OnInit {
  lat: number = 51.678418;
  lng: number = 7.809007;

  constructor() {}

  ngOnInit(): void {}
}
