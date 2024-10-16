import { Component } from "@angular/core";
import { CommonModule } from '@angular/common';
import { Router } from "@angular/router";
import { RouterModule } from '@angular/router';


@Component({
  selector: "app-header",
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: "./header.component.html",
  styleUrl: "./header.component.css",
})
export class HeaderComponent {
  showList: boolean = false;

  constructor(private router: Router) {}

  navItems = [
    { path: "/", label: "Home" },
    { path: "/products", label: "Product" },
    { path: "/company", label: "Company" },
    { path: "/careers", label: "Careers" },
    { path: "/contact-us", label: "Contact us" },
  ];
  navigateTo(route: string): void {
    this.router.navigate([route]);
  }
  onShowList = () => {
    this.showList = !this.showList;
  };

  closeShowList = () => {
    this.showList = false;
  };



  route(page:string, fragment:string){
    this.router.navigate([page], {fragment: fragment});
  }
}
