import { JsonPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-reto-04-formularios-validators',
  imports: [RouterLink, ReactiveFormsModule, JsonPipe],
  templateUrl: './reto-04-formularios-validators.html',
})
export class Reto04FormulariosValidators {
  private builder = inject(FormBuilder)

  miFormulario = this.builder.group({
    nombre: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    usuario: ['', [Validators.minLength(4), Validators.maxLength(12), Validators.required]],
    numeroTarjeta: ['', [Validators.required,Validators.pattern(/^\d{16}$/)]]
  })
}
