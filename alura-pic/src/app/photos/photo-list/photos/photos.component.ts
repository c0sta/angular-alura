import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { PhotoI } from '../../photo/interface/photo.interface';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.sass'],
})
export class PhotosComponent implements OnChanges {
  @Input() photos: Array<PhotoI> = [];

  rows: any[] = [];

  constructor() {}
  ngOnChanges(changes: SimpleChanges) {
    if (changes.photos) {
      this.rows = this.groupColumns(this.photos);
    }
  }

  groupColumns(photos: Array<PhotoI>): any[] {
    const newRows = [];

    for (let index = 0; index < photos.length; index += 3) {
      newRows.push(photos.slice(index, index + 3));
    }
    return newRows;
  }
}
