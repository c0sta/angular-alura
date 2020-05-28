import { Pipe, PipeTransform } from '@angular/core';
import { PhotoI } from '../photo/interface/photo.interface';

@Pipe({ name: 'filterByDescription' })
export class FilterByDescription implements PipeTransform {
  transform(photos: PhotoI[], descriptionQuery: string) {
    descriptionQuery = descriptionQuery.trim().toLowerCase(); // evita espaços
    if (descriptionQuery) {
      return photos.filter((photo) =>
        photo.description.toLowerCase().includes(descriptionQuery)
      );
    } else {
      return photos;
    }
  }
}
