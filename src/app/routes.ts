import { Routes } from "@angular/router";
import { ErrorComponent } from "./errors/error.component";
import { 
    CreateEventComponent, 
    EventDetailsComponent, 
    EventRouterActivatorService, 
    EventsListComponent,
    EventListResolverService, 
    CreateSessionComponent} 
from './events/index';


export const appRoutes: Routes = [
    {path: 'events/new', component: CreateEventComponent, canDeactivate:[EventRouterActivatorService]},
    {path: 'events', component: EventsListComponent, resolve:{events:EventListResolverService}},
    {path: 'events/:id', component: EventDetailsComponent, canActivate:[EventRouterActivatorService]},
    {path: 'events/session/new', component: CreateSessionComponent},
    {path: '404', component: ErrorComponent},
    {path: '', redirectTo: '/events', pathMatch: 'full'},
    {path: 'user', loadChildren: './user/user.module#UserModule'}
]