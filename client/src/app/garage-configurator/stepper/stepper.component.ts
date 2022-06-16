import {Component, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MatHorizontalStepper} from "@angular/material/stepper";

@Component({
  selector: 'app-stepper',
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.css']
})
export class StepperComponent implements OnInit {
  @ViewChild('stepper') stepper: MatHorizontalStepper;

  dls: number[] = [
    2,2.5,3,3.5,4,4.5,5
  ];
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  roofChoice: number;
  isEditable = false;

  constructor(private _formBuilder: FormBuilder) { }

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

  setRoofChoice(roofChoiceId) {
    this.roofChoice = roofChoiceId;
    console.log(this.roofChoice);
  }


}
