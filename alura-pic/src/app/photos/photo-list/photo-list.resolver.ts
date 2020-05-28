import { PhotoService } from '../photo/service/photo.service';
import { Injectable } from '@angular/core';
import {
  Resolve,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
} from '@angular/router';
import { PhotoI } from '../photo/interface/photo.interface';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class PhotoListResolver implements Resolve<Observable<PhotoI[]>> {
  constructor(private service: PhotoService) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<PhotoI[]> {
    const username = route.params.username;
    return this.service.listFromUserPaginated(username, 1);
  }
}
