import {AfterViewInit, Component, EventEmitter, Input, OnChanges, OnInit, Output} from '@angular/core';
import { MatSelectModule } from '@angular/material/select';



@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],

})
export class ListComponent implements OnInit, OnChanges{

  @Input() galleryObjectInput?: Array<any>;
  @Output() imageObjectEmitter: EventEmitter<any> = new EventEmitter();
  chosenImage: any;
  customSelectPanelClass = 'custom-select-panel';

  constructor() { }

  ngOnChanges(){
    if (this.galleryObjectInput){
      this.chosenImage = this.galleryObjectInput[0];
      this.reload();
    }
  }

  ngOnInit(): void {

  }

  reload() {
    this.imageObjectEmitter.emit(this.chosenImage);
  }
}


