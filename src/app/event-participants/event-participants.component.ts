import { Component, OnInit } from '@angular/core';
import { PaginationConfig } from '../types/pagination-config.type';
import { Participant } from '../types/participant.type';
import { EventParticipantsService } from '../services/event-participants.service';
import { ActivatedRoute } from '@angular/router';
import { GetParticipants } from '../types/get-participants.type';

@Component({
  selector: 'app-event-participants',
  templateUrl: './event-participants.component.html',
  styleUrl: './event-participants.component.css',
})
export class EventParticipantsComponent implements OnInit {
  eventId: string | null = null;

  participants: Participant[] = [];
  eventTitle = '';

  searchValue = '';
  searchKey = 'initials';

  paginationConfig: PaginationConfig = {
    itemsPerPage: 12,
    currentPage: 1,
    totalItems: this.participants.length,
  };

  constructor(
    private eventService: EventParticipantsService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.eventId = params['id'];
    });
    this.getParticipants();
  }

  getParticipants() {
    this.eventService
      .getParticipants(this.eventId!, this.searchKey, this.searchValue)
      .subscribe(
        ({ participants, eventTitle }: GetParticipants) => {
          this.participants = participants;
          this.eventTitle = eventTitle;
        },
        (error) => {
          console.error('Error fetching events:', error);
        }
      );
  }

  onSearchClick() {
    this.getParticipants();
  }
}
