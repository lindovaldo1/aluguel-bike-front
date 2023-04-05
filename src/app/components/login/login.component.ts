import { LoginElement } from './../../models/LoginElement';
import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserElementService } from 'src/app/services/userElement.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  formulario = new FormGroup({
    email: new FormControl('lucas@email.com', [Validators.required]),
    password: new FormControl('123', [Validators.required])
  })
  hide = true

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private userElementService: UserElementService
  ){
  }

  login(){
    if(this.formulario.value.email != '' && this.formulario.value.password != ''){

      let element: LoginElement = {
        "email": this.formulario.get('email')?.value,
        "password": this.formulario.get('password')?.value
      }

      this.userElementService.getLogin(element).subscribe((data) => {
        let temp = JSON.parse(JSON.stringify(data))

        localStorage.setItem('userId', temp.userId)
        localStorage.setItem('role', temp.role)
        localStorage.setItem('auth', temp.auth)

        this.router.navigateByUrl('users')
      },
        (error) => {
          alert("Usuario ou senha invalidos")
        }
      )

    }

  }
}
