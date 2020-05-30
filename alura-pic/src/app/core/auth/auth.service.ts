import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { TokenService } from '../token/token.service';
const API_URL = 'http://localhost:3000';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient, private tokenService: TokenService) {}
  authenticate(username: string, password: string) {
    return this.http
      .post(
        API_URL + '/user/login',
        {
          userName: username,
          password,
        },
        { observe: 'response' }
      )
      .pipe(
        tap((resp) => {
          const authToken = resp.headers.get('x-access-token');
          this.tokenService.setToken(authToken);
          console.log(`User ${username} autenticado com o token: ${authToken}`);
        })
      );
  }
}
