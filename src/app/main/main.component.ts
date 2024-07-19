import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { NgClass } from '@angular/common';
import { NavbarComponent } from '../navbar/navbar.component';
import { fromEvent } from 'rxjs';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  standalone: true,
  imports: [NgClass, NavbarComponent],
  styleUrls: ['./main-hero.css', 'about-me.css', 'skills.css', 'courses.css'],
})
export class MainComponent implements OnInit {
  letter = 'o';
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
  skills = [
    'Typescript',
    'Javascript',
    'Angular',
    'Vue.js',
    'React',
    'UI/UX',
    'AWS',
    'Git',
    'Figma',
    'Bootstrap',
    'Tailwind',
    'Python',
    'SQL',
  ];
  courses = [
    {
      title: 'Análisis de Datos de Google',
      date: 'Jan, 2024',
      source: 'Google',
      icon: 'data-icon.png',
      iconWidth: 'w-20',
      link: 'https://coursera.org/share/93f5a57a76c216035c35fc7b4df7ac37',
    },
    {
      title: 'Getting Started with Front-End and Web Development',
      date: 'Apr, 2024',
      source: 'IBM',
      icon: 'frontend-icon.png',
      iconWidth: 'w-20',
      link: 'https://coursera.org/share/85906fb6cbaa1f058187b04b2e4eda8a',
    },
    {
      title: 'Introduction to Software Engineering',
      date: 'Apr, 2024',
      source: 'IBM',
      icon: 'engineering-icon.png',
      iconWidth: 'w-20',
      link: 'https://coursera.org/share/21c7cd66ae1b68105f8005f694d91c77',
    },
    {
      title: 'Designing User Interfaces and Experiences (UI/UX)',
      date: 'May, 2024',
      source: 'IBM',
      icon: 'uiux-icon.png',
      iconWidth: 'w-12',
      link: 'https://coursera.org/share/70392a53f661e269e351483be02ae606',
    },
    {
      title: 'Introduction to HTML, CSS, & JavaScript',
      date: 'Jun, 2024',
      source: 'IBM',
      icon: 'html-css-js-icon.png',
      iconWidth: 'w-16',
      link: 'https://coursera.org/share/e95cf6ffe4b61b486fa4d781a9525ad8',
    },
    {
      title: 'Developing Websites and Front-Ends with Bootstrap',
      date: 'Jun, 2024',
      source: 'IBM',
      icon: 'bootstrap-icon.png',
      iconWidth: 'w-20',
      link: 'https://coursera.org/share/06b5bfd3e9a80f17ad0cce8e3264e345',
    },
    {
      title: 'Getting Started with Git and GitHub',
      date: 'Jul, 2024',
      source: 'IBM',
      icon: 'git-icon.png',
      iconWidth: 'w-20',
      link: 'https://coursera.org/share/395b93f5624677d13070fffd63661de5',
    },
  ];
  activeCourse = 0;

  goToLink(url: string, newPage = true): void {
    window.open(url, newPage ? '_blank' : '_self');
  }

  ngOnInit() {
    document.getElementById('type-out-content')?.classList.add('typing');
    setTimeout(() => (this.letter = 'e'), 1350);
  }
}
