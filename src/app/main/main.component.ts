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
      title: 'MAIN-HERO.NETWORKS.LINKEDIN',
      svg: '/assets/icons/linkedin-icon.svg',
      classes: 'h-7',
      Fclasses: 'h-6',
      link: 'https://www.linkedin.com/in/jaime-albarran-61933b17b',
    },
    {
      id: 'github',
      title: 'MAIN-HERO.NETWORKS.GITHUB',
      svg: '/assets/icons/github-icon.svg',
      classes: 'h-7',
      Fclasses: 'h-6',
      link: 'https://github.com/ElJaimo',
    },
    {
      id: 'mail',
      title: 'MAIN-HERO.NETWORKS.EMAIL',
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
      title: 'PROJECTS.HYUNDAI.TITLE',
      image: 'hyundai-page.jpg',
      description: 'PROJECTS.HYUNDAI.DESCRIPTION',
      link: 'https://hyundai.com.sg/',
      type: 'company',
    },
    {
      title: 'PROJECTS.KOMOCO.TITLE',
      image: 'komoco-page.jpg',
      description: 'PROJECTS.KOMOCO.DESCRIPTION',
      link: 'https://www.komoco.com.sg/',
      type: 'company',
    },
    {
      title: 'PROJECTS.AUTOPAC.TITLE',
      image: 'komoco-autopac-page.jpg',
      description: 'PROJECTS.AUTOPAC.DESCRIPTION',
      type: 'company',
    },
    {
      title: 'PROJECTS.CAPELLA.TITLE',
      image: 'capella-page.jpg',
      description: 'PROJECTS.CAPELLA.DESCRIPTION',
      link: 'https://www.capella.syion.net/',
      type: 'company',
    },
    {
      title: 'PROJECTS.MASONRY.TITLE',
      image: 'lsa-page.jpg',
      description: 'PROJECTS.MASONRY.DESCRIPTION',
      link: 'https://www.lsa.sg/home',
      type: 'company',
    },
    {
      title: 'PROJECTS.SAVAGE.TITLE',
      image: 'savage-page.jpg',
      description: 'PROJECTS.SAVAGE.DESCRIPTION',
      link: 'https://savage.sg/',
      type: 'company',
    },
    {
      title: 'PROJECTS.IFYNI.TITLE',
      image: 'ifyni-page.jpg',
      description: 'PROJECTS.IFYNI.DESCRIPTION',
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
