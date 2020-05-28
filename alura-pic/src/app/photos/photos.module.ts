import { NgModule } from '@angular/core';
/**Components */
import { CommonModule } from '@angular/common';
import { PhotoModule } from './photo/photo.module';
import { PhotoFormModule } from './photo-form/photo-form.module';
import { PhotoListModule } from './photo-list/photo-list.module';
import { PhotosHeaderModule } from './photos-header/photos-header.module';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { HeartOutline, CommentOutline } from '@ant-design/icons-angular/icons';

@NgModule({
  imports: [
    CommonModule,
    PhotoModule,
    PhotoFormModule,
    PhotoListModule,
    PhotosHeaderModule,
    NzIconModule.forChild([HeartOutline, CommentOutline]),
  ],
})
export class PhotosModule {}
