import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddCourseComponent } from './components/add-course/add-course.component';
import { ListCourseComponent } from './components/list-course/list-course.component';
import { EditCourseComponent } from './components/edit-course/edit-course.component';
import { MaterialModule } from 'src/app/shared/material.module';
import { CoursesRountingModule } from './courses-routing.module';
import { CoursesService } from 'src/app/feature/courses/services/courses.service';
import { ReactiveFormsModule } from '@angular/forms';
import { TableCoursesComponent } from './components/table-course/table-course.component';



@NgModule({
  declarations: [
    AddCourseComponent,
    EditCourseComponent,
    ListCourseComponent,
    TableCoursesComponent
  ],
  imports: [
    CommonModule, 
    MaterialModule,
    CoursesRountingModule,
    ReactiveFormsModule
  ],
  providers: [
    CoursesService 
  ]
})
export class CoursesModule { }
