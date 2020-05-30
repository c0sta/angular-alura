import { Injectable } from '@angular/core';
import { TokenService } from '../token/token.service';
import { BehaviorSubject } from 'rxjs';
import { UserI } from './user.interface';
import * as jwt_decoder from 'jwt-decode';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private userSubject = new BehaviorSubject<UserI>(null);
  private userName: string;
  constructor(private tokenService: TokenService) {
    // Ao abrir a aplicação, irá verificar se existe um token, ou seja, se o usuário está logado. Se existir: irá decodificá-lo e passar a resposta para o subject. Se não, nada acontecerá
    this.tokenService.hasToken() && this.decodeAndNotify();
  }
  setToken(token: string) {
    this.tokenService.setToken(token);

    this.decodeAndNotify();
  }

  getUser() {
    return this.userSubject.asObservable();
  }

  private decodeAndNotify() {
    const token = this.tokenService.getToken();
    const user = jwt_decoder(token) as UserI; // Casting - Como sabemos q o tipo retornado pela decodificação do token será igual a da interface UserI, podemos definir o tipo dela através dessa sintaxe de casting
    this.userName = user.name;
    this.userSubject.next(user);
  }

  logout() {
    this.tokenService.removeToken();
    this.userSubject.next(null);
  }
  isLogged() {
    return this.tokenService.hasToken();
  }

  getUserName() {
    return this.userName;
  }
}
