import { Component, OnInit } from '@angular/core';
import { Event } from '../types/event.type';
import { PaginationConfig } from '../types/pagination-config.type';
import { EventsBoardService } from '../services/events-board.service';

@Component({
  selector: 'app-events-board',
  templateUrl: './events-board.component.html',
  styleUrl: './events-board.component.css',
})
export class EventsBoardComponent implements OnInit {
  events: Event[] = [];

  paginationConfig: PaginationConfig = {
    itemsPerPage: 12,
    currentPage: 1,
    totalItems: this.events.length,
  };

  constructor(private eventService: EventsBoardService) {}

  ngOnInit() {
    this.eventService.getEvents().subscribe(
      (value: Event[]) => {
        this.events = value;
      },
      (error) => {
        console.error('Error fetching events:', error);
      }
    );
  }
}
