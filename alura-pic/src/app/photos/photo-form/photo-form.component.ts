import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { PhotoService } from '../photo/service/photo.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-photo-form',
  templateUrl: './photo-form.component.html',
  styleUrls: ['./photo-form.component.sass'],
})
export class PhotoFormComponent implements OnInit {
  photoForm: FormGroup;
  file: File;
  preview: string;
  constructor(
    private formBuilder: FormBuilder,
    private photoService: PhotoService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.photoForm = this.formBuilder.group({
      file: ['', Validators.required],
      description: ['', Validators.maxLength(300)],
      allowComments: [true],
    });
  }
  upload() {
    const description = this.photoForm.get('description').value;
    const allowComments = this.photoForm.get('allowComments').value;
    console.log(description);
    console.log(allowComments);
    console.log(this.file);
    this.photoService
      .upload(description, allowComments, this.file)
      .subscribe((resp) => {
        console.log(resp);
        this.router.navigate(['']);
      });
    // console.log(description, allowComments);
    // console.log(this.file);
  }
  handleFile(file: File) {
    this.file = file;
    const reader = new FileReader();
    reader.onload = (event: any) => (this.preview = event.target.result);
    reader.readAsDataURL(file);
  }
}
