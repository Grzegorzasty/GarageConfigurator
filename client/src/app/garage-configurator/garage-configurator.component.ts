import { Component, OnInit } from '@angular/core';
import {MatStepperModule} from '@angular/material/stepper';

@Component({
  selector: 'app-garage-configurator',
  templateUrl: './garage-configurator.component.html',
  styleUrls: ['./garage-configurator.component.css']
})
export class GarageConfiguratorComponent implements OnInit {

  dls: number[] = [
    2,2.5,3,3.5,4,4.5,5
  ];


  constructor() { }

  ngOnInit(): void {
  }


}
