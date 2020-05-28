import { Component, OnInit, OnDestroy } from '@angular/core';
import { PhotoI } from '../photo/interface/photo.interface';
import { ActivatedRoute } from '@angular/router';
import { PhotoService } from '../photo/service/photo.service';

@Component({
  selector: 'app-photo-list',
  templateUrl: './photo-list.component.html',
  styleUrls: ['./photo-list.component.sass'],
})
export class PhotoListComponent implements OnInit {
  photos: Array<PhotoI> = [];
  filter: string = '';
  username: string = '';
  currentPage: number = 0;
  hasMore: boolean = true;

  constructor(
    private photoService: PhotoService,
    private activatedRoute: ActivatedRoute
  ) {}
  ngOnInit(): void {
    this.photos = this.activatedRoute.snapshot.data.photos;
  }

  load() {
    this.photoService
      .listFromUserPaginated(this.username, ++this.currentPage)
      .subscribe((photos) => {
        this.filter = '';
        this.photos = this.photos.concat(photos);
        if (!photos.length) this.hasMore = false;
      });
  }
}
