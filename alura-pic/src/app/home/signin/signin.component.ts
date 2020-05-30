import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from 'src/app/core/auth/auth.service';
import { Router } from '@angular/router';
import { PlatformDetectorService } from 'src/app/core/platform-detector/platform-detector.service';

@Component({
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.sass'],
})
export class SigninComponent implements OnInit {
  loginForm: FormGroup;
  // cria uma ref p/ o elemento HTML com o id q vc colocar
  @ViewChild('userNameInput') userNameInput: ElementRef<HTMLInputElement>;
  authenticated: boolean;
  constructor(
    private formBuilder: FormBuilder,
    private auth: AuthService,
    private router: Router,
    private platformDetectorService: PlatformDetectorService
  ) {}

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      userName: ['', Validators.required],
      password: ['', Validators.required],
    });
    this.platformDetectorService.isPlatformBrowser() &&
      this.userNameInput?.nativeElement.focus();
  }
  login() {
    const userName = this.loginForm.get('userName').value;
    const password = this.loginForm.get('password').value;

    this.auth.authenticate(userName, password).subscribe(
      () => {
        this.router.navigateByUrl('user/' + userName); // tentei concatenar usando a ',' como o flávio ensina mas estava retornando um erro então voltei a usar o + p/ concatenar
        console.log('Autenticado');
      },
      (error) => {
        console.log(error);
        this.loginForm.reset();
        this.platformDetectorService.isPlatformBrowser() &&
          this.userNameInput.nativeElement.focus();
        alert('Não foi possível autenticar, tente novamente!');
      }
    );
  }
}
