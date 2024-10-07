import { Component, OnInit } from '@angular/core';
import { NgClass } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-timeline',
  standalone: true,
  imports: [NgClass, TranslateModule],
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.css'],
})
export class TimelineComponent implements OnInit {
  courses = [
    {
      title: 'Análisis de Datos de Google',
      date: 'COURSES.DATES.JAN',
      source: 'Google',
      icon: 'data-icon.png',
      iconWidth: 'w-20',
      link: 'https://coursera.org/share/93f5a57a76c216035c35fc7b4df7ac37',
    },
    {
      title: 'Getting Started with Front-End and Web Development',
      date: 'COURSES.DATES.APR',
      source: 'IBM',
      icon: 'frontend-icon.png',
      iconWidth: 'w-20',
      link: 'https://coursera.org/share/85906fb6cbaa1f058187b04b2e4eda8a',
    },
    {
      title: 'Introduction to Software Engineering',
      date: 'COURSES.DATES.APR',
      source: 'IBM',
      icon: 'engineering-icon.png',
      iconWidth: 'w-20',
      link: 'https://coursera.org/share/21c7cd66ae1b68105f8005f694d91c77',
    },
    {
      title: 'Designing User Interfaces and Experiences (UI/UX)',
      date: 'COURSES.DATES.MAY',
      source: 'IBM',
      icon: 'uiux-icon.png',
      iconWidth: 'w-12',
      link: 'https://coursera.org/share/70392a53f661e269e351483be02ae606',
    },
    {
      title: 'Introduction to HTML, CSS, & JavaScript',
      date: 'COURSES.DATES.JUN',
      source: 'IBM',
      icon: 'html-css-js-icon.png',
      iconWidth: 'w-16',
      link: 'https://coursera.org/share/e95cf6ffe4b61b486fa4d781a9525ad8',
    },
    {
      title: 'Developing Websites and Front-Ends with Bootstrap',
      date: 'COURSES.DATES.JUN',
      source: 'IBM',
      icon: 'bootstrap-icon.png',
      iconWidth: 'w-20',
      link: 'https://coursera.org/share/06b5bfd3e9a80f17ad0cce8e3264e345',
    },
    {
      title: 'Getting Started with Git and GitHub',
      date: 'COURSES.DATES.JUL',
      source: 'IBM',
      icon: 'git-icon.png',
      iconWidth: 'w-20',
      link: 'https://coursera.org/share/395b93f5624677d13070fffd63661de5',
    },
    {
      title: 'Developing Frontend Apps with React',
      date: 'COURSES.DATES.SEP',
      source: 'IBM',
      icon: 'react-icon.png',
      iconWidth: 'w-20',
      link: 'https://coursera.org/share/cdc7b08375f88e51e1970a26e2b0b03a',
    },
    {
      title: 'Intermediate Web and Front-End Development',
      date: 'COURSES.DATES.OCT',
      source: 'IBM',
      icon: 'intermediate-icon.png',
      iconWidth: 'w-20',
      link: 'https://coursera.org/share/df753add08d9e90e524a6f2c78d40ade',
    },
  ];
  activeCourse = '';

  goToLink(url: string, newPage = true): void {
    window.open(url, newPage ? '_blank' : '_self');
  }

  constructor() {}

  ngOnInit() {}
}
