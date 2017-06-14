import { Injectable } from '@angular/core';
import { Album } from './album.model';
import { ALBUMS } from './mock-albums';

@Injectable()
export class AlbumService {

  constructor() { }

  // method to retrieve Albums from the list in mock-albums.ts
  getAlbums(){
    return ALBUMS;
  }

  getAlbumById(albumId: number){
    for(var i = 0; i <= ALBUMS.length - 1; i++){
      if (ALBUMS[i].id === albumId){
        return ALBUMS[i];
      }
    }
  }
}
