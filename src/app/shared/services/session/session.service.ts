import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SessionService {
  constructor(private httpClient: HttpClient) {}

  login(email: string, password: string) {
    return this.httpClient.post(
      'https://south-mountain-creamery.swell.store/api/account/login',
      { email, password },
      {
        headers: {
          Authorization:
            'Basic cGtfZ0ROd05uWHQxWGsxZVdxa0tYSnp1a2hJa0RqaWdRcHQ=',
        },
      }
    );
  }
}
