import { Component, OnInit } from '@angular/core';
import { Participant } from '../types/participant.type';
import { EventRegistrationService } from '../services/event-registration.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ViewChild, ElementRef } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-event-registration',
  templateUrl: './event-registration.component.html',
  styleUrl: './event-registration.component.css',
})
export class EventRegistrationComponent implements OnInit {
  eventId: string | null = null;

  @ViewChild('errorElement', { static: true }) errorElement!: ElementRef;

  registrationData: Participant = {
    initials: '',
    email: '',
    birth: '',
    hearAbout: '',
  };

  constructor(
    private eventService: EventRegistrationService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.eventId = params['id'];
    });
  }

  onSubmit() {
    const validateString = this.eventService.validateParticipant(
      this.registrationData
    );
    if (!validateString) {
      this.eventService
        .addParticipant(this.eventId!, this.registrationData)
        .subscribe(
          () => {
            this.router.navigate(['/']);
          },
          (error: HttpErrorResponse) => {
            this.errorElement.nativeElement.querySelector(
              '.error-message'
            ).textContent = error.error.message;
            this.errorElement.nativeElement.hidden = false;
          }
        );
    } else {
      this.errorElement.nativeElement.querySelector(
        '.error-message'
      ).textContent = validateString;
      this.errorElement.nativeElement.hidden = false;
    }
  }
}
