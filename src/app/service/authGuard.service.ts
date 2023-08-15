import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
  Router,
} from '@angular/router';
import { Observable } from 'rxjs';
import { QuestionService } from './question.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(
    private questionService: QuestionService,
    private router: Router
  ) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    if (this.questionService.isAuthenticated()) {
      this.questionService.setToken(this.questionService.getToken()!);
      this.questionService.setUserId(this.questionService.getUserId()!);
      return true;
    } else {
      // Redirect to login page with the intended URL as a query parameter
      return this.router.createUrlTree(['']);
      // return this.router.createUrlTree([''], {
      //   queryParams: { returnUrl: state.url },
      // });
    }
  }
}
