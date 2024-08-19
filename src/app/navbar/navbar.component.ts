import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { NgClass } from '@angular/common';
import { RouterLink, Router } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [NgClass, RouterLink, TranslateModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  hoverNavbar = false;
  lockNavbar = true;
  pinNavbar = false;
  openNavbar = false;
  enLang = true;

  @Output() lang = new EventEmitter<boolean>();

  constructor(private router: Router) {}

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

  navigateToSection(section: string) {
    this.openNavbar = false;
    this.router
      .navigate([], {
        fragment: section,
      })
      .then(() => {
        const element = document.getElementById(section);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      });
  }

  ChangeLang() {
    this.enLang = !this.enLang;
    this.lang.emit(this.enLang);
  }
}
