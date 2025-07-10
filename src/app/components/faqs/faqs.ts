import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-faqs',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './faqs.html',
  styleUrl: './faqs.scss'
})
export class Faqs {
  activeIndex: number | null = null;
  
  faqs = [
    { 
      question: 'What is laser art?', 
      answer: 'Laser art is a form of art that uses precision laser technology to create intricate images, patterns, and designs on various materials. Our advanced laser cutting and engraving techniques allow us to produce detailed artwork with exceptional accuracy and clean edges.'
    },
    { 
      question: 'What materials can you cut?', 
      answer: 'We specialize in cutting and engraving acrylic and wood materials. Our laser technology can handle various thicknesses and types of these materials, allowing us to create everything from delicate decorative pieces to sturdy functional items.'
    },
    { 
      question: 'Do you offer custom designs?', 
      answer: 'Yes, we specialize in custom laser art! Our team works closely with clients to bring their unique visions to life. Whether you have a specific design in mind or need help developing an idea, we can create personalized pieces tailored to your exact specifications.'
    },
    {
      question: 'What is your turnaround time?',
      answer: 'Our typical turnaround time is 3-7 business days depending on the complexity and size of your project. For rush orders, we offer expedited services with 24-48 hour delivery options. We always communicate expected delivery times upfront.'
    },
    {
      question: 'Do you provide design consultation?',
      answer: 'Absolutely! We offer free design consultations to help you create the perfect laser art piece. Our experienced designers can assist with material selection, design optimization, and technical feasibility to ensure your project exceeds expectations.'
    }
  ];

  toggleFaq(index: number): void {
    this.activeIndex = this.activeIndex === index ? null : index;
  }
}