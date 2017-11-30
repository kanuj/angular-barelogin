import { AuthService } from './../auth.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  private _form;

  constructor(private service: AuthService, private router: Router) { }

  ngOnInit() {
  }

  async processLogin(loginForm: NgForm) {
    this._form = loginForm.value;
    const response = await this.service.authLogin(this.username, this.password);

    if (response.auth) {
      this.router.navigate(['user']);
    }
  }

  get username(): string {
    return this._form.username;
  }

  get password(): string {
    return this._form.password;
  }

}
