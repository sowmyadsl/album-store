import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import { Album } from '../album.model';
import { AlbumService } from '../album.service';

@Component({
  selector: 'app-marketplace',
  templateUrl: './marketplace.component.html',
  styleUrls: ['./marketplace.component.css'],
  providers: [AlbumService]
  
})
export class MarketplaceComponent {
  albums: Album[];

  // Router object in a constructor method
  constructor(private router: Router, private albumService: AlbumService){}


  // event binding method to click on each album
  goToDetailPage(clickedAlbum: Album){
    this.router.navigate(['albums', clickedAlbum.id]);
  }

}
