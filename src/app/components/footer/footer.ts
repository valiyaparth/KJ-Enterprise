import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './footer.html',
  styleUrls: ['./footer.scss']
})
export class Footer {
  email: string = '';

  onNewsletterSubmit(event: Event): void {
    event.preventDefault();
    
    if (this.email) {
      // Handle newsletter subscription
      console.log('Newsletter subscription:', this.email);
      
      // You can add your newsletter API call here
      // Example:
      // this.newsletterService.subscribe(this.email).subscribe(
      //   response => {
      //     console.log('Subscription successful');
      //     this.email = '';
      //   },
      //   error => {
      //     console.error('Subscription failed');
      //   }
      // );
      
      // Reset form
      this.email = '';
      
      // Optional: Show success message
      alert('Thank you for subscribing to our newsletter!');
    }
  }
}