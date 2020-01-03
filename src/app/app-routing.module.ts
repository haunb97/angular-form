import {YoutubePlaylistComponent} from './youtube-playlist/youtube-playlist.component';
import {PreloadAllModules, RouterModule, Routes} from '@angular/router';
import {YoutubePlayerComponent} from './youtube-player/youtube-player.component';
import {NgModule} from '@angular/core';
import {BlogComponent} from './blog/blog.component';
import {BlogDetailComponent} from './blog-detail/blog-detail.component';
import {BlogEditComponent} from './blog-edit/blog-edit.component';

const routes: Routes = [
  {
    path: 'youtube',
    component: YoutubePlaylistComponent,
    children: [{
      path: ':id',
      component: YoutubePlayerComponent
    }]
  }, {
    path: 'blog',
    component: BlogComponent
  }, {
    path: 'blog/:id',
    component: BlogDetailComponent
  }, {
    path: 'blog/:id/edit',
    component: BlogEditComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    preloadingStrategy: PreloadAllModules
  })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
