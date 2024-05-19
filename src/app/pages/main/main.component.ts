import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  imageWidth: number = 400;
  constructor() { }

  ngOnInit(): void {
    this.adjustImageSize();
  }
  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.adjustImageSize();
  }
  adjustImageSize() {
    const screenWidth = window.innerWidth;
    if (screenWidth > 1080) {
      this.imageWidth = 30;
    } else if (screenWidth > 800) {
      this.imageWidth = 20;
    } else {
      this.imageWidth = 10;
    }
  }
}
