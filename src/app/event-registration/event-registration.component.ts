import { Component, OnInit } from '@angular/core';
import { Participant } from '../types/participant.type';
import { EventRegistrationService } from '../services/event-registration.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-event-registration',
  templateUrl: './event-registration.component.html',
  styleUrl: './event-registration.component.css',
})
export class EventRegistrationComponent implements OnInit {
  eventId: string | null = null;

  registrationData: Participant = {
    initials: '',
    email: '',
    birth: new Date(1),
    hearAbout: '',
  };

  constructor(
    private eventService: EventRegistrationService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.eventId = params.get('eventId');
    });
  }

  onSubmit() {
    const validateString = this.eventService.validateParticipant(
      this.registrationData
    );
    if (!validateString) {
      this.eventService.addParticipant(
        this.eventId ?? '',
        this.registrationData
      );
      this.router.navigate(['/']);
    } else {
      alert(validateString); // change later
    }
  }
}
