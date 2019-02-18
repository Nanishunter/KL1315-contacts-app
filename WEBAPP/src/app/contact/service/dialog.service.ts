import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material';
import { Router } from '@angular/router';
import { ErrorDialogComponent } from '../error-dialog/error-dialog.component';

@Injectable({
  providedIn: 'root'
})
export class DialogService {

  constructor(private dialog: MatDialog, private route: Router) {


   }

   openErrorDialog(error: string): void {
    const dialogRef = this.dialog.open(ErrorDialogComponent, {
      width: '300px',
      data: {error: error}
    });

    dialogRef.afterClosed().subscribe(() => {
      this.route.navigate(['/contacts/']);
    });
  }

}
