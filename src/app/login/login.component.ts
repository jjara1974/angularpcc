import { Component, OnInit } from '@angular/core';
import {User} from '../modelos/user';
import { LoginService } from './login.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  
  usuarios: User[] = null;

  constructor(private loginservicio: LoginService) { }

  ngOnInit() {
    this.recuperarTodos();
    console.log(this.usuarios);
  }

  recuperarTodos() {
   this.loginservicio.recuperarTodos()           //Llamamos a la funcion <strong>listar</strong> de nuestro servicio
    .map((response) => response.json())   //Mapeamos los datos devueltos por nuestro archivo php
    .subscribe((data) => {                
      this.usuarios= data;   });
    
   

    
  }


}