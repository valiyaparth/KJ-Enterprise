import { Component } from '@angular/core';
import { ContactInfo } from '../../components/contact-info/contact-info';
import { Map } from '../../components/map/map';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ContactInfo, Map],
  templateUrl: './contact.html',
  styleUrl: './contact.scss'
})
export class Contact {}
