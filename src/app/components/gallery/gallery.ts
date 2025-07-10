// import { Component } from '@angular/core';
// import { CommonModule } from '@angular/common';

// @Component({
//   selector: 'app-gallery',
//   standalone: true,
//   imports: [CommonModule],
//   templateUrl: './gallery.html',
//   styleUrl: './gallery.scss'
// })
// export class Gallery {
//   images = [
//     { src: 'IMG-20250710-WA0004.jpg' },
//     { src: 'IMG-20250710-WA0005.jpg' },
//     { src: 'IMG-20250710-WA0006.jpg' },
//     { src: 'IMG-20250710-WA0007.jpg' },
//     { src: 'IMG-20250710-WA0008.jpg' },
//     { src: 'IMG-20250710-WA0009.jpg' },
//     { src: 'IMG-20250710-WA0010.jpg' },
//     { src: 'machine-doodle(1).png' }
//   ];
// } 


import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './gallery.html',
  styleUrl: './gallery.scss'
})
export class Gallery {
  images = [
    { src: 'gallery-1.jpg' },
    { src: 'gallery-2.jpg' },
    { src: 'gallery-3.jpg' },
    { src: 'gallery-4.jpg' },
    { src: 'gallery-5.jpg' },
    { src: 'gallery-6.jpg' },
    { src: 'gallery-7.jpg' }
  ];

  // Split images into two rows
  topRowImages = this.images.slice(0, Math.ceil(this.images.length / 2));
  bottomRowImages = this.images.slice(Math.ceil(this.images.length / 2));
}