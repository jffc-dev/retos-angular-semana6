import { JsonPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormArray, FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-reto-03-formularios-formbuilder',
  imports: [RouterLink, ReactiveFormsModule, JsonPipe],
  templateUrl: './reto-03-formularios-formbuilder.html',
})
export class Reto03FormulariosFormbuilder {
  private builder = inject(FormBuilder)

  miFormulario = this.builder.group({
    nombre: [''],
    email: [''],

    direccion: this.builder.group({
      calle: [''],
      ciudad: [''],
    }),

    telefonos: this.builder.array([this.builder.control('')])
  })

  get telefonos(): FormArray {
    return this.miFormulario.get('telefonos') as FormArray
  }

  agregarTelefono(){
    if(this.telefonos.length < 3){
      (this.miFormulario.get('telefonos') as FormArray).push(this.builder.control(''))
    }
  }

  quitarTelefono(index: number){

    (this.miFormulario.get('telefonos') as FormArray).removeAt(index)
    console.log(index)
  }
}
