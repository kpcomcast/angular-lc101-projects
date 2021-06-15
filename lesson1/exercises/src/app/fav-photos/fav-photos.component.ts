import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-photos',
  templateUrl: './fav-photos.component.html',
  styleUrls: ['./fav-photos.component.css']
})
export class FavPhotosComponent implements OnInit {
  photosTitle = 'Favorite Photos!';
  image1 = 'assets/images/Global_Agenda_logo.jpeg';
  image2 = 'assets/images/Minecraft_cover.png';
  image3 = 'assets/images/Tribes_2_cover.jpeg';

  constructor() { }

  ngOnInit() {
  }

}