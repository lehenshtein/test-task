import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-profile-btn',
  templateUrl: './profile-btn.component.html',
  styleUrls: ['./profile-btn.component.sass']
})
export class ProfileBtnComponent {
  @Input() name: string;
}
