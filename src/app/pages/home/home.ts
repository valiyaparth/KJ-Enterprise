import { Component } from '@angular/core';
import { Hero } from '../../components/hero/hero';
import { Services } from '../../components/services/services';
import { WhyUs } from '../../components/why-us/why-us';
import { Gallery } from '../../components/gallery/gallery';
import { Faqs } from '../../components/faqs/faqs';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [Hero, Services, WhyUs, Gallery, Faqs],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home {

}
