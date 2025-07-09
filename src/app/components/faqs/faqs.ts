import { Component } from '@angular/core';
import { MatExpansionModule } from '@angular/material/expansion';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-faqs',
  standalone: true,
  imports: [MatExpansionModule, CommonModule],
  templateUrl: './faqs.html',
  styleUrl: './faqs.scss'
})
export class Faqs {
  faqs = [
    { question: 'What is laser art?', answer: 'Laser art is a form of art that uses lasers to create images or patterns.'},
    { question: 'What materials can you cut?', answer: 'We can cut acrylic and wood.' },
    { question: 'Do you offer custom designs?', answer: 'Yes, we specialize in custom laser art.' },
  ];
}
