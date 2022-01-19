import { Component, OnInit } from '@angular/core';
import {Product} from "../../models/product.model";
import {ProductService} from "../../../../core/http/product.service";
import {ActivatedRoute, Params} from "@angular/router";

@Component({
  selector: 'app-product-info',
  templateUrl: './product-info.component.html',
  styleUrls: ['./product-info.component.scss']
})
export class ProductInfoComponent implements OnInit {
  product: Product | undefined = undefined;
  amount: number = 1;
  constructor(private readonly productService: ProductService, private readonly route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.productService
        .getById(params.id)
        .subscribe((product: Product) => {
          this.product = product;
        })
    });
  }

  increment(): void {
    this.amount++;
  }

  decrement(): void {
    this.amount--;

    if(this.amount < 1) {
      this.amount = 1;
    }
  }

}
