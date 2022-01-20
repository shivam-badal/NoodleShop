import { Component, OnInit } from '@angular/core';
import {ProductService} from "../../../../core/http/product.service";
import {Product} from "../../../shop/models/product.model";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  products: Product[] = []

  constructor(private readonly productService: ProductService) {}

  ngOnInit(): void {
    this.productService
      .get()
      .subscribe((products) => {
        this.products = products
      });
  }

}
