import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  constructor(private router: Router) {}

  goToWorks(): void {
    this.router.navigate(['/work']).then(() => {
      const worksElement = document.getElementById('works');
      if (worksElement) {
        worksElement.scrollIntoView({ behavior: 'smooth' });
      }
    });
  }

  goToContact(): void {
    this.router.navigate(['/contact']).then(() => {
      const worksElement = document.getElementById('footer');
      if (worksElement) {
        worksElement.scrollIntoView({ behavior: 'smooth' });
      }
    });
  }

  ngOnInit(): void {
  }

}
