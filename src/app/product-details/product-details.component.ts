import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product, products } from '../products';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  product: Product | undefined;
  ngOnInit(): void {
    const routeParas = this.route.snapshot.paramMap;
    const productIdFromRoute = Number(routeParas.get('productId'));
    this.product = products.find(p => p.id === productIdFromRoute);
  }
  constructor(
    private route: ActivatedRoute,
    private cartService: CartService
  ) { }

  addToCart(product: Product) {
    this.cartService.addToCart(product);
    window.alert('Your product has been added to the cart!');
  }
}
