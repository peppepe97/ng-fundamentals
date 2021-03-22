import { TestBed } from '@angular/core/testing';

import { EventRouterActivatorService } from './event-router-activator.service';

describe('EventRouterActivatorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EventRouterActivatorService = TestBed.get(EventRouterActivatorService);
    expect(service).toBeTruthy();
  });
});
