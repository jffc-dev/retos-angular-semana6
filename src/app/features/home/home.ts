import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

interface EnlaceReto {
  ruta: string;
  titulo: string;
  descripcion: string;
}

@Component({
  selector: 'app-home',
  imports: [RouterLink],
  templateUrl: './home.html',
})
export class HomeComponent {
  formularios: EnlaceReto[] = [
    { ruta: '/reto-01', titulo: 'Reto 01 · Template-driven vs Reactive', descripcion: 'El mismo formulario hecho de las dos formas, lado a lado.' },
    { ruta: '/reto-02', titulo: 'Reto 02 · FormControl y FormGroup a mano', descripcion: 'Construir el formulario con new FormControl() / new FormGroup().' },
    { ruta: '/reto-03', titulo: 'Reto 03 · FormBuilder, grupo anidado y FormArray', descripcion: 'fb.group(), una dirección anidada y un listado dinámico de teléfonos.' },
    { ruta: '/reto-04', titulo: 'Reto 04 · Validators síncronos', descripcion: 'required, email, minLength/maxLength y pattern, todos en vivo.' },
    { ruta: '/reto-05', titulo: 'Reto 05 · Estado del control', descripcion: 'pristine/dirty, touched/untouched y valid/invalid mientras escribes.' },
    { ruta: '/reto-06', titulo: 'Reto 06 · Mensajes de error específicos', descripcion: 'Getters + hasError() para saber cuál validación falló.' },
    { ruta: '/reto-07', titulo: 'Reto 07 · Checkout completo', descripcion: 'Todo junto: validación cruzada, valueChanges y markAllAsTouched().' },
  ];
}
