import { Component } from '@angular/core';
import { ProductList } from '../../components/product-list/product-list';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [ProductList],
  templateUrl: './products.html',
  styleUrl: './products.scss'
})
export class Products {}
