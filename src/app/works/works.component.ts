import { Component, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-works',
  templateUrl: './works.component.html',
  styleUrls: ['./works.component.css']
})
export class WorksComponent implements OnInit {

  constructor(private renderer: Renderer2) {}

  ngOnInit(): void {
    this.renderer.setProperty(document.documentElement, 'scrollTop', 0);
  }

}
