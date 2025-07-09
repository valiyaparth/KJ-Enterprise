import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [MatCardModule, MatButtonModule, CommonModule],
  templateUrl: './product-list.html',
  styleUrl: './product-list.scss'
})
export class ProductList {
  products = [
    {
      name: 'Key Holder',
      description: 'Custom key holder for your home or office.',
      image: 'assets/images/products/1.jpg'
    },
    {
      name: 'Ram Mandir',
      description: 'Beautiful Ram Mandir with precision for your home.',
      image: 'assets/images/products/2.jpg'
    },
    {
      name: 'Chariot',
      description: 'Custom chariot for your home or office.',
      image: 'assets/images/products/3.jpg'
    }
  ];
}
