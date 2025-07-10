import { Component, HostListener, OnInit } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [MatToolbarModule, RouterModule, MatButtonModule, MatIconModule, CommonModule],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss'
})

export class Navbar implements OnInit {
  menuOpen = false;
  isScrolled = false;
  private scrollThreshold = 50;

  constructor(private router: Router) {}

  ngOnInit() {
    // Close menu on route change
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(() => {
        this.closeMenu();
      });
  }

  toggleMenu(): void {
    this.menuOpen = !this.menuOpen;
    
    // Prevent body scroll when menu is open
    if (this.menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }

  closeMenu(): void {
    this.menuOpen = false;
    document.body.style.overflow = 'auto';
  }

  @HostListener('window:scroll', [])
  onWindowScroll(): void {
    this.isScrolled = window.pageYOffset > this.scrollThreshold;
  }

  @HostListener('window:keydown', ['$event'])
  onKeyDown(event: KeyboardEvent): void {
    if (event.key === 'Escape' && this.menuOpen) {
      this.closeMenu();
    }
  }

  @HostListener('window:resize', [])
  onResize(): void {
    // Close menu on resize to prevent layout issues
    if (window.innerWidth > 640 && this.menuOpen) {
      this.closeMenu();
    }
  }
}
