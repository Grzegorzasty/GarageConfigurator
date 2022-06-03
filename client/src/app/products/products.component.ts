import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  isSampleGarage: string;

  constructor() { }

  ngOnInit(): void {
    this.isSampleGarage = "";
  }

  isSampleGarageChoose(name: string) {
    this.isSampleGarage = name;
  }

}
