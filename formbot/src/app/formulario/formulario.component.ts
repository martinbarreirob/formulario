import { Component } from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {

  enviarFormulario() {
    // Aquí puedes manejar la lógica para enviar los datos a una base de datos o realizar otras acciones necesarias
    // Puedes utilizar servicios de Angular para gestionar la comunicación con tu backend.
    alert('Formulario enviado correctamente');
  }
}
