import { NgModule } from '@angular/core';
import { RouterModule ,Routes } from '@angular/router';
import { AddCourseComponent } from './components/add-course/add-course.component';
import { EditCourseComponent } from './components/edit-course/edit-course.component';
import { ListCourseComponent } from './components/list-course/list-course.component';

const routes: Routes = [
    {path: 'courses', children: [
        { path: 'list', component: ListCourseComponent},
        { path: 'edit', component: EditCourseComponent},
        { path: 'add', component: AddCourseComponent}
    ]}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class CoursesRountingModule { }
