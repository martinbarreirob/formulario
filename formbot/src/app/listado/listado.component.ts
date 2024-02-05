import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent {
  public data: any;

  constructor(private http: HttpClient) { }

  ngOnInit(): void{
    this.fetchData();

  }

  fetchData(): void {
    const apiUrl = 'http://localhost:3000/api/usuarios'; // Reemplaza con la URL de tu API

    this.http.get(apiUrl).subscribe((response) => {
      this.data = response;
    });
  }
}
