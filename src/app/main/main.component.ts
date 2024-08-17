import {
  Component,
  OnInit,
  ElementRef,
  OnDestroy,
  ViewChild,
  AfterViewInit,
} from '@angular/core';
import { NgClass } from '@angular/common';
import { NavbarComponent } from '../navbar/navbar.component';
import { TimelineComponent } from '../timeline/timeline.component';
import { IntersectionObserverService } from '../intersection-observer.service';
import { TranslateService, TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  standalone: true,
  imports: [NgClass, NavbarComponent, TimelineComponent, TranslateModule],
  styleUrls: [
    './main-hero.css',
    'about-me.css',
    'skills.css',
    'courses.css',
    'experience.css',
    'footer.css',
  ],
})
export class MainComponent implements OnInit, AfterViewInit, OnDestroy {
  letter = 'o';
  @ViewChild('SkillsSection') SkillsSection: ElementRef | undefined;

  constructor(
    private intersectionObserverService: IntersectionObserverService,
    private translate: TranslateService
  ) {
    this.translate.setDefaultLang('en');
  }

  ngOnInit() {
    document.getElementById('type-out-content')?.classList.add('typing');
    setTimeout(() => (this.letter = 'e'), 1350);
  }

  ngAfterViewInit(): void {
    console.log(this.SkillsSection);
    if (this.SkillsSection) {
      this.intersectionObserverService.observe(
        this.SkillsSection.nativeElement
      );
    }
  }

  ngOnDestroy(): void {
    if (this.SkillsSection) {
      this.intersectionObserverService.unobserve(
        this.SkillsSection.nativeElement
      );
    }
  }

  networksLinks = [
    {
      id: 'linkedin',
      title: 'Linkedin',
      svg: '/assets/icons/linkedin-icon.svg',
      classes: 'h-7',
      Fclasses: 'h-6',
      link: 'https://www.linkedin.com/in/jaime-albarran-61933b17b',
    },
    {
      id: 'github',
      title: 'Github',
      svg: '/assets/icons/github-icon.svg',
      classes: 'h-7',
      Fclasses: 'h-6',
      link: 'https://github.com/ElJaimo',
    },
    {
      id: 'mail',
      title: 'Mail me',
      svg: '/assets/icons/mail-icon.svg',
      classes: 'h-6',
      Fclasses: 'h-5',
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
  experience = [
    {
      title: 'Hyundai Singapore',
      image: 'hyundai-page.jpg',
      description:
        'Lorem ipsum dolor, sit amet consectetur adipisicing elit. A esse repudiandae fugiat maiores soluta nesciunt provident quas dolores, tempora et, deleniti, reiciendis vitae!',
      link: 'https://hyundai.com.sg/',
      type: 'company',
    },
    {
      title: 'Komoco',
      image: 'komoco-page.jpg',
      description:
        'Lorem ipsum dolor, sit amet consectetur adipisicing elit. A esse repudiandae fugiat maiores soluta nesciunt provident quas dolores, tempora et, deleniti, reiciendis vitae!',
      link: 'https://www.komoco.com.sg/',
      type: 'company',
    },
    {
      title: 'Komoco Autopac System',
      image: 'komoco-autopac-page.jpg',
      description:
        'Lorem ipsum dolor, sit amet consectetur adipisicing elit. A esse repudiandae fugiat maiores soluta nesciunt provident quas dolores, tempora et, deleniti, reiciendis vitae!',
      type: 'company',
    },
    {
      title: 'Capella Auto Singapore',
      image: 'capella-page.jpg',
      description:
        'Lorem ipsum dolor, sit amet consectetur adipisicing elit. A esse repudiandae fugiat maiores soluta nesciunt provident quas dolores, tempora et, deleniti, reiciendis vitae!',
      link: 'https://www.capella.syion.net/',
      type: 'company',
    },
    {
      title: 'Freemasonry Singapore',
      image: 'lsa-page.jpg',
      description:
        'Lorem ipsum dolor, sit amet consectetur adipisicing elit. A esse repudiandae fugiat maiores soluta nesciunt provident quas dolores, tempora et, deleniti, reiciendis vitae!',
      link: 'https://www.lsa.sg/home',
      type: 'company',
    },
    {
      title: 'Savage Club Singapore',
      image: 'savage-page.jpg',
      description:
        'Lorem ipsum dolor, sit amet consectetur adipisicing elit. A esse repudiandae fugiat maiores soluta nesciunt provident quas dolores, tempora et, deleniti, reiciendis vitae!',
      link: 'https://savage.sg/',
      type: 'company',
    },
    {
      title: 'Ifyni Singapore',
      image: 'ifyni-page.jpg',
      description:
        'Lorem ipsum dolor, sit amet consectetur adipisicing elit. A esse repudiandae fugiat maiores soluta nesciunt provident quas dolores, tempora et, deleniti, reiciendis vitae!',
      link: 'https://www.ifyni.com/home',
      type: 'company',
    },
  ];
  sortBy = 'all';

  ChangeLang(enLang: boolean): void {
    if (enLang) {
      this.translate.use('en');
    } else {
      this.translate.use('es');
    }
  }

  goToLink(url: string, newPage = true): void {
    window.open(url, newPage ? '_blank' : '_self');
  }

  hoveringWork(image: string) {
    let imageId = document.getElementById(image)!;
    if (imageId.classList.contains('hovering') == true) {
      imageId.classList.remove('hovering');
    } else {
      imageId.classList.add('hovering');
    }
  }

  sortExperience(expArray: any[]) {
    if (this.sortBy == 'all') {
      return expArray;
    } else {
      return expArray.filter((item) => item.type == this.sortBy);
    }
  }
}
