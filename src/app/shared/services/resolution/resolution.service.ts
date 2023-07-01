import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ResolutionService {
  resizeListener = new BehaviorSubject<number>(window.innerWidth);

  constructor() {
    this.onResize();
  }

  onResize() {
    window.addEventListener('resize', (event) => {
      let screenWidth = window.innerWidth;
      this.resizeListener.next(screenWidth);
    });
  }
}
