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

    let currentSectionId:any;
    const menuElements = document.querySelectorAll('#top-nav button');
    console.log('menu items: ', menuElements.length);

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
        } else {
          entry.target.classList.remove('show');
        }
      });
    });

    const sectionObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          currentSectionId = (entry.target && entry.target.getAttribute('id')) ? entry.target.getAttribute('id') : '';
          console.log('currentSectionId: ', currentSectionId);

          if (menuElements) {
            menuElements.forEach(
              element => {
                if (element) {
                  element.classList.remove('select');
                  console.log('class list: ', element.classList);
                  if (element && element.classList.contains(currentSectionId)) {
                    element.classList.add('select')
                  }
                }
              });
          }

        }
      });
    });


    const hiddenElements = document.querySelectorAll('.hidden');
    hiddenElements.forEach((el) => observer.observe(el));

    const furtherHiddenElements = document.querySelectorAll('.further-hidden');
    furtherHiddenElements.forEach((el) => observer.observe(el));

    //sections
    const sectionElements = document.querySelectorAll('section');
    sectionElements.forEach((el) => sectionObserver.observe(el));

  }
}
