import { Injectable } from '@angular/core';
import { user } from '../user';
import { BehaviorSubject } from 'rxjs';
import { NavigationStart, Router } from '@angular/router';
import { Location } from '@angular/common';
import { PageVisitTrackerService } from '../page-visit-tracker.service';

let users = [
  new user('anilchaudhary2011@gmail.com', 'Anil@123'),
  new user('user', '123'),
  new user('user2', '123'),
];

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  showBtn: boolean = true;
  user = new user();
  userType: BehaviorSubject<string> = new BehaviorSubject<any>(
    this.getUserType()
  );

  constructor(
    private _router: Router,
    private pageVisitTracker: PageVisitTrackerService
  ) {}

  getUserType() {
    return localStorage.getItem('user');
  }

  // get isLoggedIn() {
  //   return true;
  // }

  isSuperAdmin() {
    if (localStorage.getItem('user') === 'anilchaudhary2011@gmail.com') {
      return true;
    } else {
      return false;
    }
  }

  login(username: string, password: string): any {
    //debugger
    this.user.username = username;
    this.user.password = password;

    let authenticatedUser = users.find(
      (u) => u.username === this.user.username
    );
    if (authenticatedUser && authenticatedUser.password == this.user.password) {
      localStorage.setItem('user', this.user.username);
      this.showBtn = true;
      this.userType.next(this.user.username);
      this._router.navigate(['/home']);
    } else {
      this.showBtn = false;
      return 'unauth';
    }
  }

  logout() {
    localStorage.removeItem('user');
    this.showBtn = false;
    // this.location.replaceState('/');
    this._router.navigate(['login']);
  }
}
