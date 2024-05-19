import {Component, OnInit, AfterViewInit, EventEmitter, Output, HostListener} from '@angular/core';
import { MatDialog, MatDialogClose,} from '@angular/material/dialog';
import { LoginComponent } from 'src/app/pages/login/login.component';
import { Router } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import {AuthService} from "../services/auth.service";
import {error} from "console";
import {MatExpansionModule} from "@angular/material/expansion";


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],

})
export class MenuComponent implements OnInit, AfterViewInit {

  @Output() selectedPage: EventEmitter<string> = new EventEmitter();
  loggedIn?: firebase.default.User | null;
  isSmallScreen = false;
  isLoggedIn: boolean = false;
  panelOpenState = false;
  constructor( private logDialog: MatDialog, private router: Router, private authService: AuthService ) {

  }
  @HostListener('window:resize', ['$event'])
  onResize(event: Event): void {
    this.isSmallScreen = window.innerWidth < 550;
  }
  ngOnInit(): void {
    console.log('ngOnInit called.');
    this.authService.isLoggedIn().subscribe(user => {
      console.log(user);
      this.loggedIn = user;
      localStorage.setItem('user', JSON.stringify(this.loggedIn));
    }, error => {
      console.error(error);
      localStorage.setItem('user', JSON.stringify('null'));
    });
  }

  ngAfterViewInit(): void {
    console.log('ngAfterViewInit called.');
  }

  menuSwitch(pageValue: string) {
    this.selectedPage.emit(pageValue);
  }
  LoginDialog(){
    this.logDialog.open(LoginComponent);
  }

  Logout(){
    this.authService.Logout().then(() => {
      console.log('logged out');
    }).catch(error => {
      console.error(error);
    });
  }


}
