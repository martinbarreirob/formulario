import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DataService } from '../data.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {
  formData: FormGroup = this.fb.group({
    nombre: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required],
  })

  constructor(private fb: FormBuilder, private dataService: DataService) {}

  public formSubmitted: boolean = false;


  enviarFormulario(): void {
    //Comprueba si se ha pulsado el botón
    this.formSubmitted = true;

    //Comprueba si es válido
    if (this.formData.valid) {
      this.dataService.postData(this.formData.value).subscribe(response => {
        alert("Usuario cargado con exito");

        this.dataService.updateUsers(this.formData.value);//todo

        this.formData = this.fb.group({
          nombre: '',
          email: '',
          password: '',
        });
        this.formSubmitted = false;

      }, error => {
        console.error('Error al enviar datos:', error);
        // Puedes manejar el error aquí
      });
    } else {
      console.log('El formulario no es válido. Por favor, revisa los campos.');
    }
  }
}
