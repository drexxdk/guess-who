import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ParsedErrorResponse } from '@portal-app/interface/error.interface';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.scss'],
})
export class ErrorComponent {
  title?: string;
  message?: string;
  constructor(private router: Router) {
    const navigation = this.router.getCurrentNavigation();
    const error = navigation?.extras?.state?.['error'] as ParsedErrorResponse;
    if(error?.error?.message) {
      this.message = error.error.message;
    }
  }
}
