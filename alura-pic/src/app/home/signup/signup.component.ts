import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { lowerCaseValidator } from '../../shared/validators/lower-case/lower-case.validator';
import { UserNotTakenValidatorService } from './user-not-taken.validator.service';
import { NewUserI } from './new-user.interface';
import { SignupService } from './signup.service';
import { Router } from '@angular/router';
import { PlatformDetectorService } from 'src/app/core/platform-detector/platform-detector.service';

@Component({
  selector: 'app-sigup',
  templateUrl: './signup.component.html',
  providers: [UserNotTakenValidatorService],
  styleUrls: ['./signup.component.sass'],
})
export class SignupComponent implements OnInit {
  signupForm: FormGroup;
  @ViewChild('emailInput') emailInput: ElementRef<HTMLInputElement>;

  constructor(
    private formBuilder: FormBuilder,
    private userNotTakenValidatorService: UserNotTakenValidatorService,
    private signupService: SignupService,
    private router: Router,
    private platformDetectorService: PlatformDetectorService
  ) {}

  ngOnInit(): void {
    const { email, required, minLength, maxLength } = Validators;
    this.signupForm = this.formBuilder.group({
      email: ['', [required, email]],
      fullName: ['', [required, minLength(2), maxLength(40)]],
      userName: [
        '',
        [required, minLength(2), maxLength(30), lowerCaseValidator],
        this.userNotTakenValidatorService.checkUserNameTaken(),
      ],
      password: ['', [required, minLength(8), maxLength(14)]],
    });
    this.platformDetectorService.isPlatformBrowser() &&
      this.emailInput?.nativeElement.focus();
  }
  register() {
    const newUser = this.signupForm.getRawValue() as NewUserI;
    this.signupService.register(newUser).subscribe(
      () => this.router.navigate(['']),
      () => {
        console.log('Deu erro');
      }
    );
  }
}
