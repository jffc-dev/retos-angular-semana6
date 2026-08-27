import { JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-reto-02-formularios-formgroup-basico',
  imports: [RouterLink, ReactiveFormsModule, JsonPipe],
  templateUrl: './reto-02-formularios-formgroup-basico.html',
})
export class Reto02FormulariosFormgroupBasico {
  miFormulario = new FormGroup({
    nombre: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email, Validators.maxLength(20)])
  })

  ngOnInit(): void {
    this.miFormulario.valueChanges.subscribe((valor) => {
      console.log(valor)
    })
  }

  patchValue(){
    this.miFormulario.patchValue({nombre: 'Javier', email: 'javier@gmail.com' })
  }

  reset(){
    this.miFormulario.reset()
  }
}
