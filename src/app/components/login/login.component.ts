import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TypeInput } from 'src/app/shared/components/input/input.enum';
import { NotifyService } from 'src/app/shared/services/notify/notify.service';
import { SessionService } from 'src/app/shared/services/session/session.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  hide = true;

  typePassword = TypeInput.PASSWORD;

  password = '';
  email = '';

  constructor(
    private router: Router,
    private sessionService: SessionService,
    private notifyService: NotifyService
  ) {}

  ngOnInit() {}

  logIn() {
    if (this.password === '' || this.email === '') {
      this.notifyService.alert('Please enter a valid information');
      return;
    }

    this.sessionService.login(this.email, this.password).subscribe({
      next: (response) => {
        if (response) {
          this.router.navigate(['/store/home']);
          return;
        }

        this.notifyService.error('Incorrect login data');
      },
      error: ({ error }) => {
        this.notifyService.error(error.error.message);
      },
    });
  }
}
