import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PhotoI } from '../interface/photo.interface';
const API = 'http://localhost:3000';

@Injectable({ providedIn: 'root' }) // define no escopo global, todos componentes poderão usar este service
export class PhotoService {
  constructor(private http: HttpClient) {}

  listFromUser(userName: string) {
    return this.http.get<Array<PhotoI>>(`${API}/${userName}/photos`);
  }

  listFromUserPaginated(userName: string, page: number) {
    const params = new HttpParams().append('page', page.toString());
    return this.http.get<Array<PhotoI>>(`${API}/${userName}/photos`, {
      params,
    });
  }
}
