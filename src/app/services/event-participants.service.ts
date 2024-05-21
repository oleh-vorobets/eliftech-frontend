import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Participant } from '../types/participant.type';
import { GetParticipants } from '../types/get-participants.type';

@Injectable({
  providedIn: 'root',
})
export class EventParticipantsService {
  private apiUrl = 'http://localhost:3000/api/events';

  constructor(private http: HttpClient) {}

  getParticipants(
    eventId: string,
    searchKey?: string,
    searchValue?: string
  ): Observable<GetParticipants> {
    return this.http.get<GetParticipants>(
      `${this.apiUrl}/${eventId}?searchValue=${searchValue}&searchKey=${searchKey}`
    );
  }
}
