import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  standalone: true,
  styleUrls: ['./main.component.css'],
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

  goToLink(url: string): void {
    window.open(url, '_blank');
  }

  ngOnInit() {
    setTimeout(() => (this.letter = 'e'), 1200);
  }
}
