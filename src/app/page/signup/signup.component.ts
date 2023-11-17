import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { firstValueFrom } from 'rxjs';
import { IUser } from 'src/app/interface/auth';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
user!:IUser


  formSignup = this.formBuilder.group({
    name: [''],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.minLength(6), Validators.required]],
    confirmPassword: ['', [Validators.required]]
  }, { validators: this.checkPassword })
  constructor(
   
    private formBuilder :FormBuilder,
    private authService:AuthService,
    private router:ActivatedRoute,
    private routers: Router
    ) {

  }

  checkPassword(form: FormGroup) {
    const password = form.get('password')?.value;
    const confirmPassword = form.get('confirmPassword')?.value;
    if (password === confirmPassword) return null;
    return { notMatch: true };
  }
  async onSubmitSignIn() {
    // console.log(this.formSignup.value);
     if (this.formSignup.invalid) return;
      const user: any = { ...this.user, ...this.formSignup.value };
      await firstValueFrom(this.authService.signUp(user))
      alert('Sign In successfully!')
      this.routers.navigate([''])
   
 

  }
}
