import { NgModule } from '@angular/core';
import { SigninComponent } from './signin/signin.component';
import { CardModule } from '../shared/components/card/card.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MessageModule } from '../shared/components/message/message.module';
import { RouterModule } from '@angular/router';
import { SignupComponent } from './signup/signup.component';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
@NgModule({
  declarations: [SigninComponent, SignupComponent, HomeComponent],
  imports: [
    CommonModule,
    CardModule,
    ReactiveFormsModule,
    MessageModule,
    RouterModule,
    FormsModule,
    HttpClientModule,
    HomeRoutingModule,
  ],
})
export class HomeModule {}
