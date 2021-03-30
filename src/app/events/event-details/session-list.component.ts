import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ISession } from '../shared';

@Component({
  selector: 'app-session-list',
  templateUrl: './session-list.component.html',
  styleUrls: ['./session-list.component.css']
})
export class SessionListComponent implements OnInit, OnChanges {

  @Input() sessions:ISession[];
  visibleSessions:ISession[] = [];
  @Input() filterBy: string;
  @Input() sortBy: string = 'votes';

  constructor() { }

  ngOnChanges(): void {
    if(this.sessions){
      this.filterSession(this.filterBy);
      this.sortBy === 'name' ? this.visibleSessions.sort(sortByNameAsc) :  this.visibleSessions.sort(sortByVotesDesc);
    }
  }

  filterSession(filterBy: string) {
    if(filterBy === 'all'){
      this.visibleSessions = this.sessions.slice(0);
    }else{
      this.visibleSessions = this.sessions.filter(session => {
        return session.level.toLocaleLowerCase() === filterBy;
      })
    }
  }

  ngOnInit() {
  }

}

function sortByNameAsc(s1: ISession, s2: ISession) {
  if(s1.name > s2.name) return 1
  else if (s1.name === s2.name) return 0
  else return -1
}

function sortByVotesDesc(s1: ISession, s2: ISession) {
  return s2.voters.length - s1.voters.length
}