import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

class Education {
  institute: string
  location: string
  degree: string
  courses: string[]
  year: string
  image: string | undefined
  url: string | undefined

  constructor(institute: string, location: string, degree: string, courses: string[], year: string, image?: string, url?: string) {
    this.institute = institute;
    this.location = location;
    this.degree = degree;
    this.courses = courses;
    this.year = year;
    this.image = image
    this.url = url
  }

}

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss']
})
export class EducationComponent implements OnInit {

  @ViewChild('carouselExampleIndicators', { static: true }) modalElement!: ElementRef;
  public educationList: Education [] = []
  public selectedIndex = 0;
  public selectedItem: Education | null = null

  constructor() {
    this.initializeEducation();
    this.selectedItem = this.educationList[this.selectedIndex]
  }

  ngOnInit(): void {
  }

  private initializeEducation() {
    const highSchool = new Education(
      'Nalande College',
      'Colombo 10, Sri Lanka',
      'Primary Education', [],
      '1998 - 2011',
      '../../assets/education/crest_of_nalanda_college.png'
    )
    const college = new Education(
      'University of Moratuwa',
      'Moratuwa, Sri Lanka',
      'Bsc (Hons) In Information Technology',
      [
        'Web Development',
        'Enterprise Application Development',
        'Database Management Systems',
        'Big Data Analytics',
        'Deep Learning Architectures',
        'Data Mining & Data Warehousing',
        'Artificial Neural Networks & Evolutionary Computing',
        'Automata Theory'
      ],
      '2012-2017',
      '../../assets/education/university_of_moratuwa_logo.png'
      )
    const masters = new Education(
      'Towson University',
      ' Towson, Maryland, USA',
      'Master\'s in Computer Science, Specialized in Data Science',
      [
        'Software Engineering',
        'Operating Systems',
        'Database Management',
        'Advanced DataStructures and Algorithms',
        'Project Management'
      ], '2024',
      '../../assets/education/towson-logo.png'
      )
    this.educationList = [highSchool, college, masters]
  }

  public next() {
    if(this.selectedIndex == (this.educationList.length -1)) {
      this.selectedIndex = 0
    } else {
    this.selectedIndex += 1;
    }
    this.selectedItem = this.educationList[this.selectedIndex]
  }

  public back() {
    if (this.selectedIndex == 0){
      this.selectedIndex = this.educationList.length-1;
    } else {
      this.selectedIndex -= 1;
    }

    this.selectedItem = this.educationList[this.selectedIndex]
  }

}
