import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DataService } from '../data.service';


@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent {
  public usuarios: any;
  public apiUrl = 'http://localhost:3000/api/usuarios'; // Reemplaza con la URL de tu API
  constructor(private http: HttpClient, private dataService: DataService) { }

  ngOnInit(): void {
    this.fetchData();

    this.dataService.users$.subscribe(users => {
      if (this.usuarios !== undefined) {
        this.usuarios.data.push(users);
      }
    });
  }

  fetchData(): void {
    this.http.get(this.apiUrl).subscribe((response) => {
      this.usuarios = response;
    });
  }

  deleteData(idUser: any): void{
    this.http.delete(`${this.apiUrl}/${idUser}`).subscribe((response) => {
      if(response){
        this.fetchData();
      }
    });
  }
}
