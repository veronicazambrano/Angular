import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent  implements OnInit {
  currentUser: any;

  constructor(
    private router: Router,
    private authService: AuthService
  ) {}

  ngOnInit() {
    this.authService.currentUser$.subscribe(UserActivation => {
      this.currentUser = UserActivation;
    });
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}
