import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [MatCardModule, CommonModule, MatIconModule],
  templateUrl: './services.html',
  styleUrl: './services.scss',
  animations: [
    trigger('fadeIn', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(-30px)' }),
        animate('800ms cubic-bezier(.35,0,.25,1)', style({ opacity: 1, transform: 'none' }))
      ])
    ])
  ]
})
export class Services {
  services = [ 
    {
      icon: 'build',
      title: 'Custom Laser Art',
      description: 'Create unique laser art designs tailored to your needs.'
    },
    {
      icon: 'business',
      title: 'Large-Scale Production',
      description: 'Mass-produce laser art with precision and efficiency.'
    },
    {
      icon: 'card_giftcard',
      title: 'Corporate Gifts',
      description: 'Custom laser art for corporate events and promotions.'
    },
    {
      icon: 'home',
      title: 'Home Decor',
      description: 'Add a touch of elegance to your home with our laser art.'
    }
  ];
}
