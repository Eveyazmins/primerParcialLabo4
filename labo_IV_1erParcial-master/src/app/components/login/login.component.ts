import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder, ValidatorFn } from '@angular/forms';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { AuthService } from '../../services/auth.service'
import {UserInterface} from '../../models/user-interface';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  private user : UserInterface ={
    email: "",
    password : ""
  };

  constructor(private authService: AuthService, private router: Router) { }


  onLogin()
  {
    return this.authService.loginuser(this.user.email, this.user.password)
    .subscribe(data => {
      this.authService.setUser(data.user);
      let token = data.id;
      this.authService.setToken(token);
      this.router.navigate(["ruta"]);
    },
    error => console.log(error)
  );
  }

  ngOnInit() {
  }

}
