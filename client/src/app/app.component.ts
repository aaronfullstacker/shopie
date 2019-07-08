import {Component} from '@angular/core';
import {UserService} from './services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'client';

  constructor(private userService: UserService) {
  }

  get isLoggedIn(): boolean {
    return !!this.userService.currentUserValue;
  }
}
