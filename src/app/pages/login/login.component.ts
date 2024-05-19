import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Route, Router } from '@angular/router';
import { RegisterComponent } from '../register/register.component';
import { LoadingService } from 'src/app/shared/services/loading.service';
import { AuthService } from '../../shared/services/auth.service';
import { error } from 'console';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit{

  email = new FormControl('');
  password = new FormControl('');

  router = new Router;

  constructor(private regDialog: MatDialog, private loadingService: LoadingService, private authService: AuthService){

  }


  ngOnInit(): void {

  }
  async login(){
    /*if (this.email.value === 'test@gmail.com' && this.password.value === 'asd'){
        this.router.navigateByUrl('/main');
    }else{
      console.error('Hibás email vagy jelszó');
    }
    */

    this.authService.login(this.email.value, this.password.value).then(cred =>{
      console.log(cred);
      this.router.navigateByUrl('/main');

    }).catch(error => {
      console.error(error);
    });
  }
  RegisterDialog(){
    this.regDialog.open(RegisterComponent);
  }
}
