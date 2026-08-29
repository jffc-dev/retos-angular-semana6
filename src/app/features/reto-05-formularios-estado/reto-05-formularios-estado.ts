import { JsonPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-reto-05-formularios-estado',
  imports: [RouterLink, ReactiveFormsModule, JsonPipe],
  templateUrl: './reto-05-formularios-estado.html',
})
export class Reto05FormulariosEstado {
  private builder = inject(FormBuilder)

  miFormulario = this.builder.group({
    email: ['', [Validators.required, Validators.email]],
  })

  get email(){
    return this.miFormulario.get('email')!
  }
}
