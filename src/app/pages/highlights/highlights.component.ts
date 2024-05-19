import { Component, NgModule } from '@angular/core';
import { GalleryObject } from '../../shared/constants/constants';
import { OnInit } from '@angular/core';




@Component({
  selector: 'app-highlights',
  standalone: false,
  templateUrl: './highlights.component.html',
  styleUrl: './highlights.component.scss',

})
export class HighlightsComponent implements OnInit {

  galleryObject: Array<any> = GalleryObject;
  chosenImage: any;

  constructor() { }

  ngOnInit(): void {
  }

  loadImage(imageObject: any) {
    this.chosenImage = imageObject;
  }

}


