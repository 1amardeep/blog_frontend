import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { QuestionService } from 'src/app/service/question.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  loginForm: FormGroup;
  hide = true;

  constructor(
    private fb: FormBuilder,
    private questionService: QuestionService,
    private router: Router
  ) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
    });
  }

  ngOnInit(): void {
    if (this.questionService.getToken()) {
      this.questionService.setToken(this.questionService.getToken()!);
      this.questionService.setUserId(this.questionService.getUserId()!);
      this.router.navigate(['dashboard']);
    } else {
      this.questionService.clearToken();
    }
  }

  onSubmit() {
    if (this.loginForm.valid) {
      const formData = this.loginForm.value;
      this.questionService.login(formData).subscribe(
        (login) => {
          this.questionService.setToken(login.token);
          this.questionService.setUserId(login.userId);
          this.router.navigate(['dashboard']);
        },
        (error) => {
          console.log(error.message);
        }
      );
    }
  }

  getErrorMessage(controlName: string): string {
    const control = this.loginForm.get(controlName);

    if (control?.hasError('required')) {
      return 'This field is required.';
    }

    if (controlName === 'email' && control?.hasError('email')) {
      return 'Invalid email format.';
    }

    if (controlName === 'password' && control?.hasError('minlength')) {
      return 'Password should be at least 8 characters long.';
    }

    return '';
  }
}
