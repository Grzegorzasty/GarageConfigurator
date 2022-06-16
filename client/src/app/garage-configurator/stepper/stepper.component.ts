import {Component, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {MatHorizontalStepper} from "@angular/material/stepper";

@Component({
  selector: 'app-stepper',
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.css']
})
export class StepperComponent implements OnInit {
  @ViewChild('stepper') stepper: MatHorizontalStepper;

  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  roofChoice: number;
  isEditable = false;
  length = new FormControl('', [Validators.required]);

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
