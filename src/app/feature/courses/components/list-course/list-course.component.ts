import { Component, Inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Course } from 'src/app/feature/courses/models/course.model';
import { CoursesService } from '../../services/courses.service';

@Component({
  selector: 'app-list-course',
  templateUrl: './list-course.component.html',
  styleUrls: ['./list-course.component.css']
})
export class ListCourseComponent implements OnInit{
  courses!: Course[];
  courses$!: Observable<Course[]>;
  
  constructor(
    private courseService: CoursesService,  // Inyecto como propiedad privada un objeto del tipo cursoService
    // @Inject(token) private config: Setting
    private router: Router
  ){}
  
  ngOnInit(): void {
    this.courses$ = this.courseService.getCourse(); 
  }

  deleteCourse(course: Course){
    this.courseService.deleteCourse(course);
  }

  redirectEditCourse(course: Course){
    this.router.navigate(['courses/edit', course]);
  }
}
