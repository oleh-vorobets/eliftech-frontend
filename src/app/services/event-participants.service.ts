import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Event } from '../types/event.type';
import { HttpClient } from '@angular/common/http';
import { Participant } from '../types/participant.type';

@Injectable({
  providedIn: 'root',
})
export class EventParticipantsService {
  private apiUrl = 'http://localhost:3000/api/events';

  constructor(private http: HttpClient) {}

  getParticipants(eventId: string): Observable<Participant[]> {
    return this.http.get<Participant[]>(this.apiUrl + '/' + eventId);
  }
}
