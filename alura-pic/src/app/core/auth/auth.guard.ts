import { Injectable } from '@angular/core';
import { UserService } from '../user/user.service';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router,
} from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
  constructor(private userService: UserService, private router: Router) {}
  // se true, eu tenho acesso a rota. se false, não tenho acesso
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean | Observable<boolean> | Promise<boolean> {
    console.log('Guardando rotas');
    if (this.userService.isLogged()) {
      this.router.navigate(['user/' + this.userService.getUserName()]);
      return false;
    }
    return true;
  }
}
