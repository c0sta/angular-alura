import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-photos-header',
  templateUrl: './photos-header.component.html',
  styleUrls: ['./photos-header.component.sass'],
})
export class PhotosHeaderComponent implements OnInit {
  username: string = 'Guest';
  constructor(private activatedRoute: ActivatedRoute) {}
  ngOnInit() {
    this.username = this.activatedRoute.snapshot.params.username;
  }
}
