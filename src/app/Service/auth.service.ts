import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isAuthenticated = false;

  login(username: string, password: string) {
    if (username === 'admin' && password === 'admin') {
      this.isAuthenticated = true;
      return of({ success: true });
    } else {
      return of({ success: false });
    }
  }

  logout() {
    this.isAuthenticated = false;
  }

  isLoggedIn(): boolean {
    return this.isAuthenticated;
  }
}
