import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import { Album } from '../album.model';
import { AlbumService } from '../album.service';
import { FirebaseListObservable } from 'angularfire2/database';


@Component({
  selector: 'app-marketplace',
  templateUrl: './marketplace.component.html',
  styleUrls: ['./marketplace.component.css'],
  providers: [AlbumService]

})
export class MarketplaceComponent implements OnInit {
  albums: FirebaseListObservable<any[]>;
  currentRoute: string = this.router.url;

  // Router object in a constructor method
  constructor(private router: Router, private albumService: AlbumService){}

  //will retrieve the service and call this method
  ngOnInit(){
    this.albums = this.albumService.getAlbums();
  }
  // event binding method to click on each album
  goToDetailPage(clickedAlbum){
    this.router.navigate(['albums', clickedAlbum.$key]);
  };

}
