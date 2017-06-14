import { Injectable } from '@angular/core';
import { Album } from './album.model';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';


@Injectable()
export class AlbumService {
  albums: FirebaseListObservable<any[]>;

  constructor(private database: AngularFireDatabase) {
    this.albums = database.list('albums');
  }


  // method to retrieve Albums from the list in mock-albums.ts
  getAlbums(){
    return this.albums;
  }

  addAlbum(newAlbum: Album){
    this.albums.push(newAlbum);
  }

  getAlbumById(albumId: string){
    return this.database.object('albums/' + albumId);
  }
}
