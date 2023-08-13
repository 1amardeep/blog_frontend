import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { QuestionService } from 'src/app/service/question.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent {
  signupForm: FormGroup;
  hide = true;

  constructor(
    private fb: FormBuilder,
    private questionService: QuestionService,
    private router: Router
  ) {
    this.signupForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
    });
  }

  onSubmit() {
    if (this.signupForm.valid) {
      const formData = this.signupForm.value;
      this.questionService.signUp(formData).subscribe(
        (signUp) => {
          console.log(signUp.message);
          this.questionService.setToken(signUp.token);
          this.router.navigate(['dashboard']);
        },
        (error) => {
          console.log(error?.error?.message);
        }
      );
    }
  }

  getErrorMessage(controlName: string): string {
    const control = this.signupForm.get(controlName);

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
