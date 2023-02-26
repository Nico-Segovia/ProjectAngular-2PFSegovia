import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Subscription } from 'rxjs';
import { Curso } from 'src/app/models/curso';
import { CursosService } from '../../services/cursos.service';

@Component({
  selector: 'app-tabla-cursos',
  templateUrl: './tabla-cursos.component.html',
  styleUrls: ['./tabla-cursos.component.css']
})
export class TablaCursosComponent implements OnInit, OnDestroy {
  dataSource!: MatTableDataSource<Curso> // = new MatTableDataSource<Curso>(this.cursos); Esto lo voy a instanciar mas abajo para que sea desde el constructor
  columnas: string[] = ['nombre', 'comision', 'profesor', 'fechaInicio', 'fechaFin', 'inscripcionAbierta', 'acciones'];
  suscripcion!: Subscription;

  constructor(
    private cursoService: CursosService  // Inyecto como propiedad privada un objeto del tipo cursoService
  ){}

  ngOnInit(): void {
    // Asigno los valores que abtengo de crusosServices
    // this.cursos = this.cursoService.obtenerCursos();k
    // Desde aca instancio el dataSource
    this.dataSource = new MatTableDataSource<Curso>(); // lo dejo vacio, no obtengo informacion desde aca 
    this.suscripcion = this.cursoService.obtenerCursos().subscribe((cursos: Curso[]) => {       // obtengo desde aca 
      this.dataSource.data = cursos;
    });
    //Destroy
  }

  ngOnDestroy() {
    this.suscripcion.unsubscribe();
  }
}
