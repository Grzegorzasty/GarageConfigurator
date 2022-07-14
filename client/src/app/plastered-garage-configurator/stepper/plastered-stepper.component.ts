import {Component,  OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {MatHorizontalStepper} from "@angular/material/stepper";

@Component({
  selector: 'app-stepper-plastered',
  templateUrl: './plastered-stepper.component.html',
  styleUrls: ['./plastered-stepper.component.css']
})
export class PlasteredStepperComponent implements OnInit {
  @ViewChild('stepper') stepper: MatHorizontalStepper;

  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  length = new FormControl('', [Validators.required]);
  width = new FormControl('', [Validators.required]);
  height = new FormControl('', [Validators.required]);
  roofChoice: number;
  colorChoice: number;
  roofColorChoice: number;
  gateChoice: number;


  constructor(private _formBuilder: FormBuilder) {
  }

   ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required],
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required],
    });
  }
  ngAfterViewInit() {
    this.stepper._getIndicatorType = () => 'number';
  }

  setRoofChoice(roofChoiceId: number) {
    this.roofChoice = roofChoiceId;
  }

  setColourChoice(colourChoiceId: number) {
    this.colorChoice = colourChoiceId;
  }

  setRoofColorChoice(roofColorChoiceId: number) {
    this.roofColorChoice = roofColorChoiceId;
  }

  setGateChoice(gateChoiceId: number) {
    this.gateChoice = gateChoiceId;
  }

}
