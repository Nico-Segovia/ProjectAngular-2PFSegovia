import { Component, Inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { token } from 'src/app/config';
import { Curso } from 'src/app/models/curso';
import { CursosService } from '../../services/cursos.service';

@Component({
  selector: 'app-lista-cursos',
  templateUrl: './lista-cursos.component.html',
  styleUrls: ['./lista-cursos.component.css']
})
export class ListaCursosComponent implements OnInit{
  cursos!: Curso[];
  cursos$!: Observable<Curso[]>;
  
  constructor(
    private cursoService: CursosService,  // Inyecto como propiedad privada un objeto del tipo cursoService
    // @Inject(token) private config: Configuracion
    private router: Router
  ){}
  
  ngOnInit(): void {
    //Con Promise
    /*
    this.cursoService.obtenerCursosPromise().then((cursos: Curso[]) => {
      this.cursos = cursos;
    }).catch((error: any) => {
      console.log("Hubo un error en el Promise:", error);
    })
    */
    
    //Con Observable
    /*
    this.cursoService.obtenerCursosObservable().subscribe((cursos: Curso[]) => {
      this.cursos = cursos;
    })
    */
    
    this.cursos$ = this.cursoService.obtenerCursos(); // Solamente asigno el observable como tal, por eso comento las lineas de abajo
    // this.cursos$.subscribe((cursos: Curso[]) => {
    //   this.cursos = cursos;
    // })
  }

  eliminarCurso(curso: Curso){
    this.cursoService.eliminarCurso(curso);
  }

  redirigirEditarCurso(curso: Curso){
    this.router.navigate(['cursos/editar', curso]); // paso el curso a cursos/editar (me manda cada una de las propiedades del curso, de manera implicita en la ruta de nuestro navegador)
  }
}
