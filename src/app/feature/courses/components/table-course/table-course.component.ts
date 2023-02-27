import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Subscription } from 'rxjs';
import { Course } from 'src/app/feature/courses/models/course.model';
import { CoursesService } from '../../services/courses.service';

@Component({
  selector: 'app-tabla-cursos',
  templateUrl: './tabla-cursos.component.html',
  styleUrls: ['./tabla-cursos.component.css']
})
export class TableCoursesComponent implements OnInit, OnDestroy {
  dataSource!: MatTableDataSource<Course> // = new MatTableDataSource<Curso>(this.cursos); Esto lo voy a instanciar mas abajo para que sea desde el constructor
  columns: string[] = ['name', 'commission', 'professor', 'startDate', 'endDate', 'openRegistration', 'actions'];
  subscription!: Subscription;

  constructor(
    private courseService: CoursesService  
  ){}

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource<Course>(); 
    this.subscription = this.courseService.getCourse().subscribe((courses: Course[]) => {       
      this.dataSource.data = courses; // 
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
