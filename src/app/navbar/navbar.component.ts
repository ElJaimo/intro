import { Component, OnInit } from '@angular/core';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [NgClass],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  hoverNavbar = false;
  lockNavbar = true;
  pinNavbar = false;

  ngOnInit() {
    const navbar = document.getElementById('navbar-container')!;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.intersectionRatio < 1) {
          this.lockNavbar = false;
        } else {
          this.lockNavbar = true;
        }
      },
      { threshold: [1] }
    );
    observer.observe(navbar);
  }
}
