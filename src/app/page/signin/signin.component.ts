import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { firstValueFrom } from 'rxjs';
import { IUser } from 'src/app/interface/auth';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent {
  // user!:IUser
  email: string = '';
  password: string = '';
  formSignin = this.formBuilder.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.minLength(6), Validators.required]],
    confirmPassword: ['', [Validators.required]]
  }, { validators: this.checkPassword })
  constructor(
    private formBuilder: FormBuilder,
    private routers: Router,
    private authService:AuthService,
    ) {}
  checkPassword(form: FormGroup) {
    const password = form.get('password')?.value;
    const confirmPassword = form.get('confirmPassword')?.value;
    if (password === confirmPassword) return null;
    return { notMatch: true };
  }
    // const isUserExist = this.formSignin.find(m =>m.email == this.formSignin.email&& m.password == this.password)
    // if(isUserExist != undefined){
    //   alert('đăng nhập thành công')
    // }else{
    //   alert('')
    // }
    // onSubmitSignin() {
    //   if (this.authService.signIn(this.email,this.password)) {
    //     // Redirect the user to a protected route or dashboard
    //     this.routers.navigate(['/dashboard']);
    //   } else {
    //     // Show an error message for failed login
    //    alert('đăng nhập thất bại')
    //   }
    // }
}

