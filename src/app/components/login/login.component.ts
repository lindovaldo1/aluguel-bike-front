import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserElementService } from 'src/app/services/userElement.service';
import { LoginElement } from './../../models/LoginElement';
import { UserElement } from 'src/app/models/UserElement';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  formulario = new FormGroup({
    email: new FormControl('a', [Validators.required]),
    password: new FormControl('a', [Validators.required])
  })
  hide = true;
  userElementService!: UserElementService

  constructor(
    private router: Router,
    private formBuilder: FormBuilder
  ){
  }

  login(){
    if(this.formulario.value.email != '' && this.formulario.value.password != ''){

      let element = {
        email: this.formulario.value.email!.toString(),
        password: this.formulario.value.password!.toString()
      }

      localStorage.setItem('email', element.email)
      localStorage.setItem('password', element.password)

      this.userElementService.login().subscribe((data) => {
        console.log(data + ' 3')
      })
    }
  }
}
