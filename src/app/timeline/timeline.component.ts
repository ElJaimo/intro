import { Component, OnInit } from '@angular/core';
import { NgClass } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

interface course {
  title: string;
  date: string;
  source: string;
  icon: string;
  iconWidth: string;
  link: string;
  professional?: boolean;
}

@Component({
  selector: 'app-timeline',
  standalone: true,
  imports: [NgClass, TranslateModule],
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.css'],
})

export class TimelineComponent implements OnInit {
  courses: course[] = [
    {
      title: 'Análisis de Datos de Google',
      date: 'COURSES.DATES.JAN2024',
      source: 'Google',
      icon: 'data-icon.png',
      iconWidth: 'w-16',
      link: 'https://coursera.org/share/93f5a57a76c216035c35fc7b4df7ac37',
      professional: true,
    },
    {
      title: 'Introduction to Software Engineering',
      date: 'COURSES.DATES.APR2024',
      source: 'IBM',
      icon: 'engineering-icon.png',
      iconWidth: 'w-20',
      link: 'https://coursera.org/share/21c7cd66ae1b68105f8005f694d91c77',
    },
    {
      title: 'Designing User Interfaces and Experiences (UI/UX)',
      date: 'COURSES.DATES.MAY2024',
      source: 'IBM',
      icon: 'uiux-icon.png',
      iconWidth: 'w-12',
      link: 'https://coursera.org/share/70392a53f661e269e351483be02ae606',
    },
    {
      title: 'Developing Websites and Front-Ends with Bootstrap',
      date: 'COURSES.DATES.JUN2024',
      source: 'IBM',
      icon: 'bootstrap-icon.png',
      iconWidth: 'w-20',
      link: 'https://coursera.org/share/06b5bfd3e9a80f17ad0cce8e3264e345',
    },
    {
      title: 'Getting Started with Git and GitHub',
      date: 'COURSES.DATES.JUL2024',
      source: 'IBM',
      icon: 'git-icon.png',
      iconWidth: 'w-20',
      link: 'https://coursera.org/share/395b93f5624677d13070fffd63661de5',
    },
    {
      title: 'Developing Frontend Apps with React',
      date: 'COURSES.DATES.SEP2024',
      source: 'IBM',
      icon: 'react-icon.png',
      iconWidth: 'w-20',
      link: 'https://coursera.org/share/cdc7b08375f88e51e1970a26e2b0b03a',
    },
    {
      title: 'Get Started with Cloud Native, DevOps, Agile, and NoSQL',
      date: 'COURSES.DATES.DEC2024',
      source: 'IBM',
      icon: 'devops-icon.png',
      iconWidth: 'w-20',
      link: 'https://coursera.org/share/95373fef0de6171538b37c5d2464c39b',
    },
    {
      title: 'IBM Front-End Developer',
      date: 'COURSES.DATES.JAN2025',
      source: 'IBM',
      icon: 'certification-icon.png',
      iconWidth: 'w-16',
      link: 'https://coursera.org/share/c08886c8c3be861909c22e3e01e3afc8',
      professional: true,
    },
    {
      title: 'Build Wireframes and Low-Fidelity Prototypes',
      date: 'COURSES.DATES.OCT2026',
      source: 'Google',
      icon: 'wireframes-icon.png',
      iconWidth: 'w-16',
      link: 'https://coursera.org/share/68c441733e4a78181ec71d46daf5cbf3',
    },
    {
      title: 'Conduct UX Research and Test Early Concepts',
      date: 'COURSES.DATES.OCT2026',
      source: 'Google',
      icon: 'research-icon.png',
      iconWidth: 'w-16',
      link: 'https://coursera.org/share/1268f807379489bf6c27590b7e797d3e',
    },
  ];

  activeCourse: string = '';
  splitCourseSets: any[][] = [];

  constructor() {}

  ngOnInit() {
    this.splitCourseSets = this.splitCourses(this.courses);
  }

  goToLink(url: string): void {
    window.open(url, '_blank');
  }

  splitCourses<course>(array: course[]): course[][] {
    const itemsNo: number = 3;
    const result: course[][] = [];

    for (let i = 0; i < array.length; i += itemsNo) {
      result.push(array.slice(i, i + itemsNo));
    }
    return result;
  }
}
