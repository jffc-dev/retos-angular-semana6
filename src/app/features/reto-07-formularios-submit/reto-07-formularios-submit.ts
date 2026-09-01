import { JsonPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, Validators, ValidatorFn, ValidationErrors, AbstractControl } from '@angular/forms';
import { RouterLink } from '@angular/router';

const verificarContrasenias = (): ValidatorFn => {
  return (campos: AbstractControl): ValidationErrors | null => {
    // console.log(campos)
    const contrasenia = campos.get('contrasenia')?.value
    const confirmarContrasenia = campos.get('confirmarContrasenia')?.value
    if(contrasenia !== confirmarContrasenia){
      return {constraseniasNoCoinciden: true}
    }
    return null
  }
}

@Component({
  selector: 'app-reto-07-formularios-submit',
  imports: [RouterLink, ReactiveFormsModule, JsonPipe],
  templateUrl: './reto-07-formularios-submit.html',
})
export class Reto07FormulariosSubmit {
  private builder = inject(FormBuilder)

  miFormulario = this.builder.group({
    nombre: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    tipoCliente: ['empresa', Validators.required],
    nombreEmpresa: [''],
    contrasenia: ['', [Validators.required, Validators.minLength(8)]],
    confirmarContrasenia: ['', [Validators.required, Validators.minLength(8)]]
  }, {
    validators: verificarContrasenias()
  })

  onSubmit(){
    console.log(this.miFormulario.value)
    console.log(this.miFormulario.valid)
    console.log('constraseniasNoCoinciden', this.miFormulario.hasError('constraseniasNoCoinciden'))
  }
}
