import { Injectable } from '@angular/core';
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarModule,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';
import { SnackbarComponent } from '../../components/snackbar/snackbar.component';

enum NotifyType {
  ALERT = 'alert',
  INFO = 'info',
  ERROR = 'error',
  SUCCESS = 'success',
}

@Injectable({
  providedIn: 'root',
})
export class NotifyService {
  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  verticalPosition: MatSnackBarVerticalPosition = 'top';
  durationInSeconds = 20;

  constructor(private _snackBar: MatSnackBar) {}

  private openSnakBar(
    message: string,
    type: NotifyType,
    description: string = ''
  ) {
    this._snackBar.openFromComponent(SnackbarComponent, {
      data: { message, type },
      panelClass: description,
      duration: this.durationInSeconds * 1000,
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
    });
  }

  info(message: string) {
    this.openSnakBar(message, NotifyType.INFO);
  }
  alert(message: string) {
    this.openSnakBar(message, NotifyType.ALERT);
  }
  error(message: string) {
    this.openSnakBar(message, NotifyType.ERROR);
  }
  success(message: string) {
    this.openSnakBar(message, NotifyType.SUCCESS);
  }
}
