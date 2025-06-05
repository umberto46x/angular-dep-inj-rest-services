import { HttpClient } from '@angular/common/http';
import { Component, inject, Inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { User } from './Models/User';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  template: `
    <h1>Welcome to {{ title }}!</h1>

    <pre>{{ users | json }}</pre>
    <router-outlet />
  `,
  styles: [],
})
export class AppComponent {
  title = 'angular-dep-inj-rest-services';
  http = inject(HttpClient);
  users: User[] = [];

  constructor() {
    this.http
      .get<User[]>(`https://jsonplaceholder.typicode.com/users`)
      .subscribe((result) => {
        this.users = result;
      });
  }
}
