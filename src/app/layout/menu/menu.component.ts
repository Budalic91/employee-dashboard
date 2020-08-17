import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  _userIsAuthenticated;
  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this._userIsAuthenticated = this.authService.userIsAuthenticated;
  }

}
