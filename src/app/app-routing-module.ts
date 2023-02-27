import { Routes } from '@angular/router';
import { AddStudentComponent } from './feature/students/components/add-student/add-student.component';
import { StudentsListComponent } from './feature/students/components/students-list/students-list.component';
import { StudentService } from './feature/students/services/student.service';

export const routes: Routes = [
    {
        path: "", component:StudentsListComponent
    },
    {
        path: "add-student", component:AddStudentComponent
    }
]


