import { HttpClient } from '@angular/common/http';
import { Component, inject, Inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { User } from './Models/User';
import { CommonModule, JsonPipe } from '@angular/common';
import { userService } from './Services/userService';
import { userState } from './States/userState';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule],
  template: `
    <h1>Welcome to {{ title }}!</h1>

    <div>
      <li *ngFor="let user of userState.users">
        {{ user.id }} {{ user.name }} {{ user.username }}
      </li>
    </div>
    <router-outlet />
  `,
  styles: [],
})
export class AppComponent {
  title = 'angular-dep-inj-rest-services';
  userState = inject(userState);
  userService = inject(userService);
  constructor() {
    this.userService.getUser();
  }
}
