import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {AuthService} from '../../service/auth/auth.service';
import {Router, RouterLink} from '@angular/router';

@Component({
  selector: 'app-register',
  imports: [
    FormsModule,
    RouterLink
  ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {
  username: string = '';
  password: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  onRegister() {
    this.authService.register(this.username, this.password).subscribe({
      next: (response) => {
        this.router.navigate(['/login']);
      },
      error: (error) => {
        alert('Registration failed');
      }
    });
  }
}
