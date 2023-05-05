import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'portfolio-website';

  ngOnInit(): void {
    this.selectorFunction();
  }

  scroll(el: HTMLElement) {
    el.scrollIntoView({behavior: 'smooth', block: 'center', inline: 'end'});
  }

  selectorFunction() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          console.log(entry.target.classList)
          entry.target.classList.add('show');
        } else {
          entry.target.classList.remove('show');
        }
      });
    })
    const hiddenElements = document.querySelectorAll('.hidden');
    hiddenElements.forEach((el) => observer.observe(el));

    const furtherHiddenElements = document.querySelectorAll('.further-hidden');
    furtherHiddenElements.forEach((el) => observer.observe(el));


  }
}
