import { HttpClient } from '@angular/common/http';
import { inject } from '@angular/core';
import { User } from '../Models/User';

export class userService {
  users: User[] | undefined = [];
  http = inject(HttpClient);

  getUser() {
    this.http
      .get<User[]>(`https://jsonplaceholder.typicode.com/users`)
      .subscribe((result) => {
        this.users = result;
      });
  }
}
