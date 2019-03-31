import { Component, OnInit } from '@angular/core';
import {AuthService} from '../auth.service';
import {Posts} from '../models/posts.model';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.sass']
})
export class MainComponent implements OnInit {

  registered: boolean;
  name: string;
  constructor(private authService: AuthService) { }
  data: Posts[];

  ngOnInit() {
    this.registered = this.authService.getLogged();
    this.name = this.authService.getName();
  }
  onData(event) {
    this.data = event;
  }
}
