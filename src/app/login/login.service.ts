import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService{

  constructor(private http: HttpClient){

  }

  recuperarTodos() {
    return this.http.get('http://83.56.28.106:48313/at/recuperartodos.php');
  }
}