import { Component, OnInit } from '@angular/core';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [NgClass],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  showNetworks = false;
  goToLink(url: string, newPage = true): void {
    window.open(url, newPage ? '_blank' : '_self');
  }

  ngOnInit() {}
}
