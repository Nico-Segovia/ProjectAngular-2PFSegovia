import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgregarCursoComponent } from './components/agregar-curso/agregar-curso.component';
import { DetalleCursoComponent } from './components/agregar-curso/detalle-curso/detalle-curso.component';
import { ListaCursosComponent } from './components/lista-cursos/lista-cursos.component';
import { EditarCursoComponent } from './components/editar-curso/editar-curso.component';
import { MaterialModule } from '../material.module';
import { CursosRountingModule } from './cursos.routing.module';
import { CoursesService } from './feature/courses/services/courses.service';
import { TablaCursosComponent } from './components/tabla-cursos/tabla-cursos.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AddCourseComponent } from './components/add-course/add-course.component';
import { EditCourseComponent } from './components/edit-course/edit-course.component';
import { ListCourseComponent } from './components/list-course/list-course.component';
import { TableCourseComponent } from './components/table-course/table-course.component';



@NgModule({
  declarations: [
    AgregarCursoComponent,
    DetalleCursoComponent,
    ListaCursosComponent,
    EditarCursoComponent,
    TablaCursosComponent,
    AddCourseComponent,
    EditCourseComponent,
    ListCourseComponent,
    TableCourseComponent
  ],
  imports: [
    CommonModule, // Representa las funcionalidades básicas para que el CLI de Angular pueda interpretar este módulo como un sub módulo dentro de nuestro proyecto
    MaterialModule,
    CursosRountingModule,
    ReactiveFormsModule
  ],
  providers: [
    CoursesService // Indico que este modulo va a tener como proveedor CrusosService. De esta forma el servicio de curso se instancia únicamente cuando inicializamos este módulo. Y ya no sigue el patron de diseño Singleton, de esta forma encapsulamos este servicio unicamente para este modulo en especifico. 
  ]
})
export class CursosModule { }
