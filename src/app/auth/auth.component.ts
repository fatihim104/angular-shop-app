import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  constructor() { }

  isLoginMode:boolean= true;

  ngOnInit(): void {
  }

  toogleMode(){
    this.isLoginMode = !this.isLoginMode;
  }

}
