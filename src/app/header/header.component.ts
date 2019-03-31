import { Component, OnInit } from '@angular/core';
import {AuthService} from '../auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent implements OnInit {
  registered: boolean;
  name: string;
  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.registered = this.authService.getLogged();
    this.name = this.authService.getName();
  }

}
