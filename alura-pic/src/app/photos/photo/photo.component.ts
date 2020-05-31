import { Component, Input } from '@angular/core';

const CLOUD = 'http://localhost:3000/imgs/';

@Component({
  selector: 'app-photo',
  templateUrl: 'photo.component.html',
})
export class PhotoComponent {
  private _url = '';
  @Input() description = '';
  // Inbound property em um _setter_ (mto loko)
  // podemos usá-lo chamando a instancia do component e atribuindo um valor ao setter
  // Ex: obj.url = 'http://algumaurl.com'
  @Input() set url(url: string) {
    if (!url.startsWith('data')) {
      this._url = CLOUD + url;
    } else {
      this._url = url;
    }
  }
  get url() {
    return this._url;
  }
}
