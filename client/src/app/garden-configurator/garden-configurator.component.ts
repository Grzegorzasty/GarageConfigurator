import {Component} from '@angular/core';

@Component({
  selector: 'app-garden-configurator',
  templateUrl: './garden-configurator.component.html',
  styleUrls: ['./garden-configurator.component.css']
})
export class GardenConfiguratorComponent {
  type: string = '';
  isPlastered: boolean;
  constructor() { }

  changeType(): void {
    this.isPlastered = this.type !== 'tynkowany'
  }

}
