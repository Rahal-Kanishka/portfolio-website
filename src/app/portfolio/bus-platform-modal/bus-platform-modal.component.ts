import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bus-platform-modal',
  templateUrl: './bus-platform-modal.component.html',
  styleUrls: ['./bus-platform-modal.component.scss', '../../app.component.scss']
})
export class BusPlatformModalComponent implements OnInit {
  private count = 0;

  constructor() { }

  public image_array = [
    "../../assets/flutter/flutter_1.png",
    "../../assets/flutter/flutter_2.png",
    "../../assets/flutter/flutter_3.png",
    "../../assets/flutter/flutter_4.png"
  ]

  public imageClass: any = null;

  public current_image = this.image_array[0];

  ngOnInit(): void {
    setInterval(() => this.incrementCount(), 3000);
    this.imageClass = document.getElementsByClassName('image-row')[0];

  }

  incrementCount() {
    this.count = this.count % 4;
    this.current_image = this.image_array[this.count];
    this.imageClass.classList.toggle('loaded');
    this.count++;
  }



}
