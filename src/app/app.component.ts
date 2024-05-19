import { Component, OnDestroy, OnInit } from '@angular/core';
import { MediaObserver} from '@angular/flex-layout';
import { MediaChange } from '@angular/flex-layout';
import { Route, Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent{
  page = '';

  constructor(private router: Router){

  }

  changePage(selectedPage: string) {

    this.router.navigateByUrl(selectedPage);
  }
}
