import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/Services/auth.service';
import { PageVisitTrackerService } from 'src/app/page-visit-tracker.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  title = 'task01';
  showBtn: boolean = false;
  // user = new user();
  constructor(
    private router: Router,
    public auth: AuthService,
    private pageVisitTracker: PageVisitTrackerService
  ) {}

  userType: string = '';

  ngOnInit() {
    if (localStorage.getItem('user')) {
      this.showBtn = this.auth.showBtn;
    }
    // this.router.navigate(['login']);
    this.auth.userType.subscribe((value) => (this.userType = value));
  }

  logout() {
    this.auth.logout();
  }
}
