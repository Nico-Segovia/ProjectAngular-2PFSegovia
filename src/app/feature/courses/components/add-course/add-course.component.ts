import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Course } from '../../models/course.model';
import { CoursesService } from '../../services/courses.service';

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.css']
})
export class AddCourseComponent implements OnInit{

  form!: FormGroup;

  constructor(
    private router: Router,
    private courseService: CoursesService
  ){}

  ngOnInit(): void {
    this.form = new FormGroup({
      comission: new FormControl(),
      endDate: new FormControl(),
      startDate: new FormControl(),
      openRegistration: new FormControl(),
      name: new FormControl(),
    });
  }

  addCourse(){
    let course: Course = {
      name: this.form.value.name,
      commission: this.form.value.commission,
      startDate: this.form.value.startDate,
      endDate: this.form.value.endDate,
      openRegistration: this.form.value.openRegistration,
      professor: {
        name: 'Mariella',
        email: 'mariella@gmail.com',
        registrationDate: new Date()
      }
    }

    this.courseService.addCourse(course);
    this.router.navigate(['course/toList']); 
  }
}
