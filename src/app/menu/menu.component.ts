import {Component, Input, OnInit} from '@angular/core';
import {LoginService} from '../services/login.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

 @Input() isLogged: boolean;
 @Input() isAdmin: boolean;
 @Input() username: string;

  constructor(private loginteService: LoginService) { }

  ngOnInit(): void {
  }

  public login(): void {
    this.loginteService.login();
  }

  public logout(): void {
    this.loginteService.logout();
  }

}
