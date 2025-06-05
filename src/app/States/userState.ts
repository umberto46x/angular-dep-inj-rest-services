import { inject, Injectable } from '@angular/core';
import { userService } from '../Services/userService';
import { User } from '../Models/User';

@Injectable({ providedIn: 'root' })
export class userState {
  users: User[] = [];

  init(result: User[]) {
    this.users = result;
  }

  put(id: number) {}
  delete(id: number) {}
}
