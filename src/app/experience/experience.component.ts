import { Component, HostListener, OnInit } from '@angular/core';
import { animate, query, stagger, state, style, transition, trigger } from "@angular/animations";

const SMALL_DEVICE_WIDTH = 370;
@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss', '../app.component.scss'],
  animations: [
    trigger('workListAnimation', [
      state('enter',style({transform: 'translateX(0)'})),
      state('leave',style({transform: 'translateX(-200%)'})),
      transition('enter => leave', animate('900ms ease-out')),
      transition('leave => enter', animate('1200ms ease-in'))
    ])
  ]
})
export class ExperienceComponent implements OnInit {

  constructor() { }

  public innerWidth: any;
  public movement :any;
  smallDevice = false;
  selected = 1;
  ngOnInit(): void {
    this.innerWidth = window.innerWidth;
  }

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.innerWidth = window.innerWidth;
    this.smallDevice = window.innerWidth <= SMALL_DEVICE_WIDTH;
    console.log('width: ', this.innerWidth);
  }

  /*@HostListener('window:scroll', ['$event'])
  onScroll() {
    if (window.innerWidth > 700) {
      if (window.scrollY > 70) {
        this.movement = 'enter'
      } else {
        this.movement = 'leave'
      }

      if (window.scrollY > 1000 || window.scrollY < 120) {
        this.movement = 'leave'
      }
    } else {
      if (window.scrollY > 100) {
        this.movement = 'enter'
      } else {
        this.movement = 'leave'
      }

      if (window.scrollY > 400) {
        this.movement = 'leave'
      }
    }
    // console.log('scroll: ', window.scrollY);
  }*/

}
