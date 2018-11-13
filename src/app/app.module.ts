import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { ContactListComponent } from './contact/contact-list/contact-list.component';
import { ContactListItemComponent } from './contact/contact-list-item/contact-list-item.component';
import {ContactService} from './contact/service/contact.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToolbarComponent } from './ui/toolbar/toolbar/toolbar.component';
import {MatButtonModule, MatSidenavModule, MatToolbarModule, MatCardModule, MatListModule, MatFormFieldModule} from '@angular/material';
import {MatIconModule} from '@angular/material/icon';
import {RouterModule, Routes} from '@angular/router';
import { ContactDetailComponent } from './contact/contact-detail/contact-detail.component';
import {FlexLayoutModule} from '@angular/flex-layout';

const appRoutes: Routes = [
  {path: 'contacts', component: ContactListComponent},
  {path: 'contacts/new', component: ContactDetailComponent},
  { path: '', redirectTo: '/contacts', pathMatch: 'full'}
]


@NgModule({
  declarations: [
    AppComponent,
    ContactListComponent,
    ContactListItemComponent,
    ToolbarComponent,
    ContactDetailComponent,
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
    FlexLayoutModule

  ],
  providers: [ContactService],
  bootstrap: [AppComponent]
})
export class AppModule { }
