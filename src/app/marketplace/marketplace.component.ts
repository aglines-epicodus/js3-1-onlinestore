import { Component, OnInit } from '@angular/core';
import { Album } from '../album.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-marketplace',
  templateUrl: './marketplace.component.html',
  styleUrls: ['./marketplace.component.css']
})
export class MarketplaceComponent  {

  constructor(private router: Router) {}
  
  albums: Album[] = [
    new Album("AlbumX", "XTC", "descriptionX", 1),
    new Album("AlbumY", "Yaz", "descY", 2),
    new Album("AlbumZ", "ZZtop", "descZ", 3)
  ];

  goToDetailPage(clickedAlbum: Album) {
    this.router.navigate(['albums', clickedAlbum.id]);
  };

}
