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
      icon: '',
      title: 'Linkedin',
      link: '',
    },
    {
      id: 'github',
      icon: '',
      title: 'Github',
      link: '',
    },
    {
      id: 'mail',
      icon: '',
      title: 'Mail me',
      link: '',
    },
  ];
  constructor() {}

  ngOnInit() {}
}
