import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from 'src/app/core/services/local-storage.service';

@Component({
  selector: 'app-profile-menu',
  templateUrl: './profile-menu.component.html',
  styleUrls: ['./profile-menu.component.scss'],
})
export class ProfileMenuComponent implements OnInit {
  public isMenuOpen = false;

  public username: string | null = null;
  public email: string | null  = null;

  constructor(private localStorageService: LocalStorageService) {}

  ngOnInit(): void {
    this.setUserNameEmail();
  }

  public toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }

  public setUserNameEmail() {
    this.username = this.localStorageService.getLocalStorage("usernamer")
    this.email = this.localStorageService.getLocalStorage("email")
  }

  public logOut() {
    this.localStorageService.removeAccessToken();
  }


}
