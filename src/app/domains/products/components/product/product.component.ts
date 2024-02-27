import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../../../shared/models/product.model';
import { DomSanitizer } from '@angular/platform-browser';
import { ReversePipe } from '../../../shared/pipes/reverse.pipe';
import { TimeAgoPipe } from '../../../shared/pipes/time-ago.pipe';
import { RouterLinkWithHref } from '@angular/router';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule, ReversePipe, TimeAgoPipe, RouterLinkWithHref],
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss',
})
export class ProductComponent {
  @Input({ required: true }) product!: Product;
  @Output() addToCart = new EventEmitter();

  constructor(public domSanitizer: DomSanitizer) {}

  addToCartHandler() {
    this.addToCart.emit(this.product);
  }
}
