import { JsonPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-reto-06-formularios-errores',
  imports: [RouterLink, ReactiveFormsModule, JsonPipe],
  templateUrl: './reto-06-formularios-errores.html',
})
export class Reto06FormulariosErrores {
  private builder = inject(FormBuilder)

  miFormulario = this.builder.group({
    email: ['', [Validators.required, Validators.email]],
    contrasenia: ['', [Validators.required, Validators.minLength(8)]],
  })

  get email(){
    return this.miFormulario.get('email')!
  }

  get contrasenia(){
    return this.miFormulario.get('contrasenia')!
  }
}
