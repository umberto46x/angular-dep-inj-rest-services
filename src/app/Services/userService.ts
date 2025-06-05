import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { User } from '../Models/User';
import { userState } from '../States/userState';

@Injectable({ providedIn: 'root' })
export class userService {
  userState = inject(userState);
  http = inject(HttpClient);

  getUser() {
    this.http
      .get<User[]>(`https://jsonplaceholder.typicode.com/users`)
      .subscribe((result) => {
        this.userState.init(result);
      });
  }
}
