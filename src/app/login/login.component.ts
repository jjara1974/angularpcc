import { Component, OnInit } from '@angular/core';
import { LoginService } from './login.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  usuarios=null;
  user={
    nombre:null,
      }

  constructor(private loginservicio: LoginService) { }

  ngOnInit() {
    this.recuperarTodos();
  }

  recuperarTodos() {
    this. loginservicio.recuperarTodos().subscribe(result => this.usuarios = result);
  }

}