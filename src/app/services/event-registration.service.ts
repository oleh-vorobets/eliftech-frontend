import { Injectable } from '@angular/core';
import { Participant } from '../types/participant.type';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EventRegistrationService {
  private apiUrl = 'http://localhost:3000/api/events';

  constructor(private http: HttpClient) {}

  addParticipant(
    eventId: string,
    participant: Participant
  ): Observable<string> {
    // participant.birth = new Date(participant.birth);
    return this.http.post<string>(`${this.apiUrl}/${eventId}`, participant, {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
    });
  }

  validateParticipant(participant: Participant): string {
    if (
      !participant.initials ||
      !participant.email ||
      !participant.birth ||
      !participant.hearAbout
    ) {
      return 'Validation failed: Missing required fields';
    }

    const [name, surname] = participant.initials.split(' ');

    if (
      !/^[A-Z][a-z\-\']{1,10}/.test(name) &&
      !/^[A-Z][a-z\-\']{1,10}/.test(surname)
    ) {
      return 'Validation failed: Invalid initials';
    }

    const minBirthDate = new Date('1955-01-01');
    const minValidBirthDate = new Date();
    const birth = new Date(participant.birth);
    minValidBirthDate.setFullYear(minValidBirthDate.getFullYear() - 18);
    if (birth < minBirthDate || birth > minValidBirthDate) {
      return 'Validation failed: Invalid birthday field';
    }

    // for catching obvious errors, not all use cases from stackoverflow
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(participant.email)) {
      return 'Validation failed: Invalid email field';
    }

    return '';
  }
}
