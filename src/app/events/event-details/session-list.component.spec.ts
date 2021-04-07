import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AuthService } from 'src/app/user/auth.service';
import { DurationPipe } from '../shared';

import { SessionListComponent } from './session-list.component';
import { VoterService } from './voter.service';

describe('SessionListComponent', () => {
  let component: SessionListComponent;
  let fixture: ComponentFixture<SessionListComponent>;
  let mockAuthService;
  let mockVoterService;
  let element: HTMLElement;
  let debugEl: DebugElement;

  beforeEach( () => {
    mockAuthService = { isAutheticated: () => true, currentUser: {userName: 'name'}};
    mockVoterService = { userHasVoted: () => true};

    TestBed.configureTestingModule({
      declarations: [ SessionListComponent, DurationPipe ],
      providers: [
        {provide: AuthService, useValue: mockAuthService},
        {provide: VoterService, useValue: mockVoterService}
      ]
    })

    fixture = TestBed.createComponent(SessionListComponent);
    component = fixture.componentInstance;
    debugEl = fixture.debugElement;
    element = fixture.nativeElement;
  });

  describe('initial display', () => {
    it('should have the correct title', () => {
      component.sessions = [
        {name: 'Session 1', id: 3, presenter: 'Joe', duration: 1, level: 'beginner', abstract: 'abstract', voters: ['john', 'bob']}
      ];
      component.filterBy = 'all';
      component.sortBy = 'name';
      component.eventId = 4;
      component.ngOnChanges();

      fixture.detectChanges();

      expect(element.querySelector('[well-title]').textContent).toContain('Session 1');
    })
  })
});
