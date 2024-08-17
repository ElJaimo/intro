import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { NgClass } from '@angular/common';
import { RouterLink } from '@angular/router';
import { TranslateService, TranslateModule } from '@ngx-translate/core';

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

  ChangeLang() {
    this.enLang = !this.enLang;
    this.lang.emit(this.enLang);
  }
}
