import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PhotosModule } from './photos/photos.module';
import { CardModule } from './shared/components/card/card.module';

/** Components */

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, PhotosModule, CardModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
