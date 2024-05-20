import { Component, OnInit } from '@angular/core';
import { PaginationConfig } from '../types/pagination-config.type';
import { Participant } from '../types/participant.type';
import { EventParticipantsService } from '../services/event-participants.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-event-participants',
  templateUrl: './event-participants.component.html',
  styleUrl: './event-participants.component.css',
})
export class EventParticipantsComponent implements OnInit {
  eventId: string | null = null;

  participants: Participant[] = [];

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
    this.route.paramMap.subscribe((params) => {
      this.eventId = params.get('eventId');
    });

    this.eventService.getParticipants(this.eventId ?? '').subscribe(
      (value: Participant[]) => {
        this.participants = value;
      },
      (error) => {
        console.error('Error fetching events:', error);
      }
    );
  }
}
