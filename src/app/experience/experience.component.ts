import { Component, HostListener, OnInit } from '@angular/core';

const SMALL_DEVICE_WIDTH = 370;
@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent implements OnInit {

  constructor() { }

  public innerWidth: any;
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

}
