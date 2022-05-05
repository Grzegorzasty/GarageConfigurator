import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  isSampleGarage: boolean;

  constructor() { }

  ngOnInit(): void {
    this.isSampleGarage = false;
  }

  isSampleGarageChoose() {
    this.isSampleGarage = !this.isSampleGarage
  }

}
