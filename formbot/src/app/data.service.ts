import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private apiUrl = 'http://localhost:3000/api/usuarios'; // Reemplaza con la URL de tu API
  private usersSubject = new BehaviorSubject<any[]>([]);
  users$ = this.usersSubject.asObservable();

  constructor(private http: HttpClient) { }

  postData(data: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, data);
  };

  updateUsers(users: any[]): void {
    this.usersSubject.next(users);
    console.log('this usersubjec', this.usersSubject);
  }
}
