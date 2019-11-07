import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { BarraComponent } from './barra/barra.component';
import { InformesComponent } from './informes/informes.component';

const appRoutes: Routes = [
  { path: 'informes', component: InformesComponent },
  { path: 'login',component: LoginComponent },
  /*{
    path: 'heroes',
    component: HeroListComponent,
    data: { title: 'Heroes List' }
  },
  { path: '', 
    redirectTo: '/appheroes',
    pathMatch: 'full'
  },
  { path: '**', component: AppComponent }*/
];


@NgModule({
  imports:[ BrowserModule, FormsModule ,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } 
    )],
  declarations: [ AppComponent,  LoginComponent, BarraComponent, InformesComponent ],
  bootstrap:    [ AppComponent ],
  

})
export class AppModule { }
