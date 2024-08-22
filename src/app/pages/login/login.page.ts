import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {


  //se puede crear variable, contrantes, listas, arreglos, json, etc:
  //Nombre_variable: Tipo_dato = valor;

  titulo: string = "PÁGINA DE LOGIN";
  numero: number = 5;
  decimal: number = 5.2;
  exite: boolean = true;
  fecha: Date = new Date();
  nombres: string[] = ["Pedro","Juan","Diego"];
  persona: any = {"nombre": "Jeison", "Edad":5};

  //Ngmodel
  email:string="pedro@gmail.com";

  constructor() { }

  ngOnInit() {
  }

}
