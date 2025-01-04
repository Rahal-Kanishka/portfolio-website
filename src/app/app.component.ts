import { Component, OnInit } from '@angular/core';
import { TranslateService } from "@ngx-translate/core";

const LANGUAGE_KEY = 'lang'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'portfolio-website';
  public darkTheme = false;
  languageList = [
    {name: "🇺🇸", code: "en"},
    {name: "🇩🇪", code: "de"},
    {name: "🇪🇸", code: "es"},
  ]
  public selectedLanguage: string | null = null
  constructor(public translateService: TranslateService){
    this.selectedLanguage = localStorage.getItem(LANGUAGE_KEY);
    if(!this.selectedLanguage){
      // set language to english if the language is not selected before
      this.translateService.use('en');
      this.selectedLanguage = 'en'
      localStorage.setItem(LANGUAGE_KEY, 'en');
    } else {
      this.translateService.use(this.selectedLanguage);
    }
  }


  ngOnInit(): void {
    this.selectorFunction();
  }

  toggleDarkTheme(): void {
    document.body.classList.toggle('dark');
    this.darkTheme = !this.darkTheme;
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

    const furtherHiddenRightElements = document.querySelectorAll('.further-hidden-right');
    furtherHiddenRightElements.forEach((el) => observer.observe(el));

    //sections
    const sectionElements = document.querySelectorAll('section');
    sectionElements.forEach((el) => sectionObserver.observe(el));

  }

  onOptionSelected($event: Event) {
    const selectedValue = ($event.target as HTMLSelectElement).value;
    this.translateService.use(selectedValue ? selectedValue : 'en');
    localStorage.setItem(LANGUAGE_KEY, selectedValue);
  }
}
