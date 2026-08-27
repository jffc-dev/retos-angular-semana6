import { JsonPipe } from '@angular/common';
import { Component, signal } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-reto-01-formularios-comparacion',
  imports: [RouterLink, FormsModule, JsonPipe, ReactiveFormsModule],
  templateUrl: './reto-01-formularios-comparacion.html',
})
export class Reto01FormulariosComparacion {
  nombre = signal('')
  email = signal('')

  miFormulario = new FormGroup({
    nombre: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email, Validators.maxLength(20)])
  })
}
