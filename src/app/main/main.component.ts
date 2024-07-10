import { Component, OnInit } from '@angular/core';
import { NgClass } from '@angular/common';
import { NavbarComponent } from '../navbar/navbar.component';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  standalone: true,
  imports: [NgClass, NavbarComponent],
  styleUrls: [
    './main-hero.css',
    'about-me.css',
  ],
})
export class MainComponent implements OnInit {
  networksLinks = [
    {
      id: 'linkedin',
      title: 'Linkedin',
      svg: '/assets/icons/linkedin-icon.svg',
      classes: 'h-7',
      link: 'https://www.linkedin.com/in/jaime-albarran-61933b17b',
    },
    {
      id: 'github',
      title: 'Github',
      svg: '/assets/icons/github-icon.svg',
      classes: 'h-7',
      link: 'https://github.com/ElJaimo',
    },
    {
      id: 'mail',
      title: 'Mail me',
      svg: '/assets/icons/mail-icon.svg',
      classes: 'h-6',
      link: 'mailto:hawk_1036@live.com.mx',
    },
  ];
  letter = 'o';

  goToLink(url: string, newPage = true): void {
    window.open(url, newPage ? '_blank' : '_self');
  }

  ngOnInit() {
    document.getElementById('type-out-content')?.classList.add('typing');
    setTimeout(() => (this.letter = 'e'), 1350);
  }
}
