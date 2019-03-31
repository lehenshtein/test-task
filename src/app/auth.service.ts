import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private logged = true;
  private name = 'John Doe';
  getLogged() {
    return this.logged;
  }
  getName() {
    return this.name;
  }
}
