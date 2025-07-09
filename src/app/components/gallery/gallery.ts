import { Component, ViewChild, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatGridListModule } from '@angular/material/grid-list';

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [MatGridListModule, CommonModule],
  templateUrl: './gallery.html',
  styleUrl: './gallery.scss'
})
export class Gallery {
  images = [
    'https://source.unsplash.com/800x600/?laser,art,1',
    'https://source.unsplash.com/800x600/?laser,art,2',
    'https://source.unsplash.com/800x600/?laser,art,3',
    'https://source.unsplash.com/800x600/?laser,art,4',
    'https://source.unsplash.com/800x600/?laser,art,5',
    'https://source.unsplash.com/800x600/?laser,art,6'
  ];

  @ViewChild('galleryTrack', { static: false }) galleryTrack!: ElementRef<HTMLDivElement>;

  scrollLeft() {
    if (this.galleryTrack) {
      this.galleryTrack.nativeElement.scrollBy({ left: -400, behavior: 'smooth' });
    }
  }

  scrollRight() {
    if (this.galleryTrack) {
      this.galleryTrack.nativeElement.scrollBy({ left: 400, behavior: 'smooth' });
    }
  }
}
