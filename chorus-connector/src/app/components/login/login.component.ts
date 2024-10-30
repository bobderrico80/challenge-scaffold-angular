import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { catchError, of, take } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  form = new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
  });

  loginError = false;

  constructor(
    private readonly authService: AuthService,
    private readonly router: Router
  ) {}

  submitForm() {
    this.loginError = false;

    if (this.form.invalid) {
      return;
    }

    const username = this.form.controls.username.value || '';
    const password = this.form.controls.password.value || '';

    this.authService
      .login(username, password)
      .pipe(
        take(1),
        catchError(() => {
          return of(false);
        })
      )
      .subscribe((loginSuccessful) => {
        if (!loginSuccessful) {
          this.loginError = true;
        }

        return this.router.navigate(['/admin']);
      });
  }
}
