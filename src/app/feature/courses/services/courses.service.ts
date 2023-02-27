import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Course } from '../models/course.model';

@Injectable() // Dejo vacio porque al ser un root de un sub componente, lo gestiono desde cursos.module.ts (estará en 'providers')
export class CoursesService {
  private courses: Course[] =[
    {
      name: 'Angular', 
      commission: '348983', 
      professor: {
        name: 'Nicolas', 
        email: 'nico.segov@gmail.com',
        registrationDate: new Date(2022, 2, 15)
      },
      startDate: new Date(2023, 0, 1, 20, 30, 0),
      endDate: new Date(2023, 0, 31, 22, 30, 0),
      openRegistration: true
    },
    {
      name: 'NodeJS', 
      commission: '123098', 
      professor: {
        name: 'Adela', 
        email: 'adela.rugierri@gmail.com',
        registrationDate: new Date(2010, 4, 29)
      },
      startDate: new Date(2023, 2, 1, 20, 30, 0),
      endDate: new Date(2023, 5, 31, 22, 30, 0),
      openRegistration: true
    },
  ];

  private courses$: BehaviorSubject<Course[]>; 

  constructor() {
    this.courses$ = new BehaviorSubject<Course[]>(this.courses);
  }

  getCourse(): Observable<Course[]>{
    return this.courses$.asObservable();
  }

  addCourse(course: Course): void{
    this.courses.push(course);
    this.courses$.next(this.courses);
  }

  editCourse(course: Course): void {
    let index = this.courses.findIndex((c: Course) => c.commission === course.commission);

    if(index > -1){ // es -1 por el posible resultado del 'findIndex'
      this.courses[index] = course; 
      this.courses$.next(this.courses);
    }                      
  }

  deleteCourse(course: Course): void {
  let index = this.courses.findIndex((c: Course) => c.commission === course.commission);

  if(index > -1){ 
    this.courses.splice(index, 1); 
    this.courses$.next(this.courses); 
  }  
  }
}