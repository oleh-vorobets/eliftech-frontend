import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Event } from '../types/event.type';
import { SortOptions } from '../types/sort.enum';

@Injectable({
  providedIn: 'root',
})
export class EventsBoardService {
  private apiUrl = 'http://localhost:3000/api/events';

  constructor(private http: HttpClient) {}

  getEvents(sortBy: string, sortOrder: SortOptions): Observable<Event[]> {
    const url = `${this.apiUrl}?sortBy=${sortBy}&sortOrder=${sortOrder}`;
    return this.http.get<Event[]>(url);
  }
}
