import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductList } from '../../components/product-list/product-list';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [ProductList, CommonModule],
  templateUrl: './products.html',
  styleUrl: './products.scss'
})
export class Products {}


