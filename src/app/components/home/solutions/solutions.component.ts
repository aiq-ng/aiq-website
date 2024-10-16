import { CommonModule, NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

interface Slide {
  h1: string;
  p: string;
  img: string;
  svg: string;
}

@Component({
  selector: 'app-solutions',
  standalone: true,
  imports: [NgFor, CommonModule],
  templateUrl: './solutions.component.html',
  styleUrl: './solutions.component.css',
})
export class SolutionsComponent {
  constructor(private router: Router) {}

  route(page: string) {
    this.router.navigateByUrl(page);
  }
  slides: Slide[] = [
    {
      h1: 'Defence and Intelligence',
      p: ' Enhance national security and gain a competitive edge with AI intelligence gathering and enterprise solutions.',
      img: 'assets/image 34.jpg',
      svg: 'assets/Security.svg',
    },
    {
      h1: 'Researchers',
      p: ' Leverage AI to analyze large datasets and uncover new insights.',
      img: 'assets/image 32.jpg',
      svg: 'assets/Research.svg',
    },
    {
      h1: 'Humanitarian Organizations',
      p: 'Improve disaster response and resource allocation with real-time data insights.',
      img: 'assets/image 31.jpg',
      svg: 'assets/Give Money.svg',
    },
    {
      h1: 'Media and Information',
      p: ' Investigate stories with advanced research tools and access critical information quickly to support investigative reporting.',
      img: 'assets/image 30.jpg',
      svg: 'assets/megaphone.svg',
    },
    {
      h1: 'Contact us to discuss your requirements.',
      p: ' Our suites of products are also used by Public and Private Businesses, Law Enforcement Agencies, Hospitals, and the General Public.',
      img: 'assets/image 52.jpg',
      svg: 'assets/categories.svg',
    },
  ];

  currentSlideIndex = 0;

  goToSlide(index: number): void {
    this.currentSlideIndex = index;
  }

  x = [
    'Defence and Intelligence',
    'Researchers',
    'Humanitarians',
    'Media',
    'Others',
  ];
}
