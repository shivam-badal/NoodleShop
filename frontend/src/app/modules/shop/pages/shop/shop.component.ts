import { Component, OnInit } from '@angular/core';
import {ProductService} from "../../../../core/http/product.service";
import {Product} from "../../models/product.model";

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss']
})
export class ShopComponent implements OnInit {
  products: Product[] = []

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.products = this.productService
      .get()
      .subscribe((product) => {

    })
  }

}
