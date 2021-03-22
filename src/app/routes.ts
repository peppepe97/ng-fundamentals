import { Routes } from "@angular/router";
import { ErrorComponent } from "./errors/error.component";
import { CreateEventComponent } from "./events/create-event.component";
import { EventDetailsComponent } from "./events/event-details/event-details.component";
import { EventRouterActivatorService } from "./events/event-details/event-router-activator.service";
import { EventsListComponent } from "./events/events-list.component";

export const appRoutes: Routes = [
    {path: 'events/new', component: CreateEventComponent, canDeactivate:[EventRouterActivatorService]},
    {path: 'events', component: EventsListComponent},
    {path: 'events/:id', component: EventDetailsComponent, canActivate:[EventRouterActivatorService]},
    {path: '404', component: ErrorComponent},
    {path: '', redirectTo: '/events', pathMatch: 'full'}
]