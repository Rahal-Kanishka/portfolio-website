import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-zero-risk-modal',
  templateUrl: './zero-risk-modal.component.html',
  styleUrls: ['./zero-risk-modal.component.scss', '../../app.component.scss']
})
export class ZeroRiskModalComponent implements OnInit {
  private count = 0;

  constructor() {
  }

  public image_array = [
    "../../assets/zeroRisk/language.JPG",
    "../../assets/zeroRisk/ngmodule.png"
  ]

  public imageClass: any = null;

  public current_image = this.image_array[0];

  ngOnInit(): void {
    setInterval(() => this.incrementCount(), 3000);
    this.imageClass = document.getElementsByClassName('image-row')[0];

  }

  incrementCount() {
    this.count = this.count % this.image_array.length;
    this.current_image = this.image_array[this.count];
    this.imageClass.classList.toggle('loaded');
    this.count++;

  }

}
