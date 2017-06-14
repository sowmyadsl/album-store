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
}
