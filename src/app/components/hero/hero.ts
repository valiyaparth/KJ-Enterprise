import { Component, OnInit, OnDestroy } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { trigger, transition, style, animate, stagger, query} from '@angular/animations';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [MatCardModule, MatButtonModule, RouterLink, CommonModule, MatIconModule],
  templateUrl: './hero.html',
  styleUrls: ['./hero.scss'],
  animations: [
    trigger('heroAnimation', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('1000ms ease-out', style({ opacity: 1 }))
      ])
    ]),
    trigger('contentAnimation', [
      transition(':enter', [
        query('.company-badge, .hero-title, .hero-description, .hero-actions', [
          style({ opacity: 0, transform: 'translateY(50px)' }),
          stagger(200, [
            animate('800ms cubic-bezier(0.25, 0.46, 0.45, 0.94)', 
              style({ opacity: 1, transform: 'translateY(0)' }))
          ])
        ])
      ])
    ]),
    trigger('doodleAnimation', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateX(100px) scale(0.8)' }),
        animate('1000ms 400ms cubic-bezier(0.25, 0.46, 0.45, 0.94)', 
          style({ opacity: 1, transform: 'translateX(0) scale(1)' }))
      ])
    ])
  ]
})
export class Hero implements OnInit, OnDestroy {

  private animationFrameId: number | null = null;

  ngOnInit() {
    this.createFloatingParticles();
    this.startBackgroundAnimation();
  }

  ngOnDestroy() {
    if (this.animationFrameId) {
      cancelAnimationFrame(this.animationFrameId);
    }
  }

  onButtonHover(event: MouseEvent) {
    const button = event.target as HTMLElement;
    const rect = button.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    
    button.style.setProperty('--mouse-x', `${x}px`);
    button.style.setProperty('--mouse-y', `${y}px`);
  }

  onButtonLeave(event: MouseEvent) {
    const button = event.target as HTMLElement;
    button.style.removeProperty('--mouse-x');
    button.style.removeProperty('--mouse-y');
  }

  onImageError(event: any) {
    event.target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjQwMCIgdmlld0JveD0iMCAwIDQwMCA0MDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI0MDAiIGhlaWdodD0iNDAwIiBmaWxsPSIjRjNGNEY2Ii8+CjxwYXRoIGQ9Ik0xNzUgMTc1SDIyNVYyMjVIMTc1VjE3NVoiIGZpbGw9IiNEMUQ1REIiLz4KPC9zdmc+';
  }

  private createFloatingParticles() {
    const container = document.querySelector('.particles-container');
    if (!container) return;

    for (let i = 0; i < 20; i++) {
      const particle = document.createElement('div');
      particle.className = 'particle';
      particle.style.left = Math.random() * 100 + '%';
      particle.style.top = Math.random() * 100 + '%';
      particle.style.animationDelay = Math.random() * 5 + 's';
      particle.style.animationDuration = (Math.random() * 10 + 10) + 's';
      container.appendChild(particle);
    }
  }

  private startBackgroundAnimation() {
    const animate = () => {
      const orbs = document.querySelectorAll('.floating-orb');
      orbs.forEach((orb, index) => {
        const time = Date.now() * 0.001;
        const x = Math.sin(time + index) * 20;
        const y = Math.cos(time + index) * 15;
        (orb as HTMLElement).style.transform = `translate(${x}px, ${y}px)`;
      });
      
      this.animationFrameId = requestAnimationFrame(animate);
    };
    animate();
  }
}
