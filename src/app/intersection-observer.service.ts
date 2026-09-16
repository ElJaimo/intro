import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class IntersectionObserverService {
  private observer?: IntersectionObserver;

  observe(element: Element, target: Element) {
    this.observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          target.classList.add('show-section');
        }
      },
      {
        threshold: 0.1,
      },
    );

    this.observer.observe(element);
  }

  unobserve(element: Element) {
    this.observer?.unobserve(element);
  }
}
