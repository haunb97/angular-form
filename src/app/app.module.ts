import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TodoComponent } from './todo/todo.component';
import {ReactiveFormsModule} from '@angular/forms';
import { RegisterFinalComponent } from './register-final/register-final.component';
import { LoginComponent } from './login/login.component';
import { TimelinesComponent } from './timelines/timelines.component';

import {AppRoutingModule} from './app-routing.module';
import { YoutubePlaylistComponent } from './youtube-playlist/youtube-playlist.component';
import { YoutubePlayerComponent } from './youtube-player/youtube-player.component';
import { DictionaryComponent } from './dictionary/dictionary.component';
import { DictionaryDetailComponent } from './dictionary-detail/dictionary-detail.component';
import { DictionaryPageComponent } from './dictionary-page/dictionary-page.component';
import {ImageGalleryModule} from './image-gallery/image-gallery.module';
import {GalleryConfig} from './image-gallery/token';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    ImageGalleryModule
  ],
  providers: [
    {provide: GalleryConfig, useValue: 1}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
