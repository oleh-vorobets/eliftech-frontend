import { Component, OnInit } from '@angular/core';
import { Event } from '../types/event.type';
import { PaginationConfig } from '../types/pagination-config.type';
import { EventsBoardService } from '../services/events-board.service';
import { SortOptions } from '../types/sort.enum';

type sortByType = 'title' | 'eventDate' | 'organizer' | '';

@Component({
  selector: 'app-events-board',
  templateUrl: './events-board.component.html',
  styleUrl: './events-board.component.css',
})
export class EventsBoardComponent implements OnInit {
  events: Event[] = [];

  sortBy: sortByType = 'title';
  sortOrder: SortOptions = SortOptions.ASC;

  paginationConfig: PaginationConfig = {
    itemsPerPage: 12,
    currentPage: 1,
    totalItems: this.events.length,
  };

  constructor(private eventService: EventsBoardService) {}

  ngOnInit() {
    this.getEvents(this.sortBy, this.sortOrder);
  }

  getEvents(sortBy: string, sortOrder: SortOptions) {
    this.eventService.getEvents(sortBy, sortOrder).subscribe(
      (value: Event[]) => {
        this.events = value;
      },
      (error) => {
        console.error('Error fetching events:', error);
      }
    );
  }

  onSortClick(option: sortByType) {
    if (this.sortBy === option) {
      this.sortOrder = -this.sortOrder;
    } else {
      this.sortOrder = SortOptions.ASC;
      this.sortBy = option;
    }
    this.getEvents(this.sortBy, this.sortOrder);
  }
}
