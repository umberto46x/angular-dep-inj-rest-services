import { HttpClient } from '@angular/common/http';
import { Component, inject, Inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { User } from './Models/User';
import { JsonPipe } from '@angular/common';
import { userService } from './Services/userService';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, JsonPipe],
  template: `
    <h1>Welcome to {{ title }}!</h1>

    <pre>{{ users | json }}</pre>
    <router-outlet />
  `,
  styles: [],
})
export class AppComponent {
  title = 'angular-dep-inj-rest-services';
  userService = inject(userService);
  http = inject(HttpClient);
  users: User[] = [];

  constructor() {}
}
