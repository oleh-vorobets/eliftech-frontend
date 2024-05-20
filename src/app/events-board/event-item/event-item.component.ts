import { Component, Input } from '@angular/core';
import { Event } from '../../types/event.type';

@Component({
  selector: 'app-event-item',
  templateUrl: './event-item.component.html',
  styleUrl: './event-item.component.css',
})
export class EventItemComponent {
  @Input() event: Event | null = null;
}
