import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  goToWorks(): void {
    this.router.navigate(['/work']).then(() => {
      const worksElement = document.getElementById('works');
      if (worksElement) {
        worksElement.scrollIntoView({ behavior: 'smooth' });
      }
    });
  }
}
