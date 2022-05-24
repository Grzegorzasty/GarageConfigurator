import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-stepper',
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.css']
})
export class StepperComponent implements OnInit {
  prawolewo: boolean;
  tyl: boolean;
  prawo: boolean;
  lewo: boolean;
  przod: boolean;
  przodtyl: boolean;

  dls: number[] = [
    2,2.5,3,3.5,4,4.5,5
  ];
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  isEditable = false;

  constructor(private _formBuilder: FormBuilder) { }

   ngOnInit() {
     this.prawolewo = true;
     this.tyl = true;
     this.prawo = true;
     this.lewo = true;
     this.przod = true;
     this.przodtyl = true;

    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required],
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required],
    });
  }
  isChecked(name:string) {
    switch(name){
      case "prawolewo": {
        this.prawolewo = !this.prawolewo; 
        this.tyl = true;
        this.prawo = true;
        this.lewo = true;
        this.przod = true;
        this.przodtyl = true;
        break;
      }
      case "tyl": {
        this.prawolewo = true; 
        this.tyl = !this.tyl;
        this.prawo = true;
        this.lewo = true;
        this.przod = true;
        this.przodtyl = true;
        break;
      }
      case "prawo": {
        this.prawolewo = true; 
        this.tyl = true;
        this.prawo = !this.prawo;
        this.lewo = true;
        this.przod = true;
        this.przodtyl = true;
        break;
      }
      case "lewo": {
        this.prawolewo = true; 
        this.tyl = true;
        this.prawo = true;
        this.lewo = !this.lewo;
        this.przod = true;
        this.przodtyl = true;
        break;
      }
      case "przod": {
        this.prawolewo = true; 
        this.tyl = true;
        this.prawo = true;
        this.lewo = true;
        this.przod = !this.przod;
        this.przodtyl = true;
        break;
      }
      case "przodtyl": {
        this.prawolewo = true; 
        this.tyl = true;
        this.prawo = true;
        this.lewo = true;
        this.przod = true;
        this.przodtyl = !this.przodtyl;
        break;
      }
    }
  }
}
