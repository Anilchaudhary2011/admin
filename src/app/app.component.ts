import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  // title = 'task01';
  // showBtn: boolean = false;
  // user = new user();
  // constructor(
  //   private router: Router,
  //   public auth: AuthService,
  //   private pageVisitTracker: PageVisitTrackerService
  // ) {}

  // userType: string = '';

  ngOnInit() {
    // if (localStorage.getItem('user')) {
    //   this.showBtn = this.auth.showBtn;
    // }
    // this.router.navigate(['login']);
    // this.auth.userType.subscribe((value) => (this.userType = value));
  }

  // logout() {
  //   this.auth.logout();
  // }
}
