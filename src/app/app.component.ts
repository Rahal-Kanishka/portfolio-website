import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'portfolio-website';

  scroll(el: HTMLElement) {
    el.scrollIntoView({behavior: 'smooth', block: 'center', inline: 'end'});
  }
}
