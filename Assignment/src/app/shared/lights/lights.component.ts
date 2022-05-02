import { Component, OnInit } from '@angular/core';
import { Light } from '../../light';

@Component({
  selector: 'app-lights',
  inputs: ['light'],
  templateUrl: './lights.component.html',
  styleUrls: ['./lights.component.scss'],
})
export class LightsComponent implements OnInit {

  light: Light;

  constructor() { }

  ngOnInit() {}

}
