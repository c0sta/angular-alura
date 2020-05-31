import { NgModule } from '@angular/core';
import { PhotoFormComponent } from './photo-form.component';
import { CommonModule } from '@angular/common';
import { MessageModule } from 'src/app/shared/components/message/message.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { PhotoModule } from '../photo/photo.module';
import { ImmediateClickModule } from 'src/app/shared/directives/immediate-click/immediate-click.module';

@NgModule({
  declarations: [PhotoFormComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MessageModule,
    FormsModule,
    RouterModule,
    PhotoModule,
    ImmediateClickModule,
  ],
})
export class PhotoFormModule {}
