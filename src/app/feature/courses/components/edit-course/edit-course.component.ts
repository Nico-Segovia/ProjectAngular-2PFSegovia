import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Course } from '../../models/course.model';
import { CoursesService } from '../../services/courses.service';

@Component({
  selector: 'app-edit-course',
  templateUrl: './edit-course.component.html',
  styleUrls: ['./edit-course.component.css']
})
export class EditCourseComponent implements OnInit {

  //Creo un objeto de tipo formulario para recibir los valores de los parametros que recibo de redirigirEditarCurso()
  form!: FormGroup;

  constructor(
    private activatedRoute: ActivatedRoute,
    private courseService: CoursesService,
    private router: Router
  ){}

  // Obtengo los parametros que me envia redirigirEditarCurso() desde la ruta

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((parameters) =>{
      console.log(parameters);

      // Aca también voy a castear al tipo de dato Date, porque por parametro me devuelve todo lo que tenga en dato String 
      this.form = new FormGroup({
        commission: new FormControl(parameters.get('commission')),
        endDate: new FormControl(new Date(parameters.get('endDate') || '')),
        startDate: new FormControl(new Date(parameters.get('startDate') || '')),
        openRegistration: new FormControl(parameters.get('openRegistration' || false)),
        name: new FormControl(parameters.get('name')),
        // profesor: new FormControl(parametros.get('profesor'))
      })
    })
  }

  editCourse(){
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

    this.courseService.editCourse(course);
    this.router.navigate(['courses/toList']); // esto es para cuando guarde lo editado, me mande a la vista de listar cursos y vea ya el cambio reflejado
  }
}
