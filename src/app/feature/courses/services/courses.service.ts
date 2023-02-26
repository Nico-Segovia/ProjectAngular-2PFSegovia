import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Course } from 'src/app/feature/course/models/course';

@Injectable() // Dejo vacio porque al ser un root de un sub componente, lo gestiono desde cursos.module.ts (estará en 'providers')
export class CursosService {
  private courses: Course[] =[
    {
      name: 'Angular', 
      comision: '348983', 
      profesor: {
        nombre: 'Nicolas', 
        correo: 'nico.segov@gmail.com',
        fechaRegistro: new Date(2022, 2, 15)
      },
      fechaInicio: new Date(2023, 0, 1, 20, 30, 0),
      fechaFin: new Date(2023, 0, 31, 22, 30, 0),
      inscripcionAbierta: true
    },
    {
      nombre: 'React', 
      comision: '345987', 
      profesor: {
        nombre: 'Gonzalo', 
        correo: 'gonzalo.segov@gmail.com',
        fechaRegistro: new Date(2021, 5, 12)
      },
      fechaInicio: new Date(2022, 11, 1, 20, 30, 0),
      fechaFin: new Date(2023, 1, 31, 22, 30, 0),
      inscripcionAbierta: false
    },
    {
      nombre: 'Vue', 
      comision: '345098', 
      profesor: {
        nombre: 'Mariella', 
        correo: 'mariella.carballa@gmail.com',
        fechaRegistro: new Date(2020, 0, 1)
      },
      fechaInicio: new Date(2021, 3, 3, 20, 30, 0),
      fechaFin: new Date(2021, 5, 31, 22, 30, 0),
      inscripcionAbierta: false
    },
    {
      nombre: 'NodeJS', 
      comision: '123098', 
      profesor: {
        nombre: 'Adela', 
        correo: 'adela.rugierri@gmail.com',
        fechaRegistro: new Date(2010, 4, 29)
      },
      fechaInicio: new Date(2023, 2, 1, 20, 30, 0),
      fechaFin: new Date(2023, 5, 31, 22, 30, 0),
      inscripcionAbierta: true
    },
  ];

  /*
    BehaviorSubject: lo utilizamos como respuesta a la problematica que teniamos
    en los Observables. Me permite definir un dato inicial (en este caso el arreglo 
    de 4 elementos), y me permite utilizar el metodo next en los metodos ya actualizado 
    con el arreglo presente.
    ME PERMITE TENER LA PARTE DEL SUSCRIBER TANTO COMO LA PARTE DEL OBSERVABLE
  */
  private cursos$: BehaviorSubject<Curso[]>; 

  constructor() {
    //instancio la propiedad cursos$
    this.cursos$ = new BehaviorSubject<Curso[]>(this.cursos); //<-- como parametro paso el valor que quiero que sea inicial (el arreglo de curso)
  }

  //Retorno mi observable de tipo curso
  obtenerCursos(): Observable<Curso[]>{
    return this.cursos$.asObservable();
  }

  agregarCurso(curso: Curso): void{
    this.cursos.push(curso);
    this.cursos$.next(this.cursos);
  }

  editarCurso(curso: Curso): void {
                                    // Propiedad c de tipo Curso. Y evaluo si c.comision es igual a lo que yo obtenga como parametro. Comparando las comisiones del curso que yo quiera editar, voy a obtener el indice en el arreglo de ese curso y voy a tener un if
    let indice = this.cursos.findIndex((c: Curso) => c.comision === curso.comision);
                          // findIndex devuelve un -1 si no encuentra un elemento con esta condicion

    if(indice > -1){ // es -1 por el posible resultado del 'findIndex'
      this.cursos[indice] = curso; // actualizo mi arreglo de curso en la posicion del indice donde encontre esa coincidencia
      // una vez actualizado hago un next en el Subject de cursos
      this.cursos$.next(this.cursos);
    }                      
  }

  eliminarCurso(curso: Curso): void {
  let indice = this.cursos.findIndex((c: Curso) => c.comision === curso.comision);

  if(indice > -1){ 
    this.cursos.splice(indice, 1); // splice elimina en la posicion que indique de mi indice. El segundo parametro indica cuantos elementos quiero eliminar a partir de ese indice (como quiero eliminar solo ese elemento, coloco 1).
    this.cursos$.next(this.cursos); // una vez hechas las acciones que deseo en mi arreglo de cursos, llamo a next de mi subject para poder actualizar en todods los componentes donde este subscripto en este observable para poder ver los cambios actualizados automaticamente.
  }  
  }
}