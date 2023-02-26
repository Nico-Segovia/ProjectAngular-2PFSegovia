import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { Student } from '../models/student.model';
import { Subject } from 'rxjs';
import { EditStudentDialogComponent } from '../components/edit-student-dialog/edit-student-dialog.component';
import { routes } from '../app-routing-module';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private http: HttpClient) {}

  getStudents(): Observable<any> {
    return this.http.get('https://63f90b6f23ad39d6dd98a31c.mockapi.io/Students/');
  }

  saveChanges(student: Student) {
    this.http.put<any>('https://63f90b6f23ad39d6dd98a31c.mockapi.io/Students/' + student.id, student).subscribe({
      next: data => {
          student.id = data.id;
          alert("Estudiante Guardado!");        
          window.location.reload();
      }    
    });
  }

  deleteStudent(idStudent: number) {
    this.http.delete('https://63f90b6f23ad39d6dd98a31c.mockapi.io/Students/' + idStudent).subscribe({
      next: data => {
          alert("Estudiante Eliminado!"); 
          window.location.reload();         
      }     
    });
  }

  addStudent(student: Student) {
    this.http.post<any>('https://63f90b6f23ad39d6dd98a31c.mockapi.io/Students/', student).subscribe({
      next: data => {
          student.id = data.id;
          alert("Registered Student!");                  
      }    
    });
  }
}
