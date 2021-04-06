import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ISession } from '../shared';

@Injectable({
  providedIn: 'root'
})
export class VoterService {

  userHasVoted(session: ISession, voterName: string) {
    return session.voters.some(voter => voter === voterName);
  }

  addVoter(eventId: number, session: ISession, voterName: string) {
    session.voters.push(voterName);

    const url = `/api/events/${eventId}/sessions/${session.id}/voters/${voterName}`;
    const options = {headers: new HttpHeaders({'Content-Type': 'application/json'})}
    this.http.post(url, {}, options)
    .pipe(catchError(this.handleError('addVoter')))
    .subscribe();
  }

  deleteVoter(eventId: number, session: ISession, voterName: string) {
    session.voters = session.voters.filter(voter => voter !== voterName);

    const url = `/api/events/${eventId}/sessions/${session.id}/voters/${voterName}`;
    this.http.delete(url)
    .pipe(catchError(this.handleError('deleteVoter')))
    .subscribe();
  }

  private handleError<T>(operation = 'operation', result?: T){
    return (error: any):Observable<T> => {
      console.error(error);
      return of(result as T);
    }
  }
  constructor(private http:HttpClient) { }
}
