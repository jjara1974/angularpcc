import { Component, OnInit } from '@angular/core';
import { LoginService } from './login.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  user={
    nombre:null,
      };
  usuarios: user[] = null;

  constructor(private loginservicio: LoginService) { }

  ngOnInit() {
    this.recuperarTodos();
    console.log(this.usuarios[0].nombre);
  }

  recuperarTodos() {
    this. loginservicio.recuperarTodos().subscribe(result => this.usuarios = result);
    
  }

}