import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { NavbarComponent } from './nav/navbar.component';
import { RouterModule } from '@angular/router';
import { appRoutes } from './routes';
import { ErrorComponent } from './errors/error.component';

import {
  JQ_TOKEN, CollapsibleWellComponent, SimpleModalComponent, ModalTriggerDirective
} from './common/index';

import { 
  EventsListComponent, 
  EventThumbnailComponent, 
  CreateEventComponent, 
  EventDetailsComponent, 
  EventService,
  CreateSessionComponent,
  SessionListComponent,
  DurationPipe
} from './events/index';
import { AuthService } from './user/auth.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

let jQuery = window['$'];

@NgModule({
  declarations: [
    AppComponent,
    EventsListComponent,
    EventThumbnailComponent,
    NavbarComponent,
    EventDetailsComponent,
    CreateEventComponent,
    ErrorComponent,
    CreateSessionComponent,
    SessionListComponent,
    CollapsibleWellComponent,
    DurationPipe,
    SimpleModalComponent,
    ModalTriggerDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [EventService, AuthService,
    {provide:JQ_TOKEN, useValue: jQuery}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
