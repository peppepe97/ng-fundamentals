import { Component, OnInit } from '@angular/core';
import { $ } from 'protractor';
import { EventService, ISession } from '../events';
import { AuthService } from '../user/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  searchTerm:string = "";
  foundSessions: ISession[];

  constructor(private auth:AuthService, private eventService:EventService) {  }

  ngOnInit() {
  }

  searchSessions(searchTerm){
    this.eventService.searchSessions(searchTerm).subscribe(
      sessions => {
        this.foundSessions = sessions;
      }
    )
  }

}
