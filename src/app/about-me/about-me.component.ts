import { Component, OnInit, ViewEncapsulation } from '@angular/core';

declare var anime: any;



@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss', '../app.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AboutMeComponent implements OnInit {

  start: boolean = false;
  count = 1;
  type_speed = 60
  type_delay = 100

  ngOnInit(): void {
    setTimeout(() => this.start = true, 1000)
    setInterval(() => this.incrementCount(), 4000)
  }

  incrementCount() {
    this.count = this.count % 5;
    this.count++;
  }

}
