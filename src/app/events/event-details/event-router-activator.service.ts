import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanDeactivate, Router } from '@angular/router';
import { CreateEventComponent } from '../create-event.component';
import { EventService } from '../shared/event.service';

@Injectable({
  providedIn: 'root'
})
export class EventRouterActivatorService implements CanActivate, CanDeactivate<CreateEventComponent>{

  constructor(private eventService:EventService, private route: Router) { }

  canActivate(route:ActivatedRouteSnapshot){
    const eventExists = !!this.eventService.getEvent(+route.params['id']);
    if(!eventExists){
      this.route.navigate(['404'])
    }
    return eventExists;
  }

  canDeactivate(component: CreateEventComponent){
    if(component.isDirty){
      return window.confirm('Do you really want to cancel?');
    }
    return true;
  }
}
