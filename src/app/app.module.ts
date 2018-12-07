import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { ContactListComponent } from './contact/contact-list/contact-list.component';
import { ContactListItemComponent } from './contact/contact-list-item/contact-list-item.component';
import {ContactService} from './contact/service/contact.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToolbarComponent } from './ui/toolbar/toolbar/toolbar.component';
import {FlexLayoutModule} from '@angular/flex-layout';
import {MatDialogModule} from '@angular/material/dialog';
import { HttpClientModule } from '@angular/common/http';
import {ContactProvider} from './contact/interfaces/contact-provider';
import {environment} from '../environments/environment';
import {ConfirmDialogComponent} from './contact/dialog/confirm-dialog/confirm-dialog.component' ;

import {
  MatButtonModule,
  MatSidenavModule,
  MatToolbarModule,
  MatCardModule,
  MatListModule,
  MatFormFieldModule,
  MatInputModule
} from '@angular/material';
import {MatIconModule} from '@angular/material/icon';
import {RouterModule, Routes} from '@angular/router';
import { ContactDetailComponent } from './contact/contact-detail/contact-detail.component';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { from } from 'rxjs';
import {ToolbarService} from './ui/toolbar/toolbar/toolbar.service';
import {ContactLocalStorageService} from './contact/service/contact-local-storage.service';
import { ContactHttpService } from './contact/service/contact-http.service';
import { ContactMapComponent } from './contact/contact-map/contact-map.component';
import { SafeUrlPipe } from './contact/Pipes/safe-url.pipe';

const appRoutes: Routes = [
  {path: 'contacts', component: ContactListComponent},
  {path: 'contacts/new', component: ContactDetailComponent},
  {path: 'contacts/edit/:id', component: ContactDetailComponent},
  {path: 'contacts/map', component: ContactMapComponent},
  {path: '**', redirectTo: '/contacts', pathMatch: 'full'},
  {path: '', redirectTo: '/contacts', pathMatch: 'full'},

];


@NgModule({
  declarations: [
    AppComponent,
    ContactListComponent,
    ContactListItemComponent,
    ToolbarComponent,
    ContactDetailComponent,
    ConfirmDialogComponent,
    ContactMapComponent,
    SafeUrlPipe
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatSidenavModule,
    MatCardModule,
    MatListModule,
    RouterModule.forRoot(appRoutes),
    MatFormFieldModule,
    MatSnackBarModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    MatDialogModule,
    HttpClientModule,
    MatDialogModule

  ],
  entryComponents: [ConfirmDialogComponent],
  providers: [ContactService, ToolbarService, ContactLocalStorageService,
  {provide: ContactProvider, useClass: environment.apiEnabled ? ContactHttpService : ContactLocalStorageService}],
  bootstrap: [AppComponent]
})
export class AppModule { }
