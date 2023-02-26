import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NoFoundComponent } from './components/no-found/no-found.component';



@NgModule({
  declarations: [
    NoFoundComponent
  ],
  imports: [
    CommonModule,
    NoFoundComponent
  ]
})
export class CoreModule { }
