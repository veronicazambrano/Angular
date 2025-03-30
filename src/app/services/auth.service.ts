// src/app/services/auth.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private currentUserSubject = new BehaviorSubject<any>(null);
  public currentUser$ = this.currentUserSubject.asObservable();
  private apiUrl = 'your-api-url/auth'; // Update with your backend URL

  constructor(private http: HttpClient) {
    this.loadStoredUser();
  }

  private loadStoredUser() {
    const storedUser = localStorage.getItem('currentUser');
    if (storedUser) {
      this.currentUserSubject.next(JSON.parse(storedUser));
    }
  }

  login(credentials: { email: string, password: string }): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/login`, credentials)
      .pipe(
        tap(user => {
          localStorage.setItem('currentUser', JSON.stringify(user));
          localStorage.setItem('token', user.token);
          this.currentUserSubject.next(user);
        })
      );
  }

  register(user: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/register`, user);
  }

  logout() {
    localStorage.removeItem('currentUser');
    localStorage.removeItem('token');
    this.currentUserSubject.next(null);
  }

  isAuthenticated(): boolean {
    return !!this.currentUserSubject.value;
  }

  getToken(): string | null {
    return localStorage.getItem('token');
  }
}