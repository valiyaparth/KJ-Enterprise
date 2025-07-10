import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatRippleModule } from '@angular/material/core';

interface Product {
  id: number;
  name: string;
  description: string;
  image: string;
  price?: string;
  category: string;
  isFavorite?: boolean;
}

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [MatCardModule, MatButtonModule, CommonModule, MatIconModule, MatRippleModule],
  templateUrl: './product-list.html',
  styleUrl: './product-list.scss'
})


export class ProductList implements OnInit {
  products: Product[] = [
    {
      id: 1,
      name: 'Artisan Key Holder',
      description: 'Custom handcrafted key holder designed to complement your home or office aesthetic with premium materials and attention to detail.',
      image: 'gallery-1.jpg',
      category: 'Home Decor',
      price: '₹2,500',
      isFavorite: false
    },
    {
      id: 2,
      name: 'Sacred Ram Mandir',
      description: 'Beautifully crafted Ram Mandir with intricate precision and spiritual significance, perfect for creating a peaceful sanctuary.',
      image: 'gallery-2.jpg',
      category: 'Religious',
      price: '₹15,000',
      isFavorite: false
    },
    {
      id: 3,
      name: 'Decorative Chariot',
      description: 'Elegant custom chariot piece that serves as a stunning centerpiece, combining traditional craftsmanship with modern design.',
      image: 'gallery-3.jpg',
      category: 'Sculptures',
      price: '₹8,500',
      isFavorite: false
    }
  ];

  ngOnInit() {
    this.animateCards();
  }

  onCardHover(event: MouseEvent) {
    const card = event.currentTarget as HTMLElement;
    const rect = card.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    
    card.style.setProperty('--mouse-x', `${x}px`);
    card.style.setProperty('--mouse-y', `${y}px`);
  }

  onCardLeave(event: MouseEvent) {
    const card = event.currentTarget as HTMLElement;
    card.style.removeProperty('--mouse-x');
    card.style.removeProperty('--mouse-y');
  }

  toggleFavorite(product: Product) {
    product.isFavorite = !product.isFavorite;
  }

  onInquire(product: Product) {
    // Add your inquiry logic here
    console.log('Inquiry for:', product.name);
  }

  onShare(product: Product) {
    // Add sharing logic here
    console.log('Share:', product.name);
  }

  onImageError(event: any) {
    // Fallback image or placeholder
    event.target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgdmlld0JveD0iMCAwIDQwMCAzMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI0MDAiIGhlaWdodD0iMzAwIiBmaWxsPSIjRjNGNEY2Ii8+CjxwYXRoIGQ9Ik0xNzUgMTI1SDIyNVYxNzVIMTc1VjEyNVoiIGZpbGw9IiNEMUQ1REIiLz4KPC9zdmc+';
  }

  private animateCards() {
    // Additional animation logic if needed
  }
}
