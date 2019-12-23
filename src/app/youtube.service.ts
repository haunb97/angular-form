import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class YoutubeService {
  playlist = [
    {id: '74Pru-JQzRk', song: 'whatcha doin today 4minute'},
    {id: '9pdj4iJD08s', song: 'BLACKPINK - \'불장난 (PLAYING WITH FIRE)\' M/V'},
    {id: '8dVjSvLzD1I', song: '[MV] Apink(에이핑크) _ LUV'},
    {id: 'IsXB5eRMRno', song: 'Henry 헨리 \'TRAP\' MV (with Kyuhyun & Taemin)'},
    {id: 'kffacxfA7G4', song: 'Justin Bieber - Baby ft. Ludacris (Official Music Video)'},
    {id: '98WtmW-lfeE', song: 'Katy Perry - Teenage Dream (Official)'}
  ];
  constructor() { }
  find(id: string) {
    return this.playlist.find(item => item.id === id);
  }
}
