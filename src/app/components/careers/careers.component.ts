import { Component } from '@angular/core';
import { HeroComponent } from './hero/hero.component';
import { SearchComponent } from './search/search.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-careers',
  standalone: true,
  imports: [HeroComponent, SearchComponent, FooterComponent],
  templateUrl: './careers.component.html',
  styleUrl: './careers.component.css'
})
export class CareersComponent {

  
}
