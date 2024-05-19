import { Component } from '@angular/core';
import {AbstractControl, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { LoginComponent } from '../login/login.component';
import {MatDialog, matDialogAnimations, MatDialogRef} from '@angular/material/dialog';
import { AuthService } from '../../shared/services/auth.service';
import { error } from 'console';
import { UserService } from '../../shared/services/user.service';
import {User} from "../../shared/modellek/User";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {

  router = new Router;


  constructor(private logDialog: MatDialog,
              private authService: AuthService,
              private userService: UserService,
              public dialogRef: MatDialogRef<RegisterComponent>)
{

  }

  passwordMatchValidator: ValidatorFn = (group: AbstractControl): ValidationErrors | null => {
    const password = group.get('password')?.value;
    const rePassword = group.get('rePassword')?.value;
    return password === rePassword ? null : { mismatch: true };
  };
  registerForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)]),
    rePassword: new FormControl('', [Validators.required]),
    name: new FormGroup({
      firstname: new FormControl('', Validators.required),
      lastname: new FormControl('', Validators.required)
    })
  }, { validators: this.passwordMatchValidator });



  LoginDialog(){
    this.logDialog.open(LoginComponent);
  }
  OnSubmit(){
    if (this.registerForm.valid) {
      console.log(this.registerForm.value);
      this.authService.signup(this.registerForm.get('email')?.value, this.registerForm.get('password')?.value).then(cred => {
        console.log(cred);
        const user: User = {
          id: cred.user?.uid || '',
          username: (this.registerForm.get('name.firstname')?.value + " " + this.registerForm.get('name.lastname')?.value) || '',
          email: this.registerForm.get('email')?.value || '',
          name: {
            firstname: this.registerForm.get('name.firstname')?.value || '',
            lastname: this.registerForm.get('name.lastname')?.value || ''
          }
        };
        this.userService.create(user).then(_ => {
          console.log("user added");
          this.dialogRef.close();
        }).catch(error => {
          console.log(error);
        })
      }).catch(error => {
        console.error(error);
      });
    } else {
      this.registerForm.markAllAsTouched();
    }
  }


}
