import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [],
  templateUrl: './other-products.component.html',
  styleUrl: './other-products.component.css',
})
export class OtherProductsComponent {
  constructor(private router: Router) {}

  route(page: string, fragment: string) {
    let route = this.router.navigate(['/' + page], { fragment: fragment });
  }
}
