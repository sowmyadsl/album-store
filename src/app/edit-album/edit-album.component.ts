import { Component, Input, OnInit } from '@angular/core';
import { AlbumService } from '../album.service';

@Component({
  selector: 'app-edit-album',
  templateUrl: './edit-album.component.html',
  styleUrls: ['./edit-album.component.css'],
  providers: [AlbumService]
})
export class EditAlbumComponent implements OnInit {
  @Input() selectedAlbum;

  constructor(private AlbumService: AlbumService) { }

  ngOnInit() {
  }

  beginUpdatingAlbum(albumToUpdate){
    this.AlbumService.updateAlbum(albumToUpdate);
  }

  beginDeletingAlbum(albumToDelete){
    if(confirm("Are you sure you want to delete this item from the inventory?")){
      this.AlbumService.deleteAlbum(albumToDelete);
    }
  }
}
